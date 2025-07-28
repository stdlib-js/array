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
var FLOAT64_EPS = require( '@stdlib/constants/float64/eps' );
var FLOAT32_EPS = require( '@stdlib/constants/float32/eps' );
var AccessorArray = require( './../../../../base/accessor' );
var Float64Array = require( './../../../../float64' );
var Float32Array = require( './../../../../float32' );
var Complex64Array = require( './../../../../complex64' );
var Complex128Array = require( './../../../../complex128' );
var BooleanArray = require( './../../../../bool' );
var hasAlmostEqualValues = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hasAlmostEqualValues, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided collections of unequal length, the function returns `false`', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	y = [ 1, 2, 3 ];
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [ 1, 2 ];
	y = [ 1, 2, 3 ];
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 1 ] );
	y = [];
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = [];
	y = [];
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [] );
	y = new Float64Array( [] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	y = new Float64Array( [] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [] );
	y = [];
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new BooleanArray( [] );
	y = [];
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = [];
	y = new BooleanArray( [] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (boolean array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new BooleanArray( [] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new BooleanArray( [] );
	y = new BooleanArray( [] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (complex typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex64Array( [] );
	y = new Complex64Array( [] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [] );
	y = new Complex128Array( [] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (accessor)', function test( t ) {
	var out;
	var x;
	var y;

	x = new AccessorArray( [] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new AccessorArray( [] );
	y = new AccessorArray( [] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have respective elements which are approximately equal (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1, 0, 3 ];
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ 1, 0, 3 ];
	y = [ 1, 0, 3 ];
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have respective elements which are approximately equal (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	y = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 1.0+FLOAT64_EPS ] );
	y = new Float64Array( [ 0.0, 2.0, 1.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float32Array( [ 0.0, 2.0, 1.0+FLOAT32_EPS ] );
	y = new Float32Array( [ 0.0, 2.0, 1.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have respective elements which are approximately equal (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	// Exactly equal...
	x = [ 0.0, 2.0, 0.0 ];
	y = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float32Array( [ 0.0, 2.0, 0.0 ] );
	y = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	y = [ 0.0, 2.0, 0.0 ];
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	y = new Float32Array( [ 0.0, 2.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new BooleanArray( [ true, false, true ] );
	y = [ true, false, true ];
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ true, false, true ];
	y = new BooleanArray( [ true, false, true ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	// Approximately equal...
	x = [ 0.0, 2.0, 1.0 ];
	y = new Float64Array( [ 0.0, 2.0, 1.0+FLOAT64_EPS ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 1.0 ] );
	y = [ 0.0, 2.0, 1.0+FLOAT64_EPS ];
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 1.0+FLOAT64_EPS ] );
	y = new Float32Array( [ 0.0, 2.0, 1.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have respective elements which are approximately equal (boolean array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new BooleanArray( [ true, false, true ] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new BooleanArray( [ true, false, true ] );
	y = new BooleanArray( [ true, false, true ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have respective elements which are approximately equal (complex typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 0.0, 2.0, 0.0, 0.0 ] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex64Array( [ 0.0, 2.0, 0.0, 0.0 ] );
	y = new Complex64Array( [ 0.0, 2.0, 0.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex64Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	// Approximately equal...
	x = new Complex128Array( [ 0.0, 1.0, 3.0, 0.0 ] );
	y = new Complex128Array( [ 0.0, 1.0+FLOAT64_EPS, 3.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 1.0+FLOAT64_EPS, 3.0, 0.0 ] );
	y = new Complex128Array( [ 0.0, 1.0, 3.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex64Array( [ 0.0, 1.0, 3.0, 0.0 ] );
	y = new Complex128Array( [ 0.0, 1.0+FLOAT64_EPS, 3.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex64Array( [ 0.0, 1.0, 3.0, 0.0 ] );
	y = new Complex64Array( [ 0.0, 1.0+FLOAT32_EPS, 3.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have respective elements which are approximately equal (accessor)', function test( t ) {
	var out;
	var x;
	var y;

	x = new AccessorArray( [ 0, 2, 3 ] );
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = new AccessorArray( [ 0, 2, 3 ] );
	y = new AccessorArray( [ 0, 2, 3 ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have respective elements which are approximately equal (array-like object)', function test( t ) {
	var out;
	var x;
	var y;

	x = {
		'length': 3,
		'0': 1,
		'1': 0,
		'2': 0
	};
	out = hasAlmostEqualValues( x, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = {
		'length': 3,
		'0': 1,
		'1': 0,
		'2': 0
	};
	y = {
		'length': 3,
		'0': 1,
		'1': 0,
		'2': 0
	};
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have respective elements which are approximately equal (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0, 0, 0 ];
	y = [ 0, 1, 0 ];
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have respective elements which are approximately equal (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0+FLOAT64_EPS+FLOAT64_EPS ] );
	y = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have respective elements which are approximately equal (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0.0, 0.0, 0.0 ];
	y = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	y = [ 0.0, 0.0, 0.0 ];
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have respective elements which are approximately equal (boolean array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new BooleanArray( [ true, false, false, true ] );
	y = new BooleanArray( [ true, true, false, false ] );
	out = hasAlmostEqualValues( x, y, 0 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have respective elements which are approximately equal (complex typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 1.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	y = new Complex128Array( [ 1.0, 0.0, 0.0, 0.0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have respective elements which are approximately equal (accessor)', function test( t ) {
	var out;
	var x;
	var y;

	x = new AccessorArray( [ 0, 0, 1 ] );
	y = new AccessorArray( [ 0, 0, 0 ] );
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have respective elements which are approximately equal (array-like object)', function test( t ) {
	var out;
	var x;
	var y;

	x = {
		'length': 3,
		'0': 0,
		'1': 1,
		'2': 0
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};
	out = hasAlmostEqualValues( x, y, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});
