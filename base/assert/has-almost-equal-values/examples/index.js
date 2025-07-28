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

var uniform = require( '@stdlib/random/array/uniform' );
var Complex128Array = require( './../../../../complex128' );
var hasAlmostEqualValues = require( './../lib' );

var buf = uniform( 10, 0, 10 );
// returns <Float64Array>

var x = new Complex128Array( buf );
// returns <Complex128Array>

var y = new Complex128Array( buf );
// returns <Complex128Array>

var out = hasAlmostEqualValues( x, y, 1 );
// returns true

console.log( out );
// => true
