/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this, max-len, max-lines-per-function */

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isFunction = require( '@stdlib/assert/is-function' );
var isObject = require( '@stdlib/assert/is-object' );
var isPrototypeOf = require( '@stdlib/assert/is-prototype-of' ); // eslint-disable-line stdlib/no-redeclare
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var hasProp = require( '@stdlib/assert/has-property' );
var contains = require( './../../base/assert/contains' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var ArrayBuffer = require( './../../buffer' );
var Uint8Array = require( './../../uint8' );
var getter = require( './../../base/getter' );
var accessorGetter = require( './../../base/accessor-getter' );
var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;
var structFactory = require( '@stdlib/dstructs/struct' );
var format = require( '@stdlib/string/format' );
var isStructConstructor = require( './is_struct_constructor.js' );
var fromArray = require( './from_array.js' );
var fromIterator = require( './from_iterator.js' );


// VARIABLES //

var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();
var CTOR_NAME = 'StructArray';


// MAIN //

/**
* Returns a constructor for creating arrays having a fixed-width composite data type.
*
* @param {(Function|Array<Object>)} arg - struct constructor or struct schema
* @throws {TypeError} first argument must be either a struct constructor or struct schema
* @returns {Function} constructor
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var structFactory = require( '@stdlib/dstructs/struct' );
*
* var schema1 = [
*     {
*         'name': 're',
*         'type': 'float64'
*     },
*     {
*         'name': 'im',
*         'type': 'float64'
*     }
* ];
*
* // Create a struct constructor for storing real and imaginary componenets:
* var Components = structFactory( schema1 );
*
* var schema2 = [
*     {
*         'type': 'union',
*         'fields': [
*             {
*                 'name': 'value',
*                 'type': 'complex128'
*             },
*             {
*                 'name': 'components',
*                 'type': Components
*             }
*         ]
*     }
* ];
*
* // Create a struct constructor for storing a double-precision complex number:
* var Complex128Struct = structFactory( schema2 );
*
* // Create an array constructor for storing complex numbers:
* var Complex128Array = factory( Complex128Struct );
*
* // Create a new array:
* var x = new Complex128Array( 10 );
* // returns <StructArray>
*
* // Retrieve the first element:
* var v1 = x.get( 0 );
*
* // Resolve the complex number stored within the first element:
* var z1 = v1.value;
* // returns <Complex128>[ 0.0, 0.0 ]
*
* // Resolve the individual real and imaginary components:
* var z2 = v1.components;
*
* var re = z2.re;
* // returns 0.0
*
* var im = z2.im;
* // returns 0.0
*
* // Create a new complex number struct:
* var z3 = new Complex128Struct({
*     'value': new Complex128( 3.0, 5.0 )
* });
*
* // Update the first element of the array:
* x.set( z3, 0 );
*
* // As `v1` is a view on same memory as the first element, resolve the complex number stored within the element:
* var z4 = v1.value;
* // returns <Complex128>[ 3.0, 5.0 ]
*/
function factory( arg ) { // eslint-disable-line stdlib/jsdoc-require-throws-tags
	var BYTES_PER_ELEMENT;
	var LAYOUT;
	var FIELDS;
	var Struct;

	// FIXME: add option support for strict input object validation (e.g., throw whenever non-struct properties are included on an object passed to `set`)

	if ( isCollection( arg ) ) {
		Struct = structFactory( arg ); // NOTE: delegate to `structFactory` to perform input validation
	} else if ( isStructConstructor( arg ) ) {
		Struct = arg;
	} else {
		throw new TypeError( format( 'invalid argument. First argument must be either a struct constructor or struct schema. Value: `%s`.', arg ) );
	}
	BYTES_PER_ELEMENT = Struct.byteLength;
	LAYOUT = Struct.layout; // TODO: consider whether to lazily materialize the struct layout, as this could potentially be a long string (hence increased memory consumption) depending on the complexity of the struct
	FIELDS = Struct.fields;

	/**
	* Constructor which returns an array having a fixed-width composite data type.
	*
	* @private
	* @constructor
	* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or an iterable
	* @param {NonNegativeInteger} [byteOffset=0] - byte offset
	* @param {NonNegativeInteger} [length] - view length
	* @throws {TypeError} must provide a valid first argument
	* @throws {TypeError} second argument must be a nonnegative integer
	* @throws {TypeError} third argument must be a nonnegative integer
	* @throws {RangeError} must provide sufficient memory to accommodate byte offset and view length requirements
	* @throws {RangeError} second argument must be a multiple of struct byte length
	* @throws {RangeError} second argument must not exceeds the ArrayBuffer bounds
	* @throws {TypeError} view length must be a positive multiple of struct byte length
	* @throws {TypeError} an input array must contain valid elements
	* @returns {StructArray} struct array instance
	*/
	function StructArray( arg, byteOffset, length ) {
		var nargs;
		var buf;
		var len;
		var tmp;

		nargs = arguments.length;
		if ( !( this instanceof StructArray) ) {
			if ( nargs === 0 ) {
				return new StructArray();
			}
			if ( nargs === 1 ) {
				return new StructArray( arg );
			}
			if ( nargs === 2 ) {
				return new StructArray( arg, byteOffset );
			}
			return new StructArray( arg, byteOffset, length );
		}

		// Case: new StructArray()
		if ( nargs === 0 ) {
			buf = new ArrayBuffer( 0 );
			len = 0;
		}
		// Case: new StructArray( arg )
		else if ( nargs === 1 ) {
			// Case: new StructArray( length )
			if ( isNonNegativeInteger( arg ) ) {
				buf = new ArrayBuffer( arg*BYTES_PER_ELEMENT );
				len = arg;
			}
			// Case: new StructArray( collection )
			else if ( isCollection( arg ) ) {
				len = arg.length;
				buf = fromArray( Struct, new ArrayBuffer( len*BYTES_PER_ELEMENT ), arg );
				if ( buf === null ) {
					throw new TypeError( format( 'invalid argument. Each element of a provided input array must be a valid object or a struct instance having the same layout as elements in the desired output array.' ) );
				}
			}
			// Case: new StructArray( ArrayBuffer )
			else if ( isArrayBuffer( arg ) ) {
				buf = arg;
				len = buf.byteLength / BYTES_PER_ELEMENT;
				if ( !isInteger( len ) ) {
					throw new RangeError( format( 'invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.', BYTES_PER_ELEMENT, buf.byteLength ) );
				}
			}
			// Case: new StructArray( iterable )
			else if ( isObject( arg ) ) {
				if ( HAS_ITERATOR_SYMBOL === false ) {
					throw new TypeError( format( 'invalid argument. Environment lacks Symbol.iterator support. First argument must be a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.', arg ) );
				}
				if ( !isFunction( arg[ ITERATOR_SYMBOL ] ) ) {
					throw new TypeError( format( 'invalid argument. First argument must be a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
				}
				buf = arg[ ITERATOR_SYMBOL ]();
				if ( !isFunction( buf.next ) ) {
					throw new TypeError( format( 'invalid argument. First argument must be a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
				}
				tmp = fromIterator( buf );
				len = tmp.length;
				buf = fromArray( Struct, new ArrayBuffer( len*BYTES_PER_ELEMENT ), tmp );
				if ( buf === null ) {
					throw new TypeError( format( 'invalid argument. Each element of a provided input iterable must be either a valid object or a struct instance having the same layout as elements in the desired output array.' ) );
				}
			}
			// Case: new StructArray( ???? )
			else {
				throw new TypeError( format( 'invalid argument. First argument must be a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
			}
		}
		// Case: new StructArray( ArrayBuffer, byteOffset[, length] )
		else {
			buf = arguments[ 0 ];
			if ( !isArrayBuffer( buf ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be an ArrayBuffer. Value: `%s`.', arg ) );
			}
			if ( !isNonNegativeInteger( byteOffset ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', byteOffset ) );
			}
			if ( !isInteger( byteOffset/BYTES_PER_ELEMENT ) ) {
				throw new RangeError( format( 'invalid argument. Second argument must be a multiple of %u. Value: `%u`.', BYTES_PER_ELEMENT, byteOffset ) );
			}
			if ( byteOffset >= buf.byteLength ) {
				throw new RangeError( format( 'invalid argument. Second argument exceeds the bounds of the ArrayBuffer. Value: `%s`.', byteOffset ) );
			}
			// Case: new StructArray( ArrayBuffer, byteOffset )
			if ( nargs === 2 ) {
				len = ( buf.byteLength - byteOffset ) / BYTES_PER_ELEMENT;
				if ( !isInteger( len ) ) {
					throw new RangeError( format( 'invalid argument. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.', BYTES_PER_ELEMENT, buf.byteLength-byteOffset ) );
				}
			}
			// Case: new StructArray( ArrayBuffer, byteOffset, length )
			else {
				len = length;
				if ( !isNonNegativeInteger( len ) ) {
					throw new TypeError( format( 'invalid argument. Third argument must be a nonnegative integer. Value: `%s`.', len ) );
				}
				if ( (len*BYTES_PER_ELEMENT) > (buf.byteLength-byteOffset) ) {
					throw new RangeError( format( 'invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.', len*BYTES_PER_ELEMENT ) );
				}
			}
		}
		setReadOnly( this, '_buffer', buf );
		setReadOnly( this, '_byteOffset', byteOffset || 0 );
		setReadOnly( this, '_byteLength', len*BYTES_PER_ELEMENT );
		setReadOnly( this, '_length', len );
		return this;
	}

	/**
	* Size (in bytes) of each array element.
	*
	* @private
	* @name BYTES_PER_ELEMENT
	* @memberof StructArray
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( StructArray, 'BYTES_PER_ELEMENT', BYTES_PER_ELEMENT );

	/**
	* Constructor name.
	*
	* @private
	* @name name
	* @memberof StructArray
	* @readonly
	* @type {string}
	*/
	setReadOnly( StructArray, 'name', CTOR_NAME );

	/**
	* Element constructor.
	*
	* @private
	* @name struct
	* @memberof StructArray
	* @readonly
	* @type {Function}
	*/
	setReadOnly( StructArray, 'struct', Struct );

	/**
	* Pointer to the underlying data buffer.
	*
	* @private
	* @name buffer
	* @memberof StructArray.prototype
	* @readonly
	* @type {ArrayBuffer}
	*/
	setReadOnlyAccessor( StructArray.prototype, 'buffer', function get() {
		return this._buffer;
	});

	/**
	* Size (in bytes) of the array.
	*
	* @private
	* @name byteLength
	* @memberof StructArray.prototype
	* @readonly
	* @type {NonNegativeInteger}
	*/
	setReadOnlyAccessor( StructArray.prototype, 'byteLength', function get() {
		return this._byteLength;
	});

	/**
	* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
	*
	* @private
	* @name byteOffset
	* @memberof StructArray.prototype
	* @readonly
	* @type {NonNegativeInteger}
	*/
	setReadOnlyAccessor( StructArray.prototype, 'byteOffset', function get() {
		return this._byteOffset;
	});

	/**
	* Size (in bytes) of each array element.
	*
	* @private
	* @name BYTES_PER_ELEMENT
	* @memberof StructArray.prototype
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( StructArray.prototype, 'BYTES_PER_ELEMENT', StructArray.BYTES_PER_ELEMENT );

	/**
	* Returns an array element.
	*
	* @private
	* @name get
	* @memberof StructArray.prototype
	* @type {Function}
	* @param {NonNegativeInteger} idx - element index
	* @throws {TypeError} `this` must be a struct array instance
	* @throws {TypeError} must provide a nonnegative integer
	* @returns {(*|void)} array element
	*/
	setReadOnly( StructArray.prototype, 'get', function get( idx ) {
		if ( !isStructArray( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not a %s.', CTOR_NAME ) );
		}
		if ( !isNonNegativeInteger( idx ) ) {
			throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', idx ) );
		}
		if ( idx >= this._length ) {
			return;
		}
		return new Struct( this._buffer, this._byteOffset+( idx*BYTES_PER_ELEMENT ), BYTES_PER_ELEMENT );
	});

	/**
	* Number of array elements.
	*
	* @private
	* @name length
	* @memberof StructArray.prototype
	* @readonly
	* @type {NonNegativeInteger}
	*/
	setReadOnlyAccessor( StructArray.prototype, 'length', function get() {
		return this._length;
	});

	/**
	* Sets an array element.
	*
	* ## Notes
	*
	* -   When provided a struct array, we must check whether the source array shares the same buffer as the target array and whether the underlying memory overlaps. In particular, we are concerned with the following scenario:
	*
	*     ```text
	*     buf:                ---------------------
	*     src: ---------------------
	*     ```
	*
	*     In the above, as we copy values from `src`, we will overwrite values in the `src` view, resulting in duplicated values copied into the end of `buf`, which is not intended. Hence, to avoid overwriting source values, we must **copy** source values to a temporary array.
	*
	*     In the other overlapping scenario,
	*
	*     ```text
	*     buf: ---------------------
	*     src:                ---------------------
	*     ```
	*
	*     by the time we begin copying into the overlapping region, we are copying from the end of `src`, a non-overlapping region, which means we don't run the risk of copying copied values, rather than the original `src` values, as intended.
	*
	* @private
	* @name set
	* @memberof StructArray.prototype
	* @type {Function}
	* @param {(Collection|StructArray|Struct|Object)} value - value(s)
	* @param {NonNegativeInteger} [i=0] - element index at which to start writing values
	* @throws {TypeError} `this` must be a struct array instance
	* @throws {TypeError} index argument must be a nonnegative integer
	* @throws {RangeError} index argument is out-of-bounds
	* @throws {RangeError} target array lacks sufficient storage to accommodate source values
	* @throws {TypeError} must provide a valid object or a struct instance having the same layout as elements in the target array
	* @returns {void}
	*/
	setReadOnly( StructArray.prototype, 'set', function set( value ) {
		var bbytes;
		var sbytes;
		var sbuf;
		var opts;
		var idx;
		var buf;
		var tmp;
		var get;
		var nb;
		var N;
		var s;
		var f;
		var i;
		var j;
		if ( !isStructArray( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not a %s.', CTOR_NAME ) );
		}
		buf = this._buffer;
		if ( arguments.length > 1 ) {
			idx = arguments[ 1 ];
			if ( !isNonNegativeInteger( idx ) ) {
				throw new TypeError( format( 'invalid argument. Index argument must be a nonnegative integer. Value: `%s`.', idx ) );
			}
		} else {
			idx = 0;
		}
		opts = {
			'format': 'layout'
		};
		nb = Struct.byteLength;

		if ( isCollection( value ) && !contains( FIELDS, 'length' ) ) { // note: when one of the fields is 'length', we always assume that a provided value with a 'length' property is a struct and/or data object as there doesn't seem to be a surefire way to distinguish such an object from a regular array-like object (including accessor arrays)
			N = value.length;
			if ( idx+N > this._length ) {
				throw new RangeError( 'invalid arguments. Target array lacks sufficient storage to accommodate source values.' );
			}
			sbuf = value;
			if ( sbuf.get && sbuf.set ) {
				get = accessorGetter( 'default' );
			} else {
				get = getter( 'default' );
			}
			// Check for overlapping memory...
			j = this._byteOffset + (idx*BYTES_PER_ELEMENT);
			if (
				sbuf.buffer === buf &&
				(
					sbuf.byteOffset < j &&
					sbuf.byteOffset+sbuf.byteLength > j
				)
			) {
				// FIXME: add optimization when `value` is a StructArray sharing the same buffer and having the same layout; in which case, we can simply copy `src` bytes to a temporary array and then copy those bytes into the target array, without needing to intermediate struct instance materialization

				// We need to copy source values...
				tmp = [];
				for ( i = 0; i < N; i++ ) {
					tmp.push( get( value, i ) );
				}
				sbuf = tmp;
				get = getter( 'default' );
			}
			for ( i = 0; i < N; idx++, i++ ) {
				this.set( get( sbuf, i ), idx ); // note: this likely isn't the most performant approach, but it avoids having to replicate branching logic for handling struct instances vs data objects
			}
			return;
		}
		if ( idx >= this._length ) {
			throw new RangeError( format( 'invalid argument. Index argument is out-of-bounds. Value: `%u`.', idx ) );
		}
		if ( !isObject( value ) ) {
			throw new TypeError( format( 'invalid argument. Must provide either a valid object or a struct instance. Value: `%s`.', value ) );
		}
		// Check for a struct instance having a matching layout...
		if ( value.toString( opts ) === LAYOUT ) {
			// Explicitly copy the bytes of the input struct instance to the corresponding array element...
			sbuf = Struct.viewOf( value );
			sbytes = new Uint8Array( sbuf.buffer, sbuf.byteOffset, nb );
			bbytes = new Uint8Array( buf, this._byteOffset+( idx*BYTES_PER_ELEMENT ), nb );
			gcopy( nb, sbytes, 1, 0, bbytes, 1, 0 );
			return;
		}
		// Create a struct instance view for the target element:
		s = new Struct( buf, this._byteOffset+( idx*BYTES_PER_ELEMENT ), nb );

		// Assign field values from the input object (accounting for both own and inherited properties)...
		for ( i = 0; i < FIELDS.length; i++ ) {
			f = FIELDS[ i ];
			if ( hasProp( value, f ) ) {
				s[ f ] = value[ f ];
			}
		}
	});

	/**
	* Element constructor.
	*
	* @private
	* @name struct
	* @memberof StructArray.prototype
	* @readonly
	* @type {Function}
	*/
	setReadOnly( StructArray.prototype, 'struct', Struct );

	return StructArray;

	/**
	* Returns a boolean indicating if a value is a struct array.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a struct array
	*/
	function isStructArray( value ) {
		return (
			typeof value === 'object' &&
			value !== null &&
			(
				value.constructor.name === CTOR_NAME ||
				isPrototypeOf( value, StructArray.prototype )
			) &&
			value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT
		);
	}
}


// EXPORTS //

module.exports = factory;
