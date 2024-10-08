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
var BooleanArray = require( './../../../bool' );
var Float64Array = require( './../../../float64' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var cuanyBy = require( './../lib' );


// FUNCTIONS //

function isPositive( value ) {
	return value;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cuanyBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ false, false, true, false, false ];
	actual = cuanyBy( x, isPositive );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	actual = cuanyBy( x, isPositive );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ true, true, true, true, true ];
	actual = cuanyBy( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ null, {}, null ];
	actual = cuanyBy( x, isPositive );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ true, false, false, false, false ];
	actual = cuanyBy( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function (typed)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0, 0.0 ] );
	actual = cuanyBy( x, isPositive );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuanyBy( x, isPositive );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	actual = cuanyBy( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 1.0, 0.0 ] );
	actual = cuanyBy( x, isPositive );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cuanyBy( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function (boolean)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new BooleanArray( [ false, false, true, false, false ] );
	actual = cuanyBy( x, isPositive );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ false, false, false, false, false ] );
	actual = cuanyBy( x, isPositive );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ true, true, true, true, true ] );
	actual = cuanyBy( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ false, true, true ] );
	actual = cuanyBy( x, isPositive );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ true, false, true, false, false ] );
	actual = cuanyBy( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ false, false, true, false, false ] );

	actual = cuanyBy( x, isPositive );
	expected = [ false, false, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ false, false, false, false, false ] );
	actual = cuanyBy( x, isPositive );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ true, true, true, true, true ] );
	actual = cuanyBy( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ false, true, false ] );
	actual = cuanyBy( x, isPositive );
	expected = [ false, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ true, false, false, false, false ] );
	actual = cuanyBy( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var out;
	var ctx;
	var x;

	ctx = {
		'count': 0
	};

	x = [ 0, 2, 0, 4 ];

	out = cuanyBy( x, predicate, ctx );
	expected = [ false, true, true, true ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );
	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( v > 0 );
	}
});
