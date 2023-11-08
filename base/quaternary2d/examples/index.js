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
var filled2dBy = require( './../../../base/filled2d-by' );
var zeros2d = require( './../../../base/zeros2d' );
var quaternary2d = require( './../lib' );

function add( x, y, z, w ) {
	return x + y + z + w;
}

var shape = [ 3, 3 ];

var x = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var z = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( z );

var w = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( w );

var out = zeros2d( shape );
console.log( out );

quaternary2d( [ x, y, z, w, out ], shape, add );
console.log( out );
