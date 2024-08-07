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
var Complex64Array = require( './../../../complex64' );
var Int32Array = require( './../../../int32' );
var BooleanArray = require( './../../../bool' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var put = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof put, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a third argument which is not broadcast compatible with the second argument (generic)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( [ 1, 2, 3, 4 ], [ 1, 2 ], value, 'throw' );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not broadcast compatible with the second argument (typed)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( new Int32Array( [ 1, 2, 3, 4 ] ), [ 1, 2 ], value, 'throw' );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not broadcast compatible with the second argument (accessors)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( toAccessorArray( [ 1, 2, 3, 4 ] ), toAccessorArray( [ 1, 2 ] ), toAccessorArray( value ), 'throw' );
		};
	}
});

tape( 'the function replaces elements in an array (generic)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 3 ];
	actual = put( x, indices, [ 20, 40 ], 'throw' );
	expected = [ 1, 20, 3, 40 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, [ 20, 30, 40, 50 ], 'throw' );
	expected = [ 1, 30, 3, 50 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, [ 20, 30, 40, 50 ], 'throw' );
	expected = [ 50, 40, 30, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ], 'throw' );
	expected = [ 1, 100, 3, 4 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (generic, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 3 ];
	actual = put( x, indices, [ 20 ], 'throw' );
	expected = [ 1, 20, 3, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, [ 20 ], 'throw' );
	expected = [ 1, 20, 3, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, [ 20 ], 'throw' );
	expected = [ 20, 20, 20, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, [ 100 ], 'throw' );
	expected = [ 1, 100, 3, 4 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (typed)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 3 ];
	actual = put( x, indices, [ 20, 40 ], 'throw' );
	expected = new Int32Array( [ 1, 20, 3, 40 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, [ 20, 30, 40, 50 ], 'throw' );
	expected = new Int32Array( [ 1, 30, 3, 50 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, [ 20, 30, 40, 50 ], 'throw' );
	expected = new Int32Array( [ 50, 40, 30, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ], 'throw' );
	expected = new Int32Array( [ 1, 100, 3, 4 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (typed, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 3 ];
	actual = put( x, indices, [ 20 ], 'throw' );
	expected = new Int32Array( [ 1, 20, 3, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, [ 20 ], 'throw' );
	expected = new Int32Array( [ 1, 20, 3, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, [ 20 ], 'throw' );
	expected = new Int32Array( [ 20, 20, 20, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, [ 100 ], 'throw' );
	expected = new Int32Array( [ 1, 100, 3, 4 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (accessors)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = [
		new Complex64( 10.0, 20.0 ),
		new Complex64( 30.0, 40.0 ),
		new Complex64( 50.0, 60.0 ),
		new Complex64( 70.0, 80.0 )
	];
	expected = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 30.0, 40.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 70.0, 80.0 )
	];
	actual = put( x, indices, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected[ i ] ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = [
		new Complex64( 100.0, 200.0 )
	];
	expected = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 100.0, 200.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 100.0, 200.0 )
	];
	actual = put( x, indices, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected[ i ] ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, complex)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new Complex64Array( [ 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0 ] );
	expected = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 30.0, 40.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 70.0, 80.0 )
	];
	actual = put( x, indices, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected[ i ] ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, complex, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new Complex64Array( [ 100.0, 200.0 ] );
	expected = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 100.0, 200.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 100.0, 200.0 )
	];
	actual = put( x, indices, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected[ i ] ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, boolean)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;
	var v;
	var i;

	x = new BooleanArray( [ true, false, false, true ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new BooleanArray( [ false, true, false, true ] );
	expected = [ true, true, false, true ];
	actual = put( x, indices, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( v, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, boolean, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;
	var v;
	var i;

	x = new BooleanArray( [ true, false, false, true ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = [ true ];
	expected = [ true, true, false, true ];
	actual = put( x, indices, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( v, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the input array unchanged if provided a second argument which is empty', function test( t ) {
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	actual = put( x, [], [ 5, 6, 7, 8 ], 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, [ 1, 2, 3, 4 ], 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 4, 5, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		put( x, indices, [ 200 ], 'throw' );
	}
});

tape( 'when the "mode" is "normalize", the function normalizes negative indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ -1, -2, -3, -4 ];
	actual = put( x, indices, [ 5, 6, 7, 8 ], 'normalize' );
	expected = [ 8, 7, 6, 5 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "normalize", the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 2, 50, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		put( x, indices, [ 100 ], 'normalize' );
	}
});

tape( 'when the "mode" is "clamp", the function clamps out-of-bounds indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ -10, 10, -5, 5 ];
	actual = put( x, indices, [ 100, 200, 300, 400 ], 'clamp' );
	expected = [ 300, 2, 3, 400 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "wrap", the function wraps out-of-bounds indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ -10, 10, -5, 5 ];
	actual = put( x, indices, [ 100, 200, 300, 400 ], 'wrap' );
	expected = [ 1, 400, 200, 300 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
