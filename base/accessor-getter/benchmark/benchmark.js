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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var isFunction = require( '@stdlib/assert/is-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var filledBy = require( './../../../filled-by' );
var Complex128Array = require( './../../../complex128' );
var Complex64Array = require( './../../../complex64' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var dtype = require( './../../../dtype' );
var pkg = require( './../package.json' ).name;
var getter = require( './../lib' );


// VARIABLES //

var rand = discreteUniform( 0, 127 );


// MAIN //

bench( pkg, function benchmark( b ) {
	var get;
	var dt;
	var i;

	dt = [
		'complex128',
		'complex64',
		'foo'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		get = getter( dt[ i%dt.length ] );
		if ( typeof get !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( get ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=complex128', function benchmark( b ) {
	var arr;
	var buf;
	var get;
	var i;
	var v;

	buf = filledBy( 100, 'float64', rand );
	arr = new Complex128Array( buf.buffer );
	get = getter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnan( real( v ) ) || isnan( imag( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=complex64', function benchmark( b ) {
	var arr;
	var buf;
	var get;
	var i;
	var v;

	buf = filledBy( 100, 'float32', rand );
	arr = new Complex64Array( buf.buffer );
	get = getter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
