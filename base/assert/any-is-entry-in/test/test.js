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
var toAccessorArray = require( './../../../../base/to-accessor-array' );
var anyIsEntryIn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof anyIsEntryIn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests whether an input array contains at least one object having a specified property key-value pair (indexed)', function test( t ) {
	var arr = [
		{
			'a': 0
		},
		{
			'b': 1
		},
		{
			'c': 2
		},
		{
			'd': void 0
		}
	];
	t.strictEqual( anyIsEntryIn( arr, 'a', 0 ), true, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'b', 1 ), true, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'c', 2 ), true, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'toString', arr[ 0 ].toString ), true, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'd', 0 ), false, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'd', void 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether an input array contains at least one object having a specified property key-value pair (accessors)', function test( t ) {
	var arr = toAccessorArray([
		{
			'a': 0
		},
		{
			'b': 1
		},
		{
			'c': 2
		},
		{
			'd': void 0
		}
	]);
	t.strictEqual( anyIsEntryIn( arr, 'a', 0 ), true, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'b', 1 ), true, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'c', 2 ), true, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'toString', arr.get( 0 ).toString ), true, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'd', 0 ), false, 'returns expected value' );
	t.strictEqual( anyIsEntryIn( arr, 'd', void 0 ), true, 'returns expected value' );

	t.end();
});
