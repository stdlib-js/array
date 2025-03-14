/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isComplexDataType = require( './../../base/assert/is-complex-floating-point-data-type' );
var isBooleanDataType = require( './../../base/assert/is-boolean-data-type' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var ctors = require( './../../ctors' );
var gfill = require( '@stdlib/blas/ext/base/gfill' );
var filled = require( './../../base/filled' );
var reinterpretBool = require( '@stdlib/strided/base/reinterpret-boolean' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var iterLength = require( '@stdlib/iter/length' );
var defaults = require( './../../defaults' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();
var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );


// FUNCTIONS //

/**
* Creates a filled "generic" array from an iterator.
*
* @private
* @param {Iterator} it - iterator
* @param {*} value - fill value
* @returns {Array} filled array
*/
function filledIterator( it, value ) {
	var arr;
	var v;

	arr = [];
	while ( true ) {
		v = it.next();
		if ( v.done ) {
			break;
		}
		arr.push( value );
	}
	return arr;
}

/**
* Fills an array exposing accessors for getting and setting array elements.
*
* @private
* @param {Collection} arr - input array
* @param {*} value - fill value
* @returns {Collection} input array
*/
function filledAccessors( arr, value ) {
	var i;
	for ( i = 0; i < arr.length; i++ ) {
		arr.set( value, i );
	}
	return arr;
}


// MAIN //

/**
* Creates a filled array.
*
* @param {*} [value] - fill value
* @param {(NonNegativeInteger|TypedArray|ArrayLikeObject|ArrayBuffer|Iterable)} [arg] - a length, typed array, array-like object, buffer, or iterable
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} must provide a recognized data type
* @throws {TypeError} must provide a length, typed array, array-like object, buffer, or iterable
* @throws {Error} creating a generic array from an `ArrayBuffer` is not supported
* @returns {(TypedArray|Array|Complex64Array)} array or typed array
*
* @example
* var arr = filledarray();
* // returns <Float64Array>
*
* @example
* var arr = filledarray( 1.0, 2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1.0, 2, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1.0, 2, 'generic' );
* // returns [ 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1.0, [ 0.5, 0.5 ] );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1, [ 5, -3 ], 'int32' );
* // returns <Int32Array>[ 1, 1 ]
*
* @example
* var arr1 = filledarray( 2, [ 5, 3 ], 'int32' );
* var arr2 = filledarray( 1.0, arr1 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr1 = filledarray( 2, [ 5, 3 ], 'int32' );
* var arr2 = filledarray( 1, arr1, 'uint32' );
* // returns <Uint32Array>[ 1, 1 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 8 );
* // returns <Float64Array>[ 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 8, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf, 8, 2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1, buf, 8, 2, 'int32' );
* // returns <Int32Array>[ 1, 1 ]
*/
function filledarray() {
	var value;
	var nargs;
	var dtype;
	var ctor;
	var arr;
	var len;
	var arg;

	nargs = arguments.length;
	nargs -= 1;
	if ( nargs >= 0 && isString( arguments[ nargs ] ) ) {
		dtype = arguments[ nargs ];
		nargs -= 1;
	} else {
		dtype = DEFAULT_DTYPE;
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( format( 'invalid argument. Must provide a recognized data type. Value: `%s`.', dtype ) );
	}
	if ( dtype === 'generic' ) {
		if ( nargs <= 0 ) {
			return [];
		}
		value = arguments[ 0 ];
		arg = arguments[ 1 ];
		if ( nargs === 1 ) {
			if ( isNonNegativeInteger( arg ) ) {
				len = arg;
			} else if ( isCollection( arg ) ) {
				len = arg.length;
			}
			if ( len !== void 0 ) {
				return filled( value, len );
			}
			if ( isArrayBuffer( arg ) ) {
				throw new Error( 'invalid arguments. Creating a generic array from an ArrayBuffer is not supported.' );
			}
			if ( isObject( arg ) ) {
				if ( HAS_ITERATOR_SYMBOL === false ) {
					throw new TypeError( format( 'invalid argument. Environment lacks Symbol.iterator support. Must provide a length, typed array, or array-like object. Value: `%s`.', arg ) );
				}
				if ( !isFunction( arg[ ITERATOR_SYMBOL ] ) ) {
					throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
				}
				arg = arg[ ITERATOR_SYMBOL ]();
				if ( !isFunction( arg.next ) ) {
					throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
				}
				return filledIterator( arg, value );
			}
			throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
		} else if ( isArrayBuffer( arg ) ) {
			throw new Error( 'invalid arguments. Creating a generic array from an ArrayBuffer is not supported.' );
		}
		throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
	}
	if ( nargs <= 0 ) {
		return new ctor( 0 );
	}
	if ( nargs === 1 ) { // length || array-like || ArrayBuffer || iterable
		arg = arguments[ 1 ];
		if ( isCollection( arg ) ) {
			arr = new ctor( arg.length );
		} else if ( isArrayBuffer( arg ) ) {
			arr = new ctor( arg );
		} else if ( isNonNegativeInteger( arg ) ) {
			arr = new ctor( arg );
		} else if ( isObject( arg ) ) {
			if ( HAS_ITERATOR_SYMBOL === false ) {
				throw new TypeError( format( 'invalid argument. Environment lacks Symbol.iterator support. Must provide a length, typed array, or array-like object. Value: `%s`.', arg ) );
			}
			if ( !isFunction( arg[ ITERATOR_SYMBOL ] ) ) {
				throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
			}
			arg = arg[ ITERATOR_SYMBOL ]();
			if ( !isFunction( arg.next ) ) {
				throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
			}
			arr = new ctor( iterLength( arg ) );
		} else {
			throw new TypeError( format( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `%s`.', arg ) );
		}
	} else if ( nargs === 2 ) {
		arr = new ctor( arguments[1], arguments[2] ); // (ArrayBuffer, byteOffset)
	} else {
		arr = new ctor( arguments[1], arguments[2], arguments[3] ); // (ArrayBuffer, byteOffset, length)
	}
	if ( arr.length > 0 ) {
		value = arguments[ 0 ];
		if ( isComplexDataType( dtype ) ) {
			filledAccessors( arr, value );
		} else if ( isBooleanDataType( dtype ) ) {
			gfill( arr.length, ( value ) ? 1 : 0, reinterpretBool( arr, 0 ), 1 ); // eslint-disable-line max-len
		} else {
			gfill( arr.length, value, arr, 1 );
		}
	}
	return arr;
}


// EXPORTS //

module.exports = filledarray;
