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
var Complex128Array = require( './../../../complex128' );
var BooleanArray = require( './../../../bool' );
var Int32Array = require( './../../../int32' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var countTruthy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof countTruthy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function counts the number of truthy values (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 0, 1, 0, 1, 2 ];
	expected = 3;
	actual = countTruthy( x );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of truthy values (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ 0, 1, 0, 1, 2 ] );
	expected = 3;
	actual = countTruthy( x );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of truthy values (real typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 0, 1, 0, 1, 2 ] );
	expected = 3;
	actual = countTruthy( x );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of truthy values (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array( [ 0.0, 0.0, 1.0, 0.0, 3.0, 4.0, 0.0, 5.0 ] );
	expected = 3;
	actual = countTruthy( x );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of truthy values (boolean typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new BooleanArray( [ true, true, false, true ] );
	expected = 3;
	actual = countTruthy( x );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns zero if provided an array of length `0`', function test( t ) {
	var expected;
	var actual;
	var x;

	expected = 0;

	x = [];
	actual = countTruthy( x );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [] );
	actual = countTruthy( x );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [] );
	actual = countTruthy( x );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [] );
	actual = countTruthy( x );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [] );
	actual = countTruthy( x );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
