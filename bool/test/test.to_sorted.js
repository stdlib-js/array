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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var Uint8Array = require( './../../uint8' );
var BooleanArray = require( './../lib' );


// FUNCTIONS //

/**
* Comparison function.
*
* @private
* @param {boolean} a - first boolean value for comparison
* @param {boolean} b - second boolean value for comparison
* @returns {number} comparison result
*/
function compareFcn( a, b ) {
	if ( a === true ) {
		if ( b === true ) {
			return 0;
		}
		return 1;
	}
	if ( b === false ) {
		return 0;
	}
	return -1;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `toSorted` method', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'toSorted' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.toSorted ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a boolean array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 5 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.toSorted.call( value, compareFcn );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 10 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.toSorted( value );
		};
	}
});

tape( 'the method returns an empty array if operating on an empty boolean array', function test( t ) {
	var arr;
	var out;

	arr = new BooleanArray();
	out = arr.toSorted( compareFcn );

	t.strictEqual( out.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the method returns a new typed array containing elements in sorted order', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = new BooleanArray( [ true, false, false, true, true, false ] );
	expected = new Uint8Array( [ 0, 0, 0, 1, 1, 1 ] );
	out = arr.toSorted( compareFcn );

	t.strictEqual( instanceOf( out, BooleanArray ), true, 'returns expected value' );
	t.notEqual( out, arr, 'returns a new instance' );
	t.strictEqual( out.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method does not change the array length', function test( t ) {
	var arr;
	var out;

	arr = new BooleanArray( [ true, false, false, true, true, false ] );
	out = arr.toSorted( compareFcn );

	t.strictEqual( out.length, arr.length, 'returns expected value' );
	t.end();
});
