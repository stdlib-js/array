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
var isArray = require( '@stdlib/assert/is-array' );
var zeroTo = require( './../../../base/zero-to' );
var ones = require( './../../../base/ones' );
var pkg = require( './../package.json' ).name;
var mskfilter = require( './../lib' );


// MAIN //

bench( pkg+'::copy:len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 100 );
	y = ones( x.length );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = mskfilter( x, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
