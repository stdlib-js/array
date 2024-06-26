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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var Uint8Array = require( './../../uint8' );
var BooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `slice` method', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'slice' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.slice ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a boolean array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 5 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.slice.call( value );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not an integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 10 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.slice( value );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not an integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 10 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.slice( 0, value );
		};
	}
});

tape( 'the method returns an empty typed array if operating on an empty boolean array', function test( t ) {
	var arr;
	var out;

	arr = new BooleanArray();
	out = arr.slice();

	t.strictEqual( out.length, 0, 'returns expected value' );
	t.end();
});

tape( 'if called without arguments, the method returns a typed array containing the same elements as the original array', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new BooleanArray( [ true, false, true, false, true ] );
	expected = new Uint8Array( [ 1, 0, 1, 0, 1 ] );
	actual = arr.slice();

	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.notEqual( actual, arr, 'returns a new instance' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if called with one argument, the method returns a typed array containing elements starting from a specified beginning index (inclusive)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new BooleanArray( [ true, false, true, false, true ] );
	expected = new Uint8Array( [ 0, 1, 0, 1 ] );
	actual = arr.slice( 1 );

	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if provided two arguments, the method returns a typed array containing elements starting from a specified beginning index (inclusive) and ending at a specified stop index (exclusive)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new BooleanArray( [ true, false, true, false, true ] );
	expected = new Uint8Array( [ 0, 1 ] );
	actual = arr.slice( 1, 3 );

	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );

	arr = new BooleanArray( [ true, false, true, false, true ] );
	expected = new Uint8Array( [ 0, 1, 0, 1 ] );
	actual = arr.slice( 1, 30 );

	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method resolves negative indices relative to the last element', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new BooleanArray( [ true, false, true, false, true ] );

	expected = new Uint8Array( [ 1, 0 ] );
	actual = arr.slice( -3, -1 );
	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );

	expected = new Uint8Array( [ 1, 0, 1 ] );
	actual = arr.slice( -30, -2 );
	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns an empty typed array if a resolved beginning index exceeds a resolved ending index', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new BooleanArray( [ true, false, true, false, true ] );
	expected = new Uint8Array( [] );
	actual = arr.slice( 2, 0 );

	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns an empty typed array if a resolved beginning index exceeds the maximum array index', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new BooleanArray( [ true, false, true, false ] );
	expected = new Uint8Array( [] );
	actual = arr.slice( 5 );

	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns an empty typed array if a resolved ending index is less than or equal to zero', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new BooleanArray( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ] );
	expected = new Uint8Array( [] );

	actual = arr.slice( 2, -8 );
	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );

	actual = arr.slice( 1, 0 );
	t.strictEqual( instanceOf( actual, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( actual, 0 ), expected, 'returns expected value' );
	t.end();
});
