/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var ctors = require( './../../typed-complex-ctors' );
var defaults = require( './../../defaults' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.complex_floating_point' );


// MAIN //

/**
* Creates a complex number typed array.
*
* @param {(NonNegativeInteger|ComplexArray|ArrayLikeObject|ArrayBuffer)} [arg] - a length, typed array, array-like object, or buffer
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @param {string} [dtype="complex128"] - data type
* @throws {TypeError} must provide a recognized data type
* @returns {ComplexArray} typed array
*
* @example
* var arr = complexarray();
* // returns <Complex128Array>
*
* @example
* var arr = complexarray( 2 );
* // returns <Complex128Array>
*
* @example
* var arr = complexarray( 2, 'complex64' );
* // returns <Complex64Array>
*
* @example
* var arr = complexarray( [ 0.5, 0.5 ] );
* // returns <Complex128Array>
*
* @example
* var arr = complexarray( [ 5.0, -3.0 ], 'complex64' );
* // returns <Complex64Array>
*
* @example
* var arr1 = complexarray( [ 5.0, 3.0 ], 'complex64' );
* var arr2 = complexarray( arr1 );
* // returns <Complex128Array>
*
* @example
* var arr1 = complexarray( [ 5.0, 3.0 ], 'complex128' );
* var arr2 = complexarray( arr1, 'complex64' );
* // returns <Complex64Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 'complex64' );
* // returns <Complex64Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 16 );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 16, 'complex64' );
* // returns <Complex64Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = complexarray( buf, 16, 2 );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = complexarray( buf, 16, 2, 'complex64' );
* // returns <Complex64Array>
*/
function complexarray() {
	var nargs;
	var dtype;
	var ctor;

	nargs = arguments.length;
	if ( nargs && isString( arguments[ nargs-1 ] ) ) {
		nargs -= 1;
		dtype = arguments[ nargs ];
	} else {
		dtype = DEFAULT_DTYPE;
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( format( 'invalid argument. Must provide a recognized data type. Value: `%s`.', dtype ) );
	}
	if ( nargs <= 0 ) {
		return new ctor( 0 );
	}
	if ( nargs === 1 ) {
		return new ctor( arguments[0] );
	}
	if ( nargs === 2 ) {
		return new ctor( arguments[0], arguments[1] );
	}
	return new ctor( arguments[0], arguments[1], arguments[2] );
}


// EXPORTS //

module.exports = complexarray;
