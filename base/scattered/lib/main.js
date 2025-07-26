/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var zeros = require( './../../../base/zeros' );
var put = require( './../../../base/put' );


// MAIN //

/**
* Scatters a list of provided values to specified indices in a new zero-filled "generic" array.
*
* @param {NonNegativeInteger} len - output array length
* @param {IntegerArray} indices - list of indices
* @param {Collection} values - values to scatter
* @param {string} mode - index mode
* @throws {Error} third argument must be broadcast compatible with the second argument
* @returns {Array} output array
*
* @example
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = scattered( 4, indices, values, 'throw' );
* // returns [ 0, 20, 30, 0 ]
*
* @example
* var indices = [ 1, 2 ];
* var values = [ 30 ];
*
* var out = scattered( 4, indices, values, 'throw' );
* // returns [ 0, 30, 30, 0 ]
*/
function scattered( len, indices, values, mode ) {
	return put( zeros( len ), indices, values, mode );
}


// EXPORTS //

module.exports = scattered;
