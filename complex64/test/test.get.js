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
var Complex64 = require( '@stdlib/complex/float32' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var Complex64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `get` method for returning an array element', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64Array.prototype, 'get' ), true, 'has property' );
	t.strictEqual( isFunction( Complex64Array.prototype.get ), true, 'has method' );
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.get.call( value, 0 );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is not a nonnegative integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

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
			return arr.get( value );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is not a nonnegative integer (output argument)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

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
			return arr.get( [ 0.0, 0.0 ], value );
		};
	}
});

tape( 'the method throws an error if provided an output argument which is not an array-like object', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		'5',
		5,
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
			return arr.get( value, 0 );
		};
	}
});

tape( 'the method throws an error if provided an output argument which does not contain at least two elements', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		[],
		[ 1.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.get( value, 0 );
		};
	}
});

tape( 'the method returns `undefined` if provided an index which exceeds array dimensions', function test( t ) {
	var arr;
	var v;
	var i;

	arr = new Complex64Array( 10 );
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( arr.length+i );
		t.strictEqual( v, void 0, 'returns expected value for index '+(arr.length+i) );
	}
	t.end();
});

tape( 'the method returns `undefined` if provided an index which exceeds array dimensions (output argument)', function test( t ) {
	var arr;
	var v;
	var i;

	arr = new Complex64Array( 10 );
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( [ 0.0, 0.0 ], arr.length+i );
		t.strictEqual( v, void 0, 'returns expected value for index '+(arr.length+i) );
	}
	t.end();
});

tape( 'the method returns an array element', function test( t ) {
	var arr;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Complex64( i, -i ) );
	}
	arr = new Complex64Array( arr );

	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( real( v ), i, 'returns expected real component for index '+i );
		t.strictEqual( imag( v ), -i, 'returns expected imaginary component for index '+i );
	}
	t.end();
});

tape( 'the method returns an array element (output argument)', function test( t ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Complex64( i, -i ) );
	}
	arr = new Complex64Array( arr );

	out = [ 0.0, 0.0 ];
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( out, i );
		t.strictEqual( v, out, 'returns expected value for index '+i );
		t.strictEqual( v[ 0 ], i, 'returns expected real component for index '+i );
		t.strictEqual( v[ 1 ], -i, 'returns expected imaginary component for index '+i );
	}
	t.end();
});
