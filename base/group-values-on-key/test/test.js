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
var groupValuesOnKey = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof groupValuesOnKey, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function groups array elements', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		{
			'x': 1,
			'y': 2
		},
		{
			'x': 1,
			'y': 3
		},
		{
			'x': 1,
			'y': 2
		}
	];

	expected = {
		'2': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 1,
				'y': 2
			}
		],
		'3': [
			{
				'x': 1,
				'y': 3
			}
		]
	};
	out = groupValuesOnKey( x, 'y' );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function groups array elements (array-like objects)', function test( t ) {
	var expected;
	var out;
	var x;

	x = {
		'length': 3,
		'0': {
			'x': 1,
			'y': 2
		},
		'1': {
			'x': 1,
			'y': 3
		},
		'2': {
			'x': 1,
			'y': 2
		}
	};

	expected = {
		'2': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 1,
				'y': 2
			}
		],
		'3': [
			{
				'x': 1,
				'y': 3
			}
		]
	};
	out = groupValuesOnKey( x, 'y' );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function groups array elements (accessor arrays)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		{
			'x': 1,
			'y': 2
		},
		{
			'x': 1,
			'y': 3
		},
		{
			'x': 1,
			'y': 2
		}
	];

	expected = {
		'2': [
			{
				'x': 1,
				'y': 2
			},
			{
				'x': 1,
				'y': 2
			}
		],
		'3': [
			{
				'x': 1,
				'y': 3
			}
		]
	};
	out = groupValuesOnKey( toAccessorArray( x ), 'y' );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function groups array elements (string serialization)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		{
			'x': 1,
			'y': {}
		},
		{
			'x': 1,
			'y': {}
		},
		{
			'x': 1,
			'y': {}
		}
	];

	expected = {
		'[object Object]': [
			{
				'x': 1,
				'y': {}
			},
			{
				'x': 1,
				'y': {}
			},
			{
				'x': 1,
				'y': {}
			}
		]
	};
	out = groupValuesOnKey( x, 'y' );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function returns an empty object if provided an empty array', function test( t ) {
	var expected;
	var actual;

	expected = {};
	actual = groupValuesOnKey( [], 'y' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
