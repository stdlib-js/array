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
var Float64Array = require( './../../../float64' );
var Complex128Array = require( './../../../complex128' );
var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var pkg = require( './../package.json' ).name;
var toAccessorArray = require( './../lib' );


// MAIN //

bench( pkg+'::no_accessor_protocol', function benchmark( b ) {
	var values;
	var o;
	var i;

	values = [
		new Float64Array( 10 ),
		new Float64Array( 10 ),
		[ 1, 2, 3 ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = toAccessorArray( values[ i%values.length ] );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isAccessorArray( o ) ) {
		b.fail( 'should return an accessor array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accessor_protocol', function benchmark( b ) {
	var values;
	var o;
	var i;

	values = [
		new Complex128Array( 10 ),
		new Complex128Array( 10 ),
		new Complex128Array( 10 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = toAccessorArray( values[ i%values.length ] );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isAccessorArray( o ) ) {
		b.fail( 'should return an accessor array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
