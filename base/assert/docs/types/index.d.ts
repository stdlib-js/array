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
import hasSameValues = require( './../../../../base/assert/has-same-values' );
import isAccessorArray = require( './../../../../base/assert/is-accessor-array' );
import isComplex64Array = require( './../../../../base/assert/is-complex64array' );
import isComplex128Array = require( './../../../../base/assert/is-complex128array' );

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
	* Tests if two arrays have the same values.
	*
	* ## Notes
	*
	* -   If provided arrays of unequal length, the function returns `false`.
	*
	* @param x - first input array
	* @param y - second input array
	* @returns boolean indicating whether both arrays have the same values
	*
	* @example
	* var x = [ 0, 0, 1, 0 ];
	* var y = [ 0, 0, 1, 0 ];
	*
	* var out = ns.hasSameValues( x, y );
	* // returns true
	*/
	hasSameValues: typeof hasSameValues;

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

	/**
	* Tests if a value is a `Complex64Array`.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `Complex64Array`
	*
	* @example
	* var Complex64Array = require( './../../../../complex64' );
	*
	* var arr = new Complex64Array( 10 );
	* var bool = ns.isComplex64Array( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isComplex64Array( [] );
	* // returns false
	*/
	isComplex64Array: typeof isComplex64Array;

	/**
	* Tests if a value is a `Complex128Array`.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `Complex128Array`
	*
	* @example
	* var Complex128Array = require( './../../../../complex128' );
	*
	* var arr = new Complex128Array( 10 );
	* var bool = ns.isComplex128Array( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isComplex128Array( [] );
	* // returns false
	*/
	isComplex128Array: typeof isComplex128Array;
}

/**
* Base array assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;