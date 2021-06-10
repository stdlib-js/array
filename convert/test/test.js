/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var isArray = require( '@stdlib/assert/is-array' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var isInt16Array = require( '@stdlib/assert/is-int16array' );
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var isInt8Array = require( '@stdlib/assert/is-int8array' );
var isUint16Array = require( '@stdlib/assert/is-uint16array' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var isUint8ClampedArray = require( '@stdlib/assert/is-uint8clampedarray' );
var convertArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof convertArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'if not provided an array-like object as its first argument, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			convertArray( value, 'float64' );
		};
	}
});

tape( 'if provided an unknown/unsupported data type, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'binary',
		'buffer',
		'buf',
		'float',
		'double',
		'single',
		'int',
		'integer',
		'uint',
		'uinteger',
		'byte',
		'bits'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			convertArray( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function converts an array to an array of a different data type', function test( t ) {
	var expected;
	var dtypes;
	var arr;
	var out;
	var i;
	var j;

	dtypes = [
		'float64',
		'float32',
		'generic',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	arr = [ -1, 0, 1 ];
	expected = [
		[ new Float64Array( [ -1.0, 0.0, 1.0 ] ), isFloat64Array ],
		[ new Float32Array( [ -1.0, 0.0, 1.0 ] ), isFloat32Array ],
		[ arr, isArray ],
		[ new Int16Array( [ -1, 0, 1 ] ), isInt16Array ],
		[ new Int32Array( [ -1, 0, 1 ] ), isInt32Array ],
		[ new Int8Array( [ -1, 0, 1 ] ), isInt8Array ],
		[ new Uint16Array( [ 65535, 0, 1 ] ), isUint16Array ],
		[ new Uint32Array( [ 4294967295, 0, 1 ] ), isUint32Array ],
		[ new Uint8Array( [ 255, 0, 1 ] ), isUint8Array ],
		[ new Uint8ClampedArray( [ 0, 0, 1 ] ), isUint8ClampedArray ]
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		out = convertArray( arr, dtypes[ i ] );
		t.strictEqual( expected[ i ][ 1 ]( out ), true, 'returns expected value type for ' + dtypes[ i ] );
		for ( j = 0; j < arr.length; j++ ) {
			t.strictEqual( out[ j ], expected[ i ][ 0 ][ j ], 'returns expected element ' + j + ' for ' + dtypes[ i ] );
		}
	}
	t.end();
});

tape( 'the function converts an array to an array of a different data type (large allocations)', function test( t ) {
	var expected;
	var dtypes;
	var out;
	var arr;
	var i;

	dtypes = [
		'float64',
		'float32',
		'generic',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	arr = [];
	for ( i = 0; i < 1e6; i++ ) {
		arr.push( 0 );
	}
	expected = [
		isFloat64Array,
		isFloat32Array,
		isArray,
		isInt16Array,
		isInt32Array,
		isInt8Array,
		isUint16Array,
		isUint32Array,
		isUint8Array,
		isUint8ClampedArray
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		out = convertArray( arr, dtypes[ i ] );
		t.strictEqual( expected[ i ]( out ), true, 'returns expected value type for ' + dtypes[ i ] );
	}
	t.end();
});
