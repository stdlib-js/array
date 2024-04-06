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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var Float32Array = require( './../../float32' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var Complex64 = require( '@stdlib/complex/float32' );
var Complex64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `with` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64Array.prototype, 'with' ), true, 'has property' );
	t.strictEqual( isFunction( Complex64Array.prototype.with ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 5 );

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
			return arr.with.call( value, 0, new Complex64( 1.0, 1.0 ) );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not an integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 5 );

	values = [
		'5',
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
			return arr.with( value, new Complex64( 1.0, 1.0 ) );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not in bounds', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		-11,
		-12,
		11,
		12
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.with( value, new Complex64( 1.0, 1.0 ) );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not a complex number', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		'5',
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
			return arr.with( 0, value );
		};
	}
});

tape( 'the method does not change the array length', function test( t ) {
	var arr;
	var out;

	arr = new Complex64Array( 10 );
	out = arr.with( 5, new Complex64( 1.0, 1.0 ) );

	t.strictEqual( out.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the method returns a new complex number array with the element at a provided index replaced with a provided value', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	expected = new Float32Array( [ 1.0, 1.0, 5.0, 5.0, 3.0, 3.0, 4.0, 4.0 ] );
	out = arr.with( 1, new Complex64( 5.0, 5.0 ) );

	t.strictEqual( out instanceof Complex64Array, true, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );
	t.notEqual( out, arr, 'returns new instance' );
	t.end();
});

tape( 'the method supports negative indices', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 1.0, 1.0 ] );

	out = arr.with( -1, new Complex64( 1.0, 1.0 ) );

	t.strictEqual( out instanceof Complex64Array, true, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );
	t.end();
});
