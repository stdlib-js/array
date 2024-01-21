/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import contains = require( './../../../../base/assert/contains' );
import isAccessorArray = require( './../../../../base/assert/is-accessor-array' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Tests if an array contains a provided search value.
	*
	* @param x - input array
	* @param value - search value
	* @returns boolean indicating if an array contains a search value
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.contains( x, 2 );
	* // returns true
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var fcn = ns.contains.factory( x );
	* // returns <Function>
	*
	* var out = fcn( 2 );
	* // returns true
	*/
	contains: typeof contains;

	/**
	* Tests if an array-like object supports the accessor (get/set) protocol.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an accessor array
	*
	* @example
	* var Complex128Array = require( './../../../../complex128' );
	*
	* var arr = new Complex128Array( 10 );
	* var bool = ns.isAccessorArray( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isAccessorArray( [] );
	* // returns false
	*/
	isAccessorArray: typeof isAccessorArray;
}

/**
* Base array assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;