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

var tape = require( 'tape' );
var AccessorArray = require( './../../../base/accessor' );
var Float64Array = require( './../../../float64' );
var Int32Array = require( './../../../int32' );
var fill = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fill, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills an array-like object (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3 ];
	expected = [ 4, 4, 4 ];
	actual = fill( x, 4, 0, x.length );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 5, 5 ];
	actual = fill( x, 5, 1, x.length );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 5, 3 ];
	actual = fill( x, 5, 1, x.length-1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	actual = fill( x, 5, 1, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array-like object (float64)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );
	actual = fill( x, 5.0, 0, x.length );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 5.0, 5.0 ] );
	actual = fill( x, 5.0, 1, x.length );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 5.0, 3.0 ] );
	actual = fill( x, 5.0, 1, -1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	actual = fill( x, 5.0, 1, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array-like object (int32)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 5, 5, 5 ] );
	actual = fill( x, 5, 0, x.length );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 5, 5, 3 ] );
	actual = fill( x, 5, 0, x.length-1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 5, 2, 3 ] );
	actual = fill( x, 5, 0, x.length-2 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 1, 2, 3 ] );
	actual = fill( x, 5, 0, x.length-3 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array-like object (accessors)', function test( t ) {
	var expected;
	var actual;
	var obj;
	var x;

	x = [ 1, 2, 3, 4 ];
	expected = [ 5, 5, 5, 5 ];

	obj = new AccessorArray( x );
	actual = fill( obj, 5, 0, x.length );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 5, 5, 5, 4 ];

	obj = new AccessorArray( x );
	actual = fill( obj, 5, 0, x.length-1 );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 5, 5, 4 ];

	obj = new AccessorArray( x );
	actual = fill( obj, 5, 1, x.length-1 );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 2, 5, 4 ];

	obj = new AccessorArray( x );
	actual = fill( obj, 5, 2, x.length-1 );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 2, 3, 4 ];

	obj = new AccessorArray( x );
	actual = fill( obj, 5, 3, x.length-1 );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array-like object (array-like)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 5,
		'1': 5,
		'2': 5,
		'3': 5
	};
	actual = fill( x, 5, 0, x.length );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 5,
		'1': 5,
		'2': 5,
		'3': 4
	};
	actual = fill( x, 5, 0, x.length-1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 1,
		'1': 5,
		'2': 5,
		'3': 4
	};
	actual = fill( x, 5, 1, x.length-1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 5,
		'3': 4
	};
	actual = fill( x, 5, 2, x.length-1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	actual = fill( x, 5, 3, x.length-1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an array of length `0`', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = fill( [], 5, 0, 0 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
