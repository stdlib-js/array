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
var add = require( '@stdlib/number/float64/base/add' );
var zeros3d = require( './../../../base/zeros3d' );
var mskbinary3d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskbinary3d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to nested input arrays and assigns results to a nested output array', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;
	var z;
	var m;

	shape = [ 2, 2, 2 ];
	x = [
		[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ],
		[ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ]
	];
	y = [
		[ [ 10.0, 20.0 ], [ 30.0, 40.0 ] ],
		[ [ 50.0, 60.0 ], [ 70.0, 80.0 ] ]
	];
	z = zeros3d( shape );
	m = [
		[ [ 0, 1 ], [ 0, 0 ] ],
		[ [ 1, 0 ], [ 0, 1 ] ]
	];

	expected = [
		[ [ 11.0, 0.0 ], [ 33.0, 44.0 ] ],
		[ [ 0.0, 66.0 ], [ 77.0, 0.0 ] ]
	];
	mskbinary3d( [ x, y, m, z ], shape, add );

	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function does not invoke a provided callback if provided a shape having a first element equal to zero', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;
	var z;
	var m;

	shape = [ 2, 2, 2 ];
	x = [
		[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ],
		[ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ]
	];
	y = [
		[ [ 10.0, 20.0 ], [ 30.0, 40.0 ] ],
		[ [ 50.0, 60.0 ], [ 70.0, 80.0 ] ]
	];
	z = zeros3d( shape );
	m = [
		[ [ 0, 1 ], [ 0, 0 ] ],
		[ [ 1, 0 ], [ 0, 1 ] ]
	];

	expected = zeros3d( shape );
	mskbinary3d( [ x, y, m, z ], [ 0, 2, 2 ], clbk );

	t.deepEqual( z, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided a shape having a second element equal to zero', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;
	var z;
	var m;

	shape = [ 2, 2, 2 ];
	x = [
		[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ],
		[ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ]
	];
	y = [
		[ [ 10.0, 20.0 ], [ 30.0, 40.0 ] ],
		[ [ 50.0, 60.0 ], [ 70.0, 80.0 ] ]
	];
	z = zeros3d( shape );
	m = [
		[ [ 0, 1 ], [ 0, 0 ] ],
		[ [ 1, 0 ], [ 0, 1 ] ]
	];

	expected = zeros3d( shape );
	mskbinary3d( [ x, y, m, z ], [ 2, 0, 2 ], clbk );

	t.deepEqual( z, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided a shape having a third element equal to zero', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;
	var z;
	var m;

	shape = [ 2, 2, 2 ];
	x = [
		[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ],
		[ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ]
	];
	y = [
		[ [ 10.0, 20.0 ], [ 30.0, 40.0 ] ],
		[ [ 50.0, 60.0 ], [ 70.0, 80.0 ] ]
	];
	z = zeros3d( shape );
	m = [
		[ [ 0, 1 ], [ 0, 0 ] ],
		[ [ 1, 0 ], [ 0, 1 ] ]
	];

	expected = zeros3d( shape );
	mskbinary3d( [ x, y, m, z ], [ 2, 2, 0 ], clbk );

	t.deepEqual( z, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});
