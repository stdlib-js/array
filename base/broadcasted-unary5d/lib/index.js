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
* Apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a five-dimensional nested output array.
*
* @module @stdlib/array/base/broadcasted-unary5d
*
* @example
* var ones5d = require( '@stdlib/array/base/ones5d' );
* var zeros5d = require( '@stdlib/array/base/zeros5d' );
* var bunary5d = require( '@stdlib/array/base/broadcasted-unary5d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shapes = [
*     [ 1, 1, 1, 1, 2 ],
*     [ 1, 1, 1, 2, 2 ]
* ];
*
* var x = ones5d( shapes[ 0 ] );
* var y = zeros5d( shapes[ 1 ] );
*
* bunary5d( [ x, y ], shapes, scale );
*
* console.log( y );
* // => [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
