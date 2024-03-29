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

var arraylike2object = require( './../../../base/arraylike2object' );


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
* var bool = hasMethod( [], 'beep' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}

/**
* Returns a new array with elements in reverse order.
*
* @private
* @param {Collection} x - input array
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = internal( x );
* // returns [ 4, 3, 2, 1 ]
*/
function internal( x ) {
	var out;
	var i;

	out = [];
	for ( i = x.length-1; i >= 0; i-- ) {
		out.push( x[ i ] );
	}
	return out;
}

/**
* Returns a new array with elements in reverse order.
*
* @private
* @param {Object} x - input array object
* @returns {Array} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var v = x.get( 0 );
* // returns 1
*
* var out = accessors( arraylike2object( x ) );
* // returns [ 4, 3, 2, 1 ]
*/
function accessors( x ) {
	var data;
	var get;
	var out;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	out = [];
	for ( i = data.length-1; i >= 0; i-- ) {
		out.push( get( data, i ) );
	}
	return out;
}


// MAIN //

/**
* Returns a new array with elements in reverse order.
*
* @param {Collection} x - input array
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = toReversed( x );
* // returns [ 4, 3, 2, 1 ]
*
* var bool = ( out === x );
* // returns false
*/
function toReversed( x ) {
	var obj;
	if ( hasMethod( x, 'toReversed' ) ) {
		return x.toReversed();
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj );
	}
	return internal( x );
}


// EXPORTS //

module.exports = toReversed;
