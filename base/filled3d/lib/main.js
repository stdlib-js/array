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
* Returns a filled three-dimensional nested array.
*
* @param {*} value - fill value
* @param {NonNegativeIntegerArray} shape - array shape
* @returns {Array} filled array
*
* @example
* var out = filled3d( 0.0, [ 1, 1, 3 ] );
* // returns [ [ [ 0.0, 0.0, 0.0 ] ] ]
*
* @example
* var out = filled3d( 'beep', [ 1, 3, 1 ] );
* // returns [ [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ] ]
*/
function filled3d( value, shape ) {
	var out;
	var a1;
	var S0;
	var S1;
	var S2;
	var i2;
	var i1;

	S0 = shape[ 2 ];
	S1 = shape[ 1 ];
	S2 = shape[ 0 ];

	// Manually push elements in order to ensure "fast" elements...
	out = [];
	for ( i2 = 0; i2 < S2; i2++ ) {
		a1 = [];
		for ( i1 = 0; i1 < S1; i1++ ) {
			a1.push( filled( value, S0 ) );
		}
		out.push( a1 );
	}
	return out;
}


// EXPORTS //

module.exports = filled3d;
