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
var Int32Array = require( './../../../int32' );
var Complex128Array = require( './../../../complex128' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Complex128 = require( '@stdlib/complex/float64' );
var withArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof withArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a new array with the specified index modified to the provided value (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3, 4, 5, 6 ];

	expected = [ 1, 2, 3, 4, 10, 6 ];
	actual = withArray( x, -2, 10 );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.notEqual( x, actual, 'returns a new array' );
	t.end();
});

tape('the function throws a RangeError if provided an out-of-bounds index (generic)', function test( t ) {
	var actual;
	var x;

	x = [ 1, 2, 3, 4, 5, 6 ];

	actual = function outofbounds() {
		withArray( x, 10, 10 );
	};
	t.throws( actual, RangeError, 'throws RangeError for positive out-of-bounds index' );

	actual = function outofbounds() {
		withArray( x, -10, 10 );
	};
	t.throws( actual, RangeError, 'throws RangeError for negative out-of-bounds index' );

	t.end();
});

tape( 'the function returns a new array with the specified index modified to the provided value (typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );

	expected = new Int32Array( [ 1, 2, 10, 4, 5, 6 ] );
	actual = withArray( x, 2, 10 );
	t.deepEqual( actual, expected, 'returns expected value' );

	// // Ensure input array is not mutated:
	t.notEqual( x, actual, 'returns a new array' );

	t.end();
});

tape('the function throws a RangeError if provided an out-of-bounds index (typed array)', function test( t ) {
	var actual;
	var x = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );

	actual = function outofbounds() {
		withArray( x, 10, 10 );
	};
	t.throws( actual, RangeError, 'throws RangeError for positive out-of-bounds index' );

	actual = function outofbounds() {
		withArray( x, -10, 10 );
	};
	t.throws( actual, RangeError, 'throws RangeError for negative out-of-bounds index' );

	t.end();
});

tape( 'the function returns a new array with the specified index modified to the provided value (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	expected = new Complex128Array([ 1.0, 2.0, 10.0, 4.0, 5.0, 6.0, 7.0, 8.0 ]);
	actual = withArray( x, 2, new Complex128( 10.0, 0.0 ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Ensure input array is not mutated:
	t.notEqual( x, actual, 'returns a new array' );

	t.end();
});

tape('the function throws a RangeError if provided an out-of-bounds index (complex typed array)', function test( t ) {
	var actual;
	var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	actual = function outofbounds() {
		withArray( x, 10, new Complex128( 10.0, 0.0 ) );
	};
	t.throws( actual, RangeError, 'throws RangeError for positive out-of-bounds index' );

	actual = function outofbounds() {
		withArray( x, -10, new Complex128( 10.0, 0.0 ) );
	};
	t.throws( actual, RangeError, 'throws RangeError for negative out-of-bounds index' );

	t.end();
});

tape( 'the function returns a new array with the specified index modified to the provided value (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4, 5, 6 ] );

	expected = [ 1, 2, 10, 4, 5, 6 ];
	actual = withArray( x, 2, 10 );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Ensure input array is not mutated:
	t.notEqual( toAccessorArray(x), actual, 'returns a new array' );

	t.end();
});

tape('the function throws a RangeError if provided an out-of-bounds index (accessors)', function test(t) {
	var actual;
	var x = toAccessorArray([ 1, 2, 3, 4, 5, 6 ]);

	actual = function outofbounds() {
		withArray( x, 10, 10 );
	};
	t.throws( actual, RangeError, 'throws RangeError for positive out-of-bounds index' );

	actual = function outofbounds() {
		withArray( x, -10, 10 );
	};
	t.throws( actual, RangeError, 'throws RangeError for negative out-of-bounds index' );

	t.end();
});
