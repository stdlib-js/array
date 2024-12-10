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
var add = require( '@stdlib/math/base/ops/add3' );
var zeros4d = require( './../../../base/zeros4d' );
var bternary4d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bternary4d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to broadcasted input arrays and assigns results to a nested output array', function test( t ) {
	var expected;
	var shapes;
	var x;
	var y;
	var z;
	var w;

	shapes = [
		[ 2 ],
		[ 2, 1, 1, 1 ],
		[ 2, 1, 2 ],
		[ 2, 2, 2, 2 ]
	];
	x = [ 1.0, 2.0 ];
	y = [
		[ [ [ 3.0 ] ] ],
		[ [ [ 4.0 ] ] ]
	];
	z = [ [ [ 5.0, 6.0 ] ], [ [ 7.0, 8.0 ] ] ];
	w = zeros4d( shapes[ 3 ] );

	expected = [
		[
			[ [ 9.0, 11.0 ], [ 9.0, 11.0 ] ],
			[ [ 11.0, 13.0 ], [ 11.0, 13.0 ] ]
		],
		[
			[ [ 10.0, 12.0 ], [ 10.0, 12.0 ] ],
			[ [ 12.0, 14.0 ], [ 12.0, 14.0 ] ]
		]
	];
	bternary4d( [ x, y, z, w ], shapes, add );
	t.deepEqual( w, expected, 'returns expected value' );

	shapes = [
		[ 2 ],
		[ 1, 2 ],
		[ 2, 1, 1, 2 ],
		[ 2, 2, 2, 2 ]
	];
	x = [ 1.0, 2.0 ];
	y = [ [ 3.0, 4.0 ] ];
	z = [ [ [ [ 5.0, 6.0 ] ] ], [ [ [ 7.0, 8.0 ] ] ] ];
	w = zeros4d( shapes[ 3 ] );

	expected = [
		[
			[ [ 9.0, 12.0 ], [ 9.0, 12.0 ] ],
			[ [ 9.0, 12.0 ], [ 9.0, 12.0 ] ]

		],
		[
			[ [ 11.0, 14.0 ], [ 11.0, 14.0 ] ],
			[ [ 11.0, 14.0 ], [ 11.0, 14.0 ] ]
		]
	];
	bternary4d( [ x, y, z, w ], shapes, add );
	t.deepEqual( w, expected, 'returns expected value' );

	// Same shapes:
	shapes = [
		[ 2, 2, 2, 2 ],
		[ 2, 2, 2, 2 ],
		[ 2, 2, 2, 2 ],
		[ 2, 2, 2, 2 ]
	];
	x = [
		[
			[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ],
			[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
		],
		[
			[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ],
			[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
		]
	];

	y = [
		[
			[ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ],
			[ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ]
		],
		[
			[ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ],
			[ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ]
		]
	];
	z = [
		[
			[ [ 9.0, 10.0 ], [ 10.0, 12.0 ] ],
			[ [ 9.0, 10.0 ], [ 10.0, 12.0 ] ]
		],
		[
			[ [ 9.0, 10.0 ], [ 10.0, 12.0 ] ],
			[ [ 9.0, 10.0 ], [ 10.0, 12.0 ] ]
		]
	];
	w = zeros4d( shapes[ 3 ] );

	expected = [
		[
			[ [ 15.0, 18.0 ], [ 20.0, 24.0 ] ],
			[ [ 15.0, 18.0 ], [ 20.0, 24.0 ] ]
		],
		[
			[ [ 15.0, 18.0 ], [ 20.0, 24.0 ] ],
			[ [ 15.0, 18.0 ], [ 20.0, 24.0 ] ]
		]
	];
	bternary4d( [ x, y, z, w ], shapes, add );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function does not invoke a provided callback if provided an output shape having a first element equal to zero', function test( t ) {
	var expected;
	var shapes;
	var x;
	var y;
	var z;
	var w;

	shapes = [
		[ 1, 1, 2, 2 ],
		[ 1, 1, 2, 2 ],
		[ 1, 1, 2, 2 ],
		[ 0, 2, 2, 2 ]
	];
	x = [
		[
			[
				[ 1.0, 2.0 ],
				[ 3.0, 4.0 ]
			]
		]
	];
	y = x;
	z = x;
	w = zeros4d( [ 2, 2, 2, 2 ] );

	expected = zeros4d( [ 2, 2, 2, 2 ] );
	bternary4d( [ x, y, z, w ], shapes, clbk );
	t.deepEqual( w, expected, 'returns expected value' );

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
	var z;
	var w;

	shapes = [
		[ 1, 1, 2, 2 ],
		[ 1, 1, 2, 2 ],
		[ 1, 1, 2, 2 ],
		[ 2, 0, 2, 2 ]
	];
	x = [
		[
			[
				[ 1.0, 2.0 ],
				[ 3.0, 4.0 ]
			]
		]
	];
	y = x;
	z = x;
	w = zeros4d( [ 2, 2, 2, 2 ] );

	expected = zeros4d( [ 2, 2, 2, 2 ] );
	bternary4d( [ x, y, z, w ], shapes, clbk );
	t.deepEqual( w, expected, 'returns expected value' );

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
	var z;
	var w;

	shapes = [
		[ 1, 1, 2, 2 ],
		[ 1, 1, 2, 2 ],
		[ 1, 1, 2, 2 ],
		[ 2, 2, 0, 2 ]
	];
	x = [
		[
			[
				[ 1.0, 2.0 ],
				[ 3.0, 4.0 ]
			]
		]
	];
	y = x;
	z = x;
	w = zeros4d( [ 2, 2, 2, 2 ] );

	expected = zeros4d( [ 2, 2, 2, 2 ] );
	bternary4d( [ x, y, z, w ], shapes, clbk );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided an output shape having a forth element equal to zero', function test( t ) {
	var expected;
	var shapes;
	var x;
	var y;
	var z;
	var w;

	shapes = [
		[ 1, 1, 2, 2 ],
		[ 1, 1, 2, 2 ],
		[ 1, 1, 2, 2 ],
		[ 2, 2, 2, 0 ]
	];
	x = [
		[
			[
				[ 1.0, 2.0 ],
				[ 3.0, 4.0 ]
			]
		]
	];
	y = x;
	z = x;
	w = zeros4d( [ 2, 2, 2, 2 ] );

	expected = zeros4d( [ 2, 2, 2, 2 ] );
	bternary4d( [ x, y, z, w ], shapes, clbk );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});
