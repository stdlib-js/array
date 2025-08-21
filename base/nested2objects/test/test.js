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
var nested2objects = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nested2objects, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty array if provided an empty input array (index)', function test( t ) {
	var expected;
	var actual;
	var fields;

	fields = [ 'x', 'y' ];

	actual = nested2objects( [], fields );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an empty input array (accessors)', function test( t ) {
	var expected;
	var actual;
	var fields;

	fields = [ 'x', 'y' ];

	actual = nested2objects( toAccessorArray( [] ), fields );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an array of empty arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var fields;

	fields = [ 'x', 'y' ];

	actual = nested2objects( [ [], [] ], fields );
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

	actual = nested2objects( x, fields );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts nested arrays to objects (indexed)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;

	fields = [ 'x', 'y' ];

	x = [ [ 1, 2 ], [ 3, 4 ] ];

	actual = nested2objects( x, fields );
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

	fields = [ 'x', 'y' ];

	x = toAccessorArray( [ toAccessorArray( [ 1, 2 ] ), toAccessorArray( [ 3, 4 ] ) ] ); // eslint-disable-line max-len

	actual = nested2objects( x, toAccessorArray( fields ) );
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
