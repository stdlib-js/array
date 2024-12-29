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

// MAIN //

/**
* Removes an element from an array.
*
* @param {Array} x - input array
* @param {integer} index - element index
* @returns {Array} mutated input array
*
* @example
* var x = [ 1, 1, 2, 3, 3 ];
*
* var y = removeAt( x, -3 );
* // returns [ 1, 1, 3, 3 ]
*
* var bool = ( x === y );
* // returns true
*/
function removeAt( x, index ) {
	var len;
	var i;
	var j;

	len = x.length;
	if ( index < 0 ) {
		index += len;
		if ( index < 0 ) {
			return x;
		}
	} else if ( index >= len ) {
		return x;
	}
	j = index;
	for ( i = index+1; i < len; i++ ) {
		x[ j ] = x[ i ];
		j += 1;
	}
	x.length = j;
	return x;
}


// EXPORTS //

module.exports = removeAt;
