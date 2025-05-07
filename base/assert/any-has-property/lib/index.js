/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/**
* Test whether at least one element in a provided array has a specified property, either own or inherited.
*
* @module @stdlib/array/base/assert/any-has-property
*
* @example
* var anyHasProp = require( '@stdlib/array/base/assert/any-has-property' );
*
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
* var bool = anyHasProp( [ o1, o2, o3 ], 'b' );
* // returns true
*
* bool = anyHasProp( [ o1, o2, o3 ], 'd' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
