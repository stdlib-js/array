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
var isCollection = require( '@stdlib/assert/is-collection' );
var hasProxySupport = require( '@stdlib/assert/has-proxy-support' );
var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;
var zeroTo = require( './../../zero-to' );
var zeros = require( './../../zeros' );
var filledarray = require( './../../filled' );
var Slice = require( '@stdlib/slice/ctor' );
var pkg = require( './../package.json' ).name;
var array2fancy = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasProxySupport()
};


// MAIN //

bench( pkg+'::get,positive_integers:len=1', function benchmark( b ) {
	var x;
	var v;
	var i;

	x = array2fancy( zeroTo( 100, 'generic' ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = x[ i%x.length ];
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

bench( pkg+'::get,negative_integers:len=1', opts, function benchmark( b ) {
	var x;
	var v;
	var i;

	x = array2fancy( zeroTo( 100, 'generic' ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = x[ -(i%x.length) ];
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

bench( pkg+'::get,slice:len=1', opts, function benchmark( b ) {
	var values;
	var x;
	var v;
	var i;

	x = array2fancy( zeroTo( 100, 'generic' ) );
	values = [
		new Slice( 0, 1 ),
		new Slice( 1, 2 ),
		new Slice( 2, 3 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = x[ values[ i%values.length ] ];
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isCollection( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get,subsequence:len=1', opts, function benchmark( b ) {
	var values;
	var x;
	var v;
	var i;

	x = array2fancy( zeroTo( 100, 'generic' ) );
	values = [
		':1',
		':1:',
		'0:1:1'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = x[ values[ i%values.length ] ];
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isCollection( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get,integer_array:len=1', opts, function benchmark( b ) {
	var values;
	var opts;
	var x;
	var v;
	var i;

	x = array2fancy( zeroTo( 100, 'generic' ) );

	opts = {
		'persist': true
	};
	values = [
		array2fancy.idx( [ 1 ], opts ),
		array2fancy.idx( [ 2 ], opts ),
		array2fancy.idx( [ 3 ], opts )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = x[ values[ i%values.length ] ];
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isCollection( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get,mask_array:len=1', opts, function benchmark( b ) {
	var values;
	var opts;
	var x;
	var v;
	var i;

	x = array2fancy( zeros( 100, 'uint8' ) );

	opts = {
		'persist': true
	};
	values = [
		array2fancy.idx( [ 1 ], opts ),
		array2fancy.idx( [ 2 ], opts ),
		array2fancy.idx( [ 3 ], opts )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = x[ values[ i%values.length ] ];
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isCollection( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get,boolean_array:len=1', opts, function benchmark( b ) {
	var values;
	var opts;
	var x;
	var v;
	var i;

	x = array2fancy( filledarray( true, 100, 'generic' ) );

	opts = {
		'persist': true
	};
	values = [
		array2fancy.idx( [ 1 ], opts ),
		array2fancy.idx( [ 2 ], opts ),
		array2fancy.idx( [ 3 ], opts )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = x[ values[ i%values.length ] ];
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isCollection( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
