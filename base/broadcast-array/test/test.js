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
var broadcastArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof broadcastArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an output shape which has fewer dimensions than input array', function test( t ) {
	var values;
	var x;
	var i;

	x = [ [ [ [ [ [ [ [ [ [ ] ] ] ] ] ] ] ] ] ];

	values = [
		[],
		[ 1 ],
		[ 1, 1 ],
		[ 1, 1, 1 ],
		[ 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided a shape with '+values[ i ].length+' dimension' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			broadcastArray( x, [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], value );
		};
	}
});

tape( 'the function throws an error if provided a desired shape having a dimension whose size is less than the corresponding dimension in the input array', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros2d( [ 10, 10 ] );

	values = [
		[ 10, 10, 1 ],
		[ 10, 10, 2 ],
		[ 10, 10, 9 ],
		[ 10, 1, 10 ],
		[ 10, 2, 10 ],
		[ 10, 9, 10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided shape ('+values[ i ].join( ',' )+')' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			broadcastArray( x, [ 10, 10 ], value );
		};
	}
});

tape( 'the function throws an error if provided a desired shape and an input array shape are broadcast-incompatible', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros2d( [ 10, 10 ] );

	values = [
		[ 10, 20, 10 ],
		[ 10, 10, 100 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided shape ('+values[ i ].join( ',' )+')' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			broadcastArray( x, [ 10, 10 ], value );
		};
	}
});

tape( 'the function returns a broadcasted array which shares the same data as the input array', function test( t ) {
	var x;
	var o;

	x = [ 1, 2, 3 ];
	o = broadcastArray( x, [ 3 ], [ 2, 3 ] );

	t.strictEqual( o.data[ 0 ], x, 'returns expected value' );
	t.end();
});

tape( 'the function broadcasts an input array', function test( t ) {
	var expected;
	var i0;
	var i1;
	var x;
	var o;
	var v;
	var i;
	var j;

	x = [ 1, 2, 3 ];
	o = broadcastArray( x, [ 3 ], [ 2, 3 ] );

	expected = [
		[ 1, 2, 3 ],
		[ 1, 2, 3 ]
	];

	t.strictEqual( o.ref, x, 'returns expected value' );
	t.strictEqual( o.data[ 0 ], x, 'returns expected value' );

	t.deepEqual( o.shape, [ 2, 3 ], 'returns expected value' );
	t.deepEqual( o.strides, [ 0, 1 ], 'returns expected value' );

	i0 = 0;
	for ( i = 0; i < o.shape[ 0 ]; i++ ) {
		i1 = 0;
		for ( j = 0; j < o.shape[ 1 ]; j++ ) {
			v = o.data[ i0 ][ i1 ];
			t.strictEqual( v, expected[ i ][ j ], 'returns expected value ('+i+','+j+')' );
			i1 += o.strides[ 1 ];
		}
		i0 += o.strides[ 0 ];
	}
	t.end();
});

tape( 'the function broadcasts an input array (same shape)', function test( t ) {
	var x;
	var o;

	x = [ 1, 2, 3 ];
	o = broadcastArray( x, [ 3 ], [ 3 ] );

	t.strictEqual( o.ref, x, 'returns expected value' );
	t.strictEqual( o.data, x, 'returns expected value' );

	t.deepEqual( o.shape, [ 3 ], 'returns expected value' );
	t.deepEqual( o.strides, [ 1 ], 'returns expected value' );

	t.deepEqual( o.data, [ 1, 2, 3 ], 'returns expected value' );

	x = [
		[ 1, 2, 3 ],
		[ 1, 2, 3 ]
	];
	o = broadcastArray( x, [ 2, 3 ], [ 2, 3 ] );

	t.strictEqual( o.ref, x, 'returns expected value' );
	t.strictEqual( o.data, x, 'returns expected value' );

	t.deepEqual( o.shape, [ 2, 3 ], 'returns expected value' );
	t.deepEqual( o.strides, [ 1, 1 ], 'returns expected value' );

	t.deepEqual( o.data, [ [ 1, 2, 3 ], [ 1, 2, 3 ] ], 'returns expected value' );

	t.end();
});

tape( 'the function broadcasts an input array (same number of dimensions)', function test( t ) {
	var expected;
	var i0;
	var i1;
	var x;
	var o;
	var v;
	var i;
	var j;

	x = [ [ 1, 2, 3 ] ];
	o = broadcastArray( x, [ 1, 3 ], [ 2, 3 ] );

	expected = [
		[ 1, 2, 3 ],
		[ 1, 2, 3 ]
	];

	t.strictEqual( o.ref, x, 'returns expected value' );
	t.strictEqual( o.data, x, 'returns expected value' );

	t.deepEqual( o.shape, [ 2, 3 ], 'returns expected value' );
	t.deepEqual( o.strides, [ 0, 1 ], 'returns expected value' );

	i0 = 0;
	for ( i = 0; i < o.shape[ 0 ]; i++ ) {
		i1 = 0;
		for ( j = 0; j < o.shape[ 1 ]; j++ ) {
			v = o.data[ i0 ][ i1 ];
			t.strictEqual( v, expected[ i ][ j ], 'returns expected value ('+i+','+j+')' );
			i1 += o.strides[ 1 ];
		}
		i0 += o.strides[ 0 ];
	}
	t.end();
});

tape( 'the function broadcasts an input array (singleton dimension)', function test( t ) {
	var expected;
	var i0;
	var i1;
	var i2;
	var x;
	var o;
	var v;
	var i;
	var j;
	var k;

	x = [ [ 1, 2, 3 ] ];
	o = broadcastArray( x, [ 1, 3 ], [ 1, 2, 3 ] );

	expected = [
		[
			[ 1, 2, 3 ],
			[ 1, 2, 3 ]
		]
	];

	t.strictEqual( o.ref, x, 'returns expected value' );
	t.strictEqual( o.data[ 0 ], x, 'returns expected value' );

	t.deepEqual( o.shape, [ 1, 2, 3 ], 'returns expected value' );
	t.deepEqual( o.strides, [ 0, 0, 1 ], 'returns expected value' );

	i0 = 0;
	for ( i = 0; i < o.shape[ 0 ]; i++ ) {
		i1 = 0;
		for ( j = 0; j < o.shape[ 1 ]; j++ ) {
			i2 = 0;
			for ( k = 0; k < o.shape[ 2 ]; k++ ) {
				v = o.data[ i0 ][ i1 ][ i2 ];
				t.strictEqual( v, expected[ i ][ j ][ k ], 'returns expected value ('+i+','+j+','+k+')' );
				i2 += o.strides[ 2 ];
			}
			i1 += o.strides[ 1 ];
		}
		i0 += o.strides[ 0 ];
	}
	t.end();
});

tape( 'the function broadcasts an input array (singleton dimension)', function test( t ) {
	var expected;
	var i0;
	var i1;
	var i2;
	var x;
	var o;
	var v;
	var i;
	var j;
	var k;

	x = [ [ 1 ], [ 2 ], [ 3 ] ];
	o = broadcastArray( x, [ 3, 1 ], [ 1, 3, 3 ] );

	expected = [
		[
			[ 1, 1, 1 ],
			[ 2, 2, 2 ],
			[ 3, 3, 3 ]
		]
	];

	t.strictEqual( o.ref, x, 'returns expected value' );
	t.strictEqual( o.data[ 0 ], x, 'returns expected value' );

	t.deepEqual( o.shape, [ 1, 3, 3 ], 'returns expected value' );
	t.deepEqual( o.strides, [ 0, 1, 0 ], 'returns expected value' );

	i0 = 0;
	for ( i = 0; i < o.shape[ 0 ]; i++ ) {
		i1 = 0;
		for ( j = 0; j < o.shape[ 1 ]; j++ ) {
			i2 = 0;
			for ( k = 0; k < o.shape[ 2 ]; k++ ) {
				v = o.data[ i0 ][ i1 ][ i2 ];
				t.strictEqual( v, expected[ i ][ j ][ k ], 'returns expected value ('+i+','+j+','+k+')' );
				i2 += o.strides[ 2 ];
			}
			i1 += o.strides[ 1 ];
		}
		i0 += o.strides[ 0 ];
	}
	t.end();
});
