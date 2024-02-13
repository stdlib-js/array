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
var groupEntries = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof groupEntries, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first and second argument which do not have the same length', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		groupEntries( [ 1, 2, 3 ], [ 0, 0 ] );
	}
});

tape( 'the function groups array element entries as arrays associated with distinct keys', function test( t ) {
	var expected;
	var out;
	var x;
	var g;

	x = [ 'beep', 'boop', 'foo', 'bar' ];
	g = [ 'b', 'b', 'f', 'b' ];

	expected = {
		'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		'f': [ [ 2, 'foo' ] ]
	};
	out = groupEntries( x, g );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function groups array element entries as arrays associated with distinct keys (array, typed array)', function test( t ) {
	var expected;
	var out;
	var x;
	var g;

	x = [ 'beep', 'boop', 'foo', 'bar' ];
	g = new Float64Array( [ 1, 1, 2, 1 ] );

	expected = {
		'1': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		'2': [ [ 2, 'foo' ] ]
	};
	out = groupEntries( x, g );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function groups array element entries as arrays associated with distinct keys (typed arrays)', function test( t ) {
	var expected;
	var out;
	var x;
	var g;

	x = new Float64Array( [ 3.14, 4.2, -1.0, -10.2 ] );
	g = new Float64Array( [ 2, 2, 1, 1 ] );

	expected = {
		'1': [ [ 2, -1.0 ], [ 3, -10.2 ] ],
		'2': [ [ 0, 3.14 ], [ 1, 4.2 ] ]
	};
	out = groupEntries( x, g );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function groups array element entries as arrays associated with distinct keys (array-like objects)', function test( t ) {
	var expected;
	var out;
	var x;
	var g;

	x = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};
	g = {
		'length': 4,
		'0': 'be',
		'1': 'bo',
		'2': 'fo',
		'3': 'ba'
	};

	expected = {
		'be': [ [ 0, 'beep' ] ],
		'bo': [ [ 1, 'boop' ] ],
		'fo': [ [ 2, 'foo' ] ],
		'ba': [ [ 3, 'bar' ] ]
	};
	out = groupEntries( x, g );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function groups array element entries as arrays associated with distinct keys (accessor arrays)', function test( t ) {
	var expected;
	var out;
	var x;
	var g;

	x = toAccessorArray( [ 'beep', 'boop', 'foo', 'bar' ] );
	g = toAccessorArray( [ 'b', 'b', 'f', 'b' ] );

	expected = {
		'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		'f': [ [ 2, 'foo' ] ]
	};
	out = groupEntries( x, g );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function groups array element entries as arrays associated with distinct keys (string serialization)', function test( t ) {
	var expected;
	var out;
	var x;
	var g;

	x = [ 'beep', 'boop', 'foo', 'bar' ];
	g = [ {}, {}, {}, {} ];

	expected = {
		'[object Object]': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 2, 'foo' ], [ 3, 'bar' ] ]
	};
	out = groupEntries( x, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function returns an empty object if provided an empty array', function test( t ) {
	var expected;
	var actual;

	expected = {};
	actual = groupEntries( [], [] );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
