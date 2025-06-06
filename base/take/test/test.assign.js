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
var BooleanArray = require( './../../../bool' );
var Float64Array = require( './../../../float64' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var isEqualBooleanArray = require( '@stdlib/assert/is-equal-booleanarray' );
var zeros = require( './../../../zeros' );
var take = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof take, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function takes elements from an array (generic)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ 1, 3 ];
	out = zeros( indices.length, 'generic' );
	actual = take( x, indices, 'throw', out, 1, 0 );
	expected = [ 2, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	out = zeros( indices.length*2, 'generic' );
	actual = take( x, indices, 'throw', out, 2, 0 );
	expected = [ 2, 0, 2, 0, 4, 0, 4, 0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 3, 2, 1, 0 ];
	out = zeros( indices.length, 'generic' );
	actual = take( x, indices, 'throw', out, -1, out.length-1 );
	expected = [ 1, 2, 3, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	out = zeros( indices.length+1, 'generic' );
	actual = take( x, indices, 'throw', out, 1, 1 );
	expected = [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from an array (real typed array)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	indices = [ 1, 3 ];
	out = zeros( indices.length, 'float64' );
	actual = take( x, indices, 'throw', out, 1, 0 );
	expected = new Float64Array( [ 2.0, 4.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	out = zeros( indices.length*2, 'float64' );
	actual = take( x, indices, 'throw', out, 2, 0 );
	expected = new Float64Array( [ 2.0, 0.0, 2.0, 0.0, 4.0, 0.0, 4.0, 0.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 3, 2, 1, 0 ];
	out = zeros( indices.length, 'float64' );
	actual = take( x, indices, 'throw', out, -1, out.length-1 );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	out = zeros( indices.length+1, 'float64' );
	actual = take( x, indices, 'throw', out, 1, 1 );
	expected = new Float64Array( [ 0.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ] ); // eslint-disable-line max-len

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from an array (complex typed array)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	indices = [ 1, 3 ];
	out = zeros( indices.length, 'complex128' );
	actual = take( x, indices, 'throw', out, 1, 0 );
	expected = new Complex128Array( [ 3.0, 4.0, 7.0, 8.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	out = zeros( indices.length*2, 'complex64' );
	actual = take( x, indices, 'throw', out, 2, 0 );
	expected = new Complex64Array( [ 3.0, 4.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 7.0, 8.0, 0.0, 0.0, 7.0, 8.0, 0.0, 0.0 ] ); // eslint-disable-line max-len

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	indices = [ 3, 2, 1, 0 ];
	out = zeros( indices.length, 'complex128' );
	actual = take( x, indices, 'throw', out, -1, out.length-1 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ); // eslint-disable-line max-len

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	indices = [ 1, 1, 1, 1 ];
	out = zeros( indices.length+1, 'complex64' );
	actual = take( x, indices, 'throw', out, 1, 1 );
	expected = new Complex64Array( [ 0.0, 0.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0 ] ); // eslint-disable-line max-len

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from an array (boolean array)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new BooleanArray( [ true, false, false, true ] );

	indices = [ 1, 3 ];
	out = new BooleanArray( indices.length );
	actual = take( x, indices, 'throw', out, 1, 0 );
	expected = new BooleanArray( [ false, true ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	out = new BooleanArray( indices.length*2 );
	actual = take( x, indices, 'throw', out, 2, 0 );
	expected = new BooleanArray( [ false, false, false, false, true, false, true, false ] ); // eslint-disable-line max-len

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	indices = [ 3, 2, 1, 0 ];
	out = new BooleanArray( indices.length );
	actual = take( x, indices, 'throw', out, -1, out.length-1 );
	expected = new BooleanArray( [ true, false, false, true ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	indices = [ 1, 1, 1, 1 ];
	out = new BooleanArray( indices.length+1 );
	actual = take( x, indices, 'throw', out, 1, 1 );
	expected = new BooleanArray( [ false, false, false, false, false ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from an array (accessors)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );

	indices = toAccessorArray( [ 1, 3 ] );
	out = toAccessorArray( zeros( indices.length, 'generic' ) );
	actual = take( x, indices, 'throw', out, 1, 0 );
	expected = [ 2, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	out = toAccessorArray( zeros( indices.length*2, 'generic' ) );
	actual = take( x, indices, 'throw', out, 2, 0 );
	expected = [ 2, 0, 2, 0, 4, 0, 4, 0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	indices = toAccessorArray( [ 3, 2, 1, 0 ] );
	out = toAccessorArray( zeros( indices.length, 'generic' ) );
	actual = take( x, indices, 'throw', out, -1, out.length-1 );
	expected = [ 1, 2, 3, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	indices = toAccessorArray( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );
	out = toAccessorArray( zeros( indices.length+1, 'generic' ) );
	actual = take( x, indices, 'throw', out, 1, 1 );
	expected = [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ];

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

tape( 'the function returns leaves an output array unchanged if provided a second argument which is empty', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = take( x, [], 'throw', out, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = take( x, [], 'throw', out, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = take( x, [], 'throw', out, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	actual = take( x, [], 'throw', out, 1, 0 );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	x = new BooleanArray( [ true, false, false, true ] );
	out = new BooleanArray( [ false, false, false, false ] );
	expected = new BooleanArray( [ false, false, false, false ] );
	actual = take( x, [], 'throw', out, 1, 0 );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index (generic)', function test( t ) {
	var indices;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 4, 5, 1, 2 ];
	out = zeros( x.length, 'generic' );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'throw', out, 1, 0 );
	}
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index (accessors)', function test( t ) {
	var indices;
	var out;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	indices = toAccessorArray( [ 4, 5, 1, 2 ] );
	out = toAccessorArray( zeros( x.length, 'generic' ) );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'throw', out, 1, 0 );
	}
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index (real typed)', function test( t ) {
	var indices;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 4, 5, 1, 2 ];
	out = zeros( x.length, 'float64' );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'throw', out, 1, 0 );
	}
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index (complex typed)', function test( t ) {
	var indices;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 4, 5, 1, 2 ];
	out = zeros( x.length, 'complex128' );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'throw', out, 1, 0 );
	}
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index (boolean)', function test( t ) {
	var indices;
	var out;
	var x;

	x = new BooleanArray( [ true, false ] );
	indices = [ 4, 5, 1, 2 ];
	out = new BooleanArray( x.length );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'throw', out, 1, 0 );
	}
});

tape( 'when the "mode" is "normalize", the function normalizes negative indices (generic)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ -1, -2, -3, -4 ];
	out = zeros( x.length, 'generic' );

	actual = take( x, indices, 'normalize', out, 1, 0 );
	expected = [ 4, 3, 2, 1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "normalize", the function normalizes negative indices (accessors)', function test( t ) {
	var expected;
	var indices;
	var out;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	indices = toAccessorArray( [ -1, -2, -3, -4 ] );
	out = zeros( x.length, 'generic' );

	take( x, indices, 'normalize', toAccessorArray( out ), 1, 0 );
	expected = [ 4, 3, 2, 1 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "normalize", the function normalizes negative indices (real typed)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ -1, -2, -3, -4 ];
	out = zeros( x.length, 'float64' );

	actual = take( x, indices, 'normalize', out, 1, 0 );
	expected = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "normalize", the function normalizes negative indices (complex typed)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ -1, -2 ];
	out = zeros( x.length, 'complex128' );

	actual = take( x, indices, 'normalize', out, 1, 0 );
	expected = new Complex128Array( [ 3.0, 4.0, 1.0, 2.0 ] );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "normalize", the function throws an error if provided an out-of-bounds index (generic)', function test( t ) {
	var indices;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 4, 5, 1, 2 ];
	out = zeros( x.length, 'generic' );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'normalize', out, 1, 0 );
	}
});

tape( 'when the "mode" is "normalize", the function throws an error if provided an out-of-bounds index (accessors)', function test( t ) {
	var indices;
	var out;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	indices = toAccessorArray( [ 4, 5, 1, 2 ] );
	out = toAccessorArray( zeros( x.length, 'generic' ) );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'normalize', out, 1, 0 );
	}
});

tape( 'when the "mode" is "normalize", the function throws an error if provided an out-of-bounds index (real typed)', function test( t ) {
	var indices;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 4, 5, 1, 2 ];
	out = zeros( x.length, 'float64' );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'normalize', out, 1, 0 );
	}
});

tape( 'when the "mode" is "normalize", the function throws an error if provided an out-of-bounds index (complex typed)', function test( t ) {
	var indices;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 4, 5, 1, 2 ];
	out = zeros( x.length, 'complex128' );

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		take( x, indices, 'normalize', out, 1, 0 );
	}
});

tape( 'when the "mode" is "clamp", the function clamps out-of-bounds indices (generic)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ -10, 10, -5, 5 ];
	out = zeros( x.length, 'generic' );

	actual = take( x, indices, 'clamp', out, 1, 0 );
	expected = [ 1, 4, 1, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "clamp", the function clamps out-of-bounds indices (accessors)', function test( t ) {
	var expected;
	var indices;
	var out;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	indices = toAccessorArray( [ -10, 10, -5, 5 ] );
	out = zeros( x.length, 'generic' );

	take( x, indices, 'clamp', toAccessorArray( out ), 1, 0 );
	expected = [ 1, 4, 1, 4 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "clamp", the function clamps out-of-bounds indices (real typed)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ -10, 10, -5, 5 ];
	out = zeros( x.length, 'float64' );

	actual = take( x, indices, 'clamp', out, 1, 0 );
	expected = new Float64Array( [ 1.0, 4.0, 1.0, 4.0 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "clamp", the function clamps out-of-bounds indices (complex typed)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = [ -10, 10, -5, 5 ];
	out = zeros( x.length, 'complex128' );

	actual = take( x, indices, 'clamp', out, 1, 0 );
	expected = new Complex128Array( [ 1.0, 2.0, 7.0, 8.0, 1.0, 2.0, 7.0, 8.0 ] ); // eslint-disable-line max-len
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "wrap", the function wraps out-of-bounds indices (generic)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ -10, 10, -5, 5 ];
	out = zeros( x.length, 'generic' );

	actual = take( x, indices, 'wrap', out, 1, 0 );
	expected = [ 3, 3, 4, 2 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "wrap", the function wraps out-of-bounds indices (accessors)', function test( t ) {
	var expected;
	var indices;
	var out;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	indices = toAccessorArray( [ -10, 10, -5, 5 ] );
	out = zeros( x.length, 'generic' );

	take( x, indices, 'wrap', toAccessorArray( out ), 1, 0 );
	expected = [ 3, 3, 4, 2 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "wrap", the function wraps out-of-bounds indices (real typed)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ -10, 10, -5, 5 ];
	out = zeros( x.length, 'float64' );

	actual = take( x, indices, 'wrap', out, 1, 0 );
	expected = new Float64Array( [ 3.0, 3.0, 4.0, 2.0 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "wrap", the function wraps out-of-bounds indices (complex typed)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = [ -10, 10, -5, 5 ];
	out = zeros( x.length, 'complex128' );

	actual = take( x, indices, 'wrap', out, 1, 0 );
	expected = new Complex128Array( [ 5.0, 6.0, 5.0, 6.0, 7.0, 8.0, 3.0, 4.0 ] ); // eslint-disable-line max-len
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});
