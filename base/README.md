<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# base

> Base (i.e., lower-level) array utilities.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/array/base' );
```

#### ns

Array utilities.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`accessorGetter( dtype )`][@stdlib/array/base/accessor-getter]</span><span class="delimiter">: </span><span class="description">return an accessor function for retrieving an element from an array-like object supporting the get/set protocol.</span>
-   <span class="signature">[`accessorSetter( dtype )`][@stdlib/array/base/accessor-setter]</span><span class="delimiter">: </span><span class="description">return an accessor function for setting an element in an array-like object supporting the get/set protocol.</span>
-   <span class="signature">[`AccessorArray( arr )`][@stdlib/array/base/accessor]</span><span class="delimiter">: </span><span class="description">create a minimal array-like object supporting the accessor protocol from another array-like object.</span>
-   <span class="signature">[`accessors( x )`][@stdlib/array/base/accessors]</span><span class="delimiter">: </span><span class="description">return element accessors for a provided array-like object.</span>
-   <span class="signature">[`arraylike2object( x )`][@stdlib/array/base/arraylike2object]</span><span class="delimiter">: </span><span class="description">convert an array-like object to an object likely to have the same "shape".</span>
-   <span class="signature">[`assert`][@stdlib/array/base/assert]</span><span class="delimiter">: </span><span class="description">base array assertion utilities.</span>
-   <span class="signature">[`bifurcateEntriesBy( x, predicate[, thisArg] )`][@stdlib/array/base/bifurcate-entries-by]</span><span class="delimiter">: </span><span class="description">split element entries into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcateEntries( x, filter )`][@stdlib/array/base/bifurcate-entries]</span><span class="delimiter">: </span><span class="description">split array element entries into two groups.</span>
-   <span class="signature">[`bifurcateIndicesBy( x, predicate[, thisArg] )`][@stdlib/array/base/bifurcate-indices-by]</span><span class="delimiter">: </span><span class="description">split element indices into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcateIndices( x, filter )`][@stdlib/array/base/bifurcate-indices]</span><span class="delimiter">: </span><span class="description">split array element indices into two groups.</span>
-   <span class="signature">[`bifurcateValuesBy( x, predicate[, thisArg] )`][@stdlib/array/base/bifurcate-values-by]</span><span class="delimiter">: </span><span class="description">split element values into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcateValues( x, filter )`][@stdlib/array/base/bifurcate-values]</span><span class="delimiter">: </span><span class="description">split array element values into two groups.</span>
-   <span class="signature">[`binary2d( arrays, shape, fcn )`][@stdlib/array/base/binary2d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`binary3d( arrays, shape, fcn )`][@stdlib/array/base/binary3d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`binary4d( arrays, shape, fcn )`][@stdlib/array/base/binary4d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`binary5d( arrays, shape, fcn )`][@stdlib/array/base/binary5d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`binarynd( arrays, shape, fcn )`][@stdlib/array/base/binarynd]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two n-dimensional nested input arrays and assign results to elements in an n-dimensional nested output array.</span>
-   <span class="signature">[`broadcastArray( x, inShape, outShape )`][@stdlib/array/base/broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an array to a specified shape.</span>
-   <span class="signature">[`bbinary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-binary2d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bbinary3d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-binary3d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two broadcasted nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`bbinary4d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-binary4d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two broadcasted nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`bbinary5d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-binary5d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two broadcasted nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`bquaternary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quaternary2d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bquinary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quinary2d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in four broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bternary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-ternary2d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bunary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bunary3d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`bunary4d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary4d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`bunary5d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary5d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`cartesianPower( x, n )`][@stdlib/array/base/cartesian-power]</span><span class="delimiter">: </span><span class="description">return the Cartesian power.</span>
-   <span class="signature">[`cartesianProduct( x1, x2 )`][@stdlib/array/base/cartesian-product]</span><span class="delimiter">: </span><span class="description">return the Cartesian product.</span>
-   <span class="signature">[`cartesianSquare( x )`][@stdlib/array/base/cartesian-square]</span><span class="delimiter">: </span><span class="description">return the Cartesian square.</span>
-   <span class="signature">[`copyIndexed( x )`][@stdlib/array/base/copy-indexed]</span><span class="delimiter">: </span><span class="description">copy the elements of an indexed array-like object to a new "generic" array.</span>
-   <span class="signature">[`copy( x )`][@stdlib/array/base/copy]</span><span class="delimiter">: </span><span class="description">copy the elements of an array-like object to a new "generic" array.</span>
-   <span class="signature">[`dedupe( x, limit, equalNaNs )`][@stdlib/array/base/dedupe]</span><span class="delimiter">: </span><span class="description">remove consecutive duplicated values.</span>
-   <span class="signature">[`filledBy( len, clbk[, thisArg] )`][@stdlib/array/base/filled-by]</span><span class="delimiter">: </span><span class="description">create a filled "generic" array according to a provided callback function.</span>
-   <span class="signature">[`filled( value, len )`][@stdlib/array/base/filled]</span><span class="delimiter">: </span><span class="description">create a filled "generic" array.</span>
-   <span class="signature">[`filled2dBy( shape, clbk[, thisArg] )`][@stdlib/array/base/filled2d-by]</span><span class="delimiter">: </span><span class="description">create a filled two-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`filled2d( value, shape )`][@stdlib/array/base/filled2d]</span><span class="delimiter">: </span><span class="description">create a filled two-dimensional nested array.</span>
-   <span class="signature">[`filled3dBy( shape, clbk[, thisArg] )`][@stdlib/array/base/filled3d-by]</span><span class="delimiter">: </span><span class="description">create a filled three-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`filled3d( value, shape )`][@stdlib/array/base/filled3d]</span><span class="delimiter">: </span><span class="description">create a filled three-dimensional nested array.</span>
-   <span class="signature">[`filled4dBy( shape, clbk[, thisArg] )`][@stdlib/array/base/filled4d-by]</span><span class="delimiter">: </span><span class="description">create a filled four-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`filled4d( value, shape )`][@stdlib/array/base/filled4d]</span><span class="delimiter">: </span><span class="description">create a filled four-dimensional nested array.</span>
-   <span class="signature">[`filled5dBy( shape, clbk[, thisArg] )`][@stdlib/array/base/filled5d-by]</span><span class="delimiter">: </span><span class="description">create a filled five-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`filled5d( value, shape )`][@stdlib/array/base/filled5d]</span><span class="delimiter">: </span><span class="description">create a filled five-dimensional nested array.</span>
-   <span class="signature">[`filledndBy( shape, clbk[, thisArg] )`][@stdlib/array/base/fillednd-by]</span><span class="delimiter">: </span><span class="description">create a filled n-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`fillednd( value, shape )`][@stdlib/array/base/fillednd]</span><span class="delimiter">: </span><span class="description">create a filled n-dimensional nested array.</span>
-   <span class="signature">[`first( x )`][@stdlib/array/base/first]</span><span class="delimiter">: </span><span class="description">return the first element of an array-like object.</span>
-   <span class="signature">[`flattenBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten-by]</span><span class="delimiter">: </span><span class="description">flatten an n-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten( x, shape, colexicographic )`][@stdlib/array/base/flatten]</span><span class="delimiter">: </span><span class="description">flatten an n-dimensional nested array.</span>
-   <span class="signature">[`flatten2dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten2d-by]</span><span class="delimiter">: </span><span class="description">flatten a two-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten2d( x, shape, colexicographic )`][@stdlib/array/base/flatten2d]</span><span class="delimiter">: </span><span class="description">flatten a two-dimensional nested array.</span>
-   <span class="signature">[`flatten3dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten3d-by]</span><span class="delimiter">: </span><span class="description">flatten a three-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten3d( x, shape, colexicographic )`][@stdlib/array/base/flatten3d]</span><span class="delimiter">: </span><span class="description">flatten a three-dimensional nested array.</span>
-   <span class="signature">[`flatten4dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten4d-by]</span><span class="delimiter">: </span><span class="description">flatten a four-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten4d( x, shape, colexicographic )`][@stdlib/array/base/flatten4d]</span><span class="delimiter">: </span><span class="description">flatten a four-dimensional nested array.</span>
-   <span class="signature">[`flatten5dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten5d-by]</span><span class="delimiter">: </span><span class="description">flatten a five-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten5d( x, shape, colexicographic )`][@stdlib/array/base/flatten5d]</span><span class="delimiter">: </span><span class="description">flatten a five-dimensional nested array.</span>
-   <span class="signature">[`fliplr2d( x )`][@stdlib/array/base/fliplr2d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a two-dimensional nested input array.</span>
-   <span class="signature">[`fliplr3d( x )`][@stdlib/array/base/fliplr3d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a three-dimensional nested input array.</span>
-   <span class="signature">[`fliplr4d( x )`][@stdlib/array/base/fliplr4d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a four-dimensional nested input array.</span>
-   <span class="signature">[`fliplr5d( x )`][@stdlib/array/base/fliplr5d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a five-dimensional nested input array.</span>
-   <span class="signature">[`flipud2d( x )`][@stdlib/array/base/flipud2d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the first dimension of a two-dimensional nested input array.</span>
-   <span class="signature">[`flipud3d( x )`][@stdlib/array/base/flipud3d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the second-to-last dimension of a three-dimensional nested input array.</span>
-   <span class="signature">[`flipud4d( x )`][@stdlib/array/base/flipud4d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the second-to-last dimension of a four-dimensional nested input array.</span>
-   <span class="signature">[`flipud5d( x )`][@stdlib/array/base/flipud5d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the second-to-last dimension of a five-dimensional nested input array.</span>
-   <span class="signature">[`strided2array( N, x, stride, offset )`][@stdlib/array/base/from-strided]</span><span class="delimiter">: </span><span class="description">convert a strided array to a non-strided generic array.</span>
-   <span class="signature">[`getter( dtype )`][@stdlib/array/base/getter]</span><span class="delimiter">: </span><span class="description">return an accessor function for retrieving an element from an indexed array-like object.</span>
-   <span class="signature">[`groupEntriesBy( x, indicator[, thisArg] )`][@stdlib/array/base/group-entries-by]</span><span class="delimiter">: </span><span class="description">group element entries according to an indicator function.</span>
-   <span class="signature">[`groupEntries( x, groups )`][@stdlib/array/base/group-entries]</span><span class="delimiter">: </span><span class="description">group element entries as arrays associated with distinct keys.</span>
-   <span class="signature">[`groupIndicesBy( x, indicator[, thisArg] )`][@stdlib/array/base/group-indices-by]</span><span class="delimiter">: </span><span class="description">group element indices according to an indicator function.</span>
-   <span class="signature">[`groupIndices( x, groups )`][@stdlib/array/base/group-indices]</span><span class="delimiter">: </span><span class="description">group element indices as arrays associated with distinct keys.</span>
-   <span class="signature">[`groupValuesBy( x, indicator[, thisArg] )`][@stdlib/array/base/group-values-by]</span><span class="delimiter">: </span><span class="description">group element values according to an indicator function.</span>
-   <span class="signature">[`groupValues( x, groups )`][@stdlib/array/base/group-values]</span><span class="delimiter">: </span><span class="description">group elements as arrays associated with distinct keys.</span>
-   <span class="signature">[`incrspace( start, stop, increment )`][@stdlib/array/base/incrspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array according to a provided increment.</span>
-   <span class="signature">[`indexOf( x, searchElement, fromIndex, equalNaNs )`][@stdlib/array/base/index-of]</span><span class="delimiter">: </span><span class="description">return the index of the first element which equals a provided search element.</span>
-   <span class="signature">[`lastIndexOf( x, searchElement, fromIndex, equalNaNs )`][@stdlib/array/base/last-index-of]</span><span class="delimiter">: </span><span class="description">return the index of the last element which equals a provided search element.</span>
-   <span class="signature">[`last( x )`][@stdlib/array/base/last]</span><span class="delimiter">: </span><span class="description">return the last element of an array-like object.</span>
-   <span class="signature">[`linspace( start, stop, length )`][@stdlib/array/base/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array.</span>
-   <span class="signature">[`logspace( a, b, length )`][@stdlib/array/base/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>
-   <span class="signature">[`map2d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map2d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a two-dimensional nested input array and assign results to elements in a new two-dimensional nested output array.</span>
-   <span class="signature">[`map3d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map3d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a three-dimensional nested input array and assign results to elements in a new three-dimensional nested output array.</span>
-   <span class="signature">[`map4d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map4d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a four-dimensional nested input array and assign results to elements in a new four-dimensional nested output array.</span>
-   <span class="signature">[`map5d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map5d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a five-dimensional nested input array and assign results to elements in a new five-dimensional nested output array.</span>
-   <span class="signature">[`mskbinary2d( arrays, shape, fcn )`][@stdlib/array/base/mskbinary2d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two two-dimensional nested input arrays according to elements in a two-dimensional nested mask array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`mskunary2d( arrays, shape, fcn )`][@stdlib/array/base/mskunary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a two-dimensional nested input array according to elements in a two-dimensional nested mask array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`mskunary3d( arrays, shape, fcn )`][@stdlib/array/base/mskunary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a three-dimensional nested input array according to elements in a three-dimensional nested mask array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`nCartesianProduct( x1, x2[, ...xN] )`][@stdlib/array/base/n-cartesian-product]</span><span class="delimiter">: </span><span class="description">return the n-fold Cartesian product.</span>
-   <span class="signature">[`oneTo( n )`][@stdlib/array/base/one-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from one.</span>
-   <span class="signature">[`ones( len )`][@stdlib/array/base/ones]</span><span class="delimiter">: </span><span class="description">create a "generic" array filled with ones.</span>
-   <span class="signature">[`ones2d( shape )`][@stdlib/array/base/ones2d]</span><span class="delimiter">: </span><span class="description">create a two-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones3d( shape )`][@stdlib/array/base/ones3d]</span><span class="delimiter">: </span><span class="description">create a three-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones4d( shape )`][@stdlib/array/base/ones4d]</span><span class="delimiter">: </span><span class="description">create a four-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones5d( shape )`][@stdlib/array/base/ones5d]</span><span class="delimiter">: </span><span class="description">create a five-dimensional nested array filled with ones.</span>
-   <span class="signature">[`onesnd( shape )`][@stdlib/array/base/onesnd]</span><span class="delimiter">: </span><span class="description">create an n-dimensional nested array filled with ones.</span>
-   <span class="signature">[`quaternary2d( arrays, shape, fcn )`][@stdlib/array/base/quaternary2d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`quaternary3d( arrays, shape, fcn )`][@stdlib/array/base/quaternary3d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`quaternary4d( arrays, shape, fcn )`][@stdlib/array/base/quaternary4d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`quaternary5d( arrays, shape, fcn )`][@stdlib/array/base/quaternary5d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`quinary2d( arrays, shape, fcn )`][@stdlib/array/base/quinary2d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`quinary3d( arrays, shape, fcn )`][@stdlib/array/base/quinary3d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`quinary4d( arrays, shape, fcn )`][@stdlib/array/base/quinary4d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`quinary5d( arrays, shape, fcn )`][@stdlib/array/base/quinary5d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`resolveGetter( x )`][@stdlib/array/base/resolve-getter]</span><span class="delimiter">: </span><span class="description">return an accessor function for retrieving an element from an array-like object.</span>
-   <span class="signature">[`setter( dtype )`][@stdlib/array/base/setter]</span><span class="delimiter">: </span><span class="description">return an accessor function for setting an element in an indexed array-like object.</span>
-   <span class="signature">[`slice( x, start, end )`][@stdlib/array/base/slice]</span><span class="delimiter">: </span><span class="description">return a shallow copy of a portion of an array.</span>
-   <span class="signature">[`strided2array2d( x, shape, strides, offset )`][@stdlib/array/base/strided2array2d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a two-dimensional nested array.</span>
-   <span class="signature">[`strided2array3d( x, shape, strides, offset )`][@stdlib/array/base/strided2array3d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a three-dimensional nested array.</span>
-   <span class="signature">[`strided2array4d( x, shape, strides, offset )`][@stdlib/array/base/strided2array4d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a four-dimensional nested array.</span>
-   <span class="signature">[`strided2array5d( x, shape, strides, offset )`][@stdlib/array/base/strided2array5d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a five-dimensional nested array.</span>
-   <span class="signature">[`takeIndexed( x, indices )`][@stdlib/array/base/take-indexed]</span><span class="delimiter">: </span><span class="description">take elements from an indexed array.</span>
-   <span class="signature">[`take( x, indices )`][@stdlib/array/base/take]</span><span class="delimiter">: </span><span class="description">take elements from an array.</span>
-   <span class="signature">[`take2d( x, indices, dimension, mode )`][@stdlib/array/base/take2d]</span><span class="delimiter">: </span><span class="description">take elements from a two-dimensional nested array.</span>
-   <span class="signature">[`take3d( x, indices, dimension, mode )`][@stdlib/array/base/take3d]</span><span class="delimiter">: </span><span class="description">take elements from a three-dimensional nested array.</span>
-   <span class="signature">[`ternary2d( arrays, shape, fcn )`][@stdlib/array/base/ternary2d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`ternary3d( arrays, shape, fcn )`][@stdlib/array/base/ternary3d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`ternary4d( arrays, shape, fcn )`][@stdlib/array/base/ternary4d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`ternary5d( arrays, shape, fcn )`][@stdlib/array/base/ternary5d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`toAccessorArray( arr )`][@stdlib/array/base/to-accessor-array]</span><span class="delimiter">: </span><span class="description">convert an array-like object to a minimal array-like object supporting the accessor protocol.</span>
-   <span class="signature">[`toDeduped( x, limit, equalNaNs )`][@stdlib/array/base/to-deduped]</span><span class="delimiter">: </span><span class="description">copy elements to a new "generic" array after removing consecutive duplicated values.</span>
-   <span class="signature">[`unary2dBy( arrays, shape, fcn, clbk[, thisArg] )`][@stdlib/array/base/unary2d-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element retrieved from a two-dimensional nested input array according to a callback function and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`unary2d( arrays, shape, fcn )`][@stdlib/array/base/unary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a two-dimensional nested input array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`unary3d( arrays, shape, fcn )`][@stdlib/array/base/unary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a three-dimensional nested input array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`unary4d( arrays, shape, fcn )`][@stdlib/array/base/unary4d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a four-dimensional nested input array and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`unary5d( arrays, shape, fcn )`][@stdlib/array/base/unary5d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a five-dimensional nested input array and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`unarynd( arrays, shape, fcn )`][@stdlib/array/base/unarynd]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in an n-dimensional nested input array and assign results to elements in an n-dimensional nested output array.</span>
-   <span class="signature">[`unitspace( start, stop )`][@stdlib/array/base/unitspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1.</span>
-   <span class="signature">[`zeroTo( n )`][@stdlib/array/base/zero-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from zero.</span>
-   <span class="signature">[`zeros( len )`][@stdlib/array/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled "generic" array.</span>
-   <span class="signature">[`zeros2d( shape )`][@stdlib/array/base/zeros2d]</span><span class="delimiter">: </span><span class="description">create a zero-filled two-dimensional nested array.</span>
-   <span class="signature">[`zeros3d( shape )`][@stdlib/array/base/zeros3d]</span><span class="delimiter">: </span><span class="description">create a zero-filled three-dimensional nested array.</span>
-   <span class="signature">[`zeros4d( shape )`][@stdlib/array/base/zeros4d]</span><span class="delimiter">: </span><span class="description">create a zero-filled four-dimensional nested array.</span>
-   <span class="signature">[`zeros5d( shape )`][@stdlib/array/base/zeros5d]</span><span class="delimiter">: </span><span class="description">create a zero-filled five-dimensional nested array.</span>
-   <span class="signature">[`zerosnd( shape )`][@stdlib/array/base/zerosnd]</span><span class="delimiter">: </span><span class="description">create a zero-filled n-dimensional nested array.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/array/base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/array/base/accessor-getter]: https://github.com/stdlib-js/array/tree/main/base/accessor-getter

[@stdlib/array/base/accessor-setter]: https://github.com/stdlib-js/array/tree/main/base/accessor-setter

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array/tree/main/base/accessor

[@stdlib/array/base/accessors]: https://github.com/stdlib-js/array/tree/main/base/accessors

[@stdlib/array/base/arraylike2object]: https://github.com/stdlib-js/array/tree/main/base/arraylike2object

[@stdlib/array/base/assert]: https://github.com/stdlib-js/array/tree/main/base/assert

[@stdlib/array/base/bifurcate-entries-by]: https://github.com/stdlib-js/array/tree/main/base/bifurcate-entries-by

[@stdlib/array/base/bifurcate-entries]: https://github.com/stdlib-js/array/tree/main/base/bifurcate-entries

[@stdlib/array/base/bifurcate-indices-by]: https://github.com/stdlib-js/array/tree/main/base/bifurcate-indices-by

[@stdlib/array/base/bifurcate-indices]: https://github.com/stdlib-js/array/tree/main/base/bifurcate-indices

[@stdlib/array/base/bifurcate-values-by]: https://github.com/stdlib-js/array/tree/main/base/bifurcate-values-by

[@stdlib/array/base/bifurcate-values]: https://github.com/stdlib-js/array/tree/main/base/bifurcate-values

[@stdlib/array/base/binary2d]: https://github.com/stdlib-js/array/tree/main/base/binary2d

[@stdlib/array/base/binary3d]: https://github.com/stdlib-js/array/tree/main/base/binary3d

[@stdlib/array/base/binary4d]: https://github.com/stdlib-js/array/tree/main/base/binary4d

[@stdlib/array/base/binary5d]: https://github.com/stdlib-js/array/tree/main/base/binary5d

[@stdlib/array/base/binarynd]: https://github.com/stdlib-js/array/tree/main/base/binarynd

[@stdlib/array/base/broadcast-array]: https://github.com/stdlib-js/array/tree/main/base/broadcast-array

[@stdlib/array/base/broadcasted-binary2d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-binary2d

[@stdlib/array/base/broadcasted-binary3d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-binary3d

[@stdlib/array/base/broadcasted-binary4d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-binary4d

[@stdlib/array/base/broadcasted-binary5d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-binary5d

[@stdlib/array/base/broadcasted-quaternary2d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-quaternary2d

[@stdlib/array/base/broadcasted-quinary2d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-quinary2d

[@stdlib/array/base/broadcasted-ternary2d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-ternary2d

[@stdlib/array/base/broadcasted-unary2d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-unary2d

[@stdlib/array/base/broadcasted-unary3d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-unary3d

[@stdlib/array/base/broadcasted-unary4d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-unary4d

[@stdlib/array/base/broadcasted-unary5d]: https://github.com/stdlib-js/array/tree/main/base/broadcasted-unary5d

[@stdlib/array/base/cartesian-power]: https://github.com/stdlib-js/array/tree/main/base/cartesian-power

[@stdlib/array/base/cartesian-product]: https://github.com/stdlib-js/array/tree/main/base/cartesian-product

[@stdlib/array/base/cartesian-square]: https://github.com/stdlib-js/array/tree/main/base/cartesian-square

[@stdlib/array/base/copy-indexed]: https://github.com/stdlib-js/array/tree/main/base/copy-indexed

[@stdlib/array/base/copy]: https://github.com/stdlib-js/array/tree/main/base/copy

[@stdlib/array/base/dedupe]: https://github.com/stdlib-js/array/tree/main/base/dedupe

[@stdlib/array/base/filled-by]: https://github.com/stdlib-js/array/tree/main/base/filled-by

[@stdlib/array/base/filled]: https://github.com/stdlib-js/array/tree/main/base/filled

[@stdlib/array/base/filled2d-by]: https://github.com/stdlib-js/array/tree/main/base/filled2d-by

[@stdlib/array/base/filled2d]: https://github.com/stdlib-js/array/tree/main/base/filled2d

[@stdlib/array/base/filled3d-by]: https://github.com/stdlib-js/array/tree/main/base/filled3d-by

[@stdlib/array/base/filled3d]: https://github.com/stdlib-js/array/tree/main/base/filled3d

[@stdlib/array/base/filled4d-by]: https://github.com/stdlib-js/array/tree/main/base/filled4d-by

[@stdlib/array/base/filled4d]: https://github.com/stdlib-js/array/tree/main/base/filled4d

[@stdlib/array/base/filled5d-by]: https://github.com/stdlib-js/array/tree/main/base/filled5d-by

[@stdlib/array/base/filled5d]: https://github.com/stdlib-js/array/tree/main/base/filled5d

[@stdlib/array/base/fillednd-by]: https://github.com/stdlib-js/array/tree/main/base/fillednd-by

[@stdlib/array/base/fillednd]: https://github.com/stdlib-js/array/tree/main/base/fillednd

[@stdlib/array/base/first]: https://github.com/stdlib-js/array/tree/main/base/first

[@stdlib/array/base/flatten-by]: https://github.com/stdlib-js/array/tree/main/base/flatten-by

[@stdlib/array/base/flatten]: https://github.com/stdlib-js/array/tree/main/base/flatten

[@stdlib/array/base/flatten2d-by]: https://github.com/stdlib-js/array/tree/main/base/flatten2d-by

[@stdlib/array/base/flatten2d]: https://github.com/stdlib-js/array/tree/main/base/flatten2d

[@stdlib/array/base/flatten3d-by]: https://github.com/stdlib-js/array/tree/main/base/flatten3d-by

[@stdlib/array/base/flatten3d]: https://github.com/stdlib-js/array/tree/main/base/flatten3d

[@stdlib/array/base/flatten4d-by]: https://github.com/stdlib-js/array/tree/main/base/flatten4d-by

[@stdlib/array/base/flatten4d]: https://github.com/stdlib-js/array/tree/main/base/flatten4d

[@stdlib/array/base/flatten5d-by]: https://github.com/stdlib-js/array/tree/main/base/flatten5d-by

[@stdlib/array/base/flatten5d]: https://github.com/stdlib-js/array/tree/main/base/flatten5d

[@stdlib/array/base/fliplr2d]: https://github.com/stdlib-js/array/tree/main/base/fliplr2d

[@stdlib/array/base/fliplr3d]: https://github.com/stdlib-js/array/tree/main/base/fliplr3d

[@stdlib/array/base/fliplr4d]: https://github.com/stdlib-js/array/tree/main/base/fliplr4d

[@stdlib/array/base/fliplr5d]: https://github.com/stdlib-js/array/tree/main/base/fliplr5d

[@stdlib/array/base/flipud2d]: https://github.com/stdlib-js/array/tree/main/base/flipud2d

[@stdlib/array/base/flipud3d]: https://github.com/stdlib-js/array/tree/main/base/flipud3d

[@stdlib/array/base/flipud4d]: https://github.com/stdlib-js/array/tree/main/base/flipud4d

[@stdlib/array/base/flipud5d]: https://github.com/stdlib-js/array/tree/main/base/flipud5d

[@stdlib/array/base/from-strided]: https://github.com/stdlib-js/array/tree/main/base/from-strided

[@stdlib/array/base/getter]: https://github.com/stdlib-js/array/tree/main/base/getter

[@stdlib/array/base/group-entries-by]: https://github.com/stdlib-js/array/tree/main/base/group-entries-by

[@stdlib/array/base/group-entries]: https://github.com/stdlib-js/array/tree/main/base/group-entries

[@stdlib/array/base/group-indices-by]: https://github.com/stdlib-js/array/tree/main/base/group-indices-by

[@stdlib/array/base/group-indices]: https://github.com/stdlib-js/array/tree/main/base/group-indices

[@stdlib/array/base/group-values-by]: https://github.com/stdlib-js/array/tree/main/base/group-values-by

[@stdlib/array/base/group-values]: https://github.com/stdlib-js/array/tree/main/base/group-values

[@stdlib/array/base/incrspace]: https://github.com/stdlib-js/array/tree/main/base/incrspace

[@stdlib/array/base/index-of]: https://github.com/stdlib-js/array/tree/main/base/index-of

[@stdlib/array/base/last-index-of]: https://github.com/stdlib-js/array/tree/main/base/last-index-of

[@stdlib/array/base/last]: https://github.com/stdlib-js/array/tree/main/base/last

[@stdlib/array/base/linspace]: https://github.com/stdlib-js/array/tree/main/base/linspace

[@stdlib/array/base/logspace]: https://github.com/stdlib-js/array/tree/main/base/logspace

[@stdlib/array/base/map2d]: https://github.com/stdlib-js/array/tree/main/base/map2d

[@stdlib/array/base/map3d]: https://github.com/stdlib-js/array/tree/main/base/map3d

[@stdlib/array/base/map4d]: https://github.com/stdlib-js/array/tree/main/base/map4d

[@stdlib/array/base/map5d]: https://github.com/stdlib-js/array/tree/main/base/map5d

[@stdlib/array/base/mskbinary2d]: https://github.com/stdlib-js/array/tree/main/base/mskbinary2d

[@stdlib/array/base/mskunary2d]: https://github.com/stdlib-js/array/tree/main/base/mskunary2d

[@stdlib/array/base/mskunary3d]: https://github.com/stdlib-js/array/tree/main/base/mskunary3d

[@stdlib/array/base/n-cartesian-product]: https://github.com/stdlib-js/array/tree/main/base/n-cartesian-product

[@stdlib/array/base/one-to]: https://github.com/stdlib-js/array/tree/main/base/one-to

[@stdlib/array/base/ones]: https://github.com/stdlib-js/array/tree/main/base/ones

[@stdlib/array/base/ones2d]: https://github.com/stdlib-js/array/tree/main/base/ones2d

[@stdlib/array/base/ones3d]: https://github.com/stdlib-js/array/tree/main/base/ones3d

[@stdlib/array/base/ones4d]: https://github.com/stdlib-js/array/tree/main/base/ones4d

[@stdlib/array/base/ones5d]: https://github.com/stdlib-js/array/tree/main/base/ones5d

[@stdlib/array/base/onesnd]: https://github.com/stdlib-js/array/tree/main/base/onesnd

[@stdlib/array/base/quaternary2d]: https://github.com/stdlib-js/array/tree/main/base/quaternary2d

[@stdlib/array/base/quaternary3d]: https://github.com/stdlib-js/array/tree/main/base/quaternary3d

[@stdlib/array/base/quaternary4d]: https://github.com/stdlib-js/array/tree/main/base/quaternary4d

[@stdlib/array/base/quaternary5d]: https://github.com/stdlib-js/array/tree/main/base/quaternary5d

[@stdlib/array/base/quinary2d]: https://github.com/stdlib-js/array/tree/main/base/quinary2d

[@stdlib/array/base/quinary3d]: https://github.com/stdlib-js/array/tree/main/base/quinary3d

[@stdlib/array/base/quinary4d]: https://github.com/stdlib-js/array/tree/main/base/quinary4d

[@stdlib/array/base/quinary5d]: https://github.com/stdlib-js/array/tree/main/base/quinary5d

[@stdlib/array/base/resolve-getter]: https://github.com/stdlib-js/array/tree/main/base/resolve-getter

[@stdlib/array/base/setter]: https://github.com/stdlib-js/array/tree/main/base/setter

[@stdlib/array/base/slice]: https://github.com/stdlib-js/array/tree/main/base/slice

[@stdlib/array/base/strided2array2d]: https://github.com/stdlib-js/array/tree/main/base/strided2array2d

[@stdlib/array/base/strided2array3d]: https://github.com/stdlib-js/array/tree/main/base/strided2array3d

[@stdlib/array/base/strided2array4d]: https://github.com/stdlib-js/array/tree/main/base/strided2array4d

[@stdlib/array/base/strided2array5d]: https://github.com/stdlib-js/array/tree/main/base/strided2array5d

[@stdlib/array/base/take-indexed]: https://github.com/stdlib-js/array/tree/main/base/take-indexed

[@stdlib/array/base/take]: https://github.com/stdlib-js/array/tree/main/base/take

[@stdlib/array/base/take2d]: https://github.com/stdlib-js/array/tree/main/base/take2d

[@stdlib/array/base/take3d]: https://github.com/stdlib-js/array/tree/main/base/take3d

[@stdlib/array/base/ternary2d]: https://github.com/stdlib-js/array/tree/main/base/ternary2d

[@stdlib/array/base/ternary3d]: https://github.com/stdlib-js/array/tree/main/base/ternary3d

[@stdlib/array/base/ternary4d]: https://github.com/stdlib-js/array/tree/main/base/ternary4d

[@stdlib/array/base/ternary5d]: https://github.com/stdlib-js/array/tree/main/base/ternary5d

[@stdlib/array/base/to-accessor-array]: https://github.com/stdlib-js/array/tree/main/base/to-accessor-array

[@stdlib/array/base/to-deduped]: https://github.com/stdlib-js/array/tree/main/base/to-deduped

[@stdlib/array/base/unary2d-by]: https://github.com/stdlib-js/array/tree/main/base/unary2d-by

[@stdlib/array/base/unary2d]: https://github.com/stdlib-js/array/tree/main/base/unary2d

[@stdlib/array/base/unary3d]: https://github.com/stdlib-js/array/tree/main/base/unary3d

[@stdlib/array/base/unary4d]: https://github.com/stdlib-js/array/tree/main/base/unary4d

[@stdlib/array/base/unary5d]: https://github.com/stdlib-js/array/tree/main/base/unary5d

[@stdlib/array/base/unarynd]: https://github.com/stdlib-js/array/tree/main/base/unarynd

[@stdlib/array/base/unitspace]: https://github.com/stdlib-js/array/tree/main/base/unitspace

[@stdlib/array/base/zero-to]: https://github.com/stdlib-js/array/tree/main/base/zero-to

[@stdlib/array/base/zeros]: https://github.com/stdlib-js/array/tree/main/base/zeros

[@stdlib/array/base/zeros2d]: https://github.com/stdlib-js/array/tree/main/base/zeros2d

[@stdlib/array/base/zeros3d]: https://github.com/stdlib-js/array/tree/main/base/zeros3d

[@stdlib/array/base/zeros4d]: https://github.com/stdlib-js/array/tree/main/base/zeros4d

[@stdlib/array/base/zeros5d]: https://github.com/stdlib-js/array/tree/main/base/zeros5d

[@stdlib/array/base/zerosnd]: https://github.com/stdlib-js/array/tree/main/base/zerosnd

<!-- </toc-links> -->

</section>

<!-- /.links -->