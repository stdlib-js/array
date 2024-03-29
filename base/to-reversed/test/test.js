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
var AccessorArray = require( './../../../base/accessor' );
var Float64Array = require( './../../../float64' );
var Int32Array = require( './../../../int32' );
var isArray = require( '@stdlib/assert/is-array' );
var toReversed = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toReversed, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function reverses an array-like object (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3 ];
	expected = [ 3, 2, 1 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 2, 3 ];
	expected = [ 3, 2 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 2 ];
	expected = [ 2 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [];
	expected = [];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reverses an array-like object (float64)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 3.0, 2.0, 1.0 ] );
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 2.0, 3.0 ] );
	expected = new Float64Array( [ 3.0, 2.0 ] );
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 2.0 ] );
	expected = new Float64Array( [ 2.0 ] );
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [] );
	expected = new Float64Array( [] );
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reverses an array-like object (int32)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 3, 2, 1 ] );
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2 ] );
	expected = new Int32Array( [ 2, 1 ] );
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1 ] );
	expected = new Int32Array( [ 1 ] );
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [] );
	expected = new Int32Array( [] );
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reverses an array-like object (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new AccessorArray( [ 1, 2, 3, 4 ] );
	expected = [ 4, 3, 2, 1 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 1, 2, 3 ] );
	expected = [ 3, 2, 1 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 2, 3 ] );
	expected = [ 3, 2 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 3 ] );
	expected = [ 3 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [] );
	expected = [];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reverses an array-like object (array-like)', function test( t ) {
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
	expected = [ 4, 3, 2, 1 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	expected = [ 3, 2, 1 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 2,
		'0': 1,
		'1': 2
	};
	expected = [ 2, 1 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 1,
		'0': 1
	};
	expected = [ 1 ];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 0
	};
	expected = [];
	actual = toReversed( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
