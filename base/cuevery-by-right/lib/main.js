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
* Cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left.
*
* @param {Collection} x - input array
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @returns {Array} output array
*
* @example
* function fcn( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 0, 1, 1, 1 ];
*
* var y = cueveryByRight( x, fcn );
* // returns [ true, true, true, false, false ]
*/
function cueveryByRight( x, predicate, thisArg ) {
	var out = filled( true, x.length );
	return assign( x, out, 1, 0, predicate, thisArg );
}


// EXPORTS //

module.exports = cueveryByRight;
