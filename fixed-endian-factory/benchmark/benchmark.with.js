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

// MODULES //

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var Float64ArrayFE = factory( 'float64' );


// MAIN //

bench( pkg+':with', function benchmark( b ) {
	var values;
	var out;
	var arr;
	var i;

	values = [
		1.0,
		2.0,
		3.0
	];
	arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 2.0, 1.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.with( i % arr.length, values[ i % values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !( out instanceof Float64ArrayFE ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
