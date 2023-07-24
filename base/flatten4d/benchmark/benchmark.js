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

// MODULES //

var bench = require( '@stdlib/bench' );
var isArray = require( '@stdlib/assert/is-array' );
var zeroTo = require( './../../../base/zero-to' );
var filled = require( './../../../base/filled' );
var pkg = require( './../package.json' ).name;
var flatten4d = require( './../lib' );


// MAIN //

bench( pkg+':size=144,lexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = filled( filled( filled( zeroTo( 3 ), 4 ), 3 ), 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = flatten4d( x, [ 4, 3, 4, 3 ], false );
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

bench( pkg+':size=144,colexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = filled( filled( filled( zeroTo( 3 ), 4 ), 3 ), 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = flatten4d( x, [ 4, 3, 4, 3 ], true );
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
