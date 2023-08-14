/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import AccessorArray = require( './../../../base/accessor' );
import accessorGetter = require( './../../../base/accessor-getter' );
import accessorSetter = require( './../../../base/accessor-setter' );
import accessors = require( './../../../base/accessors' );
import arraylike2object = require( './../../../base/arraylike2object' );
import assert = require( './../../../base/assert' );
import cartesianPower = require( './../../../base/cartesian-power' );
import cartesianProduct = require( './../../../base/cartesian-product' );
import cartesianSquare = require( './../../../base/cartesian-square' );
import copy = require( './../../../base/copy' );
import copyIndexed = require( './../../../base/copy-indexed' );
import filled = require( './../../../base/filled' );
import filledBy = require( './../../../base/filled-by' );
import flatten = require( './../../../base/flatten' );
import flatten2d = require( './../../../base/flatten2d' );
import flatten2dBy = require( './../../../base/flatten2d-by' );
import flatten3d = require( './../../../base/flatten3d' );
import flatten3dBy = require( './../../../base/flatten3d-by' );
import flatten4d = require( './../../../base/flatten4d' );
import flatten4dBy = require( './../../../base/flatten4d-by' );
import flatten5d = require( './../../../base/flatten5d' );
import flatten5dBy = require( './../../../base/flatten5d-by' );
import getter = require( './../../../base/getter' );
import incrspace = require( './../../../base/incrspace' );
import last = require( './../../../base/last' );
import linspace = require( './../../../base/linspace' );
import logspace = require( './../../../base/logspace' );
import nCartesianProduct = require( './../../../base/n-cartesian-product' );
import ones = require( './../../../base/ones' );
import setter = require( './../../../base/setter' );
import take = require( './../../../base/take' );
import toAccessorArray = require( './../../../base/to-accessor-array' );
import unitspace = require( './../../../base/unitspace' );
import zeroTo = require( './../../../base/zero-to' );
import zeros = require( './../../../base/zeros' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Accessor array constructor.
	*
	* @param arr - input array
	* @returns accessor array
	*
	* @example
	* var arr = new ns.AccessorArray( [ 1, 2, 3 ] );
	* // returns <ns.AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*/
	AccessorArray: typeof AccessorArray;

	/**
	* Returns an accessor function for retrieving an element from an array-like object supporting the get/set protocol.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var arr = [ 1, 2, 3, 4 ];
	*
	* function aget( idx ) {
	*    return arr[ idx ];
	* }
	*
	* function aset( value, idx ) {
	*    arr[ idx ] = value;
	* }
	*
	* arr.get = aget;
	* arr.set = aset;
	*
	* var get = ns.accessorGetter( 'foo' );
	* var v = get( arr, 2 );
	* // returns 3
	*/
	accessorGetter: typeof accessorGetter;

	/**
	* Returns an accessor function for setting an element in an array-like object supporting the get/set protocol.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var arr = [ 1, 2, 3, 4 ];
	*
	* function aget( idx ) {
	*    return arr[ idx ];
	* }
	*
	* function aset( value, idx ) {
	*    arr[ idx ] = value;
	* }
	*
	* arr.get = aget;
	* arr.set = aset;
	*
	* var set = ns.accessorSetter( 'foo' );
	* set( arr, 2, 10 );
	*
	* var v = arr.get( 2 );
	* // returns 3
	*/
	accessorSetter: typeof accessorSetter;

	/**
	* Returns element accessors for a provided array-like object.
	*
	* ## Notes
	*
	* -   The intent of this function is to provide a minimal abstraction over how elements are accessed when operating on indexed (i.e., array-like objects supporting element accesss via integer indices using bracket `[]` syntax) and accessor (i.e., array-like objects supporting the get/set protocol in which explicit `get` and `set` methods are used for element access) array-like objects.
	*
	* @param x - input array
	* @returns object containing accessor data
	*
	* @example
	* var x = {
	*     '0': 1,
	*     '1': 2,
	*     '2': 3,
	*     '4': 4,
	*     'length': 4
	 };
	* var obj = ns.accessors( x );
	* // returns {...}
	*
	* var bool = obj.accessorProtocol;
	* // returns false
	*
	* var fcns = obj.ns.accessors;
	* // returns [ <Function>, <Function> ]
	*
	* var v = fcns[ 0 ]( x, 2 );
	* // returns 3
	*/
	accessors: typeof accessors;

	/**
	* Converts a one-dimensional array-like object to an object likely to have the same "shape".
	*
	* ## Notes
	*
	* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding array data to ensure that internal functions operating on arrays are provided consistent argument "shapes".
	*
	* @param x - input array
	* @returns object containing array data
	*
	* @example
	* var x = {
	*     '0': 1,
	*     '1': 2,
	*     '2': 3,
	*     '4': 4,
	*     'length': 4
	 };
	* var obj = ns.arraylike2object( x );
	* // returns {...}
	*
	* var bool = obj.accessorProtocol;
	* // returns false
	*
	* var fcns = obj.accessors;
	* // returns [ <Function>, <Function> ]
	*
	* var v = fcns[ 0 ]( x.data, 2 );
	* // returns 3
	*/
	arraylike2object: typeof arraylike2object;

	/**
	* Base array assertion utilities.
	*/
	assert: typeof assert;

	/**
	* Returns the Cartesian power.
	*
	* ## Notes
	*
	* -   If provided an empty array, the function returns an empty array.
	* -   If `n` is less than or equal to zero, the function returns an empty array.
	*
	* @param x - input array
	* @param n - power
	* @returns Cartesian product
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.cartesianPower( x, 2 );
	* // returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
	*/
	cartesianPower: typeof cartesianPower;

	/**
	* Returns the Cartesian product.
	*
	* ## Notes
	*
	* -   If provided one or more empty arrays, the function returns an empty array.
	*
	* @param x1 - first input array
	* @param x2 - second input array
	* @returns Cartesian product
	*
	* @example
	* var x1 = [ 1, 2, 3 ];
	* var x2 = [ 4, 5 ];
	*
	* var out = ns.cartesianProduct( x1, x2 );
	* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
	*/
	cartesianProduct: typeof cartesianProduct;

	/**
	* Returns the Cartesian square.
	*
	* ## Notes
	*
	* -   If provided an empty array, the function returns an empty array.
	*
	* @param x - input array
	* @returns Cartesian product
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.cartesianSquare( x );
	* // returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
	*/
	cartesianSquare: typeof cartesianSquare;

	/**
	* Copies the elements of an array-like object to a new "generic" array.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.copy( x );
	* // returns [ 1, 2, 3 ]
	*/
	copy: typeof copy;

	/**
	* Copies the elements of an indexed array-like object to a new "generic" array.
	*
	* @param x - array length
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.copyIndexed( x );
	* // returns [ 1, 2, 3 ]
	*/
	copyIndexed: typeof copyIndexed;

	/**
	* Returns a filled "generic" array.
	*
	* @param value - fill value
	* @param len - array length
	* @returns output array
	*
	* @example
	* var out = ns.filled( 0.0, 3 );
	* // returns [ 0.0, 0.0, 0.0 ]
	*
	* @example
	* var out = ns.filled( 'beep', 3 );
	* // returns [ 'beep', 'beep', 'beep' ]
	*/
	filled: typeof filled;

	/**
	* Returns a filled "generic" array according to a provided callback function.
	*
	* @param len - array length
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( `@stdlib/utils/constant-function` );
	*
	* var arr = ns.filledBy( 5, constantFunction( 1.0 ) );
	* // returns [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	*/
	filledBy: typeof filledBy;

	/**
	* Flattens an n-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten( x, [ 2, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten( x, [ 2, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten: typeof flatten;

	/**
	* Flattens a two-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten2d( x, [ 2, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten2d( x, [ 2, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten2d: typeof flatten2d;

	/**
	* Flattens a two-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten2dBy( x, [ 2, 2 ], false, scale );
	* // returns [ 2, 4, 6, 8 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten2dBy( x, [ 2, 2 ], true, scale );
	* // returns [ 2, 6, 4, 8 ]
	*/
	flatten2dBy: typeof flatten2dBy;

	/**
	* Flattens a three-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
	*
	* var out = ns.flatten3d( x, [ 2, 1, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
	*
	* var out = ns.flatten3d( x, [ 2, 1, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten3d: typeof flatten3d;

	/**
	* Flattens a three-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var out = ns.flatten3dBy( x, [ 2, 1, 2 ], false, scale );
	* // returns [ 2, 4, 6, 8 ]
	*
	* @example
	* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var out = ns.flatten3dBy( x, [ 2, 1, 2 ], true, scale );
	* // returns [ 2, 6, 4, 8 ]
	*/
	flatten3dBy: typeof flatten3dBy;

	/**
	* Flattens a four-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = ns.flatten4d( x, [ 2, 1, 1, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = ns.flatten4d( x, [ 2, 1, 1, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten4d: typeof flatten4d;

	/**
	* Flattens a four-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = ns.flatten4dBy( x, [ 2, 1, 1, 2 ], false, scale );
	* // returns [ 2, 4, 6, 8 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = ns.flatten4dBy( x, [ 2, 1, 1, 2 ], true, scale );
	* // returns [ 2, 6, 4, 8 ]
	*/
	flatten4dBy: typeof flatten4dBy;

	/**
	* Flattens a five-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
	*
	* var out = ns.flatten5d( x, [ 2, 1, 1, 1, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
	*
	* var out = ns.flatten5d( x, [ 2, 1, 1, 1, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten5d: typeof flatten5d;

	/**
	* Flattens a five-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
	*
	* var out = ns.flatten5dBy( x, [ 2, 1, 1, 1, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
	*
	* var out = ns.flatten5dBy( x, [ 2, 1, 1, 1, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten5dBy: typeof flatten5dBy;

	/**
	* Returns an accessor function for retrieving an element from an indexed array-like object.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var dtype = require( `@stdlib/array/dtype` );
	*
	* var arr = [ 1, 2, 3, 4 ];
	*
	* var get = ns.getter( dtype( arr ) );
	* var v = get( arr, 2 );
	* // returns 3
	*/
	getter: typeof getter;

	/**
	* Generates a linearly spaced numeric array according to a provided increment.
	*
	* @param x1 - first array value
	* @param x2 - array element bound
	* @param increment - increment
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.incrspace( 0, 11, 2 );
	* // returns [ 0, 2, 4, 6, 8, 10 ]
	*/
	incrspace: typeof incrspace;

	/**
	* Returns the last element of an array-like object.
	*
	* @param arr - input array
	* @returns last element
	*
	* @example
	* var arr = [ 1, 2, 3 ];
	*
	* var out = ns.last( x );
	* // returns 3
	*/
	last: typeof last;

	/**
	* Generates a linearly spaced numeric array.
	*
	* @param x1 - first array value
	* @param x2 - last array value
	* @param len - length of output array
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.linspace( 0, 100, 6 );
	* // returns [ 0, 20, 40, 60, 80, 100 ]
	*/
	linspace: typeof linspace;

	/**
	* Generates a logarithmically spaced numeric array.
	*
	* @param a - exponent of start value
	* @param b - exponent of end value
	* @param len - length of output array
	* @returns logarithmically spaced numeric array
	*
	* @example
	* var arr = ns.logspace( 0, 2, 6 );
	* // returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
	*/
	logspace: typeof logspace;

	/**
	* Returns the n-fold Cartesian product.
	*
	* ## Notes
	*
	* -   If provided one or more empty arrays, the function returns an empty array.
	*
	* @param x1 - first input array
	* @param x2 - second input array
	* @param xN - additional input arrays
	* @returns Cartesian product
	*
	* @example
	* var x1 = [ 1, 2, 3 ];
	* var x2 = [ 4, 5 ];
	*
	* var out = ns.nCartesianProduct( x1, x2 );
	* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
	*/
	nCartesianProduct: typeof nCartesianProduct;

	/**
	* Returns a "generic" array filled with ones.
	*
	* @param len - array length
	* @returns output array
	*
	* @example
	* var out = ns.ones( 3 );
	* // returns [ 1.0, 1.0, 1.0 ]
	*/
	ones: typeof ones;

	/**
	* Returns an accessor function for setting an element in an indexed array-like object.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var dtype = require( `@stdlib/array/dtype` );
	*
	* var arr = [ 0, 0, 0, 0 ];
	*
	* var set = ns.setter( dtype( arr ) );
	* set( arr, 2, 3 );
	*
	* var v = arr[ 2 ];
	* // returns 3
	*/
	setter: typeof setter;

	/**
	* Takes element from an array.
	*
	* ## Notes
	*
	* -   The function does **not** perform bounds checking. If an index is less than zero or greater than the maximum index of `x`, the value of the corresponding element in the output array is undefined.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.take( x, [ 1, 3 ] );
	* // returns [ 2, 4 ]
	*/
	take: typeof take;

	/**
	* Converts an array-like object to a minimal array-like object supporting the accessor protocol.
	*
	* ## Notes
	*
	* -   If a provided array-like object already supports the accessor protocol, the function returns the provided array-like object; otherwise, the function wraps the provided value in a object which uses accessors for getting and setting elements.
	*
	* @param arr - input array
	* @returns accessor array
	*
	* @example
	* var arr = ns.toAccessorArray( [ 1, 2, 3 ] );
	* // returns <AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*
	* @example
	* var Complex128Array = require( `@stdlib/array/complex128` );
	*
	* var arr = ns.toAccessorArray( new Complex128Array( 10 ) );
	* // returns <Complex128Array>
	*/
	toAccessorArray: typeof toAccessorArray;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1.
	*
	* @param x1 - first array value
	* @param x2 - array element bound
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.unitspace( 0, 6 );
	* // returns [ 0, 1, 2, 3, 4, 5 ]
	*/
	unitspace: typeof unitspace;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero.
	*
	* @param n - number of elements
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.zeroTo( 6 );
	* // returns [ 0, 1, 2, 3, 4, 5 ]
	*/
	zeroTo: typeof zeroTo;

	/**
	* Returns a zero-filled "generic" array.
	*
	* @param len - array length
	* @returns output array
	*
	* @example
	* var out = ns.zeros( 3 );
	* // returns [ 0.0, 0.0, 0.0 ]
	*/
	zeros: typeof zeros;
}

/**
* Base (i.e., lower-level) array utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
