/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var filledBy = require( './../../../base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var linspace = require( './../../../base/linspace' );
var take2 = require( './../lib' );

// Generate linearly spaced arrays:
var x = linspace( 0, 100, 11 );
console.log( x );

var y = linspace( 100, 200, 11 );
console.log( y );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, x.length-1 ) );
console.log( indices );

// Take a random sample of elements from `x` and `y`:
var out = take2( x, y, indices );
console.log( out );
