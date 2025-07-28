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
var zip = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zip, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty array if provided no input arrays', function test( t ) {
	var expected;
	var actual;

	actual = zip( [] );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided empty input arrays', function test( t ) {
	var expected;
	var actual;

	actual = zip( [ [], [] ] );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips one array to an array of arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2 ];

	actual = zip( [ x ] );
	expected = [
		[ 1 ],
		[ 2 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips one array to an array of arrays (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = toAccessorArray( [ 1, 2 ] );

	actual = zip( [ x ] );
	expected = [
		[ 1 ],
		[ 2 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips two arrays to an array of arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2 ];
	y = [ 3, 4 ];

	actual = zip( [ x, y ] );
	expected = [
		[ 1, 3 ],
		[ 2, 4 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips two arrays to an array of arrays (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2 ];
	y = [ 3, 4 ];

	actual = zip( [ toAccessorArray( x ), y ] );
	expected = [
		[ 1, 3 ],
		[ 2, 4 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = zip( [ x, toAccessorArray( y ) ] );
	expected = [
		[ 1, 3 ],
		[ 2, 4 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = zip( [ toAccessorArray( x ), toAccessorArray( y ) ] );
	expected = [
		[ 1, 3 ],
		[ 2, 4 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips three arrays to an array of arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var z;

	x = [ 1, 2 ];
	y = [ 3, 4 ];
	z = [ 5, 6 ];

	actual = zip( [ x, y, z ] );
	expected = [
		[ 1, 3, 5 ],
		[ 2, 4, 6 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function zips three arrays to an array of arrays (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var z;

	x = toAccessorArray( [ 1, 2 ] );
	y = toAccessorArray( [ 3, 4 ] );
	z = toAccessorArray( [ 5, 6 ] );

	actual = zip( [ x, y, z ] );
	expected = [
		[ 1, 3, 5 ],
		[ 2, 4, 6 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
