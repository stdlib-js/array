/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Remove an element from an array.
*
* @module @stdlib/array/base/remove-at
*
* @example
* var removeAt = require( '@stdlib/array/base/remove-at' );
*
* var x = [ 1, 1, 2, 3, 3 ];
*
* var y = removeAt( x, -3 );
* // returns [ 1, 1, 3, 3 ]
*
* var bool = ( x === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
