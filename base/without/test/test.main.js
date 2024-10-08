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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isArray = require( '@stdlib/assert/is-array' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var isComplex128Array = require( '@stdlib/assert/is-complex128array' );
var without = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof without, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (generic)', function test( t ) {
	var values;
	var x;
	var i;

	x = [ 1, 2, 3 ];

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
			without( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (float64)', function test( t ) {
	var values;
	var x;
	var i;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

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
			without( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (int32)', function test( t ) {
	var values;
	var x;
	var i;

	x = new Int32Array( [ 1, 2, 3 ] );

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
			without( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (complex128)', function test( t ) {
	var values;
	var x;
	var i;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

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
			without( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (accessors)', function test( t ) {
	var values;
	var x;
	var i;

	x = new AccessorArray( [ 1, 2, 3 ] );

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
			without( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds (array-like)', function test( t ) {
	var values;
	var x;
	var i;

	x = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
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
			without( x, value );
		};
	}
});

tape( 'the function returns a new array containing every element in an input array, except for an element at a specified index (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3 ];

	expected = [ 2, 3 ];
	actual = without( x, 0 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 3 ];
	actual = without( x, 1 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = without( x, 2 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a new array containing every element in an input array, except for an element at a specified index (float64)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	expected = [ 2.0, 3.0 ];
	actual = without( x, 0 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1.0, 3.0 ];
	actual = without( x, 1 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1.0, 2.0 ];
	actual = without( x, 2 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a new array containing every element in an input array, except for an element at a specified index (int32)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3 ] );

	expected = new Int32Array( [ 2, 3 ] );
	actual = without( x, 0 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Int32Array( [ 1, 3 ] );
	actual = without( x, 1 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = new Int32Array( [ 1, 2 ] );
	actual = without( x, 2 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a new array containing every element in an input array, except for an element at a specified index (complex128)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	expected = new Complex128Array( [ 3.0, 4.0, 5.0, 6.0 ] );
	actual = without( x, 0 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	expected = new Complex128Array( [ 1.0, 2.0, 5.0, 6.0 ] );
	actual = without( x, 1 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	actual = without( x, 2 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a new array containing every element in an input array, except for an element at a specified index (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new AccessorArray( [ 1, 2, 3 ] );

	expected = [ 2, 3 ];
	actual = without( x, 0 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 3 ];
	actual = without( x, 1 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = without( x, 2 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a new array containing every element in an input array, except for an element at a specified index (array-like)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};

	expected = [ 2, 3 ];
	actual = without( x, 0 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 3 ];
	actual = without( x, 1 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = without( x, 2 );

	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
