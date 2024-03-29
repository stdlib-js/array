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

'use strict';

// MODULES //

var oneTo = require( './../../one-to' );
var dtype = require( './../../dtype' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
*
* @param {(TypedArray|Array|ComplexArray)} x - input array
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be an array or typed array
* @throws {TypeError} second argument must be a recognized data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = oneToLike( [ 0.0, 0.0 ] );
* // returns [ 1.0, 2.0 ]
*
* @example
* var arr = oneToLike( [ 0.0, 0.0 ], 'float32' );
* // returns <Float32Array>[ 1.0, 2.0 ]
*/
function oneToLike( x ) {
	var dt = dtype( x ); // delegate input argument validation to dtype resolution
	if ( dt === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.', x ) );
	}
	if ( arguments.length > 1 ) {
		dt = arguments[ 1 ];
	}
	return oneTo( x.length, dt );
}


// EXPORTS //

module.exports = oneToLike;
