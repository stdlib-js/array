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

// MODULES //

var filled = require( './../../../base/filled' );
var assign = require( './assign.js' );


// MAIN //

/**
* Cumulatively tests whether at least one element in a provided array is truthy.
*
* @param {Collection} x - input array
* @returns {Array} output array
*
* @example
* var x = [ false, false, true, false, false ];
*
* var y = cuany( x );
* // returns [ false, false, true, true, true ]
*/
function cuany( x ) {
	var y = filled( false, x.length );
	return assign( x, y, 1, 0 );
}


// EXPORTS //

module.exports = cuany;
