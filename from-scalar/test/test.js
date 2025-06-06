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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex128Array = require( './../../complex128' );
var Complex64Array = require( './../../complex64' );
var BooleanArray = require( './../../bool' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Int32Array = require( './../../int32' );
var isEqualBooleanArray = require( '@stdlib/assert/is-booleanarray' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isSameFloat32Array = require( '@stdlib/assert/is-same-float32array' );
var isSameArray = require( '@stdlib/assert/is-same-array' );
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var array2scalar = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2scalar, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unsupported data type', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			array2scalar( 3, value );
		};
	}
});

tape( 'the function returns a single element containing a provided scalar value (default, number)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( 3.0 );
	expected = new Float64Array( [ 3.0 ] );

	t.strictEqual( isSameFloat64Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (default, bool)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( true );
	expected = new BooleanArray( [ true ] );

	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (default, complex128)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( new Complex128( 3.0, 4.0 ) );
	expected = new Complex128Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (default, complex64)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( new Complex64( 3.0, 4.0 ) );
	expected = new Complex64Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (default, complex-like)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar({
		're': 3.0,
		'im': 4.0
	});
	expected = new Complex128Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (default, object)', function test( t ) {
	var expected;
	var actual;
	var o;

	o = {};
	actual = array2scalar( o );
	expected = [ o ];

	t.strictEqual( isSameArray( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=float64)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( 3.0, 'float64' );
	expected = new Float64Array( [ 3.0 ] );

	t.strictEqual( isSameFloat64Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=float32)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( 3.0, 'float32' );
	expected = new Float32Array( [ 3.0 ] );

	t.strictEqual( isSameFloat32Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=int32)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( 3, 'int32' );
	expected = new Int32Array( [ 3 ] );

	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=generic)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( 3.0, 'generic' );
	expected = [ 3.0 ];

	t.strictEqual( isSameArray( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=bool)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( false, 'bool' );
	expected = new BooleanArray( [ false ] );

	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	actual = array2scalar( true, 'bool' );
	expected = new BooleanArray( [ true ] );

	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=complex128, complex)', function test( t ) {
	var expected;
	var actual;
	var z;

	actual = array2scalar( new Complex128( 3.0, 4.0 ), 'complex128' );
	expected = new Complex128Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	actual = array2scalar( new Complex64( 3.0, 4.0 ), 'complex128' );
	expected = new Complex128Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	z = {
		're': 3.0,
		'im': 4.0
	};
	actual = array2scalar( z, 'complex128' );
	expected = new Complex128Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=complex64, complex)', function test( t ) {
	var expected;
	var actual;
	var z;

	actual = array2scalar( new Complex64( 3.0, 4.0 ), 'complex64' );
	expected = new Complex64Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	actual = array2scalar( new Complex128( 3.0, 4.0 ), 'complex64' );
	expected = new Complex64Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	z = {
		're': 3.0,
		'im': 4.0
	};
	actual = array2scalar( z, 'complex64' );
	expected = new Complex64Array( [ 3.0, 4.0 ] );

	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=generic, complex-like)', function test( t ) {
	var expected;
	var actual;
	var z;

	z = {
		're': 3.0,
		'im': 4.0
	};
	actual = array2scalar( z, 'generic' );
	expected = [ z ];

	t.strictEqual( isSameArray( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=complex128, real)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( 3.0, 'complex128' );
	expected = new Complex128Array( [ 3.0, 0.0 ] );

	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a single element containing a provided scalar value (dtype=complex64, real)', function test( t ) {
	var expected;
	var actual;

	actual = array2scalar( 3.0, 'complex64' );
	expected = new Complex64Array( [ 3.0, 0.0 ] );

	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );
	t.end();
});
