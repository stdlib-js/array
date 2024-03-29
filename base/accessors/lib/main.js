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

var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var getter = require( './../../../base/getter' );
var setter = require( './../../../base/setter' );
var accessorGetter = require( './../../../base/accessor-getter' );
var accessorSetter = require( './../../../base/accessor-setter' );
var dtype = require( './../../../dtype' );


// MAIN //

/**
* Returns element accessors for a provided array-like object.
*
* ## Notes
*
* -   The returned object has the following properties:
*
*     -   **accessorProtocol**: `boolean` indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param {Collection} x - array-like object
* @returns {Object} object containing accessor data
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var obj = accessors( x );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x, 2 );
* // returns 3
*/
function accessors( x ) {
	var dt = dtype( x );
	if ( isAccessorArray( x ) ) {
		return {
			'accessorProtocol': true,
			'accessors': [
				accessorGetter( dt ),
				accessorSetter( dt )
			]
		};
	}
	return {
		'accessorProtocol': false,
		'accessors': [
			getter( dt ),
			setter( dt )
		]
	};
}


// EXPORTS //

module.exports = accessors;
