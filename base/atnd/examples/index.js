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
var filled2dBy = require( './../../../base/filled2d-by' );
var binary2d = require( './../../../base/binary2d' );
var zeros2d = require( './../../../base/zeros2d' );
var atnd = require( './../lib' );

var shape = [ 5, 5 ];

// Define a nested input array:
var x = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

// Define arrays containing random index values:
var i0 = filled2dBy( shape, discreteUniform( -shape[0], shape[0]-1 ) );
console.log( i0 );

var i1 = filled2dBy( shape, discreteUniform( -shape[1], shape[1]-1 ) );
console.log( i1 );

// Define an output array:
var out = zeros2d( shape );
console.log( out );

// Fill the output array with randomly selected values from the input array:
binary2d( [ i0, i1, out ], shape, papply( atnd, x ) );
console.log( out );
