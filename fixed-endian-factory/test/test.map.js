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
var identity = require( '@stdlib/utils/identity-function' );
var factory = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var ctor = factory( 'float64' );
	t.strictEqual( isFunction( ctor ), true, 'returns expected value' );
	t.end();
});

tape( 'attached to the prototype of the returned function is a `map` method', function test( t ) {
	var ctor = factory( 'float64' );
	t.strictEqual( hasOwnProp( ctor.prototype, 'map' ), true, 'returns expected value' );
	t.strictEqual( isFunction( ctor.prototype.map ), true, 'returns expected value' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a typed array instance', function test( t ) {
	var values;
	var ctor;
	var arr;
	var i;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

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
			return arr.map.call( value, identity );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var ctor;
	var arr;
	var i;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );

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
			return arr.map( value );
		};
	}
});

tape( 'the method returns an empty array if operating on an empty array', function test( t ) {
	var ctor;
	var arr;
	var out;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian' );
	out = arr.map( identity );

	t.strictEqual( out instanceof ctor, true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );
	t.notEqual( out, arr, 'returns a new instance' );
	t.end();
});

tape( 'the method returns a new typed array containing elements which are the result of a provided callback function', function test( t ) {
	var expected;
	var actual;
	var ctor;
	var arr;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new ctor( 'little-endian', [ 2.0, 4.0, 6.0, 8.0 ] );
	actual = arr.map( scale );

	t.strictEqual( actual instanceof ctor, true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.notEqual( actual, arr, 'returns a new instance' );
	t.end();

	function scale( v ) {
		return v * 2.0;
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var expected;
	var actual;
	var ctor;
	var arr;
	var ctx;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new ctor( 'little-endian', [ -1.0, -2.0, -3.0, -4.0 ] );

	ctx = {
		'count': 0
	};
	actual = arr.map( fcn, ctx );

	t.strictEqual( actual instanceof ctor, true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.strictEqual( ctx.count, 6, 'returns expected value' );
	t.end();

	function fcn( v, i ) {
		this.count += i; // eslint-disable-line no-invalid-this
		return -v;
	}
});
