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

var resolveGetter = require( './../../../base/resolve-getter' );


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
* Returns a new array after replacing an index with a given value.
*
* @param {Collection} x - input array
* @param {integer} index - element index
* @param {any} value - value assigned to that particular index
* @throws {RangeError} if the index is out of bounds
* @returns {Collection} modified array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var v = withArray( x, 0 ,5 );
* // returns [ 5, 2, 3, 4 ]
*
* v = withArray( x, 1 , 6 );
* // returns [ 1, 6, 3, 4 ]
*
* v = withArray(x, -2 , 7);
* // returns  [ 1, 2, 7, 4 ]
*/
function withArray( x, index, value ) {
	var modifiedArray= [];
	var temp;
	var get;
	var k;

	if ( index < 0 ) {
		index += x.length;
	}

	if ( index < 0 || index >= x.length ) {
		throw new RangeError( 'Index out of bounds' );
	}

	if ( hasMethod( x, 'with' ) ) {
		return x.with( index, value );
	}

	for ( k = 0; k < x.length; k++ ) {
		if ( k === index ) {
			modifiedArray.push( value );
		}
		else {
			get= resolveGetter( x );
			temp = get( x, k );
			modifiedArray.push( temp );
		}
	}
	return modifiedArray;
}


// EXPORTS //

module.exports = withArray;
