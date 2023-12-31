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
var zeros3d = require( './../../../base/zeros3d' );
var bunary3d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bunary3d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to a broadcasted input array and assigns results to a nested output array', function test( t ) {
	var expected;
	var shapes;
	var x;
	var y;

	// 1-dimensional:
	shapes = [
		[ 2 ],
		[ 1, 2, 2 ]
	];
	x = [ -1.0, -2.0 ];

	expected = [
		[
			[ 1.0, 2.0 ],
			[ 1.0, 2.0 ]
		]
	];

	y = zeros3d( shapes[ 1 ] );
	bunary3d( [ x, y ], shapes, abs );

	t.deepEqual( y, expected, 'returns expected value' );

	// 2-dimensional:
	shapes = [
		[ 1, 2 ],
		[ 1, 2, 2 ]
	];
	x = [
		[ -1.0, -2.0 ]
	];

	expected = [
		[
			[ 1.0, 2.0 ],
			[ 1.0, 2.0 ]
		]
	];

	y = zeros3d( shapes[ 1 ] );
	bunary3d( [ x, y ], shapes, abs );

	t.deepEqual( y, expected, 'returns expected value' );

	// 3-dimensional:
	shapes = [
		[ 1, 2, 2 ],
		[ 2, 2, 2 ]
	];
	x = [
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		]
	];

	expected = [
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		],
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		]
	];

	y = zeros3d( shapes[ 1 ] );
	bunary3d( [ x, y ], shapes, abs );

	t.deepEqual( y, expected, 'returns expected value' );

	// 3-dimensional (same shape):
	shapes = [
		[ 2, 2, 2 ],
		[ 2, 2, 2 ]
	];
	x = [
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		],
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		]
	];

	expected = [
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		],
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		]
	];

	y = zeros3d( shapes[ 1 ] );
	bunary3d( [ x, y ], shapes, abs );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function does not invoke a provided callback if provided an output shape having a first element equal to zero', function test( t ) {
	var expected;
	var shapes;
	var x;
	var y;

	shapes = [
		[ 2, 2, 2 ],
		[ 0, 2, 2 ]
	];
	x = [
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		],
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		]
	];

	expected = zeros3d( [ 2, 2, 2 ] );

	y = zeros3d( [ 2, 2, 2 ] );
	bunary3d( [ x, y ], shapes, clbk );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided an output shape having a second element equal to zero', function test( t ) {
	var expected;
	var shapes;
	var x;
	var y;

	shapes = [
		[ 2, 2, 2 ],
		[ 2, 0, 2 ]
	];
	x = [
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		],
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		]
	];

	expected = zeros3d( [ 2, 2, 2 ] );

	y = zeros3d( [ 2, 2, 2 ] );
	bunary3d( [ x, y ], shapes, clbk );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided an output shape having a third element equal to zero', function test( t ) {
	var expected;
	var shapes;
	var x;
	var y;

	shapes = [
		[ 2, 2, 2 ],
		[ 2, 2, 0 ]
	];
	x = [
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		],
		[
			[ -1.0, -2.0 ],
			[ -3.0, -4.0 ]
		]
	];

	expected = zeros3d( [ 2, 2, 2 ] );

	y = zeros3d( [ 2, 2, 2 ] );
	bunary3d( [ x, y ], shapes, clbk );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});
