/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var AccessorArray = require( './../../../base/accessor' );
var Complex128Array = require( './../../../complex128' );
var BooleanArray = require( './../../../bool' );
var Float64Array = require( './../../../float64' );
var Int32Array = require( './../../../int32' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var indexOfSameValue = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof indexOfSameValue, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element (generic)', function test( t ) {
	var actual;
	var x;

	x = [ 1, 1, 2, 2, 3, 3 ];

	actual = indexOfSameValue( x, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 2, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = indexOfSameValue( x, 3, 0 );
	t.strictEqual( actual, 4, 'returns expected value' );

	// Nonnegative starting index...
	actual = indexOfSameValue( x, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2, 3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3, 5 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = indexOfSameValue( x, 1, -10 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 3, -10 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = indexOfSameValue( x, 1, -5 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2, -3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element (float64)', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	actual = indexOfSameValue( x, 1.0, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 2.0, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = indexOfSameValue( x, 3.0, 0 );
	t.strictEqual( actual, 4, 'returns expected value' );

	// Nonnegative starting index...
	actual = indexOfSameValue( x, 1.0, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2.0, 3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3.0, 5 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = indexOfSameValue( x, 1.0, -10 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 3.0, -10 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = indexOfSameValue( x, 1.0, -5 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2.0, -3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3.0, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element (complex128)', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 3.0 ] ); // eslint-disable-line max-len

	actual = indexOfSameValue( x, new Complex128( 1.0, 1.0 ), 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 2.0, 2.0 ), 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 3.0, 3.0 ), 0 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 2.0, 2.0 ), 4 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Nonnegative starting index...
	actual = indexOfSameValue( x, new Complex128( 1.0, 1.0 ), 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 2.0, 2.0 ), 3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 3.0, 3.0 ), 5 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = indexOfSameValue( x, new Complex128( 1.0, 1.0 ), -10 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 3.0, 3.0 ), -10 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 1.0, 1.0 ), -5 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 2.0, 2.0 ), -3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, new Complex128( 3.0, 3.0 ), -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Non-complex values:
	actual = indexOfSameValue( x, 1.0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element (bool)', function test( t ) {
	var actual;
	var x;

	x = new BooleanArray( [ true, true, false, false, true, true ] );

	actual = indexOfSameValue( x, true, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, false, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = indexOfSameValue( x, false, 4 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Nonnegative starting index...
	actual = indexOfSameValue( x, true, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, false, 3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, true, 5 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = indexOfSameValue( x, true, -10 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, true, -5 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, false, -3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, true, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Non-boolean values:
	actual = indexOfSameValue( x, 0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element (int32)', function test( t ) {
	var actual;
	var x;

	x = new Int32Array( [ 1, 1, 2, 2, 3, 3 ] );

	actual = indexOfSameValue( x, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 2, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = indexOfSameValue( x, 3, 0 );
	t.strictEqual( actual, 4, 'returns expected value' );

	// Nonnegative starting index...
	actual = indexOfSameValue( x, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2, 3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3, 5 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = indexOfSameValue( x, 1, -10 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 3, -10 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = indexOfSameValue( x, 1, -5 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2, -3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element (accessors)', function test( t ) {
	var actual;
	var x;

	x = new AccessorArray( [ 1, 1, 2, 2, 3, 3 ] );

	actual = indexOfSameValue( x, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 2, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = indexOfSameValue( x, 3, 0 );
	t.strictEqual( actual, 4, 'returns expected value' );

	// Nonnegative starting index...
	actual = indexOfSameValue( x, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2, 3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3, 5 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = indexOfSameValue( x, 1, -10 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 3, -10 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = indexOfSameValue( x, 1, -5 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2, -3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element (array-like)', function test( t ) {
	var actual;
	var x;

	x = {
		'length': 6,
		'0': 1,
		'1': 1,
		'2': 2,
		'3': 2,
		'4': 3,
		'5': 3
	};

	actual = indexOfSameValue( x, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 2, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = indexOfSameValue( x, 3, 0 );
	t.strictEqual( actual, 4, 'returns expected value' );

	// Nonnegative starting index...
	actual = indexOfSameValue( x, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2, 3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3, 5 );
	t.strictEqual( actual, 5, 'returns expected value' );

	// Negative starting index...
	actual = indexOfSameValue( x, 1, -10 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( x, 3, -10 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = indexOfSameValue( x, 1, -5 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = indexOfSameValue( x, 2, -3 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = indexOfSameValue( x, 3, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an empty array', function test( t ) {
	var actual;
	var x;

	actual = indexOfSameValue( [], 0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = indexOfSameValue( new Float64Array( [] ), 0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = indexOfSameValue( new Int32Array( [] ), 0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = indexOfSameValue( new AccessorArray( [] ), 0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 0
	};
	actual = indexOfSameValue( x, 0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports NaN equality', function test( t ) {
	var actual;
	var x;

	actual = indexOfSameValue( [ NaN ], NaN, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( new Float64Array( [ NaN ] ), NaN, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( new AccessorArray( [ NaN ] ), NaN, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = {
		'length': 1,
		'0': NaN
	};
	actual = indexOfSameValue( x, NaN, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports signed zero equality', function test( t ) {
	var actual;
	var x;

	actual = indexOfSameValue( [ -0.0 ], -0.0, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( new Float64Array( [ -0.0 ] ), -0.0, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( new AccessorArray( [ -0.0 ] ), -0.0, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = {
		'length': 1,
		'0': -0.0
	};
	actual = indexOfSameValue( x, -0.0, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = indexOfSameValue( [ -0.0 ], 0.0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = indexOfSameValue( new Float64Array( [ -0.0 ] ), 0.0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = indexOfSameValue( new AccessorArray( [ -0.0 ] ), 0.0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 1,
		'0': -0.0
	};
	actual = indexOfSameValue( x, 0.0, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a starting index which exceeds the maximum array index', function test( t ) {
	var actual;
	var x;

	actual = indexOfSameValue( [ 1, 2, 3 ], 0, 20 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = indexOfSameValue( new Float64Array( [ 1.0, 2.0, 3.0 ] ), 0, 20 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = indexOfSameValue( new Int32Array( [ 1, 2, 3 ] ), 0, 20 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = indexOfSameValue( new AccessorArray( [ 1, 2, 3 ] ), 0, 20 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = {
		'length': 0,
		'0': 1,
		'1': 2,
		'2': 3
	};
	actual = indexOfSameValue( x, 0, 20 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
