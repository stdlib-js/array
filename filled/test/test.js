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
var proxyquire = require( 'proxyquire' );
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
var ArrayBuffer = require( './../../buffer' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var iterConstant = require( '@stdlib/iter/constant' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var filledarray = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasIteratorSymbolSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof filledarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unrecognized data type (one argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarray',
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
			filledarray( value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarray',
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
			filledarray( 1.0, 10, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (typed array)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarray',
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
			filledarray( 1.0, new Float64Array( 10 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (array-like object)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarray',
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
			filledarray( 1.0, [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarray',
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
			filledarray( 1.0, new ArrayBuffer( 16 ), value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarray',
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
			filledarray( 1.0, new ArrayBuffer( 16 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarray',
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
			filledarray( 1.0, new ArrayBuffer( 16 ), 0, 1, value );
		};
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a generic array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			filledarray( 1.0, value, 'generic' );
		};
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a generic array (no iterator symbol support)', function test( t ) {
	var filledarray;
	var values;
	var i;

	filledarray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport
	});

	values = [
		'5',
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
			filledarray( 1.0, value, 'generic' );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a generic array (iterator symbol support)', function test( t ) {
	var filledarray;
	var values;
	var i;

	filledarray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport
	});

	values = [
		'5',
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
			filledarray( 1.0, value, 'generic' );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a generic array (non-function iterator symbol property)', function test( t ) {
	var filledarray;
	var values;
	var i;

	filledarray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	values = [
		'5',
		5,
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
			var obj = {
				'__ITERATOR_SYMBOL__': value
			};
			filledarray( 1.0, obj, 'generic' );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a generic array (`next` property is not a function)', function test( t ) {
	var filledarray;
	var values;
	var i;

	filledarray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	values = [
		'5',
		5,
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
			var obj = {
				'__ITERATOR_SYMBOL__': iterator
			};
			filledarray( 1.0, obj, 'generic' );
		};

		function iterator() {
			return {
				'next': value
			};
		}
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a typed array (no iterator symbol support)', function test( t ) {
	var filledarray;
	var values;
	var i;

	filledarray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport
	});

	values = [
		'5',
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
			filledarray( 1.0, value, 'float64' );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a typed array (iterator symbol support)', function test( t ) {
	var filledarray;
	var values;
	var i;

	filledarray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport
	});

	values = [
		'5',
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
			filledarray( 1.0, value, 'float64' );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a typed array (non-function iterator symbol property)', function test( t ) {
	var filledarray;
	var values;
	var i;

	filledarray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	values = [
		'5',
		5,
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
			var obj = {
				'__ITERATOR_SYMBOL__': value
			};
			filledarray( 1.0, obj, 'float64' );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a typed array (`next` property is not a function)', function test( t ) {
	var filledarray;
	var values;
	var i;

	filledarray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	values = [
		'5',
		5,
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
			var obj = {
				'__ITERATOR_SYMBOL__': iterator
			};
			filledarray( 1.0, obj, 'float64' );
		};

		function iterator() {
			return {
				'next': value
			};
		}
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided valid arguments when attempting to create a generic array (arraybuffer, byteoffset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
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
			filledarray( 1.0, value, 1, 'generic' );
		};
	}
});

tape( 'the function throws an error if not provided valid arguments when attempting to create a generic array (arraybuffer, byteoffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
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
			filledarray( 1.0, value, 1, 1, 'generic' );
		};
	}
});

tape( 'the function returns a filled array (default)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( 0 );

	arr = filledarray();
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( 0 );

	arr = filledarray( 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float32)', function test( t ) {
	var expected;
	var arr;

	expected = new Float32Array( 0 );

	arr = filledarray( 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool)', function test( t ) {
	var expected;
	var arr;

	expected = new BooleanArray( 0 );

	arr = filledarray( 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64)', function test( t ) {
	var expected;
	var arr;

	expected = new Complex64Array( 0 );

	arr = filledarray( 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128)', function test( t ) {
	var expected;
	var arr;

	expected = new Complex128Array( 0 );

	arr = filledarray( 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32)', function test( t ) {
	var expected;
	var arr;

	expected = new Int32Array( 0 );

	arr = filledarray( 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint32Array( 0 );

	arr = filledarray( 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16)', function test( t ) {
	var expected;
	var arr;

	expected = new Int16Array( 0 );

	arr = filledarray( 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint16Array( 0 );

	arr = filledarray( 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8)', function test( t ) {
	var expected;
	var arr;

	expected = new Int8Array( 0 );

	arr = filledarray( 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( 0 );

	arr = filledarray( 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8ClampedArray( 0 );

	arr = filledarray( 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic)', function test( t ) {
	var expected;
	var arr;

	expected = [];

	arr = filledarray( 'generic' );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = filledarray( 1.0, 5 );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, default, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	arr = filledarray( 0.0, 5 );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = filledarray( 1.0, 5, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=float64, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	arr = filledarray( 0.0, 5, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float32, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = filledarray( 1.0, 5, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=float32, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	arr = filledarray( 0.0, 5, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=false, dtype=bool, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( [ 0, 0, 0, 0, 0 ] );

	arr = filledarray( false, 5, 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=true, dtype=bool, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1 ] );

	arr = filledarray( true, 5, 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=complex128, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ); // eslint-disable-line max-len

	arr = filledarray( new Complex128( 0.0, 0.0 ), 5, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=complex64, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ); // eslint-disable-line max-len

	arr = filledarray( new Complex64( 0.0, 0.0 ), 5, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Int32Array( [ 1, 1, 1, 1, 1 ] );

	arr = filledarray( 1, 5, 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=int32, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Int32Array( [ 0, 0, 0, 0, 0 ] );

	arr = filledarray( 0, 5, 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint32Array( [ 1, 1, 1, 1, 1 ] );

	arr = filledarray( 1, 5, 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=uint32, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint32Array( [ 0, 0, 0, 0, 0 ] );

	arr = filledarray( 0, 5, 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Int16Array( [ 1, 1, 1, 1, 1 ] );

	arr = filledarray( 1, 5, 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=int16, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Int16Array( [ 0, 0, 0, 0, 0 ] );

	arr = filledarray( 0, 5, 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint16Array( [ 1, 1, 1, 1, 1 ] );

	arr = filledarray( 1, 5, 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=uint16, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint16Array( [ 0, 0, 0, 0, 0 ] );

	arr = filledarray( 0, 5, 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Int8Array( [ 1, 1, 1, 1, 1 ] );

	arr = filledarray( 1, 5, 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=int8, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Int8Array( [ 0, 0, 0, 0, 0 ] );

	arr = filledarray( 0, 5, 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1 ] );

	arr = filledarray( 1, 5, 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=uint8, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( [ 0, 0, 0, 0, 0 ] );

	arr = filledarray( 0, 5, 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1 ] );

	arr = filledarray( 1, 5, 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=uint8c, length)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8ClampedArray( [ 0, 0, 0, 0, 0 ] );

	arr = filledarray( 0, 5, 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic, length)', function test( t ) {
	var expected;
	var arr;

	expected = [ 1, 1, 1, 1, 1 ];

	arr = filledarray( 1, 5, 'generic' );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (value=0, dtype=generic, length)', function test( t ) {
	var expected;
	var arr;

	expected = [ 0, 0, 0, 0, 0 ];

	arr = filledarray( 0, 5, 'generic' );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1.0, arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1.0, arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float32, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1.0, arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8Array( [ 0, 0 ] );

	arr = [ 2.0, 2.0 ];
	out = filledarray( false, arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	expected = new Uint8Array( [ 1, 1 ] );

	arr = [ 2.0, 2.0 ];
	out = filledarray( true, arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	arr = [ 2.0, 2.0 ];
	out = filledarray( new Complex128( 1.0, 1.0 ), arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	arr = [ 2.0, 2.0 ];
	out = filledarray( new Complex64( 1.0, 1.0 ), arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int32Array( [ 1, 1, 1 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1, arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint32Array( [ 1, 1, 1 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1, arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int16Array( [ 1, 1, 1 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1, arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint16Array( [ 1, 1, 1 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1, arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int8Array( [ 1, 1, 1 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1, arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8Array( [ 1, 1, 1 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1, arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1 ] );

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1, arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic, array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = [ 1.0, 1.0, 1.0 ];

	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarray( 1.0, arr, 'generic' );
	t.strictEqual( instanceOf( out, Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1.0, arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1.0, arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float32, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1.0, arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8Array( [ 0, 0, 0, 0 ] );

	arr = new Float64Array( [ 2.0, 2.0, 2.0, 2.0 ] );
	out = filledarray( false, arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	expected = new Uint8Array( [ 1, 1, 1, 1 ] );

	arr = new Float64Array( [ 2.0, 2.0, 2.0, 2.0 ] );
	out = filledarray( true, arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	arr = new Complex128Array( [ 2.0, 2.0, 2.0, 2.0 ] );
	out = filledarray( new Complex128( 1.0, 1.0 ), arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	arr = new Complex64Array( [ 2.0, 2.0, 2.0, 2.0 ] );
	out = filledarray( new Complex64( 1.0, 1.0 ), arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int32Array( [ 1, 1, 1 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1, arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint32Array( [ 1, 1, 1 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1, arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int16Array( [ 1, 1, 1 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1, arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint16Array( [ 1, 1, 1 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1, arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int8Array( [ 1, 1, 1 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1, arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8Array( [ 1, 1, 1 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1, arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1 ] );

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1, arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic, typed array)', function test( t ) {
	var expected;
	var arr;
	var out;

	expected = [ 1.0, 1.0, 1.0 ];

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarray( 1.0, arr, 'generic' );
	t.strictEqual( instanceOf( out, Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (default, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1.0, buf );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=float64, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1.0, buf, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=float32, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1.0, buf, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=bool, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8Array( [ 0, 0 ] );

	buf = new ArrayBuffer( 2 );
	out = filledarray( false, buf, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	expected = new Uint8Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 2 );
	out = filledarray( true, buf, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex128, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( new Complex128( 1.0, 1.0 ), buf, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex64, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( new Complex64( 1.0, 1.0 ), buf, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int32, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int32Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1, buf, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint32, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint32Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1, buf, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int16, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int16Array( [ 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1, buf, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint16, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint16Array( [ 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1, buf, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int8, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int8Array( [ 1, 1, 1, 1, 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1, buf, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1, buf, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8c, arraybuffer)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( 1, buf, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function throws an error if provided an ArrayBuffer when attempting to create a generic array (dtype=generic, arraybuffer)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var buf = new ArrayBuffer( 8 );
		return filledarray( 1, buf, 'generic' );
	}
});

tape( 'the function returns a filled typed array (default, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	buf = new ArrayBuffer( 32 );
	out = filledarray( 1.0, buf, 8 );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=float64, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	buf = new ArrayBuffer( 32 );
	out = filledarray( 1.0, buf, 8, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=float32, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1.0, buf, 4, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=bool, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8Array( [ 0, 0, 0, 0 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( false, buf, 4, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	expected = new Uint8Array( [ 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 8 );
	out = filledarray( true, buf, 4, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex128, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	buf = new ArrayBuffer( 64 );
	out = filledarray( new Complex128( 1.0, 1.0 ), buf, 32, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex64, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	buf = new ArrayBuffer( 32 );
	out = filledarray( new Complex64( 1.0, 1.0 ), buf, 16, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int32, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int32Array( [ 1, 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint32, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint32Array( [ 1, 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int16, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int16Array( [ 1, 1, 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint16, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint16Array( [ 1, 1, 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int8, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int8Array( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8c, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function throws an error if provided an ArrayBuffer when attempting to create a generic array (dtype=generic, arraybuffer, byteoffset)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var buf = new ArrayBuffer( 8 );
		return filledarray( 1, buf, 4, 'generic' );
	}
});

tape( 'the function returns a filled typed array (default, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0 ] );

	buf = new ArrayBuffer( 32 );
	out = filledarray( 1.0, buf, 8, 2 );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=float64, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0 ] );

	buf = new ArrayBuffer( 32 );
	out = filledarray( 1.0, buf, 8, 2, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=float32, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1.0, buf, 4, 2, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=bool, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8Array( [ 0, 0, 0, 0 ] );

	buf = new ArrayBuffer( 6 );
	out = filledarray( false, buf, 1, 4, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	expected = new Uint8Array( [ 1, 1, 1, 1 ] );

	buf = new ArrayBuffer( 6 );
	out = filledarray( true, buf, 1, 4, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex128, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	buf = new ArrayBuffer( 64 );
	out = filledarray( new Complex128( 1.0, 1.0 ), buf, 16, 2, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex64, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	buf = new ArrayBuffer( 32 );
	out = filledarray( new Complex64( 1.0, 1.0 ), buf, 8, 2, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int32, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int32Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 2, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint32, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint32Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 2, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int16, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int16Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 2, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint16, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint16Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 2, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int8, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Int8Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 2, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8Array( [ 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 2, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8c, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var buf;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1 ] );

	buf = new ArrayBuffer( 16 );
	out = filledarray( 1, buf, 4, 2, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function throws an error if provided an ArrayBuffer when attempting to create a generic array (dtype=generic, arraybuffer, byteoffset, length)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var buf = new ArrayBuffer( 8 );
		return filledarray( 1, buf, 4, 1, 'generic' );
	}
});

tape( 'the function returns a filled array (default, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	arr = iterConstant( 3.0, {
		'iter': 3
	});
	out = filledarray( 1.0, arr );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	arr = iterConstant( 3.0, {
		'iter': 3
	});
	out = filledarray( 1.0, arr, 'float64' );
	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float32, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0 ] );

	arr = iterConstant( 3.0, {
		'iter': 3
	});
	out = filledarray( 1.0, arr, 'float32' );
	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8Array( [ 0, 0 ] );

	arr = iterConstant( 3.0, {
		'iter': 2
	});
	out = filledarray( false, arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	expected = new Uint8Array( [ 1, 1 ] );

	arr = iterConstant( 0.0, {
		'iter': 2
	});
	out = filledarray( true, arr, 'bool' );
	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	arr = iterConstant( 3.0, {
		'iter': 2
	});
	out = filledarray( new Complex128( 1.0, 1.0 ), arr, 'complex128' );
	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	arr = iterConstant( 3.0, {
		'iter': 2
	});
	out = filledarray( new Complex64( 1.0, 1.0 ), arr, 'complex64' );
	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int32Array( [ 1, 1, 1 ] );

	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarray( 1, arr, 'int32' );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint32Array( [ 1, 1, 1 ] );

	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarray( 1, arr, 'uint32' );
	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int16Array( [ 1, 1, 1 ] );

	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarray( 1, arr, 'int16' );
	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint16Array( [ 1, 1, 1 ] );

	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarray( 1, arr, 'uint16' );
	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Int8Array( [ 1, 1, 1 ] );

	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarray( 1, arr, 'int8' );
	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8Array( [ 1, 1, 1 ] );

	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarray( 1, arr, 'uint8' );
	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1 ] );

	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarray( 1, arr, 'uint8c' );
	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic, iterator)', opts, function test( t ) {
	var expected;
	var arr;
	var out;

	expected = [ 1.0, 1.0, 1.0 ];

	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarray( 1.0, arr, 'generic' );
	t.strictEqual( instanceOf( out, Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
