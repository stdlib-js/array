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

var sort2hp = require( '@stdlib/blas/ext/base/gsort2hp' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeroTo = require( './../lib' );

// Generate an array of random numbers:
var opts = {
	'dtype': 'generic'
};
var x = discreteUniform( 10, 100, 200, opts );

// Generate an array of indices:
var idx = zeroTo( x.length, opts.dtype );

// Create a temporary array to avoid mutation:
var tmp = x.slice();

// Sort the index array according to the sort order of `x`:
sort2hp( x.length, 1, tmp, 1, idx, 1 );

console.log( x );
console.log( idx );
