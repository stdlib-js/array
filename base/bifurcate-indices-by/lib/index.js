/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Split element indices into two groups according to an predicate function.
*
* @module @stdlib/array/base/bifurcate-indices-by
*
* @example
* var bifurcateIndicesBy = require( '@stdlib/array/base/bifurcate-indices-by' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
*
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = bifurcateIndicesBy( x, predicate );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
