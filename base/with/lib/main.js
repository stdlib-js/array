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

var slice = require( './../../../base/slice' );
var resolveSetter = require( './../../../base/resolve-setter' );
var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );
var format = require( '@stdlib/string/format' );


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
* Returns a new array with the element at the specified index replaced with a provided value.
*
* @param {Collection} x - input array
* @param {integer} index - element index
* @param {*} value - replacement value
* @throws {RangeError} second argument must not exceed array bounds
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var v = arrayWith( x, 0, 5 );
* // returns [ 5, 2, 3, 4 ]
*
* v = arrayWith( x, 1, 6 );
* // returns [ 1, 6, 3, 4 ]
*
* v = arrayWith( x, -2, 7 );
* // returns  [ 1, 2, 7, 4 ]
*/
function arrayWith( x, index, value ) {
	var out;
	var set;
	if ( hasMethod( x, 'with' ) ) {
		return x.with( index, value );
	}
	index = normalizeIndex( index, x.length-1 );
	if ( index < 0 ) {
		throw new RangeError( format( 'invalid argument. Index argument is out-of-bounds. Value: `%d`.', index ) );
	}
	out = slice( x, 0, x.length );
	set = resolveSetter( out );
	set( out, index, value );
	return out;
}


// EXPORTS //

module.exports = arrayWith;
