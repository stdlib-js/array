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
var isArray = require( '@stdlib/assert/is-array' );
var scattered = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scattered, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a third argument which is not broadcast compatible with the second argument', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			scattered( 4, [ 1, 2 ], value, 'throw' );
		};
	}
});

tape( 'the function scatters elements to a new array', function test( t ) {
	var expected;
	var indices;
	var actual;

	indices = [ 1, 3 ];
	actual = scattered( 4, indices, [ 20, 40 ], 'throw' );
	expected = [ 0, 20, 0, 40 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	actual = scattered( 4, indices, [ 20, 30, 40, 50 ], 'throw' );
	expected = [ 0, 30, 0, 50 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 3, 2, 1, 0 ];
	actual = scattered( 4, indices, [ 20, 30, 40, 50 ], 'throw' );
	expected = [ 50, 40, 30, 20 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = scattered( 4, indices, [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ], 'throw' );
	expected = [ 0, 100, 0, 0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function scatters elements to a new array (broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;

	indices = [ 1, 3 ];
	actual = scattered( 4, indices, [ 20 ], 'throw' );
	expected = [ 0, 20, 0, 20 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	actual = scattered( 4, indices, [ 20 ], 'throw' );
	expected = [ 0, 20, 0, 20 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 3, 2, 1, 0 ];
	actual = scattered( 4, indices, [ 20 ], 'throw' );
	expected = [ 20, 20, 20, 20 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = scattered( 4, indices, [ 100 ], 'throw' );
	expected = [ 0, 100, 0, 0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array if provided a second argument which is empty', function test( t ) {
	var actual;

	actual = scattered( 4, [], [ 5, 6, 7, 8 ], 'throw' );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, [ 0, 0, 0, 0 ], 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;

	indices = [ 4, 5, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		scattered( 4, indices, [ 200 ], 'throw' );
	}
});

tape( 'when the "mode" is "normalize", the function normalizes negative indices', function test( t ) {
	var expected;
	var indices;
	var actual;

	indices = [ -1, -2, -3, -4 ];
	actual = scattered( 4, indices, [ 5, 6, 7, 8 ], 'normalize' );
	expected = [ 8, 7, 6, 5 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "normalize", the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;

	indices = [ 2, 50, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		scattered( 4, indices, [ 100 ], 'normalize' );
	}
});

tape( 'when the "mode" is "clamp", the function clamps out-of-bounds indices', function test( t ) {
	var expected;
	var indices;
	var actual;

	indices = [ -10, 10, -5, 5 ];
	actual = scattered( 4, indices, [ 100, 200, 300, 400 ], 'clamp' );
	expected = [ 300, 0, 0, 400 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "wrap", the function wraps out-of-bounds indices', function test( t ) {
	var expected;
	var indices;
	var actual;

	indices = [ -10, 10, -5, 5 ];
	actual = scattered( 4, indices, [ 100, 200, 300, 400 ], 'wrap' );
	expected = [ 0, 400, 200, 300 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
