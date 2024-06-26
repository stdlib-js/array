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
var Float32Array = require( './../../../../float32' );
var Complex64Array = require( './../../../../complex64' );
var BooleanArray = require( './../../../../bool' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isBooleanArray = require( './../lib' );


// MAIN //

bench( pkg+'::array', function benchmark( b ) {
	var bool;
	var obj;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = [ i, i+1 ];
		bool = isBooleanArray( obj );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::boolean_array', function benchmark( b ) {
	var values;
	var bool;
	var obj;
	var N;
	var i;

	values = [
		new BooleanArray( [ true, false ] ),
		new BooleanArray( [ false, true ] )
	];
	N = values.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = values[ i%N ];
		bool = isBooleanArray( obj );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real_typed_array', function benchmark( b ) {
	var values;
	var bool;
	var obj;
	var N;
	var i;

	values = [
		new Float32Array( [ 1.0, 2.0 ] ),
		new Float32Array( [ 3.0, 4.0 ] )
	];
	N = values.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = values[ i%N ];
		bool = isBooleanArray( obj );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex_typed_array', function benchmark( b ) {
	var values;
	var bool;
	var obj;
	var N;
	var i;

	values = [
		new Complex64Array( [ 1.0, 2.0 ] ),
		new Complex64Array( [ 3.0, 4.0 ] )
	];
	N = values.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = values[ i%N ];
		bool = isBooleanArray( obj );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array_like_object', function benchmark( b ) {
	var bool;
	var obj;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {
			'length': 2,
			'0': i,
			'1': i + 1
		};
		bool = isBooleanArray( obj );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
