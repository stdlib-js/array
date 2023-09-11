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
* Apply a binary callback to elements in two broadcasted input arrays and assign results to elements in a three-dimensional nested output array.
*
* @module @stdlib/array/base/broadcasted-binary3d
*
* @example
* var ones3d = require( '@stdlib/array/base/ones3d' );
* var zeros3d = require( '@stdlib/array/base/zeros3d' );
* var add = require( '@stdlib/math/base/ops/add' );
* var bbinary3d = require( '@stdlib/array/base/broadcasted-binary3d' );
*
* var shapes = [
*     [ 1, 1, 2 ],
*     [ 2, 1, 1 ],
*     [ 2, 2, 2 ]
* ];
*
* var x = ones3d( shapes[ 0 ] );
* var y = ones3d( shapes[ 1 ] );
* var z = zeros3d( shapes[ 2 ] );
*
* bbinary3d( [ x, y, z ], shapes, add );
*
* console.log( z );
* // => [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ], [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
