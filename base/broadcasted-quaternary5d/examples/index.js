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
var filled5dBy = require( './../../../base/filled5d-by' );
var zeros5d = require( './../../../base/zeros5d' );
var add = require( '@stdlib/math/base/ops/add4' );
var bquaternary5d = require( './../lib' );

var shapes = [
	[ 1, 1, 1, 3, 1 ],
	[ 1, 3, 1, 1, 1 ],
	[ 1, 1, 1, 1, 3 ],
	[ 1, 1, 3, 1, 1 ],
	[ 1, 3, 3, 3, 3 ]
];

var x = filled5dBy( shapes[ 0 ], discreteUniform( -100, 100 ) );
console.log( x );

var y = filled5dBy( shapes[ 1 ], discreteUniform( -100, 100 ) );
console.log( y );

var z = filled5dBy( shapes[ 2 ], discreteUniform( -100, 100 ) );
console.log( z );

var w = filled5dBy( shapes[ 3 ], discreteUniform( -100, 100 ) );
console.log( w );

var out = zeros5d( shapes[ 4 ] );
console.log( z );

bquaternary5d( [ x, y, z, w, out ], shapes, add );
console.log( out );