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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Complex64Array = require( './../../complex64' );
var Complex128Array = require( './../../complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var nans = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nans, 'function', 'main export is a function' );
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
			nans( value );
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
			nans( value, 'float32' );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'ones',
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
			nans( 10, value );
		};
	}
});

tape( 'the function returns a filled array (default)', function test( t ) {
	var arr;
	var i;

	arr = nans( 5 );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( isnan( arr[ i ] ), true, 'returns expected value for element '+i );
	}
	t.end();
});

tape( 'the function returns a filled array (dtype=float64)', function test( t ) {
	var arr;
	var i;

	arr = nans( 5, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( isnan( arr[ i ] ), true, 'returns expected value for element '+i );
	}
	t.end();
});

tape( 'the function returns a filled array (dtype=float32)', function test( t ) {
	var arr;
	var i;

	arr = nans( 5, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( isnanf( arr[ i ] ), true, 'returns expected value for element '+i );
	}
	t.end();
});

tape( 'the function returns a filled array (dtype=complex128)', function test( t ) {
	var arr;
	var i;

	arr = nans( 2, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );

	arr = reinterpret128( arr, 0 );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( isnan( arr[ i ] ), true, 'returns expected value for element '+i );
	}
	t.end();
});

tape( 'the function returns a filled array (dtype=complex64)', function test( t ) {
	var arr;
	var i;

	arr = nans( 2, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );

	arr = reinterpret64( arr, 0 );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( isnan( arr[ i ] ), true, 'returns expected value for element '+i );
	}
	t.end();
});

tape( 'the function returns a filled array (dtype=generic)', function test( t ) {
	var arr;
	var i;

	arr = nans( 5, 'generic' );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( isnan( arr[ i ] ), true, 'returns expected value for element '+i );
	}
	t.end();
});
