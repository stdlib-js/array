/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var linspace = require( './../../../base/linspace' );
var nCartesianProduct = require( './../lib' );

var x1 = linspace( 0, 5, 6 );
var x2 = linspace( 10, 15, 6 );
var x3 = linspace( 20, 25, 6 );

var out = nCartesianProduct( x1, x2, x3 );
console.log( out );
// => [ [ 0, 10, 20 ], [ 0, 10, 21 ], ... ]
