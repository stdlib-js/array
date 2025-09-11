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
var zip2object = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zip2object, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function zips two arrays to an object (indexed)', function test( t ) {
	var expected;
	var actual;

	actual = zip2object( [ 1, 2 ], [ 3, 4 ] );
	expected = {
		'1': 3,
		'2': 4
	};
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips two arrays to an object (accessors)', function test( t ) {
	var expected;
	var actual;

	actual = zip2object( toAccessorArray( [ 1, 2 ] ), [ 3, 4 ] );
	expected = {
		'1': 3,
		'2': 4
	};
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = zip2object( [ 1, 2 ], toAccessorArray( [ 3, 4 ] ) );
	expected = {
		'1': 3,
		'2': 4
	};
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = zip2object( toAccessorArray( [ 1, 2 ] ), toAccessorArray( [ 3, 4 ] ) ); // eslint-disable-line max-len
	expected = {
		'1': 3,
		'2': 4
	};
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
