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
var rekeyViews = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rekeyViews, 'function', 'main export is a function' );
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

	actual = rekeyViews( [], mapping );
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

	actual = rekeyViews( toAccessorArray( [] ), mapping );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function creates object views for each element in an array (indexed)', function test( t ) {
	var expected;
	var mapping;
	var actual;
	var x;
	var i;

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

	actual = rekeyViews( x, mapping );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
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

tape( 'the function creates object views for each element in an array (accessors)', function test( t ) {
	var expected;
	var mapping;
	var actual;
	var x;
	var i;

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

	actual = rekeyViews( toAccessorArray( x ), mapping );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
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

tape( 'the function returns views on the input arrays (indexed)', function test( t ) {
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

	actual = rekeyViews( x, mapping );

	t.strictEqual( actual[ 0 ].a, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].b, 2, 'returns expected value' );

	t.strictEqual( actual[ 1 ].a, 3, 'returns expected value' );
	t.strictEqual( actual[ 1 ].b, 4, 'returns expected value' );

	actual[ 0 ].b = -99;
	actual[ 1 ].a = 99;

	t.strictEqual( actual[ 0 ].a, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].b, -99, 'returns expected value' );

	t.strictEqual( actual[ 1 ].a, 99, 'returns expected value' );
	t.strictEqual( actual[ 1 ].b, 4, 'returns expected value' );

	expected = [
		{
			'x': 1,
			'y': -99,
			'z': 999
		},
		{
			'x': 99,
			'y': 4,
			'foo': 'bar'
		}
	];
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns views on the input arrays (accessors)', function test( t ) {
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

	actual = rekeyViews( toAccessorArray( x ), mapping );

	t.strictEqual( actual[ 0 ].a, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].b, 2, 'returns expected value' );

	t.strictEqual( actual[ 1 ].a, 3, 'returns expected value' );
	t.strictEqual( actual[ 1 ].b, 4, 'returns expected value' );

	actual[ 0 ].b = -99;
	actual[ 1 ].a = 99;

	t.strictEqual( actual[ 0 ].a, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].b, -99, 'returns expected value' );

	t.strictEqual( actual[ 1 ].a, 99, 'returns expected value' );
	t.strictEqual( actual[ 1 ].b, 4, 'returns expected value' );

	expected = [
		{
			'x': 1,
			'y': -99,
			'z': 999
		},
		{
			'x': 99,
			'y': 4,
			'foo': 'bar'
		}
	];
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports outer array mutation (indexed)', function test( t ) {
	var mapping;
	var actual;
	var tmp;
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

	actual = rekeyViews( x, mapping );

	t.strictEqual( actual[ 0 ].a, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].b, 2, 'returns expected value' );

	t.strictEqual( actual[ 1 ].a, 3, 'returns expected value' );
	t.strictEqual( actual[ 1 ].b, 4, 'returns expected value' );

	tmp = x[ 0 ];
	x[ 0 ] = x[ 1 ];
	x[ 1 ] = tmp;

	t.strictEqual( actual[ 0 ].a, 3, 'returns expected value' );
	t.strictEqual( actual[ 0 ].b, 4, 'returns expected value' );

	t.strictEqual( actual[ 1 ].a, 1, 'returns expected value' );
	t.strictEqual( actual[ 1 ].b, 2, 'returns expected value' );

	t.end();
});

tape( 'the function supports outer array mutation (accessors)', function test( t ) {
	var mapping;
	var actual;
	var tmp;
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

	actual = rekeyViews( toAccessorArray( x ), mapping );

	t.strictEqual( actual[ 0 ].a, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ].b, 2, 'returns expected value' );

	t.strictEqual( actual[ 1 ].a, 3, 'returns expected value' );
	t.strictEqual( actual[ 1 ].b, 4, 'returns expected value' );

	tmp = x[ 0 ];
	x[ 0 ] = x[ 1 ];
	x[ 1 ] = tmp;

	t.strictEqual( actual[ 0 ].a, 3, 'returns expected value' );
	t.strictEqual( actual[ 0 ].b, 4, 'returns expected value' );

	t.strictEqual( actual[ 1 ].a, 1, 'returns expected value' );
	t.strictEqual( actual[ 1 ].b, 2, 'returns expected value' );

	t.end();
});

tape( 'the returned views have a `toJSON` method which includes all fields in a specified mapping object', function test( t ) {
	var expected;
	var mapping;
	var actual;
	var x;

	mapping = {
		'x': 'a',
		'y': 'b',
		'z': 'c',
		'w': 'd',
		'v': 'e'
	};

	x = [
		{
			'x': 1,
			'y': 2,
			'z': 3,
			'w': 4,
			'v': 5
		},
		{
			'x': 6,
			'y': 7,
			'z': 8,
			'w': 9,
			'v': 10
		}
	];

	actual = rekeyViews( x, mapping );

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
