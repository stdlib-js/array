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

var isAccessorArray = require( './../../../../base/assert/is-accessor-array' );
var resolveGetter = require( './../../../../base/resolve-getter' );
var hasProp = require( '@stdlib/assert/has-property' );


// FUNCTIONS //

/**
* Tests whether at least one element in a provided indexed array has a specified property, either own or inherited.
*
* @private
* @param {Collection} arr - input array
* @param {(string|symbol)} prop - property
* @returns {boolean} result
*
* @example
* var o1 = {
*     'a': 1
* };
* var o2 = {
*     'b': 2
* };
* var o3 = {
*     'c': 3
* };
*
* var bool = indexed( [ o1, o2, o3 ], 'b' );
* // returns true
*
* bool = indexed( [ o1, o2, o3 ], 'd' );
* // returns false
*/
function indexed( arr, prop ) {
	var i;
	for ( i = 0; i < arr.length; i++ ) {
		if ( hasProp( arr[ i ], prop ) ) {
			return true;
		}
	}
	return false;
}

/**
* Tests whether at least one element in a provided accessor array has a specified property, either own or inherited.
*
* @private
* @param {Collection} arr - input array
* @param {(string|symbol)} prop - property
* @returns {boolean} result
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var o1 = {
*     'a': 1
* };
* var o2 = {
*     'b': 2
* };
* var o3 = {
*     'c': 3
* };
*
* var bool = accessors( toAccessorArray( [ o1, o2, o3 ] ), 'b' );
* // returns true
*
* bool = accessors( toAccessorArray( [ o1, o2, o3 ] ), 'd' );
* // returns false
*/
function accessors( arr, prop ) {
	var get;
	var i;

	get = resolveGetter( arr );
	for ( i = 0; i < arr.length; i++ ) {
		if ( hasProp( get( arr, i ), prop ) ) {
			return true;
		}
	}
	return false;
}


// MAIN //

/**
* Tests whether at least one element in a provided array has a specified property, either own or inherited.
*
* @param {Collection} arr - input array
* @param {(string|symbol)} prop - property
* @returns {boolean} result
*
* @example
* var o1 = {
*     'a': 1
* };
* var o2 = {
*     'b': 2
* };
* var o3 = {
*     'c': 3
* };
*
* var bool = anyHasProp( [ o1, o2, o3 ], 'b' );
* // returns true
*
* bool = anyHasProp( [ o1, o2, o3 ], 'd' );
* // returns false
*/
function anyHasProp( arr, prop ) {
	if ( isAccessorArray( arr ) ) {
		return accessors( arr, prop );
	}
	return indexed( arr, prop );
}


// EXPORTS //

module.exports = anyHasProp;
