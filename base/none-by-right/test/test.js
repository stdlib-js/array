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
var noneByRight = require( './../lib' );


// FUNCTIONS //

/**
* Tests whether a value is negative.
*
* @private
* @param {number} value - input value
* @returns {boolean} boolean indicating if a value is negative
*/
function isNegative( value ) {
	return ( value < 0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof noneByRight, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an empty collection, the function returns `true` (generic)', function test( t ) {
	var out;
	var arr;

	arr = [];
	out = noneByRight( arr, foo );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'if provided an empty collection, the function returns `true` (typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Float64Array( [] );
	out = noneByRight( arr, foo );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'if provided an empty collection, the function returns `true` (accessor)', function test( t ) {
	var out;
	var arr;

	arr = new AccessorArray( [] );
	out = noneByRight( arr, foo );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();

	function foo() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the function returns `true` if all elements fail a test (generic)', function test( t ) {
	var out;
	var arr;

	arr = [ 1, 2, 3 ];
	out = noneByRight( arr, isNegative );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if all elements fail a test (typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = noneByRight( arr, isNegative );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if all elements fail a test (accessor)', function test( t ) {
	var out;
	var arr;

	arr = new AccessorArray( [ 1, 2, 3 ] );
	out = noneByRight( arr, isNegative );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if all elements fail a test (array-like object)', function test( t ) {
	var out;
	var arr;

	arr = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	out = noneByRight( arr, isNegative );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if one or more elements pass a test (generic)', function test( t ) {
	var out;
	var arr;

	arr = [ 1, -2, 3 ];
	out = noneByRight( arr, isNegative );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if one or more elements pass a test (typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Float64Array( [ -1.0, -2.0, 3.0 ] );
	out = noneByRight( arr, isNegative );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if one or more elements pass a test (accessor)', function test( t ) {
	var out;
	var arr;

	arr = new AccessorArray( [ -1, -2, 3 ] );
	out = noneByRight( arr, isNegative );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if one or more elements pass a test (array-like object)', function test( t ) {
	var out;
	var arr;

	arr = {
		'length': 3,
		'0': 1,
		'1': -2,
		'2': -3
	};
	out = noneByRight( arr, isNegative );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var out;
	var ctx;
	var arr;

	ctx = {
		'count': 0
	};
	arr = [ 1, 2, 3 ];
	out = noneByRight( arr, predicate, ctx );

	t.strictEqual( out, true, 'returns expected value' );
	t.strictEqual( ctx.count, arr.length, 'returns expected value' );

	t.end();

	function predicate( value ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( value < 0 );
	}
});

tape( 'when performing a linear scan, the function does not skip empty elements (generic)', function test( t ) {
	var expected;
	var out;
	var arr;

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays
	expected = [ 1, void 0, void 0, 4 ];

	out = noneByRight( arr, predicate );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();

	function predicate( value, index ) {
		t.strictEqual( value, expected[ index ], 'returns expected value' );
		return false;
	}
});

tape( 'when performing a linear scan, the function does not skip empty elements (accessor)', function test( t ) {
	var expected;
	var out;
	var arr;

	arr = new AccessorArray( [ 1, , , 4 ] ); // eslint-disable-line no-sparse-arrays
	expected = [ 1, void 0, void 0, 4 ];

	out = noneByRight( arr, predicate );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();

	function predicate( value, index ) {
		t.strictEqual( value, expected[ index ], 'returns expected value' );
		return false;
	}
});
