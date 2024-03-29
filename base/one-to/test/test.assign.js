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
var Complex128Array = require( './../../../complex128' );
var Complex64Array = require( './../../../complex64' );
var Float64Array = require( './../../../float64' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var oneTo = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof oneTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills an array with linearly spaced numbers (generic)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = [ 0, 0, 0, 0, 0 ];
	actual = oneTo( out, 1, 0 );
	expected = [ 1, 2, 3, 4, 5 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = [ 0, 0, 0 ];
	actual = oneTo( out, -1, out.length-1 );
	expected = [ 3, 2, 1 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = [ -1, -1, -1, -1, -1 ];
	actual = oneTo( out, 2, 1 );
	expected = [ -1, 1, -1, 2, -1 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = [ -1, -1, -1, -1, -1, -1 ];
	actual = oneTo( out, -2, out.length-2 );
	expected = [ 3, -1, 2, -1, 1, -1 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array with linearly spaced numbers (real typed array)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Float64Array( [ 0, 0, 0, 0, 0 ] );
	actual = oneTo( out, 1, 0 );
	expected = new Float64Array( [ 1, 2, 3, 4, 5 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual, expected ), true, 'returns expected value' );

	out = new Float64Array( [ 0, 0, 0 ] );
	actual = oneTo( out, -1, out.length-1 );
	expected = new Float64Array( [ 3, 2, 1 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual, expected ), true, 'returns expected value' );

	out = new Float64Array( [ -1, -1, -1, -1, -1 ] );
	actual = oneTo( out, 2, 1 );
	expected = new Float64Array( [ -1, 1, -1, 2, -1 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual, expected ), true, 'returns expected value' );

	out = new Float64Array( [ -1, -1, -1, -1, -1, -1 ] );
	actual = oneTo( out, -2, out.length-2 );
	expected = new Float64Array( [ 3, -1, 2, -1, 1, -1 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array with linearly spaced numbers (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Complex128Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = oneTo( out, 1, 0 );
	expected = new Complex128Array( [ 1, 0, 2, 0, 3, 0, 4, 0, 5, 0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	out = new Complex128Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = oneTo( out, -1, out.length-1 );
	expected = new Complex128Array( [ 5, 0, 4, 0, 3, 0, 2, 0, 1, 0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	out = new Complex128Array( [ -1, -1, -1, -1, -1, -1, -1, -1 ] );
	actual = oneTo( out, 2, 1 );
	expected = new Complex128Array( [ -1, -1, 1, 0, -1, -1, 2, 0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = oneTo( out, 1, 0 );
	expected = new Complex64Array( [ 1, 0, 2, 0, 3, 0, 4, 0, 5, 0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = oneTo( out, -1, out.length-1 );
	expected = new Complex64Array( [ 5, 0, 4, 0, 3, 0, 2, 0, 1, 0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	out = new Complex64Array( [ -1, -1, -1, -1, -1, -1, -1, -1 ] );
	actual = oneTo( out, 2, 1 );
	expected = new Complex64Array( [ -1, -1, 1, 0, -1, -1, 2, 0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills an array with linearly spaced numbers (accessor)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = toAccessorArray( [ 0, 0, 0, 0, 0 ] );
	actual = oneTo( out, 1, 0 );
	expected = [ 1, 2, 3, 4, 5 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	out = toAccessorArray( [ 0, 0, 0 ] );
	actual = oneTo( out, -1, out.length-1 );
	expected = [ 3, 2, 1 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	out = toAccessorArray( [ -1, -1, -1, -1, -1 ] );
	actual = oneTo( out, 2, 1 );
	expected = [ -1, 1, -1, 2, -1 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	out = toAccessorArray( [ -1, -1, -1, -1, -1, -1 ] );
	actual = oneTo( out, -2, out.length-2 );
	expected = [ 3, -1, 2, -1, 1, -1 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	t.end();

	function isEqual( actual, expected ) {
		var i;
		for ( i = 0; i < expected.length; i++ ) {
			t.strictEqual( actual.get( i ), expected[ i ], 'returns expected value' );
		}
	}
});

tape( 'the function returns an empty array if provided an empty array', function test( t ) {
	t.deepEqual( oneTo( [], 1, 0 ), [], 'returns expected value' );
	t.deepEqual( oneTo( [], 1, 0 ), [], 'returns expected value' );
	t.end();
});
