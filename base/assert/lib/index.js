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


// EXPORTS //

module.exports = ns;