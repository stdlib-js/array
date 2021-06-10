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
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var dtypes = require( '@stdlib/array/dtypes' );
var pkg = require( './../package.json' ).name;
var safeCasts = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = safeCasts();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::dtype', function benchmark( b ) {
	var out;
	var dt;
	var i;

	dt = dtypes();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = safeCasts( dt[ i%dt.length ] );
		if ( out.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( !isStringArray( out ) ) {
		b.fail( 'should return an array of strings' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
