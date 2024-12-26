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
var filled4dBy = require( './../../../base/filled4d-by' );
var zeros4d = require( './../../../base/zeros4d' );
var add = require( '@stdlib/math/base/ops/add' );
var mskbinary4d = require( './../lib' );

var shape = [ 2, 1, 3, 3 ];

var x = filled4dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filled4dBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var mask = filled4dBy( shape, bernoulli( 0.5 ) );
console.log( mask );

var z = zeros4d( shape );
console.log( z );

mskbinary4d( [ x, y, mask, z ], shape, add );
console.log( z );
