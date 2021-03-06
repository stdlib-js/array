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
var Complex128Array = require( './../../complex128' );
var Complex64Array = require( './../../complex64' );
var Float64Array = require( './../../float64' );
var ArrayBuffer = require( './../../buffer' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var complexarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof complexarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unrecognized data type (only argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complexarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complexarray( value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complexarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complexarray( 10, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (typed array)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complexarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complexarray( new Float64Array( 10 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (complex typed array)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complexarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complexarray( new Complex64Array( 10 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (array-like object)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complexarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complexarray( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complexarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complexarray( new ArrayBuffer( 32 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complexarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complexarray( new ArrayBuffer( 32 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complexarray',
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
		'FLOAT32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complexarray( new ArrayBuffer( 32 ), 0, 1, value );
		};
	}
});

tape( 'the function returns a complex number typed array (default)', function test( t ) {
	var arr = complexarray();
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex128)', function test( t ) {
	var arr = complexarray( 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex64)', function test( t ) {
	var arr = complexarray( 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (default, length)', function test( t ) {
	var arr = complexarray( 10 );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex128, length)', function test( t ) {
	var arr = complexarray( 10, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex64, length)', function test( t ) {
	var arr = complexarray( 10, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (default, array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = complexarray( arr );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex128, array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = complexarray( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex64, array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = complexarray( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret64( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (default, typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = complexarray( arr );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex128, typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = complexarray( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex64, typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = complexarray( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret64( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (default, complex typed array)', function test( t ) {
	var viewX;
	var viewY;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = complexarray( arr );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	viewX = reinterpret128( arr, 0 );
	viewY = reinterpret128( out, 0 );
	t.strictEqual( viewY[ 0 ], viewX[ 0 ], 'returns expected value' );
	t.strictEqual( viewY[ 1 ], viewX[ 1 ], 'returns expected value' );
	t.strictEqual( viewY[ 2 ], viewX[ 2 ], 'returns expected value' );
	t.strictEqual( viewY[ 3 ], viewX[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex128, complex typed array)', function test( t ) {
	var viewX;
	var viewY;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = complexarray( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	viewX = reinterpret128( arr, 0 );
	viewY = reinterpret128( out, 0 );
	t.strictEqual( viewY[ 0 ], viewX[ 0 ], 'returns expected value' );
	t.strictEqual( viewY[ 1 ], viewX[ 1 ], 'returns expected value' );
	t.strictEqual( viewY[ 2 ], viewX[ 2 ], 'returns expected value' );
	t.strictEqual( viewY[ 3 ], viewX[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex64, complex typed array)', function test( t ) {
	var viewX;
	var viewY;
	var arr;
	var out;

	arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = complexarray( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	viewX = reinterpret64( arr, 0 );
	viewY = reinterpret64( out, 0 );
	t.strictEqual( viewY[ 0 ], viewX[ 0 ], 'returns expected value' );
	t.strictEqual( viewY[ 1 ], viewX[ 1 ], 'returns expected value' );
	t.strictEqual( viewY[ 2 ], viewX[ 2 ], 'returns expected value' );
	t.strictEqual( viewY[ 3 ], viewX[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a complex number typed array (default, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = complexarray( buf );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex128, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = complexarray( buf, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex64, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = complexarray( buf, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (default, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 64 );
	var out = complexarray( buf, 16 );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex128, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 64 );
	var out = complexarray( buf, 16, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex64, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = complexarray( buf, 8, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (default, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 64 );
	var out = complexarray( buf, 16, 2 );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex128, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 64 );
	var out = complexarray( buf, 16, 2, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number typed array (dtype=complex64, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = complexarray( buf, 8, 2, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.end();
});
