/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var cartesianPower = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cartesianPower, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the Cartesian power (n=1)', function test( t ) {
	var expected;
	var actual;

	actual = cartesianPower( [ 1, 2 ], 1 );
	expected = [ [ 1 ], [ 2 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cartesianPower( [ 1 ], 1 );
	expected = [ [ 1 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cartesianPower( [ 1, 2, 3 ], 1 );
	expected = [
		[ 1 ],
		[ 2 ],
		[ 3 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the Cartesian power (n=2)', function test( t ) {
	var expected;
	var actual;

	actual = cartesianPower( [ 1, 2 ], 2 );
	expected = [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cartesianPower( [ 1 ], 2 );
	expected = [ [ 1, 1 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cartesianPower( [ 1, 2, 3 ], 2 );
	expected = [
		[ 1, 1 ],
		[ 1, 2 ],
		[ 1, 3 ],
		[ 2, 1 ],
		[ 2, 2 ],
		[ 2, 3 ],
		[ 3, 1 ],
		[ 3, 2 ],
		[ 3, 3 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the Cartesian power (n=3; indexed)', function test( t ) {
	var expected;
	var actual;

	actual = cartesianPower( [ 1, 2 ], 3 );
	expected = [
		[ 1, 1, 1 ],
		[ 1, 1, 2 ],
		[ 1, 2, 1 ],
		[ 1, 2, 2 ],
		[ 2, 1, 1 ],
		[ 2, 1, 2 ],
		[ 2, 2, 1 ],
		[ 2, 2, 2 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cartesianPower( [ 1 ], 3 );
	expected = [ [ 1, 1, 1 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cartesianPower( [ 1, 2, 3 ], 3 );
	expected = [
		[ 1, 1, 1 ],
		[ 1, 1, 2 ],
		[ 1, 1, 3 ],
		[ 1, 2, 1 ],
		[ 1, 2, 2 ],
		[ 1, 2, 3 ],
		[ 1, 3, 1 ],
		[ 1, 3, 2 ],
		[ 1, 3, 3 ],
		[ 2, 1, 1 ],
		[ 2, 1, 2 ],
		[ 2, 1, 3 ],
		[ 2, 2, 1 ],
		[ 2, 2, 2 ],
		[ 2, 2, 3 ],
		[ 2, 3, 1 ],
		[ 2, 3, 2 ],
		[ 2, 3, 3 ],
		[ 3, 1, 1 ],
		[ 3, 1, 2 ],
		[ 3, 1, 3 ],
		[ 3, 2, 1 ],
		[ 3, 2, 2 ],
		[ 3, 2, 3 ],
		[ 3, 3, 1 ],
		[ 3, 3, 2 ],
		[ 3, 3, 3 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the Cartesian power (n=3; accessor)', function test( t ) {
	var expected;
	var actual;

	actual = cartesianPower( toAccessorArray( [ 1, 2 ] ), 3 );
	expected = [
		[ 1, 1, 1 ],
		[ 1, 1, 2 ],
		[ 1, 2, 1 ],
		[ 1, 2, 2 ],
		[ 2, 1, 1 ],
		[ 2, 1, 2 ],
		[ 2, 2, 1 ],
		[ 2, 2, 2 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cartesianPower( toAccessorArray( [ 1 ] ), 3 );
	expected = [ [ 1, 1, 1 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cartesianPower( toAccessorArray( [ 1, 2, 3 ] ), 3 );
	expected = [
		[ 1, 1, 1 ],
		[ 1, 1, 2 ],
		[ 1, 1, 3 ],
		[ 1, 2, 1 ],
		[ 1, 2, 2 ],
		[ 1, 2, 3 ],
		[ 1, 3, 1 ],
		[ 1, 3, 2 ],
		[ 1, 3, 3 ],
		[ 2, 1, 1 ],
		[ 2, 1, 2 ],
		[ 2, 1, 3 ],
		[ 2, 2, 1 ],
		[ 2, 2, 2 ],
		[ 2, 2, 3 ],
		[ 2, 3, 1 ],
		[ 2, 3, 2 ],
		[ 2, 3, 3 ],
		[ 3, 1, 1 ],
		[ 3, 1, 2 ],
		[ 3, 1, 3 ],
		[ 3, 2, 1 ],
		[ 3, 2, 2 ],
		[ 3, 2, 3 ],
		[ 3, 3, 1 ],
		[ 3, 3, 2 ],
		[ 3, 3, 3 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an empty array (indexed)', function test( t ) {
	var actual;

	actual = cartesianPower( [], 1 );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = cartesianPower( [], 2 );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = cartesianPower( [], 3 );
	t.deepEqual( actual, [], 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an empty array (accessors)', function test( t ) {
	var actual;

	actual = cartesianPower( toAccessorArray( [] ), 1 );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = cartesianPower( toAccessorArray( [] ), 2 );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = cartesianPower( toAccessorArray( [] ), 3 );
	t.deepEqual( actual, [], 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided a power less than or equal to zero', function test( t ) {
	var actual;

	actual = cartesianPower( [ 1, 2 ], 0 );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = cartesianPower( [ 1, 2 ], -1 );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = cartesianPower( [ 1, 2 ], -2 );
	t.deepEqual( actual, [], 'returns expected value' );

	t.end();
});
