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
var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var Complex128Array = require( './../../../complex128' );
var toAccessorArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toAccessorArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return toAccessorArray( value );
		};
	}
});

tape( 'if provided an array-like not supporting the accessor protocol, the function returns an array-like object supporting the accessor protocol', function test( t ) {
	var arr1 = [ 1, 2, 3 ];
	var arr2 = toAccessorArray( arr1 );
	t.strictEqual( isAccessorArray( arr2 ), true, 'returns expected value' );
	t.notEqual( arr1, arr2, 'returns new object' );
	t.end();
});

tape( 'if provided an array-like object already supporting the accessor protocol, the function returns the input value', function test( t ) {
	var arr1 = new Complex128Array( 10 );
	var arr2 = toAccessorArray( arr1 );
	t.strictEqual( isAccessorArray( arr2 ), true, 'returns expected value' );
	t.strictEqual( arr1, arr2, 'returns expected value' );
	t.end();
});
