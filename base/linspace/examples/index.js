/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var linspace = require( './../lib' );

// Create arrays of varying lengths:
var out = linspace( 0, 10, 10 );
console.log( out );

out = linspace( 0, 10, 11 );
console.log( out );

out = linspace( 0, 1, 21 );
console.log( out );

// Create an array with decremented values:
out = linspace( 10, 0, 11 );
console.log( out );
