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

var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var resolveGetter = require( './../../../base/resolve-getter' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// FUNCTIONS //

/**
* Tests whether at least one element in a provided indexed array has a specified own property key-value pair.
*
* @private
* @param {Collection} arr - input array
* @param {(string|symbol|number)} prop - property
* @param {*} value - property value
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
* var bool = indexed( [ o1, o2, o3 ], 'b', 2 );
* // returns true
*
* bool = indexed( [ o1, o2, o3 ], 'b', 3 );
* // returns false
*
* bool = indexed( [ o1, o2, o3 ], 'd', 0 );
* // returns false
*/
function indexed( arr, prop, value ) {
	var v;
	var i;
	for ( i = 0; i < arr.length; i++ ) {
		v = arr[ i ];
		if ( hasOwnProp( v, prop ) && v[ prop ] === value ) {
			return true;
		}
	}
	return false;
}

/**
* Tests whether at least one element in a provided accessor array has a specified own property key-value pair.
*
* @private
* @param {Collection} arr - input array
* @param {(string|symbol|number)} prop - property
* @param {*} value - property value
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
* var bool = accessors( toAccessorArray( [ o1, o2, o3 ] ), 'b', 2 );
* // returns true
*
* bool = accessors( toAccessorArray( [ o1, o2, o3 ] ), 'b', 3 );
* // returns false
*
* bool = accessors( toAccessorArray( [ o1, o2, o3 ] ), 'd', 0 );
* // returns false
*/
function accessors( arr, prop, value ) {
	var get;
	var v;
	var i;

	get = resolveGetter( arr );
	for ( i = 0; i < arr.length; i++ ) {
		v = get( arr, i );
		if ( hasOwnProp( v, prop ) && v[ prop ] === value ) {
			return true;
		}
	}
	return false;
}


// MAIN //

/**
* Tests whether at least one element in a provided array has a specified own property key-value pair.
*
* @param {Collection} arr - input array
* @param {(string|symbol|number)} prop - property
* @param {*} value - property value
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
* var bool = anyIsEntry( [ o1, o2, o3 ], 'b', 2 );
* // returns true
*
* bool = anyIsEntry( [ o1, o2, o3 ], 'b', 3 );
* // returns false
*
* bool = anyIsEntry( [ o1, o2, o3 ], 'd', 0 );
* // returns false
*/
function anyIsEntry( arr, prop, value ) {
	if ( isAccessorArray( arr ) ) {
		return accessors( arr, prop, value );
	}
	return indexed( arr, prop, value );
}


// EXPORTS //

module.exports = anyIsEntry;
