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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledndBy = require( './../../../base/fillednd-by' );
var zerosnd = require( './../../../base/zerosnd' );
var abs = require( '@stdlib/math/base/special/abs' );
var unarynd = require( './../lib' );

var shape = [ 3, 3 ];

var x = filledndBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = zerosnd( shape );
console.log( y );

unarynd( [ x, y ], shape, abs );
console.log( y );

shape = [ 3, 3, 3 ];

x = filledndBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

y = zerosnd( shape );
console.log( y );

unarynd( [ x, y ], shape, abs );
console.log( y );
