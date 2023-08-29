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
* @name binary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary2d}
*/
setReadOnly( ns, 'binary2d', require( './../../base/binary2d' ) );

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
* @name bunary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary2d}
*/
setReadOnly( ns, 'bunary2d', require( './../../base/broadcasted-unary2d' ) );

/**
* @name bunary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary2d}
*/
setReadOnly( ns, 'bunary2d', require( './../../base/broadcasted-unary2d' ) );

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
* @name getter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/getter}
*/
setReadOnly( ns, 'getter', require( './../../base/getter' ) );

/**
* @name incrspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/incrspace}
*/
setReadOnly( ns, 'incrspace', require( './../../base/incrspace' ) );

/**
* @name last
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last}
*/
setReadOnly( ns, 'last', require( './../../base/last' ) );

/**
* @name linspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/linspace}
*/
setReadOnly( ns, 'linspace', require( './../../base/linspace' ) );

/**
* @name logspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/logspace}
*/
setReadOnly( ns, 'logspace', require( './../../base/logspace' ) );

/**
* @name nCartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/n-cartesian-product}
*/
setReadOnly( ns, 'nCartesianProduct', require( './../../base/n-cartesian-product' ) );

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
* @name setter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/setter}
*/
setReadOnly( ns, 'setter', require( './../../base/setter' ) );

/**
* @name take
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take}
*/
setReadOnly( ns, 'take', require( './../../base/take' ) );

/**
* @name toAccessorArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-accessor-array}
*/
setReadOnly( ns, 'toAccessorArray', require( './../../base/to-accessor-array' ) );

/**
* @name unary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary2d}
*/
setReadOnly( ns, 'unary2d', require( './../../base/unary2d' ) );

/**
* @name unary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary3d}
*/
setReadOnly( ns, 'unary3d', require( './../../base/unary3d' ) );

/**
* @name unary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary4d}
*/
setReadOnly( ns, 'unary4d', require( './../../base/unary4d' ) );

/**
* @name unary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary5d}
*/
setReadOnly( ns, 'unary5d', require( './../../base/unary5d' ) );

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


// EXPORTS //

module.exports = ns;
