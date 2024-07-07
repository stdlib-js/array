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

/**
* Return an accessor function for setting an element in an indexed array-like object.
*
* @module @stdlib/array/base/setter
*
* @example
* var dtype = require( '@stdlib/array/dtype' );
* var set = require( '@stdlib/array/base/setter' );
*
* var arr = [ 1, 2, 3, 4 ];
*
* var set = setter( dtype( arr ) );
* set( arr, 2, 10 );
*
* var v = arr[ 2 ];
* // returns 10
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
