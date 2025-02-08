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
var add = require( '@stdlib/number/float64/base/add3' );
var bternary2d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bternary2d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to broadcasted input arrays and assigns results to a nested output array', function test( t ) {
	var expected;
	var shapes;
	var out;
	var x;
	var y;
	var z;

	shapes = [
		[ 2 ],
		[ 2, 1 ],
		[ 1, 1 ],
		[ 2, 2 ]
	];
	x = [ 1.0, 2.0 ];
	y = [
		[ 3.0 ],
		[ 4.0 ]
	];
	z = [ [ 5.0 ] ];
	out = zeros2d( shapes[ 3 ] );

	expected = [
		[ 9.0, 10.0 ],
		[ 10.0, 11.0 ]
	];
	bternary2d( [ x, y, z, out ], shapes, add );
	t.deepEqual( out, expected, 'returns expected value' );

	shapes = [
		[ 1, 2 ],
		[ 2 ],
		[ 1 ],
		[ 2, 2 ]
	];
	x = [
		[ 1.0, 2.0 ]
	];
	y = [ 3.0, 4.0 ];
	z = [ 5.0 ];
	out = zeros2d( shapes[ 3 ] );

	expected = [
		[ 9.0, 11.0 ],
		[ 9.0, 11.0 ]
	];
	bternary2d( [ x, y, z, out ], shapes, add );
	t.deepEqual( out, expected, 'returns expected value' );

	// Same shapes:
	shapes = [
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
	out = zeros2d( shapes[ 3 ] );

	expected = [
		[ 3.0, 6.0 ],
		[ 9.0, 12.0 ]
	];
	bternary2d( [ x, y, z, out ], shapes, add );
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

	shapes = [
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
	out = zeros2d( [ 2, 2 ] );

	expected = zeros2d( [ 2, 2 ] );
	bternary2d( [ x, y, z, out ], shapes, clbk );
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

	shapes = [
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
	out = zeros2d( [ 2, 2 ] );

	expected = zeros2d( [ 2, 2 ] );
	bternary2d( [ x, y, z, out ], shapes, clbk );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();

	function clbk() {
		t.ok( false, 'should not invoke callback' );
	}
});
