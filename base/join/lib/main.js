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
* var bool = hasMethod( [], 'join' );
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
* Returns a string created by joining array elements using a specified separator when input is an accessor array.
*
* @private
* @param {Object} x - input array object
* @param {integer} separator - separator
* @returns {string} joined string
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 3, 4 ] ) );
*
* var out = accessors( x, ',' );
* // returns '1,2,3,4'
*/
function accessors( x, separator ) {
	var output;
	var data;
	var get;
	var i;
	var v;
	data = x.data;
	get = x.accessors[ 0 ];
	output = '';
	for ( i = 0; i < data.length; i++ ) {
		v = get( data, i );
		if ( typeof v === 'undefined' || v === null ) {
			v = '';
		}
		output += v;
		if ( i < data.length - 1 ) {
			output += separator;
		}
	}
	return output;
}

/**
* Returns a string created by manually joining array elements using a specified separator.
*
* @private
* @param {Object} x - input array object
* @param {integer} separator - separator
* @returns {string} joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var out = constructString( x, ',' );
* // returns '1,2,3,4'
*/
function constructString( x, separator ) {
	var i;
	var s;
	var v;
	s = '';
	for ( i = 0; i < x.length; i++ ) {
		v = x[ i ];
		if ( typeof v === 'undefined' || v === null ) {
			v = '';
		}
		s += v;
		if ( i < x.length - 1 ) {
			s += separator;
		}
	}
	return s;
}


// MAIN //

/**
* Returns a string created by joining array elements using a specified separator.
*
* @param {Collection} x - input array
* @param {integer} separator - separator to be used in string
* @returns {string} joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = join( x, ',' );
* // returns '1,2,3,4'
*
* @example
* var x = [ 1, 2, 3, null, undefined,  4 ];
*
* var out = join( x, '-' );
* // returns '1-2-3---4'
*/
function join( x, separator ) {
	var obj;
	if ( hasMethod( x, 'join' ) ) {
		return x.join( separator );
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj, separator );
	}
	if ( obj.dtype === 'generic' || obj.dtype === null ) {
		return constructString( x, separator );
	}
	return x.join( separator );
}


// EXPORTS //

module.exports = join;
