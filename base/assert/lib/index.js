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
* @name contains
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/contains}
*/
setReadOnly( ns, 'contains', require( './../../../base/assert/contains' ) );

/**
* @name hasAlmostEqualValues
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/has-almost-equal-values}
*/
setReadOnly( ns, 'hasAlmostEqualValues', require( './../../../base/assert/has-almost-equal-values' ) );

/**
* @name hasEqualValues
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/has-equal-values}
*/
setReadOnly( ns, 'hasEqualValues', require( './../../../base/assert/has-equal-values' ) );

/**
* @name hasEqualValuesIndexed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/has-equal-values-indexed}
*/
setReadOnly( ns, 'hasEqualValuesIndexed', require( './../../../base/assert/has-equal-values-indexed' ) );

/**
* @name hasSameValues
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/has-same-values}
*/
setReadOnly( ns, 'hasSameValues', require( './../../../base/assert/has-same-values' ) );

/**
* @name isAccessorArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-accessor-array}
*/
setReadOnly( ns, 'isAccessorArray', require( './../../../base/assert/is-accessor-array' ) );

/**
* @name isBooleanDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-boolean-data-type}
*/
setReadOnly( ns, 'isBooleanDataType', require( './../../../base/assert/is-boolean-data-type' ) );

/**
* @name isBooleanArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-booleanarray}
*/
setReadOnly( ns, 'isBooleanArray', require( './../../../base/assert/is-booleanarray' ) );

/**
* @name isByteOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-byte-order}
*/
setReadOnly( ns, 'isByteOrder', require( './../../../base/assert/is-byte-order' ) );

/**
* @name isComplexFloatingPointDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-complex-floating-point-data-type}
*/
setReadOnly( ns, 'isComplexFloatingPointDataType', require( './../../../base/assert/is-complex-floating-point-data-type' ) );

/**
* @name isComplexTypedArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-complex-typed-array}
*/
setReadOnly( ns, 'isComplexTypedArray', require( './../../../base/assert/is-complex-typed-array' ) );

/**
* @name isComplex64Array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-complex64array}
*/
setReadOnly( ns, 'isComplex64Array', require( './../../../base/assert/is-complex64array' ) );

/**
* @name isComplex128Array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-complex128array}
*/
setReadOnly( ns, 'isComplex128Array', require( './../../../base/assert/is-complex128array' ) );

/**
* @name isDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-data-type}
*/
setReadOnly( ns, 'isDataType', require( './../../../base/assert/is-data-type' ) );

/**
* @name isFloatingPointDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-floating-point-data-type}
*/
setReadOnly( ns, 'isFloatingPointDataType', require( './../../../base/assert/is-floating-point-data-type' ) );

/**
* @name isIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-integer-data-type}
*/
setReadOnly( ns, 'isIntegerDataType', require( './../../../base/assert/is-integer-data-type' ) );

/**
* @name isMostlySafeDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-mostly-safe-data-type-cast}
*/
setReadOnly( ns, 'isMostlySafeDataTypeCast', require( './../../../base/assert/is-mostly-safe-data-type-cast' ) );

/**
* @name isNumericDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-numeric-data-type}
*/
setReadOnly( ns, 'isNumericDataType', require( './../../../base/assert/is-numeric-data-type' ) );

/**
* @name isRealDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-real-data-type}
*/
setReadOnly( ns, 'isRealDataType', require( './../../../base/assert/is-real-data-type' ) );

/**
* @name isRealFloatingPointDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-real-floating-point-data-type}
*/
setReadOnly( ns, 'isRealFloatingPointDataType', require( './../../../base/assert/is-real-floating-point-data-type' ) );

/**
* @name isSafeDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-safe-data-type-cast}
*/
setReadOnly( ns, 'isSafeDataTypeCast', require( './../../../base/assert/is-safe-data-type-cast' ) );

/**
* @name isSameKindDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-same-kind-data-type-cast}
*/
setReadOnly( ns, 'isSameKindDataTypeCast', require( './../../../base/assert/is-same-kind-data-type-cast' ) );

/**
* @name isSignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-signed-integer-data-type}
*/
setReadOnly( ns, 'isSignedIntegerDataType', require( './../../../base/assert/is-signed-integer-data-type' ) );

/**
* @name isSortedAscending
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-sorted-ascending}
*/
setReadOnly( ns, 'isSortedAscending', require( './../../../base/assert/is-sorted-ascending' ) );

/**
* @name isUnsignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/assert/is-unsigned-integer-data-type}
*/
setReadOnly( ns, 'isUnsignedIntegerDataType', require( './../../../base/assert/is-unsigned-integer-data-type' ) );


// EXPORTS //

module.exports = ns;
