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
var abs = require( '@stdlib/math/base/special/abs' );
var zeros4d = require( './../../../base/zeros4d' );
var numel = require( '@stdlib/ndarray/base/numel' );
var unary4dBy = require( './../lib' );


// FUNCTIONS //

function accessor( v ) {
	if ( v === void 0 ) {
		return;
	}
	return v * 2.0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unary4dBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a function to each nested input array element according to a callback function and assigns results to a nested output array', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;

	shape = [ 1, 1, 2, 2 ];
	x = [
		[
			[
				[ -1.0, -2.0 ],
				[ -3.0, -4.0 ]
			]
		]
	];

	expected = [
		[
			[
				[ 2.0, 4.0 ],
				[ 6.0, 8.0 ]
			]
		]
	];

	y = zeros4d( shape );
	unary4dBy( [ x, y ], shape, abs, accessor );

	t.deepEqual( y, expected, 'returns expected value' );

	shape = [ 1, 1, 2, 2 ];
	x = [
		[
			[
				[ -1.0, void 0 ],
				[ void 0, -4.0 ]
			]
		]
	];

	expected = [
		[
			[
				[ 2.0, 0.0 ],
				[ 0.0, 8.0 ]
			]
		]
	];

	y = zeros4d( shape );
	unary4dBy( [ x, y ], shape, abs, accessor );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function does not invoke provided functions if provided a shape having a first element equal to zero', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;

	shape = [ 1, 1, 2, 2 ];
	x = [
		[
			[
				[ -1.0, -2.0 ],
				[ -3.0, -4.0 ]
			]
		]
	];

	expected = zeros4d( shape );

	y = zeros4d( shape );
	unary4dBy( [ x, y ], [ 0, 1, 2, 2 ], clbk, clbk );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke function' );
	}
});

tape( 'the function does not invoke provided functions if provided a shape having a second element equal to zero', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;

	shape = [ 1, 1, 2, 2 ];
	x = [
		[
			[
				[ -1.0, -2.0 ],
				[ -3.0, -4.0 ]
			]
		]
	];

	expected = zeros4d( shape );

	y = zeros4d( shape );
	unary4dBy( [ x, y ], [ 1, 0, 2, 2 ], clbk, clbk );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke function' );
	}
});

tape( 'the function does not invoke provided functions if provided a shape having a third element equal to zero', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;

	shape = [ 1, 1, 2, 2 ];
	x = [
		[
			[
				[ -1.0, -2.0 ],
				[ -3.0, -4.0 ]
			]
		]
	];

	expected = zeros4d( shape );

	y = zeros4d( shape );
	unary4dBy( [ x, y ], [ 1, 1, 0, 2 ], clbk, clbk );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke function' );
	}
});

tape( 'the function does not invoke provided functions if provided a shape having a fourth element equal to zero', function test( t ) {
	var expected;
	var shape;
	var x;
	var y;

	shape = [ 1, 1, 2, 2 ];
	x = [
		[
			[
				[ -1.0, -2.0 ],
				[ -3.0, -4.0 ]
			]
		]
	];

	expected = zeros4d( shape );

	y = zeros4d( shape );
	unary4dBy( [ x, y ], [ 1, 1, 2, 0 ], clbk, clbk );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();

	function clbk() {
		t.ok( false, 'should not invoke function' );
	}
});

tape( 'the function invokes the callback with three arguments', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var shape;
	var x;
	var y;

	shape = [ 1, 1, 2, 2 ];
	x = [
		[
			[
				[ -1.0, -2.0 ],
				[ -3.0, -4.0 ]
			]
		]
	];

	y = zeros4d( shape );

	values = [];
	indices = [];
	arrays = [];
	unary4dBy( [ x, y ], shape, abs, clbk );

	expected = [
		-1.0,
		-2.0,
		-3.0,
		-4.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0, 0 ],
		[ 0, 0, 0, 1 ],
		[ 0, 0, 1, 0 ],
		[ 0, 0, 1, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		[ x, y ],
		[ x, y ],
		[ x, y ],
		[ x, y ]
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( v, idx, arr ) {
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v * 2.0;
	}
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var shape;
	var ctx;
	var x;
	var y;

	shape = [ 1, 1, 2, 2 ];
	x = [
		[
			[
				[ -1.0, -2.0 ],
				[ -3.0, -4.0 ]
			]
		]
	];

	y = zeros4d( shape );

	ctx = {
		'count': 0
	};
	unary4dBy( [ x, y ], shape, abs, clbk, ctx );

	t.strictEqual( ctx.count, numel( shape ), 'returns expected value' );
	t.end();

	function clbk( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * 2.0;
	}
});
