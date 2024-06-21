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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var Uint8Array = require( './../../uint8' );
var Boolean = require( '@stdlib/boolean/ctor' );
var getter = require( './../../base/getter' );
var floor = require( '@stdlib/math/base/special/floor' );
var accessorGetter = require( './../../base/accessor-getter' );
var format = require( '@stdlib/string/format' );
var fromIterator = require( './from_iterator.js' );
var fromIteratorMap = require( './from_iterator_map.js' );
var fromArray = require( './from_array.js' );


// VARIABLES //

var BYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT;
var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();


// FUNCTIONS //

/**
* Returns a boolean indicating if a value is a `BooleanArray`.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a `BooleanArray`
*/
function isBooleanArray( value ) {
	return (
		typeof value === 'object' &&
		value !== null &&
		value.constructor.name === 'BooleanArray' &&
		value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT
	);
}

/**
* Returns a boolean indicating if a value is a boolean typed array constructor.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a boolean typed array constructor
*/
function isBooleanArrayConstructor( value ) {
	return ( value === BooleanArray);
}


// MAIN //

/**
* Boolean array constructor.
*
* @constructor
* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or an iterable
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @throws {TypeError} if provided only a single argument, must provide a valid argument
* @throws {TypeError} byte offset must be a nonnegative integer
* @throws {RangeError} must provide sufficient memory to accommodate byte offset and view length requirements
* @returns {BooleanArray} boolean array
*
* @example
* var arr = new BooleanArray();
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 0
*
* @example
* var arr = new BooleanArray( 2 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*
* @example
* var arr = new BooleanArray( [ true, false ] );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new BooleanArray( buf );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 16
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new BooleanArray( buf, 8 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 8
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new BooleanArray( buf, 8, 2 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*/
function BooleanArray() {
	var byteOffset;
	var nargs;
	var buf;
	var len;
	var arg;

	nargs = arguments.length;
	if ( !(this instanceof BooleanArray) ) {
		if ( nargs === 0 ) {
			return new BooleanArray();
		}
		if ( nargs === 1 ) {
			return new BooleanArray( arguments[0] );
		}
		if ( nargs === 2 ) {
			return new BooleanArray( arguments[0], arguments[1] );
		}
		return new BooleanArray( arguments[0], arguments[1], arguments[2] );
	}
	// Create the underlying data buffer...
	if ( nargs === 0 ) {
		buf = new Uint8Array( 0 ); // backward-compatibility
	} else if ( nargs === 1 ) {
		arg = arguments[ 0 ];
		if ( isNonNegativeInteger( arg ) ) {
			buf = new Uint8Array( arg );
		} else if ( isCollection( arg ) ) {
			buf = fromArray( new Uint8Array( arg.length ), arg );
		} else if ( isArrayBuffer( arg ) ) {
			buf = new Uint8Array( arg );
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
			buf = new Uint8Array( fromIterator( buf ) );
		} else {
			throw new TypeError( format( 'invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
		}
	} else {
		buf = arguments[ 0 ];
		if ( !isArrayBuffer( buf ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an ArrayBuffer. Value: `%s`.', buf ) );
		}
		byteOffset = arguments[ 1 ];
		if ( !isNonNegativeInteger( byteOffset ) ) {
			throw new TypeError( format( 'invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.', byteOffset ) );
		}
		if ( nargs === 2 ) {
			buf = new Uint8Array( buf, byteOffset );
		} else {
			len = arguments[ 2 ];
			if ( !isNonNegativeInteger( len ) ) {
				throw new TypeError( format( 'invalid argument. Length must be a nonnegative integer. Value: `%s`.', len ) );
			}
			if ( (len*BYTES_PER_ELEMENT) > (buf.byteLength-byteOffset) ) {
				throw new RangeError( format( 'invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.', len*BYTES_PER_ELEMENT ) );
			}
			buf = new Uint8Array( buf, byteOffset, len );
		}
	}
	setReadOnly( this, '_buffer', buf );
	setReadOnly( this, '_length', buf.length );

	return this;
}

/**
* Size (in bytes) of each array element.
*
* @name BYTES_PER_ELEMENT
* @memberof BooleanArray
* @readonly
* @type {PositiveInteger}
* @default 1
*
* @example
* var nbytes = BooleanArray.BYTES_PER_ELEMENT;
* // returns 1
*/
setReadOnly( BooleanArray, 'BYTES_PER_ELEMENT', BYTES_PER_ELEMENT );

/**
* Constructor name.
*
* @name name
* @memberof BooleanArray
* @readonly
* @type {string}
* @default 'BooleanArray'
*
* @example
* var str = BooleanArray.name;
* // returns 'BooleanArray'
*/
setReadOnly( BooleanArray, 'name', 'BooleanArray' );

/**
* Creates a new boolean array from an array-like object or an iterable.
*
* @name from
* @memberof BooleanArray
* @type {Function}
* @param {(Collection|Iterable)} src - array-like object or iterable
* @param {Function} [clbk] - callback to invoke for each source element
* @param {*} [thisArg] - context
* @throws {TypeError} `this` context must be a constructor
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be an array-like object or an iterable
* @throws {TypeError} second argument must be a function
* @returns {BooleanArray} boolean array
*
* @example
* var arr = BooleanArray.from( [ true, false ] );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*
* @example
* function clbk( v ) {
*     return !v;
* }
*
* var arr = BooleanArray.from( [ true, false ], clbk );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*/
setReadOnly( BooleanArray, 'from', function from( src ) {
	var thisArg;
	var nargs;
	var clbk;
	var out;
	var buf;
	var tmp;
	var get;
	var len;
	var i;
	if ( !isFunction( this ) ) {
		throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
	}
	if ( !isBooleanArrayConstructor( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	nargs = arguments.length;
	if ( nargs > 1 ) {
		clbk = arguments[ 1 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', clbk ) );
		}
		if ( nargs > 2 ) {
			thisArg = arguments[ 2 ];
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
			out = new this( len );
			buf = out._buffer; // eslint-disable-line no-underscore-dangle
			for ( i = 0; i < len; i++ ) {
				buf[ i ] = Boolean( clbk.call( thisArg, get( src, i ), i ) );
			}
			return out;
		}
		return new this( src );
	}
	if ( isObject( src ) && HAS_ITERATOR_SYMBOL && isFunction( src[ ITERATOR_SYMBOL ] ) ) { // eslint-disable-line max-len
		buf = src[ ITERATOR_SYMBOL ]();
		if ( !isFunction( buf.next ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', src ) );
		}
		if ( clbk ) {
			tmp = fromIteratorMap( buf, clbk, thisArg );
		} else {
			tmp = fromIterator( buf );
		}
		len = tmp.length;
		out = new this( len );
		buf = out._buffer; // eslint-disable-line no-underscore-dangle
		for ( i = 0; i < len; i++ ) {
			buf[ i ] = tmp[ i ];
		}
		return out;
	}
	throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', src ) );
});

/**
* Creates a new boolean array from a variable number of arguments.
*
* @name of
* @memberof BooleanArray
* @type {Function}
* @param {...*} element - array elements
* @throws {TypeError} `this` context must be a constructor
* @throws {TypeError} `this` must be a boolean array
* @returns {BooleanArray} boolean array
*
* @example
* var arr = BooleanArray.of( true, true, true, true );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 4
*/
setReadOnly( BooleanArray, 'of', function of() {
	var args;
	var i;
	if ( !isFunction( this ) ) {
		throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
	}
	if ( !isBooleanArrayConstructor( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return new this( args );
});

/**
* Pointer to the underlying data buffer.
*
* @name buffer
* @memberof BooleanArray.prototype
* @readonly
* @type {ArrayBuffer}
*
* @example
* var arr = new BooleanArray( 10 );
*
* var buf = arr.buffer;
* // returns <ArrayBuffer>
*/
setReadOnlyAccessor( BooleanArray.prototype, 'buffer', function get() {
	return this._buffer.buffer;
});

/**
* Size (in bytes) of the array.
*
* @name byteLength
* @memberof BooleanArray.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var arr = new BooleanArray( 10 );
*
* var byteLength = arr.byteLength;
* // returns 10
*/
setReadOnlyAccessor( BooleanArray.prototype, 'byteLength', function get() {
	return this._buffer.byteLength;
});

/**
* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
*
* @name byteOffset
* @memberof BooleanArray.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var arr = new BooleanArray( 10 );
*
* var byteOffset = arr.byteOffset;
* // returns 0
*/
setReadOnlyAccessor( BooleanArray.prototype, 'byteOffset', function get() {
	return this._buffer.byteOffset;
});

/**
* Size (in bytes) of each array element.
*
* @name BYTES_PER_ELEMENT
* @memberof BooleanArray.prototype
* @readonly
* @type {PositiveInteger}
* @default 1
*
* @example
* var arr = new BooleanArray( 10 );
*
* var nbytes = arr.BYTES_PER_ELEMENT;
* // returns 1
*/
setReadOnly( BooleanArray.prototype, 'BYTES_PER_ELEMENT', BooleanArray.BYTES_PER_ELEMENT );

/**
* Tests whether all elements in an array pass a test implemented by a predicate function.
*
* @name every
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {boolean} boolean indicating whether all elements pass a test
*
* @example
* function predicate( v ) {
*     return v === true;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( true, 1 );
* arr.set( true, 2 );
*
* var bool = arr.every( predicate );
* // returns true
*/
setReadOnly( BooleanArray.prototype, 'every', function every( predicate, thisArg ) {
	var buf;
	var i;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
	}
	buf = this._buffer;
	for ( i = 0; i < this._length; i++ ) {
		if ( !predicate.call( thisArg, Boolean( buf[ i ] ), i, this ) ) {
			return false;
		}
	}
	return true;
});

/**
* Returns the first element in an array for which a predicate function returns a truthy value.
*
* @name find
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {(boolean|void)} array element or undefined
*
* @example
* function predicate( v ) {
*     return v === true;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( true, 2 );
*
* var v = arr.find( predicate );
* // returns true
*/
setReadOnly( BooleanArray.prototype, 'find', function find( predicate, thisArg ) {
	var buf;
	var v;
	var i;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
	}
	buf = this._buffer;
	for ( i = 0; i < this._length; i++ ) {
		v = Boolean( buf[ i ] );
		if ( predicate.call( thisArg, v, i, this ) ) {
			return v;
		}
	}
});

/**
* Returns the index of the first element in an array for which a predicate function returns a truthy value.
*
* @name findIndex
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {integer} index or -1
*
* @example
* function predicate( v ) {
*     return v === true;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( true, 2 );
*
* var v = arr.findIndex( predicate );
* // returns 0
*/
setReadOnly( BooleanArray.prototype, 'findIndex', function findIndex( predicate, thisArg ) {
	var buf;
	var v;
	var i;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
	}
	buf = this._buffer;
	for ( i = 0; i < this._length; i++ ) {
		v = Boolean( buf[ i ] );
		if ( predicate.call( thisArg, v, i, this ) ) {
			return i;
		}
	}
	return -1;
});

/**
* Returns the last element in an array for which a predicate function returns a truthy value.
*
* @name findLast
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {(boolean|void)} array element or undefined
*
* @example
* function predicate( v ) {
*     return v === true;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( true, 2 );
*
* var v = arr.findLast( predicate );
* // returns true
*/
setReadOnly( BooleanArray.prototype, 'findLast', function findLast( predicate, thisArg ) {
	var buf;
	var v;
	var i;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
	}
	buf = this._buffer;
	for ( i = this._length-1; i >= 0; i-- ) {
		v = Boolean( buf[ i ] );
		if ( predicate.call( thisArg, v, i, this ) ) {
			return v;
		}
	}
});

/**
* Returns the index of the last element in an array for which a predicate function returns a truthy value.
*
* @name findLastIndex
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {integer} index or -1
*
* @example
* function predicate( v ) {
*     return v === true;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( true, 2 );
*
* var v = arr.findLastIndex( predicate );
* // returns 2
*/
setReadOnly( BooleanArray.prototype, 'findLastIndex', function findLastIndex( predicate, thisArg ) {
	var buf;
	var v;
	var i;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
	}
	buf = this._buffer;
	for ( i = this._length-1; i >= 0; i-- ) {
		v = Boolean( buf[ i ] );
		if ( predicate.call( thisArg, v, i, this ) ) {
			return i;
		}
	}
	return -1;
});

/**
* Returns an array element.
*
* @name get
* @memberof BooleanArray.prototype
* @type {Function}
* @param {NonNegativeInteger} idx - element index
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} must provide a nonnegative integer
* @returns {(boolean|void)} array element
*
* @example
* var arr = new BooleanArray( 10 );
*
* var v = arr.get( 0 );
* // returns false
*
* arr.set( [ true, false ], 0 );
*
* v = arr.get( 0 );
* // returns true
*
* v = arr.get( 100 );
* // returns undefined
*/
setReadOnly( BooleanArray.prototype, 'get', function get( idx ) {
	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	if ( !isNonNegativeInteger( idx ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', idx ) );
	}
	if ( idx >= this._length ) {
		return;
	}
	return Boolean( this._buffer[ idx ] );
});

/**
* Number of array elements.
*
* @name length
* @memberof BooleanArray.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var arr = new BooleanArray( 10 );
*
* var len = arr.length;
* // returns 10
*/
setReadOnlyAccessor( BooleanArray.prototype, 'length', function get() {
	return this._length;
});

/**
* Returns a new array with each element being the result of a provided callback function.
*
* @name map
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} fcn - callback function
* @param {*} [thisArg] - callback function execution context
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {BooleanArray} new boolean array
*
* @example
* function invert( v ) {
*     return !v;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( true, 2 );
*
* var out = arr.map( invert );
* // returns <BooleanArray>
*
* var z = out.get( 0 );
* // returns false
*
* z = out.get( 1 );
* // returns true
*
* z = out.get( 2 );
* // returns false
*/
setReadOnly( BooleanArray.prototype, 'map', function map( fcn, thisArg ) {
	var outbuf;
	var out;
	var buf;
	var i;
	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `%s`.', fcn );
	}
	buf = this._buffer;
	out = new this.constructor( this._length );
	outbuf = out._buffer; // eslint-disable-line no-underscore-dangle
	for ( i = 0; i < this._length; i++ ) {
		outbuf[ i ] = Boolean( fcn.call( thisArg, Boolean( buf[ i ] ), i, this ) );
	}
	return out;
});

/**
* Reverses an array in-place.
*
* @name reverse
* @memberof BooleanArray.prototype
* @type {Function}
* @throws {TypeError} `this` must be a boolean array
* @returns {BooleanArray} reversed array
*
* @example
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( false, 2 );
*
* var out = arr.reverse();
* // returns <BooleanArray>
*
* var v = out.get( 0 );
* // returns false
*
* v = out.get( 1 );
* // returns false
*
* v = out.get( 2 );
* // returns true
*/
setReadOnly( BooleanArray.prototype, 'reverse', function reverse() {
	var buf;
	var tmp;
	var len;
	var N;
	var i;
	var j;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	buf = this._buffer;
	len = this._length;
	N = floor( len / 2 );
	for ( i = 0; i < N; i++ ) {
		j = len - i - 1;
		tmp = buf[ i ];
		buf[ i ] = buf[ j ];
		buf[ j ] = tmp;
	}
	return this;
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
* @name set
* @memberof BooleanArray.prototype
* @type {Function}
* @param {(Collection|BooleanArray|*)} value - value(s)
* @param {NonNegativeInteger} [i=0] - element index at which to start writing values
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} index argument must be a nonnegative integer
* @throws {RangeError} index argument is out-of-bounds
* @throws {RangeError} target array lacks sufficient storage to accommodate source values
* @returns {void}
*
* @example
* var arr = new BooleanArray( 10 );
*
* var v = arr.get( 0 );
* // returns false
*
* arr.set( [ true, false ], 0 );
*
* v = arr.get( 0 );
* // returns true
*/
setReadOnly( BooleanArray.prototype, 'set', function set( value ) {
	var sbuf;
	var idx;
	var buf;
	var tmp;
	var N;
	var i;
	var j;
	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
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
		if ( isBooleanArray( value ) ) {
			sbuf = value._buffer; // eslint-disable-line no-underscore-dangle
		} else {
			sbuf = value;
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
			tmp = new Uint8Array( sbuf.length );
			for ( i = 0; i < sbuf.length; i++ ) {
				tmp[ i ] = sbuf[ i ]; // TODO: handle accessor arrays
			}
			sbuf = tmp;
		}
		for ( i = 0; i < N; idx++, i++ ) {
			buf[ idx ] = ( sbuf[ i ] ) ? 1 : 0;
		}
		return;
	}
	if ( idx >= this._length ) {
		throw new RangeError( format( 'invalid argument. Index argument is out-of-bounds. Value: `%u`.', idx ) );
	}
	buf[ idx ] = ( value ) ? 1 : 0;
});

/**
* Tests whether at least one element in an array passes a test implemented by a predicate function.
*
* @name some
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function execution context
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {boolean} boolean indicating whether at least one element passes a test
*
* @example
* function predicate( v ) {
*     return v === true;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( false, 0 );
* arr.set( true, 1 );
* arr.set( false, 2 );
*
* var bool = arr.some( predicate );
* // returns true
*/
setReadOnly( BooleanArray.prototype, 'some', function some( predicate, thisArg ) {
	var buf;
	var i;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', predicate ) );
	}
	buf = this._buffer;
	for ( i = 0; i < this._length; i++ ) {
		if ( predicate.call( thisArg, Boolean( buf[ i ] ), i, this ) ) {
			return true;
		}
	}
	return false;
});

/**
* Sorts an array in-place.
*
* @name sort
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} [compareFcn] - comparison function
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {BooleanArray} sorted array
*
* @example
* function compare( a, b ) {
*    if ( a === false ) {
*        if ( b === false ) {
*            return 0;
*        }
*        return 1;
*    }
*    if ( b === true ) {
*        return 0;
*    }
*    return -1;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( true, 2 );
*
* arr.sort( compare );
*
* var v = arr.get( 0 );
* // returns true
*
* v = arr.get( 1 );
* // returns true
*
* v = arr.get( 2 );
* // returns false
*/
setReadOnly( BooleanArray.prototype, 'sort', function sort( compareFcn ) {
	var buf;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	buf = this._buffer;
	if ( arguments.length === 0 ) {
		buf.sort();
		return this;
	}
	if ( !isFunction( compareFcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', compareFcn ) );
	}
	buf.sort( compare );
	return this;

	/**
	* Comparison function for sorting.
	*
	* @private
	* @param {boolean} a - first boolean value for comparison
	* @param {boolean} b - second boolean value for comparison
	* @returns {number} comparison result
	*/
	function compare( a, b ) {
		return compareFcn( Boolean( a ), Boolean( b ) );
	}
});

/**
* Returns a new typed array containing the elements in reversed order.
*
* @name toReversed
* @memberof BooleanArray.prototype
* @type {Function}
* @throws {TypeError} `this` must be a boolean array
* @returns {BooleanArray} reversed array
*
* @example
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( false, 2 );
*
* var out = arr.toReversed();
* // returns <BooleanArray>
*
* var v = out.get( 0 );
* // returns false
*
* v = out.get( 1 );
* // returns false
*
* v = out.get( 2 );
* // returns true
*/
setReadOnly( BooleanArray.prototype, 'toReversed', function toReversed() {
	var outbuf;
	var out;
	var len;
	var buf;
	var i;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	len = this._length;
	out = new this.constructor( len );
	buf = this._buffer;
	outbuf = out._buffer; // eslint-disable-line no-underscore-dangle
	for ( i = 0; i < len; i++ ) {
		outbuf[ i ] = buf[ len - i - 1 ];
	}
	return out;
});

/**
* Returns a new typed array containing the elements in sorted order.
*
* @name toSorted
* @memberof BooleanArray.prototype
* @type {Function}
* @param {Function} [compareFcn] - comparison function
* @throws {TypeError} `this` must be a boolean array
* @throws {TypeError} first argument must be a function
* @returns {BooleanArray} sorted array
*
* @example
* function compare( a, b ) {
*    if ( a === false ) {
*        if ( b === false ) {
*            return 0;
*        }
*        return 1;
*    }
*    if ( b === true ) {
*        return 0;
*    }
*    return -1;
* }
*
* var arr = new BooleanArray( 3 );
*
* arr.set( true, 0 );
* arr.set( false, 1 );
* arr.set( true, 2 );
*
* var out = arr.sort( compare );
* // returns <BooleanArray>
*
* var v = out.get( 0 );
* // returns true
*
* v = out.get( 1 );
* // returns true
*
* v = out.get( 2 );
* // returns false
*/
setReadOnly( BooleanArray.prototype, 'toSorted', function toSorted( compareFcn ) {
	var outbuf;
	var out;
	var len;
	var buf;
	var i;

	if ( !isBooleanArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a boolean array.' );
	}
	len = this._length;
	out = new this.constructor( len );
	buf = this._buffer;
	outbuf = out._buffer; // eslint-disable-line no-underscore-dangle
	for ( i = 0; i < len; i++ ) {
		outbuf[ i ] = buf[ i ];
	}
	if ( arguments.length === 0 ) {
		outbuf.sort();
		return out;
	}
	if ( !isFunction( compareFcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', compareFcn ) );
	}
	outbuf.sort( compare );
	return out;

	/**
	* Comparison function for sorting.
	*
	* @private
	* @param {boolean} a - first boolean value for comparison
	* @param {boolean} b - second boolean value for comparison
	* @returns {number} comparison result
	*/
	function compare( a, b ) {
		return compareFcn( Boolean( a ), Boolean( b ) );
	}
});


// EXPORTS //

module.exports = BooleanArray;
