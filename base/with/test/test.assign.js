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
var Int32Array = require( './../../../int32' );
var Float64Array = require( './../../../float64' );
var Complex128Array = require( './../../../complex128' );
var AccessorArray = require( './../../../base/accessor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var zeros = require( './../../../zeros' );
var arrayWith = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof arrayWith, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (generic)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = [ 1, 2, 3 ];
	out = zeros( x.length, 'generic' );

	values = [
		10,
		100,
		1000,
		-10,
		-100,
		-1000
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arrayWith( x, value, 0, out, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (float64)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = zeros( x.length, 'float64' );

	values = [
		10,
		100,
		1000,
		-10,
		-100,
		-1000
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arrayWith( x, value, 0.0, out, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (int32)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = new Int32Array( [ 1, 2, 3 ] );
	out = zeros( x.length, 'int32' );

	values = [
		10,
		100,
		1000,
		-10,
		-100,
		-1000
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arrayWith( x, value, 0, out, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (complex128)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = zeros( x.length, 'complex128' );

	values = [
		10,
		100,
		1000,
		-10,
		-100,
		-1000
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arrayWith( x, value, new Complex128( 0.0, 0.0 ), out, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (accessors)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = new AccessorArray( [ 1, 2, 3 ] );
	out = new AccessorArray( zeros( x.length, 'generic' ) );

	values = [
		10,
		100,
		1000,
		-10,
		-100,
		-1000
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arrayWith( x, value, 0, out, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (array-like)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};

	out = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	values = [
		10,
		100,
		1000,
		-10,
		-100,
		-1000
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arrayWith( x, value, 0, out, 1, 0 );
		};
	}
});

tape( 'the function copies elements to another array and sets an element at a specified index to a provided value (generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;

	x = [ 1, 2, 3 ];

	out = zeros( x.length, 'generic' );
	expected = [ 5, 2, 3 ];
	actual = arrayWith( x, 0, 5, out, 1, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( x.length*2, 'generic' );
	expected = [ 1, 0, 5, 0, 3, 0 ];
	actual = arrayWith( x, 1, 5, out, 2, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( x.length*2, 'generic' );
	expected = [ 0, 5, 0, 2, 0, 1 ];
	actual = arrayWith( x, 2, 5, out, -2, out.length-1 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies elements to another array and sets an element at a specified index to a provided value (float64)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	out = zeros( x.length, 'float64' );
	expected = new Float64Array( [ 5.0, 2.0, 3.0 ] );
	actual = arrayWith( x, 0, 5.0, out, 1, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( x.length*2, 'float64' );
	expected = new Float64Array( [ 1.0, 0.0, 5.0, 0.0, 3.0, 0.0 ] );
	actual = arrayWith( x, 1, 5.0, out, 2, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( x.length*2, 'float64' );
	expected = new Float64Array( [ 0.0, 5.0, 0.0, 2.0, 0.0, 1.0 ] );
	actual = arrayWith( x, 2, 5.0, out, -2, out.length-1 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies elements to another array and sets an element at a specified index to a provided value (int32)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;

	x = new Int32Array( [ 1, 2, 3 ] );

	out = zeros( x.length, 'int32' );
	expected = new Int32Array( [ 5, 2, 3 ] );
	actual = arrayWith( x, 0, 5, out, 1, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( x.length*2, 'int32' );
	expected = new Int32Array( [ 1, 0, 5, 0, 3, 0 ] );
	actual = arrayWith( x, 1, 5, out, 2, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( x.length*2, 'int32' );
	expected = new Int32Array( [ 0, 5, 0, 2, 0, 1 ] );
	actual = arrayWith( x, 2, 5, out, -2, out.length-1 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies elements to another array and sets an element at a specified index to a provided value (complex128)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	out = zeros( x.length, 'complex128' );
	expected = new Complex128Array( [ 7.0, 8.0, 3.0, 4.0, 5.0, 6.0 ] );
	actual = arrayWith( x, 0, new Complex128( 7.0, 8.0 ), out, 1, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	out = zeros( x.length*2, 'complex128' );
	expected = new Complex128Array( [ 1.0, 2.0, 0.0, 0.0, 7.0, 8.0, 0.0, 0.0, 5.0, 6.0, 0.0, 0.0 ] ); // eslint-disable-line max-len
	actual = arrayWith( x, 1, new Complex128( 7.0, 8.0 ), out, 2, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	out = zeros( x.length*2, 'complex128' );
	expected = new Complex128Array( [ 0.0, 0.0, 7.0, 8.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 1.0, 2.0 ] ); // eslint-disable-line max-len
	actual = arrayWith( x, 2, new Complex128( 7.0, 8.0 ), out, -2, out.length-1 ); // eslint-disable-line max-len

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function copies elements to another array and sets an element at a specified index to a provided value (accessors)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;

	x = new AccessorArray( [ 1, 2, 3 ] );

	out = new AccessorArray( zeros( x.length, 'generic' ) );
	expected = [ 5, 2, 3 ];
	actual = arrayWith( x, 0, 5, out, 1, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	out = new AccessorArray( zeros( x.length*2, 'generic' ) );
	expected = [ 1, 0, 5, 0, 3, 0 ];
	actual = arrayWith( x, 1, 5, out, 2, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	out = new AccessorArray( zeros( x.length*2, 'generic' ) );
	expected = [ 0, 5, 0, 2, 0, 1 ];
	actual = arrayWith( x, 2, 5, out, -2, out.length-1 );

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	t.end();

	function isEqual( actual, expected ) {
		var i;
		for ( i = 0; i < expected.length; i++ ) {
			t.strictEqual( actual.get( i ), expected[ i ], 'returns expected value' );
		}
	}
});

tape( 'the function copies elements to another array and sets an element at a specified index to a provided value (array-like)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;

	x = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};

	out = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};
	expected = [ 5, 2, 3 ];
	actual = arrayWith( x, 0, 5, out, 1, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	out = {
		'length': 6,
		'0': 0,
		'1': 0,
		'2': 0,
		'3': 0,
		'4': 0,
		'5': 0
	};
	expected = [ 1, 0, 5, 0, 3, 0 ];
	actual = arrayWith( x, 1, 5, out, 2, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	out = {
		'length': 6,
		'0': 0,
		'1': 0,
		'2': 0,
		'3': 0,
		'4': 0,
		'5': 0
	};
	expected = [ 0, 5, 0, 2, 0, 1 ];
	actual = arrayWith( x, 2, 5, out, -2, out.length-1 );

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	t.end();

	function isEqual( actual, expected ) {
		var i;
		for ( i = 0; i < expected.length; i++ ) {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		}
	}
});
