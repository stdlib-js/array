/* eslint-disable no-restricted-syntax, max-lines, no-invalid-this */

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isObject = require( '@stdlib/assert/is-object' );
var isArray = require( '@stdlib/assert/is-array' );
var isFunction = require( '@stdlib/assert/is-function' );
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isEven = require( '@stdlib/math/base/assert/is-even' );
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var Float64Array = require( './../../float64' );
var Complex128 = require( '@stdlib/complex/float64' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var arraylike2object = require( './../../base/arraylike2object' );
var format = require( '@stdlib/string/format' );
var fromIterator = require( './from_iterator.js' );
var fromIteratorMap = require( './from_iterator_map.js' );
var fromArray = require( './from_array.js' );


// VARIABLES //

var BYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT * 2;
var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();


// FUNCTIONS //

/**
* Returns a boolean indicating if a value is a complex typed array.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a complex typed array
*/
function isComplexArray( value ) {
	return (
		value instanceof Complex128Array ||
		(
			typeof value === 'object' &&
			value !== null &&
			(
				value.constructor.name === 'Complex64Array' ||
				value.constructor.name === 'Complex128Array'
			) &&
			typeof value._length === 'number' && // eslint-disable-line no-underscore-dangle

			// NOTE: we don't perform a more rigorous test here for a typed array for performance reasons, as robustly checking for a typed array instance could require walking the prototype tree and performing relatively expensive constructor checks...
			typeof value._buffer === 'object' // eslint-disable-line no-underscore-dangle
		)
	);
}

/**
* Returns a boolean indicating if a value is a complex typed array constructor.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a complex typed array constructor
*/
function isComplexArrayConstructor( value ) {
	return (
		value === Complex128Array ||

		// NOTE: weaker test in order to avoid a circular dependency with Complex64Array...
		value.name === 'Complex64Array'
	);
}

/**
* Returns a boolean indicating if a value is a `Complex64Array`.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a `Complex64Array`
*/
function isComplex64Array( value ) {
	return (
		typeof value === 'object' &&
		value !== null &&
		value.constructor.name === 'Complex64Array' &&
		value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT/2
	);
}

/**
* Returns a boolean indicating if a value is a `Complex128Array`.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a `Complex128Array`
*/
function isComplex128Array( value ) {
	return (
		typeof value === 'object' &&
		value !== null &&
		value.constructor.name === 'Complex128Array' &&
		value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT
	);
}


// MAIN //

/**
* 128-bit complex number array constructor.
*
* @constructor
* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or iterable
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @throws {RangeError} ArrayBuffer byte length must be a multiple of `16`
* @throws {RangeError} array-like object and typed array input arguments must have a length which is a multiple of two
* @throws {TypeError} if provided only a single argument, must provide a valid argument
* @throws {TypeError} byte offset must be a nonnegative integer
* @throws {RangeError} byte offset must be a multiple of `16`
* @throws {TypeError} view length must be a positive multiple of `16`
* @throws {RangeError} must provide sufficient memory to accommodate byte offset and view length requirements
* @throws {TypeError} an iterator must return either a two element array containing real and imaginary components or a complex number
* @returns {Complex128Array} complex number array
*
* @example
* var arr = new Complex128Array();
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 0
*
* @example
* var arr = new Complex128Array( 2 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var arr = new Complex128Array( [ 1.0, -1.0 ] );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex128Array( buf );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex128Array( buf, 16 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = new Complex128Array( buf, 16, 2 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*/
function Complex128Array() {
	var byteOffset;
	var nargs;
	var buf;
	var len;

	nargs = arguments.length;
	if ( !(this instanceof Complex128Array) ) {
		if ( nargs === 0 ) {
			return new Complex128Array();
		}
		if ( nargs === 1 ) {
			return new Complex128Array( arguments[0] );
		}
		if ( nargs === 2 ) {
			return new Complex128Array( arguments[0], arguments[1] );
		}
		return new Complex128Array( arguments[0], arguments[1], arguments[2] );
	}
	// Create the underlying data buffer...
	if ( nargs === 0 ) {
		buf = new Float64Array( 0 ); // backward-compatibility
	} else if ( nargs === 1 ) {
		if ( isNonNegativeInteger( arguments[0] ) ) {
			buf = new Float64Array( arguments[0]*2 );
		} else if ( isCollection( arguments[0] ) ) {
			buf = arguments[ 0 ];
			len = buf.length;

			// If provided a "generic" array, peak at the first value, and, if the value is a complex number, try to process as an array of complex numbers, falling back to "normal" typed array initialization if we fail and ensuring consistency if the first value had not been a complex number...
			if ( len && isArray( buf ) && isComplexLike( buf[0] ) ) {
				buf = fromArray( new Float64Array( len*2 ), buf );
				if ( buf === null ) {
					// We failed and we are now forced to allocate a new array :-(
					if ( !isEven( len ) ) {
						throw new RangeError( format( 'invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.', len ) );
					}
					// We failed, so fall back to directly setting values...
					buf = new Float64Array( arguments[0] );
				}
			} else {
				if ( isComplex64Array( buf ) ) {
					buf = reinterpret64( buf, 0 );
				} else if ( isComplex128Array( buf ) ) {
					buf = reinterpret128( buf, 0 );
				} else if ( !isEven( len ) ) {
					throw new RangeError( format( 'invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.', len ) );
				}
				buf = new Float64Array( buf );
			}
		} else if ( isArrayBuffer( arguments[0] ) ) {
			buf = arguments[ 0 ];
			if ( !isInteger( buf.byteLength/BYTES_PER_ELEMENT ) ) {
				throw new RangeError( format( 'invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.', BYTES_PER_ELEMENT, buf.byteLength ) );
			}
			buf = new Float64Array( buf );
		} else if ( isObject( arguments[0] ) ) {
			buf = arguments[ 0 ];
			if ( HAS_ITERATOR_SYMBOL === false ) {
				throw new TypeError( format( 'invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.', buf ) );
			}
			if ( !isFunction( buf[ ITERATOR_SYMBOL ] ) ) {
				throw new TypeError( format( 'invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', buf ) );
			}
			buf = buf[ ITERATOR_SYMBOL ]();
			if ( !isFunction( buf.next ) ) {
				throw new TypeError( format( 'invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', buf ) );
			}
			buf = fromIterator( buf );
			if ( buf instanceof Error ) {
				throw buf;
			}
			buf = new Float64Array( buf );
		} else {
			throw new TypeError( format( 'invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.', arguments[0] ) );
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
		if ( !isInteger( byteOffset/BYTES_PER_ELEMENT ) ) {
			throw new RangeError( format( 'invalid argument. Byte offset must be a multiple of %u. Value: `%u`.', BYTES_PER_ELEMENT, byteOffset ) );
		}
		if ( nargs === 2 ) {
			len = buf.byteLength - byteOffset;
			if ( !isInteger( len/BYTES_PER_ELEMENT ) ) {
				throw new RangeError( format( 'invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.', BYTES_PER_ELEMENT, len ) );
			}
			buf = new Float64Array( buf, byteOffset );
		} else {
			len = arguments[ 2 ];
			if ( !isNonNegativeInteger( len ) ) {
				throw new TypeError( format( 'invalid argument. Length must be a nonnegative integer. Value: `%s`.', len ) );
			}
			if ( (len*BYTES_PER_ELEMENT) > (buf.byteLength-byteOffset) ) {
				throw new RangeError( format( 'invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.', len*BYTES_PER_ELEMENT ) );
			}
			buf = new Float64Array( buf, byteOffset, len*2 );
		}
	}
	setReadOnly( this, '_buffer', buf );
	setReadOnly( this, '_length', buf.length/2 );

	return this;
}

/**
* Size (in bytes) of each array element.
*
* @name BYTES_PER_ELEMENT
* @memberof Complex128Array
* @readonly
* @type {PositiveInteger}
* @default 16
*
* @example
* var nbytes = Complex128Array.BYTES_PER_ELEMENT;
* // returns 16
*/
setReadOnly( Complex128Array, 'BYTES_PER_ELEMENT', BYTES_PER_ELEMENT );

/**
* Constructor name.
*
* @name name
* @memberof Complex128Array
* @readonly
* @type {string}
* @default 'Complex128Array'
*
* @example
* var name = Complex128Array.name;
* // returns 'Complex128Array'
*/
setReadOnly( Complex128Array, 'name', 'Complex128Array' );

/**
* Creates a new 128-bit complex number array from an array-like object or an iterable.
*
* @name from
* @memberof Complex128Array
* @type {Function}
* @param {(Collection|Object)} src - array-like object or iterable
* @param {Function} [clbk] - callback to invoke for each source element
* @param {*} [thisArg] - context
* @throws {TypeError} `this` context must be a constructor
* @throws {TypeError} `this` must be a complex number array
* @throws {TypeError} first argument must be an array-like object or an iterable
* @throws {TypeError} second argument must be a function
* @throws {RangeError} array-like objects must have a length which is a multiple of two
* @throws {TypeError} an iterator must return either a two element array containing real and imaginary components or a complex number
* @throws {TypeError} when provided an iterator, a callback must return either a two element array containing real and imaginary components or a complex number
* @returns {Complex128Array} 128-bit complex number array
*
* @example
* var arr = Complex128Array.from( [ 1.0, -1.0 ] );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
*
* var arr = Complex128Array.from( [ new Complex128( 1.0, 1.0 ) ] );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* function clbk( v ) {
*     return new Complex128( real(v)*2.0, imag(v)*2.0 );
* }
*
* var arr = Complex128Array.from( [ new Complex128( 1.0, 1.0 ) ], clbk );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 1
*/
setReadOnly( Complex128Array, 'from', function from( src ) {
	var thisArg;
	var nargs;
	var clbk;
	var out;
	var buf;
	var tmp;
	var len;
	var flg;
	var v;
	var i;
	var j;
	if ( !isFunction( this ) ) {
		throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
	}
	if ( !isComplexArrayConstructor( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a complex number array.' );
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
	if ( isComplexArray( src ) ) {
		len = src.length;
		if ( clbk ) {
			out = new this( len );
			buf = out._buffer; // eslint-disable-line no-underscore-dangle
			j = 0;
			for ( i = 0; i < len; i++ ) {
				v = clbk.call( thisArg, src.get( i ), i );
				if ( isComplexLike( v ) ) {
					buf[ j ] = real( v );
					buf[ j+1 ] = imag( v );
				} else if ( isArrayLikeObject( v ) && v.length >= 2 ) {
					buf[ j ] = v[ 0 ];
					buf[ j+1 ] = v[ 1 ];
				} else {
					throw new TypeError( format( 'invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.', v ) );
				}
				j += 2; // stride
			}
			return out;
		}
		return new this( src );
	}
	if ( isCollection( src ) ) {
		if ( clbk ) {
			// Note: array contents affect how we iterate over a provided data source. If only complex number objects, we can extract real and imaginary components. Otherwise, for non-complex number arrays (e.g., `Float64Array`, etc), we assume a strided array where real and imaginary components are interleaved. In the former case, we expect a callback to return real and imaginary components (possibly as a complex number). In the latter case, we expect a callback to return *either* a real or imaginary component.

			len = src.length;
			tmp = arraylike2object( src );

			// Detect whether we've been provided an array which returns complex number objects...
			for ( i = 0; i < len; i++ ) {
				if ( !isComplexLike( tmp.getter( src, i ) ) ) {
					flg = true;
					break;
				}
			}
			// If an array does not contain only complex number objects, then we assume interleaved real and imaginary components...
			if ( flg ) {
				if ( !isEven( len ) ) {
					throw new RangeError( format( 'invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.', len ) );
				}
				out = new this( len/2 );
				buf = out._buffer; // eslint-disable-line no-underscore-dangle
				for ( i = 0; i < len; i++ ) {
					buf[ i ] = clbk.call( thisArg, tmp.getter( src, i ), i );
				}
				return out;
			}
			// If an array contains only complex number objects, then we need to extract real and imaginary components...
			out = new this( len );
			buf = out._buffer; // eslint-disable-line no-underscore-dangle
			j = 0;
			for ( i = 0; i < len; i++ ) {
				v = clbk.call( thisArg, tmp.getter( src, i ), i );
				if ( isComplexLike( v ) ) {
					buf[ j ] = real( v );
					buf[ j+1 ] = imag( v );
				} else if ( isArrayLikeObject( v ) && v.length >= 2 ) {
					buf[ j ] = v[ 0 ];
					buf[ j+1 ] = v[ 1 ];
				} else {
					throw new TypeError( format( 'invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.', v ) );
				}
				j += 2; // stride
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
		if ( tmp instanceof Error ) {
			throw tmp;
		}
		len = tmp.length / 2;
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
* Creates a new 128-bit complex number array from a variable number of arguments.
*
* @name of
* @memberof Complex128Array
* @type {Function}
* @param {...*} element - array elements
* @throws {TypeError} `this` context must be a constructor
* @throws {TypeError} `this` must be a complex number array
* @returns {Complex128Array} 128-bit complex number array
*
* @example
* var arr = Complex128Array.of( 1.0, 1.0, 1.0, 1.0 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*/
setReadOnly( Complex128Array, 'of', function of() {
	var args;
	var i;
	if ( !isFunction( this ) ) {
		throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
	}
	if ( !isComplexArrayConstructor( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a complex number array.' );
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
* @memberof Complex128Array.prototype
* @readonly
* @type {ArrayBuffer}
*
* @example
* var arr = new Complex128Array( 10 );
*
* var buf = arr.buffer;
* // returns <ArrayBuffer>
*/
setReadOnlyAccessor( Complex128Array.prototype, 'buffer', function get() {
	return this._buffer.buffer;
});

/**
* Size (in bytes) of the array.
*
* @name byteLength
* @memberof Complex128Array.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var arr = new Complex128Array( 10 );
*
* var byteLength = arr.byteLength;
* // returns 160
*/
setReadOnlyAccessor( Complex128Array.prototype, 'byteLength', function get() {
	return this._buffer.byteLength;
});

/**
* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
*
* @name byteOffset
* @memberof Complex128Array.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var arr = new Complex128Array( 10 );
*
* var byteOffset = arr.byteOffset;
* // returns 0
*/
setReadOnlyAccessor( Complex128Array.prototype, 'byteOffset', function get() {
	return this._buffer.byteOffset;
});

/**
* Size (in bytes) of each array element.
*
* @name BYTES_PER_ELEMENT
* @memberof Complex128Array.prototype
* @readonly
* @type {PositiveInteger}
* @default 16
*
* @example
* var arr = new Complex128Array( 10 );
*
* var nbytes = arr.BYTES_PER_ELEMENT;
* // returns 16
*/
setReadOnly( Complex128Array.prototype, 'BYTES_PER_ELEMENT', Complex128Array.BYTES_PER_ELEMENT );

/**
* Copies a sequence of elements within the array to the position starting at `target`.
*
* @name copyWithin
* @memberof Complex128Array.prototype
* @type {Function}
* @param {integer} target - index at which to start copying elements
* @param {integer} start - source index at which to copy elements from
* @param {integer} [end] - source index at which to stop copying elements from
* @throws {TypeError} `this` must be a complex number array
* @returns {Complex128Array} modified array
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var arr = new Complex128Array( 4 );
*
* // Set the array elements:
* arr.set( new Complex128( 1.0, 1.0 ), 0 );
* arr.set( new Complex128( 2.0, 2.0 ), 1 );
* arr.set( new Complex128( 3.0, 3.0 ), 2 );
* arr.set( new Complex128( 4.0, 4.0 ), 3 );
*
* // Copy the first two elements to the last two elements:
* arr.copyWithin( 2, 0, 2 );
*
* // Get the last array element:
* var z = arr.get( 3 );
*
* var re = real( z );
* // returns 2.0
*
* var im = imag( z );
* // returns 2.0
*/
setReadOnly( Complex128Array.prototype, 'copyWithin', function copyWithin( target, start ) {
	if ( !isComplexArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a complex number array.' );
	}
	// FIXME: prefer a functional `copyWithin` implementation which addresses lack of universal browser support (e.g., IE11 and Safari) or ensure that typed arrays are polyfilled
	if ( arguments.length === 2 ) {
		this._buffer.copyWithin( target*2, start*2 );
	} else {
		this._buffer.copyWithin( target*2, start*2, arguments[2]*2 );
	}
	return this;
});

/**
* Returns an iterator for iterating over array key-value pairs.
*
* @name entries
* @memberof Complex128Array.prototype
* @type {Function}
* @throws {TypeError} `this` must be a complex number array
* @returns {Iterator} iterator
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
*
* var arr = [
*     new Complex128( 1.0, 1.0 ),
*     new Complex128( 2.0, 2.0 ),
*     new Complex128( 3.0, 3.0 )
* ];
* arr = new Complex128Array( arr );
*
* // Create an iterator:
* var it = arr.entries();
*
* // Iterate over the key-value pairs...
* var v = it.next().value;
* // returns [ 0, <Complex128> ]
*
* v = it.next().value;
* // returns [ 1, <Complex128> ]
*
* v = it.next().value;
* // returns [ 2, <Complex128> ]
*
* var bool = it.next().done;
* // returns true
*/
setReadOnly( Complex128Array.prototype, 'entries', function entries() {
	var buffer;
	var self;
	var iter;
	var len;
	var FLG;
	var i;
	var j;
	if ( !isComplexArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a complex number array.' );
	}
	self = this;
	buffer = this._buffer;
	len = this._length;

	// Initialize the iteration indices:
	i = -1;
	j = -2;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	if ( ITERATOR_SYMBOL ) {
		setReadOnly( iter, ITERATOR_SYMBOL, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var z;
		i += 1;
		if ( FLG || i >= len ) {
			return {
				'done': true
			};
		}
		j += 2;
		z = new Complex128( buffer[ j ], buffer[ j+1 ] );
		return {
			'value': [ i, z ],
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return self.entries();
	}
});

/**
* Returns an array element.
*
* @name get
* @memberof Complex128Array.prototype
* @type {Function}
* @param {NonNegativeInteger} idx - element index
* @throws {TypeError} `this` must be a complex number array
* @throws {TypeError} must provide a nonnegative integer
* @returns {(Complex128|void)} array element
*
* @example
* var arr = new Complex128Array( 10 );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var z = arr.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 0.0
*
* var im = imag( z );
* // returns 0.0
*
* arr.set( [ 1.0, -1.0 ], 0 );
*
* z = arr.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns 1.0
*
* im = imag( z );
* // returns -1.0
*
* z = arr.get( 100 );
* // returns undefined
*/
setReadOnly( Complex128Array.prototype, 'get', function get( idx ) {
	var buf;
	if ( !isComplexArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a complex number array.' );
	}
	if ( !isNonNegativeInteger( idx ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', idx ) );
	}
	if ( idx >= this._length ) {
		return;
	}
	buf = this._buffer;
	idx *= 2;
	return new Complex128( buf[ idx ], buf[ idx+1 ] );
});

/**
* Number of array elements.
*
* @name length
* @memberof Complex128Array.prototype
* @readonly
* @type {NonNegativeInteger}
*
* @example
* var arr = new Complex128Array( 10 );
*
* var len = arr.length;
* // returns 10
*/
setReadOnlyAccessor( Complex128Array.prototype, 'length', function get() {
	return this._length;
});

/**
* Sets an array element.
*
* ## Notes
*
* -   When provided a typed array, real or complex, we must check whether the source array shares the same buffer as the target array and whether the underlying memory overlaps. In particular, we are concerned with the following scenario:
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
*     by the time we begin copying into the overlapping region, we are copying from the end of `src`, a non-overlapping region, which means we don't run the risk of copying copied values, rather than the original `src` values as intended.
*
*
* @name set
* @memberof Complex128Array.prototype
* @type {Function}
* @param {(Collection|Complex|ComplexArray)} value - value(s)
* @param {NonNegativeInteger} [i=0] - element index at which to start writing values
* @throws {TypeError} `this` must be a complex number array
* @throws {TypeError} first argument must be either a complex number, an array-like object, or a complex number array
* @throws {TypeError} index argument must be a nonnegative integer
* @throws {RangeError} array-like objects must have a length which is a multiple of two
* @throws {RangeError} index argument is out-of-bounds
* @throws {RangeError} target array lacks sufficient storage to accommodate source values
* @returns {void}
*
* @example
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var arr = new Complex128Array( 10 );
*
* var z = arr.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 0.0
*
* var im = imag( z );
* // returns 0.0
*
* arr.set( [ 1.0, -1.0 ], 0 );
*
* z = arr.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns 1.0
*
* im = imag( z );
* // returns -1.0
*/
setReadOnly( Complex128Array.prototype, 'set', function set( value ) {
	/* eslint-disable no-underscore-dangle */
	var sbuf;
	var idx;
	var buf;
	var tmp;
	var flg;
	var N;
	var v;
	var i;
	var j;
	if ( !isComplexArray( this ) ) {
		throw new TypeError( 'invalid invocation. `this` is not a complex number array.' );
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
	if ( isComplexLike( value ) ) {
		if ( idx >= this._length ) {
			throw new RangeError( format( 'invalid argument. Index argument is out-of-bounds. Value: `%u`.', idx ) );
		}
		idx *= 2;
		buf[ idx ] = real( value );
		buf[ idx+1 ] = imag( value );
		return;
	}
	if ( isComplexArray( value ) ) {
		N = value._length;
		if ( idx+N > this._length ) {
			throw new RangeError( 'invalid arguments. Target array lacks sufficient storage to accommodate source values.' );
		}
		sbuf = value._buffer;

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
			tmp = new Float64Array( sbuf.length );
			for ( i = 0; i < sbuf.length; i++ ) {
				tmp[ i ] = sbuf[ i ];
			}
			sbuf = tmp;
		}
		idx *= 2;
		j = 0;
		for ( i = 0; i < N; i++ ) {
			buf[ idx ] = sbuf[ j ];
			buf[ idx+1 ] = sbuf[ j+1 ];
			idx += 2; // stride
			j += 2; // stride
		}
		return;
	}
	if ( isCollection( value ) ) {
		// Detect whether we've been provided an array of complex numbers...
		N = value.length;
		for ( i = 0; i < N; i++ ) {
			if ( !isComplexLike( value[ i ] ) ) {
				flg = true;
				break;
			}
		}
		// If an array does not contain only complex numbers, then we assume interleaved real and imaginary components...
		if ( flg ) {
			if ( !isEven( N ) ) {
				throw new RangeError( format( 'invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.', N ) );
			}
			if ( idx+(N/2) > this._length ) {
				throw new RangeError( 'invalid arguments. Target array lacks sufficient storage to accommodate source values.' );
			}
			sbuf = value;

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
				tmp = new Float64Array( N );
				for ( i = 0; i < N; i++ ) {
					tmp[ i ] = sbuf[ i ];
				}
				sbuf = tmp;
			}
			idx *= 2;
			N /= 2;
			j = 0;
			for ( i = 0; i < N; i++ ) {
				buf[ idx ] = sbuf[ j ];
				buf[ idx+1 ] = sbuf[ j+1 ];
				idx += 2; // stride
				j += 2; // stride
			}
			return;
		}
		// If an array contains only complex numbers, then we need to extract real and imaginary components...
		if ( idx+N > this._length ) {
			throw new RangeError( 'invalid arguments. Target array lacks sufficient storage to accommodate source values.' );
		}
		idx *= 2;
		for ( i = 0; i < N; i++ ) {
			v = value[ i ];
			buf[ idx ] = real( v );
			buf[ idx+1 ] = imag( v );
			idx += 2; // stride
		}
		return;
	}
	throw new TypeError( format( 'invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.', value ) );

	/* eslint-enable no-underscore-dangle */
});


// EXPORTS //

module.exports = Complex128Array;
