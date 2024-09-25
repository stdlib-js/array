/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/* eslint-disable max-len, no-restricted-syntax, no-invalid-this, max-lines */

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isByteOrder = require( './../../base/assert/is-byte-order' );
var lowercase = require( '@stdlib/string/base/lowercase' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isPrototypeOf = require( '@stdlib/assert/is-prototype-of' ); // eslint-disable-line stdlib/no-redeclare
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var ArrayBuffer = require( './../../buffer' );
var DataView = require( './../../dataview' );
var getter = require( './../../base/getter' );
var accessorGetter = require( './../../base/accessor-getter' );
var contains = require( './../../base/assert/contains' ).factory;
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var capitalize = require( '@stdlib/string/base/capitalize' );
var format = require( '@stdlib/string/format' );
var fromIterator = require( './from_iterator.js' );
var fromIteratorMap = require( './from_iterator_map.js' );


// VARIABLES //

var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();
var DTYPES = [ 'float64', 'float32', 'int32', 'int16', 'uint32', 'uint16' ];
var DTYPE2SET = {
	'float64': 'setFloat64',
	'float32': 'setFloat32',
	'int32': 'setInt32',
	'int16': 'setInt16',
	'uint32': 'setUint32',
	'uint16': 'setUint16'
};
var DTYPE2GET = {
	'float64': 'getFloat64',
	'float32': 'getFloat32',
	'int32': 'getInt32',
	'int16': 'getInt16',
	'uint32': 'getUint32',
	'uint16': 'getUint16'
};
var CHAR2ARTICLE = {
	'c': 'a',
	'f': 'a',
	'i': 'an',
	'u': 'a',
	'b': 'a'
};
var isDataType = contains( DTYPES );


// FUNCTIONS //

/**
* Normalizes a byte order value.
*
* @private
* @param {*} value - byte order
* @returns {(string|null)} normalized byte order
*/
function byteOrder( value ) {
	return ( isString( value ) ) ? lowercase( value ) : null;
}

/**
* Tests whether a provided byte order is little-endian byte order.
*
* @private
* @param {string} value - byte order
* @returns {boolean} boolean indicating whether a byte order is little-endian byte order
*/
function isLittleEndian( value ) {
	return ( value === 'little-endian' );
}

/**
* Converts a data type string to a constructor name.
*
* @private
* @param {string} dtype - data type
* @returns {string} constructor name
*
* @example
* var n = dtype2ctor( 'float64' );
* // returns 'Float64ArrayFE'
*
* @example
* var n = dtype2ctor( 'int32' );
* // returns 'Int32ArrayFE'
*/
function dtype2ctor( dtype ) {
	return capitalize( dtype ) + 'ArrayFE';
}


// MAIN //

/**
* Returns a typed array constructor for creating typed arrays having a specified byte order.
*
* @param {string} dtype - typed array data type
* @throws {TypeError} first argument must be a supported data type
* @returns {Function} typed array constructor
*
* @example
* var Float64ArrayFE = factory( 'float64' );
*
* var arr = new Float64ArrayFE( 'little-endian' );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 0
*
* @example
* var Float64ArrayFE = factory( 'float64' );
*
* var arr = new Float64ArrayFE( 'little-endian', 2 );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var Float64ArrayFE = factory( 'float64' );
*
* var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0 ] );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64ArrayFE( 'little-endian', buf );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64ArrayFE( 'little-endian', buf, 8 );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Float64ArrayFE( 'little-endian', buf, 8, 2 );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 2
*/
function factory( dtype ) { // eslint-disable-line max-lines-per-function, stdlib/jsdoc-require-throws-tags
	var BYTES_PER_ELEMENT;
	var CTOR_NAME;
	var GETTER;
	var SETTER;

	if ( !isDataType( dtype ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a supported data type. Value: `%s`.', dtype ) );
	}
	BYTES_PER_ELEMENT = bytesPerElement( dtype );
	CTOR_NAME = dtype2ctor( dtype );
	GETTER = DTYPE2GET[ dtype ];
	SETTER = DTYPE2SET[ dtype ];

	/**
	* Typed array constructor which returns a typed array representing an array of values in a specified byte order.
	*
	* @private
	* @constructor
	* @param {string} endianness - byte order
	* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or an iterable
	* @param {NonNegativeInteger} [byteOffset=0] - byte offset
	* @param {NonNegativeInteger} [length] - view length
	* @throws {TypeError} first argument must be a supported byte order
	* @throws {TypeError} if provided only two arguments, the second argument must be a valid argument
	* @throws {TypeError} byte offset must be a nonnegative integer
	* @throws {RangeError} must provide sufficient memory to accommodate byte offset and view length requirements
	* @returns {TypedArray} typed array instance
	*/
	function TypedArray() {
		var byteOffset;
		var endianness;
		var nargs;
		var isLE;
		var buf;
		var len;
		var arg;
		var tmp;

		nargs = arguments.length;
		if ( !(this instanceof TypedArray) ) {
			if ( nargs < 2 ) {
				return new TypedArray( arguments[0] );
			}
			if ( nargs === 2 ) {
				return new TypedArray( arguments[0], arguments[1] );
			}
			if ( nargs === 3 ) {
				return new TypedArray( arguments[0], arguments[1], arguments[2] );
			}
			return new TypedArray( arguments[0], arguments[1], arguments[2], arguments[3] );
		}
		endianness = byteOrder( arguments[ 0 ] );
		if ( endianness === null || !isByteOrder( endianness ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a supported byte order. Value: `%s`.', arguments[ 0 ] ) );
		}
		isLE = isLittleEndian( endianness );

		nargs -= 1;

		// Create the underlying data buffer...
		if ( nargs === 0 ) {
			buf = new DataView( new ArrayBuffer( 0 ) ); // backward-compatibility
		} else if ( nargs === 1 ) {
			arg = arguments[ nargs ];
			if ( isNonNegativeInteger( arg ) ) {
				buf = new DataView( new ArrayBuffer( arg*BYTES_PER_ELEMENT ) );
			} else if ( isCollection( arg ) ) {
				buf = fromArray( new DataView( new ArrayBuffer( arg.length*BYTES_PER_ELEMENT ) ), arg, isLE );
			} else if ( isArrayBuffer( arg ) ) {
				buf = new DataView( arg );
			} else if ( isObject( arg ) ) {
				if ( HAS_ITERATOR_SYMBOL === false ) {
					throw new TypeError( format( 'invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.', arg ) );
				}
				if ( !isFunction( arg[ ITERATOR_SYMBOL ] ) ) {
					throw new TypeError( format( 'invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
				}
				buf = arg[ ITERATOR_SYMBOL ]();
				if ( !isFunction( buf.next ) ) {
					throw new TypeError( format( 'invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
				}
				tmp = fromIterator( buf );
				buf = fromArray( new DataView( new ArrayBuffer( tmp.length*BYTES_PER_ELEMENT ) ), tmp, isLE );
			} else {
				throw new TypeError( format( 'invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
			}
		} else {
			buf = arguments[ 1 ];
			if ( !isArrayBuffer( buf ) ) {
				throw new TypeError( format( 'invalid argument. Must provide an ArrayBuffer. Value: `%s`.', buf ) );
			}
			byteOffset = arguments[ 2 ];
			if ( !isNonNegativeInteger( byteOffset ) ) {
				throw new TypeError( format( 'invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.', byteOffset ) );
			}
			if ( nargs === 2 ) {
				buf = new DataView( buf, byteOffset );
			} else {
				len = arguments[ 3 ];
				if ( !isNonNegativeInteger( len ) ) {
					throw new TypeError( format( 'invalid argument. Length must be a nonnegative integer. Value: `%s`.', len ) );
				}
				len *= BYTES_PER_ELEMENT;
				if ( len > (buf.byteLength-byteOffset) ) {
					throw new RangeError( format( 'invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.', len ) );
				}
				buf = new DataView( buf, byteOffset, len );
			}
		}
		setReadOnly( this, '_buffer', buf );
		setReadOnly( this, '_length', buf.byteLength/BYTES_PER_ELEMENT );
		setReadOnly( this, '_isLE', isLE );

		return this;
	}

	/**
	* Size (in bytes) of each array element.
	*
	* @private
	* @name BYTES_PER_ELEMENT
	* @memberof TypedArray
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( TypedArray, 'BYTES_PER_ELEMENT', BYTES_PER_ELEMENT );

	/**
	* Constructor name.
	*
	* @private
	* @name name
	* @memberof TypedArray
	* @readonly
	* @type {string}
	*/
	setReadOnly( TypedArray, 'name', CTOR_NAME );

	/**
	* Creates a new typed array from an array-like object or an iterable.
	*
	* @private
	* @name from
	* @memberof TypedArray
	* @type {Function}
	* @param {string} endianness - byte order
	* @param {(Collection|Iterable)} src - array-like object or iterable
	* @param {Function} [clbk] - callback to invoke for each source element
	* @param {*} [thisArg] - context
	* @throws {TypeError} `this` context must be a constructor
	* @throws {TypeError} `this` must be a typed array constructor
	* @throws {TypeError} first argument must be a supported byte order
	* @throws {TypeError} second argument must be an array-like object or an iterable
	* @throws {TypeError} third argument must be a function
	* @returns {TypedArray} typed array instance
	*/
	setReadOnly( TypedArray, 'from', function from( endianness, src ) {
		var thisArg;
		var order;
		var nargs;
		var clbk;
		var isLE;
		var out;
		var buf;
		var tmp;
		var get;
		var len;
		var i;
		if ( !isFunction( this ) ) {
			throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
		}
		if ( !isTypedArrayConstructor( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not %s %s.', CHAR2ARTICLE[ dtype[0] ], CTOR_NAME ) );
		}
		order = byteOrder( endianness );
		if ( order === null || !isByteOrder( order ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a supported byte order. Value: `%s`.', endianness ) );
		}
		isLE = isLittleEndian( order );

		nargs = arguments.length;
		if ( nargs > 2 ) {
			clbk = arguments[ 2 ];
			if ( !isFunction( clbk ) ) {
				throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', clbk ) );
			}
			if ( nargs > 3 ) {
				thisArg = arguments[ 3 ];
			}
		}
		if ( isCollection( src ) ) {
			if ( clbk ) {
				len = src.length;
				if ( src.get && src.set ) {
					get = accessorGetter( 'default' );
				} else {
					get = getter( 'default' );
				}
				out = new this( order, len );
				buf = out._buffer; // eslint-disable-line no-underscore-dangle
				for ( i = 0; i < len; i++ ) {
					buf[ SETTER ]( i*BYTES_PER_ELEMENT, clbk.call( thisArg, get( src, i ), i ), isLE );
				}
				return out;
			}
			return new this( order, src );
		}
		if ( isObject( src ) && HAS_ITERATOR_SYMBOL && isFunction( src[ ITERATOR_SYMBOL ] ) ) {
			buf = src[ ITERATOR_SYMBOL ]();
			if ( !isFunction( buf.next ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be an array-like object or an iterable. Value: `%s`.', src ) );
			}
			if ( clbk ) {
				tmp = fromIteratorMap( buf, clbk, thisArg );
			} else {
				tmp = fromIterator( buf );
			}
			len = tmp.length;
			out = new this( order, len );
			buf = out._buffer; // eslint-disable-line no-underscore-dangle
			for ( i = 0; i < len; i++ ) {
				buf[ SETTER ]( i*BYTES_PER_ELEMENT, tmp[ i ], isLE );
			}
			return out;
		}
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object or an iterable. Value: `%s`.', src ) );
	});

	/**
	* Creates a new typed array from a variable number of arguments.
	*
	* @private
	* @name of
	* @memberof TypedArray
	* @type {Function}
	* @param {string} endianness - byte order
	* @param {...*} element - array elements
	* @throws {TypeError} `this` context must be a constructor
	* @throws {TypeError} `this` must be a typed array constructor
	* @throws {TypeError} first argument must be a supported byte order
	* @returns {TypedArray} typed array instance
	*/
	setReadOnly( TypedArray, 'of', function of( endianness ) {
		var order;
		var args;
		var i;
		if ( !isFunction( this ) ) {
			throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
		}
		if ( !isTypedArrayConstructor( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not %s %s.', CHAR2ARTICLE[ dtype[0] ], CTOR_NAME ) );
		}
		order = byteOrder( endianness );
		if ( order === null || !isByteOrder( order ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a supported byte order. Value: `%s`.', endianness ) );
		}
		args = [];
		for ( i = 1; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return new this( order, args );
	});

	/**
	* Pointer to the underlying data buffer.
	*
	* @private
	* @name buffer
	* @memberof TypedArray.prototype
	* @readonly
	* @type {ArrayBuffer}
	*/
	setReadOnlyAccessor( TypedArray.prototype, 'buffer', function get() {
		return this._buffer.buffer;
	});

	/**
	* Size (in bytes) of the array.
	*
	* @private
	* @name byteLength
	* @memberof TypedArray.prototype
	* @readonly
	* @type {NonNegativeInteger}
	*/
	setReadOnlyAccessor( TypedArray.prototype, 'byteLength', function get() {
		return this._buffer.byteLength;
	});

	/**
	* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
	*
	* @private
	* @name byteOffset
	* @memberof TypedArray.prototype
	* @readonly
	* @type {NonNegativeInteger}
	*/
	setReadOnlyAccessor( TypedArray.prototype, 'byteOffset', function get() {
		return this._buffer.byteOffset;
	});

	/**
	* Size (in bytes) of each array element.
	*
	* @private
	* @name BYTES_PER_ELEMENT
	* @memberof TypedArray.prototype
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( TypedArray.prototype, 'BYTES_PER_ELEMENT', TypedArray.BYTES_PER_ELEMENT );

	/**
	* Returns an array element.
	*
	* @private
	* @name get
	* @memberof TypedArray.prototype
	* @type {Function}
	* @param {NonNegativeInteger} idx - element index
	* @throws {TypeError} `this` must be a typed array instance
	* @throws {TypeError} must provide a nonnegative integer
	* @returns {(*|void)} array element
	*/
	setReadOnly( TypedArray.prototype, 'get', function get( idx ) {
		if ( !isTypedArray( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not %s %s.', CHAR2ARTICLE[ dtype[0] ], CTOR_NAME ) );
		}
		if ( !isNonNegativeInteger( idx ) ) {
			throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', idx ) );
		}
		if ( idx >= this._length ) {
			return;
		}
		return this._buffer[ GETTER ]( idx*BYTES_PER_ELEMENT, this._isLE );
	});

	/**
	* Number of array elements.
	*
	* @private
	* @name length
	* @memberof TypedArray.prototype
	* @readonly
	* @type {NonNegativeInteger}
	*/
	setReadOnlyAccessor( TypedArray.prototype, 'length', function get() {
		return this._length;
	});

	/**
	* Sets an array element.
	*
	* ## Notes
	*
	* -   When provided a typed array, we must check whether the source array shares the same buffer as the target array and whether the underlying memory overlaps. In particular, we are concerned with the following scenario:
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
	* @memberof TypedArray.prototype
	* @type {Function}
	* @param {(Collection|TypedArray|*)} value - value(s)
	* @param {NonNegativeInteger} [i=0] - element index at which to start writing values
	* @throws {TypeError} `this` must be a typed array instance
	* @throws {TypeError} index argument must be a nonnegative integer
	* @throws {RangeError} index argument is out-of-bounds
	* @throws {RangeError} target array lacks sufficient storage to accommodate source values
	* @returns {void}
	*/
	setReadOnly( TypedArray.prototype, 'set', function set( value ) {
		var sbuf;
		var idx;
		var buf;
		var tmp;
		var get;
		var N;
		var i;
		var j;
		if ( !isTypedArray( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not %s %s.', CHAR2ARTICLE[ dtype[0] ], CTOR_NAME ) );
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
		if ( isCollection( value ) ) {
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
			j = buf.byteOffset + (idx*BYTES_PER_ELEMENT);
			if (
				sbuf.buffer === buf.buffer &&
				(
					sbuf.byteOffset < j &&
					sbuf.byteOffset+sbuf.byteLength > j
				)
			) {
				// We need to copy source values...
				tmp = [];
				for ( i = 0; i < value.length; i++ ) {
					tmp.push( get( value, i ) );
				}
				sbuf = tmp;
				get = getter( 'default' );
			}
			for ( i = 0; i < N; idx++, i++ ) {
				buf[ SETTER ]( idx*BYTES_PER_ELEMENT, get( sbuf, i ), this._isLE );
			}
			return;
		}
		if ( idx >= this._length ) {
			throw new RangeError( format( 'invalid argument. Index argument is out-of-bounds. Value: `%u`.', idx ) );
		}
		buf[ SETTER ]( idx*BYTES_PER_ELEMENT, value, this._isLE );
	});

	/**
	* Serializes an array as a string.
	*
	* @private
	* @name toString
	* @memberof TypedArray.prototype
	* @type {Function}
	* @throws {TypeError} `this` must be a typed array instance
	* @returns {string} string representation
	*/
	setReadOnly( TypedArray.prototype, 'toString', function toString() {
		var out;
		var buf;
		var i;
		if ( !isTypedArray( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not %s %s.', CHAR2ARTICLE[ dtype[0] ], CTOR_NAME ) );
		}
		out = [];
		buf = this._buffer;
		for ( i = 0; i < this._length; i++ ) {
			out.push( buf[ GETTER ]( i*BYTES_PER_ELEMENT, this._isLE ) );
		}
		return out.join( ',' );
	});

	return TypedArray;

	/**
	* Returns a boolean indicating if a value is a typed array constructor.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a typed array constructor
	*/
	function isTypedArrayConstructor( value ) {
		return ( value === TypedArray );
	}

	/**
	* Returns a boolean indicating if a value is a typed array.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a typed array
	*/
	function isTypedArray( value ) {
		return (
			typeof value === 'object' &&
			value !== null &&
			(
				value.constructor.name === CTOR_NAME ||
				isPrototypeOf( value, TypedArray.prototype )
			) &&
			value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT
		);
	}

	/**
	* Fills an output DataView with array values.
	*
	* @private
	* @param {DataView} view - output data view
	* @param {Array} arr - input array
	* @param {boolean} isLE - boolean indicating whether to store values in little-endian byte order
	* @returns {DataView} output data view
	*/
	function fromArray( view, arr, isLE ) {
		var len;
		var get;
		var i;

		len = arr.length;
		if ( arr.get && arr.set ) {
			get = accessorGetter( 'default' );
		} else {
			get = getter( 'default' );
		}
		for ( i = 0; i < len; i++ ) {
			view[ SETTER ]( i*BYTES_PER_ELEMENT, get( arr, i ), isLE );
		}
		return view;
	}
}


// EXPORTS //

module.exports = factory;
