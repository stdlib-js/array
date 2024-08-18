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
* Convert a strided array to a non-strided generic array.
*
* @module @stdlib/array/base/from-strided
*
* @example
* var strided2array = require( '@stdlib/array/base/from-strided' );
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array( 3, x, 2, 0 );
* // returns [ 1, 3, 5 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
