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
var abs = require( '@stdlib/math/base/special/abs' );
var numel = require( '@stdlib/ndarray/base/numel' );
var map5d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof map5d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to a nested input array and assigns results to a nested output array', function test( t ) {
	var expected;
	var shape;
	var out;
	var x;

	shape = [ 1, 1, 1, 2, 2 ];
	x = [
		[
			[
				[
					[ -1.0, -2.0 ],
					[ -3.0, -4.0 ]
				]
			]
		]
	];

	expected = [
		[
			[
				[
					[ 1.0, 2.0 ],
					[ 3.0, 4.0 ]
				]
			]
		]
	];

	out = map5d( x, shape, abs );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function does not invoke a provided callback if provided a shape having a first element equal to zero', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		[
			[
				[
					[ -1.0, -2.0 ],
					[ -3.0, -4.0 ]
				]
			]
		]
	];

	expected = [];

	out = map5d( x, [ 0, 1, 1, 2, 2 ], clbk );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided a shape having a second element equal to zero', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		[
			[
				[
					[ -1.0, -2.0 ],
					[ -3.0, -4.0 ]
				]
			]
		]
	];

	expected = [
		[]
	];

	out = map5d( x, [ 1, 0, 1, 2, 2 ], clbk );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided a shape having a third element equal to zero', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		[
			[
				[
					[ -1.0, -2.0 ],
					[ -3.0, -4.0 ]
				]
			]
		]
	];

	expected = [
		[
			[]
		]
	];

	out = map5d( x, [ 1, 1, 0, 2, 2 ], clbk );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided a shape having a fourth element equal to zero', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		[
			[
				[
					[ -1.0, -2.0 ],
					[ -3.0, -4.0 ]
				]
			]
		]
	];

	expected = [
		[
			[
				[]
			]
		]
	];

	out = map5d( x, [ 1, 1, 1, 0, 2 ], clbk );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided a shape having a fifth element equal to zero', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		[
			[
				[
					[ -1.0, -2.0 ],
					[ -3.0, -4.0 ]
				]
			]
		]
	];

	expected = [
		[
			[
				[
					[],
					[]
				]
			]
		]
	];

	out = map5d( x, [ 1, 1, 1, 2, 0 ], clbk );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function supports providing a function execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var shape;
	var out;
	var ctx;
	var x;

	values = [];
	indices = [];
	arrays = [];

	shape = [ 1, 1, 1, 2, 2 ];
	x = [
		[
			[
				[
					[ 1.0, 2.0 ],
					[ 3.0, 4.0 ]
				]
			]
		]
	];

	ctx = {
		'count': 0
	};
	out = map5d( x, shape, fcn, ctx );

	expected = [
		[
			[
				[
					[ 1.0, 2.0 ],
					[ 3.0, 4.0 ]
				]
			]
		]
	];
	t.deepEqual( out, expected, 'returns expected value' );
	t.strictEqual( ctx.count, numel( shape ), 'returns expected value' );

	expected = [
		1.0,
		2.0,
		3.0,
		4.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 1 ],
		[ 0, 0, 0, 1, 0 ],
		[ 0, 0, 0, 1, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function fcn( value, idx, array ) {
		values.push( value );
		indices.push( idx );
		arrays.push( array );
		ctx.count += 1;
		return value;
	}
});
