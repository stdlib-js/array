/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var ArrayBuffer = require( './../../buffer' );
var Uint8Array = require( './../../uint8' );
var BooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `set` method for setting one or more array elements', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'set' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.set ), true, 'has method' );
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set.call( value, 0 );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is not a nonnegative integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 10 );

	values = [
		'5',
		-5,
		3.14,
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
			return arr.set( true, value );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is out-of-bounds (non-array)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 10 );

	values = [
		arr.length,
		arr.length + 1,
		arr.length + 2,
		arr.length + 3
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set( true, value );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is out-of-bounds (array-like object)', function test( t ) {
	var values;
	var arr1;
	var arr2;
	var i;

	arr1 = new BooleanArray( 10 );
	arr2 = [];
	for ( i = 0; i < arr1.length; i++ ) {
		arr2.push( true );
	}

	values = [
		1,
		2,
		3,
		4,
		5
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr1.set( arr2, value );
		};
	}
});

tape( 'the method sets an array element (non-array)', function test( t ) {
	var arr;
	var v;
	var i;

	arr = new BooleanArray( 10 );

	v = arr.get( 0 );
	t.strictEqual( v, false, 'returns expected value' );

	// No index argument:
	arr.set( true );

	v = arr.get( 0 );
	t.strictEqual( v, true, 'returns expected value' );

	arr.set( false );

	// Index argument:
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( v, false, 'returns expected value' );

		arr.set( true, i );
		v = arr.get( i );
		t.strictEqual( v, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the method sets an array element (array-like object)', function test( t ) {
	var arr;
	var v;
	var i;

	arr = new BooleanArray( 10 );

	v = arr.get( 0 );
	t.strictEqual( v, false, 'returns expected value' );

	// No index argument:
	arr.set( [ true ] );

	v = arr.get( 0 );
	t.strictEqual( v, true, 'returns expected value' );

	arr.set( [ false ] );

	// Index argument:
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( v, false, 'returns expected value' );

		arr.set( [ true ], i );

		v = arr.get( i );
		t.strictEqual( v, true, 'returns expected value' );
	}

	// Multiple values, no index argument:
	arr.set( [ true, true ] );

	v = arr.get( 0 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( v, true, 'returns expected value' );

	// Multiple values, index argument:
	arr.set( [ true, true ], 2 );

	v = arr.get( 2 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the method sets an array element (typed array; shared buffer)', function test( t ) {
	var byteOffset;
	var arr;
	var src;
	var buf;
	var ab;
	var v;
	var i;

	byteOffset = 112;

	ab = new ArrayBuffer( 240 );
	arr = new BooleanArray( ab, byteOffset, 10 );

	// Overlapping (requires copy), multiple values, no index argument:
	buf = [ true, true ];
	src = new Uint8Array( ab, byteOffset-(1*arr.BYTES_PER_ELEMENT), 2 );
	for ( i = 0; i < buf.length; i++ ) {
		src[ i ] = buf[ i ];
	}
	arr.set( src );

	v = arr.get( 0 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( v, true, 'returns expected value' );

	// Overlapping (requires copy), multiple values, index argument:
	buf = [ true, true ];
	src = new Uint8Array( ab, byteOffset+(1*arr.BYTES_PER_ELEMENT), 2 );
	for ( i = 0; i < buf.length; i++ ) {
		src[ i ] = buf[ i ];
	}
	arr.set( src, 2 );

	v = arr.get( 2 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( v, true, 'returns expected value' );

	// Overlapping (no copy), multiple values, no index argument:
	buf = [ true, true ];
	src = new Uint8Array( ab, byteOffset+(1*arr.BYTES_PER_ELEMENT), 2 );
	for ( i = 0; i < buf.length; i++ ) {
		src[ i ] = buf[ i ];
	}
	arr.set( src );

	v = arr.get( 0 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( v, true, 'returns expected value' );

	// Overlapping (no copy), multiple values, index argument:
	buf = [ true, true ];
	src = new Uint8Array( ab, byteOffset+(3*arr.BYTES_PER_ELEMENT), 2 );
	for ( i = 0; i < buf.length; i++ ) {
		src[ i ] = buf[ i ];
	}
	arr.set( src, 2 );

	v = arr.get( 2 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the method sets an array element (boolean array; shared buffer)', function test( t ) {
	var byteOffset;
	var arr;
	var src;
	var buf;
	var ab;
	var v;
	var i;

	byteOffset = 112;

	ab = new ArrayBuffer( 240 );
	arr = new BooleanArray( ab, byteOffset, 10 );

	// Overlapping (requires copy), multiple values, no index argument:
	buf = [ true, true ];
	src = new BooleanArray( ab, byteOffset-(1*arr.BYTES_PER_ELEMENT), 2 );
	for ( i = 0; i < buf.length; i++ ) {
		src.set( buf[ i ], i );
	}
	arr.set( src );

	v = arr.get( 0 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( v, true, 'returns expected value' );

	// Overlapping (requires copy), multiple values, index argument:
	buf = [ true, true ];
	src = new BooleanArray( ab, byteOffset+(1*arr.BYTES_PER_ELEMENT), 2 );
	for ( i = 0; i < buf.length; i++ ) {
		src.set( buf[ i ], i );
	}
	arr.set( src, 2 );

	v = arr.get( 2 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( v, true, 'returns expected value' );

	// Overlapping (no copy), multiple values, no index argument:
	buf = [ true, true ];
	src = new BooleanArray( ab, byteOffset+(1*arr.BYTES_PER_ELEMENT), 2 );
	for ( i = 0; i < buf.length; i++ ) {
		src.set( buf[ i ], i );
	}
	arr.set( src );

	v = arr.get( 0 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( v, true, 'returns expected value' );

	// Overlapping (no copy), multiple values, index argument:
	buf = [ true, true ];
	src = new BooleanArray( ab, byteOffset+(3*arr.BYTES_PER_ELEMENT), 2 );
	for ( i = 0; i < buf.length; i++ ) {
		src.set( buf[ i ], i );
	}
	arr.set( src, 2 );

	v = arr.get( 2 );
	t.strictEqual( v, true, 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});
