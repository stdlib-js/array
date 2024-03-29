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
var Complex128Array = require( './../../../complex128' );
var Int32Array = require( './../../../int32' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var countIf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof countIf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function counts the number of truthy values based on a testing function (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 0, 1, 0, 1, 2 ];
	expected = 3;
	actual = countIf( x, function predicate( v ) {
		return ( v % 2 === 0 );
	});

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of truthy values based on a testing function (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray([ 0, 1, 0, 1, 2 ]);
	expected = 2;
	actual = countIf( x, function predicate( v ) {
		return v === 1;
	});

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of truthy values based on a testing function (real typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array([ 0, 1, 0, 1, 2 ]);
	expected = 1;
	actual = countIf( x, function predicate( v ) {
		return v > 1;
	});

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of truthy values based on a testing function (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array([ 0.0, 0.0, 1.0, 0.0, 3.0, 4.0, 0.0, 5.0 ]);
	expected = 3;
	actual = countIf( x, function predicate( v ) {
		return v === 0;
	});

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns zero if provided an array of length `0`', function test( t ) {
	var expected;
	var actual;
	var x;

	expected = 0;

	x = [];
	actual = countIf( x, function predicate( v ) {
		return v === 1;
	});
	t.strictEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray([]);
	actual = countIf( x, function predicate( v ) {
		return v === 1;
	});
	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Int32Array([]);
	actual = countIf( x, function predicate( v ) {
		return v === 1;
	});
	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array([]);
	actual = countIf( x, function predicate( v ) {
		return v === 1;
	});
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns zero if no truthy values are found', function test( t ) {
	var expected;
	var actual;
	var x;

	expected = 0;

	x = [ 0, 0, 0, 0 ];
	actual = countIf( x, function predicate( v ) {
		return v === 1;
	});
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the length of the array if all values are truthy', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 1, 1, 1 ];
	expected = x.length;

	actual = countIf( x, function predicate( v ) {
		return v === 1;
	});
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a custom execution context', function test( t ) {
	var expected;
	var context;
	var actual;
	var x;

	context = {
		'threshold': 2
	};
	x = [ 1, 2, 3, 4, 5 ];
	expected = 3; // Only values greater than 2
	actual = countIf( x, function predicate( v ) {
		return v > this.threshold; // eslint-disable-line no-invalid-this
	}, context );

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function counts the number of objects with a custom predicate function using `thisArg`', function test( t ) {
	var expected;
	var thisArg;
	var actual;
	var x;

	thisArg = {
		'target': 20
	};
	x = [
		{
			'name': 'John',
			'value': 10
		},
		{
			'name': 'Jane',
			'value': 20
		},
		{
			'name': 'Doe',
			'value': 30
		}
	];

	// Count the number of objects where the value property matches the target
	expected = 1; // One object have its value property equal to 20
	actual = countIf( x, function predicate( v ) {
		return v.value === this.target; // eslint-disable-line no-invalid-this
	}, thisArg );

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns zero if provided an array with no truthy values (false, null, undefined are treated as non truthy values)', function test( t ) {
	var expected;
	var actual;
	var x;

	expected = 0;
	x = [ false, 0, '', null, undefined ];
	actual = countIf( x, function predicate( v ) {
		return v; // Returns truthy values
	});
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
