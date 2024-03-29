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

var filled = require( './../../../base/filled' );


// MAIN //

/**
* Returns a filled two-dimensional nested array.
*
* @param {*} value - fill value
* @param {NonNegativeIntegerArray} shape - array shape
* @returns {Array} filled array
*
* @example
* var out = filled2d( 0.0, [ 1, 3 ] );
* // returns [ [ 0.0, 0.0, 0.0 ] ]
*
* @example
* var out = filled2d( 'beep', [ 3, 1 ] );
* // returns [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ]
*/
function filled2d( value, shape ) {
	var arr;
	var S0;
	var S1;
	var i;

	S0 = shape[ 1 ];
	S1 = shape[ 0 ];

	// Manually push elements in order to ensure "fast" elements...
	arr = [];
	for ( i = 0; i < S1; i++ ) {
		arr.push( filled( value, S0 ) );
	}
	return arr;
}


// EXPORTS //

module.exports = filled2d;
