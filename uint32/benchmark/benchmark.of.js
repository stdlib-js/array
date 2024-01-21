/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var pkg = require( './../package.json' ).name;
var Uint32Array = require( './../lib' );


// MAIN //

bench( pkg+':of', function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Uint32Array.of( i, 2 );
		if ( arr.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( !isUint32Array( arr ) ) {
		b.fail( 'should return a Uint32Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});