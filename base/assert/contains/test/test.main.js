/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var AccessorArray = require( './../../../../base/accessor' );
var contains = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof contains, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function searches an array-like object', function test( t ) {
	var expected;
	var values;
	var x;
	var i;

	values = [
		0,
		1,
		2,
		3,
		4,
		5
	];
	expected = [
		false,
		true,
		true,
		true,
		false,
		false
	];
	x = [ 1, 2, 3 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( contains( x, values[ i ] ), expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function searches an array-like object (accessors)', function test( t ) {
	var expected;
	var values;
	var x;
	var i;

	values = [
		0,
		1,
		2,
		3,
		4,
		5
	];
	expected = [
		false,
		true,
		true,
		true,
		false,
		false
	];
	x = new AccessorArray( [ 1, 2, 3 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( contains( x, values[ i ] ), expected[ i ], 'returns expected value' );
	}
	t.end();
});
