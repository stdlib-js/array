/**
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name AccessorArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessor}
*/
setReadOnly( ns, 'AccessorArray', require( './../../base/accessor' ) );

/**
* @name accessorGetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessor-getter}
*/
setReadOnly( ns, 'accessorGetter', require( './../../base/accessor-getter' ) );

/**
* @name accessorSetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessor-setter}
*/
setReadOnly( ns, 'accessorSetter', require( './../../base/accessor-setter' ) );

/**
* @name accessors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessors}
*/
setReadOnly( ns, 'accessors', require( './../../base/accessors' ) );

/**
* @name any
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any}
*/
setReadOnly( ns, 'any', require( './../../base/any' ) );

/**
* @name anyBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-by}
*/
setReadOnly( ns, 'anyBy', require( './../../base/any-by' ) );

/**
* @name anyByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-by-right}
*/
setReadOnly( ns, 'anyByRight', require( './../../base/any-by-right' ) );

/**
* @name anyHasOwnProp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-has-own-property}
*/
setReadOnly( ns, 'anyHasOwnProp', require( './../../base/any-has-own-property' ) );

/**
* @name anyHasProp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-has-property}
*/
setReadOnly( ns, 'anyHasProp', require( './../../base/any-has-property' ) );

/**
* @name anyIsEntry
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-is-entry}
*/
setReadOnly( ns, 'anyIsEntry', require( './../../base/any-is-entry' ) );

/**
* @name anyIsEntryIn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-is-entry-in}
*/
setReadOnly( ns, 'anyIsEntryIn', require( './../../base/any-is-entry-in' ) );

/**
* @name arraylike2object
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/arraylike2object}
*/
setReadOnly( ns, 'arraylike2object', require( './../../base/arraylike2object' ) );

/**
* @name assert
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/assert}
*/
setReadOnly( ns, 'assert', require( './../../base/assert' ) );

/**
* @name at
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at}
*/
setReadOnly( ns, 'at', require( './../../base/at' ) );

/**
* @name at2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at2d}
*/
setReadOnly( ns, 'at2d', require( './../../base/at2d' ) );

/**
* @name at3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at3d}
*/
setReadOnly( ns, 'at3d', require( './../../base/at3d' ) );

/**
* @name at4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at4d}
*/
setReadOnly( ns, 'at4d', require( './../../base/at4d' ) );

/**
* @name at5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at5d}
*/
setReadOnly( ns, 'at5d', require( './../../base/at5d' ) );

/**
* @name atnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/atnd}
*/
setReadOnly( ns, 'atnd', require( './../../base/atnd' ) );

/**
* @name banded
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/banded}
*/
setReadOnly( ns, 'banded', require( './../../base/banded' ) );

/**
* @name bifurcateEntries
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-entries}
*/
setReadOnly( ns, 'bifurcateEntries', require( './../../base/bifurcate-entries' ) );

/**
* @name bifurcateEntriesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-entries-by}
*/
setReadOnly( ns, 'bifurcateEntriesBy', require( './../../base/bifurcate-entries-by' ) );

/**
* @name bifurcateIndices
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-indices}
*/
setReadOnly( ns, 'bifurcateIndices', require( './../../base/bifurcate-indices' ) );

/**
* @name bifurcateIndicesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-indices-by}
*/
setReadOnly( ns, 'bifurcateIndicesBy', require( './../../base/bifurcate-indices-by' ) );

/**
* @name bifurcateValues
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-values}
*/
setReadOnly( ns, 'bifurcateValues', require( './../../base/bifurcate-values' ) );

/**
* @name bifurcateValuesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-values-by}
*/
setReadOnly( ns, 'bifurcateValuesBy', require( './../../base/bifurcate-values-by' ) );

/**
* @name binary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary2d}
*/
setReadOnly( ns, 'binary2d', require( './../../base/binary2d' ) );

/**
* @name binary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary3d}
*/
setReadOnly( ns, 'binary3d', require( './../../base/binary3d' ) );

/**
* @name binary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary4d}
*/
setReadOnly( ns, 'binary4d', require( './../../base/binary4d' ) );

/**
* @name binary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary5d}
*/
setReadOnly( ns, 'binary5d', require( './../../base/binary5d' ) );

/**
* @name binarynd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binarynd}
*/
setReadOnly( ns, 'binarynd', require( './../../base/binarynd' ) );

/**
* @name broadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcast-array}
*/
setReadOnly( ns, 'broadcastArray', require( './../../base/broadcast-array' ) );

/**
* @name bbinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary2d}
*/
setReadOnly( ns, 'bbinary2d', require( './../../base/broadcasted-binary2d' ) );

/**
* @name bbinary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary3d}
*/
setReadOnly( ns, 'bbinary3d', require( './../../base/broadcasted-binary3d' ) );

/**
* @name bbinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary4d}
*/
setReadOnly( ns, 'bbinary4d', require( './../../base/broadcasted-binary4d' ) );

/**
* @name bbinary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary5d}
*/
setReadOnly( ns, 'bbinary5d', require( './../../base/broadcasted-binary5d' ) );

/**
* @name bquaternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary2d}
*/
setReadOnly( ns, 'bquaternary2d', require( './../../base/broadcasted-quaternary2d' ) );

/**
* @name bquaternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary3d}
*/
setReadOnly( ns, 'bquaternary3d', require( './../../base/broadcasted-quaternary3d' ) );

/**
* @name bquaternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary4d}
*/
setReadOnly( ns, 'bquaternary4d', require( './../../base/broadcasted-quaternary4d' ) );

/**
* @name bquaternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary5d}
*/
setReadOnly( ns, 'bquaternary5d', require( './../../base/broadcasted-quaternary5d' ) );

/**
* @name bquinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quinary2d}
*/
setReadOnly( ns, 'bquinary2d', require( './../../base/broadcasted-quinary2d' ) );

/**
* @name bquinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quinary4d}
*/
setReadOnly( ns, 'bquinary4d', require( './../../base/broadcasted-quinary4d' ) );

/**
* @name bternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary2d}
*/
setReadOnly( ns, 'bternary2d', require( './../../base/broadcasted-ternary2d' ) );

/**
* @name bternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary3d}
*/
setReadOnly( ns, 'bternary3d', require( './../../base/broadcasted-ternary3d' ) );

/**
* @name bternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary4d}
*/
setReadOnly( ns, 'bternary4d', require( './../../base/broadcasted-ternary4d' ) );

/**
* @name bternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary5d}
*/
setReadOnly( ns, 'bternary5d', require( './../../base/broadcasted-ternary5d' ) );

/**
* @name bunary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary2d}
*/
setReadOnly( ns, 'bunary2d', require( './../../base/broadcasted-unary2d' ) );

/**
* @name bunary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary3d}
*/
setReadOnly( ns, 'bunary3d', require( './../../base/broadcasted-unary3d' ) );

/**
* @name bunary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary4d}
*/
setReadOnly( ns, 'bunary4d', require( './../../base/broadcasted-unary4d' ) );

/**
* @name bunary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary5d}
*/
setReadOnly( ns, 'bunary5d', require( './../../base/broadcasted-unary5d' ) );

/**
* @name cartesianPower
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-power}
*/
setReadOnly( ns, 'cartesianPower', require( './../../base/cartesian-power' ) );

/**
* @name cartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-product}
*/
setReadOnly( ns, 'cartesianProduct', require( './../../base/cartesian-product' ) );

/**
* @name cartesianSquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-square}
*/
setReadOnly( ns, 'cartesianSquare', require( './../../base/cartesian-square' ) );

/**
* @name copy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/copy}
*/
setReadOnly( ns, 'copy', require( './../../base/copy' ) );

/**
* @name copyIndexed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/copy-indexed}
*/
setReadOnly( ns, 'copyIndexed', require( './../../base/copy-indexed' ) );

/**
* @name countFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-falsy}
*/
setReadOnly( ns, 'countFalsy', require( './../../base/count-falsy' ) );

/**
* @name countIf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-if}
*/
setReadOnly( ns, 'countIf', require( './../../base/count-if' ) );

/**
* @name countIfs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-ifs}
*/
setReadOnly( ns, 'countIfs', require( './../../base/count-ifs' ) );

/**
* @name countSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-same-value}
*/
setReadOnly( ns, 'countSameValue', require( './../../base/count-same-value' ) );

/**
* @name countSameValueZero
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-same-value-zero}
*/
setReadOnly( ns, 'countSameValueZero', require( './../../base/count-same-value-zero' ) );

/**
* @name countTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-truthy}
*/
setReadOnly( ns, 'countTruthy', require( './../../base/count-truthy' ) );

/**
* @name cuany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cuany}
*/
setReadOnly( ns, 'cuany', require( './../../base/cuany' ) );

/**
* @name cuevery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cuevery}
*/
setReadOnly( ns, 'cuevery', require( './../../base/cuevery' ) );

/**
* @name cunone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cunone}
*/
setReadOnly( ns, 'cunone', require( './../../base/cunone' ) );

/**
* @name dedupe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/dedupe}
*/
setReadOnly( ns, 'dedupe', require( './../../base/dedupe' ) );

/**
* @name entries2objects
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/entries2objects}
*/
setReadOnly( ns, 'entries2objects', require( './../../base/entries2objects' ) );

/**
* @name entries2views
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/entries2views}
*/
setReadOnly( ns, 'entries2views', require( './../../base/entries2views' ) );

/**
* @name every
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every}
*/
setReadOnly( ns, 'every', require( './../../base/every' ) );

/**
* @name everyBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every-by}
*/
setReadOnly( ns, 'everyBy', require( './../../base/every-by' ) );

/**
* @name everyByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every-by-right}
*/
setReadOnly( ns, 'everyByRight', require( './../../base/every-by-right' ) );

/**
* @name fancySlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fancy-slice}
*/
setReadOnly( ns, 'fancySlice', require( './../../base/fancy-slice' ) );

/**
* @name fancySliceAssign
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fancy-slice-assign}
*/
setReadOnly( ns, 'fancySliceAssign', require( './../../base/fancy-slice-assign' ) );

/**
* @name fill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fill}
*/
setReadOnly( ns, 'fill', require( './../../base/fill' ) );

/**
* @name fillBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fill-by}
*/
setReadOnly( ns, 'fillBy', require( './../../base/fill-by' ) );

/**
* @name filled
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled}
*/
setReadOnly( ns, 'filled', require( './../../base/filled' ) );

/**
* @name filledBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled-by}
*/
setReadOnly( ns, 'filledBy', require( './../../base/filled-by' ) );

/**
* @name filled2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled2d}
*/
setReadOnly( ns, 'filled2d', require( './../../base/filled2d' ) );

/**
* @name filled2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled2d-by}
*/
setReadOnly( ns, 'filled2dBy', require( './../../base/filled2d-by' ) );

/**
* @name filled3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled3d}
*/
setReadOnly( ns, 'filled3d', require( './../../base/filled3d' ) );

/**
* @name filled3dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled3d-by}
*/
setReadOnly( ns, 'filled3dBy', require( './../../base/filled3d-by' ) );

/**
* @name filled4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled4d}
*/
setReadOnly( ns, 'filled4d', require( './../../base/filled4d' ) );

/**
* @name filled4dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled4d-by}
*/
setReadOnly( ns, 'filled4dBy', require( './../../base/filled4d-by' ) );

/**
* @name filled5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled5d}
*/
setReadOnly( ns, 'filled5d', require( './../../base/filled5d' ) );

/**
* @name filled5dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled5d-by}
*/
setReadOnly( ns, 'filled5dBy', require( './../../base/filled5d-by' ) );

/**
* @name fillednd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fillednd}
*/
setReadOnly( ns, 'fillednd', require( './../../base/fillednd' ) );

/**
* @name filledndBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fillednd-by}
*/
setReadOnly( ns, 'filledndBy', require( './../../base/fillednd-by' ) );

/**
* @name filter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filter}
*/
setReadOnly( ns, 'filter', require( './../../base/filter' ) );

/**
* @name first
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/first}
*/
setReadOnly( ns, 'first', require( './../../base/first' ) );

/**
* @name flatten
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten}
*/
setReadOnly( ns, 'flatten', require( './../../base/flatten' ) );

/**
* @name flattenBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten-by}
*/
setReadOnly( ns, 'flattenBy', require( './../../base/flatten-by' ) );

/**
* @name flatten2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten2d}
*/
setReadOnly( ns, 'flatten2d', require( './../../base/flatten2d' ) );

/**
* @name flatten2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten2d-by}
*/
setReadOnly( ns, 'flatten2dBy', require( './../../base/flatten2d-by' ) );

/**
* @name flatten3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten3d}
*/
setReadOnly( ns, 'flatten3d', require( './../../base/flatten3d' ) );

/**
* @name flatten3dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten3d-by}
*/
setReadOnly( ns, 'flatten3dBy', require( './../../base/flatten3d-by' ) );

/**
* @name flatten4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten4d}
*/
setReadOnly( ns, 'flatten4d', require( './../../base/flatten4d' ) );

/**
* @name flatten4dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten4d-by}
*/
setReadOnly( ns, 'flatten4dBy', require( './../../base/flatten4d-by' ) );

/**
* @name flatten5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten5d}
*/
setReadOnly( ns, 'flatten5d', require( './../../base/flatten5d' ) );

/**
* @name flatten5dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten5d-by}
*/
setReadOnly( ns, 'flatten5dBy', require( './../../base/flatten5d-by' ) );

/**
* @name fliplr2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr2d}
*/
setReadOnly( ns, 'fliplr2d', require( './../../base/fliplr2d' ) );

/**
* @name fliplr3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr3d}
*/
setReadOnly( ns, 'fliplr3d', require( './../../base/fliplr3d' ) );

/**
* @name fliplr4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr4d}
*/
setReadOnly( ns, 'fliplr4d', require( './../../base/fliplr4d' ) );

/**
* @name fliplr5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr5d}
*/
setReadOnly( ns, 'fliplr5d', require( './../../base/fliplr5d' ) );

/**
* @name flipud2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud2d}
*/
setReadOnly( ns, 'flipud2d', require( './../../base/flipud2d' ) );

/**
* @name flipud3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud3d}
*/
setReadOnly( ns, 'flipud3d', require( './../../base/flipud3d' ) );

/**
* @name flipud4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud4d}
*/
setReadOnly( ns, 'flipud4d', require( './../../base/flipud4d' ) );

/**
* @name flipud5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud5d}
*/
setReadOnly( ns, 'flipud5d', require( './../../base/flipud5d' ) );

/**
* @name strided2array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/from-strided}
*/
setReadOnly( ns, 'strided2array', require( './../../base/from-strided' ) );

/**
* @name getter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/getter}
*/
setReadOnly( ns, 'getter', require( './../../base/getter' ) );

/**
* @name groupEntries
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-entries}
*/
setReadOnly( ns, 'groupEntries', require( './../../base/group-entries' ) );

/**
* @name groupEntriesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-entries-by}
*/
setReadOnly( ns, 'groupEntriesBy', require( './../../base/group-entries-by' ) );

/**
* @name groupIndices
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-indices}
*/
setReadOnly( ns, 'groupIndices', require( './../../base/group-indices' ) );

/**
* @name groupIndicesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-indices-by}
*/
setReadOnly( ns, 'groupIndicesBy', require( './../../base/group-indices-by' ) );

/**
* @name groupValues
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-values}
*/
setReadOnly( ns, 'groupValues', require( './../../base/group-values' ) );

/**
* @name groupValuesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-values-by}
*/
setReadOnly( ns, 'groupValuesBy', require( './../../base/group-values-by' ) );

/**
* @name groupValuesOnKey
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-values-on-key}
*/
setReadOnly( ns, 'groupValuesOnKey', require( './../../base/group-values-on-key' ) );

/**
* @name incrspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/incrspace}
*/
setReadOnly( ns, 'incrspace', require( './../../base/incrspace' ) );

/**
* @name indexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/index-of}
*/
setReadOnly( ns, 'indexOf', require( './../../base/index-of' ) );

/**
* @name indexOfSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/index-of-same-value}
*/
setReadOnly( ns, 'indexOfSameValue', require( './../../base/index-of-same-value' ) );

/**
* @name indicesComplement
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/indices-complement}
*/
setReadOnly( ns, 'indicesComplement', require( './../../base/indices-complement' ) );

/**
* @name join
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/join}
*/
setReadOnly( ns, 'join', require( './../../base/join' ) );

/**
* @name last
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last}
*/
setReadOnly( ns, 'last', require( './../../base/last' ) );

/**
* @name lastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last-index-of}
*/
setReadOnly( ns, 'lastIndexOf', require( './../../base/last-index-of' ) );

/**
* @name lastIndexOfSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last-index-of-same-value}
*/
setReadOnly( ns, 'lastIndexOfSameValue', require( './../../base/last-index-of-same-value' ) );

/**
* @name linspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/linspace}
*/
setReadOnly( ns, 'linspace', require( './../../base/linspace' ) );

/**
* @name linspace2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/linspace2d}
*/
setReadOnly( ns, 'linspace2d', require( './../../base/linspace2d' ) );

/**
* @name logspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/logspace}
*/
setReadOnly( ns, 'logspace', require( './../../base/logspace' ) );

/**
* @name map2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map2d}
*/
setReadOnly( ns, 'map2d', require( './../../base/map2d' ) );

/**
* @name map3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map3d}
*/
setReadOnly( ns, 'map3d', require( './../../base/map3d' ) );

/**
* @name map4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map4d}
*/
setReadOnly( ns, 'map4d', require( './../../base/map4d' ) );

/**
* @name map5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map5d}
*/
setReadOnly( ns, 'map5d', require( './../../base/map5d' ) );

/**
* @name minSignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/min-signed-integer-dtype}
*/
setReadOnly( ns, 'minSignedIntegerDataType', require( './../../base/min-signed-integer-dtype' ) );

/**
* @name minUnsignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/min-unsigned-integer-dtype}
*/
setReadOnly( ns, 'minUnsignedIntegerDataType', require( './../../base/min-unsigned-integer-dtype' ) );

/**
* @name mskbinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary2d}
*/
setReadOnly( ns, 'mskbinary2d', require( './../../base/mskbinary2d' ) );

/**
* @name mskbinary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary3d}
*/
setReadOnly( ns, 'mskbinary3d', require( './../../base/mskbinary3d' ) );

/**
* @name mskbinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary4d}
*/
setReadOnly( ns, 'mskbinary4d', require( './../../base/mskbinary4d' ) );

/**
* @name mskbinary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary5d}
*/
setReadOnly( ns, 'mskbinary5d', require( './../../base/mskbinary5d' ) );

/**
* @name mskfilter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfilter}
*/
setReadOnly( ns, 'mskfilter', require( './../../base/mskfilter' ) );

/**
* @name mskfilterMap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfilter-map}
*/
setReadOnly( ns, 'mskfilterMap', require( './../../base/mskfilter-map' ) );

/**
* @name mskfilter2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfilter2}
*/
setReadOnly( ns, 'mskfilter2', require( './../../base/mskfilter2' ) );

/**
* @name mskfiltern
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfiltern}
*/
setReadOnly( ns, 'mskfiltern', require( './../../base/mskfiltern' ) );

/**
* @name mskput
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskput}
*/
setReadOnly( ns, 'mskput', require( './../../base/mskput' ) );

/**
* @name mskreject
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskreject}
*/
setReadOnly( ns, 'mskreject', require( './../../base/mskreject' ) );

/**
* @name mskunary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary2d}
*/
setReadOnly( ns, 'mskunary2d', require( './../../base/mskunary2d' ) );

/**
* @name mskunary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary3d}
*/
setReadOnly( ns, 'mskunary3d', require( './../../base/mskunary3d' ) );

/**
* @name mskunary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary4d}
*/
setReadOnly( ns, 'mskunary4d', require( './../../base/mskunary4d' ) );

/**
* @name mskunary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary5d}
*/
setReadOnly( ns, 'mskunary5d', require( './../../base/mskunary5d' ) );

/**
* @name nCartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/n-cartesian-product}
*/
setReadOnly( ns, 'nCartesianProduct', require( './../../base/n-cartesian-product' ) );

/**
* @name nested2objects
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/nested2objects}
*/
setReadOnly( ns, 'nested2objects', require( './../../base/nested2objects' ) );

/**
* @name nested2views
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/nested2views}
*/
setReadOnly( ns, 'nested2views', require( './../../base/nested2views' ) );

/**
* @name none
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none}
*/
setReadOnly( ns, 'none', require( './../../base/none' ) );

/**
* @name noneBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none-by}
*/
setReadOnly( ns, 'noneBy', require( './../../base/none-by' ) );

/**
* @name noneByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none-by-right}
*/
setReadOnly( ns, 'noneByRight', require( './../../base/none-by-right' ) );

/**
* @name nulls
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/nulls}
*/
setReadOnly( ns, 'nulls', require( './../../base/nulls' ) );

/**
* @name oneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/one-to}
*/
setReadOnly( ns, 'oneTo', require( './../../base/one-to' ) );

/**
* @name ones
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones}
*/
setReadOnly( ns, 'ones', require( './../../base/ones' ) );

/**
* @name ones2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones2d}
*/
setReadOnly( ns, 'ones2d', require( './../../base/ones2d' ) );

/**
* @name ones3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones3d}
*/
setReadOnly( ns, 'ones3d', require( './../../base/ones3d' ) );

/**
* @name ones4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones4d}
*/
setReadOnly( ns, 'ones4d', require( './../../base/ones4d' ) );

/**
* @name ones5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones5d}
*/
setReadOnly( ns, 'ones5d', require( './../../base/ones5d' ) );

/**
* @name onesnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/onesnd}
*/
setReadOnly( ns, 'onesnd', require( './../../base/onesnd' ) );

/**
* @name place
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/place}
*/
setReadOnly( ns, 'place', require( './../../base/place' ) );

/**
* @name put
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/put}
*/
setReadOnly( ns, 'put', require( './../../base/put' ) );

/**
* @name quaternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary2d}
*/
setReadOnly( ns, 'quaternary2d', require( './../../base/quaternary2d' ) );

/**
* @name quaternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary3d}
*/
setReadOnly( ns, 'quaternary3d', require( './../../base/quaternary3d' ) );

/**
* @name quaternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary4d}
*/
setReadOnly( ns, 'quaternary4d', require( './../../base/quaternary4d' ) );

/**
* @name quaternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary5d}
*/
setReadOnly( ns, 'quaternary5d', require( './../../base/quaternary5d' ) );

/**
* @name quinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary2d}
*/
setReadOnly( ns, 'quinary2d', require( './../../base/quinary2d' ) );

/**
* @name quinary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary3d}
*/
setReadOnly( ns, 'quinary3d', require( './../../base/quinary3d' ) );

/**
* @name quinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary4d}
*/
setReadOnly( ns, 'quinary4d', require( './../../base/quinary4d' ) );

/**
* @name quinary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary5d}
*/
setReadOnly( ns, 'quinary5d', require( './../../base/quinary5d' ) );

/**
* @name reject
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/reject}
*/
setReadOnly( ns, 'reject', require( './../../base/reject' ) );

/**
* @name rekey
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/rekey}
*/
setReadOnly( ns, 'rekey', require( './../../base/rekey' ) );

/**
* @name removeAt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/remove-at}
*/
setReadOnly( ns, 'removeAt', require( './../../base/remove-at' ) );

/**
* @name reshape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/reshape}
*/
setReadOnly( ns, 'reshape', require( './../../base/reshape' ) );

/**
* @name resolveGetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/resolve-getter}
*/
setReadOnly( ns, 'resolveGetter', require( './../../base/resolve-getter' ) );

/**
* @name resolveSetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/resolve-setter}
*/
setReadOnly( ns, 'resolveSetter', require( './../../base/resolve-setter' ) );

/**
* @name reverse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/reverse}
*/
setReadOnly( ns, 'reverse', require( './../../base/reverse' ) );

/**
* @name scatterFilled
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/scatter-filled}
*/
setReadOnly( ns, 'scatterFilled', require( './../../base/scatter-filled' ) );

/**
* @name scattered
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/scattered}
*/
setReadOnly( ns, 'scattered', require( './../../base/scattered' ) );

/**
* @name setter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/setter}
*/
setReadOnly( ns, 'setter', require( './../../base/setter' ) );

/**
* @name slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/slice}
*/
setReadOnly( ns, 'slice', require( './../../base/slice' ) );

/**
* @name strided2array2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array2d}
*/
setReadOnly( ns, 'strided2array2d', require( './../../base/strided2array2d' ) );

/**
* @name strided2array3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array3d}
*/
setReadOnly( ns, 'strided2array3d', require( './../../base/strided2array3d' ) );

/**
* @name strided2array4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array4d}
*/
setReadOnly( ns, 'strided2array4d', require( './../../base/strided2array4d' ) );

/**
* @name strided2array5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array5d}
*/
setReadOnly( ns, 'strided2array5d', require( './../../base/strided2array5d' ) );

/**
* @name symmetric
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/symmetric}
*/
setReadOnly( ns, 'symmetric', require( './../../base/symmetric' ) );

/**
* @name symmetricBanded
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/symmetric-banded}
*/
setReadOnly( ns, 'symmetricBanded', require( './../../base/symmetric-banded' ) );

/**
* @name take
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take}
*/
setReadOnly( ns, 'take', require( './../../base/take' ) );

/**
* @name takeIndexed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take-indexed}
*/
setReadOnly( ns, 'takeIndexed', require( './../../base/take-indexed' ) );

/**
* @name takeIndexed2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take-indexed2}
*/
setReadOnly( ns, 'takeIndexed2', require( './../../base/take-indexed2' ) );

/**
* @name take2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take2d}
*/
setReadOnly( ns, 'take2d', require( './../../base/take2d' ) );

/**
* @name take3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take3d}
*/
setReadOnly( ns, 'take3d', require( './../../base/take3d' ) );

/**
* @name ternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary2d}
*/
setReadOnly( ns, 'ternary2d', require( './../../base/ternary2d' ) );

/**
* @name ternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary3d}
*/
setReadOnly( ns, 'ternary3d', require( './../../base/ternary3d' ) );

/**
* @name ternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary4d}
*/
setReadOnly( ns, 'ternary4d', require( './../../base/ternary4d' ) );

/**
* @name ternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary5d}
*/
setReadOnly( ns, 'ternary5d', require( './../../base/ternary5d' ) );

/**
* @name toAccessorArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-accessor-array}
*/
setReadOnly( ns, 'toAccessorArray', require( './../../base/to-accessor-array' ) );

/**
* @name toDeduped
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-deduped}
*/
setReadOnly( ns, 'toDeduped', require( './../../base/to-deduped' ) );

/**
* @name toReversed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-reversed}
*/
setReadOnly( ns, 'toReversed', require( './../../base/to-reversed' ) );

/**
* @name unary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary2d}
*/
setReadOnly( ns, 'unary2d', require( './../../base/unary2d' ) );

/**
* @name unary2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary2d-by}
*/
setReadOnly( ns, 'unary2dBy', require( './../../base/unary2d-by' ) );

/**
* @name unary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary3d}
*/
setReadOnly( ns, 'unary3d', require( './../../base/unary3d' ) );

/**
* @name unary3dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary3d-by}
*/
setReadOnly( ns, 'unary3dBy', require( './../../base/unary3d-by' ) );

/**
* @name unary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary4d}
*/
setReadOnly( ns, 'unary4d', require( './../../base/unary4d' ) );

/**
* @name unary4dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary4d-by}
*/
setReadOnly( ns, 'unary4dBy', require( './../../base/unary4d-by' ) );

/**
* @name unary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary5d}
*/
setReadOnly( ns, 'unary5d', require( './../../base/unary5d' ) );

/**
* @name unary5dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary5d-by}
*/
setReadOnly( ns, 'unary5dBy', require( './../../base/unary5d-by' ) );

/**
* @name unarynd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unarynd}
*/
setReadOnly( ns, 'unarynd', require( './../../base/unarynd' ) );

/**
* @name unitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unitspace}
*/
setReadOnly( ns, 'unitspace', require( './../../base/unitspace' ) );

/**
* @name where
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/where}
*/
setReadOnly( ns, 'where', require( './../../base/where' ) );

/**
* @name arrayWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/with}
*/
setReadOnly( ns, 'arrayWith', require( './../../base/with' ) );

/**
* @name without
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/without}
*/
setReadOnly( ns, 'without', require( './../../base/without' ) );

/**
* @name zeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zero-to}
*/
setReadOnly( ns, 'zeroTo', require( './../../base/zero-to' ) );

/**
* @name zeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros}
*/
setReadOnly( ns, 'zeros', require( './../../base/zeros' ) );

/**
* @name zeros2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros2d}
*/
setReadOnly( ns, 'zeros2d', require( './../../base/zeros2d' ) );

/**
* @name zeros3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros3d}
*/
setReadOnly( ns, 'zeros3d', require( './../../base/zeros3d' ) );

/**
* @name zeros4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros4d}
*/
setReadOnly( ns, 'zeros4d', require( './../../base/zeros4d' ) );

/**
* @name zeros5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros5d}
*/
setReadOnly( ns, 'zeros5d', require( './../../base/zeros5d' ) );

/**
* @name zerosnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zerosnd}
*/
setReadOnly( ns, 'zerosnd', require( './../../base/zerosnd' ) );

/**
* @name zip
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zip}
*/
setReadOnly( ns, 'zip', require( './../../base/zip' ) );

/**
* @name zip2object
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zip2object}
*/
setReadOnly( ns, 'zip2object', require( './../../base/zip2object' ) );

/**
* @name zip2objects
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zip2objects}
*/
setReadOnly( ns, 'zip2objects', require( './../../base/zip2objects' ) );

/**
* @name zip2views
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zip2views}
*/
setReadOnly( ns, 'zip2views', require( './../../base/zip2views' ) );


// EXPORTS //

module.exports = ns;
