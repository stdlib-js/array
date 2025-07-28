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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var nested2views = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nested2views, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty array if provided an empty input array (indexed)', function test( t ) {
	var expected;
	var actual;
	var fields;

	fields = [ 'x', 'y' ];

	actual = nested2views( [], fields );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an empty input array (accessors)', function test( t ) {
	var expected;
	var actual;
	var fields;

	fields = [ 'x', 'y' ];

	actual = nested2views( toAccessorArray( [] ), fields );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an array of empty arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var fields;

	fields = [ 'x', 'y' ];

	actual = nested2views( [ [], [] ], fields );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an array of empty arrays (accessors)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;

	fields = [ 'x', 'y' ];

	x = [ toAccessorArray( [] ), toAccessorArray( [] ) ];

	actual = nested2views( x, fields );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts nested arrays to objects (indexed)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;
	var i;

	fields = [ 'x', 'y' ];

	x = [ [ 1, 2 ], [ 3, 4 ] ];

	actual = nested2views( x, fields );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
	expected = [
		{
			'x': 1,
			'y': 2
		},
		{
			'x': 3,
			'y': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts nested arrays to objects (accessors)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;
	var i;

	fields = [ 'x', 'y' ];

	x = [ [ 1, 2 ], [ 3, 4 ] ];

	actual = nested2views( toAccessorArray( x ), toAccessorArray( fields ) );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
	expected = [
		{
			'x': 1,
			'y': 2
		},
		{
			'x': 3,
			'y': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns views on the input arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;

	fields = [ 'x', 'y' ];

	x = [ [ 1, 2 ], [ 3, 4 ] ];

	actual = nested2views( x, fields );

	t.strictEqual( actual[ 0 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 2, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 3, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 4, 'returns expected value' );

	actual[ 0 ].y = -99;
	actual[ 1 ].x = 99;

	t.strictEqual( actual[ 0 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, -99, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 99, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 4, 'returns expected value' );

	expected = [ [ 1, -99 ], [ 99, 4 ] ];
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns views on the input arrays (accessors)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x1;
	var x2;
	var xc;
	var x;

	fields = [ 'x', 'y' ];

	x1 = [ 1, 2 ];
	x2 = [ 3, 4 ];
	x = [ x1, x2 ];

	xc = [ toAccessorArray( x1 ), toAccessorArray( x2 ) ];

	actual = nested2views( toAccessorArray( xc ), toAccessorArray( fields ) );

	t.strictEqual( actual[ 0 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 2, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 3, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 4, 'returns expected value' );

	actual[ 0 ].y = -99;
	actual[ 1 ].x = 99;

	t.strictEqual( actual[ 0 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, -99, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 99, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 4, 'returns expected value' );

	expected = [ [ 1, -99 ], [ 99, 4 ] ];
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports outer array mutation (indexed)', function test( t ) {
	var actual;
	var fields;
	var tmp;
	var x;

	fields = [ 'x', 'y' ];

	x = [ [ 1, 2 ], [ 3, 4 ] ];

	actual = nested2views( x, fields );

	t.strictEqual( actual[ 0 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 2, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 3, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 4, 'returns expected value' );

	tmp = x[ 0 ];
	x[ 0 ] = x[ 1 ];
	x[ 1 ] = tmp;

	t.strictEqual( actual[ 0 ].x, 3, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 4, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 2, 'returns expected value' );

	t.end();
});

tape( 'the function supports outer array mutation (accessors)', function test( t ) {
	var actual;
	var fields;
	var tmp;
	var x;

	fields = [ 'x', 'y' ];

	x = [ [ 1, 2 ], [ 3, 4 ] ];

	actual = nested2views( toAccessorArray( x ), fields );

	t.strictEqual( actual[ 0 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 2, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 3, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 4, 'returns expected value' );

	tmp = x[ 0 ];
	x[ 0 ] = x[ 1 ];
	x[ 1 ] = tmp;

	t.strictEqual( actual[ 0 ].x, 3, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 4, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 2, 'returns expected value' );

	t.end();
});

tape( 'the returned views have a toJSON method which includes all fields', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;

	fields = [ 'a', 'b', 'c', 'd', 'e' ];

	x = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ];

	actual = nested2views( x, fields );

	expected = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};
	t.deepEqual( actual[ 0 ].toJSON(), expected, 'returns expected value for first element' );

	expected = {
		'a': 6,
		'b': 7,
		'c': 8,
		'd': 9,
		'e': 10
	};
	t.deepEqual( actual[ 1 ].toJSON(), expected, 'returns expected value for second element' );

	t.end();
});
