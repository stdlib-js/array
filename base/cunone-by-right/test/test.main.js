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
var Float64Array = require( './../../../float64' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var cunoneByRight = require( './../lib' );


// FUNCTIONS //

function isPositive( v ) {
	return v > 0;
}

function isNotNull( v ) {
	return v !== null;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cunoneByRight, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function cumulatively tests whether no array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 1, 0, 0, 0 ];

	actual = cunoneByRight( x, isPositive );
	expected = [ true, true, true, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 0.0, 0.0, 0.0, 1.0, 1.0 ];
	actual = cunoneByRight( x, isPositive );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ true, false, false, false, false ];
	actual = cunoneByRight( x, isPositive );
	expected = [ true, true, true, true, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ {}, {}, null ];
	actual = cunoneByRight( x, isNotNull );
	expected = [ true, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether no array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left (typed)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 0.0 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ true, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 1.0, 0.0 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ true, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 1.0, 0.0, 0.0, 0.0 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ true, true, true, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether no array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left (accessor)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ 1, 1, 0, 0, 0 ] );

	actual = cunoneByRight( x, isPositive );
	expected = [ true, true, true, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 0, 0, 0, 0, 0 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ true, true, true, true, true ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 1, 1, 1, 1 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ false, false, false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 0, 0, 1 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ false, false, false ];
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 0, 0, 0, 0 ] );
	actual = cunoneByRight( x, isPositive );
	expected = [ true, true, true, true, false ];
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

	x = [ 1, -2, 0, -1 ];

	out = cunoneByRight( x, predicate, ctx );
	expected = [ true, true, true, false ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );
	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( v > 0 );
	}
});
