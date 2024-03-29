/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var onesLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof onesLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a value other than an array having a supported data type for the first argument', function test( t ) {
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
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			onesLike( value );
		};
	}
});

tape( 'the function throws an error if provided a value other than an array having a supported data type for the first argument (dtype)', function test( t ) {
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
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			onesLike( value, 'float32' );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'onesLike',
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
			onesLike( [], value );
		};
	}
});

tape( 'the function returns a ones-filled array (float64)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=float64)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float32Array( 5 );
	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = onesLike( x, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (float32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float32Array( 5 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=float32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = onesLike( x, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (complex128)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Complex128Array( 2 );
	expected = new Float64Array( [ 1.0, 0.0, 1.0, 0.0 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=complex128)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 2 );
	expected = new Float64Array( [ 1.0, 0.0, 1.0, 0.0 ] );

	arr = onesLike( x, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (complex64)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Complex64Array( 2 );
	expected = new Float32Array( [ 1.0, 0.0, 1.0, 0.0 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=complex64)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 2 );
	expected = new Float32Array( [ 1.0, 0.0, 1.0, 0.0 ] );

	arr = onesLike( x, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (int32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Int32Array( 5 );
	expected = new Int32Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=int32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Int32Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x, 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (uint32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Uint32Array( 5 );
	expected = new Uint32Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=uint32)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Uint32Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x, 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (int16)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Int16Array( 5 );
	expected = new Int16Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=int16)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Int16Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x, 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (uint16)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Uint16Array( 5 );
	expected = new Uint16Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=uint16)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Uint16Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x, 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (int8)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Int8Array( 5 );
	expected = new Int8Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=int8)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Int8Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x, 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (uint8)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Uint8Array( 5 );
	expected = new Uint8Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=uint8)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Uint8Array( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x, 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (uint8c)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Uint8ClampedArray( 5 );
	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=uint8c)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1 ] );

	arr = onesLike( x, 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (generic)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = [ 1, 2, 3, 4, 5 ];
	expected = [ 1, 1, 1, 1, 1 ];

	arr = onesLike( x );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a ones-filled array (dtype=generic)', function test( t ) {
	var expected;
	var arr;
	var x;

	x = new Float64Array( 5 );
	expected = [ 1, 1, 1, 1, 1 ];

	arr = onesLike( x, 'generic' );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});
