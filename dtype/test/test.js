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

var tape = require( 'tape' );
var dtypes = require( '@stdlib/array/dtypes' );
var ctors = require( '@stdlib/array/ctors' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var dtype = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtype, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the data type for an input array', function test( t ) {
	var DTYPES;
	var ctor;
	var arr;
	var dt;
	var i;

	DTYPES = dtypes();

	for ( i = 0; i < DTYPES.length; i++ ) {
		ctor = ctors( DTYPES[ i ] );
		arr = new ctor( 10 );
		dt = dtype( arr );
		t.strictEqual( dt, DTYPES[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function does not support array-like objects', function test( t ) {
	var arr;
	var dt;

	arr = {
		'length': 10
	};
	dt = dtype( arr );
	t.strictEqual( dt, null, 'returns expected value' );
	t.end();
});

tape( 'the function returns `null` if provided a Node.js Buffer', function test( t ) {
	var buf;
	var dt;

	buf = allocUnsafe( 10 );
	dt = dtype( buf );
	t.strictEqual( dt, null, 'returns expected value' );
	t.end();
});

tape( 'if provided an argument having an unknown/unsupported data type, the function returns `null`', function test( t ) {
	var buffers;
	var i;

	buffers = [
		'beep',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		{},
		function noop() {}
	];
	for ( i = 0; i < buffers.length; i++ ) {
		t.strictEqual( dtype( buffers[i] ), null, 'returns expected value for ' + buffers[ i ] );
	}
	t.end();
});
