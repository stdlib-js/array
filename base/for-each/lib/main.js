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
* var bool = hasMethod( [], 'forEach' );
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
* Invokes a callback function once for each array element.
*
* @private
* @param {Collection} x - input array
* @param {Function} clbk - callback function
* @param {*} thisArg - callback execution context
* @returns {void}
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var x = [ 1, 2, 3, 4 ];
*
* forEach( x, naryFunction( log, 1 ) );
*/
function internal( x, clbk, thisArg ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		clbk.call( thisArg, x[ i ], i, x );
	}
}

/**
* Invokes a callback function once for each array element.
*
* @private
* @param {Collection} x - input array
* @param {Function} clbk - callback function
* @param {*} thisArg - callback execution context
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 3, 4 ] ) );
*
* accessors( x, naryFunction( log, 1 ) );
*/
function accessors( x, clbk, thisArg ) {
	var data;
	var get;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	for ( i = 0; i < data.length; i++ ) {
		clbk.call( thisArg, get( data, i ), i, data );
	}
}


// MAIN //

/**
* Invokes a callback function once for each array element.
*
* @private
* @param {Collection} x - input array
* @param {Function} clbk - callback function
* @param {*} thisArg - callback execution context
* @returns {void}
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var x = [ 1, 2, 3, 4 ];
*
* forEach( x, naryFunction( log, 1 ) );
*/
function forEach( x, clbk, thisArg ) {
	var obj;
	if ( hasMethod( x, 'forEach' ) ) {
		return x.forEach( clbk, thisArg );
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj, clbk, thisArg );
	}
	return internal( x, clbk, thisArg );
}


// EXPORTS //

module.exports = forEach;
