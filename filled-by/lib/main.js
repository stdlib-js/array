/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var ctors = require( './../../ctors' );
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );


// VARIABLES //

var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();


// FUNCTIONS //

/**
* Creates a filled "generic" array.
*
* @private
* @param {NonNegativeInteger} len - array length
* @param {Callback} clbk - callback function
* @param {*} thisArg - callback function execution context
* @returns {Array} filled array
*/
function filledArray( len, clbk, thisArg ) {
	var arr;
	var i;

	// Manually push elements in order to ensure "fast" elements...
	arr = [];
	for ( i = 0; i < len; i++ ) {
		arr.push( clbk.call( thisArg, i ) );
	}
	return arr;
}

/**
* Creates a filled "generic" array from an iterator.
*
* @private
* @param {Iterable} it - iterator
* @param {Callback} clbk - callback function
* @param {*} thisArg - callback function execution context
* @returns {Array} filled array
*/
function filledArrayIterator( it, clbk, thisArg ) {
	var arr;
	var i;
	var v;

	arr = [];
	i = -1;
	while ( true ) {
		i += 1;
		v = it.next();
		if ( hasOwnProp( v, 'value' ) ) {
			arr.push( clbk.call( thisArg, i ) );
		}
		if ( v.done ) {
			break;
		}
	}
	return arr;
}


// MAIN //

/**
* Creates a filled array according to a provided callback function.
*
* @param {(NonNegativeInteger|TypedArray|ArrayLikeObject|ArrayBuffer|Iterable)} [arg] - a length, typed array, array-like object, buffer, or iterable
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @param {string} [dtype="float64"] - data type
* @param {Callback} clbk - callback to invoke
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} must provide a recognized data type
* @throws {TypeError} must provide a length, typed array, array-like object, buffer, or iterable
* @throws {TypeError} callback argument must be a function.
* @throws {Error} creating a generic array from an `ArrayBuffer` is not supported
* @returns {(TypedArray|Array)} array or typed array
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
*
* var arr = filledarrayBy( randu );
* // returns <Float64Array>
*
* @example
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, 'generic', clbk );
* // returns [ 1.0, 1.0 ]
*
* @example
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( [ 0.5, 0.5 ], clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* function clbk() {
*     return 1;
* }
*
* var arr = filledarrayBy( [ 5, -3 ], 'int32', clbk );
* // returns <Int32Array>[ 1, 1 ]
*
* @example
* function clbk1() {
*     return 10;
* }
*
* function clbk2() {
*     return 1.0;
* }
*
* var arr1 = filledarrayBy( [ 5, 3 ], 'int32', clbk1 );
* var arr2 = filledarrayBy( arr1, clbk2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* function clbk1() {
*     return 1.0;
* }
*
* function clbk2() {
*     return 2;
* }
*
* var arr1 = filledarrayBy( [ 5, 3 ], 'int32', clbk1 );
* var arr2 = filledarrayBy( arr1, 'uint32', clbk2 );
* // returns <Uint32Array>[ 2, 2 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 8, clbk );
* // returns <Float64Array>[ 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 8, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 2, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* function clbk() {
*     return 1;
* }
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 2, 'int32', clbk );
* // returns <Int32Array>[ 1, 1 ]
*/
function filledarrayBy() {
	var thisArg;
	var nargs;
	var dtype;
	var clbk;
	var ctor;
	var arr;
	var len;
	var arg;

	nargs = arguments.length;
	nargs -= 1;

	// Determine whether the last argument is a callback or "this" context...
	if ( isFunction( arguments[ nargs ] ) ) {
		// If the last argument is a function, we need to check the next-to-last argument, and, if the next-to-last argument is a function, assume that the next-to-last argument is the callback and the last argument is a "this" context...
		if ( isFunction( arguments[ nargs-1 ] ) ) {
			thisArg = arguments[ nargs ];
			nargs -= 1;
			clbk = arguments[ nargs ];
		} else {
			// "this" context is left undefined...
			clbk = arguments[ nargs ];
		}
	} else {
		thisArg = arguments[ nargs ];
		nargs -= 1;
		clbk = arguments[ nargs ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + clbk + '`.' );
		}
	}
	nargs -= 1;
	if ( nargs >= 0 && isString( arguments[ nargs ] ) ) {
		dtype = arguments[ nargs ];
		nargs -= 1;
	} else {
		dtype = 'float64';
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( 'invalid argument. Must provide a recognized data type. Value: `'+dtype+'`.' );
	}
	if ( dtype === 'generic' ) {
		if ( nargs < 0 ) {
			return [];
		}
		arg = arguments[ 0 ];
		if ( nargs === 0 ) {
			if ( isNonNegativeInteger( arg ) ) {
				len = arg;
			} else if ( isCollection( arg ) ) {
				len = arg.length;
			}
			if ( len !== void 0 ) {
				return filledArray( len, clbk, thisArg );
			}
			if ( isArrayBuffer( arg ) ) {
				throw new Error( 'invalid arguments. Creating a generic array from an ArrayBuffer is not supported.' );
			}
			if ( isObject( arg ) ) {
				if ( HAS_ITERATOR_SYMBOL === false ) {
					throw new TypeError( 'invalid argument. Environment lacks Symbol.iterator support. Must provide a length, typed array, or array-like object. Value: `'+arg+'`.' );
				}
				if ( !isFunction( arg[ ITERATOR_SYMBOL ] ) ) {
					throw new TypeError( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `'+arg+'`.' );
				}
				arg = arg[ ITERATOR_SYMBOL ]();
				if ( !isFunction( arg.next ) ) {
					throw new TypeError( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable.' );
				}
				return filledArrayIterator( arg, clbk, thisArg );
			}
			throw new TypeError( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `'+arg+'`.' );
		} else if ( isArrayBuffer( arg ) ) {
			throw new Error( 'invalid arguments. Creating a generic array from an ArrayBuffer is not supported.' );
		}
		throw new TypeError( 'invalid argument. Must provide a length, typed array, array-like object, or an iterable. Value: `'+arg+'`.' );
	}
	if ( nargs < 0 ) {
		return new ctor( 0 );
	}
	if ( nargs === 0 ) {
		arr = new ctor( arguments[0] );
	} else if ( nargs === 1 ) {
		arr = new ctor( arguments[0], arguments[1] );
	} else {
		arr = new ctor( arguments[0], arguments[1], arguments[2] );
	}
	if ( arr.length > 0 ) {
		gfillBy( arr.length, arr, 1, callback );
	}
	return arr;

	/**
	* Callback which wraps a provided callback and is invoked for each array element.
	*
	* @private
	* @param {*} value - element value
	* @param {NonNegativeInteger} aidx - array index
	* @param {NonNegativeInteger} sidx - strided index
	* @param {Collection} array - input array/collection
	* @returns {*} callback return value
	*/
	function callback( value, aidx ) {
		return clbk.call( thisArg, aidx );
	}
}


// EXPORTS //

module.exports = filledarrayBy;
