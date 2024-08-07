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
var Uint8Array = require( './../../uint8' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var BooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `fill` method', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'fill' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.fill ), true, 'has method' );
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
			return arr.fill.call( value, true );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a boolean', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 5 );

	values = [
		'5',
		5,
		NaN,
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
			return arr.fill( value );
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.fill( true, value );
		};
	}
});

tape( 'the method throws an error if provided a third argument which is not an integer', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.fill( true, 0, value );
		};
	}
});

tape( 'the method returns an empty array if operating on an empty boolean array', function test( t ) {
	var arr;
	var out;

	arr = new BooleanArray();
	out = arr.fill( true );

	t.strictEqual( out instanceof BooleanArray, true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the method does not change the array length', function test( t ) {
	var arr;
	var out;

	arr = new BooleanArray( 10 );
	out = arr.fill( true );

	t.strictEqual( out, arr, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'if called with one argument, the method sets each array element to the provided value', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( 3 );
	expected = new Uint8Array( [ 1, 1, 1 ] );

	arr.fill( true );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if called with two arguments, the method sets each array element to the provided value starting from a start index (inclusive)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( 3 );
	expected = new Uint8Array( [ 0, 1, 1 ] );

	arr.fill( true, 1 );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if called with three arguments, the method sets each array element to the provided value starting from a start index (inclusive) until a specified end index (exclusive)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( 3 );
	expected = new Uint8Array( [ 1, 1, 0 ] );

	arr.fill( true, 0, 2 );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method supports negative indices', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( 3 );
	expected = new Uint8Array( [ 1, 1, 0 ] );

	arr.fill( true, -3, -1 );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if a provided start index resolves to a negative index, the method fills an array starting from the first element', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( 3 );
	expected = new Uint8Array( [ 1, 1, 1 ] );

	arr.fill( true, -10 );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if a provided end index resolves to an index exceeding the last array element index, the method fills an array until the last element (inclusive)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( 3 );
	expected = new Uint8Array( [ 0, 1, 1 ] );

	arr.fill( true, 1, 10 );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if a provided start index resolves to an index which is greater than or equal to a resolved end index, the method does not fill an array', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( 3 );
	expected = new Uint8Array( [ 0, 0, 0 ] );

	arr.fill( true, 2, 1 );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );
	t.end();
});
