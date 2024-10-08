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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex128Array = require( './../../../complex128' );
var Complex64Array = require( './../../../complex64' );
var BooleanArray = require( './../../../bool' );
var Float64Array = require( './../../../float64' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var cusome = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cusome, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function cumulatively tests whether at least `n` array elements are truthy (generic)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ false, false, false, true, false ];
	y = [ false, true, false, true, false ];

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ false, false, false, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ false, false, true, false, false ];
	y = [ false, null, false, null, true, null, true, null, true, null ];

	actual = cusome( x, 1, y, 2, 0 );
	expected = [ false, null, false, null, true, null, true, null, true, null ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ false, false, true, false, false ];
	y = [ false, false, false, true, true, true ];

	actual = cusome( x, 2, y, 1, 1 );
	expected = [ false, false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [];
	y = [ false, false, false, false, false ];

	actual = cusome( x, 2, y, 1, 0 );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ false ];
	y = [ false, false ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least `n` array elements are truthy (typed)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 0.0, 1.0, 0.0, 1.0 ] );
	y = [ false, true, false, true, false ];

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ true, true, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0, 0.0 ] );
	y = [ false, null, false, null, false, null, false, null, false, null ];

	actual = cusome( x, 2, y, 2, 0 );
	expected = [
		false, null, false, null, false, null, false, null, false, null
	];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0, 0.0 ] );
	y = [ false, false, false, true, true, true ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, false, false, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [] );
	y = [ false, false, false, false, false ];

	actual = cusome( x, 2, y, 1, 0 );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0 ] );
	y = [ false, false ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least `n` array elements are truthy (boolean)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new BooleanArray( [ true, true, true, true, true ] );
	y = [ false, true, false, true, false ];

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ true, true, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ false, false, true, false, false ] );
	y = [ false, null, false, null, false, null, false, null, false, null ];

	actual = cusome( x, 2, y, 2, 0 );
	expected = [ false, null, false, null, false, null, false, null, false, null ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ false, false, true, false, false ] );
	y = [ false, false, false, true, true, true ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, false, false, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [] );
	y = [ false, false, false, false, false ];

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ true ] );
	y = [ false, false ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least `n` array elements are truthy (complex128)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new Complex128Array([ 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0 ]);
	y = [ false, true, false, true, false ];

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ true, true, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array([ 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ]);
	y = [ false, null, false, null, false, null, false, null, false, null ];

	actual = cusome( x, 2, y, 2, 0 );
	expected = [
		false, null, false, null, false, null, false, null, false, null
	];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array([
		0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0
	]);
	y = [ false, false, false, true, true, true ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, false, false, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [] );
	y = [ false, false, false, false, false ];

	actual = cusome( x, 2, y, 1, 0 );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 1.0 ] );
	y = [ false, false ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least `n` array elements are truthy (complex64)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new Complex64Array([
		0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0
	]);
	y = [ false, true, false, true, false ];

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ true, true, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array([
		0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0
	]);
	y = [ false, null, false, null, false, null, false, null, false, null ];

	actual = cusome( x, 2, y, 2, 0 );
	expected = [
		false, null, false, null, false, null, false, null, false, null
	];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array([
		0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0
	]);
	y = [ false, false, false, true, true, true ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, false, false, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array( [] );
	y = [ false, false, false, false, false ];

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 1.0 ] );
	y = [ false, false ];

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least `n` array elements are truthy (accessor)', function test( t ) {
	var expected;
	var actual;
	var ybuf;
	var x;
	var y;

	x = toAccessorArray( [ true, false, true, false, true ] );
	ybuf = [ false, true, false, true, false ];
	y = toAccessorArray( ybuf );

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ true, true, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [ false, false, true, false, false ] );
	ybuf = [ false, null, false, null, false, null, false, null, false, null ];
	y = toAccessorArray( ybuf );

	actual = cusome( x, 2, y, 2, 0 );
	expected = [
		false, null, false, null, false, null, false, null, false, null
	];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [ false, false, true, false, false ] );
	ybuf = [ false, false, false, false, false, false ];
	y = toAccessorArray( ybuf );

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, false, false, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [ true, false, false, false, false ] );
	ybuf = [ false, false, false, false, false ];
	y = toAccessorArray( ybuf );

	actual = cusome( x, 1, y, 1, 0 );
	expected = [ true, true, true, true, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [] );
	ybuf = [ false, false, false, false, false ];
	y = toAccessorArray( ybuf );

	actual = cusome( x, 2, y, 1, 0 );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [ true ] );
	ybuf = [ false, false ];
	y = toAccessorArray( ybuf );

	actual = cusome( x, 1, y, 1, 1 );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});
