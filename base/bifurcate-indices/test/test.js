/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Float64Array = require( './../../../float64' );
var bifurcateIndices = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bifurcateIndices, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first and second argument which do not have the same length', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		bifurcateIndices( [ 1, 2, 3 ], [ 0, 0 ] );
	}
});

tape( 'the function splits array element indices into two groups', function test( t ) {
	var expected;
	var out;
	var x;
	var f;

	x = [ 'beep', 'boop', 'foo', 'bar' ];
	f = [ 1, 1, 0, 1 ];

	expected = [
		[ 0, 1, 3 ],
		[ 2 ]
	];
	out = bifurcateIndices( x, f );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function splits array element indices into two groups (array, typed array)', function test( t ) {
	var expected;
	var out;
	var x;
	var f;

	x = [ 'beep', 'boop', 'foo', 'bar' ];
	f = new Float64Array( [ 1, 1, 0, 1 ] );

	expected = [
		[ 0, 1, 3 ],
		[ 2 ]
	];
	out = bifurcateIndices( x, f );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function splits array element indices into two groups (typed arrays)', function test( t ) {
	var expected;
	var out;
	var x;
	var f;

	x = new Float64Array( [ 3.14, 4.2, -1.0, -10.2 ] );
	f = new Float64Array( [ 0, 0, 1, 1 ] );

	expected = [
		[ 2, 3 ],
		[ 0, 1 ]
	];
	out = bifurcateIndices( x, f );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function splits array element indices into two groups (array-like objects)', function test( t ) {
	var expected;
	var out;
	var x;
	var f;

	x = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};
	f = {
		'length': 4,
		'0': 1,
		'1': 1,
		'2': 0,
		'3': 1
	};

	expected = [
		[ 0, 1, 3 ],
		[ 2 ]
	];
	out = bifurcateIndices( x, f );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function splits array element indices into two groups (accessor arrays)', function test( t ) {
	var expected;
	var out;
	var x;
	var g;

	x = toAccessorArray( [ 'beep', 'boop', 'foo', 'bar' ] );
	g = toAccessorArray( [ 1, 1, 0, 1 ] );

	expected = [
		[ 0, 1, 3 ],
		[ 2 ]
	];
	out = bifurcateIndices( x, g );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty array if provided an empty array', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = bifurcateIndices( [], [] );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
