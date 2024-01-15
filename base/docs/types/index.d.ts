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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import AccessorArray = require( './../../../base/accessor' );
import accessorGetter = require( './../../../base/accessor-getter' );
import accessorSetter = require( './../../../base/accessor-setter' );
import accessors = require( './../../../base/accessors' );
import arraylike2object = require( './../../../base/arraylike2object' );
import assert = require( './../../../base/assert' );
import bifurcateEntries = require( './../../../base/bifurcate-entries' );
import bifurcateEntriesBy = require( './../../../base/bifurcate-entries-by' );
import bifurcateIndices = require( './../../../base/bifurcate-indices' );
import bifurcateIndicesBy = require( './../../../base/bifurcate-indices-by' );
import bifurcateValues = require( './../../../base/bifurcate-values' );
import bifurcateValuesBy = require( './../../../base/bifurcate-values-by' );
import binary2d = require( './../../../base/binary2d' );
import binary3d = require( './../../../base/binary3d' );
import binary4d = require( './../../../base/binary4d' );
import binary5d = require( './../../../base/binary5d' );
import binarynd = require( './../../../base/binarynd' );
import broadcastArray = require( './../../../base/broadcast-array' );
import bbinary2d = require( './../../../base/broadcasted-binary2d' );
import bbinary3d = require( './../../../base/broadcasted-binary3d' );
import bbinary4d = require( './../../../base/broadcasted-binary4d' );
import bbinary5d = require( './../../../base/broadcasted-binary5d' );
import bquaternary2d = require( './../../../base/broadcasted-quaternary2d' );
import bquinary2d = require( './../../../base/broadcasted-quinary2d' );
import bternary2d = require( './../../../base/broadcasted-ternary2d' );
import bunary2d = require( './../../../base/broadcasted-unary2d' );
import bunary3d = require( './../../../base/broadcasted-unary3d' );
import bunary4d = require( './../../../base/broadcasted-unary4d' );
import bunary5d = require( './../../../base/broadcasted-unary5d' );
import cartesianPower = require( './../../../base/cartesian-power' );
import cartesianProduct = require( './../../../base/cartesian-product' );
import cartesianSquare = require( './../../../base/cartesian-square' );
import copy = require( './../../../base/copy' );
import copyIndexed = require( './../../../base/copy-indexed' );
import dedupe = require( './../../../base/dedupe' );
import filled = require( './../../../base/filled' );
import filledBy = require( './../../../base/filled-by' );
import filled2d = require( './../../../base/filled2d' );
import filled2dBy = require( './../../../base/filled2d-by' );
import filled3d = require( './../../../base/filled3d' );
import filled3dBy = require( './../../../base/filled3d-by' );
import filled4d = require( './../../../base/filled4d' );
import filled4dBy = require( './../../../base/filled4d-by' );
import filled5d = require( './../../../base/filled5d' );
import filled5dBy = require( './../../../base/filled5d-by' );
import fillednd = require( './../../../base/fillednd' );
import filledndBy = require( './../../../base/fillednd-by' );
import first = require( './../../../base/first' );
import flatten = require( './../../../base/flatten' );
import flattenBy = require( './../../../base/flatten-by' );
import flatten2d = require( './../../../base/flatten2d' );
import flatten2dBy = require( './../../../base/flatten2d-by' );
import flatten3d = require( './../../../base/flatten3d' );
import flatten3dBy = require( './../../../base/flatten3d-by' );
import flatten4d = require( './../../../base/flatten4d' );
import flatten4dBy = require( './../../../base/flatten4d-by' );
import flatten5d = require( './../../../base/flatten5d' );
import flatten5dBy = require( './../../../base/flatten5d-by' );
import fliplr2d = require( './../../../base/fliplr2d' );
import fliplr3d = require( './../../../base/fliplr3d' );
import fliplr4d = require( './../../../base/fliplr4d' );
import fliplr5d = require( './../../../base/fliplr5d' );
import flipud2d = require( './../../../base/flipud2d' );
import flipud3d = require( './../../../base/flipud3d' );
import flipud4d = require( './../../../base/flipud4d' );
import flipud5d = require( './../../../base/flipud5d' );
import strided2array = require( './../../../base/from-strided' );
import getter = require( './../../../base/getter' );
import groupEntries = require( './../../../base/group-entries' );
import groupEntriesBy = require( './../../../base/group-entries-by' );
import groupIndices = require( './../../../base/group-indices' );
import groupIndicesBy = require( './../../../base/group-indices-by' );
import groupValues = require( './../../../base/group-values' );
import groupValuesBy = require( './../../../base/group-values-by' );
import incrspace = require( './../../../base/incrspace' );
import indexOf = require( './../../../base/index-of' );
import last = require( './../../../base/last' );
import lastIndexOf = require( './../../../base/last-index-of' );
import linspace = require( './../../../base/linspace' );
import logspace = require( './../../../base/logspace' );
import map2d = require( './../../../base/map2d' );
import map3d = require( './../../../base/map3d' );
import map4d = require( './../../../base/map4d' );
import map5d = require( './../../../base/map5d' );
import mskbinary2d = require( './../../../base/mskbinary2d' );
import mskunary2d = require( './../../../base/mskunary2d' );
import mskunary3d = require( './../../../base/mskunary3d' );
import nCartesianProduct = require( './../../../base/n-cartesian-product' );
import oneTo = require( './../../../base/one-to' );
import ones = require( './../../../base/ones' );
import ones2d = require( './../../../base/ones2d' );
import ones3d = require( './../../../base/ones3d' );
import ones4d = require( './../../../base/ones4d' );
import ones5d = require( './../../../base/ones5d' );
import onesnd = require( './../../../base/onesnd' );
import quaternary2d = require( './../../../base/quaternary2d' );
import quaternary3d = require( './../../../base/quaternary3d' );
import quaternary4d = require( './../../../base/quaternary4d' );
import quaternary5d = require( './../../../base/quaternary5d' );
import quinary2d = require( './../../../base/quinary2d' );
import quinary3d = require( './../../../base/quinary3d' );
import quinary4d = require( './../../../base/quinary4d' );
import quinary5d = require( './../../../base/quinary5d' );
import resolveGetter = require( './../../../base/resolve-getter' );
import setter = require( './../../../base/setter' );
import slice = require( './../../../base/slice' );
import strided2array2d = require( './../../../base/strided2array2d' );
import strided2array3d = require( './../../../base/strided2array3d' );
import strided2array4d = require( './../../../base/strided2array4d' );
import strided2array5d = require( './../../../base/strided2array5d' );
import take = require( './../../../base/take' );
import takeIndexed = require( './../../../base/take-indexed' );
import take2d = require( './../../../base/take2d' );
import take3d = require( './../../../base/take3d' );
import ternary2d = require( './../../../base/ternary2d' );
import ternary3d = require( './../../../base/ternary3d' );
import ternary4d = require( './../../../base/ternary4d' );
import ternary5d = require( './../../../base/ternary5d' );
import toAccessorArray = require( './../../../base/to-accessor-array' );
import toDeduped = require( './../../../base/to-deduped' );
import unary2d = require( './../../../base/unary2d' );
import unary2dBy = require( './../../../base/unary2d-by' );
import unary3d = require( './../../../base/unary3d' );
import unary4d = require( './../../../base/unary4d' );
import unary5d = require( './../../../base/unary5d' );
import unarynd = require( './../../../base/unarynd' );
import unitspace = require( './../../../base/unitspace' );
import zeroTo = require( './../../../base/zero-to' );
import zeros = require( './../../../base/zeros' );
import zeros2d = require( './../../../base/zeros2d' );
import zeros3d = require( './../../../base/zeros3d' );
import zeros4d = require( './../../../base/zeros4d' );
import zeros5d = require( './../../../base/zeros5d' );
import zerosnd = require( './../../../base/zerosnd' );

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
	* Splits array element entries into two groups.
	*
	* @param x - input array
	* @param filter - array indicating which group an element in the input array belongs to
	* @returns results
	*
	* @example
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	* var filter = [ true, true, false, true ];
	*
	* var out = ns.bifurcateEntries( arr, filter );
	* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
	*/
	bifurcateEntries: typeof bifurcateEntries;

	/**
	* Splits element entries into two groups according to a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function returns a truthy value, an array value is placed in the first group; otherwise, an array value is placed in the second group.
	*
	* @param x - input array
	* @param predicate - predicate function specifying which group an element in the input array belongs to
	* @param thisArg - predicate function execution context
	* @returns group results
	*
	* @example
	* function predicate( v ) {
	*     return v[ 0 ] === 'b';
	* }
	*
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	*
	* var out = ns.bifurcateEntriesBy( x, predicate );
	* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
	*/
	bifurcateEntriesBy: typeof bifurcateEntriesBy;

	/**
	* Splits array element indices into two groups.
	*
	* @param x - input array
	* @param filter - array indicating which group an element in the input array belongs to
	* @returns results
	*
	* @example
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	* var filter = [ true, true, false, true ];
	*
	* var out = ns.bifurcateIndices( arr, filter );
	* // returns [ [ 0, 1, 3 ], [ 2 ] ]
	*/
	bifurcateIndices: typeof bifurcateIndices;

	/**
	* Splits element indices into two groups according to a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function returns a truthy value, an array value is placed in the first group; otherwise, an array value is placed in the second group.
	*
	* @param x - input array
	* @param predicate - predicate function specifying which group an element in the input array belongs to
	* @param thisArg - predicate function execution context
	* @returns group results
	*
	* @example
	* function predicate( v ) {
	*     return v[ 0 ] === 'b';
	* }
	*
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	*
	* var out = ns.bifurcateIndicesBy( x, predicate );
	* // returns [ [ 0, 1, 3 ], [ 2 ] ]
	*/
	bifurcateIndicesBy: typeof bifurcateIndicesBy;

	/**
	* Splits array element values into two groups.
	*
	* @param x - input array
	* @param filter - array indicating which group an element in the input array belongs to
	* @returns results
	*
	* @example
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	* var filter = [ true, true, false, true ];
	*
	* var out = ns.bifurcateValues( arr, filter );
	* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
	*/
	bifurcateValues: typeof bifurcateValues;

	/**
	* Splits element values into two groups according to a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function returns a truthy value, an array value is placed in the first group; otherwise, an array value is placed in the second group.
	*
	* @param x - input array
	* @param predicate - predicate function specifying which group an element in the input array belongs to
	* @param thisArg - predicate function execution context
	* @returns group results
	*
	* @example
	* function predicate( v ) {
	*     return v[ 0 ] === 'b';
	* }
	*
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	*
	* var out = ns.bifurcateValuesBy( x, predicate );
	* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
	*/
	bifurcateValuesBy: typeof bifurcateValuesBy;

	/**
	* Applies a binary callback to elements in two two-dimensional nested input arrays and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - binary callback
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = ones2d( shape );
	* var z = zeros2d( shape );
	*
	* ns.binary2d( [ x, y, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ]
	*/
	binary2d: typeof binary2d;

	/**
	* Applies a binary callback to elements in two three-dimensional nested input arrays and assigns results to elements in a three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - binary callback
	*
	* @example
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shape = [ 2, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = ones3d( shape );
	* var z = zeros3d( shape );
	*
	* ns.binary3d( [ x, y, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ], [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ]
	*/
	binary3d: typeof binary3d;

	/**
	* Applies a binary callback to elements in two four-dimensional nested input arrays and assigns results to elements in a four-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - binary callback
	*
	* @example
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shape = [ 1, 2, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = ones4d( shape );
	* var z = zeros4d( shape );
	*
	* ns.binary4d( [ x, y, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ], [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ]
	*/
	binary4d: typeof binary4d;

	/**
	* Applies a binary callback to elements in two five-dimensional nested input arrays and assigns results to elements in a five-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - binary callback
	*
	* @example
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shape = [ 1, 1, 2, 2, 2 ];
	*
	* var x = ones5d( shape );
	* var y = ones5d( shape );
	* var z = zeros5d( shape );
	*
	* ns.binary5d( [ x, y, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ], [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ]
	*/
	binary5d: typeof binary5d;

	/**
	* Applies a binary callback to elements in two n-dimensional nested input arrays and assigns results to elements in an n-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - binary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add' );
	* var onesnd = require( './../../../base/onesnd' );
	* var zerosnd = require( './../../../base/zerosnd' );
	*
	* var shape = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
	*
	* var x = onesnd( shape );
	* var y = onesnd( shape );
	* var z = zerosnd( shape );
	*
	* ns.binarynd( [ x, y, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ [ [ [ [ [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ] ] ] ] ] ] ]
	*/
	binarynd: typeof binarynd;

	/**
	* Broadcasts an array to a specified shape.
	*
	* ## Notes
	*
	* -   The broadcasted array shares the same data as the input array. As more than one element of a broadcasted array may refer to the same memory location, writing to the broadcasted array may affect multiple elements. If you need to write to the broadcasted array, copy the array before performing operations which may mutate elements.
	* -   The function throws an error if a provided input shape is incompatible with a provided output shape.
	*
	* @param x - input array
	* @param inShape - input array shape
	* @param outShape - output array shape
	* @throws input array cannot have more dimensions than the desired shape
	* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided output shape
	* @returns broadcast object
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.broadcastArray( x, [ 2 ], [ 2, 2 ] );
	* // returns {...}
	*
	* var shape = out.shape;
	* // returns [ 2, 2 ]
	*
	* var strides = out.strides;
	* // returns [ 0, 1 ]
	*
	* var ref = out.ref;
	* // returns [ 1, 2 ]
	*
	* var bool = ( x === ref );
	* // returns true
	*
	* var data = out.data;
	* // returns [ [ 1, 2 ] ]
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.broadcastArray( x, [ 2 ], [ 2, 1, 2 ] );
	* // returns {...}
	*
	* var data = out.data;
	* // returns [ [ [ 1, 2 ] ] ]
	*
	* var strides = out.strides;
	* // returns [ 0, 0, 1 ]
	*
	* @example
	* var x = [ [ 1 ], [ 2 ] ];
	*
	* var out = ns.broadcastArray( x, [ 2, 1 ], [ 3, 2, 2 ] );
	* // returns {...}
	*
	* var data = out.data;
	* // returns [ [ [ 1 ], [ 2 ] ] ]
	*
	* var strides = out.strides;
	* // returns [ 0, 1, 0 ]
	*/
	broadcastArray: typeof broadcastArray;

	/**
	* Applies a binary callback to elements in two broadcasted input arrays and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shapes must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shapes - array shapes
	* @param fcn - binary callback
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shapes = [
	*     [ 1, 2 ],
	*     [ 2, 1 ],
	*     [ 2, 2 ]
	* ];
	*
	* var x = ones2d( shapes[ 0 ] );
	* var y = ones2d( shapes[ 1 ] );
	* var z = zeros2d( shapes[ 2 ] );
	*
	* ns.bbinary2d( [ x, y, z ], shapes, add );
	*
	* console.log( z );
	* // => [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ]
	*/
	bbinary2d: typeof bbinary2d;

	/**
	* Applies a binary callback to elements in two broadcasted input arrays and assigns results to elements in a three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shapes must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shapes - array shapes
	* @param fcn - binary callback
	*
	* @example
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shapes = [
	*     [ 1, 1, 2 ],
	*     [ 2, 1, 1 ],
	*     [ 2, 2, 2 ]
	* ];
	*
	* var x = ones3d( shapes[ 0 ] );
	* var y = ones3d( shapes[ 1 ] );
	* var z = zeros3d( shapes[ 2 ] );
	*
	* ns.bbinary3d( [ x, y, z ], shapes, add );
	*
	* console.log( z );
	* // => [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ],  [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ]
	*/
	bbinary3d: typeof bbinary3d;

	/**
	* Applies a binary callback to elements in two broadcasted input arrays and assigns results to elements in a four-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shapes must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shapes - array shapes
	* @param fcn - binary callback
	*
	* @example
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shapes = [
	*     [ 1, 1, 1, 2 ],
	*     [ 1, 2, 1, 1 ],
	*     [ 1, 2, 2, 2 ]
	* ];
	*
	* var x = ones4d( shapes[ 0 ] );
	* var y = ones4d( shapes[ 1 ] );
	* var z = zeros4d( shapes[ 2 ] );
	*
	* ns.bbinary4d( [ x, y, z ], shapes, add );
	*
	* console.log( z );
	* // => [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ],  [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ]
	*/
	bbinary4d: typeof bbinary4d;

	/**
	* Applies a binary callback to elements in two broadcasted input arrays and assigns results to elements in a five-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shapes must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing two input nested arrays and one output nested array
	* @param shapes - array shapes
	* @param fcn - binary callback
	*
	* @example
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shapes = [
	*     [ 1, 1, 1, 1, 2 ],
	*     [ 1, 1, 2, 1, 1 ],
	*     [ 1, 1, 2, 2, 2 ]
	* ];
	*
	* var x = ones5d( shapes[ 0 ] );
	* var y = ones5d( shapes[ 1 ] );
	* var z = zeros5d( shapes[ 2 ] );
	*
	* ns.bbinary5d( [ x, y, z ], shapes, add );
	*
	* console.log( z );
	* // => [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ],  [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ]
	*/
	bbinary5d: typeof bbinary5d;

	/**
	* Applies a quaternary callback to elements in four broadcasted input arrays and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shapes must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing four input nested arrays and one output nested array
	* @param shapes - array shapes
	* @param fcn - quaternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add4' );
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* var shapes = [
	*     [ 1, 2 ],
	*     [ 2, 1 ],
	*     [ 1, 1 ],
	*     [ 2, 2 ],
	*     [ 2, 2 ]
	* ];
	*
	* var x = ones2d( shapes[ 0 ] );
	* var y = ones2d( shapes[ 1 ] );
	* var z = ones2d( shapes[ 2 ] );
	* var w = ones2d( shapes[ 3 ] );
	* var out = zeros2d( shapes[ 4 ] );
	*
	* ns.bquaternary2d( [ x, y, z, w, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ 4.0, 8.0 ], [ 12.0, 16.0 ] ]
	*/
	bquaternary2d: typeof bquaternary2d;

	/**
	* Applies a quinary callback to elements in five broadcasted input arrays and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shapes must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing five input nested arrays and one output nested array
	* @param shapes - array shapes
	* @param fcn - quinary callback
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* function add( x, y, z, w, v ) {
	*     return x + y + z + w + v;
	* }
	*
	* var shapes = [
	*     [ 1, 2 ],
	*     [ 2, 1 ],
	*     [ 1, 1 ],
	*     [ 2, 2 ],
	*     [ 1, 1 ],
	*     [ 2, 2 ]
	* ];
	*
	* var x = ones2d( shapes[ 0 ] );
	* var y = ones2d( shapes[ 1 ] );
	* var z = ones2d( shapes[ 2 ] );
	* var w = ones2d( shapes[ 3 ] );
	* var v = ones2d( shapes[ 4 ] );
	* var out = zeros2d( shapes[ 5 ] );
	*
	* ns.bquinary2d( [ x, y, z, w, v, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ]
	*/
	bquinary2d: typeof bquinary2d;

	/**
	* Applies a ternary callback to elements in three broadcasted input arrays and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shapes must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing three input nested arrays and one output nested array
	* @param shapes - array shapes
	* @param fcn - ternary callback
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	* var add = require( '@stdlib/math/base/ops/add3' );
	*
	* var shapes = [
	*     [ 1, 2 ],
	*     [ 2, 1 ],
	*     [ 1, 1 ],
	*     [ 2, 2 ]
	* ];
	*
	* var x = ones2d( shapes[ 0 ] );
	* var y = ones2d( shapes[ 1 ] );
	* var z = ones2d( shapes[ 2 ] );
	* var out = zeros2d( shapes[ 3 ] );
	*
	* ns.bternary2d( [ x, y, z, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ 3.0, 6.0 ], [ 9.0, 12.0 ] ]
	*/
	bternary2d: typeof bternary2d;

	/**
	* Applies a unary callback to elements in a broadcasted nested input array and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shape must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shapes - array shapes
	* @param fcn - unary callback
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shapes = [
	*     [ 1, 2 ],
	*     [ 2, 2 ]
	* ];
	*
	* var x = ones2d( shapes[ 0 ] );
	* var y = zeros2d( shapes[ 1 ] );
	*
	* ns.bunary2d( [ x, y ], shapes, scale );
	*
	* console.log( y );
	* // => [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
	*/
	bunary2d: typeof bunary2d;

	/**
	* Applies a unary callback to elements in a broadcasted nested input array and assigns results to elements in a three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shape must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shapes - array shapes
	* @param fcn - unary callback
	*
	* @example
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shapes = [
	*     [ 1, 1, 2 ],
	*     [ 1, 2, 2 ]
	* ];
	*
	* var x = ones3d( shapes[ 0 ] );
	* var y = zeros3d( shapes[ 1 ] );
	*
	* ns.bunary3d( [ x, y ], shapes, scale );
	*
	* console.log( y );
	* // => [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ]
	*/
	bunary3d: typeof bunary3d;

	/**
	* Applies a unary callback to elements in a broadcasted nested input array and assigns results to elements in a four-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shape must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shapes - array shapes
	* @param fcn - unary callback
	*
	* @example
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shapes = [
	*     [ 1, 1, 1, 2 ],
	*     [ 1, 1, 2, 2 ]
	* ];
	*
	* var x = ones4d( shapes[ 0 ] );
	* var y = zeros4d( shapes[ 1 ] );
	*
	* ns.bunary4d( [ x, y ], shapes, scale );
	*
	* console.log( y );
	* // => [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
	*/
	bunary4d: typeof bunary4d;

	/**
	* Applies a unary callback to elements in a broadcasted nested input array and assigns results to elements in a five-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The input array shape must be broadcast compatible with the output array shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shapes - array shapes
	* @param fcn - unary callback
	*
	* @example
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shapes = [
	*     [ 1, 1, 1, 1, 2 ],
	*     [ 1, 1, 1, 2, 2 ]
	* ];
	*
	* var x = ones5d( shapes[ 0 ] );
	* var y = zeros5d( shapes[ 1 ] );
	*
	* ns.bunary5d( [ x, y ], shapes, scale );
	*
	* console.log( y );
	* // => [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ]
	*/
	bunary5d: typeof bunary5d;

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
	* @param x - input array
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
	* Removes consecutive duplicated values.
	*
	* ## Notes
	*
	* -   The function mutates the input array.
	*
	* @param x - input array
	* @param limit - number of allowed consecutive duplicates
	* @param equalNaNs - boolean indicating whether NaNs should be considered equal
	* @returns input array
	*
	* @example
	* var x = [ 1, 1, 2, 3, 3 ];
	*
	* var y = ns.dedupe( x, 1, false );
	* // returns [ 1, 2, 3 ]
	*
	* var bool = ( x === y );
	* // returns true
	*
	* @example
	* var x = [ 1, 1, 1, 2, 1, 1, 3, 3 ];
	*
	* var y = ns.dedupe( x, 2, false );
	* // returns [ 1, 1, 2, 1, 1, 3, 3 ]
	*
	* var bool = ( x === y );
	* // returns true
	*/
	dedupe: typeof dedupe;

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
	* var constantFunction = require( '@stdlib/utils/constant-function' );
	*
	* var arr = ns.filledBy( 5, constantFunction( 1.0 ) );
	* // returns [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	*/
	filledBy: typeof filledBy;

	/**
	* Returns a filled two-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.filled2d( 0.0, [ 1, 3 ] );
	* // returns [ [ 0.0, 0.0, 0.0 ] ]
	*
	* @example
	* var out = ns.filled2d( 'beep', [ 1, 3 ] );
	* // returns [ [ 'beep', 'beep', 'beep' ] ]
	*/
	filled2d: typeof filled2d;

	/**
	* Returns a filled two-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( '@stdlib/utils/constant-function' );
	*
	* var arr = ns.filled2dBy( [ 1, 5 ], constantFunction( 1.0 ) );
	* // returns [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ]
	*/
	filled2dBy: typeof filled2dBy;

	/**
	* Returns a filled three-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.filled3d( 0.0, [ 1, 1, 3 ] );
	* // returns [ [ [ 0.0, 0.0, 0.0 ] ] ]
	*
	* @example
	* var out = ns.filled3d( 'beep', [ 1, 1, 3 ] );
	* // returns [ [ [ 'beep', 'beep', 'beep' ] ] ]
	*/
	filled3d: typeof filled3d;

	/**
	* Returns a filled three-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( '@stdlib/utils/constant-function' );
	*
	* var arr = ns.filled3dBy( [ 1, 1, 5 ], constantFunction( 1.0 ) );
	* // returns [ [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ] ]
	*/
	filled3dBy: typeof filled3dBy;

	/**
	* Returns a filled four-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.filled4d( 0.0, [ 1, 1, 1, 3 ] );
	* // returns [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ]
	*
	* @example
	* var out = ns.filled4d( 'beep', [ 1, 1, 1, 3 ] );
	* // returns [ [ [ [ 'beep', 'beep', 'beep' ] ] ] ]
	*/
	filled4d: typeof filled4d;

	/**
	* Returns a filled four-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( '@stdlib/utils/constant-function' );
	*
	* var arr = ns.filled4dBy( [ 1, 1, 1, 5 ], constantFunction( 1.0 ) );
	* // returns [ [ [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ] ] ]
	*/
	filled4dBy: typeof filled4dBy;

	/**
	* Returns a filled five-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.filled5d( 0.0, [ 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ]
	*
	* @example
	* var out = ns.filled5d( 'beep', [ 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ 'beep', 'beep', 'beep' ] ] ] ] ]
	*/
	filled5d: typeof filled5d;

	/**
	* Returns a filled five-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( '@stdlib/utils/constant-function' );
	*
	* var arr = ns.filled5dBy( [ 1, 1, 1, 1, 5 ], constantFunction( 1.0 ) );
	* // returns [ [ [ [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ] ] ] ]
	*/
	filled5dBy: typeof filled5dBy;

	/**
	* Returns a filled n-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.fillednd( 0.0, [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ] ] ] ] ] ]
	*
	* @example
	* var out = ns.fillednd( 'beep', [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 'beep', 'beep', 'beep' ] ] ] ] ] ] ] ] ] ]
	*/
	fillednd: typeof fillednd;

	/**
	* Creates a filled n-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( '@stdlib/utils/constant-function' );
	*
	* var out = ns.filledndBy( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ], constantFunction( 1.0 ) );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ] ]
	*/
	filledndBy: typeof filledndBy;

	/**
	* Returns the first element of an array-like object.
	*
	* @param arr - input array
	* @returns first element
	*
	* @example
	* var arr = [ 1, 2, 3 ];
	*
	* var out = ns.first( x );
	* // returns 1
	*/
	first: typeof first;

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
	* Flattens an n-dimensional nested array according to a callback function.
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
	* var out = ns.flattenBy( x, [ 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flattenBy( x, [ 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flattenBy: typeof flattenBy;

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
	* Reverses the order of elements along the last dimension of a two-dimensional nested input array.
	*
	* ## Notes
	*
	* -   The function does **not** perform a deep copy of nested array elements.
	*
	* @param x - input nested array
	* @returns output array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ];
	*
	* var out = ns.fliplr2d( x );
	* // returns [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ]
	*/
	fliplr2d: typeof fliplr2d;

	/**
	* Reverses the order of elements along the last dimension of a three-dimensional nested input array.
	*
	* ## Notes
	*
	* -   The function does **not** perform a deep copy of nested array elements.
	*
	* @param x - input nested array
	* @returns output array
	*
	* @example
	* var x = [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ];
	*
	* var out = ns.fliplr3d( x );
	* // returns [ [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ] ]
	*/
	fliplr3d: typeof fliplr3d;

	/**
	* Reverses the order of elements along the last dimension of a four-dimensional nested input array.
	*
	* ## Notes
	*
	* -   The function does **not** perform a deep copy of nested array elements.
	*
	* @param x - input nested array
	* @returns output array
	*
	* @example
	* var x = [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ];
	*
	* var out = ns.fliplr4d( x );
	* // returns [ [ [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ] ] ]
	*/
	fliplr4d: typeof fliplr4d;

	/**
	* Reverses the order of elements along the last dimension of a five-dimensional nested input array.
	*
	* ## Notes
	*
	* -   The function does **not** perform a deep copy of nested array elements.
	*
	* @param x - input nested array
	* @returns output array
	*
	* @example
	* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ] ];
	*
	* var out = ns.fliplr5d( x );
	* // returns [ [ [ [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ] ] ] ]
	*/
	fliplr5d: typeof fliplr5d;

	/**
	* Reverses the order of elements along the first dimension of a two-dimensional nested input array.
	*
	* ## Notes
	*
	* -   The function does **not** perform a deep copy of nested array elements.
	*
	* @param x - input nested array
	* @returns output array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ];
	*
	* var out = ns.flipud2d( x );
	* // returns [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]
	*/
	flipud2d: typeof flipud2d;

	/**
	* Reverses the order of elements along the second-to-last dimension of a three-dimensional nested input array.
	*
	* ## Notes
	*
	* -   The function does **not** perform a deep copy of nested array elements.
	*
	* @param x - input nested array
	* @returns output array
	*
	* @example
	* var x = [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ];
	*
	* var out = ns.flipud3d( x );
	* // returns [ [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ] ]
	*/
	flipud3d: typeof flipud3d;

	/**
	* Reverses the order of elements along the second-to-last dimension of a four-dimensional nested input array.
	*
	* ## Notes
	*
	* -   The function does **not** perform a deep copy of nested array elements.
	*
	* @param x - input nested array
	* @returns output array
	*
	* @example
	* var x = [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ];
	*
	* var out = ns.flipud4d( x );
	* // returns [ [ [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ] ] ]
	*/
	flipud4d: typeof flipud4d;

	/**
	* Reverses the order of elements along the second-to-last dimension of a five-dimensional nested input array.
	*
	* ## Notes
	*
	* -   The function does **not** perform a deep copy of nested array elements.
	*
	* @param x - input nested array
	* @returns output array
	*
	* @example
	* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ] ];
	*
	* var out = ns.flipud5d( x );
	* // returns [ [ [ [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ] ] ] ]
	*/
	flipud5d: typeof flipud5d;

	/**
	* Converts a strided array to a non-strided generic array.
	*
	* ## Notes
	*
	* -   The function assumes that the input array is compatible with the specified number of elements, index stride, and index offset.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - index stride
	* @param offset - index of the first indexed value in the input array
	* @returns two-dimensional nested array
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array( 3, x, 2, 0 );
	* // returns [ 1, 3, 5 ]
	*/
	strided2array: typeof strided2array;

	/**
	* Returns an accessor function for retrieving an element from an indexed array-like object.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var dtype = require( './../../../dtype' );
	*
	* var arr = [ 1, 2, 3, 4 ];
	*
	* var get = ns.getter( dtype( arr ) );
	* var v = get( arr, 2 );
	* // returns 3
	*/
	getter: typeof getter;

	/**
	* Groups element entries as arrays associated with distinct keys.
	*
	* @param x - input array
	* @param groups - array defining which group an element in the input array belongs to
	* @returns group results
	*
	* @example
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	* var groups = [ 'b', 'b', 'f', 'b' ];
	*
	* var out = ns.groupEntries( x, groups );
	* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
	*/
	groupEntries: typeof groupEntries;

	/**
	* Groups element entries according to an indicator function.
	*
	* @param x - input array
	* @param indicator - indicator function specifying which group an element in the input array belongs to
	* @param thisArg - indicator function execution context
	* @returns group results
	*
	* @example
	* function indicator( v ) {
	*     return v[ 0 ];
	* }
	*
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	*
	* var out = ns.groupEntriesBy( x, indicator );
	* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
	*/
	groupEntriesBy: typeof groupEntriesBy;

	/**
	* Groups element indices as arrays associated with distinct keys.
	*
	* @param x - input array
	* @param groups - array defining which group an element in the input array belongs to
	* @returns group results
	*
	* @example
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	* var groups = [ 'b', 'b', 'f', 'b' ];
	*
	* var out = ns.groupIndices( x, groups );
	* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
	*/
	groupIndices: typeof groupIndices;

	/**
	* Groups element indices according to an indicator function.
	*
	* @param x - input array
	* @param indicator - indicator function specifying which group an element in the input array belongs to
	* @param thisArg - indicator function execution context
	* @returns group results
	*
	* @example
	* function indicator( v ) {
	*     return v[ 0 ];
	* }
	*
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	*
	* var out = ns.groupIndicesBy( x, indicator );
	* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
	*/
	groupIndicesBy: typeof groupIndicesBy;

	/**
	* Groups elements as arrays associated with distinct keys.
	*
	* @param x - input array
	* @param groups - array defining which group an element in the input array belongs to
	* @returns group results
	*
	* @example
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	* var groups = [ 'b', 'b', 'f', 'b' ];
	*
	* var out = ns.groupValues( x, groups );
	* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
	*/
	groupValues: typeof groupValues;

	/**
	* Groups element values according to an indicator function.
	*
	* @param x - input array
	* @param indicator - indicator function specifying which group an element in the input array belongs to
	* @param thisArg - indicator function execution context
	* @returns group results
	*
	* @example
	* function indicator( v ) {
	*     return v[ 0 ];
	* }
	*
	* var x = [ 'beep', 'boop', 'foo', 'bar' ];
	*
	* var out = ns.groupValuesBy( x, indicator );
	* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
	*/
	groupValuesBy: typeof groupValuesBy;

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
	* Returns the index of the first element which equals a provided search element.
	*
	* ## Notes
	*
	* -   If unable to find an element which equals a provided search element, the function returns `-1`.
	* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.
	*
	* @param x - input array
	* @param searchElement - search element
	* @param fromIndex - starting index (inclusive)
	* @param equalNaNs - boolean indicating whether NaNs should be considered equal
	* @returns index
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var idx = ns.indexOf( x, 2, 0, false );
	* // returns 1
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	*
	* var idx = ns.indexOf( x, 2, 0, false );
	* // returns 1
	*/
	indexOf: typeof indexOf;

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
	* Returns the index of the last element which equals a provided search element.
	*
	* ## Notes
	*
	* -   The function scans an input array from the starting index to the beginning of the array (i.e., backward).
	* -   If unable to find an element which equals a provided search element, the function returns `-1`.
	* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.
	*
	* @param x - input array
	* @param searchElement - search element
	* @param fromIndex - starting index (inclusive)
	* @param equalNaNs - boolean indicating whether NaNs should be considered equal
	* @returns index
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var idx = ns.lastIndexOf( x, 2, 3, false );
	* // returns 1
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	*
	* var idx = ns.lastIndexOf( x, 2, 3, false );
	* // returns 1
	*/
	lastIndexOf: typeof lastIndexOf;

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
	* Applies a function to elements in a two-dimensional nested input array and assigns results to elements in a new two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **indices**: current array element indices.
	*     --  **array**: input nested array.
	*
	* @param x - input nested array
	* @param shape - array shape
	* @param fcn - function to apply
	* @param thisArg - function execution context
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = ns.map2d( x, shape, scale );
	* // returns [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = zeros2d( shape );
	*
	* var out = ns.map2d.assign( x, y, shape, scale );
	* // returns [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	map2d: typeof map2d;

	/**
	* Applies a function to elements in a three-dimensional nested input array and assigns results to elements in a new three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **indices**: current array element indices.
	*     --  **array**: input nested array.
	*
	* @param x - input nested array
	* @param shape - array shape
	* @param fcn - function to apply
	* @param thisArg - function execution context
	*
	* @example
	* var ones3d = require( './../../../base/ones3d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = ns.map3d( x, shape, scale );
	* // returns [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ]
	*
	* @example
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = zeros3d( shape );
	*
	* var out = ns.map3d.assign( x, y, shape, scale );
	* // returns [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	map3d: typeof map3d;

	/**
	* Applies a function to elements in a four-dimensional nested input array and assigns results to elements in a new four-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **indices**: current array element indices.
	*     --  **array**: input nested array.
	*
	* @param x - input nested array
	* @param shape - array shape
	* @param fcn - function to apply
	* @param thisArg - function execution context
	*
	* @example
	* var ones4d = require( './../../../base/ones4d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = ns.map4d( x, shape, scale );
	* // returns [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
	*
	* @example
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = zeros4d( shape );
	*
	* var out = ns.map4d.assign( x, y, shape, scale );
	* // returns [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	map4d: typeof map4d;

	/**
	* Applies a function to elements in a five-dimensional nested input array and assigns results to elements in a new five-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **indices**: current array element indices.
	*     --  **array**: input nested array.
	*
	* @param x - input nested array
	* @param shape - array shape
	* @param fcn - function to apply
	* @param thisArg - function execution context
	*
	* @example
	* var ones5d = require( './../../../base/ones5d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 1, 2, 2 ];
	*
	* var x = ones5d( shape );
	* var y = ns.map5d( x, shape, scale );
	* // returns [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ]
	*
	* @example
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 1, 2, 2 ];
	*
	* var x = ones5d( shape );
	* var y = zeros5d( shape );
	*
	* var out = ns.map5d.assign( x, y, shape, scale );
	* // returns [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	map5d: typeof map5d;

	/**
	* Applies a binary callback to elements in two two-dimensional nested input arrays according to elements in a two-dimensional nested mask array and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	* -   An element in an input array is "masked" if the corresponding element in the mask array is non-zero.
	*
	* @param arrays - array containing two input nested arrays, an input nested mask array, and one output nested array
	* @param shape - array shape
	* @param fcn - binary callback
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	* var add = require( '@stdlib/math/base/ops/add' );
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = ones2d( shape );
	* var z = zeros2d( shape );
	*
	* var mask = [ [ 0, 1 ], [ 0, 0 ] ];
	*
	* ns.mskbinary2d( [ x, y, mask, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ 2.0, 0.0 ], [ 2.0, 2.0 ] ]
	*/
	mskbinary2d: typeof mskbinary2d;

	/**
	* Applies a unary callback to elements in a two-dimensional nested input array according to elements in a two-dimensional nested mask array and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	* -   An element in an input array is "masked" if the corresponding element in the mask array is non-zero.
	*
	* @param arrays - array containing one input nested array, an input nested mask array, and one output nested array
	* @param shape - array shape
	* @param fcn - unary callback
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = zeros2d( shape );
	*
	* var mask = [ [ 0, 1 ], [ 0, 0 ] ];
	*
	* ns.mskunary2d( [ x, mask, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ 10.0, 0.0 ], [ 10.0, 10.0 ] ]
	*/
	mskunary2d: typeof mskunary2d;

	/**
	* Applies a unary callback to elements in a three-dimensional nested input array according to elements in a three-dimensional nested mask array and assigns results to elements in a three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	* -   An element in an input array is "masked" if the corresponding element in the mask array is non-zero.
	*
	* @param arrays - array containing one input nested array, an input nested mask array, and one output nested array
	* @param shape - array shape
	* @param fcn - unary callback
	*
	* @example
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = zeros3d( shape );
	*
	* var mask = [ [ [ 0, 1 ], [ 0, 0 ] ] ];
	*
	* ns.mskunary3d( [ x, mask, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ 10.0, 0.0 ], [ 10.0, 10.0 ] ] ]
	*/
	mskunary3d: typeof mskunary3d;

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
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
	*
	* @param n - number of elements
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.oneTo( 6 );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*/
	oneTo: typeof oneTo;

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
	* Returns a two-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.ones2d( [ 1, 3 ] );
	* // returns [ [ 1.0, 1.0, 1.0 ] ]
	*/
	ones2d: typeof ones2d;

	/**
	* Returns a three-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.ones3d( [ 1, 1, 3 ] );
	* // returns [ [ [ 1.0, 1.0, 1.0 ] ] ]
	*/
	ones3d: typeof ones3d;

	/**
	* Returns a four-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.ones4d( [ 1, 1, 1, 3 ] );
	* // returns [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ]
	*/
	ones4d: typeof ones4d;

	/**
	* Returns a five-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.ones5d( [ 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ]
	*/
	ones5d: typeof ones5d;

	/**
	* Returns an n-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.onesnd( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ] ]
	*/
	onesnd: typeof onesnd;

	/**
	* Applies a quaternary callback to elements in four two-dimensional nested input arrays and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing four input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - quaternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add4' );
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = ones2d( shape );
	* var z = ones2d( shape );
	* var w = ones2d( shape );
	* var out = zeros2d( shape );
	*
	* ns.quaternary2d( [ x, y, z, w, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ 4.0, 4.0 ], [ 4.0, 4.0 ] ]
	*/
	quaternary2d: typeof quaternary2d;

	/**
	* Applies a quaternary callback to elements in four three-dimensional nested input arrays and assigns results to elements in a three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing four input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - quaternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add4' );
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* var shape = [ 1, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = ones3d( shape );
	* var z = ones3d( shape );
	* var w = ones3d( shape );
	* var out = zeros3d( shape );
	*
	* ns.quaternary3d( [ x, y, z, w, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ 4.0, 4.0 ], [ 4.0, 4.0 ] ] ]
	*/
	quaternary3d: typeof quaternary3d;

	/**
	* Applies a quaternary callback to elements in four four-dimensional nested input arrays and assigns results to elements in a four-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing four input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - quaternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add4' );
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = ones4d( shape );
	* var z = ones4d( shape );
	* var w = ones4d( shape );
	* var out = zeros4d( shape );
	*
	* ns.quaternary4d( [ x, y, z, w, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ [ 4.0, 4.0 ], [ 4.0, 4.0 ] ] ] ]
	*/
	quaternary4d: typeof quaternary4d;

	/**
	* Applies a quaternary callback to elements in four five-dimensional nested input arrays and assigns results to elements in a five-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing four input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - quaternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add4' );
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	*
	* var shape = [ 1, 1, 1, 2, 2 ];
	*
	* var x = ones5d( shape );
	* var y = ones5d( shape );
	* var z = ones5d( shape );
	* var w = ones5d( shape );
	* var out = zeros5d( shape );
	*
	* ns.quaternary5d( [ x, y, z, w, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ [ [ 4.0, 4.0 ], [ 4.0, 4.0 ] ] ] ] ]
	*/
	quaternary5d: typeof quaternary5d;

	/**
	* Applies a quinary callback to elements in five two-dimensional nested input arrays and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing five input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - quinary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add5' );
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = ones2d( shape );
	* var z = ones2d( shape );
	* var w = ones2d( shape );
	* var v = ones2d( shape );
	* var out = zeros2d( shape );
	*
	* ns.quinary2d( [ x, y, z, w, v, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ]
	*/
	quinary2d: typeof quinary2d;

	/**
	* Applies a quinary callback to elements in five three-dimensional nested input arrays and assigns results to elements in a three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing five input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - quinary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add5' );
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* var shape = [ 1, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = ones3d( shape );
	* var z = ones3d( shape );
	* var w = ones3d( shape );
	* var v = ones3d( shape );
	* var out = zeros3d( shape );
	*
	* ns.quinary3d( [ x, y, z, w, v, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ]
	*/
	quinary3d: typeof quinary3d;

	/**
	* Applies a quinary callback to elements in five four-dimensional nested input arrays and assigns results to elements in a four-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing five input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - quinary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add5' );
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = ones4d( shape );
	* var z = ones4d( shape );
	* var w = ones4d( shape );
	* var v = ones4d( shape );
	* var out = zeros4d( shape );
	*
	* ns.quinary4d( [ x, y, z, w, v, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ] ]
	*/
	quinary4d: typeof quinary4d;

	/**
	* Applies a quinary callback to elements in five five-dimensional nested input arrays and assigns results to elements in a five-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing five input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - quinary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add5' );
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	*
	* var shape = [ 1, 1, 1, 2, 2 ];
	*
	* var x = ones5d( shape );
	* var y = ones5d( shape );
	* var z = ones5d( shape );
	* var w = ones5d( shape );
	* var v = ones5d( shape );
	* var out = zeros5d( shape );
	*
	* ns.quinary5d( [ x, y, z, w, v, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ] ] ]
	*/
	quinary5d: typeof quinary5d;

	/**
	* Returns an accessor function for retrieving an element from an indexed array-like object.
	*
	* @param x - input array
	* @returns accessor function
	*
	* @example
	* var arr = [ 1, 2, 3, 4 ];
	*
	* var get = ns.resolveGetter( arr );
	* var v = get( arr, 2 );
	* // returns 3
	*/
	resolveGetter: typeof resolveGetter;

	/**
	* Returns an accessor function for setting an element in an indexed array-like object.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var dtype = require( './../../../dtype' );
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
	* Returns a shallow copy of a portion of an array.
	*
	* @param x - input array
	* @param start - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.slice( x, 0, 3 );
	* // returns [ 1, 2, 3 ]
	*/
	slice: typeof slice;

	/**
	* Converts a strided array to a two-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that the input array is compatible with the specified array shape, dimension strides, and index offset.
	*
	* @param x - input array
	* @param shape - array shape
	* @param strides - dimension strides
	* @param offset - index of the first indexed value in the input array
	* @returns two-dimensional nested array
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array2d( x, [ 3, 2 ], [ 2, 1 ], 0 );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array2d( x, [ 3, 2 ], [ 1, 3 ], 0 );
	* // returns [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
	*/
	strided2array2d: typeof strided2array2d;

	/**
	* Converts a strided array to a three-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that the input array is compatible with the specified array shape, dimension strides, and index offset.
	*
	* @param x - input array
	* @param shape - array shape
	* @param strides - dimension strides
	* @param offset - index of the first indexed value in the input array
	* @returns three-dimensional nested array
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array3d( x, [ 1, 3, 2 ], [ 6, 2, 1 ], 0 );
	* // returns [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array3d( x, [ 1, 3, 2 ], [ 1, 1, 3 ], 0 );
	* // returns [ [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ] ]
	*/
	strided2array3d: typeof strided2array3d;

	/**
	* Converts a strided array to a four-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that the input array is compatible with the specified array shape, dimension strides, and index offset.
	*
	* @param x - input array
	* @param shape - array shape
	* @param strides - dimension strides
	* @param offset - index of the first indexed value in the input array
	* @returns four-dimensional nested array
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array4d( x, [ 1, 1, 3, 2 ], [ 6, 6, 2, 1 ], 0 );
	* // returns [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array4d( x, [ 1, 1, 3, 2 ], [ 1, 1, 1, 3 ], 0 );
	* // returns [ [ [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ] ] ]
	*/
	strided2array4d: typeof strided2array4d;

	/**
	* Converts a strided array to a five-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that the input array is compatible with the specified array shape, dimension strides, and index offset.
	*
	* @param x - input array
	* @param shape - array shape
	* @param strides - dimension strides
	* @param offset - index of the first indexed value in the input array
	* @returns five-dimensional nested array
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array5d( x, [ 1, 1, 1, 3, 2 ], [ 6, 6, 6, 2, 1 ], 0 );
	* // returns [ [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ] ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var arr = ns.strided2array5d( x, [ 1, 1, 1, 3, 2 ], [ 1, 1, 1, 1, 3 ], 0 );
	* // returns [ [ [ [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ] ] ] ]
	*/
	strided2array5d: typeof strided2array5d;

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
	* Takes element from an indexed array.
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
	* var y = ns.takeIndexed( x, [ 1, 3 ] );
	* // returns [ 2, 4 ]
	*/
	takeIndexed: typeof takeIndexed;

	/**
	* Takes elements from a two-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function does **not** deep copy nested array elements.
	*
	* @param x - input nested array
	* @param indices - list of indices
	* @param dimension - dimension along which to take elements
	* @param mode - index mode specifying how to handle an index which is out-of-bounds
	* @returns output array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	* var indices = [ 1, 1, 0, 0, -1, -1 ];
	*
	* var y = ns.take2d( x, indices, 1, 'normalize' );
	* // returns [ [ 2, 2, 1, 1, 2, 2 ], [ 4, 4, 3, 3, 4, 4 ] ]
	*/
	take2d: typeof take2d;

	/**
	* Takes elements from a three-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function does **not** deep copy nested array elements.
	*
	* @param x - input nested array
	* @param indices - list of indices
	* @param dimension - dimension along which to take elements
	* @param mode - index mode specifying how to handle an index which is out-of-bounds
	* @returns output array
	*
	* @example
	* var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
	* var indices = [ 1, 1, 0, 0, -1, -1 ];
	*
	* var y = ns.take3d( x, indices, 2, 'normalize' );
	* // returns [ [ [ 2, 2, 1, 1, 2, 2 ], [ 4, 4, 3, 3, 4, 4 ] ] ]
	*/
	take3d: typeof take3d;

	/**
	* Applies a ternary callback to elements in three two-dimensional nested input arrays and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing three input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - ternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add3' );
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = ones2d( shape );
	* var z = ones2d( shape );
	* var out = zeros2d( shape );
	*
	* ns.ternary2d( [ x, y, z, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ]
	*/
	ternary2d: typeof ternary2d;

	/**
	* Applies a ternary callback to elements in three three-dimensional nested input arrays and assigns results to elements in a three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing three input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - ternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add3' );
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* var shape = [ 1, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = ones3d( shape );
	* var z = ones3d( shape );
	* var out = zeros3d( shape );
	*
	* ns.ternary3d( [ x, y, z, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ] ]
	*/
	ternary3d: typeof ternary3d;

	/**
	* Applies a ternary callback to elements in three four-dimensional nested input arrays and assigns results to elements in a four-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing three input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - ternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add3' );
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = ones4d( shape );
	* var z = ones4d( shape );
	* var out = zeros4d( shape );
	*
	* ns.ternary4d( [ x, y, z, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ] ] ]
	*/
	ternary4d: typeof ternary4d;

	/**
	* Applies a ternary callback to elements in three five-dimensional nested input arrays and assigns results to elements in a five-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing three input nested arrays and one output nested array
	* @param shape - array shape
	* @param fcn - ternary callback
	*
	* @example
	* var add = require( '@stdlib/math/base/ops/add3' );
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	*
	* var shape = [ 1, 1, 1, 2, 2 ];
	*
	* var x = ones5d( shape );
	* var y = ones5d( shape );
	* var z = ones5d( shape );
	* var out = zeros5d( shape );
	*
	* ns.ternary5d( [ x, y, z, out ], shape, add );
	*
	* console.log( out );
	* // => [ [ [ [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ] ] ] ]
	*/
	ternary5d: typeof ternary5d;

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
	* var Complex128Array = require( './../../../complex128' );
	*
	* var arr = ns.toAccessorArray( new Complex128Array( 10 ) );
	* // returns <Complex128Array>
	*/
	toAccessorArray: typeof toAccessorArray;

	/**
	* Copies elements to a new "generic" array after removing consecutive duplicated values.
	*
	* @param x - input array
	* @param limit - number of allowed consecutive duplicates
	* @param equalNaNs - boolean indicating whether NaNs should be considered equal
	* @returns output array
	*
	* @example
	* var x = [ 1, 1, 2, 3, 3 ];
	*
	* var y = ns.toDeduped( x, 1, false );
	* // returns [ 1, 2, 3 ]
	*
	* var bool = ( x === y );
	* // returns false
	*
	* @example
	* var x = [ 1, 1, 1, 2, 1, 1, 3, 3 ];
	*
	* var y = ns.toDeduped( x, 2, false );
	* // returns [ 1, 1, 2, 1, 1, 3, 3 ]
	*
	* var bool = ( x === y );
	* // returns false
	*/
	toDeduped: typeof toDeduped;

	/**
	* Applies a unary callback to elements in a two-dimensional nested input array and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shape - array shape
	* @param fcn - unary callback
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = zeros2d( shape );
	*
	* ns.unary2d( [ x, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
	*/
	unary2d: typeof unary2d;

	/**
	* Applies a unary function to each element retrieved from a two-dimensional nested input array according to a callback function and assigns results to elements in a two-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shape - array shape
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	*
	* @example
	* var ones2d = require( './../../../base/ones2d' );
	* var zeros2d = require( './../../../base/zeros2d' );
	*
	* function accessor( v ) {
	*     return v - 2.0;
	* }
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = zeros2d( shape );
	*
	* ns.unary2dBy( [ x, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ -10.0, -10.0 ], [ -10.0, -10.0 ] ]
	*/
	unary2dBy: typeof unary2dBy;

	/**
	* Applies a unary callback to elements in a three-dimensional nested input array and assigns results to elements in a three-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shape - array shape
	* @param fcn - unary callback
	*
	* @example
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = zeros3d( shape );
	*
	* ns.unary3d( [ x, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ]
	*/
	unary3d: typeof unary3d;

	/**
	* Applies a unary callback to elements in a four-dimensional nested input array and assigns results to elements in a four-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shape - array shape
	* @param fcn - unary callback
	*
	* @example
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = zeros4d( shape );
	*
	* ns.unary4d( [ x, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
	*/
	unary4d: typeof unary4d;

	/**
	* Applies a unary callback to elements in a five-dimensional nested input array and assigns results to elements in a five-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shape - array shape
	* @param fcn - unary callback
	*
	* @example
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 1, 2, 2 ];
	*
	* var x = ones5d( shape );
	* var y = zeros5d( shape );
	*
	* ns.unary5d( [ x, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ]
	*/
	unary5d: typeof unary5d;

	/**
	* Applies a unary callback to elements in an n-dimensional nested input array and assigns results to elements in an n-dimensional nested output array.
	*
	* ## Notes
	*
	* -   The function assumes that the input and output arrays have the same shape.
	*
	* @param arrays - array containing one input nested array and one output nested array
	* @param shape - array shape
	* @param fcn - unary callback
	*
	* @example
	* var onesnd = require( './../../../base/onesnd' );
	* var zerosnd = require( './../../../base/zerosnd' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
	*
	* var x = onesnd( shape );
	* var y = zerosnd( shape );
	*
	* ns.unarynd( [ x, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ [ [ [ [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ] ] ] ] ] ] ]
	*/
	unarynd: typeof unarynd;

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

	/**
	* Returns a zero-filled two-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zeros2d( [ 1, 3 ] );
	* // returns [ [ 0.0, 0.0, 0.0 ] ]
	*/
	zeros2d: typeof zeros2d;

	/**
	* Returns a zero-filled three-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zeros3d( [ 1, 1, 3 ] );
	* // returns [ [ [ 0.0, 0.0, 0.0 ] ] ]
	*/
	zeros3d: typeof zeros3d;

	/**
	* Returns a zero-filled four-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zeros4d( [ 1, 1, 1, 3 ] );
	* // returns [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ]
	*/
	zeros4d: typeof zeros4d;

	/**
	* Returns a zero-filled five-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zeros5d( [ 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ]
	*/
	zeros5d: typeof zeros5d;

	/**
	* Returns a zero-filled n-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zerosnd( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ] ] ] ] ] ]
	*/
	zerosnd: typeof zerosnd;
}

/**
* Base (i.e., lower-level) array utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;