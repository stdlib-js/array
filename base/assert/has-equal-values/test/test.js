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
var AccessorArray = require( './../../../../base/accessor' );
var Float64Array = require( './../../../../float64' );
var Complex64Array = require( './../../../../complex64' );
var Complex128Array = require( './../../../../complex128' );
var BooleanArray = require( './../../../../bool' );
var hasEqualValues = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hasEqualValues, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided collections of unequal length, the function returns `false`', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	y = [ 1, 2, 3 ];
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = [ 1, 2 ];
	y = [ 1, 2, 3 ];
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 1 ] );
	y = [];
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = [];
	y = [];
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [] );
	y = new Float64Array( [] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	x = [];
	y = new Float64Array( [] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [] );
	y = [];
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = new BooleanArray( [] );
	y = [];
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = [];
	y = new BooleanArray( [] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (boolean array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new BooleanArray( [] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new BooleanArray( [] );
	y = new BooleanArray( [] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (complex typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex64Array( [] );
	y = new Complex64Array( [] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [] );
	y = new Complex128Array( [] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty collections, the function returns `true` (accessor)', function test( t ) {
	var out;
	var x;
	var y;

	x = new AccessorArray( [] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new AccessorArray( [] );
	y = new AccessorArray( [] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1, 0, 3 ];
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ 1, 0, 3 ];
	y = [ 1, 0, 3 ];
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	y = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0.0, 2.0, 0.0 ];
	y = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	y = [ 0.0, 2.0, 0.0 ];
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = new BooleanArray( [ true, false, true ] );
	y = [ true, false, true ];
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ true, false, true ];
	y = new BooleanArray( [ true, false, true ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (boolean array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new BooleanArray( [ true, false, true ] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new BooleanArray( [ true, false, true ] );
	y = new BooleanArray( [ true, false, true ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (complex typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 0.0, 2.0, 0.0, 0.0 ] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex64Array( [ 0.0, 2.0, 0.0, 0.0 ] );
	y = new Complex64Array( [ 0.0, 2.0, 0.0, 0.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if both arrays have equal values (accessor)', function test( t ) {
	var out;
	var x;
	var y;

	x = new AccessorArray( [ 0, 2, 3 ] );
	out = hasEqualValues( x, x );
	t.strictEqual( out, true, 'returns expected value' );

	x = new AccessorArray( [ 0, 2, 3 ] );
	y = new AccessorArray( [ 0, 2, 3 ] );
	out = hasEqualValues( x, y );
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
	out = hasEqualValues( x, x );
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
	out = hasEqualValues( x, y );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (generic)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0, 0, 0 ];
	y = [ 0, 1, 0 ];
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (real typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, NaN, 1.0 ] );
	y = new Float64Array( [ 0.0, NaN, 1.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (mixed)', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0.0, 0.0, 0.0 ];
	y = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0 ] );
	y = [ 0.0, 0.0, 0.0 ];
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (boolean array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new BooleanArray( [ true, false, false, true ] );
	y = new BooleanArray( [ true, true, false, false ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (complex typed array)', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 1.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	y = new Complex128Array( [ 1.0, 0.0, 0.0, 0.0 ] );
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if both arrays do not have equal values (accessor)', function test( t ) {
	var out;
	var x;
	var y;

	x = new AccessorArray( [ 0, 0, 1 ] );
	y = new AccessorArray( [ 0, 0, 0 ] );
	out = hasEqualValues( x, y );
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
	out = hasEqualValues( x, y );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});