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

var filled2dBy = require( './../../../base/filled2d-by' );
var filledBy = require( './../../../base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var take2d = require( './../lib' );

// Generate a random array:
var shape = [ 5, 5 ];
var x = filled2dBy( shape, discreteUniform.factory( 0, 100 ) );
console.log( x );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, shape[1]-1 ) );
console.log( indices );

// Take a random sample of elements from `x`:
var y = take2d( x, indices, 1, 'throw' );
console.log( y );
