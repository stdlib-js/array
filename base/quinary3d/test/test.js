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
var add = require( '@stdlib/math/base/ops/add5' );
var quinary3d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quinary3d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to nested input arrays and assigns results to a nested output array', function test( t ) {
	var expected;
	var shape;
	var out;
	var x;
	var y;
	var z;
	var w;
	var v;

	shape = [ 1, 2, 2 ];
	x = [
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		]
	];
	y = [
		[
			[ 5.0, 6.0 ],
			[ 7.0, 8.0 ]
		]
	];
	z = [
		[
			[ 9.0, 10.0 ],
			[ 11.0, 12.0 ]
		]
	];
	w = [
		[
			[ 13.0, 14.0 ],
			[ 15.0, 16.0 ]
		]
	];
	v = [
		[
			[ 17.0, 18.0 ],
			[ 19.0, 20.0 ]
		]
	];
	out = zeros3d( shape );

	expected = [
		[
			[ 45.0, 50.0 ],
			[ 55.0, 60.0 ]
		]
	];
	quinary3d( [ x, y, z, w, v, out ], shape, add );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function does not invoke a provided callback if provided a shape having a first element equal to zero', function test( t ) {
	var expected;
	var shape;
	var out;
	var x;
	var y;
	var z;
	var w;
	var v;

	shape = [ 1, 2, 2 ];
	x = [
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		]
	];
	y = [
		[
			[ 5.0, 6.0 ],
			[ 7.0, 8.0 ]
		]
	];
	z = [
		[
			[ 9.0, 10.0 ],
			[ 11.0, 12.0 ]
		]
	];
	w = [
		[
			[ 13.0, 14.0 ],
			[ 15.0, 16.0 ]
		]
	];
	v = [
		[
			[ 17.0, 18.0 ],
			[ 19.0, 20.0 ]
		]
	];
	out = zeros3d( shape );

	expected = zeros3d( shape );
	quinary3d( [ x, y, z, w, v, out ], [ 0, 2, 2 ], clbk );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided a shape having a second element equal to zero', function test( t ) {
	var expected;
	var shape;
	var out;
	var x;
	var y;
	var z;
	var w;
	var v;

	shape = [ 1, 2, 2 ];
	x = [
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		]
	];
	y = [
		[
			[ 5.0, 6.0 ],
			[ 7.0, 8.0 ]
		]
	];
	z = [
		[
			[ 9.0, 10.0 ],
			[ 11.0, 12.0 ]
		]
	];
	w = [
		[
			[ 13.0, 14.0 ],
			[ 15.0, 16.0 ]
		]
	];
	v = [
		[
			[ 17.0, 18.0 ],
			[ 19.0, 20.0 ]
		]
	];
	out = zeros3d( shape );

	expected = zeros3d( shape );
	quinary3d( [ x, y, z, w, v, out ], [ 1, 0, 2 ], clbk );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided a shape having a third element equal to zero', function test( t ) {
	var expected;
	var shape;
	var out;
	var x;
	var y;
	var z;
	var w;
	var v;

	shape = [ 1, 2, 2 ];
	x = [
		[
			[ 1.0, 2.0 ],
			[ 3.0, 4.0 ]
		]
	];
	y = [
		[
			[ 5.0, 6.0 ],
			[ 7.0, 8.0 ]
		]
	];
	z = [
		[
			[ 9.0, 10.0 ],
			[ 11.0, 12.0 ]
		]
	];
	w = [
		[
			[ 13.0, 14.0 ],
			[ 15.0, 16.0 ]
		]
	];
	v = [
		[
			[ 17.0, 18.0 ],
			[ 19.0, 20.0 ]
		]
	];
	out = zeros3d( shape );

	expected = zeros3d( shape );
	quinary3d( [ x, y, z, w, v, out ], [ 1, 2, 0 ], clbk );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});
