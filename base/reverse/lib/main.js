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
var floor = require( '@stdlib/math/base/special/floor' );


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
* var bool = hasMethod( [], 'reverse' );
* // returns true
*
* @example
* var bool = hasMethod( [], 'beep' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}

/**
* Reverses an array in-place.
*
* @private
* @param {Collection} x - input array
* @returns {Collection} input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = internal( x );
* // returns [ 4, 3, 2, 1 ]
*/
function internal( x ) {
	var tmp;
	var N;
	var M;
	var i;
	var j;

	N = floor( x.length/2 );
	M = x.length - 1;
	for ( i = 0; i < N; i++ ) {
		j = M - i;
		tmp = x[ i ];
		x[ i ] = x[ j ];
		x[ j ] = tmp;
	}
	return x;
}

/**
* Reverses an array in-place.
*
* @private
* @param {Object} x - input array object
* @returns {Collection} input array
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
*
* v = x.get( 0 );
* // returns 4
*/
function accessors( x ) {
	var data;
	var get;
	var set;
	var tmp;
	var N;
	var M;
	var i;
	var j;

	data = x.data;
	get = x.accessors[ 0 ];
	set = x.accessors[ 1 ];

	N = floor( data.length/2 );
	M = data.length - 1;
	for ( i = 0; i < N; i++ ) {
		j = M - i;
		tmp = get( data, i );
		set( data, i, get( data, j ) );
		set( data, j, tmp );
	}
	return data;
}


// MAIN //

/**
* Reverses an array in-place.
*
* @param {Collection} x - input array
* @returns {Collection} input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = reverse( x );
* // returns [ 4, 3, 2, 1 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var out = reverse( x );
* // returns <Int32Array>[ 4, 3, 2, 1 ]
*
* var bool = ( out === x );
* // returns true
*/
function reverse( x ) {
	var obj;
	if ( hasMethod( x, 'reverse' ) ) {
		return x.reverse();
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj );
	}
	return internal( x );
}


// EXPORTS //

module.exports = reverse;
