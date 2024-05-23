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
var zeros2d = require( './../../../base/zeros2d' );
var bquinary2d = require( './../lib' );


// FUNCTIONS //

/**
* Returns the sum.
*
* @private
* @param {number} x - first value
* @param {number} y - second value
* @param {number} z - third value
* @param {number} w - fourth value
* @param {number} v - fifth value
* @returns {number} sum
*/
function add( x, y, z, w, v ) {
	return x + y + z + w + v;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bquinary2d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to broadcasted input arrays and assigns results to a nested output array', function test( t ) {
	var expected;
	var shapes;
	var out;
	var x;
	var y;
	var z;
	var w;
	var u;

	shapes = [
		[ 2 ],
		[ 2, 1 ],
		[ 1, 1 ],
		[ 1 ],
		[ 1, 2 ],
		[ 2, 2 ]
	];
	x = [ 1.0, 2.0 ];
	y = [
		[ 3.0 ],
		[ 4.0 ]
	];
	z = [ [ 5.0 ] ];
	w = [ 1.0 ];
	u = [ [ 1.0, 2.0 ] ];
	out = zeros2d( shapes[ 5 ] );

	expected = [
		[ 11.0, 13.0 ],
		[ 12.0, 14.0 ]
	];
	bquinary2d( [ x, y, z, w, u, out ], shapes, add );
	t.deepEqual( out, expected, 'returns expected value' );

	shapes = [
		[ 1, 2 ],
		[ 2 ],
		[ 1 ],
		[ 2, 2 ],
		[ 2, 1 ],
		[ 2, 2 ]
	];
	x = [
		[ 1.0, 2.0 ]
	];
	y = [ 3.0, 4.0 ];
	z = [ 5.0 ];
	w = [
		[ 2.0, 3.0 ],
		[ 4.0, 5.0 ]
	];
	u = [
		[ 1.0 ],
		[ 2.0 ]
	];
	out = zeros2d( shapes[ 5 ] );

	expected = [
		[ 12.0, 15.0 ],
		[ 15.0, 18.0 ]
	];
	bquinary2d( [ x, y, z, w, u, out ], shapes, add );
	t.deepEqual( out, expected, 'returns expected value' );

	// Same shapes:
	shapes = [
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ]
	];
	x = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	y = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	z = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	w = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	u = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	out = zeros2d( shapes[ 5 ] );

	expected = [
		[ 5.0, 10.0 ],
		[ 15.0, 20.0 ]
	];
	bquinary2d( [ x, y, z, w, u, out ], shapes, add );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function does not invoke a provided callback if provided an output shape having a first element equal to zero', function test( t ) {
	var expected;
	var shapes;
	var out;
	var x;
	var y;
	var z;
	var w;
	var u;

	shapes = [
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 0, 2 ]
	];
	x = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	y = x;
	z = x;
	w = x;
	u = x;
	out = zeros2d( [ 2, 2 ] );

	expected = zeros2d( [ 2, 2 ] );
	bquinary2d( [ x, y, z, w, u, out ], shapes, clbk );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});

tape( 'the function does not invoke a provided callback if provided an output shape having a second element equal to zero', function test( t ) {
	var expected;
	var shapes;
	var out;
	var x;
	var y;
	var z;
	var w;
	var u;

	shapes = [
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 2 ],
		[ 2, 0 ]
	];
	x = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	y = x;
	z = x;
	w = x;
	u = x;
	out = zeros2d( [ 2, 2 ] );

	expected = zeros2d( [ 2, 2 ] );
	bquinary2d( [ x, y, z, w, u, out ], shapes, clbk );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});
