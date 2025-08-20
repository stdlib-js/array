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
var zip2objects = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zip2objects, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty array if provided no input arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var labels;

	labels = [];

	actual = zip2objects( [], labels );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided no input arrays (accessors)', function test( t ) {
	var expected;
	var actual;
	var labels;

	labels = [];

	actual = zip2objects( toAccessorArray( [] ), labels );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided empty input arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var labels;

	labels = [ 'x', 'y' ];

	actual = zip2objects( [ [], [] ], labels );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided empty input arrays (accessors)', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;

	labels = [ 'x', 'y' ];

	x = toAccessorArray( [ toAccessorArray( [] ), toAccessorArray( [] ) ] );

	actual = zip2objects( x, labels );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips one array to an array of objects (indexed)', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;

	labels = [ 'x' ];

	x = [ 1, 2 ];

	actual = zip2objects( [ x ], labels );
	expected = [
		{
			'x': 1
		},
		{
			'x': 2
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips one array to an array of objects (accessors)', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;

	labels = [ 'x' ];

	x = toAccessorArray( [ 1, 2 ] );

	actual = zip2objects( [ x ], labels );
	expected = [
		{
			'x': 1
		},
		{
			'x': 2
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips two arrays to an array of objects (indexed)', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;
	var y;

	labels = [ 'x', 'y' ];

	x = [ 1, 2 ];
	y = [ 3, 4 ];

	actual = zip2objects( [ x, y ], labels );
	expected = [
		{
			'x': 1,
			'y': 3
		},
		{
			'x': 2,
			'y': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips two arrays to an array of objects (accessors)', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;
	var y;

	labels = [ 'x', 'y' ];

	x = [ 1, 2 ];
	y = [ 3, 4 ];

	actual = zip2objects( [ toAccessorArray( x ), y ], labels );
	expected = [
		{
			'x': 1,
			'y': 3
		},
		{
			'x': 2,
			'y': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = zip2objects( [ x, toAccessorArray( y ) ], labels );
	expected = [
		{
			'x': 1,
			'y': 3
		},
		{
			'x': 2,
			'y': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = zip2objects( [ toAccessorArray( x ), toAccessorArray( y ) ], toAccessorArray( labels ) ); // eslint-disable-line max-len
	expected = [
		{
			'x': 1,
			'y': 3
		},
		{
			'x': 2,
			'y': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips three arrays to an array of objects (indexed)', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;
	var y;
	var z;

	labels = [ 'x', 'y', 'z' ];

	x = [ 1, 2 ];
	y = [ 3, 4 ];
	z = [ 5, 6 ];

	actual = zip2objects( [ x, y, z ], labels );
	expected = [
		{
			'x': 1,
			'y': 3,
			'z': 5
		},
		{
			'x': 2,
			'y': 4,
			'z': 6
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips three arrays to an array of objects (accessors)', function test( t ) {
	var expected;
	var actual;
	var labels;
	var x;
	var y;
	var z;

	labels = toAccessorArray( [ 'x', 'y', 'z' ] );

	x = toAccessorArray( [ 1, 2 ] );
	y = toAccessorArray( [ 3, 4 ] );
	z = toAccessorArray( [ 5, 6 ] );

	actual = zip2objects( [ x, y, z ], labels );
	expected = [
		{
			'x': 1,
			'y': 3,
			'z': 5
		},
		{
			'x': 2,
			'y': 4,
			'z': 6
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
