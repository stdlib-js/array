/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var linspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof linspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `start` value is not a numeric value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		undefined,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 10 );
		};
	}
});

tape( 'the function throws an error if the `stop` value is not a numeric value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		undefined,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( 0, value );
		};
	}
});

tape( 'the function throws an error if the `length` value is not a numeric value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		undefined,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( 0, 10, value );
		};
	}
});

tape( 'the function returns a linearly spaced array', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;

	start = 0;
	stop = 10;

	// Default behavior:
	actual = linspace( start, stop );
	t.strictEqual( actual.length, 100 );
	t.strictEqual( actual[0], start );
	t.strictEqual( actual[actual.length-1], 10 );

	// Specify the length:
	actual = linspace( start, stop, 10 );
	t.strictEqual( actual.length, 10 );
	t.strictEqual( actual[0], start );
	t.strictEqual( actual[actual.length-1], 10 );

	// Verify correct values:
	actual = linspace( start, stop, 11 );
	expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

	t.deepEqual( actual, expected );

	// Decrement:
	actual = linspace( stop, start, 11 );
	expected = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'if the length is set to `0`, the function returns an empty array', function test( t ) {
	t.deepEqual( linspace(0, 10, 0), [] );
	t.end();
});
