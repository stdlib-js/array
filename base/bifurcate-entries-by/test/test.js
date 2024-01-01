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
var bifurcateEntriesBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bifurcateEntriesBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function splits array element entries into two groups according to a predicate function', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = [
		[ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		[ [ 2, 'foo' ] ]
	];
	out = bifurcateEntriesBy( x, predicate );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}
});

tape( 'the function splits array element entries into two groups according to a predicate function (typed arrays)', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 3.14, 4.2, -1.0, -10.2 ] );

	expected = [
		[ [ 2, -1.0 ], [ 3, -10.2 ] ],
		[ [ 0, 3.14 ], [ 1, 4.2 ] ]
	];
	out = bifurcateEntriesBy( x, predicate );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function predicate( v, i ) {
		return ( i >= 2 );
	}
});

tape( 'the function splits array element entries into two groups according to a predicate function (array-like objects)', function test( t ) {
	var expected;
	var out;
	var x;

	x = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};

	expected = [
		[ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		[ [ 2, 'foo' ] ]
	];
	out = bifurcateEntriesBy( x, predicate );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}
});

tape( 'the function splits array element entries into two groups according to a predicate function (accessor arrays)', function test( t ) {
	var expected;
	var out;
	var x;

	x = toAccessorArray( [ 'beep', 'boop', 'foo', 'bar' ] );

	expected = [
		[ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		[ [ 2, 'foo' ] ]
	];
	out = bifurcateEntriesBy( x, predicate );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}
});

tape( 'the function returns an empty array if provided an empty array', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = bifurcateEntriesBy( [], predicate );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function predicate( v ) {
		t.fail( 'should not be called' );
		return v;
	}
});

tape( 'the function supports specifying a callback execution context', function test( t ) {
	var expected;
	var out;
	var ctx;
	var x;

	x = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = [
		[ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		[ [ 2, 'foo' ] ]
	];
	ctx = {
		'count': 0
	};
	out = bifurcateEntriesBy( x, predicate, ctx );

	t.deepEqual( out, expected, 'returns expected value' );
	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v[ 0 ] === 'b';
	}
});
