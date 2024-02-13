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
var instanceOf = require( '@stdlib/assert/instance-of' );
var Uint8Array = require( './../../uint8' );
var Int32Array = require( './../../int32' );
var toAccessorArray = require( './../../base/to-accessor-array' );
var ArrayIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ArrayIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var x;

	x = new ArrayIndex( [ 1, 2, 3 ] );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( [ true, false, true ] );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( toAccessorArray( [ 1, 2, 3 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( new Uint8Array( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( new Int32Array( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	t.end();
});

tape( 'the function does not require the `new` keyword', function test( t ) {
	var idx;
	var x;

	idx = ArrayIndex;

	x = idx( [ 1, 2, 3 ] );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( [ true, false, true ] );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( toAccessorArray( [ 1, 2, 3 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( new Uint8Array( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( new Int32Array( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `name` property', function test( t ) {
	t.strictEqual( ArrayIndex.name, 'ArrayIndex', 'returns expected value' );
	t.end();
});
