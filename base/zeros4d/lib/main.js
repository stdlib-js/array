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

var filled4d = require( './../../../base/filled4d' );


// MAIN //

/**
* Returns a zero-filled four-dimensional nested array.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @returns {Array} filled array
*
* @example
* var out = zeros4d( [ 1, 1, 1, 3 ] );
* // returns [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ]
*/
function zeros4d( shape ) {
	return filled4d( 0.0, shape );
}


// EXPORTS //

module.exports = zeros4d;
