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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var bernoulli = require( '@stdlib/random/base/bernoulli' ).factory;
var filled5dBy = require( './../../../base/filled5d-by' );
var zeros5d = require( './../../../base/zeros5d' );
var abs = require( '@stdlib/math/base/special/abs' );
var mskunary5d = require( './../lib' );

var shape = [ 1, 2, 1, 3, 3 ];

var x = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var mask = filled5dBy( shape, bernoulli( 0.5 ) );
console.log( mask );

var y = zeros5d( shape );
console.log( y );

mskunary5d( [ x, mask, y ], shape, abs );
console.log( y );
