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
var ones3d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ones3d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a filled nested array', function test( t ) {
	var expected;
	var actual;

	expected = [
		[
			[ 1.0, 1.0, 1.0 ]
		]
	];
	actual = ones3d( [ 1, 1, 3 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1.0 ],
			[ 1.0 ],
			[ 1.0 ]
		],
		[
			[ 1.0 ],
			[ 1.0 ],
			[ 1.0 ]
		]
	];
	actual = ones3d( [ 2, 3, 1 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1.0, 1.0 ],
			[ 1.0, 1.0 ],
			[ 1.0, 1.0 ]
		],
		[
			[ 1.0, 1.0 ],
			[ 1.0, 1.0 ],
			[ 1.0, 1.0 ]
		]
	];
	actual = ones3d( [ 2, 3, 2 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty outer array if provided a shape having a first element equal to zero', function test( t ) {
	var expected;
	var actual;

	expected = [];

	actual = ones3d( [ 0, 1, 1 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = ones3d( [ 0, 0, 0 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = ones3d( [ 0, 100, 100 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty inner arrays if provided a shape having a second element equal to zero', function test( t ) {
	var expected;
	var actual;

	expected = [ [] ];
	actual = ones3d( [ 1, 0, 1 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [], [] ];
	actual = ones3d( [ 2, 0, 2 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [], [], [] ];
	actual = ones3d( [ 3, 0, 3 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty inner arrays if provided a shape having a third element equal to zero', function test( t ) {
	var expected;
	var actual;

	expected = [ [ [] ] ];
	actual = ones3d( [ 1, 1, 0 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ [], [] ] ];
	actual = ones3d( [ 1, 2, 0 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ [], [], [] ] ];
	actual = ones3d( [ 1, 3, 0 ] );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
