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

var papply = require( '@stdlib/utils/papply' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filled3dBy = require( './../../../base/filled3d-by' );
var ternary3d = require( './../../../base/ternary3d' );
var zeros3d = require( './../../../base/zeros3d' );
var at3d = require( './../lib' );

var shape = [ 3, 3, 3 ];

// Define a nested input array:
var x = filled3dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

// Define arrays containing random index values:
var i0 = filled3dBy( shape, discreteUniform( -shape[0], shape[0]-1 ) );
console.log( i0 );

var i1 = filled3dBy( shape, discreteUniform( -shape[1], shape[1]-1 ) );
console.log( i1 );

var i2 = filled3dBy( shape, discreteUniform( -shape[2], shape[2]-1 ) );
console.log( i2 );

// Define an output array:
var out = zeros3d( shape );
console.log( out );

// Fill the output array with randomly selected values from the input array:
ternary3d( [ i0, i1, i2, out ], shape, papply( at3d, x ) );
console.log( out );
