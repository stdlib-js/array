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
import any = require( './../../../base/any' );
import anyBy = require( './../../../base/any-by' );
import anyByRight = require( './../../../base/any-by-right' );
import anyHasOwnProp = require( './../../../base/any-has-own-property' );
import anyHasProp = require( './../../../base/any-has-property' );
import anyIsEntry = require( './../../../base/any-is-entry' );
import anyIsEntryIn = require( './../../../base/any-is-entry-in' );
import arraylike2object = require( './../../../base/arraylike2object' );
import assert = require( './../../../base/assert' );
import at = require( './../../../base/at' );
import at2d = require( './../../../base/at2d' );
import at3d = require( './../../../base/at3d' );
import at4d = require( './../../../base/at4d' );
import at5d = require( './../../../base/at5d' );
import atnd = require( './../../../base/atnd' );
import banded = require( './../../../base/banded' );
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
import bquaternary3d = require( './../../../base/broadcasted-quaternary3d' );
import bquaternary4d = require( './../../../base/broadcasted-quaternary4d' );
import bquaternary5d = require( './../../../base/broadcasted-quaternary5d' );
import bquinary2d = require( './../../../base/broadcasted-quinary2d' );
import bquinary4d = require( './../../../base/broadcasted-quinary4d' );
import bternary2d = require( './../../../base/broadcasted-ternary2d' );
import bternary3d = require( './../../../base/broadcasted-ternary3d' );
import bternary4d = require( './../../../base/broadcasted-ternary4d' );
import bternary5d = require( './../../../base/broadcasted-ternary5d' );
import bunary2d = require( './../../../base/broadcasted-unary2d' );
import bunary3d = require( './../../../base/broadcasted-unary3d' );
import bunary4d = require( './../../../base/broadcasted-unary4d' );
import bunary5d = require( './../../../base/broadcasted-unary5d' );
import cartesianPower = require( './../../../base/cartesian-power' );
import cartesianProduct = require( './../../../base/cartesian-product' );
import cartesianSquare = require( './../../../base/cartesian-square' );
import copy = require( './../../../base/copy' );
import copyIndexed = require( './../../../base/copy-indexed' );
import countFalsy = require( './../../../base/count-falsy' );
import countIf = require( './../../../base/count-if' );
import countIfs = require( './../../../base/count-ifs' );
import countSameValue = require( './../../../base/count-same-value' );
import countSameValueZero = require( './../../../base/count-same-value-zero' );
import countTruthy = require( './../../../base/count-truthy' );
import cuany = require( './../../../base/cuany' );
import cuanyBy = require( './../../../base/cuany-by' );
import cuanyByRight = require( './../../../base/cuany-by-right' );
import cuevery = require( './../../../base/cuevery' );
import cueveryBy = require( './../../../base/cuevery-by' );
import cueveryByRight = require( './../../../base/cuevery-by-right' );
import cunone = require( './../../../base/cunone' );
import cunoneBy = require( './../../../base/cunone-by' );
import cunoneByRight = require( './../../../base/cunone-by-right' );
import cusome = require( './../../../base/cusome' );
import cusomeBy = require( './../../../base/cusome-by' );
import cusomeByRight = require( './../../../base/cusome-by-right' );
import dedupe = require( './../../../base/dedupe' );
import entries2objects = require( './../../../base/entries2objects' );
import entries2views = require( './../../../base/entries2views' );
import every = require( './../../../base/every' );
import everyBy = require( './../../../base/every-by' );
import everyByRight = require( './../../../base/every-by-right' );
import fancySlice = require( './../../../base/fancy-slice' );
import fancySliceAssign = require( './../../../base/fancy-slice-assign' );
import fill = require( './../../../base/fill' );
import fillBy = require( './../../../base/fill-by' );
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
import filter = require( './../../../base/filter' );
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
import forEach = require( './../../../base/for-each' );
import strided2array = require( './../../../base/from-strided' );
import getter = require( './../../../base/getter' );
import groupEntries = require( './../../../base/group-entries' );
import groupEntriesBy = require( './../../../base/group-entries-by' );
import groupIndices = require( './../../../base/group-indices' );
import groupIndicesBy = require( './../../../base/group-indices-by' );
import groupValues = require( './../../../base/group-values' );
import groupValuesBy = require( './../../../base/group-values-by' );
import groupValuesOnKey = require( './../../../base/group-values-on-key' );
import incrspace = require( './../../../base/incrspace' );
import indexOf = require( './../../../base/index-of' );
import indexOfSameValue = require( './../../../base/index-of-same-value' );
import indicesComplement = require( './../../../base/indices-complement' );
import insertAt = require( './../../../base/insert-at' );
import join = require( './../../../base/join' );
import last = require( './../../../base/last' );
import lastIndexOf = require( './../../../base/last-index-of' );
import lastIndexOfSameValue = require( './../../../base/last-index-of-same-value' );
import linspace = require( './../../../base/linspace' );
import linspace2d = require( './../../../base/linspace2d' );
import logspace = require( './../../../base/logspace' );
import map = require( './../../../base/map' );
import map2d = require( './../../../base/map2d' );
import map3d = require( './../../../base/map3d' );
import map4d = require( './../../../base/map4d' );
import map5d = require( './../../../base/map5d' );
import minSignedIntegerDataType = require( './../../../base/min-signed-integer-dtype' );
import minUnsignedIntegerDataType = require( './../../../base/min-unsigned-integer-dtype' );
import mskbinary2d = require( './../../../base/mskbinary2d' );
import mskbinary3d = require( './../../../base/mskbinary3d' );
import mskbinary4d = require( './../../../base/mskbinary4d' );
import mskbinary5d = require( './../../../base/mskbinary5d' );
import mskfilter = require( './../../../base/mskfilter' );
import mskfilterMap = require( './../../../base/mskfilter-map' );
import mskfilter2 = require( './../../../base/mskfilter2' );
import mskfiltern = require( './../../../base/mskfiltern' );
import mskput = require( './../../../base/mskput' );
import mskreject = require( './../../../base/mskreject' );
import mskrejectMap = require( './../../../base/mskreject-map' );
import mskunary2d = require( './../../../base/mskunary2d' );
import mskunary3d = require( './../../../base/mskunary3d' );
import mskunary4d = require( './../../../base/mskunary4d' );
import mskunary5d = require( './../../../base/mskunary5d' );
import nCartesianProduct = require( './../../../base/n-cartesian-product' );
import nested2objects = require( './../../../base/nested2objects' );
import nested2views = require( './../../../base/nested2views' );
import none = require( './../../../base/none' );
import noneBy = require( './../../../base/none-by' );
import noneByRight = require( './../../../base/none-by-right' );
import nulls = require( './../../../base/nulls' );
import oneTo = require( './../../../base/one-to' );
import ones = require( './../../../base/ones' );
import ones2d = require( './../../../base/ones2d' );
import ones3d = require( './../../../base/ones3d' );
import ones4d = require( './../../../base/ones4d' );
import ones5d = require( './../../../base/ones5d' );
import onesnd = require( './../../../base/onesnd' );
import place = require( './../../../base/place' );
import put = require( './../../../base/put' );
import quaternary2d = require( './../../../base/quaternary2d' );
import quaternary3d = require( './../../../base/quaternary3d' );
import quaternary4d = require( './../../../base/quaternary4d' );
import quaternary5d = require( './../../../base/quaternary5d' );
import quinary2d = require( './../../../base/quinary2d' );
import quinary3d = require( './../../../base/quinary3d' );
import quinary4d = require( './../../../base/quinary4d' );
import quinary5d = require( './../../../base/quinary5d' );
import reject = require( './../../../base/reject' );
import rekey = require( './../../../base/rekey' );
import rekeyViews = require( './../../../base/rekey-views' );
import removeAt = require( './../../../base/remove-at' );
import reshape = require( './../../../base/reshape' );
import resolveGetter = require( './../../../base/resolve-getter' );
import resolveSetter = require( './../../../base/resolve-setter' );
import reverse = require( './../../../base/reverse' );
import scatterFilled = require( './../../../base/scatter-filled' );
import scattered = require( './../../../base/scattered' );
import setter = require( './../../../base/setter' );
import slice = require( './../../../base/slice' );
import strided2array2d = require( './../../../base/strided2array2d' );
import strided2array3d = require( './../../../base/strided2array3d' );
import strided2array4d = require( './../../../base/strided2array4d' );
import strided2array5d = require( './../../../base/strided2array5d' );
import symmetric = require( './../../../base/symmetric' );
import symmetricBanded = require( './../../../base/symmetric-banded' );
import take = require( './../../../base/take' );
import takeIndexed = require( './../../../base/take-indexed' );
import takeIndexed2 = require( './../../../base/take-indexed2' );
import takeMap = require( './../../../base/take-map' );
import take2d = require( './../../../base/take2d' );
import take3d = require( './../../../base/take3d' );
import ternary2d = require( './../../../base/ternary2d' );
import ternary3d = require( './../../../base/ternary3d' );
import ternary4d = require( './../../../base/ternary4d' );
import ternary5d = require( './../../../base/ternary5d' );
import toAccessorArray = require( './../../../base/to-accessor-array' );
import toDeduped = require( './../../../base/to-deduped' );
import toInsertedAt = require( './../../../base/to-inserted-at' );
import toReversed = require( './../../../base/to-reversed' );
import unary2d = require( './../../../base/unary2d' );
import unary2dBy = require( './../../../base/unary2d-by' );
import unary3d = require( './../../../base/unary3d' );
import unary3dBy = require( './../../../base/unary3d-by' );
import unary4d = require( './../../../base/unary4d' );
import unary4dBy = require( './../../../base/unary4d-by' );
import unary5d = require( './../../../base/unary5d' );
import unary5dBy = require( './../../../base/unary5d-by' );
import unarynd = require( './../../../base/unarynd' );
import unitspace = require( './../../../base/unitspace' );
import where = require( './../../../base/where' );
import arrayWith = require( './../../../base/with' );
import without = require( './../../../base/without' );
import zeroTo = require( './../../../base/zero-to' );
import zeros = require( './../../../base/zeros' );
import zeros2d = require( './../../../base/zeros2d' );
import zeros3d = require( './../../../base/zeros3d' );
import zeros4d = require( './../../../base/zeros4d' );
import zeros5d = require( './../../../base/zeros5d' );
import zerosnd = require( './../../../base/zerosnd' );
import zip = require( './../../../base/zip' );
import zip2object = require( './../../../base/zip2object' );
import zip2objects = require( './../../../base/zip2objects' );
import zip2views = require( './../../../base/zip2views' );

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
	* };
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
	* Tests whether at least one element in an array is truthy.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a truthy value.
	* -   If provided an empty collection, the function returns `false`.
	*
	* @param x - input array
	* @returns boolean indicating whether at least one element is truthy
	*
	* @example
	* var x = [ 0, 0, 1, 0 ];
	*
	* var out = ns.any( x );
	* // returns true
	*/
	any: typeof any;

	/**
	* Tests whether at least one element in an array passes a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a truthy return value.
	* -   If provided an empty collection, the function returns `false`.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns boolean indicating whether all elements pass a test
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 0, 0, 1, 0 ];
	*
	* var out = ns.anyBy( x, isPositive );
	* // returns true
	*/
	anyBy: typeof anyBy;

	/**
	* Tests whether at least one element in an array passes a test implemented by a predicate function, while iterating from right to left.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a truthy return value.
	* -   If provided an empty collection, the function returns `false`.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns boolean indicating whether all elements pass a test
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 0, 0, 1, 0 ];
	*
	* var out = ns.anyByRight( x, isPositive );
	* // returns true
	*/
	anyByRight: typeof anyByRight;

	/**
	* Tests whether at least one element in a provided array has a specified own property.
	*
	* @param arr - input array
	* @param prop - property
	* @returns result
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
	* var bool = ns.anyHasOwnProp( [ o1, o2, o3 ], 'b' );
	* // returns true
	*
	* bool = ns.anyHasOwnProp( [ o1, o2, o3 ], 'd' );
	* // returns false
	*
	* bool = ns.anyHasOwnProp( [ o1, o2, o3 ], 'toString' );
	* // returns false
	*/
	anyHasOwnProp: typeof anyHasOwnProp;

	/**
	* Tests whether at least one element in a provided array has a specified property, either own or inherited.
	*
	* @param arr - input array
	* @param prop - property
	* @returns result
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
	* var bool = ns.anyHasProp( [ o1, o2, o3 ], 'b' );
	* // returns true
	*
	* bool = ns.anyHasProp( [ o1, o2, o3 ], 'd' );
	* // returns false
	*
	* bool = ns.anyHasProp( [ o1, o2, o3 ], 'toString' );
	* // returns true
	*/
	anyHasProp: typeof anyHasProp;

	/**
	* Tests whether at least one element in a provided array has a specified own property key-value pair.
	*
	* @param arr - input array
	* @param prop - property
	* @param value - property value
	* @returns result
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
	* var bool = ns.anyIsEntry( [ o1, o2, o3 ], 'b', 2 );
	* // returns true
	*
	* bool = ns.anyIsEntry( [ o1, o2, o3 ], 'b', 3 );
	* // returns false
	*
	* bool = ns.anyIsEntry( [ o1, o2, o3 ], 'd', 0 );
	* // returns false
	*/
	anyIsEntry: typeof anyIsEntry;

	/**
	* Tests whether at least one element in a provided array has a specified property key-value pair, either own or inherited.
	*
	* @param arr - input array
	* @param prop - property
	* @param value - property value
	* @returns result
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
	* var bool = ns.anyIsEntryIn( [ o1, o2, o3 ], 'b', 2 );
	* // returns true
	*
	* bool = ns.anyIsEntryIn( [ o1, o2, o3 ], 'b', 3 );
	* // returns false
	*
	* bool = ns.anyIsEntryIn( [ o1, o2, o3 ], 'd', 0 );
	* // returns false
	*/
	anyIsEntryIn: typeof anyIsEntryIn;

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
	* };
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
	* Returns an element from an array.
	*
	* @param x - input array
	* @param index - element index
	* @returns array element
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var v = ns.at( x, 0 );
	* // returns 1
	*
	* v = ns.at( x, 1 );
	* // returns 2
	*
	* v = ns.at( x, -2 );
	* // returns 3
	*/
	at: typeof at;

	/**
	* Returns an element from a two-dimensional nested array.
	*
	* @param x - input array
	* @param i0 - first dimension index
	* @param i1 - second dimension index
	* @returns nested array element
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var v = ns.at2d( x, 0, 1 );
	* // returns 2
	*
	* v = ns.at2d( x, 1, 0 );
	* // returns 3
	*
	* v = ns.at2d( x, -2, -2 );
	* // returns 1
	*/
	at2d: typeof at2d;

	/**
	* Returns an element from a three-dimensional nested array.
	*
	* @param x - input array
	* @param i0 - first dimension index
	* @param i1 - second dimension index
	* @param i2 - third dimension index
	* @returns nested array element
	*
	* @example
	* var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
	*
	* var v = ns.at3d( x, 0, 0, 1 );
	* // returns 2
	*
	* v = ns.at3d( x, 0, 1, 0 );
	* // returns 3
	*
	* v = ns.at3d( x, -1, -2, -2 );
	* // returns 1
	*/
	at3d: typeof at3d;

	/**
	* Returns an element from a four-dimensional nested array.
	*
	* @param x - input array
	* @param i0 - first dimension index
	* @param i1 - second dimension index
	* @param i2 - third dimension index
	* @param i3 - fourth dimension index
	* @returns nested array element
	*
	* @example
	* var x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
	*
	* var v = ns.at4d( x, 0, 0, 0, 1 );
	* // returns 2
	*
	* v = ns.at4d( x, 0, 0, 1, 0 );
	* // returns 3
	*
	* v = ns.at4d( x, -1, -1, -2, -2 );
	* // returns 1
	*/
	at4d: typeof at4d;

	/**
	* Returns an element from a five-dimensional nested array.
	*
	* @param x - input array
	* @param i0 - first dimension index
	* @param i1 - second dimension index
	* @param i2 - third dimension index
	* @param i3 - fourth dimension index
	* @param i4 - fifth dimension index
	* @returns nested array element
	*
	* @example
	* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];
	*
	* var v = ns.at5d( x, 0, 0, 0, 0, 1 );
	* // returns 2
	*
	* v = ns.at5d( x, 0, 0, 0, 1, 0 );
	* // returns 3
	*
	* v = ns.at5d( x, -1, -1, -1, -2, -2 );
	* // returns 1
	*/
	at5d: typeof at5d;

	/**
	* Returns an element from an n-dimensional nested array.
	*
	* @param x - input array
	* @param i0 - first dimension index
	* @param indices - dimension indices
	* @returns nested array element
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var v = ns.atnd( x, 0, 1 );
	* // returns 2
	*
	* v = ns.atnd( x, 1, 0 );
	* // returns 3
	*
	* v = ns.atnd( x, -2, -2 );
	* // returns 1
	*/
	atnd: typeof atnd;

	/**
	* Banded array utilities.
	*/
	banded: typeof banded;

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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* var add = require( '@stdlib/number/float64/base/add4' );
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
	* // => [ [ 4.0, 4.0 ], [ 4.0, 4.0 ] ]
	*/
	bquaternary2d: typeof bquaternary2d;

	/**
	* Applies a quaternary callback to elements in four broadcasted input arrays and assigns results to elements in a three-dimensional nested output array.
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
	* var add = require( '@stdlib/number/float64/base/add4' );
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* var shapes = [
	*     [ 1, 1, 3 ],
	*     [ 3, 1, 1 ],
	*     [ 1, 3, 1 ],
	*     [ 3, 3, 3 ],
	*     [ 3, 3, 3 ]
	* ];
	*
	* var x = ones3d( shapes[ 0 ] );
	* var y = ones3d( shapes[ 1 ] );
	* var z = ones3d( shapes[ 2 ] );
	* var w = ones3d( shapes[ 3 ] );
	* var out = zeros3d( shapes[ 4 ] );
	*
	* ns.bquaternary3d( [ x, y, z, w, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ] ]
	*/
	bquaternary3d: typeof bquaternary3d;

	/**
	* Applies a quaternary callback to elements in four broadcasted input arrays and assigns results to elements in a four-dimensional nested output array.
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
	* var add = require( '@stdlib/number/float64/base/add4' );
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* var shapes = [
	*     [ 1, 3, 1, 1 ],
	*     [ 1, 1, 3, 1 ],
	*     [ 1, 1, 1, 3 ],
	*     [ 1, 1, 1, 1 ],
	*     [ 1, 3, 3, 3 ]
	* ];
	*
	* var x = ones4d( shapes[ 0 ] );
	* var y = ones4d( shapes[ 1 ] );
	* var z = ones4d( shapes[ 2 ] );
	* var w = ones4d( shapes[ 3 ] );
	* var out = zeros4d( shapes[ 4 ] );
	*
	* ns.bquaternary4d( [ x, y, z, w, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ] ] ]
	*/
	bquaternary4d: typeof bquaternary4d;

	/**
	* Applies a quaternary callback to elements in four broadcasted input arrays and assigns results to elements in a five-dimensional nested output array.
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
	* var add = require( '@stdlib/number/float64/base/add4' );
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	*
	* var shapes = [
	*     [ 1, 1, 3, 1, 1 ],
	*     [ 1, 1, 1, 3, 1 ],
	*     [ 1, 1, 1, 1, 3 ],
	*     [ 1, 1, 1, 1, 1 ],
	*     [ 1, 1, 3, 3, 3 ]
	* ];
	*
	* var x = ones5d( shapes[ 0 ] );
	* var y = ones5d( shapes[ 1 ] );
	* var z = ones5d( shapes[ 2 ] );
	* var w = ones5d( shapes[ 3 ] );
	* var out = zeros5d( shapes[ 4 ] );
	*
	* ns.bquaternary5d( [ x, y, z, w, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ [ [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ] ] ] ]
	*/
	bquaternary5d: typeof bquaternary5d;

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
	* Applies a quinary callback to elements in five broadcasted input arrays and assigns results to elements in a four-dimensional nested output array.
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
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* function add( x, y, z, w, v ) {
	*     return x + y + z + w + v;
	* }
	*
	* var shapes = [
	*     [ 1, 1, 1, 2 ],
	*     [ 1, 1, 2, 1 ],
	*     [ 1, 1, 2, 2 ],
	*     [ 1, 2, 1, 1 ],
	*     [ 2, 2, 2, 2 ],
	*     [ 2, 2, 2, 2 ]
	* ];
	*
	* var x = ones4d( shapes[ 0 ] );
	* var y = ones4d( shapes[ 1 ] );
	* var z = ones4d( shapes[ 2 ] );
	* var w = ones4d( shapes[ 3 ] );
	* var v = ones4d( shapes[ 4 ] );
	* var out = zeros4d( shapes[ 5 ] );
	*
	* ns.bquinary4d( [ x, y, z, w, v, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ], [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ], [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ], [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ] ]
	*/
	bquinary4d: typeof bquinary4d;

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
	* var add = require( '@stdlib/number/float64/base/add3' );
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
	* // => [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ]
	*/
	bternary2d: typeof bternary2d;

	/**
	* Applies a ternary callback to elements in three broadcasted input arrays and assigns results to elements in a three-dimensional nested output array.
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
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	* var add = require( '@stdlib/number/float64/base/add3' );
	*
	* var shapes = [
	*     [ 1, 2, 1 ],
	*     [ 2, 1, 1 ],
	*     [ 1, 1, 2 ],
	*     [ 2, 2, 2 ]
	* ];
	*
	* var x = ones3d( shapes[ 0 ] );
	* var y = ones3d( shapes[ 1 ] );
	* var z = ones3d( shapes[ 2 ] );
	* var out = zeros3d( shapes[ 3 ] );
	*
	* ns.bternary3d( [ x, y, z, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ], [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ] ]
	*/
	bternary3d: typeof bternary3d;

	/**
	* Applies a ternary callback to elements in three broadcasted input arrays and assigns results to elements in a four-dimensional nested output array.
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
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	* var add = require( '@stdlib/number/float64/base/add3' );
	*
	* var shapes = [
	*     [ 1, 2, 1, 1 ],
	*     [ 2, 1, 1, 1 ],
	*     [ 1, 1, 2, 1 ],
	*     [ 2, 2, 2, 2 ]
	* ];
	*
	* var x = ones4d( shapes[ 0 ] );
	* var y = ones4d( shapes[ 1 ] );
	* var z = ones4d( shapes[ 2 ] );
	* var out = zeros4d( shapes[ 3 ] );
	*
	* ns.bternary4d( [ x, y, z, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ], [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ], [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ], [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ] ]
	*/
	bternary4d: typeof bternary4d;

	/**
	* Applies a ternary callback to elements in three broadcasted input arrays and assigns results to elements in a five-dimensional nested output array.
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
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	* var add = require( '@stdlib/number/float64/base/add3' );
	* var shapes = [
	*     [ 1, 2, 1, 1, 1 ],
	*     [ 2, 1, 1, 1, 1 ],
	*     [ 1, 1, 1, 1, 1 ],
	*     [ 2, 2, 1, 1, 1 ]
	* ];
	*
	* var x = ones5d( shapes[ 0 ] );
	* var y = ones5d( shapes[ 1 ] );
	* var z = ones5d( shapes[ 2 ] );
	* var out = zeros5d( shapes[ 3 ] );
	*
	* ns.bternary5d( [ x, y, z, out ], shapes, add );
	*
	* console.log( out );
	* // => [ [ [ [ [ 3 ] ] ], [ [ [ 3 ] ] ] ], [ [ [ 3 ] ] ], [ [ [ 3 ] ] ] ] ]
	*/
	bternary5d: typeof bternary5d;

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
	* Counts the number of falsy values in an array.
	*
	* @param x - input array
	* @returns number of falsy values
	*
	* @example
	* var x = [ 0, 1, 0, 1, 1 ];
	*
	* var out = ns.countFalsy( x );
	* // returns 2
	*/
	countFalsy: typeof countFalsy;

	/**
	* Counts the number of elements in an array which pass a test implemented by a predicate function.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns result
	*
	* @example
	* function predicate( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 0, 1, 0, 1, 1 ];
	*
	* var n = ns.countIf( x, predicate );
	* // returns 3
	*/
	countIf: typeof countIf;

	/**
	* Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.
	*
	* @param x0 - first input array
	* @param predicate0 - first predicate function
	* @param x1 - second input array
	* @param predicate1 - second predicate function
	* @param x2 - third input array
	* @param predicate2 - third predicate function
	* @param x3 - fourth input array
	* @param predicate3 - fourth predicate function
	* @param x4 - fifth input array
	* @param predicate4 - fifth predicate function
	* @param args - additional input arrays and predicate functions
	* @returns result
	*
	* @example
	* function predicate0( v ) {
	*     return v > 0;
	* }
	*
	* function predicate1( v ) {
	*     return v < 0;
	* }
	*
	* function predicate2( v ) {
	*     return v % 2 === 0;
	* }
	*
	* function predicate3( v ) {
	*     return v % 2 !== 0;
	* }
	*
	* function predicate4( v ) {
	*     return v === true;
	* }
	*
	* var x0 = [ 0, 1, 0, 1, 1 ];
	* var x1 = [ -1, -2, 4, 5, -8 ];
	* var x2 = [ 0, 4, 3, 2, 12 ];
	* var x3 = [ 2, 9, 3, 6, 5 ];
	* var x4 = [ false, true, false, true, true ];
	*
	* var n = ns.countIfs( x0, predicate0, x1, predicate1, x3, predicate3, x4, predicate4 );
	* // returns 2
	*/
	countIfs: typeof countIfs;

	/**
	* Counts the number of elements in an array that are equal to a specified value.
	*
	* ## Notes
	*
	* -   The function uses the [SameValue Algorithm][ecma-262-same-value-algorithm], as specified in ECMAScript 5.
	* -   In contrast to the strict equality operator `===`, `-0` and `+0` are distinguishable and `NaNs` are the same.
	*
	* [ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12
	*
	* @param x - input array
	* @param value - search value
	* @returns number of elements that are equal to a specified value
	*
	* @example
	* var x = [ 0, 1, 0, 1, 1 ];
	*
	* var out = ns.countSameValue( x, 1 );
	* // returns 3
	*/
	countSameValue: typeof countSameValue;

	/**
	* Counts the number of elements in an array that are equal to a specified value.
	*
	* ## Notes
	*
	* -   In contrast to an implementation based on the strict equality operator `===`, the function treats `NaNs` as the same value.
	*
	* @param x - input array
	* @param value - search value
	* @returns number of elements that are equal to a specified value
	*
	* @example
	* var x = [ 0, 1, 0, 1, 1 ];
	*
	* var out = ns.countSameValueZero( x, 1 );
	* // returns 3
	*/
	countSameValueZero: typeof countSameValueZero;

	/**
	* Counts the number of truthy values in an array.
	*
	* @param x - input array
	* @returns number of truthy values
	*
	* @example
	* var x = [ 0, 1, 0, 1, 1 ];
	*
	* var out = ns.countTruthy( x );
	* // returns 3
	*/
	countTruthy: typeof countTruthy;

	/**
	* Cumulatively tests whether at least one element in a provided array is truthy.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var x = [ false, false, true, false, false ];
	*
	* var result = ns.cuany( x );
	* // returns [ false, false, true, true, true ]
	*
	* @example
	* var x = [ false, false, true, false, false ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cuany.assign( x, y, 2, 0 );
	* // returns [ false, null, false, null, true, null, true, null, true, null ]
	*/
	cuany: typeof cuany;

	/**
	* Cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* function isPositive( value ) {
	*	return ( value > 0 );
	* }
	*
	* var x = [ 0, 0, 0, 1, 0 ];
	*
	* var y = ns.cuanyBy( x, isPositive );
	* // returns [ false, false, false, true, true ]
	*
	* @example
	* function isPositive( value ) {
	*	return ( value > 0 );
	* }
	*
	* var x = [ 0, 0, 0, 1, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cuanyBy.assign( x, y, 2, 0, isPositive );
	* // returns [ false, null, false, null, false, null, true, null, true, null ]
	*/
	cuanyBy: typeof cuanyBy;

	/**
	* Cumulatively tests whether at least one array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left.
	*
	* @param x - input array
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	* var x = [ 1, 1, 0, 0, 0 ];
	*
	* var result = ns.cuanyByRight( x, isPositive );
	* // returns [ false, false, false, true, true ]
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	* var x = [ 0, 1, 1, 0, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cuanyByRight.assign( x, y, 2, 0, isPositive );
	* // returns [ false, null, false, null, false, null, true, null, true, null ]
	*/
	cuanyByRight: typeof cuanyByRight;

	/**
	* Cumulatively tests whether every element in a provided array is truthy.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var x = [ true, true, true, false, true ];
	*
	* var result = ns.cuevery( x );
	* // returns [ true, true, true, false, false ];
	*
	* @example
	* var x = [ true, true, true, false, true ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cuevery.assign( x, y, 2, 0 );
	* // returns [ true, null, true, null, true, null, false, null, false, null ];
	*/
	cuevery: typeof cuevery;

	/**
	* Cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function.
	*
	* @param x - input array
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	* 	return ( v > 0 );
	* }
	* var x = [ 1, 1, 0, 0, 0 ];
	*
	* var result = ns.cueveryBy( x, isPositive );
	* // returns [ true, true, false, false, false ]
	*
	* @example
	* function isPositive( v ) {
	* 	return ( v > 0 );
	* }
	* var x = [ 1, 1, 0, 0, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cueveryBy.assign( x, y, 2, 0, isPositive );
	* // returns [ true, null, true, null, false, null, false, null, false, null ];
	*/
	cueveryBy: typeof cueveryBy;

	/**
	* Cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left.
	*
	* @param x - input array
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	* var x = [ 0, 0, 1, 1, 1 ];
	*
	* var result = ns.cueveryByRight( x, isPositive );
	* // returns [ true, true, true, false, false ]
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	* var x = [ 1, 0, 0, 1, 1 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cueveryByRight.assign( x, y, 2, 0, isPositive );
	* // returns [ true, null, true, null, false, null, false, null, false, null ]
	*/
	cueveryByRight: typeof cueveryByRight;

	/**
	* Cumulatively tests whether every element in a provided array is falsy.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var x = [ false, false, false, true, false ];
	*
	* var result = ns.cunone( x );
	* // returns [ true, true, true, false, false ];
	*
	* @example
	* var x = [ false, false, false, true, false ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cunone.assign( x, y, 2, 0 );
	* // returns [ true, null, true, null, true, null, false, null, false, null ];
	*/
	cunone: typeof cunone;

	/**
	* Cumulatively tests whether every array element in a provided array fails a test implemented by a predicate function.
	*
	* @param x - input array
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	*     return ( v > 0 );
	* }
	* var x = [ 0, 0, 0, 1, 0 ];
	*
	* var result = ns.cunoneBy( x, isPositive );
	* // returns [ true, true, true, false, false ]
	*
	* @example
	* function isPositive( v ) {
	*     return ( v > 0 );
	* }
	* var x = [ 0, 0, 0, 1, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cunoneBy.assign( x, y, 2, 0, isPositive );
	* // returns [ true, null, true, null, true, null, false, null, false, null ]
	*/
	cunoneBy: typeof cunoneBy;

	/**
	* Cumulatively tests whether no array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left.
	*
	* @param x - input array
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function fcn( v ) {
	* 	return v > 0;
	* }
	* var x = [ 1, 1, 0, 0, 0 ];
	*
	* var result = cunoneByright( x, fcn );
	* // returns [ true, true, true, false, false ]
	*
	* @example
	* function fcn( v ) {
	* 	return v > 0;
	* }
	* var x = [ 0, 1, 1, 0, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cunoneByRight.assign( x, 2, y, 2, 0, fcn );
	* // returns [ true, null, true, null, false, null, false, null, false, null ]
	*/
	cunoneByRight: typeof cunoneByRight;

	/**
	* Cumulatively tests whether at least `n` array elements in a provided array are truthy.
	*
	* @param x - input array
	* @param n - number of elements
	* @returns output array
	*
	* @example
	* var x = [ false, false, false, true, true ];
	*
	* var result = ns.cusome( x, 2 );
	* // returns [ false, false, false, false, true ];
	*
	* @example
	* var x = [ false, false, false, true, true ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cusome.assign( x, y, 2, 0 );
	* // returns [ false, null, false, null, false, null, false, null, true, null ];
	*/
	cusome: typeof cusome;

	/**
	* Cumulatively tests whether at least `n` array elements in a provided array pass a test implemented by a predicate function.
	*
	* @param x - input array
	* @param n - number of elements
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	*     return ( v > 0 );
	* }
	* var x = [ 0, 0, 0, 1, 1 ];
	*
	* var result = ns.cusomeBy( x, 2, isPositive );
	* // returns [ false, false, false, false, true ]
	*
	* @example
	* function isPositive( v ) {
	*     return ( v > 0 );
	* }
	* var x = [ 0, 0, 0, 1, 1 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cusomeBy.assign( x, 2, y, 2, 0, isPositive );
	* //returns [ false, null, false, null, false, null, false, null, true, null ];
	*/
	cusomeBy: typeof cusomeBy;

	/**
	* Cumulatively test whether at least `n` elements in a provided array pass a test implemented by a predicate function, while iterating from right-to-left.
	*
	* @param x - input array
	* @param n - number of elements
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function fcn( v ) {
	*     return v > 0;
	* }
	* var x = [ 1, 1, 0, 0, 0 ];
	*
	* var result = cusomeByright( x, 2, fcn );
	* // returns [ false, false, false, false, true ]
	*
	* @example
	* function fcn( v ) {
	*     return v > 0;
	* }
	* var x = [ 0, 1, 1, 0, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = ns.cusomeByRight.assign( x, 2, y, 2, 0, fcn );
	* // returns [ false, null, false, null, false, null, true, null, true, null ]
	*/
	cusomeByRight: typeof cusomeByRight;

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
	* Converts array entries to an array of objects.
	*
	* ## Notes
	*
	* -   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.
	*
	* @param arr - input array
	* @param fields - list of field names
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	* var fields = [ 'x', 'y' ];
	*
	* var out = ns.entries2objects( x, fields );
	* // returns [ { 'x': 0, 'y': 1 }, { 'x': 1, 'y': 2 }, { 'x': 2, 'y': 3 } ]
	*/
	entries2objects: typeof entries2objects;

	/**
	* Converts array entries to an array of composite views.
	*
	* ## Notes
	*
	* -   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.
	* -   For each element of the returned array, the index view field is read-only and cannot be mutated.
	*
	* @param arr - input array
	* @param fields - list of field names
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	* var fields = [ 'x', 'y' ];
	*
	* var out = ns.entries2views( x, fields );
	* // returns [ <Object>, <Object>, <Object> ]
	*
	* var v0 = out[ 0 ].toJSON();
	* // returns { 'x': 0, 'y': 1 }
	*
	* var v1 = out[ 1 ].toJSON();
	* // returns { 'x': 1, 'y': 2 }
	*
	* var v2 = out[ 2 ].toJSON();
	* // returns { 'x': 2, 'y': 3 }
	*
	* // Mutate the input array:
	* x[ 0 ] = 5;
	*
	* v0 = out[ 0 ].toJSON();
	* // returns { 'x': 0, 'y': 5 }
	*
	* // Set a view property:
	* out[ 1 ].y = 'beep';
	*
	* v1 = out[ 1 ].toJSON();
	* // returns { 'x': 1, 'y': 'beep' }
	*
	* var y = x.slice();
	* // returns [ 5, 'beep', 3 ]
	*/
	entries2views: typeof entries2views;

	/**
	* Tests whether all elements in an array are truthy.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a non-truthy value.
	* -   If provided an empty collection, the function returns `true`.
	*
	* @param x - input array
	* @returns boolean indicating whether all elements are truthy
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.every( x );
	* // returns true
	*/
	every: typeof every;

	/**
	* Tests whether all elements in an array pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a non-truthy return value.
	* -   If provided an empty collection, the function returns `true`.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns boolean indicating whether all elements pass a test
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.everyBy( x, isPositive );
	* // returns true
	*/
	everyBy: typeof everyBy;

	/**
	* Tests whether all elements in an array pass a test implemented by a predicate function, iterating from right to left.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a non-truthy return value.
	* -   If provided an empty collection, the function returns `true`.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns boolean indicating whether all elements pass a test
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.everyByRight( x, isPositive );
	* // returns true
	*/
	everyByRight: typeof everyByRight;

	/**
	* Returns a shallow copy of a portion of an array.
	*
	* @param x - input array
	* @param s - slice object
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var Slice = require( '@stdlib/ns.fancySlice/ctor' );
	*
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.fancySlice( x, new Slice( null, null, -1 ), false );
	* // returns [ 6, 5, 4, 3, 2, 1 ]
	*/
	fancySlice: typeof fancySlice;

	/**
	* Assigns element values from a broadcasted input array to corresponding elements in an output array.
	*
	* ## Notes
	*
	* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
	* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
	*
	* @param x - input array
	* @param y - output array
	* @param s - slice object
	* @param strict - boolean indicating whether to enforce strict bounds checking
	* @returns output array
	*
	* @example
	* var Slice = require( '@stdlib/slice/ctor' );
	*
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
	*
	* var s = new Slice( null, null, 2 );
	* // returns <Slice>
	*
	* var out = ns.fancySliceAssign( x, y, s, false );
	* // returns [ 1, 0, 2, 0, 3, 0, 4, 0 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	fancySliceAssign: typeof fancySliceAssign;

	/**
	* Fills all elements within a portion of an array with a specified value.
	*
	* @param x - input array
	* @param value - fill value
	* @param start - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @returns modified input array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.fill( x, 4, 0, 3 );
	* // returns [ 4, 4, 4 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.fill( x, 8, 0, 3 );
	* // returns [ 8, 8, 8, 4, 5, 6 ]
	*/
	fill: typeof fill;

	/**
	* Fills all elements within a portion of an array according to a provided callback function.
	*
	* @param x - input array
	* @param start - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	* @returns modified input array
	*
	* @example
	* function fcn() {
	*     return 4;
	* }
	*
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.fillBy( x, 0, 3, fcn );
	* // returns [ 4, 4, 4 ]
	*
	* @example
	* function fcn() {
	*     return 8;
	* }
	*
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.fillBy( x, 0, 3, fcn );
	* // returns [ 8, 8, 8, 4, 5, 6 ]
	*/
	fillBy: typeof fillBy;

	/**
	* Returns a filled "generic" array.
	*
	* @param value - fill value,
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
	* Returns a shallow copy of an array containing only those elements which pass a test implemented by a predicate function.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns output array
	*
	* @example
	* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
	*
	* var x = [ 1, -2, -3, 4 ];
	*
	* var out = ns.filter( x, isPositiveNumber );
	* // returns [ 1, 4 ]
	*/
	filter: typeof filter;

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
	* Invokes a callback function once for each array element.
	*
	* @param x - input array
	* @param fcn - callback function
	* @param thisArg - callback execution context
	*
	* @example
	* var naryFunction = require( '@stdlib/utils/nary-function' );
	* var log = require( '@stdlib/console/log' );
	*
	* var x = [ 1, 2, 3, 4];
	*
	* // Apply the callback function:
	* ns.forEach( x, naryFunction( log, 1 ) );
	*/
	forEach: typeof forEach;

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
	* Groups the elements of an array according to a specified property name.
	*
	* @param x - input array
	* @param key - property name whose values are used to determine groups
	* @returns group results
	*
	* @example
	* var x = [
	*     {
	*         'x': 1,
	*         'y': 2
	*     },
	*     {
	*         'x': 1,
	*         'y': 3
	*     }
	* ];
	*
	* var out = ns.groupValuesOnKey( x, 'y' );
	* // returns { '2': [ { 'x': 1, 'y': 2 } ], '3': [ { 'x': 1, 'y': 3 } ] }
	*/
	groupValuesOnKey: typeof groupValuesOnKey;

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
	* @returns index
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var idx = ns.indexOf( x, 2, 0 );
	* // returns 1
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	*
	* var idx = ns.indexOf( x, 2, 0 );
	* // returns 1
	*/
	indexOf: typeof indexOf;

	/**
	* Returns the index of the first element which equals a provided search element according to the same value algorithm.
	*
	* ## Notes
	*
	* -   The function uses the [SameValue Algorithm][ecma-262-same-value-algorithm], as specified in ECMAScript 5.
	* -   In contrast to the strict equality operator `===`, `-0` and `+0` are distinguishable and `NaNs` are the same.
	* -   If unable to find an element which equals a provided search element, the function returns `-1`.
	* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.
	*
	* [ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12
	*
	* @param x - input array
	* @param searchElement - search element
	* @param fromIndex - starting index (inclusive)
	* @returns index
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var idx = ns.indexOfSameValue( x, 2, 0 );
	* // returns 1
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	*
	* var idx = ns.indexOfSameValue( x, 2, 0 );
	* // returns 1
	*/
	indexOfSameValue: typeof indexOfSameValue;

	/**
	* Returns the complement of a list of array indices.
	*
	* @param N - array length
	* @param indices - list of indices
	* @returns indices complement
	*
	* @example
	* var idx = ns.indicesComplement( 5, [ 1, 3 ] );
	* // returns [ 0, 2, 4 ]
	*/
	indicesComplement: typeof indicesComplement;

	/**
	* Inserts an element into an array.
	*
	* ## Notes
	*
	* -   The function mutates the input array.
	*
	* @param x - input array
	* @param index - element index
	* @param value - value to insert
	* @returns input array
	*
	* @example
	* var x = [ 1, 1, 2, 3, 3 ];
	*
	* var y = ns.insertAt( x, -3, 4 );
	* // returns [ 1, 1, 4, 2, 3, 3 ]
	*
	* var bool = ( x === y );
	* // returns true
	*/
	insertAt: typeof insertAt;

	/**
	* Returns a string created by joining array elements using a specified separator.
	*
	* @param x - input array
	* @param separator - separator element
	* @returns string
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.join( x, ',' );
	* // returns '1,2,3'
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.join( x, '-' );
	* // returns '1-2-3-4-5-6'
	*
	* @example
	* var Float64Array = require( './../../../float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var out = ns.join( x, ',' );
	* // returns '1,2,3'
	*
	* @example
	* var Complex128Array = require( './../../../complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* var out = ns.join( x, ',' );
	* // returns '1 + 2i,3 + 4i,5 + 6i'
	*/
	join: typeof join;

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
	* @returns index
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var idx = ns.lastIndexOf( x, 2, 3 );
	* // returns 1
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	*
	* var idx = ns.lastIndexOf( x, 2, 3 );
	* // returns 1
	*/
	lastIndexOf: typeof lastIndexOf;

	/**
	* Returns the index of the last element which equals a provided search element according to the same value algorithm.
	*
	* ## Notes
	*
	* -   The function uses the [SameValue Algorithm][ecma-262-same-value-algorithm], as specified in ECMAScript 5.
	* -   In contrast to the strict equality operator `===`, `-0` and `+0` are distinguishable and `NaNs` are the same.
	* -   The function scans an input array from the starting index to the beginning of the array (i.e., backward).
	* -   If unable to find an element which equals a provided search element, the function returns `-1`.
	* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.
	*
	* [ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12
	*
	* @param x - input array
	* @param searchElement - search element
	* @param fromIndex - starting index (inclusive)
	* @returns index
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var idx = ns.lastIndexOfSameValue( x, 2, 3 );
	* // returns 1
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	*
	* var idx = ns.lastIndexOfSameValue( x, 2, 3 );
	* // returns 1
	*/
	lastIndexOfSameValue: typeof lastIndexOfSameValue;

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
	* Generates a linearly spaced two-dimensional nested numeric array.
	*
	* @param start - first array value
	* @param stop - last array value
	* @param shape - array shape
	* @param colexicographic - specifies whether generated array values should be stored in colexicographic order
	* @returns linearly spaced two-dimensional nested numeric array
	*
	* @example
	* var x = ns.linspace2d( 0, 100, [ 2, 3 ], false );
	* // returns [ [ 0, 20, 40 ], [ 60, 80, 100 ] ]
	*
	* x = ns.linspace2d( 0, 100, [ 2, 3 ], true );
	* // returns [ [ 0, 40, 80 ], [ 20, 60, 100 ] ]
	*/
	linspace2d: typeof linspace2d;

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
	* Applies a callback function to elements in an input array and assigns results to elements in a new output array.
	*
	* @param x - input array
	* @param fcn - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var ones = require( './../../../base/ones' );
	*
	* function scale( v ) {
	*     return v * 10;
	* }
	*
	* var x = ones( 4 );
	* var y = ns.map( x, scale );
	* // returns [ 10, 10, 10, 10 ]
	*
	* @example
	* var ones = require( './../../../base/ones' );
	* var zeros = require( './../../../base/zeros' );
	*
	* function scale( v ) {
	*     return v * 10;
	* }
	*
	* var x = ones( 4 );
	* var y = zeros( x.length );
	*
	* var out = ns.map.assign( x, y, 1, 0, scale );
	* // y => [ 10, 10, 10, 10 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	map: typeof map;

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
	*     -   **array**: input nested array.
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
	* Returns the minimum array data type for storing a provided signed integer value.
	*
	* @param value - scalar value
	* @returns array data type
	*
	* @example
	* var dt = ns.minSignedIntegerDataType( 1280 );
	* // returns 'int16'
	*
	* @example
	* var dt = ns.minSignedIntegerDataType( 3 );
	* // returns 'int8'
	*/
	minSignedIntegerDataType: typeof minSignedIntegerDataType;

	/**
	* Returns the minimum array data type for storing a provided unsigned integer value.
	*
	* @param value - scalar value
	* @returns array data type
	*
	* @example
	* var dt = ns.minUnsignedIntegerDataType( 1280 );
	* // returns 'uint16'
	*
	* @example
	* var dt = ns.minUnsignedIntegerDataType( 3 );
	* // returns 'uint8'
	*/
	minUnsignedIntegerDataType: typeof minUnsignedIntegerDataType;

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
	* var add = require( '@stdlib/number/float64/base/add' );
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
	* Applies a binary callback to elements in two three-dimensional nested input arrays according to elements in a three-dimensional nested mask array and assigns results to elements in a three-dimensional nested output array.
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
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* var shape = [ 2, 2, 2 ];
	*
	* var x = ones3d( shape );
	* var y = ones3d( shape );
	* var z = zeros3d( shape );
	*
	* var mask = [
	*     [ [ 0, 1 ], [ 0, 0 ] ],
	*     [ [ 1, 0 ], [ 0, 1 ] ]
	* ];
	*
	* ns.mskbinary3d( [ x, y, mask, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ [ 2.0, 0.0 ], [ 2.0, 2.0 ] ], [ [ 0.0, 2.0 ], [ 2.0, 0.0 ] ] ]
	*/
	mskbinary3d: typeof mskbinary3d;

	/**
	* Applies a binary callback to elements in two four-dimensional nested input arrays according to elements in a four-dimensional nested mask array and assigns results to elements in a four-dimensional nested output array.
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
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = ones4d( shape );
	* var z = zeros4d( shape );
	*
	* var mask = [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ];
	*
	* mskbinary2d( [ x, y, mask, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ [ [ 2.0, 0.0 ], [ 2.0, 2.0 ] ] ] ]
	*/
	mskbinary4d: typeof mskbinary4d;

	/**
	* Applies a binary callback to elements in two five-dimensional nested input arrays according to elements in a five-dimensional nested mask array and assigns results to elements in a five-dimensional nested output array.
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
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* var shape = [ 1, 1, 1, 2, 2 ];
	*
	* var x = ones5d( shape );
	* var y = ones5d( shape );
	* var z = zeros5d( shape );
	*
	* var mask = [ [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ] ];
	*
	* ns.mskbinary5d( [ x, y, mask, z ], shape, add );
	*
	* console.log( z );
	* // => [ [ [ [ [ 2.0, 0.0 ], [ 2.0, 2.0 ] ] ] ] ]
	*/
	mskbinary5d: typeof mskbinary5d;

	/**
	* Returns a new array by applying a mask to a provided input array.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.mskfilter( x, [ 0, 1, 0, 1 ] );
	* // returns [ 2, 4 ]
	*/
	mskfilter: typeof mskfilter;

	/**
	* Returns a new array after applying a mask and a callback function to a provided input array.
	*
	* @param x - input array
	* @param mask - mask array
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* function scale( val ) {
	*     return 10 * val;
	* }
	*
	* var y = ns.mskfilterMap( x, [ 0, 1, 0, 1 ], scale );
	* // returns [ 20, 40 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var mask = [ 0, 1, 0, 1 ];
	*
	* var out = [ 0, 0, 0, 0 ];
	*
	* function scale( x ) {
	*     return x * 10;
	* }
	*
	* var arr = ns.mskfilterMap.assign( x, mask, out, 1, 0, scale );
	* // returns [ 20, 40, 0, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	mskfilterMap: typeof mskfilterMap;

	/**
	* Returns new arrays by applying a mask to two provided input arrays in a single pass.
	*
	* @param x - first input array
	* @param y - second input array
	* @param mask - mask array
	* @returns output arrays
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 5, 6, 7, 8 ];
	* var mask = [ 0, 1, 0, 1 ];
	*
	* var out = ns.mskfilter2( x, y, mask );
	* // returns [ [ 2, 4 ], [ 6, 8 ] ]
	*/
	mskfilter2: typeof mskfilter2;

	/**
	* Returns new arrays by applying a mask to one or more provided input arrays in a single pass.
	*
	* @param x - first input array
	* @param y - second input array (or mask)
	* @param arrays - additional input arrays and mask
	* @returns output arrays
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 5, 6, 7, 8 ];
	* var mask = [ 0, 1, 0, 1 ];
	*
	* var out = ns.mskfiltern( x, y, mask );
	* // returns [ [ 2, 4 ], [ 6, 8 ] ]
	*/
	mskfiltern: typeof mskfiltern;

	/**
	* Replaces elements of an array with provided values according to a provided mask array.
	*
	* @param x - input array
	* @param mask - mask array
	* @param values - values to set
	* @param mode - string specifying behavior when the number of values does not equal the number of falsy values in the mask array
	* @returns input array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var mask = [ 1, 0, 0, 1 ];
	* var values = [ 20, 30 ];
	*
	* var out = ns.mskput( x, mask, values, 'strict' );
	* // returns [ 1, 20, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.mskput( x, [ 1, 0, 0, 1 ], [ 30 ], 'strict_broadcast' );
	* // returns [ 1, 30, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	mskput: typeof mskput;

	/**
	* Returns a new array by applying a mask to a provided input array.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.mskreject( x, [ 0, 1, 0, 1 ] );
	* // returns [ 1, 3 ]
	*/
	mskreject: typeof mskreject;

	/**
	* Returns a new array by applying a mask and mapping the unmasked values according to a callback function.
	*
	* @param x - input array
	* @param mask - mask array
	* @param clbk - mapping function
	* @param thisArg - function context
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.mskrejectMap( x, [ 0, 1, 0, 1 ], function( val ) {
	*     return val * 2;
	* } );
	* // returns [ 2, 6 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var mask = [ 1, 0, 1, 0 ];
	* var out = [ 0, 0, 0, 0 ];
	*
	* function clbk( val ) {
	*     return val * 2;
	* }
	*
	* var arr = ns.mskrejectMap.assign( x, mask, out, -2, out.length-1, clbk );
	* // returns [ 0, 8, 0, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	mskrejectMap: typeof mskrejectMap;

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
	* Applies a unary callback to elements in a four-dimensional nested input array according to elements in a four-dimensional nested mask array and assigns results to elements in a four-dimensional nested output array.
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
	* var mask = [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ];
	*
	* ns.mskunary4d( [ x, mask, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ [ 10.0, 0.0 ], [ 10.0, 10.0 ] ] ] ]
	*/
	mskunary4d: typeof mskunary4d;

	/**
	* Applies a unary callback to elements in a five-dimensional nested input array according to elements in a five-dimensional nested mask array and assigns results to elements in a five-dimensional nested output array.
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
	* var mask = [ [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ] ];
	*
	* ns.mskunary5d( [ x, mask, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ [ [ 10.0, 0.0 ], [ 10.0, 10.0 ] ] ] ] ]
	*/
	mskunary5d: typeof mskunary5d;

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
	* Converts each nested array to an object.
	*
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length.
	* -   The number of provided array labels should equal the length of each nested array.
	*
	* @param arr - input array
	* @param fields - list of field names
	* @returns output array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	* var fields = [ 'x', 'y' ];
	*
	* var out = ns.nested2objects( x, fields );
	* // returns [ { 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 } ]
	*/
	nested2objects: typeof nested2objects;

	/**
	* Converts each nested array to a composite view.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length.
	* -   The number of provided array labels should equal the length of each nested array.
	* -   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either a nested array or a view will mutate the other.
	*
	* @param arr - input array
	* @param fields - list of field names
	* @returns output array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	* var fields = [ 'x', 'y' ];
	*
	* var out = ns.nested2views( x, fields );
	* // returns [ <Object>, <Object> ]
	*
	* var v0 = out[ 0 ].toJSON();
	* // returns { 'x': 1, 'y': 2 }
	*
	* var v1 = out[ 1 ].toJSON();
	* // returns { 'x': 3, 'y': 4 }
	*
	* // Mutate the first nested array:
	* x[ 0 ][ 0 ] = 5;
	*
	* v0 = out[ 0 ].toJSON();
	* // returns { 'x': 5, 'y': 2 }
	*
	* // Set a view property:
	* out[ 1 ].y = 'beep';
	*
	* v1 = out[ 1 ].toJSON();
	* // returns { 'x': 3, 'y': 'beep' }
	*
	* var y = x.slice();
	* // returns [ [ 5, 2 ], [ 3, 'beep' ] ]
	*/
	nested2views: typeof nested2views;

	/**
	* Tests whether all elements in an array are falsy.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a truthy value.
	* -   If provided an empty collection, the function returns `true`.
	*
	* @param x - input array
	* @returns boolean indicating whether all elements are falsy
	*
	* @example
	* var x = [ 0, 0, 0, 0 ];
	*
	* var out = ns.none( x );
	* // returns true
	*/
	none: typeof none;

	/**
	* Tests whether all elements in an array fail a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a truthy return value.
	* -   If provided an empty collection, the function returns `true`.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns boolean indicating whether all elements fail a test
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 0, 0, 0, 0 ];
	*
	* var out = ns.noneBy( x, isPositive );
	* // returns true
	*/
	noneBy: typeof noneBy;

	/**
	* Tests whether all elements in an array fail a test implemented by a predicate function, iterating from right to left.
	*
	* ## Notes
	*
	* -   The function immediately returns upon encountering a truthy return value.
	* -   If provided an empty collection, the function returns `true`.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns boolean indicating whether all elements fail a test
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 0, 0, 0, 0 ];
	*
	* var out = ns.noneByRight( x, isPositive );
	* // returns true
	*/
	noneByRight: typeof noneByRight;

	/**
	* Returns a "generic" array filled with nulls.
	*
	* @param len - array length
	* @returns output array
	*
	* @example
	* var out = ns.nulls( 3 );
	* // returns [ null, null, null ]
	*/
	nulls: typeof nulls;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
	*
	* @param n - number of elements
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.oneTo( 6 );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*
	* @example
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* var arr = ns.oneTo.assign( out, 1, 0 );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*
	* @example
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* var arr = ns.oneTo.assign( out, -1, out.length-1 );
	* // returns [ 6, 5, 4, 3, 2, 1 ]
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
	* Replaces elements of an array with provided values according to a provided mask array.
	*
	* @param x - input array
	* @param mask - mask array
	* @param values - values to set
	* @param mode - string specifying behavior when the number of values does not equal the number of truthy values in the mask array
	* @returns input array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var mask = [ 0, 1, 1, 0 ];
	* var values = [ 20, 30 ];
	*
	* var out = ns.place( x, mask, values, 'strict' );
	* // returns [ 1, 20, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.place( x, [ 0, 1, 1, 0 ], [ 30 ], 'strict_broadcast' );
	* // returns [ 1, 30, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	place: typeof place;

	/**
	* Replaces specified elements of an array with provided values.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param values - values to set
	* @param mode - index mode
	* @returns input array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var indices = [ 1, 2 ];
	* var values = [ 20, 30 ];
	*
	* var out = ns.put( x, indices, values, 'throw' );
	* // returns [ 1, 20, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.put( x, [ 1, 2 ], [ 30 ], 'throw' );
	* // returns [ 1, 30, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	put: typeof put;

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
	* var add = require( '@stdlib/number/float64/base/add4' );
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
	* var add = require( '@stdlib/number/float64/base/add4' );
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
	* var add = require( '@stdlib/number/float64/base/add4' );
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
	* var add = require( '@stdlib/number/float64/base/add4' );
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
	* var add = require( '@stdlib/number/float64/base/add5' );
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
	* var add = require( '@stdlib/number/float64/base/add5' );
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
	* var add = require( '@stdlib/number/float64/base/add5' );
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
	* var add = require( '@stdlib/number/float64/base/add5' );
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
	* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns output array
	*
	* @example
	* var x = [ 1, -2, -3, 4 ];
	*
	* var out = ns.reject( x, isPositiveNumber );
	* // returns [ -2, -3 ]
	*/
	reject: typeof reject;

	/**
	* Copies and renames specified keys for every element in a provided array.
	*
	* ## Notes
	*
	* -   The function only copies and renames those keys which are present in a provided mapping object. Any keys which are not present in the provided mapping object, but are present in the original objects, are omitted during object creation.
	* -   The function assumes that each object has the keys specified in a provided mapping object.
	* -   The function performs shallow copies of key values.
	*
	* @param arr - input array
	* @param mapping - object mapping existing keys to new key names
	* @returns output array
	*
	* @example
	* var x = [
	*     {
	*         'x': 1,
	*         'y': 2
	*     },
	*     {
	*         'x': 3,
	*         'y': 4
	*     }
	* ];
	* var mapping = {
	*     'x': 'a',
	*     'y': 'b'
	* };
	*
	* var out = ns.rekey( x, mapping );
	* // returns [ { 'a': 1, 'b': 2 }, { 'a': 3, 'b': 4 } ]
	*/
	rekey: typeof rekey;

	/**
	* Returns an array containing views with renamed keys for every element in a provided array.
	*
	* ## Notes
	*
	* -   The function returns views having only those keys which are present in a provided mapping object. Any keys which are not present in the provided mapping object, but are present in the original objects, are omitted during view creation.
	* -   The function assumes that each object has the keys specified in a provided mapping object.
	* -   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either an array element or a view will mutate the other.
	*
	* @param arr - input array
	* @param mapping - object mapping existing keys to new key names
	* @returns output array
	*
	* @example
	* var x = [
	*     {
	*         'x': 1,
	*         'y': 2
	*     },
	*     {
	*         'x': 3,
	*         'y': 4
	*     }
	* ];
	* var mapping = {
	*     'x': 'a',
	*     'y': 'b'
	* };
	*
	* var out = ns.rekeyViews( x, mapping );
	* // returns [ <Object>, <Object> ]
	*
	* var v0 = out[ 0 ].toJSON();
	* // returns { 'a': 1, 'b': 2 }
	*
	* var v1 = out[ 1 ].toJSON();
	* // returns { 'a': 3, 'b': 4 }
	*
	* // Mutate the first element in the input array:
	* x[ 0 ].x = 5;
	*
	* v0 = out[ 0 ].toJSON();
	* // returns { 'a': 5, 'b': 2 }
	*
	* // Set a view property:
	* out[ 1 ].b = 'beep';
	*
	* v1 = out[ 1 ].toJSON();
	* // returns { 'a': 3, 'b': 'beep' }
	*
	* var y = x.slice();
	* // returns [ { 'x': 5, 'y': 2 }, { 'x': 3, 'y': 'beep' } ]
	*/
	rekeyViews: typeof rekeyViews;

	/**
	* Removes an element from an array.
	*
	* ## Notes
	*
	* -   The function mutates the input array.
	*
	* @param x - input array
	* @param index - element index
	* @returns input array
	*
	* @example
	* var x = [ 1, 1, 2, 3, 3 ];
	*
	* var y = ns.removeAt( x, -3 );
	* // returns [ 1, 1, 3, 3 ]
	*
	* var bool = ( x === y );
	* // returns true
	*/
	removeAt: typeof removeAt;

	/**
	* Reshape a nested array into another nested array having a desired shape.
	*
	* ## Notes
	*
	* -   The function assumes that `fromShape` and `toShape` describe arrays have same the number of elements.
	*
	* @param x - input nested array
	* @param fromShape - shape of the input array
	* @param toShape - shape of the output array
	* @param colexicographic - specifies whether to reshape the array in colexicographic order
	* @returns output nested array
	*
	* @example
	* var x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];
	*
	* var out = ns.reshape( x, [ 2, 3 ], [ 3, 2 ], false );
	* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
	*/
	reshape: typeof reshape;

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
	* @param x - input array
	* @returns accessor function
	*
	* @example
	* var resolveGetter = require( './../../../base/resolve-getter' );
	*
	* var arr = [ 1, 2, 3, 4 ];
	*
	* var set = ns.resolveSetter( arr );
	* set( arr, 2, 10 );
	*
	* var get = resolveGetter( arr );
	* var v = get( arr, 2 );
	* // returns 10
	*/
	resolveSetter: typeof resolveSetter;

	/**
	* Reverses an array in-place.
	*
	* @param x - input array
	* @returns input array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.reverse( x );
	* // returns [ 3, 2, 1 ]
	*/
	reverse: typeof reverse;

	/**
	* Scatters a list of provided values to specified indices in a new filled "generic" array.
	*
	* @param fill - fill value
	* @param len - output array length
	* @param indices - list of element indices
	* @param values - values to scatter
	* @param mode - index mode
	* @returns output array
	*
	* @example
	* var indices = [ 1, 2 ];
	* var values = [ 20, 30 ];
	*
	* var out = ns.scatterFilled( null, 4, indices, values, 'throw' );
	* // returns [ null, 20, 30, null ]
	*
	* @example
	* var out = ns.scatterFilled( null, 4, [ 1, 2 ], [ 30 ], 'throw' );
	* // returns [ null, 30, 30, null ]
	*/
	scatterFilled: typeof scatterFilled;

	/**
	* Scatters a list of provided values to specified indices in a new zero-filled "generic" array.
	*
	* @param len - output array length
	* @param indices - list of element indices
	* @param values - values to scatter
	* @param mode - index mode
	* @returns output array
	*
	* @example
	* var indices = [ 1, 2 ];
	* var values = [ 20, 30 ];
	*
	* var out = ns.scattered( 4, indices, values, 'throw' );
	* // returns [ 0, 20, 30, 0 ]
	*
	* @example
	* var out = ns.scattered( 4, [ 1, 2 ], [ 30 ], 'throw' );
	* // returns [ 0, 30, 30, 0 ]
	*/
	scattered: typeof scattered;

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
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.slice( x, 0, 3 );
	* // returns [ 1, 2, 3 ]
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
	* Symmetric array utilities.
	*/
	symmetric: typeof symmetric;

	/**
	* Symmetric banded array utilities.
	*/
	symmetricBanded: typeof symmetricBanded;

	/**
	* Takes elements from an array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.take( x, [ 1, 3 ], 'throw' );
	* // returns [ 2, 4 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var out = [ 0, 0, 0, 0 ];
	*
	* var arr = ns.take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns [ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	take: typeof take;

	/**
	* Takes elements from an indexed array.
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
	* Takes elements from two indexed arrays in a single pass.
	*
	* ## Notes
	*
	* -   The function does **not** perform bounds checking. If an index is less than zero or greater than the maximum index of `x` or `y`, the value of the corresponding element in the respective output array is undefined.
	*
	* @param x - first input array
	* @param y - second input array
	* @param indices - list of element indices
	* @returns output arrays
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 5, 6, 7, 8 ];
	* var indices = [ 3, 1, 2, 0 ];
	*
	* var out = ns.takeIndexed2( x, y, indices );
	* // returns [ [ 4, 2, 3, 1 ], [ 8, 6, 7, 5 ] ]
	*/
	takeIndexed2: typeof takeIndexed2;

	/**
	* Takes elements from an array based on an index array and applies a callback function to each element. The function assigns the transformed values to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param clbk - callback function
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Float64Array = require( './../../../float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* function transform( v ) {
	*    return v * 2;
	* }
	*
	* var arr = ns.takeMap.assign( x, [ 1, 3 ], 'throw', transform, out, 2, 0 );
	* // returns <Float64Array>[ 4.0, 0.0, 8.0, 0.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	takeMap: typeof takeMap;

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
	* var add = require( '@stdlib/number/float64/base/add3' );
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
	* var add = require( '@stdlib/number/float64/base/add3' );
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
	* var add = require( '@stdlib/number/float64/base/add3' );
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
	* var add = require( '@stdlib/number/float64/base/add3' );
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
	* Returns a new array containing every element from an input array and with a provided value inserted at a specified index.
	*
	* @param x - input array
	* @param index - index at which to insert a provided value
	* @param value - value to insert
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.toInsertedAt( x, 0, 7 );
	* // returns [ 7, 1, 2, 3 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.toInsertedAt( x, 1, 8 );
	* // returns [ 1, 8, 2, 3, 4, 5, 6 ]
	*
	* @example
	* var Float64Array = require( './../../../float64' );
	*
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = new Float64Array( [ 0, 0, 0, 0, 0 ] );
	* var arr = ns.toInsertedAt.assign( x, 0, 5, out, 1, 0 );
	* // returns <Float64Array>[ 5, 1, 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	toInsertedAt: typeof toInsertedAt;

	/**
	* Returns a new array with elements in reverse order.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var toAccessorArray = require( './../../../base/to-accessor-array' );
	*
	* var x = toAccessorArray( [ 1, 2, 3 ] );
	*
	* var v = x.get( 0 );
	* // returns 1
	*
	* var out = ns.toReversed( x );
	* // returns [ 3, 2, 1 ]
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.toReversed( x );
	* // returns [ 3, 2, 1 ]
	*/
	toReversed: typeof toReversed;

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
	* Applies a unary function to each element retrieved from a three-dimensional nested input array according to a callback function and assigns results to elements in a three-dimensional nested output array.
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
	* var ones3d = require( './../../../base/ones3d' );
	* var zeros3d = require( './../../../base/zeros3d' );
	*
	* function accessor( v ) {
	*     return v - 2.0;
	* }
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
	* ns.unary3dBy( [ x, y ], shape, scale, accessor );
	*
	* console.log( y );
	* // => [ [ [ -10.0, -10.0 ], [ -10.0, -10.0 ] ] ]
	*/
	unary3dBy: typeof unary3dBy;

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
	* Applies a unary function to each element retrieved from a four-dimensional nested input array according to a callback function and assigns results to elements in a four-dimensional nested output array.
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
	* var ones4d = require( './../../../base/ones4d' );
	* var zeros4d = require( './../../../base/zeros4d' );
	*
	* function accessor( v ) {
	*     return v - 2.0;
	* }
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
	* ns.unary4dBy( [ x, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ [ -10.0, -10.0 ], [ -10.0, -10.0 ] ] ] ]
	*/
	unary4dBy: typeof unary4dBy;

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
	* Applies a unary function to each element retrieved from a five-dimensional nested input array according to a callback function and assigns results to elements in a five-dimensional nested output array.
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
	* var ones5d = require( './../../../base/ones5d' );
	* var zeros5d = require( './../../../base/zeros5d' );
	*
	* function accessor( v ) {
	*     return v - 2.0;
	* }
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
	* unary2dBy( [ x, y ], shape, scale );
	*
	* console.log( y );
	* // => [ [ [ [ [ -10.0, -10.0 ], [ -10.0, -10.0 ] ] ] ] ]
	*/
	unary5dBy: typeof unary5dBy;

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
	* Takes elements from either one of two arrays depending on a condition.
	*
	* @param condition - array containing indicator values
	* @param x - first input array
	* @param y - second input array
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 5, 6, 7, 8 ];
	*
	* var condition = [ true, false, true, false ];
	*
	* var z = ns.where( condition, x, y );
	* // returns [ 1, 6, 3, 8 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 5, 6, 7, 8 ];
	*
	* var out = [ 0, 0, 0, 0 ];
	* var condition = [ true, false, true, false ];
	*
	* var arr = ns.where.assign( condition, x, y, out, 1, 0 );
	* // returns [ 1, 6, 3, 8 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	where: typeof where;

	/**
	* Returns a new array with the element at the specified index replaced with a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.arrayWith( x, 0, 7 );
	* // returns [ 7, 2, 3 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.arrayWith( x, 1, 8 );
	* // returns [ 1, 8, 3, 4, 5, 6 ]
	*
	* @example
	* var Float64Array = require( './../../../float64' );
	*
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = new Float64Array( [ 0, 0, 0, 0 ] );
	* var arr = ns.arrayWith.assign( x, 0, 5, out, 1, 0 );
	* // returns <Float64Array>[ 5, 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	arrayWith: typeof arrayWith;

	/**
	* Returns a new array containing every element from an input array, except for the element at a specified index.
	*
	* @param x - input array
	* @param index - index of the element to exclude
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.without( x, 0 );
	* // returns [ 2, 3 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.without( x, 1 );
	* // returns [ 1, 3, 4, 5, 6 ]
	*
	* @example
	* var Float64Array = require( './../../../float64' );
	*
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = new Float64Array( [ 0, 0, 0 ] );
	* var arr = ns.without.assign( x, 0, out, 1, 0 );
	* // returns <Float64Array>[ 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	without: typeof without;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero.
	*
	* @param n - number of elements
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.zeroTo( 6 );
	* // returns [ 0, 1, 2, 3, 4, 5 ]
	*
	* @example
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* var arr = ns.zeroTo.assign( out, 1, 0 );
	* // returns [ 0, 1, 2, 3, 4, 5 ]
	*
	* @example
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* var arr = ns.zeroTo.assign( out, -1, out.length-1 );
	* // returns [ 5, 4, 3, 2, 1, 0 ]
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

	/**
	* Zips one or more arrays.
	*
	* ## Notes
	*
	* -   The function assumes that the list of arrays to be zipped all have the same length.
	*
	* @param arrays - list of arrays to be zipped
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	* var y = [ 'a', 'b', 'c' ];
	*
	* var z = ns.zip( [ x, y ] );
	* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
	*/
	zip: typeof zip;

	/**
	* Creates an object from a provided list of properties and a provided list of corresponding values.
	*
	* ## Notes
	*
	* -   The function assumes that both input arrays are the same length.
	*
	* @param properties - list of properties
	* @param values - list of values
	* @returns result
	*
	* @example
	* var properties = [ 1, 2 ];
	* var values = [ 3, 4 ];
	*
	* var out = ns.zip2object( properties, values );
	* // returns { '1': 3, '2': 4 }
	*/
	zip2object: typeof zip2object;

	/**
	* Zips one or more arrays to an array of objects.
	*
	* ## Notes
	*
	* -   The function assumes that the list of arrays to be zipped all have the same length.
	* -   The number of provided array labels should equal the number of arrays to be zipped.
	*
	* @param arrays - list of arrays to be zipped
	* @param labels - list of array labels
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	* var y = [ 'a', 'b', 'c' ];
	*
	* var labels = [ 'x', 'y' ];
	*
	* var z = ns.zip2objects( [ x, y ], labels );
	* // returns [ { 'x': 1, 'y': 'a' }, { 'x': 2, 'y': 'b' }, { 'x': 3, 'y': 'c' } ]
	*/
	zip2objects: typeof zip2objects;

	/**
	* Zips one or more arrays to an array of composite views.
	*
	* ## Notes
	*
	* -   The function assumes that the list of arrays to be zipped all have the same length.
	* -   The number of provided array labels should equal the number of arrays to be zipped.
	* -   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either an input array or a view will mutate the other.
	*
	* @param arrays - list of arrays to be zipped
	* @param labels - list of array labels
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	* var y = [ 'a', 'b', 'c' ];
	*
	* var labels = [ 'x', 'y' ];
	*
	* var z = ns.zip2views( [ x, y ], labels );
	* // returns [ <Object>, <Object>, <Object> ]
	*
	* var v0 = z[ 0 ].toJSON();
	* // returns { 'x': 1, 'y': 'a' }
	*
	* var v1 = z[ 1 ].toJSON();
	* // returns { 'x': 2, 'y': 'b' }
	*
	* var v2 = z[ 2 ].toJSON();
	* // returns { 'x': 3, 'y': 'c' }
	*
	* // Mutate one of the input arrays:
	* x[ 0 ] = 5;
	*
	* v0 = z[ 0 ].toJSON();
	* // returns { 'x': 5, 'y': 'a' }
	*
	* // Set a view property:
	* z[ 1 ].y = 'beep';
	*
	* v1 = z[ 1 ].toJSON();
	* // returns { 'x': 2, 'y': 'beep' }
	*
	* var y1 = y.slice();
	* // returns [ 'a', 'beep', 'c' ]
	*/
	zip2views: typeof zip2views;
}

/**
* Base (i.e., lower-level) array utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
