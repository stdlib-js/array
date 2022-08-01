/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Copies the elements of an array-like object using accessor functions.
*
* @private
* @param {Object} x - array object
* @param {Collection} x.data - array data
* @param {Function} x.getter - getter
* @returns {Array} output array
*
* @example
* function getter( xbuf, idx ) {
*     return xbuf[ idx ] * 2;
* }
*
* var x = {
*     'data': [ 1, 2, 3 ],
*     'getter': getter
* };
*
* var out = accessors( x );
* // returns [ 2, 4, 6 ]
*/
function accessors( x ) {
	var xbuf;
	var out;
	var len;
	var get;
	var i;

	// Cache a reference to the array data:
	xbuf = x.data;

	// Cache a reference to the accessor for retrieving input array elements:
	get = x.getter;

	// Get the number of elements to copy:
	len = xbuf.length;

	// Loop over the elements...
	out = [];
	for ( i = 0; i < len; i++ ) {
		out.push( get( xbuf, i ) ); // ensure "fast" elements
	}
	return out;
}

/**
* Copies the elements of an array-like object.
*
* @private
* @param {Collection} x - input array
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = indexed( x );
* // returns [ 1, 2, 3 ]
*/
function indexed( x ) {
	var out;
	var len;
	var i;

	len = x.length;
	out = [];
	for ( i = 0; i < len; i++ ) {
		out.push( x[ i ] ); // ensure "fast" elements
	}
	return out;
}


// MAIN //

/**
* Copies the elements of an array-like object to a new "generic" array.
*
* @param {Collection} x - input array
* @returns {Array} output array
*
* @example
* var out = copy( [ 1, 2, 3 ] );
* // returns [ 1, 2, 3 ]
*/
function copy( x ) {
	var obj;

	// Determine whether the input array uses accessors:
	obj = arraylike2object( x );
	if ( obj.accessors ) {
		return accessors( obj );
	}
	// The input array does not use accessors, so we can perform normal `[i]` indexing...
	return indexed( x );
}


// EXPORTS //

module.exports = copy;
