/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var dtype = require( './../../dtype' );
var full = require( './../../full' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var Z128 = new Complex128( NaN, NaN );
var Z64 = new Complex64( NaN, NaN );
var DTYPES = [ 'float64', 'float32', 'complex128', 'complex64', 'generic' ];


// MAIN //

/**
* Creates an array filled with NaNs and having the same length and data type as a provided input array.
*
* @param {(Array|TypedArray|ComplexArray)} x - input array
* @param {string} [dtype] - data type
* @throws {TypeError} first argument must be an array or typed array
* @throws {TypeError} second argument must be a supported data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = nansLike( [ 0.0, 0.0 ] );
* // returns [ NaN, NaN ]
*
* @example
* var arr = nansLike( [ 0.0, 0.0 ], 'float32' );
* // returns <Float32Array>[ NaN, NaN ]
*/
function nansLike( x ) {
	var dt;
	var v;

	dt = dtype( x ); // delegate input argument validation to dtype resolution
	if ( dt === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.', x ) );
	}
	if ( arguments.length > 1 ) {
		dt = arguments[ 1 ];
		if ( DTYPES.indexOf( dt ) === -1 ) {
			throw new TypeError( format( 'invalid argument. Second argument must be one of the following: "%s". Value: `%s`.', DTYPES.join( '", "' ), dt ) );
		}
	} else if ( DTYPES.indexOf( dt ) === -1 ) {
		throw new TypeError( format( 'invalid argument. First argument must be one of the following data types: "%s". Value: `%s`.', DTYPES.join( '", "' ), dt ) );
	}
	if ( dt === 'complex128' ) {
		v = Z128;
	} else if ( dt === 'complex64' ) {
		v = Z64;
	} else {
		v = NaN;
	}
	return full( x.length, v, dt );
}


// EXPORTS //

module.exports = nansLike;
