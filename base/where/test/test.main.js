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
var BooleanArray = require( './../../../bool' );
var Complex64Array = require( './../../../complex64' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var isSameComplex64 = require( '@stdlib/assert/is-same-complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var where = require( './../lib' );


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
	var x;
	var y;

	x = [ 1 ];
	y = [ 5 ];

	condition = [ true ];
	actual = where( condition, x, y );
	expected = [ 1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, y );
	expected = [ 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = [ 5, 6, 7, 8 ];

	condition = [ true, false, true, false ];
	actual = where( condition, x, y );
	expected = [ 1, 6, 3, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true, true, true, true ];
	actual = where( condition, x, y );
	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false, false, false, false ];
	actual = where( condition, x, y );
	expected = [ 5, 6, 7, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (generic, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = [ 5, 6, 7, 8 ];

	condition = [ true, false, true, false ];
	actual = where( condition, x, [ 5 ] );
	expected = [ 1, 5, 3, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true, false, true, false ];
	actual = where( condition, [ -1 ], y );
	expected = [ -1, 6, -1, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true ];
	actual = where( condition, x, y );
	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, y );
	expected = [ 5, 6, 7, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true ];
	actual = where( condition, [ -1 ], y );
	expected = [ -1, -1, -1, -1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, [ 5 ] );
	expected = [ 5, 5, 5, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (accessors)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = toAccessorArray( [ 1 ] );
	y = toAccessorArray( [ 5 ] );

	condition = toAccessorArray( [ true ] );
	actual = where( condition, x, y );
	expected = [ 1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = toAccessorArray( [ false ] );
	actual = where( condition, x, y );
	expected = [ 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	y = toAccessorArray( [ 5, 6, 7, 8 ] );

	condition = toAccessorArray( [ true, false, true, false ] );
	actual = where( condition, x, y );
	expected = [ 1, 6, 3, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = toAccessorArray( [ true, true, true, true ] );
	actual = where( condition, x, y );
	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = toAccessorArray( [ false, false, false, false ] );
	actual = where( condition, x, y );
	expected = [ 5, 6, 7, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (accessors, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	y = toAccessorArray( [ 5, 6, 7, 8 ] );

	condition = toAccessorArray( [ true, false, true, false ] );
	actual = where( condition, x, [ 5 ] );
	expected = [ 1, 5, 3, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = toAccessorArray( [ true, false, true, false ] );
	actual = where( condition, [ -1 ], y );
	expected = [ -1, 6, -1, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = toAccessorArray( [ true ] );
	actual = where( condition, x, y );
	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = toAccessorArray( [ false ] );
	actual = where( condition, x, y );
	expected = [ 5, 6, 7, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = toAccessorArray( [ true ] );
	actual = where( condition, [ -1 ], y );
	expected = [ -1, -1, -1, -1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = toAccessorArray( [ false ] );
	actual = where( condition, x, [ 5 ] );
	expected = [ 5, 5, 5, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (typed)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = new Int32Array( [ 1 ] );
	y = new Int32Array( [ 5 ] );

	condition = [ true ];
	actual = where( condition, x, y );
	expected = [ 1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, y );
	expected = [ 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = new Int32Array( [ 5, 6, 7, 8 ] );

	condition = [ true, false, true, false ];
	actual = where( condition, x, y );
	expected = [ 1, 6, 3, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true, true, true, true ];
	actual = where( condition, x, y );
	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false, false, false, false ];
	actual = where( condition, x, y );
	expected = [ 5, 6, 7, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (typed, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = new Int32Array( [ 5, 6, 7, 8 ] );

	condition = [ true, false, true, false ];
	actual = where( condition, x, [ 5 ] );
	expected = [ 1, 5, 3, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true, false, true, false ];
	actual = where( condition, [ -1 ], y );
	expected = [ -1, 6, -1, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true ];
	actual = where( condition, x, y );
	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, y );
	expected = [ 5, 6, 7, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true ];
	actual = where( condition, [ -1 ], y );
	expected = [ -1, -1, -1, -1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, [ 5 ] );
	expected = [ 5, 5, 5, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (boolean)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = new BooleanArray( [ true ] );
	y = new BooleanArray( [ false ] );

	condition = [ true ];
	actual = where( condition, x, y );
	expected = [ true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, y );
	expected = [ false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ true, false, true, false ] );
	y = new BooleanArray( [ false, true, false, true ] );

	condition = [ true, false, true, false ];
	actual = where( condition, x, y );
	expected = [ true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true, true, true, true ];
	actual = where( condition, x, y );
	expected = [ true, false, true, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false, false, false, false ];
	actual = where( condition, x, y );
	expected = [ false, true, false, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (boolean, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = new BooleanArray( [ true, false, true, false ] );
	y = new BooleanArray( [ false, true, false, true ] );

	condition = [ true, false, true, false ];
	actual = where( condition, x, [ 5 ] );
	expected = [ true, 5, true, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true, false, true, false ];
	actual = where( condition, [ -1 ], y );
	expected = [ -1, true, -1, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true ];
	actual = where( condition, x, y );
	expected = [ true, false, true, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, y );
	expected = [ false, true, false, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ true ];
	actual = where( condition, [ -1 ], y );
	expected = [ -1, -1, -1, -1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, [ 5 ] );
	expected = [ 5, 5, 5, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from one of two arrays (complex)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0 ] );
	y = new Complex64Array( [ 5.0, 6.0 ] );

	condition = [ true ];
	actual = where( condition, x, y );
	expected = [ new Complex64( 1.0, 2.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, y );
	expected = [ new Complex64( 5.0, 6.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 ] );

	condition = [ true, false, true, false ];
	actual = where( condition, x, y );
	expected = [ new Complex64( 1.0, 2.0 ), new Complex64( -3.0, -4.0 ), new Complex64( 5.0, 6.0 ), new Complex64( -7.0, -8.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	condition = [ true, true, true, true ];
	actual = where( condition, x, y );
	expected = [ new Complex64( 1.0, 2.0 ), new Complex64( 3.0, 4.0 ), new Complex64( 5.0, 6.0 ), new Complex64( 7.0, 8.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	condition = [ false, false, false, false ];
	actual = where( condition, x, y );
	expected = [ new Complex64( -1.0, -2.0 ), new Complex64( -3.0, -4.0 ), new Complex64( -5.0, -6.0 ), new Complex64( -7.0, -8.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();

	function isSameComplex64Array( actual, expected ) {
		var i;

		t.strictEqual( actual.length, expected.length, 'returns expected value' );
		for ( i = 0; i < actual.length; i++ ) {
			t.strictEqual( isSameComplex64( actual[ i ], expected[ i ] ), true, 'returns expected value for element ' + i );
		}
		return true;
	}
});

tape( 'the function takes elements from one of two arrays (complex, broadcasting)', function test( t ) {
	var condition;
	var expected;
	var actual;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 ] );

	condition = [ true, false, true, false ];
	actual = where( condition, x, new Complex64Array( [ 9.0, 10.0 ] ) );
	expected = [ new Complex64( 1.0, 2.0 ), new Complex64( 9.0, 10.0 ), new Complex64( 5.0, 6.0 ), new Complex64( 9.0, 10.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	condition = [ true, false, true, false ];
	actual = where( condition, new Complex64Array( [ -9.0, -10.0 ] ), y );
	expected = [ new Complex64( -9.0, -10.0 ), new Complex64( -3.0, -4.0 ), new Complex64( -9.0, -10.0 ), new Complex64( -7.0, -8.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	condition = [ true ];
	actual = where( condition, x, y );
	expected = [ new Complex64( 1.0, 2.0 ), new Complex64( 3.0, 4.0 ), new Complex64( 5.0, 6.0 ), new Complex64( 7.0, 8.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, y );
	expected = [ new Complex64( -1.0, -2.0 ), new Complex64( -3.0, -4.0 ), new Complex64( -5.0, -6.0 ), new Complex64( -7.0, -8.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	condition = [ true ];
	actual = where( condition, new Complex64Array( [ -9.0, -10.0 ] ), y );
	expected = [ new Complex64( -9.0, -10.0 ), new Complex64( -9.0, -10.0 ), new Complex64( -9.0, -10.0 ), new Complex64( -9.0, -10.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	condition = [ false ];
	actual = where( condition, x, new Complex64Array( [ 9.0, 10.0 ] ) );
	expected = [ new Complex64( 9.0, 10.0 ), new Complex64( 9.0, 10.0 ), new Complex64( 9.0, 10.0 ), new Complex64( 9.0, 10.0 ) ];
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();

	function isSameComplex64Array( actual, expected ) {
		var i;

		t.strictEqual( actual.length, expected.length, 'returns expected value' );
		for ( i = 0; i < actual.length; i++ ) {
			t.strictEqual( isSameComplex64( actual[ i ], expected[ i ] ), true, 'returns expected value for element ' + i );
		}
		return true;
	}
});

tape( 'the function returns an empty array if provided a first argument which is empty', function test( t ) {
	var x = [ 1, 2, 3, 4 ];
	t.deepEqual( where( [], x, x ), [], 'returns expected value' );
	t.deepEqual( where( [], [], [] ), [], 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided broadcast incompatible arguments (generic)', function test( t ) {
	var values;
	var i;

	values = [
		[ [ 1, 2, 3, 4 ], [ 1, 2 ], [ 1, 2, 3, 4 ] ],
		[ [ 1, 2 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ] ],
		[ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2 ] ],
		[ [ 1, 2, 3, 4 ], [], [ 1, 2 ] ],
		[ [ 1 ], [], [ 1, 2 ] ],
		[ [ 1 ], [ 1, 2 ], [] ],
		[ [ 1 ], [], [ 1 ] ],
		[ [ 1 ], [ 1 ], [] ]
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
		[ [ 1, 2, 3, 4 ], [ 1, 2 ], [ 1, 2, 3, 4 ] ],
		[ [ 1, 2 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ] ],
		[ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2 ] ],
		[ [ 1, 2, 3, 4 ], [], [ 1, 2 ] ],
		[ [ 1 ], [], [ 1, 2 ] ],
		[ [ 1 ], [ 1, 2 ], [] ],
		[ [ 1 ], [], [ 1 ] ],
		[ [ 1 ], [ 1 ], [] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( args ) {
		var i;
		for ( i = 0; i < args.length; i++ ) {
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
		[ new Int32Array( 4 ), new Int32Array( 2 ), new Int32Array( 4 ) ],
		[ new Int32Array( 2 ), new Int32Array( 4 ), new Int32Array( 4 ) ],
		[ new Int32Array( 4 ), new Int32Array( 4 ), new Int32Array( 2 ) ],
		[ new Int32Array( 4 ), new Int32Array( 0 ), new Int32Array( 2 ) ],
		[ new Int32Array( 1 ), new Int32Array( 0 ), new Int32Array( 2 ) ],
		[ new Int32Array( 1 ), new Int32Array( 2 ), new Int32Array( 0 ) ],
		[ new Int32Array( 1 ), new Int32Array( 0 ), new Int32Array( 1 ) ],
		[ new Int32Array( 1 ), new Int32Array( 1 ), new Int32Array( 0 ) ]
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
		[ new BooleanArray( 4 ), new BooleanArray( 2 ), new BooleanArray( 4 ) ],
		[ new BooleanArray( 2 ), new BooleanArray( 4 ), new BooleanArray( 4 ) ],
		[ new BooleanArray( 4 ), new BooleanArray( 4 ), new BooleanArray( 2 ) ],
		[ new BooleanArray( 4 ), new BooleanArray( 0 ), new BooleanArray( 2 ) ],
		[ new BooleanArray( 1 ), new BooleanArray( 0 ), new BooleanArray( 2 ) ],
		[ new BooleanArray( 1 ), new BooleanArray( 2 ), new BooleanArray( 0 ) ],
		[ new BooleanArray( 1 ), new BooleanArray( 0 ), new BooleanArray( 1 ) ],
		[ new BooleanArray( 1 ), new BooleanArray( 1 ), new BooleanArray( 0 ) ]
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
		[ new Complex64Array( 4 ), new Complex64Array( 2 ), new Complex64Array( 4 ) ],
		[ new Complex64Array( 2 ), new Complex64Array( 4 ), new Complex64Array( 4 ) ],
		[ new Complex64Array( 4 ), new Complex64Array( 4 ), new Complex64Array( 2 ) ],
		[ new Complex64Array( 4 ), new Complex64Array( 0 ), new Complex64Array( 2 ) ],
		[ new Complex64Array( 1 ), new Complex64Array( 0 ), new Complex64Array( 2 ) ],
		[ new Complex64Array( 1 ), new Complex64Array( 2 ), new Complex64Array( 0 ) ],
		[ new Complex64Array( 1 ), new Complex64Array( 0 ), new Complex64Array( 1 ) ],
		[ new Complex64Array( 1 ), new Complex64Array( 1 ), new Complex64Array( 0 ) ]
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
