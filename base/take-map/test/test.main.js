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
var Complex64Array = require( './../../../complex64' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var takeMap = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof takeMap, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is an `assign` method', function test( t ) {
	t.strictEqual( typeof takeMap.assign, 'function', 'assign method is a function' );
	t.end();
});

tape( 'the function takes elements from an array', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	function clbk( v ) {
		return v*v;
	}

	x = [ 1, 2, 3, 4 ];

	indices = [ 1, 3 ];
	actual = takeMap( x, indices, 'throw', clbk );
	expected = [ 4, 16 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	actual = takeMap( x, indices, 'throw', clbk );
	expected = [ 4, 4, 16, 16 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 3, 2, 1, 0 ];
	actual = takeMap( x, indices, 'throw', clbk );
	expected = [ 16, 9, 4, 1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = takeMap( x, indices, 'throw', clbk );
	expected = [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from an array (accessors)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;
	var v;
	var i;

	function clbk( v ) {
		return v;
	}

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	actual = takeMap( x, indices, 'throw', clbk );

	t.notEqual( actual, x, 'returns different reference' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual[ i ];
		expected = x.get( indices.get( i ) );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an empty array if provided a second argument which is empty', function test( t ) {
	var x = [ 1, 2, 3, 4 ];
	function clbk( v ) {
		return v;
	}
	t.deepEqual( takeMap( x, [], 'throw' ), [], 'returns expected value', clbk );
	t.end();
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;
	var x;

	function clbk( v ) {
		return v;
	}

	x = [ 1, 2, 3, 4 ];
	indices = [ 4, 5, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		takeMap( x, indices, 'throw', clbk );
	}
});

tape( 'when the "mode" is "normalize", the function normalizes negative indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	function clbk( v ) {
		return v*2;
	}

	x = [ 1, 2, 3, 4 ];

	indices = [ -1, -2, -3, -4 ];
	actual = takeMap( x, indices, 'normalize', clbk );
	expected = [ 8, 6, 4, 2 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "normalize", the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;
	var x;

	function clbk( v ) {
		return v;
	}

	x = [ 1, 2, 3, 4 ];
	indices = [ 2, 50, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		takeMap( x, indices, 'normalize', clbk );
	}
});

tape( 'when the "mode" is "clamp", the function clamps out-of-bounds indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	function clbk( v ) {
		return v;
	}

	x = [ 1, 2, 3, 4 ];

	indices = [ -10, 10, -5, 5 ];
	actual = takeMap( x, indices, 'clamp', clbk );
	expected = [ 1, 4, 1, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "wrap", the function wraps out-of-bounds indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	function clbk( v ) {
		return v;
	}

	x = [ 1, 2, 3, 4 ];

	indices = [ -10, 10, -5, 5 ];
	actual = takeMap( x, indices, 'wrap', clbk );
	expected = [ 3, 3, 4, 2 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
