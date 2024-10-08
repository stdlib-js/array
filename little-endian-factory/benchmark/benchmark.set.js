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
var Float64Array = require( './../../float64' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var Float64ArrayLE = factory( 'float64' );


// MAIN //

bench( pkg+'::number:set', function benchmark( b ) {
	var values;
	var arr;
	var N;
	var v;
	var i;

	values = [];
	for ( i = 0; i < 10; i++ ) {
		values.push( i );
	}
	arr = new Float64ArrayLE( values );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.set( values[ (i+1)%N ] );
		if ( typeof v !== 'undefined' ) {
			b.fail( 'should return undefined' );
		}
	}
	b.toc();
	if ( typeof v !== 'undefined' ) {
		b.fail( 'should return undefined' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array:set', function benchmark( b ) {
	var values;
	var arr;
	var N;
	var v;
	var i;

	values = [];
	for ( i = 0; i < 10; i++ ) {
		values.push( i );
	}
	arr = new Float64ArrayLE( values );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.set( [ values[ (i+1)%N ] ] );
		if ( typeof v !== 'undefined' ) {
			b.fail( 'should return undefined' );
		}
	}
	b.toc();
	if ( typeof v !== 'undefined' ) {
		b.fail( 'should return undefined' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array:set', function benchmark( b ) {
	var values;
	var arr;
	var buf;
	var N;
	var v;
	var i;

	values = new Float64Array( 20 );
	N = values.length;
	for ( i = 0; i < N; i++ ) {
		values[ i ] = i;
	}
	arr = new Float64ArrayLE( values );
	buf = new Float64Array( 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf[ 0 ] = values[ i%N ];
		v = arr.set( buf );
		if ( typeof v !== 'undefined' ) {
			b.fail( 'should return undefined' );
		}
	}
	b.toc();
	if ( typeof v !== 'undefined' ) {
		b.fail( 'should return undefined' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
