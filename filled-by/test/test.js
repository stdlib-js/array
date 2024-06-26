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

/* eslint-disable max-len */

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
var constantFunction = require( '@stdlib/utils/constant-function' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var filledarrayBy = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasIteratorSymbolSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof filledarrayBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if only provided callback arguments', function test( t ) {
	t.throws( clbk1, TypeError, 'throws an error' );
	t.throws( clbk2, TypeError, 'throws an error' );
	t.throws( clbk3, TypeError, 'throws an error' );
	t.end();

	function clbk1() {
		filledarrayBy( constantFunction( 1.0 ) );
	}

	function clbk2() {
		filledarrayBy( constantFunction( 1.0 ), {} );
	}

	function clbk3() {
		filledarrayBy( constantFunction( 1.0 ), constantFunction( 1.0 ) );
	}
});

tape( 'the function throws an error if provided an unrecognized data type (only argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (length)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( 10, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (length; thisArg)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( 10, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (typed array)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( new Float64Array( 10 ), value );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (typed array; thisArg)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( new Float64Array( 10 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (array-like object)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (array-like object; thisArg)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( [ 1, 2, 3 ], value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (arraybuffer)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( new ArrayBuffer( 8 ), value );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (arraybuffer; thisArg)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( new ArrayBuffer( 8 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (arraybuffer, byteoffset)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( new ArrayBuffer( 16 ), 8, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (arraybuffer, byteoffset; thisArg)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( new ArrayBuffer( 16 ), 8, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (arraybuffer, byteoffset, length)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( new ArrayBuffer( 16 ), 8, 1, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (arraybuffer, byteoffset, length; thisArg)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( new ArrayBuffer( 16 ), 8, 1, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (iterator)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( iterConstant( 1.0 ), value );
		};
	}
});

tape( 'the function throws an error if provided an invalid callback argument (iterator; thisArg)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filledarrayBy( iterConstant( 1.0 ), value, {} );
		};
	}
});

tape( 'the function throws an error if only provided data type and callback arguments', function test( t ) {
	t.throws( clbk1, TypeError, 'throws an error' );
	t.throws( clbk2, TypeError, 'throws an error' );
	t.throws( clbk3, TypeError, 'throws an error' );
	t.end();

	function clbk1() {
		filledarrayBy( 'float64', constantFunction( 1.0 ) );
	}

	function clbk2() {
		filledarrayBy( 'float64', constantFunction( 1.0 ), {} );
	}

	function clbk3() {
		filledarrayBy( 'float64', constantFunction( 1.0 ), constantFunction( 1.0 ) );
	}
});

tape( 'the function throws an error if provided an unrecognized data type (length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( 10, value, constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (length; thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( 10, value, constantFunction( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (typed array)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( new Float64Array( 10 ), value, constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (typed array; thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( new Float64Array( 10 ), value, constantFunction( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (array-like object)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( [ 1, 2, 3 ], value, constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (array-like object; thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( [ 1, 2, 3 ], value, constantFunction( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( new ArrayBuffer( 16 ), value, constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer; thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( new ArrayBuffer( 16 ), value, constantFunction( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( new ArrayBuffer( 16 ), 0, value, constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset; thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( new ArrayBuffer( 16 ), 0, value, constantFunction( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( new ArrayBuffer( 16 ), 0, 1, value, constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type (ArrayBuffer, byteOffset, length; thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'filledarrayBy',
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
			filledarrayBy( new ArrayBuffer( 16 ), 0, 1, value, constantFunction( 1.0 ), {} );
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
			filledarrayBy( value, 'generic', constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a generic array (thisArg)', function test( t ) {
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
			filledarrayBy( value, 'generic', constantFunction( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a generic array (no iterator symbol support)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( value, 'generic', constantFunction( 1.0 ) );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a generic array (no iterator symbol support; thisArg)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( value, 'generic', constantFunction( 1.0 ), {} );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a generic array (iterator symbol support)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( value, 'generic', constantFunction( 1.0 ) );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a generic array (iterator symbol support; thisArg)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( value, 'generic', constantFunction( 1.0 ), {} );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a generic array (non-function iterator symbol property)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( obj, 'generic', constantFunction( 1.0 ) );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a generic array (non-function iterator symbol property; thisArg)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( obj, 'generic', constantFunction( 1.0 ), {} );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a generic array (`next` property is not a function)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( obj, 'generic', constantFunction( 1.0 ) );
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

tape( 'the function throws an error if not provided a valid iterable when attempting to create a generic array (`next` property is not a function; thisArg)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( obj, 'generic', constantFunction( 1.0 ), {} );
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

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a typed array', function test( t ) {
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
			filledarrayBy( value, 'float64', constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a typed array (thisArg)', function test( t ) {
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
			filledarrayBy( value, 'float64', constantFunction( 1.0 ), {} );
		};
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a typed array (no iterator symbol support)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( value, 'float64', constantFunction( 1.0 ) );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a typed array (no iterator symbol support; thisArg)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( value, 'float64', constantFunction( 1.0 ), {} );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a typed array (iterator symbol support)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( value, 'float64', constantFunction( 1.0 ) );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a length, typed array, array-like object, or an iterable when attempting to create a typed array (iterator symbol support; thisArg)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( value, 'float64', constantFunction( 1.0 ), {} );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a typed array (non-function iterator symbol property)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( obj, 'float64', constantFunction( 1.0 ) );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a typed array (non-function iterator symbol property; thisArg)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( obj, 'float64', constantFunction( 1.0 ), {} );
		};
	}

	function hasSupport() {
		return true;
	}
});

tape( 'the function throws an error if not provided a valid iterable when attempting to create a typed array (`next` property is not a function)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( obj, 'float64', constantFunction( 1.0 ) );
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

tape( 'the function throws an error if not provided a valid iterable when attempting to create a typed array (`next` property is not a function; thisArg)', function test( t ) {
	var filledarrayBy;
	var values;
	var i;

	filledarrayBy = proxyquire( './../lib/main.js', {
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
			filledarrayBy( obj, 'float64', constantFunction( 1.0 ), {} );
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
			filledarrayBy( value, 1, 'generic', constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if not provided valid arguments when attempting to create a generic array (arraybuffer, byteoffset; thisArg)', function test( t ) {
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
			filledarrayBy( value, 1, 'generic', constantFunction( 1.0 ), {} );
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
			filledarrayBy( value, 1, 1, 'generic', constantFunction( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if not provided valid arguments when attempting to create a generic array (arraybuffer, byteoffset, length; thisArg)', function test( t ) {
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
			filledarrayBy( value, 1, 1, 'generic', constantFunction( 1.0 ), {} );
		};
	}
});

tape( 'the function returns a filled array (default)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( 0 );
	arr = filledarrayBy();

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( 0 );
	arr = filledarrayBy( 'float64' );

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float32)', function test( t ) {
	var expected;
	var arr;

	expected = new Float32Array( 0 );
	arr = filledarrayBy( 'float32' );

	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool)', function test( t ) {
	var expected;
	var arr;

	expected = new BooleanArray( 0 );
	arr = filledarrayBy( 'bool' );

	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128)', function test( t ) {
	var expected;
	var arr;

	expected = new Complex128Array( 0 );
	arr = filledarrayBy( 'complex128' );

	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64)', function test( t ) {
	var expected;
	var arr;

	expected = new Complex64Array( 0 );
	arr = filledarrayBy( 'complex64' );

	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32)', function test( t ) {
	var expected;
	var arr;

	expected = new Int32Array( 0 );
	arr = filledarrayBy( 'int32' );

	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint32Array( 0 );
	arr = filledarrayBy( 'uint32' );

	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16)', function test( t ) {
	var expected;
	var arr;

	expected = new Int16Array( 0 );
	arr = filledarrayBy( 'int16' );

	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint16Array( 0 );
	arr = filledarrayBy( 'uint16' );

	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8)', function test( t ) {
	var expected;
	var arr;

	expected = new Int8Array( 0 );
	arr = filledarrayBy( 'int8' );

	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( 0 );
	arr = filledarrayBy( 'uint8' );

	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8ClampedArray( 0 );
	arr = filledarrayBy( 'uint8c' );

	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic)', function test( t ) {
	var expected;
	var arr;

	expected = [];
	arr = filledarrayBy( 'generic' );

	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = filledarrayBy( 5, clbk );

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, length=0)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Float64Array();

	clbk = constantFunction( 1.0 );
	arr = filledarrayBy( 0, clbk );

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, length; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	indices = [];
	ctx = {
		'count': 0
	};
	arr = filledarrayBy( 5, clbk, ctx );

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled array (default, length; thisArg=function)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	indices = [];
	ctx = {
		'count': 0
	};
	arr = filledarrayBy( 5, clbk, context );

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this(); // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}

	function context() {
		ctx.count += 1;
	}
});

tape( 'the function returns a filled array (dtype=float64, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = filledarrayBy( 5, 'float64', clbk );

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, length; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	indices = [];
	ctx = {
		'count': 0
	};
	arr = filledarrayBy( 5, 'float64', clbk, ctx );

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled array (dtype=float64, length; thisArg=function)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	indices = [];
	ctx = {
		'count': 0
	};
	arr = filledarrayBy( 5, 'float64', clbk, context );

	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this(); // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}

	function context() {
		ctx.count += 1;
	}
});

tape( 'the function returns a filled array (dtype=float32, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = filledarrayBy( 5, 'float32', clbk );

	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( true );
	arr = filledarrayBy( 5, 'bool', clbk );

	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex128( 1.0, 1.0 ) );
	arr = filledarrayBy( 5, 'complex128', clbk );

	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex64( 1.0, 1.0 ) );
	arr = filledarrayBy( 5, 'complex64', clbk );

	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Int32Array( [ 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = filledarrayBy( 5, 'int32', clbk );

	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Uint32Array( [ 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = filledarrayBy( 5, 'uint32', clbk );

	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Int16Array( [ 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = filledarrayBy( 5, 'int16', clbk );

	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Uint16Array( [ 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = filledarrayBy( 5, 'uint16', clbk );

	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Int8Array( [ 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = filledarrayBy( 5, 'int8', clbk );

	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = filledarrayBy( 5, 'uint8', clbk );

	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = filledarrayBy( 5, 'uint8c', clbk );

	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic, length)', function test( t ) {
	var expected;
	var clbk;
	var arr;

	expected = [ 1, 1, 1, 1, 1 ];

	clbk = constantFunction( 1 );
	arr = filledarrayBy( 5, 'generic', clbk );

	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, array; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled array (dtype=float64, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'float64', clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, array; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'float64', clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled array (dtype=float32, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'float32', clbk );

	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8Array( [ 0, 0, 0, 0 ] );

	clbk = constantFunction( false );
	arr = [ 1.0, 2.0, 3.0, 4.0 ];
	out = filledarrayBy( arr, 'bool', clbk );

	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex128( 1.0, 1.0 ) );
	arr = [ 1.0, 2.0 ];
	out = filledarrayBy( arr, 'complex128', clbk );

	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex64( 1.0, 1.0 ) );
	arr = [ 1.0, 2.0 ];
	out = filledarrayBy( arr, 'complex64', clbk );

	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int32Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'int32', clbk );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint32Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'uint32', clbk );

	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int16Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'int16', clbk );

	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint16Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'uint16', clbk );

	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int8Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'int8', clbk );

	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'uint8', clbk );

	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'uint8c', clbk );

	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic, array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = [ 1.0, 1.0, 1.0 ];

	clbk = constantFunction( 1.0 );
	arr = [ 1.0, 2.0, 3.0 ];
	out = filledarrayBy( arr, 'generic', clbk );

	t.strictEqual( instanceOf( out, Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, typed array; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled array (dtype=float64, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'float64', clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, typed array; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled array (dtype=float32, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'float32', clbk );

	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8Array( [ 1, 1, 1, 1 ] );

	clbk = constantFunction( true );
	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = filledarrayBy( arr, 'bool', clbk );

	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex128( 1.0, 1.0 ) );
	arr = new Float64Array( [ 1.0, 2.0 ] );
	out = filledarrayBy( arr, 'complex128', clbk );

	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex64( 1.0, 1.0 ) );
	arr = new Float64Array( [ 1.0, 2.0 ] );
	out = filledarrayBy( arr, 'complex64', clbk );

	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int32Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'int32', clbk );

	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint32Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'uint32', clbk );

	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int16Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'int16', clbk );

	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint16Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'uint16', clbk );

	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int8Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'int8', clbk );

	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'uint8', clbk );

	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'uint8c', clbk );

	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic, typed array)', function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = [ 1.0, 1.0, 1.0 ];

	clbk = constantFunction( 1.0 );
	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = filledarrayBy( arr, 'generic', clbk );

	t.strictEqual( instanceOf( out, Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (default, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, arraybuffer; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled typed array (dtype=float64, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'float64', clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, arraybuffer; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'float64', clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled typed array (dtype=float32, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'float32', clbk );

	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=bool, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8Array( [ 0, 0, 0, 0 ] );

	clbk = constantFunction( false );
	buf = new ArrayBuffer( 4 );
	out = filledarrayBy( buf, 'bool', clbk );

	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex128, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex128( 1.0, 1.0 ) );
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 'complex128', clbk );

	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex64, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex64( 1.0, 1.0 ) );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 'complex64', clbk );

	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int32, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int32Array( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'int32', clbk );

	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint32, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint32Array( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'uint32', clbk );

	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int16, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int16Array( [ 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'int16', clbk );

	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint16, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint16Array( [ 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'uint16', clbk );

	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int8, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int8Array( [ 1, 1, 1, 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'int8', clbk );

	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'uint8', clbk );

	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8c, arraybuffer)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 'uint8c', clbk );

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
		return filledarrayBy( buf, 'generic', constantFunction( 1.0 ) );
	}
});

tape( 'the function throws an error if provided an ArrayBuffer when attempting to create a generic array (dtype=generic, arraybuffer; thisArg)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var buf = new ArrayBuffer( 8 );
		return filledarrayBy( buf, 'generic', constantFunction( 1.0 ), {} );
	}
});

tape( 'the function returns a filled typed array (default, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, arraybuffer, byteoffset; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled typed array (dtype=float64, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, 'float64', clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, arraybuffer, byteoffset; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, 'float64', clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled typed array (dtype=float32, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 'float32', clbk );

	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=bool, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8Array( [ 1, 1, 1, 1 ] );

	clbk = constantFunction( true );
	buf = new ArrayBuffer( 6 );
	out = filledarrayBy( buf, 2, 'bool', clbk );

	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex128, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex128( 1.0, 1.0 ) );
	buf = new ArrayBuffer( 48 );
	out = filledarrayBy( buf, 16, 'complex128', clbk );

	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex64, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex64( 1.0, 1.0 ) );
	buf = new ArrayBuffer( 24 );
	out = filledarrayBy( buf, 8, 'complex64', clbk );

	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int32, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int32Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 'int32', clbk );
	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint32, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint32Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 'uint32', clbk );

	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int16, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int16Array( [ 1, 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 'int16', clbk );

	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint16, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint16Array( [ 1, 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 'uint16', clbk );

	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int8, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int8Array( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 'int8', clbk );

	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 'uint8', clbk );

	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8c, arraybuffer, byteoffset)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 'uint8c', clbk );
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
		return filledarrayBy( buf, 4, 'generic', constantFunction( 1.0 ) );
	}
});

tape( 'the function throws an error if provided an ArrayBuffer when attempting to create a generic array (dtype=generic, arraybuffer, byteoffset; thisArg)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var buf = new ArrayBuffer( 8 );
		return filledarrayBy( buf, 4, 'generic', constantFunction( 1.0 ), {} );
	}
});

tape( 'the function returns a filled typed array (default, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, 2, clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, arraybuffer, byteoffset, length; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, 2, clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled typed array (dtype=float64, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, 2, 'float64', clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, arraybuffer, byteoffset, length; thisArg)', function test( t ) {
	var expected;
	var indices;
	var ctx;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0 ] );

	ctx = {
		'count': 0
	};
	indices = [];
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, 2, 'float64', clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled typed array (dtype=float32, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 2, 'float32', clbk );

	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=bool, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8Array( [ 0, 0, 0, 0 ] );

	clbk = constantFunction( false );
	buf = new ArrayBuffer( 8 );
	out = filledarrayBy( buf, 2, 4, 'bool', clbk );

	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex128, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex128( 1.0, 1.0 ) );
	buf = new ArrayBuffer( 64 );
	out = filledarrayBy( buf, 16, 2, 'complex128', clbk );

	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=complex64, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex64( 1.0, 1.0 ) );
	buf = new ArrayBuffer( 32 );
	out = filledarrayBy( buf, 8, 2, 'complex64', clbk );

	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a typed array (dtype=int32, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int32Array( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 2, 'int32', clbk );

	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint32, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint32Array( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 2, 'uint32', clbk );

	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int16, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int16Array( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 2, 'int16', clbk );

	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint16, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint16Array( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 2, 'uint16', clbk );

	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=int8, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Int8Array( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 2, 'int8', clbk );

	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8Array( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 2, 'uint8', clbk );

	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled typed array (dtype=uint8c, arraybuffer, byteoffset, length)', function test( t ) {
	var expected;
	var clbk;
	var buf;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1 ] );

	clbk = constantFunction( 1 );
	buf = new ArrayBuffer( 16 );
	out = filledarrayBy( buf, 4, 2, 'uint8c', clbk );

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
		return filledarrayBy( buf, 4, 1, 'generic', constantFunction( 1.0 ) );
	}
});

tape( 'the function throws an error if provided an ArrayBuffer when attempting to create a generic array (dtype=generic, arraybuffer, byteoffset, length; thisArg)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var buf = new ArrayBuffer( 8 );
		return filledarrayBy( buf, 4, 1, 'generic', constantFunction( 1.0 ), {} );
	}
});

tape( 'the function returns a filled array (default, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = iterConstant( 3.0, {
		'iter': 3
	});
	out = filledarrayBy( arr, clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (default, iterator; thisArg)', opts, function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	arr = iterConstant( 3.0, {
		'iter': 3
	});
	ctx = {
		'count': 0
	};
	indices = [];
	out = filledarrayBy( arr, clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled array (dtype=float64, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = iterConstant( 3.0, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'float64', clbk );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64, iterator; thisArg)', opts, function test( t ) {
	var expected;
	var indices;
	var ctx;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	arr = iterConstant( 3.0, {
		'iter': 3
	});
	ctx = {
		'count': 0
	};
	indices = [];
	out = filledarrayBy( arr, 'float64', clbk, ctx );

	t.strictEqual( instanceOf( out, Float64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = [ 0, 1, 2 ];
	t.strictEqual( ctx.count, expected.length, 'returns expected value' );
	t.deepEqual( indices, expected, 'returns expected value' );

	t.end();

	function clbk( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( i );
		return 1.0;
	}
});

tape( 'the function returns a filled array (dtype=float32, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( 1.0 );
	arr = iterConstant( 3.0, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'float32', clbk );

	t.strictEqual( instanceOf( out, Float32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8Array( [ 1, 1, 1, 1 ] );

	clbk = constantFunction( true );
	arr = iterConstant( false, {
		'iter': 4
	});
	out = filledarrayBy( arr, 'bool', clbk );

	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex128( 1.0, 1.0 ) );
	arr = iterConstant( new Complex128( 3.0, 3.0 ), {
		'iter': 2
	});
	out = filledarrayBy( arr, 'complex128', clbk );

	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );

	clbk = constantFunction( new Complex64( 1.0, 1.0 ) );
	arr = iterConstant( new Complex64( 3.0, 3.0 ), {
		'iter': 2
	});
	out = filledarrayBy( arr, 'complex64', clbk );

	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int32Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'int32', clbk );

	t.strictEqual( instanceOf( out, Int32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint32Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'uint32', clbk );

	t.strictEqual( instanceOf( out, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int16Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'int16', clbk );

	t.strictEqual( instanceOf( out, Int16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint16Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'uint16', clbk );

	t.strictEqual( instanceOf( out, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Int8Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'int8', clbk );

	t.strictEqual( instanceOf( out, Int8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8Array( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'uint8', clbk );

	t.strictEqual( instanceOf( out, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = new Uint8ClampedArray( [ 1, 1, 1 ] );

	clbk = constantFunction( 1 );
	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'uint8c', clbk );

	t.strictEqual( instanceOf( out, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic, iterator)', opts, function test( t ) {
	var expected;
	var clbk;
	var arr;
	var out;

	expected = [ 1.0, 1.0, 1.0 ];

	clbk = constantFunction( 1.0 );
	arr = iterConstant( 3, {
		'iter': 3
	});
	out = filledarrayBy( arr, 'generic', clbk );

	t.strictEqual( instanceOf( out, Array ), true, 'returns expected value' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
