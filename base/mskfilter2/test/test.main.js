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
var Complex64Array = require( './../../../complex64' );
var BooleanArray = require( './../../../bool' );
var isSameComplex64 = require( '@stdlib/assert/is-same-complex64' );
var isArray = require( '@stdlib/assert/is-array' );
var mskfilter2 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskfilter2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function filters array elements', function test( t ) {
	var expected;
	var actual;
	var mask;
	var idx;
	var x;

	x = [ 1, 2, 3, 4 ];
	idx = [ 0, 1, 2, 3 ];

	mask = [ 0, 1, 0, 1 ];
	actual = mskfilter2( x, idx, mask );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 1 ] ), true, 'returns expected value' );

	expected = [ 2, 4 ];
	t.notEqual( actual[ 0 ], x, 'returns expected value' );
	t.deepEqual( actual[ 0 ], expected, 'returns expected value' );

	expected = [ 1, 3 ];
	t.notEqual( actual[ 1 ], idx, 'returns expected value' );
	t.deepEqual( actual[ 1 ], expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	actual = mskfilter2( x, idx, mask );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 1 ] ), true, 'returns expected value' );

	expected = [];
	t.notEqual( actual[ 0 ], x, 'returns expected value' );
	t.deepEqual( actual[ 0 ], expected, 'returns expected value' );

	expected = [];
	t.notEqual( actual[ 1 ], idx, 'returns expected value' );
	t.deepEqual( actual[ 1 ], expected, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	actual = mskfilter2( x, idx, mask );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 1 ] ), true, 'returns expected value' );

	expected = [ 4 ];
	t.notEqual( actual[ 0 ], x, 'returns expected value' );
	t.deepEqual( actual[ 0 ], expected, 'returns expected value' );

	expected = [ 3 ];
	t.notEqual( actual[ 1 ], idx, 'returns expected value' );
	t.deepEqual( actual[ 1 ], expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	actual = mskfilter2( x, idx, mask );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 1 ] ), true, 'returns expected value' );

	expected = [ 1, 2, 3, 4 ];
	t.notEqual( actual[ 0 ], x, 'returns expected value' );
	t.deepEqual( actual[ 0 ], expected, 'returns expected value' );

	expected = [ 0, 1, 2, 3 ];
	t.notEqual( actual[ 1 ], idx, 'returns expected value' );
	t.deepEqual( actual[ 1 ], expected, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (accessors)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var idx;
	var x;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	idx = [ 0, 1, 2, 3 ];
	mask = [ 0, 1, 0, 1 ];
	actual = mskfilter2( x, idx, mask );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 1 ] ), true, 'returns expected value' );

	expected = [ x.get( 1 ), x.get( 3 ) ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( isSameComplex64( actual[ 0 ][ i ], expected[ i ] ), true, 'returns expected value' );
	}
	expected = [ 1, 3 ];
	t.deepEqual( actual[ 1 ], expected, 'returns expected value' );

	x = new BooleanArray( [ true, false, false, true ] );
	idx = [ 0, 1, 2, 3 ];
	mask = [ 0, 1, 0, 1 ];
	actual = mskfilter2( x, idx, mask );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 1 ] ), true, 'returns expected value' );

	expected = [ x.get( 1 ), x.get( 3 ) ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual[ 0 ][ i ], expected[ i ], 'returns expected value' );
	}
	expected = [ 1, 3 ];
	t.deepEqual( actual[ 1 ], expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided empty arrays', function test( t ) {
	t.deepEqual( mskfilter2( [], [], [] ), [ [], [] ], 'returns expected value' );
	t.end();
});
