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
* Apply a binary callback to elements in two two-dimensional nested input arrays according to elements in a two-dimensional nested mask array and assign results to elements in a two-dimensional nested output array.
*
* @module @stdlib/array/base/mskbinary2d
*
* @example
* var ones2d = require( '@stdlib/array/base/ones2d' );
* var zeros2d = require( '@stdlib/array/base/zeros2d' );
* var add = require( '@stdlib/number/float64/base/add' );
* var mskbinary2d = require( '@stdlib/array/base/mskbinary2d' );
*
* var shape = [ 2, 2 ];
*
* var x = ones2d( shape );
* var y = ones2d( shape );
* var z = zeros2d( shape );
*
* var mask = [ [ 0, 1 ], [ 0, 0 ] ];
*
* mskbinary2d( [ x, y, mask, z ], shape, add );
*
* console.log( z );
* // => [ [ 2.0, 0.0 ], [ 2.0, 2.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
