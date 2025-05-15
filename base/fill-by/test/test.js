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
var constantFunction = require( '@stdlib/utils/constant-function' );
var AccessorArray = require( './../../../base/accessor' );
var Float64Array = require( './../../../float64' );
var Int32Array = require( './../../../int32' );
var fillBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fillBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills an array-like object (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3 ];
	expected = [ 4, 4, 4 ];
	actual = fillBy( x, 0, x.length, constantFunction( 4 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 5, 5 ];
	actual = fillBy( x, 1, x.length, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 5, 5 ];
	actual = fillBy( x, 1, x.length+10, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 5, 3 ];
	actual = fillBy( x, 1, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 5, 3 ];
	actual = fillBy( x, 1, -1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	actual = fillBy( x, 1, 1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 5, 3 ];
	actual = fillBy( x, -2, -1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	actual = fillBy( x, 10, x.length, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	actual = fillBy( x, 1, -10, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array-like object (float64)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );
	actual = fillBy( x, 0, x.length, constantFunction( 5.0 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 5.0, 5.0 ] );
	actual = fillBy( x, 1, x.length, constantFunction( 5.0 ) );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 5.0, 5.0 ] );
	actual = fillBy( x, 1, x.length+10, constantFunction( 5.0 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 5.0, 3.0 ] );
	actual = fillBy( x, -2, -1, constantFunction( 5.0 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	actual = fillBy( x, 1, 1, constantFunction( 5.0 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	actual = fillBy( x, 10, x.length, constantFunction( 5.0 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	actual = fillBy( x, 0, -10, constantFunction( 5.0 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array-like object (int32)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 5, 5, 5 ] );
	actual = fillBy( x, 0, x.length, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 5, 5, 5 ] );
	actual = fillBy( x, 0, x.length+10, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 5, 5, 3 ] );
	actual = fillBy( x, 0, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 5, 5, 3 ] );
	actual = fillBy( x, -3, -1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 5, 2, 3 ] );
	actual = fillBy( x, 0, x.length-2, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 1, 2, 3 ] );
	actual = fillBy( x, 0, x.length-3, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 1, 2, 3 ] );
	actual = fillBy( x, 10, x.length, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 1, 2, 3 ] );
	actual = fillBy( x, 0, -10, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array-like object (accessors)', function test( t ) {
	var expected;
	var actual;
	var obj;
	var x;

	x = [ 1, 2, 3, 4 ];
	expected = [ 5, 5, 5, 5 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 0, x.length, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 5, 5, 5, 5 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 0, x.length+10, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 5, 5, 5, 4 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 0, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 5, 5, 4 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 1, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 5, 5, 4 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 1, -1, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 2, 5, 4 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 2, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 2, 3, 4 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 3, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 2, 3, 4 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 10, x.length, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	expected = [ 1, 2, 3, 4 ];

	obj = new AccessorArray( x );
	actual = fillBy( obj, 0, -10, constantFunction( 5 ) );

	t.strictEqual( actual, obj, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array-like object (array-like)', function test( t ) {
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
	expected = {
		'length': 4,
		'0': 5,
		'1': 5,
		'2': 5,
		'3': 5
	};
	actual = fillBy( x, 0, x.length, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 5,
		'1': 5,
		'2': 5,
		'3': 5
	};
	actual = fillBy( x, 0, x.length+10, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 5,
		'1': 5,
		'2': 5,
		'3': 4
	};
	actual = fillBy( x, 0, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 5,
		'1': 5,
		'2': 5,
		'3': 4
	};
	actual = fillBy( x, -4, -1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 1,
		'1': 5,
		'2': 5,
		'3': 4
	};
	actual = fillBy( x, 1, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 5,
		'3': 4
	};
	actual = fillBy( x, 2, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	actual = fillBy( x, 3, x.length-1, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	actual = fillBy( x, 10, x.length, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	actual = fillBy( x, 0, -10, constantFunction( 5 ) );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an array of length `0`', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = fillBy( [], 0, 0, constantFunction( 5 ) );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var x;

	x = [ 1, 2, 3, 4 ];
	ctx = {
		'count': 2
	};

	values = [];
	indices = [];
	arrays = [];
	actual = fillBy( x, 1, 3, fcn, ctx );

	t.strictEqual( actual, x, 'returns expected value' );

	expected = [ 1, 20, 30, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 2, 3 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ x, x ];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function fcn( value, index, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( index );
		arrays.push( arr );
		return value * 10;
	}
});
