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

var zeros = require( './../../zeros' );


// MAIN //

/**
* Creates an uninitialized array having a specified length.
*
* @private
* @param {NonNegativeInteger} length - array length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a recognized data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = empty( 2 );
* // returns <Float64Array>
*
* @example
* var arr = empty( 2, 'float32' );
* // returns <Float32Array>
*/
function empty( length ) {
	if ( arguments.length > 1 ) {
		return zeros( length, arguments[ 1 ] );
	}
	return zeros( length );
}


// EXPORTS //

module.exports = empty;
