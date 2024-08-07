/* eslint-disable max-lines */

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
var Complex64Array = require( './../../complex64' );
var Complex128Array = require( './../../complex128' );
var BooleanArray = require( './../../bool' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var randu = require( '@stdlib/random/base/randu' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var realf = require( '@stdlib/complex/float32/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var imagf = require( '@stdlib/complex/float32/imag' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function (no options)', function test( t ) {
	t.strictEqual( typeof factory(), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (options)', function test( t ) {
	t.strictEqual( typeof factory( {} ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided a `highWaterMark` option which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
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
			factory({
				'highWaterMark': value
			});
		};
	}
});

tape( 'the function returns a function which throws an error if provided an unrecognized data type (only argument)', function test( t ) {
	var typedarraypool;
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

	typedarraypool = factory();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			typedarraypool( value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an unrecognized data type (length)', function test( t ) {
	var typedarraypool;
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

	typedarraypool = factory();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			typedarraypool( 10, value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an unrecognized data type (typed array)', function test( t ) {
	var typedarraypool;
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

	typedarraypool = factory();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			typedarraypool( new Float64Array( 10 ), value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an unrecognized data type (array-like object)', function test( t ) {
	var typedarraypool;
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

	typedarraypool = factory();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			typedarraypool( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an invalid array length or array-like object argument (no data type argument)', function test( t ) {
	var typedarraypool;
	var values;
	var i;

	values = [
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	typedarraypool = factory();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			typedarraypool( value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an invalid array length or array-like object argument (data type argument)', function test( t ) {
	var typedarraypool;
	var values;
	var i;

	values = [
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	typedarraypool = factory();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			typedarraypool( value, 'float64' );
		};
	}
});

tape( 'the function returns a function which returns a typed array (default)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool();
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=float64)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=float32)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=bool)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=complex128)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=complex64)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int32)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint32)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int16)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint16)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int8)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint8)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint8c)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (default, length)', function test( t ) {
	var typedarraypool = factory();
	var arr;

	arr = typedarraypool( 10 );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=float64, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=float32, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=bool, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=complex128, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=complex64, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int32, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint32, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int16, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint16, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int8, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint8, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint8c, length)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool( 10, 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (default, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=float64, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=float32, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=bool, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;
	var v;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ true, false, false, true ];
	out = typedarraypool( arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	v = out.get( 0 );
	t.strictEqual( v, arr[ 0 ], 'returns expected value' );

	v = out.get( 1 );
	t.strictEqual( v, arr[ 1 ], 'returns expected value' );

	v = out.get( 2 );
	t.strictEqual( v, arr[ 2 ], 'returns expected value' );

	v = out.get( 3 );
	t.strictEqual( v, arr[ 3 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=complex128, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;
	var v;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = typedarraypool( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	v = out.get( 0 );
	t.strictEqual( real( v ), arr[ 0 ], 'returns expected value' );
	t.strictEqual( imag( v ), arr[ 1 ], 'returns expected value' );

	v = out.get( 1 );
	t.strictEqual( real( v ), arr[ 2 ], 'returns expected value' );
	t.strictEqual( imag( v ), arr[ 3 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=complex64, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;
	var v;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = typedarraypool( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	v = out.get( 0 );
	t.strictEqual( realf( v ), arr[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), arr[ 1 ], 'returns expected value' );

	v = out.get( 1 );
	t.strictEqual( realf( v ), arr[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), arr[ 3 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int32, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint32, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int16, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint16, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int8, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint8, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint8c, array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = [];
	out = typedarraypool( arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = [ 1.0, 2.0, 3.0 ];
	out = typedarraypool( arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (default, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Float64Array( 0 );
	out = typedarraypool( arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=float64, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Float64Array( 0 );
	out = typedarraypool( arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=float32, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Uint32Array( 0 );
	out = typedarraypool( arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Uint32Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=bool, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;
	var v;

	typedarraypool = factory();

	arr = new Uint8Array( 0 );
	out = typedarraypool( arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Uint8Array( [ 1, 0, 0, 1 ] );
	out = typedarraypool( arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );

	v = out.get( 0 );
	t.strictEqual( v, true, 'returns expected value' );

	v = out.get( 1 );
	t.strictEqual( v, false, 'returns expected value' );

	v = out.get( 2 );
	t.strictEqual( v, false, 'returns expected value' );

	v = out.get( 3 );
	t.strictEqual( v, true, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=complex128, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;
	var v;

	typedarraypool = factory();

	arr = new Float64Array( 0 );
	out = typedarraypool( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = typedarraypool( arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	v = out.get( 0 );
	t.strictEqual( real( v ), arr[ 0 ], 'returns expected value' );
	t.strictEqual( imag( v ), arr[ 1 ], 'returns expected value' );

	v = out.get( 1 );
	t.strictEqual( real( v ), arr[ 2 ], 'returns expected value' );
	t.strictEqual( imag( v ), arr[ 3 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=complex64, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;
	var v;

	typedarraypool = factory();

	arr = new Float32Array( 0 );
	out = typedarraypool( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = typedarraypool( arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );

	v = out.get( 0 );
	t.strictEqual( realf( v ), arr[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), arr[ 1 ], 'returns expected value' );

	v = out.get( 1 );
	t.strictEqual( realf( v ), arr[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), arr[ 3 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int32, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Float32Array( 0 );
	out = typedarraypool( arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint32, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Uint8ClampedArray( 0 );
	out = typedarraypool( arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Uint8ClampedArray( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int16, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Float64Array( 0 );
	out = typedarraypool( arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint16, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Int8Array( 0 );
	out = typedarraypool( arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Int8Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=int8, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Int16Array( 0 );
	out = typedarraypool( arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Int16Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint8, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Int32Array( 0 );
	out = typedarraypool( arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Int32Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'the function returns a function which returns a typed array (dtype=uint8c, typed array)', function test( t ) {
	var typedarraypool;
	var arr;
	var out;

	typedarraypool = factory();

	arr = new Float32Array( 0 );
	out = typedarraypool( arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	arr = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = typedarraypool( arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, 3, 'returns expected value' );
	t.strictEqual( out[ 0 ], arr[ 0 ], 'returns expected value' );
	t.strictEqual( out[ 1 ], arr[ 1 ], 'returns expected value' );
	t.strictEqual( out[ 2 ], arr[ 2 ], 'returns expected value' );

	typedarraypool.free( out );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a `malloc` method which is a circular reference', function test( t ) {
	var typedarraypool = factory();
	t.strictEqual( typedarraypool, typedarraypool.malloc, 'is circular reference' );
	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (default)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc();
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=float64)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=float32)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=bool)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=complex128)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=complex64)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=int32)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=uint32)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=int16)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=uint16)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=int8)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=uint8)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=uint8c)', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	arr = typedarraypool.calloc( 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (default, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10 );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10 );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0.0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=float64, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'float64' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0.0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=float32, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'float32' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0.0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=bool, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var v;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'bool' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp.set( Boolean( i%2 ), i );
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( v, false, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=complex128, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var v;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'complex128' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp.set( new Complex128( randu()*256.0, 1.0 ), i );
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( real( v ), 0.0, 'returns expected value' );
		t.strictEqual( imag( v ), 0.0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=complex64, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var v;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'complex64' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp.set( new Complex64( randu()*256.0, 1.0 ), i );
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( realf( v ), 0.0, 'returns expected value' );
		t.strictEqual( imagf( v ), 0.0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=int32, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'int32' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=uint32, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'uint32' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=int16, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'int16' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=uint16, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'uint16' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=int8, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'int8' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=uint8, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'uint8' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method which returns a zero-initialized typed array (dtype=uint8c, length)', function test( t ) {
	var typedarraypool;
	var arr;
	var tmp;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	tmp = typedarraypool.malloc( 10, 'uint8c' );
	for ( i = 0; i < tmp.length; i++ ) {
		tmp[ i ] = randu() * 256.0;
	}
	typedarraypool.free( tmp );

	arr = typedarraypool.calloc( 10, 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.notEqual( arr, tmp, 'returns a new view' );
	t.strictEqual( arr.buffer, tmp.buffer, 'same array buffer' );

	t.strictEqual( arr.length, 10, 'returns expected value' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr[ i ], 0, 'returns expected value' );
	}

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method for "freeing" allocated typed arrays', function test( t ) {
	var typedarraypool;
	var arr;
	var buf;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	arr = typedarraypool( 10, 'uint8c' );
	buf = arr.buffer;
	typedarraypool.free( arr );

	for ( i = 0; i < 10; i++ ) {
		arr = typedarraypool( 10, 'uint8c' );
		t.strictEqual( arr.buffer, buf, 'returns expected value' );
		typedarraypool.free( arr );
	}
	typedarraypool.clear();
	t.end();
});

tape( 'attached to the returned function is a method for "freeing" allocated typed array buffers', function test( t ) {
	var typedarraypool;
	var arr;
	var buf;
	var i;

	typedarraypool = factory();
	typedarraypool.clear();

	arr = typedarraypool( 10, 'uint8c' );
	buf = arr.buffer;
	typedarraypool.free( buf );

	for ( i = 0; i < 10; i++ ) {
		arr = typedarraypool( 10, 'uint8c' );
		t.strictEqual( arr.buffer, buf, 'returns expected value' );
		typedarraypool.free( arr.buffer );
	}
	typedarraypool.clear();
	t.end();
});

tape( 'attached to the returned function is a method for "freeing" allocated typed arrays which does not allow for "freeing" allocated typed arrays more than once before being reallocated', function test( t ) {
	var typedarraypool;
	var bool;
	var arr;

	typedarraypool = factory();
	typedarraypool.clear();

	arr = typedarraypool( 10, 'uint8c' );
	bool = typedarraypool.free( arr );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = typedarraypool.free( arr );
	t.strictEqual( bool, false, 'returns expected value' );

	typedarraypool.clear();
	t.end();
});

tape( 'attached to the returned function is a method for "freeing" allocated typed array buffers which does not allow for "freeing" allocated typed array buffers more than once before being reallocated', function test( t ) {
	var typedarraypool;
	var bool;
	var arr;
	var buf;

	typedarraypool = factory();
	typedarraypool.clear();

	arr = typedarraypool( 10, 'uint8c' );
	buf = arr.buffer;
	bool = typedarraypool.free( buf );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = typedarraypool.free( buf );
	t.strictEqual( bool, false, 'returns expected value' );

	typedarraypool.clear();
	t.end();
});

tape( 'attached to the returned function is a method for "freeing" allocated typed array and typed array buffers which throws if not provided either a typed array or typed array buffer', function test( t ) {
	var typedarraypool;
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
		[],
		{},
		function noop() {}
	];

	typedarraypool = factory();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			typedarraypool.free( value );
		};
	}
});

tape( 'attached to the returned function is a property which returns the pool\'s high water mark', function test( t ) {
	var typedarraypool = factory();
	t.strictEqual( typeof typedarraypool.highWaterMark, 'number', 'has property' );
	t.end();
});

tape( 'the function supports specifying a high water mark which limits the total amount of memory a pool can allocate', function test( t ) {
	var typedarraypool;
	var arr1;
	var arr2;

	typedarraypool = factory({
		'highWaterMark': 64 // bytes
	});

	typedarraypool.clear();

	arr1 = typedarraypool( 8, 'float64' );
	t.strictEqual( arr1.length, 8, 'returns expected value' );
	t.strictEqual( arr1.byteLength, 64, 'returns expected value' );

	// Specify an array length:
	arr2 = typedarraypool( 1e6, 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	arr2 = typedarraypool.malloc( 1e6, 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	arr2 = typedarraypool.calloc( 1e6, 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	// Provide an array from which to copy elements:
	arr2 = typedarraypool( new Float64Array( 20 ), 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	arr2 = typedarraypool.malloc( new Float64Array( 20 ), 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	arr2 = typedarraypool.calloc( new Float64Array( 20 ), 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	typedarraypool.free( arr1 );

	// Specify an array length:
	arr2 = typedarraypool( 1e6, 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	arr2 = typedarraypool.malloc( 1e6, 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	arr2 = typedarraypool.calloc( 1e6, 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	// Provide an array from which to copy elements:
	arr2 = typedarraypool( new Float64Array( 20 ), 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	arr2 = typedarraypool.malloc( new Float64Array( 20 ), 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	arr2 = typedarraypool.calloc( new Float64Array( 20 ), 'float64' );
	t.strictEqual( arr2, null, 'returns expected value' );

	// Create an array which is less than or equal to the high water mark:
	arr2 = typedarraypool( 8, 'float64' );
	t.strictEqual( arr2.length, 8, 'returns expected value' );
	t.strictEqual( arr2.byteLength, 64, 'returns expected value' );

	typedarraypool.free( arr2 );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a property which returns the total number of accumulated bytes', function test( t ) {
	var typedarraypool;
	var arr;

	typedarraypool = factory();

	typedarraypool.clear();
	t.strictEqual( typedarraypool.nbytes, 0, 'returns expected value' );

	arr = typedarraypool( 10, 'uint8' );
	t.strictEqual( typedarraypool.nbytes > 0 && typedarraypool.nbytes < typedarraypool.highWaterMark, true, 'returns expected value' );

	typedarraypool.free( arr );
	typedarraypool.clear();

	t.end();
});

tape( 'attached to the returned function is a method for clearing a typed array pool of freed typed array buffers', function test( t ) {
	var typedarraypool;
	var arrs;
	var i;

	typedarraypool = factory();

	typedarraypool.clear();
	t.strictEqual( typedarraypool.nbytes, 0, 'returns expected value' );

	arrs = new Array( 10 );
	for ( i = 0; i < arrs.length; i++ ) {
		arrs[ i ] = typedarraypool( 10, 'uint8' );
		t.strictEqual( typedarraypool.nbytes > 0 && typedarraypool.nbytes < typedarraypool.highWaterMark, true, 'returns expected value' );
	}
	for ( i = 0; i < arrs.length; i++ ) {
		typedarraypool.free( arrs[ i ] );
	}
	t.strictEqual( typedarraypool.nbytes > 0 && typedarraypool.nbytes < typedarraypool.highWaterMark, true, 'returns expected value' );

	typedarraypool.clear();
	t.strictEqual( typedarraypool.nbytes, 0, 'returns expected value' );

	t.end();
});
