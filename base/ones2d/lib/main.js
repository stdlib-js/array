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

var filled2d = require( './../../../base/filled2d' );


// MAIN //

/**
* Returns a two-dimensional nested array filled with ones.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @returns {ArrayArray} filled array
*
* @example
* var out = ones2d( [ 1, 3 ] );
* // returns [ [ 1.0, 1.0, 1.0 ] ]
*/
function ones2d( shape ) {
	return filled2d( 1.0, shape );
}


// EXPORTS //

module.exports = ones2d;
