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

var tape = require( 'tape' );
var hasProxySupport = require( '@stdlib/assert/has-proxy-support' );
var Slice = require( '@stdlib/slice/ctor' );
var Int32Array = require( './../../int32' );
var array2fancy = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasProxySupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2fancy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array-like object supporting slices (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var s;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	s = new Slice();
	expected = [ 1, 2, 3, 4 ];
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( 2 );
	expected = [ 1, 2 ];
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( 1, 3 );
	expected = [ 2, 3 ];
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( null, null, 2 );
	expected = [ 1, 3 ];
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -1, null, -2 );
	expected = [ 4, 2 ];
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting slices (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var s;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	s = new Slice();
	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( 2 );
	expected = new Int32Array( [ 1, 2 ] );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( 1, 3 );
	expected = new Int32Array( [ 2, 3 ] );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( null, null, 2 );
	expected = new Int32Array( [ 1, 3 ] );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -1, null, -2 );
	expected = new Int32Array( [ 4, 2 ] );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'by default, the function returns an array-like object which returns an empty array when provided a slice which is out-of-bounds (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var s;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [];

	s = new Slice( 10, 20 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -20, -10 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -20 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'by default, the function returns an array-like object which returns an empty array when provided a slice which is out-of-bounds (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var s;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [] );

	s = new Slice( 10, 20 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -20, -10 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -20 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which returns an empty array when provided a slice which is out-of-bounds (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var s;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': false
	});

	expected = [];

	s = new Slice( 10, 20 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -20, -10 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -20 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which returns an empty array when provided a slice which is out-of-bounds (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var s;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': false
	});

	expected = new Int32Array( [] );

	s = new Slice( 10, 20 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -20, -10 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	s = new Slice( -20 );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided a slice which is out-of-bounds (generic)', opts, function test( t ) {
	var x;
	var y;
	var s;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		s = new Slice( x.length+i, x.length+10 );
		t.throws( badValue( s ), RangeError, 'throws an error when provided ' + s );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided a slice which is out-of-bounds (typed)', opts, function test( t ) {
	var x;
	var y;
	var s;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		s = new Slice( x.length+i, x.length+10 );
		t.throws( badValue( s ), RangeError, 'throws an error when provided ' + s );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an array-like object supporting slices which can themselves support slices (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var z;
	var s;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	s = new Slice();
	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = y[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	s = new Slice( null, null, 2 );
	expected = new Int32Array( [ 1, 3 ] );
	actual = z[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.notEqual( actual, z, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	s = new Slice( null, null, -1 );
	expected = new Int32Array( [ 3, 1 ] );
	actual = z[ s ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.notEqual( actual, z, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting slices which can themselves support slices (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var z;
	var s;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	s = new Slice();
	expected = [ 1, 2, 3, 4 ];
	actual = y[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	s = new Slice( null, null, 2 );
	expected = [ 1, 3 ];
	actual = z[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.notEqual( actual, z, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	s = new Slice( null, null, -1 );
	expected = [ 3, 1 ];
	actual = z[ s ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.notEqual( actual, z, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
