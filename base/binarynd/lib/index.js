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
* Apply a binary callback to elements in an n-dimensional nested input array and assign results to elements in an n-dimensional nested output array.
*
* @module @stdlib/array/base/binarynd
*
* @example
* var add = require( '@stdlib/math/base/ops/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
* var binarynd = require( '@stdlib/array/base/binarynd' );
*
* var shape = [ 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
