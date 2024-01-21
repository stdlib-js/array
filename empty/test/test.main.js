/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Int32Array = require( './../../int32' );
var Uint32Array = require( './../../uint32' );
var Int16Array = require( './../../int16' );
var Uint16Array = require( './../../uint16' );
var Int8Array = require( './../../int8' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );
var Complex64Array = require( './../../complex64' );
var Complex128Array = require( './../../complex128' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var empty = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof empty, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a value other than a nonnegative integer for the first argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			empty( value );
		};
	}
});

tape( 'the function throws an error if provided a value other than a nonnegative integer for the first argument (dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			empty( value, 'float32' );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'empty',
		'Int32',
		'Uint32',
		'Int16',
		'Uint16',
		'Int8',
		'Uint8',
		'Uint8c',
		'uint8_clamped',
		'Float64',
		'Float32',
		'FLOAT64',
		'FLOAT32',
		'GENERIC'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			empty( 10, value );
		};
	}
});

tape( 'the function returns an empty array (default)', function test( t ) {
	var arr;

	arr = empty( 5 );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=float64)', function test( t ) {
	var arr;

	arr = empty( 5, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=float32)', function test( t ) {
	var arr;

	arr = empty( 5, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=complex128)', function test( t ) {
	var arr;

	arr = empty( 5, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=complex64)', function test( t ) {
	var arr;

	arr = empty( 5, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=int32)', function test( t ) {
	var arr;

	arr = empty( 5, 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=uint32)', function test( t ) {
	var arr;

	arr = empty( 5, 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=int16)', function test( t ) {
	var arr;

	arr = empty( 5, 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=uint16)', function test( t ) {
	var arr;

	arr = empty( 5, 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=int8)', function test( t ) {
	var arr;

	arr = empty( 5, 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=uint8)', function test( t ) {
	var arr;

	arr = empty( 5, 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array (dtype=uint8c)', function test( t ) {
	var arr;

	arr = empty( 5, 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=generic)', function test( t ) {
	var expected;
	var arr;

	expected = [ 0, 0, 0, 0, 0 ];

	arr = empty( 5, 'generic' );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});