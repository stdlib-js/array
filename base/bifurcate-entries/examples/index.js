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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var take = require( './../../../base/take-indexed' );
var bifurcateEntries = require( './../lib' );

// Define an initial array of values:
var values = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Sample from the initial array to generate a random collection:
var indices = discreteUniform( 100, 0, values.length-1, {
	'dtype': 'generic'
});
var x = take( values, indices );
// returns [...]

// Randomly assign collection values to groups:
var groups = discreteUniform( x.length, 0, 1, {
	'dtype': 'generic'
});

// Group the values:
var out = bifurcateEntries( x, groups );
// returns [...]

console.log( out );
