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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var randi = require( '@stdlib/random/base/discrete-uniform' );
var removeAt = require( './../lib' );

// Create an array of random numbers:
var x = discreteUniform( 10, 0, 5, {
	'dtype': 'generic'
});
// returns [...]

console.log( x );

// Remove a random element:
var y = removeAt( x, randi( 0, x.length-1 ) );
// returns [...]

console.log( y );
