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
var AccessorArray = require( './../../../base/accessor' );
var Float64Array = require( './../../../float64' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var reject = require( './../lib' );


// FUNCTIONS //

/**
* Tests whether a value is positive.
*
* @private
* @param {number} value - input value
* @returns {boolean} boolean indicating if a value is positive
*/
function isPositive( value ) {
	return ( value > 0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reject, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty collection (generic)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [];
	expected = [];
	actual = reject( arr, foo );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'if provided an empty collection, the function returns an empty collection (typed array)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Float64Array( [] );
	expected = new Float64Array( [] );
	actual = reject( arr, foo );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'if provided an empty collection, the function returns an empty collection (accessor)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new AccessorArray( [] );
	expected = [];
	actual = reject( arr, foo );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the function filters a provided collection (generic)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [ 1, -2, 3 ];
	expected = [ -2 ];
	actual = reject( arr, isPositive );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function filters a provided collection (typed array)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Float64Array( [ -1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ -1.0 ] );
	actual = reject( arr, isPositive );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function filters a provided collection (accessor)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new AccessorArray( [ 1, -2, -3 ] );
	expected = [ -2, -3 ];
	actual = reject( arr, isPositive );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function filters a provided collection (array-like object)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = {
		'length': 3,
		'0': -1,
		'1': -2,
		'2': 3
	};
	expected = [ -1, -2 ];
	actual = reject( arr, isPositive );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function an empty collection if all elements pass a test (generic)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [ 1, 2, 3 ];
	expected = [];
	actual = reject( arr, isPositive );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function an empty collection if all elements pass a test (typed array)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [] );
	actual = reject( arr, isPositive );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function an empty collection if all elements pass a test (accessor)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new AccessorArray( [ 1, 2, 3 ] );
	expected = [];
	actual = reject( arr, isPositive );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function an empty collection if all elements pass a test (array-like object)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	expected = [];
	actual = reject( arr, isPositive );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var arr;

	ctx = {
		'count': 0
	};
	arr = [ 1, -2, 3 ];
	expected = [ -2 ];
	actual = reject( arr, predicate, ctx );

	t.strictEqual( instanceOf( actual, Array ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( ctx.count, arr.length, 'returns expected value' );

	t.end();

	function predicate( value ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( value > 0 );
	}
});
