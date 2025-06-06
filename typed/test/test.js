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
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Int32Array = require( './../../int32' );
var Uint32Array = require( './../../uint32' );
var Int16Array = require( './../../int16' );
var Uint16Array = require( './../../uint16' );
var Int8Array = require( './../../int8' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );
var Complex128Array = require( './../../complex128' );
var Complex64Array = require( './../../complex64' );
var BooleanArray = require( './../../bool' );
var ArrayBuffer = require( './../../buffer' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var typedarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof typedarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unrecognized data type (only argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
			typedarray( value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
			typedarray( 10, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (typed array)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
			typedarray( new Float64Array( 10 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (array-like object)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
			typedarray( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
			typedarray( new ArrayBuffer( 16 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
			typedarray( new ArrayBuffer( 16 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'typedarray',
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
			typedarray( new ArrayBuffer( 16 ), 0, 1, value );
		};
	}
});

tape( 'the function returns a typed array (default)', function test( t ) {
	var arr = typedarray();
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float64)', function test( t ) {
	var arr = typedarray( 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float32)', function test( t ) {
	var arr = typedarray( 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex128)', function test( t ) {
	var arr = typedarray( 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex64)', function test( t ) {
	var arr = typedarray( 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=bool)', function test( t ) {
	var arr = typedarray( 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int32)', function test( t ) {
	var arr = typedarray( 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint32)', function test( t ) {
	var arr = typedarray( 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int16)', function test( t ) {
	var arr = typedarray( 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint16)', function test( t ) {
	var arr = typedarray( 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int8)', function test( t ) {
	var arr = typedarray( 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8)', function test( t ) {
	var arr = typedarray( 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8c)', function test( t ) {
	var arr = typedarray( 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (default, length)', function test( t ) {
	var arr = typedarray( 10 );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float64, length)', function test( t ) {
	var arr = typedarray( 10, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float32, length)', function test( t ) {
	var arr = typedarray( 10, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex128, length)', function test( t ) {
	var arr = typedarray( 10, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex64, length)', function test( t ) {
	var arr = typedarray( 10, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=bool, length)', function test( t ) {
	var arr = typedarray( 10, 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int32, length)', function test( t ) {
	var arr = typedarray( 10, 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint32, length)', function test( t ) {
	var arr = typedarray( 10, 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int16, length)', function test( t ) {
	var arr = typedarray( 10, 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint16, length)', function test( t ) {
	var arr = typedarray( 10, 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int8, length)', function test( t ) {
	var arr = typedarray( 10, 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8, length)', function test( t ) {
	var arr = typedarray( 10, 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8c, length)', function test( t ) {
	var arr = typedarray( 10, 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (default, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float64, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float32, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex128, array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = typedarray( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=complex64, array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = typedarray( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret64( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=bool, array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = [ 1, 0, 0, 1 ];
	out = typedarray( arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpretBoolean( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int32, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint32, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int16, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint16, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int8, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8c, array)', function test( t ) {
	var arr = [ 1.0, 2.0, 3.0 ];
	var out = typedarray( arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (default, typed array)', function test( t ) {
	var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float64, typed array)', function test( t ) {
	var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float32, typed array)', function test( t ) {
	var arr = new Uint32Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex128, typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = typedarray( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=complex64, typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = typedarray( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret64( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=bool, typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Uint8Array( [ 1, 0, 1, 0 ] );
	out = typedarray( arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpretBoolean( out, 0 );
	t.strictEqual( view[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( view[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( view[ 2 ], arr[ 2 ], 'returns expected value' );
	t.strictEqual( view[ 3 ], arr[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int32, typed array)', function test( t ) {
	var arr = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint32, typed array)', function test( t ) {
	var arr = new Uint8ClampedArray( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int16, typed array)', function test( t ) {
	var arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint16, typed array)', function test( t ) {
	var arr = new Int8Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int8, typed array)', function test( t ) {
	var arr = new Int16Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8, typed array)', function test( t ) {
	var arr = new Int32Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8c, typed array)', function test( t ) {
	var arr = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	var out = typedarray( arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (default, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=float64, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=float32, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret64( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=complex128, complex typed array)', function test( t ) {
	var viewX;
	var viewY;
	var arr;
	var out;

	arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = typedarray( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	viewX = reinterpret64( arr, 0 );
	viewY = reinterpret128( out, 0 );
	t.strictEqual( viewY[ 0 ], viewX[ 0 ], 'returns expected value' );
	t.strictEqual( viewY[ 1 ], viewX[ 1 ], 'returns expected value' );
	t.strictEqual( viewY[ 2 ], viewX[ 2 ], 'returns expected value' );
	t.strictEqual( viewY[ 3 ], viewX[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=complex64, complex typed array)', function test( t ) {
	var viewX;
	var viewY;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = typedarray( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	viewX = reinterpret128( arr, 0 );
	viewY = reinterpret64( out, 0 );
	t.strictEqual( viewY[ 0 ], viewX[ 0 ], 'returns expected value' );
	t.strictEqual( viewY[ 1 ], viewX[ 1 ], 'returns expected value' );
	t.strictEqual( viewY[ 2 ], viewX[ 2 ], 'returns expected value' );
	t.strictEqual( viewY[ 3 ], viewX[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int32, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int16, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int8, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=uint32, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=uint16, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=uint8, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=uint8c, complex typed array)', function test( t ) {
	var view;
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	// Note: this is effectively a reinterpretation of the complex number array as an array of interleaved real and imaginary components
	out = typedarray( arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	view = reinterpret128( arr, 0 );
	t.strictEqual( out[ 0 ], view[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], view[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], view[ 2 ], 'returns expected value' );
	t.strictEqual( out[ 3 ], view[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (default, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float64, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float32, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex128, arraybuffer)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 16 );
	out = typedarray( buf, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=complex64, arraybuffer)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 8 );
	out = typedarray( buf, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );

	view = reinterpret64( out, 0 );
	t.strictEqual( view[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=bool, arraybuffer)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 2 );
	out = typedarray( buf, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpretBoolean( out, 0 );
	t.strictEqual( view[ 0 ], 0, 'returns expected value' );
	t.strictEqual( view[ 1 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int32, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint32, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int16, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint16, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int8, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 8, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.strictEqual( out[ 4 ], 0, 'returns expected value' );
	t.strictEqual( out[ 5 ], 0, 'returns expected value' );
	t.strictEqual( out[ 6 ], 0, 'returns expected value' );
	t.strictEqual( out[ 7 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 8, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.strictEqual( out[ 4 ], 0, 'returns expected value' );
	t.strictEqual( out[ 5 ], 0, 'returns expected value' );
	t.strictEqual( out[ 6 ], 0, 'returns expected value' );
	t.strictEqual( out[ 7 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8c, arraybuffer)', function test( t ) {
	var buf = new ArrayBuffer( 8 );
	var out = typedarray( buf, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 8, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.strictEqual( out[ 4 ], 0, 'returns expected value' );
	t.strictEqual( out[ 5 ], 0, 'returns expected value' );
	t.strictEqual( out[ 6 ], 0, 'returns expected value' );
	t.strictEqual( out[ 7 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (default, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = typedarray( buf, 8 );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float64, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = typedarray( buf, 8, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float32, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex128, arraybuffer, byteoffset)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 32 );
	out = typedarray( buf, 16, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=complex64, arraybuffer, byteoffset)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 16 );
	out = typedarray( buf, 8, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );

	view = reinterpret64( out, 0 );
	t.strictEqual( view[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=bool, arraybuffer, byteoffset)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 2 );
	out = typedarray( buf, 1, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 1, 'returns expected value' );

	view = reinterpretBoolean( out, 0 );
	t.strictEqual( view[ 0 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int32, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint32, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int16, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 6, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.strictEqual( out[ 4 ], 0, 'returns expected value' );
	t.strictEqual( out[ 5 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint16, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 6, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.strictEqual( out[ 4 ], 0, 'returns expected value' );
	t.strictEqual( out[ 5 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int8, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 12, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.strictEqual( out[ 4 ], 0, 'returns expected value' );
	t.strictEqual( out[ 5 ], 0, 'returns expected value' );
	t.strictEqual( out[ 6 ], 0, 'returns expected value' );
	t.strictEqual( out[ 7 ], 0, 'returns expected value' );
	t.strictEqual( out[ 8 ], 0, 'returns expected value' );
	t.strictEqual( out[ 9 ], 0, 'returns expected value' );
	t.strictEqual( out[ 10 ], 0, 'returns expected value' );
	t.strictEqual( out[ 11 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 12, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.strictEqual( out[ 4 ], 0, 'returns expected value' );
	t.strictEqual( out[ 5 ], 0, 'returns expected value' );
	t.strictEqual( out[ 6 ], 0, 'returns expected value' );
	t.strictEqual( out[ 7 ], 0, 'returns expected value' );
	t.strictEqual( out[ 8 ], 0, 'returns expected value' );
	t.strictEqual( out[ 9 ], 0, 'returns expected value' );
	t.strictEqual( out[ 10 ], 0, 'returns expected value' );
	t.strictEqual( out[ 11 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8c, arraybuffer, byteoffset)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 12, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.strictEqual( out[ 2 ], 0, 'returns expected value' );
	t.strictEqual( out[ 3 ], 0, 'returns expected value' );
	t.strictEqual( out[ 4 ], 0, 'returns expected value' );
	t.strictEqual( out[ 5 ], 0, 'returns expected value' );
	t.strictEqual( out[ 6 ], 0, 'returns expected value' );
	t.strictEqual( out[ 7 ], 0, 'returns expected value' );
	t.strictEqual( out[ 8 ], 0, 'returns expected value' );
	t.strictEqual( out[ 9 ], 0, 'returns expected value' );
	t.strictEqual( out[ 10 ], 0, 'returns expected value' );
	t.strictEqual( out[ 11 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (default, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = typedarray( buf, 8, 2 );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float64, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 32 );
	var out = typedarray( buf, 8, 2, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=float32, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 2, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=complex128, arraybuffer, byteoffset, length)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 64 );
	out = typedarray( buf, 16, 2, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret128( out, 0 );
	t.strictEqual( view[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 2 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 3 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=complex64, arraybuffer, byteoffset, length)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 32 );
	out = typedarray( buf, 8, 2, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpret64( out, 0 );
	t.strictEqual( view[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 2 ], 0.0, 'returns expected value' );
	t.strictEqual( view[ 3 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=bool, arraybuffer, byteoffset, length)', function test( t ) {
	var view;
	var buf;
	var out;

	buf = new ArrayBuffer( 4 );
	out = typedarray( buf, 1, 2, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	view = reinterpretBoolean( out, 0 );
	t.strictEqual( view[ 0 ], 0, 'returns expected value' );
	t.strictEqual( view[ 1 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int32, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 2, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint32, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 2, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int16, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 2, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint16, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 2, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=int8, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 2, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 2, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a typed array (dtype=uint8c, arraybuffer, byteoffset, length)', function test( t ) {
	var buf = new ArrayBuffer( 16 );
	var out = typedarray( buf, 4, 2, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], 0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0, 'returns expected value' );
	t.end();
});
