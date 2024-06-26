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

var format = require( '@stdlib/string/format' );
var dtype = require( './../../dtype' );
var full = require( './../../full' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );


// MAIN //

/**
* Creates a filled array having the same length and data type as a provided input array.
*
* @param {(Array|TypedArray|ComplexArray)} x - input array
* @param {number} value - fill value
* @param {string} [dtype] - data type
* @throws {TypeError} first argument must be an array or typed array
* @throws {TypeError} third argument must be a recognized data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = fullLike( [ 0.0, 0.0 ], 1.0 );
* // returns [ 1.0, 1.0 ]
*
* @example
* var arr = fullLike( [ 0.0, 0.0 ], 1.0, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/
function fullLike( x, value ) {
	var dt;
	var v;

	dt = dtype( x ); // delegate input argument validation to dtype resolution
	if ( dt === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.', x ) );
	}
	if ( arguments.length > 2 ) {
		dt = arguments[ 2 ];
	}
	if ( typeof value === 'number' ) {
		if ( dt === 'complex128' ) {
			v = new Complex128( value, 0.0 );
		} else if ( dt === 'complex64' ) {
			v = new Complex64( value, 0.0 );
		} else {
			v = value;
		}
	} else {
		v = value;
	}
	return full( x.length, v, dt );
}


// EXPORTS //

module.exports = fullLike;
