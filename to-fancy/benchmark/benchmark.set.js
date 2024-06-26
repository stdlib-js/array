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
var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;
var hasProxySupport = require( '@stdlib/assert/has-proxy-support' );
var zeroTo = require( './../../zero-to' );
var Slice = require( '@stdlib/slice/ctor' );
var pkg = require( './../package.json' ).name;
var array2fancy = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasProxySupport()
};


// MAIN //

bench( pkg+'::set,positive_integers:len=1', function benchmark( b ) {
	var base;
	var x;
	var v;
	var i;
	var j;

	base = zeroTo( 100, 'generic' );
	x = array2fancy( base );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % x.length;
		x[ j ] = i * 2;
		v = base[ j ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,negative_integers:len=1', opts, function benchmark( b ) {
	var base;
	var x;
	var v;
	var i;
	var j;

	base = zeroTo( 100, 'generic' );
	x = array2fancy( base );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = -( i%x.length ) - 1;
		x[ j ] = i * 2;
		v = base[ base.length+j ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,slice:len=1', opts, function benchmark( b ) {
	var values;
	var base;
	var x;
	var s;
	var v;
	var i;

	base = zeroTo( 100, 'generic' );
	x = array2fancy( base );
	values = [
		new Slice( 0, 1 ),
		new Slice( 1, 2 ),
		new Slice( 2, 3 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s = values[ i%values.length ];
		x[ s ] = i * 2;
		v = base[ s.start ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,subsequence:len=1', opts, function benchmark( b ) {
	var values;
	var base;
	var x;
	var v;
	var i;

	base = zeroTo( 100, 'generic' );
	x = array2fancy( base );
	values = [
		':1',
		':1:',
		'0:1:1'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ values[ i%values.length ] ] = i * 2;
		v = base[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,integer_array:len=1', opts, function benchmark( b ) {
	var values;
	var base;
	var opts;
	var idx;
	var x;
	var v;
	var i;

	base = zeroTo( 100, 'generic' );
	x = array2fancy( base );

	opts = {
		'persist': true
	};
	values = [
		array2fancy.idx( [ 0 ], opts ),
		array2fancy.idx( [ 1 ], opts ),
		array2fancy.idx( [ 2 ], opts )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = values[ i%values.length ];
		x[ idx ] = i * 2;
		v = base[ i%3 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
