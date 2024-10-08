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
var Float64Array = require( './../../../../float64' );
var hasEqualValuesIndexed = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hasEqualValuesIndexed, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided collections of unequal length, the function returns `false`', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	y = [ 1, 2, 3 ];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = [ 1, 2 ];
	y = [ 1, 2, 3 ];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 1 ] );
	y = [];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	out = hasEqualValuesIndexed( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = [];
	y = [];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [] );
	out = hasEqualValuesIndexed( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [] );
	y = new Float64Array( [] );
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	y = new Float64Array( [] );
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [] );
	y = [];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1, 0, 3 ];
	out = hasEqualValuesIndexed( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ 1, 0, 3 ];
	y = [ 1, 0, 3 ];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasEqualValuesIndexed( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	y = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0.0, 2.0, 0.0 ];
	y = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	y = [ 0.0, 2.0, 0.0 ];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (array-like object)', function test( t ) {
	var out;
	var x;
	var y;

	x = {
		'length': 3,
		'0': 1,
		'1': 0,
		'2': 0
	};
	out = hasEqualValuesIndexed( x, x );
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
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0, 0, 0 ];
	y = [ 0, 1, 0 ];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, NaN, 1.0 ] );
	y = new Float64Array( [ 0.0, NaN, 1.0 ] );
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0.0, 0.0, 0.0 ];
	y = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	y = [ 0.0, 0.0, 0.0 ];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
	y = [ 0.0, 0.0, 0.0, 0.0 ];
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (array-like object)', function test( t ) {
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
	out = hasEqualValuesIndexed( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});
