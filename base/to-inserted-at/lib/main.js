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

var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );
var zeros = require( './../../../zeros' );
var dtype = require( './../../../dtype' );
var format = require( '@stdlib/string/format' );
var assign = require( './assign.js' );


// MAIN //

/**
* Returns a new array containing every element from an input array and with a provided value inserted at a specified index.
*
* @param {Collection} x - input array
* @param {integer} index - element index
* @param {*} value - value to insert
* @throws {RangeError} second argument must not exceed array bounds
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var v = toInsertedAt( x, 0, 5 );
* // returns [ 5, 1, 2, 3, 4 ]
*
* v = toInsertedAt( x, 1, 6 );
* // returns [ 1, 6, 2, 3, 4 ]
*
* v = toInsertedAt( x, -2, 7 );
* // returns  [ 1, 2, 3, 7, 4 ]
*/
function toInsertedAt( x, index, value ) {
	var out;

	index = normalizeIndex( index, x.length );
	if ( index < 0 ) {
		throw new RangeError( format( 'invalid argument. Index argument is out-of-bounds. Value: `%d`.', index ) );
	}
	out = zeros( x.length+1, dtype( x ) || 'generic' );
	assign( x, index, value, out, 1, 0 );
	return out;
}


// EXPORTS //

module.exports = toInsertedAt;
