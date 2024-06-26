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
var Int32Array = require( './../../../int32' );
var Uint8Array = require( './../../../uint8' );
var BooleanArray = require( './../../../bool' );
var Complex64Array = require( './../../../complex64' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var isAccessorArray = require( '@stdlib/assert/is-accessor-array' );
var reinterpretBool = require( '@stdlib/strided/base/reinterpret-boolean' );
var zeros = require( './../../../zeros' );
var where = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof where, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function takes elements from one of two arrays (generic)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = [ 1 ];
	y = [ 5 ];

	out = zeros( 1, 'generic' );
	condition = [ true ];
	actual = where( condition, x, y, out, 1, 0 );
	expected = [ 1 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 2, 'generic' );
	condition = [ false ];
	actual = where( condition, x, y, out, 1, 1 );
	expected = [ 0, 5 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = [ 5, 6, 7, 8 ];

	out = zeros( 4, 'generic' );
	condition = [ true, false, true, false ];
	actual = where( condition, x, y, out, 1, 0 );
	expected = [ 1, 6, 3, 8 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = [ true, true, true, true ];
	actual = where( condition, x, y, out, 1, 0 );
	expected = [ 1, 2, 3, 4 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 8, 'generic' );
	condition = [ false, false, false, false ];
	actual = where( condition, x, y, out, 2, 0 );
	expected = [ 5, 0, 6, 0, 7, 0, 8, 0 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (generic, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = [ 5, 6, 7, 8 ];

	out = zeros( 4, 'generic' );
	condition = [ true, false, true, false ];
	actual = where( condition, x, [ 5 ], out, 1, 0 );
	expected = [ 1, 5, 3, 5 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = [ true, false, true, false ];
	actual = where( condition, [ -1 ], y, out, 1, 0 );
	expected = [ -1, 6, -1, 8 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 8, 'generic' );
	condition = [ true ];
	actual = where( condition, x, y, out, 2, 1 );
	expected = [ 0, 1, 0, 2, 0, 3, 0, 4 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = [ false ];
	actual = where( condition, x, y, out, -1, 3 );
	expected = [ 8, 7, 6, 5 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = [ true ];
	actual = where( condition, [ -1 ], y, out, 1, 0 );
	expected = [ -1, -1, -1, -1 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = [ false ];
	actual = where( condition, x, [ 5 ], out, 1, 0 );
	expected = [ 5, 5, 5, 5 ];
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (accessors)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = toAccessorArray( [ 1 ] );
	y = toAccessorArray( [ 5 ] );

	out = zeros( 1, 'generic' );
	condition = toAccessorArray( [ true ] );
	actual = where( condition, x, y, toAccessorArray( out ), 1, 0 );
	expected = [ 1 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = zeros( 2, 'generic' );
	condition = toAccessorArray( [ false ] );
	actual = where( condition, x, y, toAccessorArray( out ), 1, 1 );
	expected = [ 0, 5 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	y = toAccessorArray( [ 5, 6, 7, 8 ] );

	out = zeros( 4, 'generic' );
	condition = toAccessorArray( [ true, false, true, false ] );
	actual = where( condition, x, y, toAccessorArray( out ), 1, 0 );
	expected = [ 1, 6, 3, 8 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = zeros( 8, 'generic' );
	condition = toAccessorArray( [ true, true, true, true ] );
	actual = where( condition, x, y, toAccessorArray( out ), 2, 0 );
	expected = [ 1, 0, 2, 0, 3, 0, 4, 0 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = toAccessorArray( [ false, false, false, false ] );
	actual = where( condition, x, y, toAccessorArray( out ), -1, 3 );
	expected = [ 8, 7, 6, 5 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (accessors, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	y = toAccessorArray( [ 5, 6, 7, 8 ] );

	out = zeros( 4, 'generic' );
	condition = toAccessorArray( [ true, false, true, false ] );
	actual = where( condition, x, [ 5 ], toAccessorArray( out ), 1, 0 );
	expected = [ 1, 5, 3, 5 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = toAccessorArray( [ true, false, true, false ] );
	actual = where( condition, [ -1 ], y, toAccessorArray( out ), 1, 0 );
	expected = [ -1, 6, -1, 8 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = zeros( 8, 'generic' );
	condition = toAccessorArray( [ true ] );
	actual = where( condition, x, y, toAccessorArray( out ), 2, 1 );
	expected = [ 0, 1, 0, 2, 0, 3, 0, 4 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = toAccessorArray( [ false ] );
	actual = where( condition, x, y, toAccessorArray( out ), -1, 3 );
	expected = [ 8, 7, 6, 5 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = toAccessorArray( [ true ] );
	actual = where( condition, [ -1 ], y, toAccessorArray( out ), 1, 0 );
	expected = [ -1, -1, -1, -1 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = zeros( 4, 'generic' );
	condition = toAccessorArray( [ false ] );
	actual = where( condition, x, [ 5 ], toAccessorArray( out ), 1, 0 );
	expected = [ 5, 5, 5, 5 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (typed)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = new Int32Array( [ 1 ] );
	y = new Int32Array( [ 5 ] );

	out = new Int32Array( 1 );
	condition = [ true ];
	actual = where( condition, x, y, out, 1, 0 );
	expected = new Int32Array( [ 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Int32Array( 2 );
	condition = [ false ];
	actual = where( condition, x, y, out, 1, 1 );
	expected = new Int32Array( [ 0, 5 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = new Int32Array( [ 5, 6, 7, 8 ] );

	out = new Int32Array( 4 );
	condition = [ true, false, true, false ];
	actual = where( condition, x, y, out, 1, 0 );
	expected = new Int32Array( [ 1, 6, 3, 8 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Int32Array( 8 );
	condition = [ true, true, true, true ];
	actual = where( condition, x, y, out, 2, 0 );
	expected = new Int32Array( [ 1, 0, 2, 0, 3, 0, 4, 0 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Int32Array( 4 );
	condition = [ false, false, false, false ];
	actual = where( condition, x, y, out, -1, 3 );
	expected = new Int32Array( [ 8, 7, 6, 5 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (typed, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = new Int32Array( [ 5, 6, 7, 8 ] );

	out = new Int32Array( 4 );
	condition = [ true, false, true, false ];
	actual = where( condition, x, [ 5 ], out, 1, 0 );
	expected = new Int32Array( [ 1, 5, 3, 5 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Int32Array( 4 );
	condition = [ true, false, true, false ];
	actual = where( condition, [ -1 ], y, out, 1, 0 );
	expected = new Int32Array( [ -1, 6, -1, 8 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Int32Array( 8 );
	condition = [ true ];
	actual = where( condition, x, y, out, 2, 1 );
	expected = new Int32Array( [ 0, 1, 0, 2, 0, 3, 0, 4 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Int32Array( 4 );
	condition = [ false ];
	actual = where( condition, x, y, out, -1, 3 );
	expected = new Int32Array( [ 8, 7, 6, 5 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Int32Array( 4 );
	condition = [ true ];
	actual = where( condition, [ -1 ], y, out, 1, 0 );
	expected = new Int32Array( [ -1, -1, -1, -1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Int32Array( 4 );
	condition = [ false ];
	actual = where( condition, x, [ 5 ], out, 1, 0 );
	expected = new Int32Array( [ 5, 5, 5, 5 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (boolean)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = new BooleanArray( [ true ] );
	y = new BooleanArray( [ false ] );

	out = new BooleanArray( 1 );
	condition = new BooleanArray( [ true ] );
	actual = where( condition, x, y, out, 1, 0 );
	expected = new Uint8Array( [ 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	out = new BooleanArray( 2 );
	condition = new BooleanArray( [ false ] );
	actual = where( condition, x, y, out, 1, 1 );
	expected = new Uint8Array( [ 0, 0 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	x = new BooleanArray( [ true, false, true, false ] );
	y = new BooleanArray( [ false, true, false, true ] );

	out = new BooleanArray( 8 );
	condition = new BooleanArray( [ true, false, true, false ] );
	actual = where( condition, x, y, out, 2, 0 );
	expected = new Uint8Array( [ 1, 0, 1, 0, 1, 0, 1, 0 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	out = new BooleanArray( 4 );
	condition = new BooleanArray( [ true, true, true, true ] );
	actual = where( condition, x, y, out, -1, 3 );
	expected = new Uint8Array( [ 0, 1, 0, 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	out = new BooleanArray( 4 );
	condition = new BooleanArray( [ false, false, false, false ] );
	actual = where( condition, x, y, out, 1, 0 );
	expected = new Uint8Array( [ 0, 1, 0, 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (boolean, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = new BooleanArray( [ true, false, true, false ] );
	y = new BooleanArray( [ false, true, false, true ] );

	out = new BooleanArray( 4 );
	condition = [ true, false, true, false ];
	actual = where( condition, x, new BooleanArray( [ true ] ), out, 1, 0 );
	expected = new Uint8Array( [ 1, 1, 1, 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	out = new BooleanArray( 8 );
	condition = [ true, false, true, false ];
	actual = where( condition, new BooleanArray( [ false ] ), y, out, 2, 1 );
	expected = new Uint8Array( [ 0, 0, 0, 1, 0, 0, 0, 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	out = new BooleanArray( 4 );
	condition = [ true ];
	actual = where( condition, x, y, out, -1, 3 );
	expected = new Uint8Array( [ 0, 1, 0, 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	out = new BooleanArray( 4 );
	condition = [ false ];
	actual = where( condition, x, y, out, 1, 0 );
	expected = new Uint8Array( [ 0, 1, 0, 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	out = new BooleanArray( 4 );
	condition = [ true ];
	actual = where( condition, [ false ], y, out, 1, 0 );
	expected = new Uint8Array( [ 0, 0, 0, 0 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	out = new BooleanArray( 4 );
	condition = [ false ];
	actual = where( condition, x, [ true ], out, 1, 0 );
	expected = new Uint8Array( [ 1, 1, 1, 1 ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpretBool( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (complex)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0 ] );
	y = new Complex64Array( [ 5.0, 6.0 ] );

	out = new Complex64Array( 1 );
	condition = [ true ];
	actual = where( condition, x, y, out, 1, 0 );
	expected = new Complex64Array( [ 1.0, 2.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( 2 );
	condition = [ false ];
	actual = where( condition, x, y, out, 1, 1 );
	expected = new Complex64Array( [ 0.0, 0.0, 5.0, 6.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 ] );

	out = new Complex64Array( 8 );
	condition = [ true, false, true, false ];
	actual = where( condition, x, y, out, 2, 0 );
	expected = new Complex64Array( [ 1.0, 2.0, 0.0, 0.0, -3.0, -4.0, 0.0, 0.0, 5.0, 6.0, 0.0, 0.0, -7.0, -8.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( 4 );
	condition = [ true, true, true, true ];
	actual = where( condition, x, y, out, -1, 3 );
	expected = new Complex64Array( [ 7.0, 8.0, 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( 4 );
	condition = [ false, false, false, false ];
	actual = where( condition, x, y, out, 1, 0 );
	expected = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (complex, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 ] );

	out = new Complex64Array( 4 );
	condition = [ true, false, true, false ];
	actual = where( condition, x, new Complex64Array( [ 9.0, 10.0 ] ), out, 1, 0 );
	expected = new Complex64Array( [ 1.0, 2.0, 9.0, 10.0, 5.0, 6.0, 9.0, 10.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( 4 );
	condition = [ true, false, true, false ];
	actual = where( condition, new Complex64Array( [ -9.0, -10.0 ] ), y, out, 1, 0 );
	expected = new Complex64Array( [ -9.0, -10.0, -3.0, -4.0, -9.0, -10.0, -7.0, -8.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( 8 );
	condition = [ true ];
	actual = where( condition, x, y, out, 2, 1 );
	expected = new Complex64Array( [ 0.0, 0.0, 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 5.0, 6.0, 0.0, 0.0, 7.0, 8.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( 4 );
	condition = [ false ];
	actual = where( condition, x, y, out, -1, 3 );
	expected = new Complex64Array( [ -7.0, -8.0, -5.0, -6.0, -3.0, -4.0, -1.0, -2.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( 4 );
	condition = [ true ];
	actual = where( condition, new Complex64Array( [ -9.0, -10.0 ] ), y, out, 1, 0 );
	expected = new Complex64Array( [ -9.0, -10.0, -9.0, -10.0, -9.0, -10.0, -9.0, -10.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( 4 );
	condition = [ false ];
	actual = where( condition, x, new Complex64Array( [ 9.0, 10.0 ] ), out, 1, 0 );
	expected = new Complex64Array( [ 9.0, 10.0, 9.0, 10.0, 9.0, 10.0, 9.0, 10.0 ] );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the output array unchanged if provided a first argument which is empty', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	out = [ 0, 0, 0, 0 ];
	actual = where( [], x, x, out, 1, 0 );
	expected = [ 0, 0, 0, 0 ];
	t.strictEqual( out, actual, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [];
	y = [];
	out = [];
	actual = where( [], x, y, out, 1, 0 );
	expected = [];
	t.strictEqual( out, actual, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function throws an error if provided broadcast incompatible arguments (generic)', function test( t ) {
	var values;
	var i;

	values = [
		[ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], 2, 0 ],
		[ [ 1, 2, 3, 4 ], [ 1, 2 ], [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], 1, 0 ],
		[ [ 1, 2 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], 1, 0 ],
		[ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2 ], [ 0, 0, 0, 0 ], 1, 0 ],
		[ [ 1, 2, 3, 4 ], [], [ 1, 2 ], [ 0, 0, 0, 0 ], 1, 0 ],
		[ [ 1 ], [], [ 1, 2 ], [ 0, 0 ], 1, 0 ],
		[ [ 1 ], [ 1, 2 ], [], [ 0, 0 ], 1, 0 ],
		[ [ 1 ], [], [ 1 ], [ 0 ], 1, 0 ],
		[ [ 1 ], [ 1 ], [], [ 0 ], 1, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( args ) {
		return function badValue() {
			where.apply( null, args );
		};
	}
});

tape( 'the function throws an error if provided broadcast incompatible arguments (accessors)', function test( t ) {
	var values;
	var i;

	values = [
		[ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], 2, 0 ],
		[ [ 1, 2, 3, 4 ], [ 1, 2 ], [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], 1, 0 ],
		[ [ 1, 2 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], 1, 0 ],
		[ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2 ], [ 0, 0, 0, 0 ], 1, 0 ],
		[ [ 1, 2, 3, 4 ], [], [ 1, 2 ], [ 0, 0, 0, 0 ], 1, 0 ],
		[ [ 1 ], [], [ 1, 2 ], [ 0, 0 ], 1, 0 ],
		[ [ 1 ], [ 1, 2 ], [], [ 0, 0 ], 1, 0 ],
		[ [ 1 ], [], [ 1 ], [ 0 ], 1, 0 ],
		[ [ 1 ], [ 1 ], [], [ 0 ], 1, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( args ) {
		var i;
		for ( i = 0; i < 4; i++ ) {
			args[ i ] = toAccessorArray( args[ i ] );
		}
		return function badValue() {
			where.apply( null, args );
		};
	}
});

tape( 'the function throws an error if provided broadcast incompatible arguments (typed)', function test( t ) {
	var values;
	var i;

	values = [
		[ new Int32Array( 4 ), new Int32Array( 4 ), new Int32Array( 4 ), new Int32Array( 4 ), 2, 0 ],
		[ new Int32Array( 4 ), new Int32Array( 2 ), new Int32Array( 4 ), new Int32Array( 4 ), 2, 0 ],
		[ new Int32Array( 4 ), new Int32Array( 2 ), new Int32Array( 4 ), new Int32Array( 4 ), 1, 0 ],
		[ new Int32Array( 2 ), new Int32Array( 4 ), new Int32Array( 4 ), new Int32Array( 4 ), 1, 0 ],
		[ new Int32Array( 4 ), new Int32Array( 4 ), new Int32Array( 2 ), new Int32Array( 4 ), 1, 0 ],
		[ new Int32Array( 4 ), new Int32Array( 0 ), new Int32Array( 2 ), new Int32Array( 4 ), 1, 0 ],
		[ new Int32Array( 1 ), new Int32Array( 0 ), new Int32Array( 2 ), new Int32Array( 2 ), 1, 0 ],
		[ new Int32Array( 1 ), new Int32Array( 2 ), new Int32Array( 0 ), new Int32Array( 2 ), 1, 0 ],
		[ new Int32Array( 1 ), new Int32Array( 0 ), new Int32Array( 1 ), new Int32Array( 1 ), 1, 0 ],
		[ new Int32Array( 1 ), new Int32Array( 1 ), new Int32Array( 0 ), new Int32Array( 1 ), 1, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( args ) {
		return function badValue() {
			where.apply( null, args );
		};
	}
});

tape( 'the function throws an error if provided broadcast incompatible arguments (boolean)', function test( t ) {
	var values;
	var i;

	values = [
		[ new BooleanArray( 4 ), new BooleanArray( 4 ), new BooleanArray( 4 ), new BooleanArray( 4 ), 2, 0 ],
		[ new BooleanArray( 4 ), new BooleanArray( 2 ), new BooleanArray( 4 ), new BooleanArray( 4 ), 2, 0 ],
		[ new BooleanArray( 4 ), new BooleanArray( 2 ), new BooleanArray( 4 ), new BooleanArray( 4 ), 1, 0 ],
		[ new BooleanArray( 2 ), new BooleanArray( 4 ), new BooleanArray( 4 ), new BooleanArray( 4 ), 1, 0 ],
		[ new BooleanArray( 4 ), new BooleanArray( 4 ), new BooleanArray( 2 ), new BooleanArray( 4 ), 1, 0 ],
		[ new BooleanArray( 4 ), new BooleanArray( 0 ), new BooleanArray( 2 ), new BooleanArray( 4 ), 1, 0 ],
		[ new BooleanArray( 1 ), new BooleanArray( 0 ), new BooleanArray( 2 ), new BooleanArray( 2 ), 1, 0 ],
		[ new BooleanArray( 1 ), new BooleanArray( 2 ), new BooleanArray( 0 ), new BooleanArray( 2 ), 1, 0 ],
		[ new BooleanArray( 1 ), new BooleanArray( 0 ), new BooleanArray( 1 ), new BooleanArray( 1 ), 1, 0 ],
		[ new BooleanArray( 1 ), new BooleanArray( 1 ), new BooleanArray( 0 ), new BooleanArray( 1 ), 1, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( args ) {
		return function badValue() {
			where.apply( null, args );
		};
	}
});

tape( 'the function throws an error if provided broadcast incompatible arguments (complex)', function test( t ) {
	var values;
	var i;

	values = [
		[ new Complex64Array( 4 ), new Complex64Array( 4 ), new Complex64Array( 4 ), new Complex64Array( 4 ), 2, 0 ],
		[ new Complex64Array( 4 ), new Complex64Array( 2 ), new Complex64Array( 4 ), new Complex64Array( 4 ), 2, 0 ],
		[ new Complex64Array( 4 ), new Complex64Array( 2 ), new Complex64Array( 4 ), new Complex64Array( 4 ), 1, 0 ],
		[ new Complex64Array( 2 ), new Complex64Array( 4 ), new Complex64Array( 4 ), new Complex64Array( 4 ), 1, 0 ],
		[ new Complex64Array( 4 ), new Complex64Array( 4 ), new Complex64Array( 2 ), new Complex64Array( 4 ), 1, 0 ],
		[ new Complex64Array( 4 ), new Complex64Array( 0 ), new Complex64Array( 2 ), new Complex64Array( 4 ), 1, 0 ],
		[ new Complex64Array( 1 ), new Complex64Array( 0 ), new Complex64Array( 2 ), new Complex64Array( 2 ), 1, 0 ],
		[ new Complex64Array( 1 ), new Complex64Array( 2 ), new Complex64Array( 0 ), new Complex64Array( 2 ), 1, 0 ],
		[ new Complex64Array( 1 ), new Complex64Array( 0 ), new Complex64Array( 1 ), new Complex64Array( 1 ), 1, 0 ],
		[ new Complex64Array( 1 ), new Complex64Array( 1 ), new Complex64Array( 0 ), new Complex64Array( 1 ), 1, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( args ) {
		return function badValue() {
			where.apply( null, args );
		};
	}
});
