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
var isSameComplex64 = require( '@stdlib/assert/is-same-complex64' );
var isArray = require( '@stdlib/assert/is-array' );
var mskfilterMap = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskfilterMap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function filters array elements', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];

	mask = [ 0, 1, 0, 1 ];
	actual = mskfilterMap( x, mask, clbk );
	expected = [ 4, 16 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	actual = mskfilterMap( x, mask, clbk );
	expected = [];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	actual = mskfilterMap( x, mask, clbk );
	expected = [ 16 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	actual = mskfilterMap( x, mask, clbk );
	expected = [ 1, 4, 9, 16 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v * v;
	}
});

tape( 'the function filters array elements (accessors)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	mask = [ 0, 1, 0, 1 ];
	actual = mskfilterMap( x, mask, clbk );
	expected = [ x.get( 1 ), x.get( 3 ) ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns different reference' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( isSameComplex64( actual[ i ], expected[ i ] ), true, 'returns expected value' );
	}
	t.end();

	function clbk( v ) {
		return v;
	}
});

tape( 'the function returns an empty array if provided empty arrays', function test( t ) {
	t.deepEqual( mskfilterMap( [], [], clbk ), [], 'returns expected value' );
	t.end();

	function clbk( v ) {
		return v * v;
	}
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var mask;
	var out;
	var ctx;
	var x;

	values = [];
	indices = [];
	arrays = [];

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	mask = [ 1, 1, 1, 1 ];

	ctx = {
		'count': 0
	};
	out = mskfilterMap( x, mask, clbk, ctx );

	expected = [ 1.0, 2.0, 3.0, 4.0];
	t.deepEqual( out, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [ 1.0, 2.0, 3.0, 4.0 ];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ x, x, x, x	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function clbk( value, idx, array ) {
		values.push( value );
		indices.push( idx );
		arrays.push( array );
		ctx.count += 1;
		return value;
	}
});
