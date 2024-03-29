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
var filled5dBy = require( './../../../base/filled5d-by' );
var quinary5d = require( './../../../base/quinary5d' );
var zeros5d = require( './../../../base/zeros5d' );
var at5d = require( './../lib' );

var shape = [ 2, 2, 2, 2, 2 ];

// Define a nested input array:
var x = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

// Define arrays containing random index values:
var i0 = filled5dBy( shape, discreteUniform( -shape[0], shape[0]-1 ) );
console.log( i0 );

var i1 = filled5dBy( shape, discreteUniform( -shape[1], shape[1]-1 ) );
console.log( i1 );

var i2 = filled5dBy( shape, discreteUniform( -shape[2], shape[2]-1 ) );
console.log( i2 );

var i3 = filled5dBy( shape, discreteUniform( -shape[3], shape[3]-1 ) );
console.log( i3 );

var i4 = filled5dBy( shape, discreteUniform( -shape[4], shape[4]-1 ) );
console.log( i4 );

// Define an output array:
var out = zeros5d( shape );
console.log( out );

// Fill the output array with randomly selected values from the input array:
quinary5d( [ i0, i1, i2, i3, i4, out ], shape, papply( at5d, x ) );
console.log( out );
