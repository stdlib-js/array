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
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var Slice = require( '@stdlib/slice/ctor' );
var slice = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof slice, 'function', 'main export is a function' );
	t.end();
});

tape( 'when `strict` is `true`, the function throws an error if provided a slice which is out-of-bounds', function test( t ) {
	var values;
	var i;

	values = [
		new Slice( 10, 20 ),
		new Slice( -20, -10 ),
		new Slice( 0, 100 ),
		new Slice( 0, -100 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			slice( [ 1, 2, 3, 4 ], value, true );
		};
	}
});

tape( 'when `strict` is `false`, the function returns an empty array if provided a slice which is out-of-bounds', function test( t ) {
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	actual = slice( x, new Slice( 10, 20 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, [], 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = slice( x, new Slice( -20, -10 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, new Int32Array( 0 ), 'returns expected value' );

	x = new AccessorArray( [ 1, 2, 3, 4 ] );
	actual = slice( x, new Slice( 0, -100 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, [], 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	actual = slice( x, new Slice( -10, -20 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, new Float64Array( 0 ), 'returns expected value' );

	t.end();
});

tape( 'the function slices an array-like object (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3 ];

	expected = [ 1, 2, 3 ];
	actual = slice( x, new Slice(), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 3, 2, 1 ];
	actual = slice( x, new Slice( null, null, -1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 3, 1 ];
	actual = slice( x, new Slice( null, null, -2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 3 ];
	actual = slice( x, new Slice( null, null, 2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 2, 3 ];
	actual = slice( x, new Slice( 1, null ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 2 ];
	actual = slice( x, new Slice( 1, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = slice( x, new Slice( 1, 1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function slices an array-like object (float64)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	actual = slice( x, new Slice( null ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Float64Array( [ 3.0, 2.0, 1.0 ] );
	actual = slice( x, new Slice( x.length-1, null, -1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Float64Array( [ 3.0, 1.0 ] );
	actual = slice( x, new Slice( x.length-1, null, -2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 3.0 ] );
	actual = slice( x, new Slice( 0, null, 2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Float64Array( [ 2.0, 3.0 ] );
	actual = slice( x, new Slice( 1, x.length ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Float64Array( [ 2.0 ] );
	actual = slice( x, new Slice( 1, -1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Float64Array( [] );
	actual = slice( x, new Slice( 1, 1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function slices an array-like object (int32)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3 ] );

	expected = new Int32Array( [ 1, 2, 3 ] );
	actual = slice( x, new Slice( null, null ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Int32Array( [ 1, 3 ] );
	actual = slice( x, new Slice( null, null, 2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Int32Array( [ 2 ] );
	actual = slice( x, new Slice( x.length-2, null, -2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Int32Array( [ 1, 2 ] );
	actual = slice( x, new Slice( x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Int32Array( [ 1 ] );
	actual = slice( x, new Slice( x.length-2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Int32Array( [] );
	actual = slice( x, new Slice( 0, x.length-3 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function slices an array-like object (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new AccessorArray( [ 1, 2, 3, 4 ] );

	expected = [ 1, 2, 3, 4 ];
	actual = slice( x, new Slice(), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 4, 3, 2, 1 ];
	actual = slice( x, new Slice( null, null, -1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 3, 1 ];
	actual = slice( x, new Slice( x.length-2, null, -2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 2, 4 ];
	actual = slice( x, new Slice( 1, null, 2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3 ];
	actual = slice( x, new Slice( null, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 2, 3 ];
	actual = slice( x, new Slice( 1, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 3 ];
	actual = slice( x, new Slice( 2, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = slice( x, new Slice( 3, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function slices an array-like object (array-like)', function test( t ) {
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

	expected = [ 1, 2, 3, 4 ];
	actual = slice( x, new Slice( 0, x.length ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 4, 3, 2 ];
	actual = slice( x, new Slice( x.length-1, 0, -1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 4, 2 ];
	actual = slice( x, new Slice( x.length-1, 0, -2 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3 ];
	actual = slice( x, new Slice( 0, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 2, 3 ];
	actual = slice( x, new Slice( 1, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 3 ];
	actual = slice( x, new Slice( 2, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = slice( x, new Slice( 3, x.length-1 ), false );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an array of length `0`', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = slice( [], new Slice(), false );

	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = slice( new Float64Array( 0 ), new Slice(), false );

	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = slice( new AccessorArray( [] ), new Slice(), false );

	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
