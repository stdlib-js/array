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
var AccessorArray = require( './../../../../base/accessor' );
var isSortedAscending = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSortedAscending, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests whether an array is sorted in ascending order', function test( t ) {
	var actual;
	var x;

	x = [ 1, 2, 3 ];
	actual = isSortedAscending( x );
	t.strictEqual( actual, true, 'returns expected value' );

	x = [ 1, 1, 1 ];
	actual = isSortedAscending( x );
	t.strictEqual( actual, true, 'returns expected value' );

	x = [ 1 ];
	actual = isSortedAscending( x );
	t.strictEqual( actual, true, 'returns expected value' );

	x = [ 3, 2, 1 ];
	actual = isSortedAscending( x );
	t.strictEqual( actual, false, 'returns expected value' );

	x = [];
	actual = isSortedAscending( x );
	t.strictEqual( actual, false, 'returns expected value' );

	x = [ 2, 1, 3 ];
	actual = isSortedAscending( x );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether an array is sorted in ascending order (accessors)', function test( t ) {
	var actual;
	var x;

	x = new AccessorArray( [ 1, 2, 3 ] );
	actual = isSortedAscending( x );
	t.strictEqual( actual, true, 'returns expected value' );

	x = new AccessorArray( [ 1, 1, 1 ] );
	actual = isSortedAscending( x );
	t.strictEqual( actual, true, 'returns expected value' );

	x = new AccessorArray( [ 1 ] );
	actual = isSortedAscending( x );
	t.strictEqual( actual, true, 'returns expected value' );

	x = new AccessorArray( [ 3, 2, 1 ] );
	actual = isSortedAscending( x );
	t.strictEqual( actual, false, 'returns expected value' );

	x = new AccessorArray( [] );
	actual = isSortedAscending( x );
	t.strictEqual( actual, false, 'returns expected value' );

	x = new AccessorArray( [ 2, 1, 3 ] );
	actual = isSortedAscending( x );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});
