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
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filled3dBy = require( './../../../base/filled3d-by' );
var zeros3d = require( './../../../base/zeros3d' );
var abs = require( '@stdlib/math/base/special/abs' );
var unary3dBy = require( './../lib' );

function accessor( v ) {
	// Randomly determine whether a value should be considered "missing":
	return ( bernoulli( 0.5 ) > 0 ) ? v : void 0;
}

var shape = [ 3, 3, 3 ];

var x = filled3dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = zeros3d( shape );
console.log( y );

unary3dBy( [ x, y ], shape, abs, accessor );
console.log( y );
