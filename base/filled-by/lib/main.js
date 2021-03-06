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

// MAIN //

/**
* Returns a filled "generic" array according to a provided callback function.
*
* @param {NonNegativeInteger} len - array length
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - callback function execution context
* @returns {Array} filled array
*
* @example
* var constantFunction = require( '@stdlib/utils/constant-function' );
*
* var out = filledBy( 3, constantFunction( 'beep' ) );
* // returns [ 'beep', 'beep', 'beep' ]
*/
function filledBy( len, clbk, thisArg ) {
	var arr;
	var i;

	// Manually push elements in order to ensure "fast" elements...
	arr = [];
	for ( i = 0; i < len; i++ ) {
		arr.push( clbk.call( thisArg, i ) );
	}
	return arr;
}


// EXPORTS //

module.exports = filledBy;
