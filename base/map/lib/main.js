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
var assign = require( './assign.js' );


// FUNCTIONS //

/**
* Tests whether an object has a specified method.
*
* @private
* @param {Object} obj - input object
* @param {string} method - method name
* @returns {boolean} boolean indicating whether an object has a specified method
*
* @example
* var bool = hasMethod( [], 'map' );
* // returns true
*
* @example
* var bool = hasMethod( [], 'beep' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}


// MAIN //

/**
* Applies a callback function to elements in an input array and assigns results to elements in a new output array.
*
* @param {Collection} x - input array
* @param {Function} fcn - callback function
* @param {*} [thisArg] - callback execution context
* @returns {Collection} output array
*
* @example
* var ones = require( '@stdlib/array/base/ones' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = ones( 4 );
* var y = map( x, scale );
* // returns [ 10.0, 10.0, 10.0, 10.0 ]
*/
function map( x, fcn, thisArg ) {
	if ( hasMethod( x, 'map' ) ) {
		return x.map( fcn, thisArg );
	}
	return assign( x, zeros( x.length ), 1, 0, fcn, thisArg );
}


// EXPORTS //

module.exports = map;
