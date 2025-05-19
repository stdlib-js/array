/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var onesnd = require( './../../../base/onesnd' );
var pkg = require( './../package.json' ).name;
var reshape = require( './../lib' );


// MAIN //

bench( pkg+':ndims=2,size=100,lexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = onesnd( [ 10, 10 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reshape( x, [ 10, 10 ], [ 1, 100 ], false );
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

bench( pkg+':ndims=2,size=100,colexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = onesnd( [ 10, 10 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reshape( x, [ 10, 10 ], [ 1, 100 ], true );
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

bench( pkg+':ndims=3,size=100,lexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = onesnd( [ 4, 5, 5 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reshape( x, [ 4, 5, 5 ], [ 1, 1, 100 ], false );
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

bench( pkg+':ndims=3,size=100,colexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = onesnd( [ 4, 5, 5 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reshape( x, [ 4, 5, 5 ], [ 1, 1, 100 ], true );
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

bench( pkg+':ndims=4,size=100,lexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = onesnd( [ 5, 2, 5, 2 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reshape( x, [ 5, 2, 5, 2 ], [ 1, 1, 1, 100 ], false );
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

bench( pkg+':ndims=4,size=100,colexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = onesnd( [ 5, 2, 5, 2 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reshape( x, [ 5, 2, 5, 2 ], [ 1, 1, 1, 100 ], true );
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

bench( pkg+':ndims=5,size=100,lexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = onesnd( [ 5, 2, 1, 5, 2 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reshape( x, [ 5, 2, 1, 5, 2 ], [ 1, 1, 1, 1, 100 ], false );
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

bench( pkg+':ndims=5,size=100,colexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = onesnd( [ 5, 2, 1, 5, 2 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = reshape( x, [ 5, 2, 1, 5, 2 ], [ 1, 1, 1, 1, 100 ], true );
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
