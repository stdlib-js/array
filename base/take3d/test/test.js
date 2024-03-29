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
var zeros3d = require( './../../../base/zeros3d' );
var take3d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof take3d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a dimension which is out-of-bounds', function test( t ) {
	var values;
	var i;

	values = [
		99,
		999,
		9999,
		99999
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			take3d( zeros3d( [ 3, 3, 3 ] ), [ 0, 1 ], value, 'throw' );
		};
	}
});

tape( 'the function takes elements from a nested array (dim=0,mode=throw)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 0 ];
	actual = take3d( x, indices, 0, 'throw' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		],
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 0 ];
	actual = take3d( x, indices, 0, 'throw' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=1,mode=throw)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 1 ];
	actual = take3d( x, indices, 1, 'throw' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1 ];
	actual = take3d( x, indices, 1, 'throw' );
	expected = [
		[
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 0, 0 ];
	actual = take3d( x, indices, 1, 'throw' );
	expected = [
		[
			[ 1, 2 ],
			[ 1, 2 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1 ];
	actual = take3d( x, indices, 1, 'throw' );
	expected = [
		[
			[ 3, 4 ],
			[ 3, 4 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=2,mode=throw)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 1 ];
	actual = take3d( x, indices, 2, 'throw' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1 ];
	actual = take3d( x, indices, 2, 'throw' );
	expected = [
		[
			[ 2 ],
			[ 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 0, 0 ];
	actual = take3d( x, indices, 2, 'throw' );
	expected = [
		[
			[ 1, 1 ],
			[ 3, 3 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1 ];
	actual = take3d( x, indices, 2, 'throw' );
	expected = [
		[
			[ 2, 2, 2 ],
			[ 4, 4, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=0,mode=normalize)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, -1 ];
	actual = take3d( x, indices, 0, 'normalize' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		],
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ -1 ];
	actual = take3d( x, indices, 0, 'normalize' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=1,mode=normalize)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, -1 ];
	actual = take3d( x, indices, 1, 'normalize' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1 ];
	actual = take3d( x, indices, 1, 'normalize' );
	expected = [
		[
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ -2, 0 ];
	actual = take3d( x, indices, 1, 'normalize' );
	expected = [
		[
			[ 1, 2 ],
			[ 1, 2 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, -1, 1 ];
	actual = take3d( x, indices, 1, 'normalize' );
	expected = [
		[
			[ 3, 4 ],
			[ 3, 4 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=2,mode=normalize)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, -1 ];
	actual = take3d( x, indices, 2, 'normalize' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1 ];
	actual = take3d( x, indices, 2, 'normalize' );
	expected = [
		[
			[ 2 ],
			[ 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ -2, 0 ];
	actual = take3d( x, indices, 2, 'normalize' );
	expected = [
		[
			[ 1, 1 ],
			[ 3, 3 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, -1, 1 ];
	actual = take3d( x, indices, 2, 'normalize' );
	expected = [
		[
			[ 2, 2, 2 ],
			[ 4, 4, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=0,mode=clamp)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 10 ];
	actual = take3d( x, indices, 0, 'clamp' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		],
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 100 ];
	actual = take3d( x, indices, 0, 'clamp' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=1,mode=clamp)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 10 ];
	actual = take3d( x, indices, 1, 'clamp' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1 ];
	actual = take3d( x, indices, 1, 'clamp' );
	expected = [
		[
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ -10, 0 ];
	actual = take3d( x, indices, 1, 'clamp' );
	expected = [
		[
			[ 1, 2 ],
			[ 1, 2 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 100 ];
	actual = take3d( x, indices, 1, 'clamp' );
	expected = [
		[
			[ 3, 4 ],
			[ 3, 4 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=2,mode=clamp)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 10 ];
	actual = take3d( x, indices, 2, 'clamp' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1 ];
	actual = take3d( x, indices, 2, 'clamp' );
	expected = [
		[
			[ 2 ],
			[ 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ -10, 0 ];
	actual = take3d( x, indices, 2, 'clamp' );
	expected = [
		[
			[ 1, 1 ],
			[ 3, 3 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 100 ];
	actual = take3d( x, indices, 2, 'clamp' );
	expected = [
		[
			[ 2, 2, 2 ],
			[ 4, 4, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=0,mode=wrap)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 3 ];
	actual = take3d( x, indices, 0, 'wrap' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		],
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 10 ];
	actual = take3d( x, indices, 0, 'wrap' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=1,mode=wrap)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 3 ];
	actual = take3d( x, indices, 1, 'wrap' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1 ];
	actual = take3d( x, indices, 1, 'wrap' );
	expected = [
		[
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 0, 4 ];
	actual = take3d( x, indices, 1, 'wrap' );
	expected = [
		[
			[ 1, 2 ],
			[ 1, 2 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, -3, 1 ];
	actual = take3d( x, indices, 1, 'wrap' );
	expected = [
		[
			[ 3, 4 ],
			[ 3, 4 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from a nested array (dim=2,mode=wrap)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [ 0, 3 ];
	actual = take3d( x, indices, 2, 'wrap' );
	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1 ];
	actual = take3d( x, indices, 2, 'wrap' );
	expected = [
		[
			[ 2 ],
			[ 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 0, 4 ];
	actual = take3d( x, indices, 2, 'wrap' );
	expected = [
		[
			[ 1, 1 ],
			[ 3, 3 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, -3, 1 ];
	actual = take3d( x, indices, 2, 'wrap' );
	expected = [
		[
			[ 2, 2, 2 ],
			[ 4, 4, 4 ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided a second argument which is empty (dim=0)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [];
	actual = take3d( x, indices, 0, 'throw' );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided a second argument which is empty (dim=1)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [];
	actual = take3d( x, indices, 1, 'throw' );
	expected = [
		[]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided a second argument which is empty (dim=2)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		]
	];

	indices = [];
	actual = take3d( x, indices, 2, 'throw' );
	expected = [
		[
			[],
			[]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
