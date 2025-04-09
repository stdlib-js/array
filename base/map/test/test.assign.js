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
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Float64Array = require( './../../../float64' );
var zeros = require( './../../../base/zeros' );
var map = require( './../lib' ).assign;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof map, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to elements in an input array and assigns results to elements in an output array (generic)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = zeros( x.length );
	expected = [ 10, 20, 30, 40 ];

	out = map( x, y, 1, 0, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function applies a provided callback to elements in an input array and assigns results to elements in an output array (typed array)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length );
	expected = new Float64Array( [ 10.0, 20.0, 30.0, 40.0 ] );

	out = map( x, y, 1, 0, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10.0;
	}
});

tape( 'the function applies a provided callback to elements in an input array and assigns results to elements in an output array (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	ybuf = zeros( x.length );
	y = toAccessorArray( ybuf );

	expected = [ 10, 20, 30, 40 ];

	out = map( toAccessorArray( x ), y, 1, 0, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function applies a provided callback to elements in an input array and assigns results to elements in an output array (array-like object)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	y = zeros( x.length );
	expected = [ 10, 20, 30, 40 ];

	out = map( x, y, 1, 0, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var out;
	var ctx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = zeros( x.length );
	ctx = {
		'factor': 10
	};
	expected = [ 10, 20, 30, 40 ];

	out = map( x, y, 1, 0, scale, ctx );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * this.factor; // eslint-disable-line no-invalid-this
	}
});

tape( 'the function supports providing a `stride` parameter (generic)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = zeros( x.length * 2 );
	expected = [ 10, 0, 20, 0, 30, 0, 40, 0 ];

	out = map( x, y, 2, 0, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing a `stride` parameter (typed array)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length * 2 );
	expected = new Float64Array( [ 10.0, 0.0, 20.0, 0.0, 30.0, 0.0, 40.0, 0.0 ] ); // eslint-disable-line max-len

	out = map( x, y, 2, 0, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10.0;
	}
});

tape( 'the function supports providing a `stride` parameter (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	ybuf = zeros( x.length * 2 );
	y = toAccessorArray( ybuf );

	expected = [ 10, 0, 20, 0, 30, 0, 40, 0 ];

	out = map( toAccessorArray( x ), y, 2, 0, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing a `stride` parameter (array-like object)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	y = zeros( x.length * 2 );
	expected = [ 10, 0, 20, 0, 30, 0, 40, 0 ];

	out = map( x, y, 2, 0, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing a negative `stride` parameter (generic)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = zeros( x.length );
	expected = [ 40, 30, 20, 10 ];

	out = map( x, y, -1, 3, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing a negative `stride` parameter (typed array)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length );
	expected = new Float64Array( [ 40, 30, 20, 10 ] );

	out = map( x, y, -1, 3, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10.0;
	}
});

tape( 'the function supports providing a negative `stride` parameter (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	ybuf = zeros( x.length );
	y = toAccessorArray( ybuf );

	expected = [ 40, 30, 20, 10 ];

	out = map( toAccessorArray( x ), y, -1, 3, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing a negative `stride` parameter (array-like object)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	y = zeros( x.length );
	expected = [ 40, 30, 20, 10 ];

	out = map( x, y, -1, 3, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing an `offset` parameter (generic)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = zeros( x.length * 2 );
	expected = [ 0, 10, 0, 20, 0, 30, 0, 40 ];

	out = map( x, y, 2, 1, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing an `offset` parameter (typed array)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length * 2 );
	expected = new Float64Array( [ 0.0, 10.0, 0.0, 20.0, 0.0, 30.0, 0.0, 40.0 ] ); // eslint-disable-line max-len

	out = map( x, y, 2, 1, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10.0;
	}
});

tape( 'the function supports providing an `offset` parameter (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var out;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	ybuf = zeros( x.length * 2 );
	y = toAccessorArray( ybuf );

	expected = [ 0, 10, 0, 20, 0, 30, 0, 40 ];

	out = map( toAccessorArray( x ), y, 2, 1, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing an `offset` parameter (array-like object)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	y = zeros( x.length * 2 );
	expected = [ 0, 10, 0, 20, 0, 30, 0, 40 ];

	out = map( x, y, 2, 1, scale );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});
