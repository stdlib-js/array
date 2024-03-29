/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var zeros = require( './../../../base/zeros' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var pkg = require( './../package.json' ).name;
var accessors = require( './../lib' );


// MAIN //

bench( pkg+'::array', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		zeros( 10 ),
		zeros( 10 ),
		zeros( 10 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = accessors( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real_typed_array', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Float64Array( 10 ),
		new Float64Array( 10 ),
		new Float64Array( 10 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = accessors( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex_typed_array', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Complex128Array( 10 ),
		new Complex128Array( 10 ),
		new Complex128Array( 10 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = accessors( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array_like', function benchmark( b ) {
	var arr;
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = {
			'length': i
		};
		out = accessors( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
