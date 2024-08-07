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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Int16Array = require( './../../int16' );
var Int32Array = require( './../../int32' );
var Int8Array = require( './../../int8' );
var Uint16Array = require( './../../uint16' );
var Uint32Array = require( './../../uint32' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );
var Complex128Array = require( './../../complex128' );
var Complex64Array = require( './../../complex64' );
var BooleanArray = require( './../../bool' );
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
var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
var isComplex128Array = require( '@stdlib/assert/is-complex128array' );
var isBooleanArray = require( '@stdlib/assert/is-booleanarray' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
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

tape( 'the function converts an array to an array of a different data type (accessors)', function test( t ) {
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
	arr = {
		'length': 3,
		'data': [ -1, 0, 1 ],
		'get': getter,
		'set': setter
	};
	expected = [
		[ new Float64Array( [ -1.0, 0.0, 1.0 ] ), isFloat64Array ],
		[ new Float32Array( [ -1.0, 0.0, 1.0 ] ), isFloat32Array ],
		[ [ -1, 0, 1 ], isArray ],
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

	function getter( idx ) {
		return arr.data[ idx ];
	}

	function setter( value, idx ) {
		arr.data[ idx ] = value;
	}
});

tape( 'the function converts an array to an array of a different data type (generic => bool)', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = [ 'foo', null, [], {} ];
	expected = new Uint8Array( [ 1, 0, 1, 1 ] );
	out = convertArray( arr, 'bool' );
	t.strictEqual( isBooleanArray( out ), true, 'returns expected value type' );
	t.strictEqual( out.length, expected.length, 'returns expected length' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array to an array of a different data type (real => bool)', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = [ -1, 0, 1, 2 ];
	expected = new Uint8Array( [ 1, 0, 1, 1 ] );
	out = convertArray( arr, 'bool' );
	t.strictEqual( isBooleanArray( out ), true, 'returns expected value type' );
	t.strictEqual( out.length, expected.length, 'returns expected length' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array to an array of a different data type (accessors => bool)', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = {
		'length': 3,
		'data': [ -1, 0, 1 ],
		'get': getter,
		'set': setter
	};
	expected = new Uint8Array( [ 1, 0, 1 ] );
	out = convertArray( arr, 'bool' );
	t.strictEqual( isBooleanArray( out ), true, 'returns expected value type' );
	t.strictEqual( out.length, expected.length, 'returns expected length' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();

	function getter( idx ) {
		return arr.data[ idx ];
	}

	function setter( value, idx ) {
		arr.data[ idx ] = value;
	}
});

tape( 'the function converts an array to an array of a different data type (bool => complex)', function test( t ) {
	var expected;
	var dtypes;
	var arr;
	var out;
	var tmp;
	var v1;
	var v2;
	var i;
	var j;

	dtypes = [
		'complex64',
		'complex128'
	];
	arr = new BooleanArray( [ true, false, true, true ] );
	expected = [
		[ new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] ), isComplex64Array, reinterpret64 ],
		[ new Complex128Array( [ 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] ), isComplex128Array, reinterpret128 ]
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		tmp = expected[ i ];
		out = convertArray( arr, dtypes[ i ] );
		t.strictEqual( tmp[ 1 ]( out ), true, 'returns expected value type for ' + dtypes[ i ] );
		v1 = tmp[ 2 ]( out, 0 );
		v2 = tmp[ 2 ]( tmp[ 0 ], 0 );
		for ( j = 0; j < arr.length*2; j += 2 ) {
			t.strictEqual( v1[ j ], v2[ j ], 'returns expected real component for element ' + (j/2) + ' for ' + dtypes[ i ] );
			t.strictEqual( v1[ j+1 ], v2[ j+1 ], 'returns expected imaginary component for element ' + (j/2) + ' for ' + dtypes[ i ] );
		}
	}
	t.end();
});

tape( 'the function converts an array to an array of a different data type (real => complex)', function test( t ) {
	var expected;
	var dtypes;
	var arr;
	var out;
	var tmp;
	var v1;
	var v2;
	var i;
	var j;

	dtypes = [
		'complex64',
		'complex128'
	];
	arr = [ -1, 0, 1, 2 ];
	expected = [
		[ new Complex64Array( [ -1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 0.0 ] ), isComplex64Array, reinterpret64 ],
		[ new Complex128Array( [ -1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 0.0 ] ), isComplex128Array, reinterpret128 ]
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		tmp = expected[ i ];
		out = convertArray( arr, dtypes[ i ] );
		t.strictEqual( tmp[ 1 ]( out ), true, 'returns expected value type for ' + dtypes[ i ] );
		v1 = tmp[ 2 ]( out, 0 );
		v2 = tmp[ 2 ]( tmp[ 0 ], 0 );
		for ( j = 0; j < arr.length*2; j += 2 ) {
			t.strictEqual( v1[ j ], v2[ j ], 'returns expected real component for element ' + (j/2) + ' for ' + dtypes[ i ] );
			t.strictEqual( v1[ j+1 ], v2[ j+1 ], 'returns expected imaginary component for element ' + (j/2) + ' for ' + dtypes[ i ] );
		}
	}
	t.end();
});

tape( 'the function converts an array to an array of a different data type (complex64 => complex)', function test( t ) {
	var expected;
	var dtypes;
	var arr;
	var out;
	var tmp;
	var v1;
	var v2;
	var i;
	var j;

	dtypes = [
		'complex64',
		'complex128'
	];
	arr = new Complex64Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] );
	expected = [
		[ new Complex64Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] ), isComplex64Array, reinterpret64 ],
		[ new Complex128Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] ), isComplex128Array, reinterpret128 ]
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		tmp = expected[ i ];
		out = convertArray( arr, dtypes[ i ] );
		t.strictEqual( tmp[ 1 ]( out ), true, 'returns expected value type for ' + dtypes[ i ] );
		v1 = tmp[ 2 ]( out, 0 );
		v2 = tmp[ 2 ]( tmp[ 0 ], 0 );
		for ( j = 0; j < arr.length*2; j += 2 ) {
			t.strictEqual( v1[ j ], v2[ j ], 'returns expected real component for element ' + (j/2) + ' for ' + dtypes[ i ] );
			t.strictEqual( v1[ j+1 ], v2[ j+1 ], 'returns expected imaginary component for element ' + (j/2) + ' for ' + dtypes[ i ] );
		}
	}
	t.end();
});

tape( 'the function converts an array to an array of a different data type (complex128 => complex)', function test( t ) {
	var expected;
	var dtypes;
	var arr;
	var out;
	var tmp;
	var v1;
	var v2;
	var i;
	var j;

	dtypes = [
		'complex64',
		'complex128'
	];
	arr = new Complex128Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] );
	expected = [
		[ new Complex64Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] ), isComplex64Array, reinterpret64 ],
		[ new Complex128Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] ), isComplex128Array, reinterpret128 ]
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		tmp = expected[ i ];
		out = convertArray( arr, dtypes[ i ] );
		t.strictEqual( tmp[ 1 ]( out ), true, 'returns expected value type for ' + dtypes[ i ] );
		v1 = tmp[ 2 ]( out, 0 );
		v2 = tmp[ 2 ]( tmp[ 0 ], 0 );
		for ( j = 0; j < arr.length*2; j += 2 ) {
			t.strictEqual( v1[ j ], v2[ j ], 'returns expected real component for element ' + (j/2) + ' for ' + dtypes[ i ] );
			t.strictEqual( v1[ j+1 ], v2[ j+1 ], 'returns expected imaginary component for element ' + (j/2) + ' for ' + dtypes[ i ] );
		}
	}
	t.end();
});

tape( 'the function converts an array to an array of a different data type (complex64 => bool)', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = new Complex64Array( [ -1.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0, 4.0 ] );
	expected = new Uint8Array( [ 1, 0, 1, 1 ] );

	out = convertArray( arr, 'bool' );
	t.strictEqual( isBooleanArray( out ), true, 'returns expected value type' );
	t.strictEqual( out.length, expected.length, 'returns expected length' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array to an array of a different data type (complex128 => bool)', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = new Complex128Array( [ -1.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0, 4.0 ] );
	expected = new Uint8Array( [ 1, 0, 1, 1 ] );

	out = convertArray( arr, 'bool' );
	t.strictEqual( isBooleanArray( out ), true, 'returns expected value type' );
	t.strictEqual( out.length, expected.length, 'returns expected length' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array to an array of a different data type (complex64 => real)', function test( t ) {
	var expected;
	var dtypes;
	var arr;
	var out;
	var i;
	var j;

	dtypes = [
		'float64',
		'float32',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	arr = new Complex64Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] );
	expected = [
		[ new Float64Array( [ -1.0, 0.0, 1.0, 2.0 ] ), isFloat64Array ],
		[ new Float32Array( [ -1.0, 0.0, 1.0, 2.0 ] ), isFloat32Array ],
		[ new Int16Array( [ -1, 0, 1, 2 ] ), isInt16Array ],
		[ new Int32Array( [ -1, 0, 1, 2 ] ), isInt32Array ],
		[ new Int8Array( [ -1, 0, 1, 2 ] ), isInt8Array ],
		[ new Uint16Array( [ 65535, 0, 1, 2 ] ), isUint16Array ],
		[ new Uint32Array( [ 4294967295, 0, 1, 2 ] ), isUint32Array ],
		[ new Uint8Array( [ 255, 0, 1, 2 ] ), isUint8Array ],
		[ new Uint8ClampedArray( [ 0, 0, 1, 2 ] ), isUint8ClampedArray ]
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

tape( 'the function converts an array to an array of a different data type (complex128 => real)', function test( t ) {
	var expected;
	var dtypes;
	var arr;
	var out;
	var i;
	var j;

	dtypes = [
		'float64',
		'float32',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	arr = new Complex128Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] );
	expected = [
		[ new Float64Array( [ -1.0, 0.0, 1.0, 2.0 ] ), isFloat64Array ],
		[ new Float32Array( [ -1.0, 0.0, 1.0, 2.0 ] ), isFloat32Array ],
		[ new Int16Array( [ -1, 0, 1, 2 ] ), isInt16Array ],
		[ new Int32Array( [ -1, 0, 1, 2 ] ), isInt32Array ],
		[ new Int8Array( [ -1, 0, 1, 2 ] ), isInt8Array ],
		[ new Uint16Array( [ 65535, 0, 1, 2 ] ), isUint16Array ],
		[ new Uint32Array( [ 4294967295, 0, 1, 2 ] ), isUint32Array ],
		[ new Uint8Array( [ 255, 0, 1, 2 ] ), isUint8Array ],
		[ new Uint8ClampedArray( [ 0, 0, 1, 2 ] ), isUint8ClampedArray ]
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

tape( 'the function converts an array to an array of a different data type (bool => real)', function test( t ) {
	var expected;
	var dtypes;
	var arr;
	var out;
	var i;
	var j;

	dtypes = [
		'float64',
		'float32',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	arr = new BooleanArray( [ true, false, true ] );
	expected = [
		[ new Float64Array( [ 1.0, 0.0, 1.0 ] ), isFloat64Array ],
		[ new Float32Array( [ 1.0, 0.0, 1.0 ] ), isFloat32Array ],
		[ new Int16Array( [ 1, 0, 1 ] ), isInt16Array ],
		[ new Int32Array( [ 1, 0, 1 ] ), isInt32Array ],
		[ new Int8Array( [ 1, 0, 1 ] ), isInt8Array ],
		[ new Uint16Array( [ 1, 0, 1 ] ), isUint16Array ],
		[ new Uint32Array( [ 1, 0, 1 ] ), isUint32Array ],
		[ new Uint8Array( [ 1, 0, 1 ] ), isUint8Array ],
		[ new Uint8ClampedArray( [ 1, 0, 1 ] ), isUint8ClampedArray ]
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

tape( 'the function converts an array to an array of a different data type (bool => generic)', function test( t ) {
	var expected;
	var arr;
	var out;
	var i;

	arr = new BooleanArray( [ true, false, true, true ] );
	expected = [
		arr.get( 0 ),
		arr.get( 1 ),
		arr.get( 2 ),
		arr.get( 3 )
	];
	out = convertArray( arr, 'generic' );
	t.strictEqual( isArray( out ), true, 'returns expected value type' );
	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts an array to an array of a different data type (bool => bool)', function test( t ) {
	var expected;
	var out;
	var arr;

	arr = new BooleanArray( [ true, false, true, true ] );
	expected = new Uint8Array( [ 1, 0, 1, 1 ] );

	out = convertArray( arr, 'bool' );
	t.deepEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array to an array of a different data type (complex64 => generic)', function test( t ) {
	var expected;
	var arr;
	var out;
	var v1;
	var v2;
	var i;

	arr = new Complex64Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] );
	expected = [
		arr.get( 0 ),
		arr.get( 1 ),
		arr.get( 2 ),
		arr.get( 3 )
	];
	out = convertArray( arr, 'generic' );
	t.strictEqual( isArray( out ), true, 'returns expected value type' );
	for ( i = 0; i < arr.length; i++ ) {
		v1 = out[ i ];
		v2 = expected[ i ];
		t.strictEqual( isComplex64( v1 ), true, 'returns expected value' );
		t.strictEqual( realf( v1 ), realf( v2 ), 'returns expected real component' );
		t.strictEqual( imagf( v1 ), imagf( v2 ), 'returns expected imaginary component' );
	}
	t.end();
});

tape( 'the function converts an array to an array of a different data type (complex128 => generic)', function test( t ) {
	var expected;
	var arr;
	var out;
	var v1;
	var v2;
	var i;

	arr = new Complex128Array( [ -1.0, 1.0, 0.0, 2.0, 1.0, 3.0, 2.0, 4.0 ] );
	expected = [
		arr.get( 0 ),
		arr.get( 1 ),
		arr.get( 2 ),
		arr.get( 3 )
	];
	out = convertArray( arr, 'generic' );
	t.strictEqual( isArray( out ), true, 'returns expected value type' );
	for ( i = 0; i < arr.length; i++ ) {
		v1 = out[ i ];
		v2 = expected[ i ];
		t.strictEqual( isComplex128( v1 ), true, 'returns expected value' );
		t.strictEqual( real( v1 ), real( v2 ), 'returns expected real component' );
		t.strictEqual( imag( v1 ), imag( v2 ), 'returns expected imaginary component' );
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
		'uint8c',
		'complex64',
		'complex128',
		'bool'
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
		isUint8ClampedArray,
		isComplex64Array,
		isComplex128Array,
		isBooleanArray
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		out = convertArray( arr, dtypes[ i ] );
		t.strictEqual( expected[ i ]( out ), true, 'returns expected value type for ' + dtypes[ i ] );
	}
	t.end();
});
