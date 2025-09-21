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
var rekey = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rekey, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty array if provided an empty input array (index)', function test( t ) {
	var expected;
	var mapping;
	var actual;

	mapping = {
		'x': 'a',
		'y': 'b'
	};

	actual = rekey( [], mapping );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an empty input array (accessors)', function test( t ) {
	var expected;
	var mapping;
	var actual;

	mapping = {
		'x': 'a',
		'y': 'b'
	};

	actual = rekey( toAccessorArray( [] ), mapping );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies and renames specified keys for each element in an array (indexed)', function test( t ) {
	var expected;
	var mapping;
	var actual;
	var x;

	mapping = {
		'x': 'a',
		'y': 'b'
	};

	x = [
		{
			'x': 1,
			'y': 2,
			'z': 999
		},
		{
			'x': 3,
			'y': 4,
			'foo': 'bar'
		}
	];

	actual = rekey( x, mapping );
	expected = [
		{
			'a': 1,
			'b': 2
		},
		{
			'a': 3,
			'b': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies and renames specified keys for each element in an array (accessors)', function test( t ) {
	var expected;
	var mapping;
	var actual;
	var x;

	mapping = {
		'x': 'a',
		'y': 'b'
	};

	x = [
		{
			'x': 1,
			'y': 2,
			'z': 999
		},
		{
			'x': 3,
			'y': 4,
			'foo': 'bar'
		}
	];

	actual = rekey( toAccessorArray( x ), mapping );
	expected = [
		{
			'a': 1,
			'b': 2
		},
		{
			'a': 3,
			'b': 4
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
