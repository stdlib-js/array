/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isPositiveZero = require( '@stdlib/assert/is-positive-zero' ).isPrimitive;
var isNegativeZero = require( '@stdlib/assert/is-negative-zero' ).isPrimitive;
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Float64Array = require( './../../float64' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `copyWithin` method for copying a sequence of array elements within a complex number array', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'copyWithin' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.copyWithin ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array( 5 );

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
			return arr.copyWithin.call( value, 3, 0 );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex number array instance (end)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array( 5 );

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
			return arr.copyWithin.call( value, 3, 0, 5 );
		};
	}
});

tape( 'the method copies a sequence of elements within an array', function test( t ) {
	var arr;
	var buf;

	arr = [
		new Complex128( 0.0, -0.0 ),
		new Complex128( 1.0, -1.0 ),
		new Complex128( 2.0, -2.0 ),
		new Complex128( 3.0, -3.0 ),
		new Complex128( 4.0, -4.0 )
	];
	arr = new Complex128Array( arr );

	arr.copyWithin( 0, 3 );

	buf = new Float64Array( arr.buffer );

	// Overwritten:
	t.strictEqual( buf[ 0 ], 3.0, 'returns expected real for complex number 0' );
	t.strictEqual( buf[ 1 ], -3.0, 'returns expected imag for complex number 0' );
	t.strictEqual( buf[ 2 ], 4.0, 'returns expected real for complex number 1' );
	t.strictEqual( buf[ 3 ], -4.0, 'returns expected imag for complex number 1' );

	// Remain the same:
	t.strictEqual( buf[ 4 ], 2.0, 'returns expected real for complex number 2' );
	t.strictEqual( buf[ 5 ], -2.0, 'returns expected imag for complex number 2' );
	t.strictEqual( buf[ 6 ], 3.0, 'returns expected real for complex number 3' );
	t.strictEqual( buf[ 7 ], -3.0, 'returns expected imag for complex number 3' );
	t.strictEqual( buf[ 8 ], 4.0, 'returns expected real for complex number 4' );
	t.strictEqual( buf[ 9 ], -4.0, 'returns expected imag for complex number 4' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative target)', function test( t ) {
	var arr;
	var buf;

	arr = [
		new Complex128( 0.0, -0.0 ),
		new Complex128( 1.0, -1.0 ),
		new Complex128( 2.0, -2.0 ),
		new Complex128( 3.0, -3.0 ),
		new Complex128( 4.0, -4.0 )
	];
	arr = new Complex128Array( arr );

	arr.copyWithin( -arr.length, 3 );

	buf = new Float64Array( arr.buffer );

	// Overwritten:
	t.strictEqual( buf[ 0 ], 3.0, 'returns expected real for complex number 0' );
	t.strictEqual( buf[ 1 ], -3.0, 'returns expected imag for complex number 0' );
	t.strictEqual( buf[ 2 ], 4.0, 'returns expected real for complex number 1' );
	t.strictEqual( buf[ 3 ], -4.0, 'returns expected imag for complex number 1' );

	// Remain the same:
	t.strictEqual( buf[ 4 ], 2.0, 'returns expected real for complex number 2' );
	t.strictEqual( buf[ 5 ], -2.0, 'returns expected imag for complex number 2' );
	t.strictEqual( buf[ 6 ], 3.0, 'returns expected real for complex number 3' );
	t.strictEqual( buf[ 7 ], -3.0, 'returns expected imag for complex number 3' );
	t.strictEqual( buf[ 8 ], 4.0, 'returns expected real for complex number 4' );
	t.strictEqual( buf[ 9 ], -4.0, 'returns expected imag for complex number 4' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative start)', function test( t ) {
	var arr;
	var buf;

	arr = [
		new Complex128( 0.0, -0.0 ),
		new Complex128( 1.0, -1.0 ),
		new Complex128( 2.0, -2.0 ),
		new Complex128( 3.0, -3.0 ),
		new Complex128( 4.0, -4.0 )
	];
	arr = new Complex128Array( arr );

	arr.copyWithin( 0, -2 );

	buf = new Float64Array( arr.buffer );

	// Overwritten:
	t.strictEqual( buf[ 0 ], 3.0, 'returns expected real for complex number 0' );
	t.strictEqual( buf[ 1 ], -3.0, 'returns expected imag for complex number 0' );
	t.strictEqual( buf[ 2 ], 4.0, 'returns expected real for complex number 1' );
	t.strictEqual( buf[ 3 ], -4.0, 'returns expected imag for complex number 1' );

	// Remain the same:
	t.strictEqual( buf[ 4 ], 2.0, 'returns expected real for complex number 2' );
	t.strictEqual( buf[ 5 ], -2.0, 'returns expected imag for complex number 2' );
	t.strictEqual( buf[ 6 ], 3.0, 'returns expected real for complex number 3' );
	t.strictEqual( buf[ 7 ], -3.0, 'returns expected imag for complex number 3' );
	t.strictEqual( buf[ 8 ], 4.0, 'returns expected real for complex number 4' );
	t.strictEqual( buf[ 9 ], -4.0, 'returns expected imag for complex number 4' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (end=length)', function test( t ) {
	var arr;
	var buf;

	arr = [
		new Complex128( 0.0, -0.0 ),
		new Complex128( 1.0, -1.0 ),
		new Complex128( 2.0, -2.0 ),
		new Complex128( 3.0, -3.0 ),
		new Complex128( 4.0, -4.0 )
	];
	arr = new Complex128Array( arr );

	arr.copyWithin( 0, 3, arr.length );

	buf = new Float64Array( arr.buffer );

	// Overwritten:
	t.strictEqual( buf[ 0 ], 3.0, 'returns expected real for complex number 0' );
	t.strictEqual( buf[ 1 ], -3.0, 'returns expected imag for complex number 0' );
	t.strictEqual( buf[ 2 ], 4.0, 'returns expected real for complex number 1' );
	t.strictEqual( buf[ 3 ], -4.0, 'returns expected imag for complex number 1' );

	// Remain the same:
	t.strictEqual( buf[ 4 ], 2.0, 'returns expected real for complex number 2' );
	t.strictEqual( buf[ 5 ], -2.0, 'returns expected imag for complex number 2' );
	t.strictEqual( buf[ 6 ], 3.0, 'returns expected real for complex number 3' );
	t.strictEqual( buf[ 7 ], -3.0, 'returns expected imag for complex number 3' );
	t.strictEqual( buf[ 8 ], 4.0, 'returns expected real for complex number 4' );
	t.strictEqual( buf[ 9 ], -4.0, 'returns expected imag for complex number 4' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (non-inclusive end)', function test( t ) {
	var arr;
	var buf;

	arr = [
		new Complex128( 0.0, -0.0 ),
		new Complex128( 1.0, -1.0 ),
		new Complex128( 2.0, -2.0 ),
		new Complex128( 3.0, -3.0 ),
		new Complex128( 4.0, -4.0 )
	];
	arr = new Complex128Array( arr );

	arr.copyWithin( 2, 0, 2 );

	buf = new Float64Array( arr.buffer );

	// Remain the same:
	t.strictEqual( isPositiveZero( buf[ 0 ] ), true, 'returns expected real for complex number 0' );
	t.strictEqual( isNegativeZero( buf[ 1 ] ), true, 'returns expected imag for complex number 0' );
	t.strictEqual( buf[ 2 ], 1.0, 'returns expected real for complex number 1' );
	t.strictEqual( buf[ 3 ], -1.0, 'returns expected imag for complex number 1' );

	// Overwritten:
	t.strictEqual( isPositiveZero( buf[ 4 ] ), true, 'returns expected real for complex number 2' );
	t.strictEqual( isNegativeZero( buf[ 5 ] ), true, 'returns expected imag for complex number 2' );
	t.strictEqual( buf[ 6 ], 1.0, 'returns expected real for complex number 3' );
	t.strictEqual( buf[ 7 ], -1.0, 'returns expected imag for complex number 3' );

	// Remain the same:
	t.strictEqual( buf[ 8 ], 4.0, 'returns expected real for complex number 4' );
	t.strictEqual( buf[ 9 ], -4.0, 'returns expected imag for complex number 4' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative end)', function test( t ) {
	var arr;
	var buf;

	arr = [
		new Complex128( 0.0, -0.0 ),
		new Complex128( 1.0, -1.0 ),
		new Complex128( 2.0, -2.0 ),
		new Complex128( 3.0, -3.0 ),
		new Complex128( 4.0, -4.0 )
	];
	arr = new Complex128Array( arr );

	arr.copyWithin( 2, 0, -3 );

	buf = new Float64Array( arr.buffer );

	// Remain the same:
	t.strictEqual( isPositiveZero( buf[ 0 ] ), true, 'returns expected real for complex number 0' );
	t.strictEqual( isNegativeZero( buf[ 1 ] ), true, 'returns expected imag for complex number 0' );
	t.strictEqual( buf[ 2 ], 1.0, 'returns expected real for complex number 1' );
	t.strictEqual( buf[ 3 ], -1.0, 'returns expected imag for complex number 1' );

	// Overwritten:
	t.strictEqual( isPositiveZero( buf[ 4 ] ), true, 'returns expected real for complex number 2' );
	t.strictEqual( isNegativeZero( buf[ 5 ] ), true, 'returns expected imag for complex number 2' );
	t.strictEqual( buf[ 6 ], 1.0, 'returns expected real for complex number 3' );
	t.strictEqual( buf[ 7 ], -1.0, 'returns expected imag for complex number 3' );

	// Remain the same:
	t.strictEqual( buf[ 8 ], 4.0, 'returns expected real for complex number 4' );
	t.strictEqual( buf[ 9 ], -4.0, 'returns expected imag for complex number 4' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (target >= length)', function test( t ) {
	var arr;
	var buf;

	arr = [
		new Complex128( 0.0, -0.0 ),
		new Complex128( 1.0, -1.0 ),
		new Complex128( 2.0, -2.0 ),
		new Complex128( 3.0, -3.0 ),
		new Complex128( 4.0, -4.0 )
	];
	arr = new Complex128Array( arr );

	arr.copyWithin( arr.length, 3 );

	buf = new Float64Array( arr.buffer );

	// Remain the same:
	t.strictEqual( isPositiveZero( buf[ 0 ] ), true, 'returns expected real for complex number 0' );
	t.strictEqual( isNegativeZero( buf[ 1 ] ), true, 'returns expected imag for complex number 0' );
	t.strictEqual( buf[ 2 ], 1.0, 'returns expected real for complex number 1' );
	t.strictEqual( buf[ 3 ], -1.0, 'returns expected imag for complex number 1' );
	t.strictEqual( buf[ 4 ], 2.0, 'returns expected real for complex number 2' );
	t.strictEqual( buf[ 5 ], -2.0, 'returns expected imag for complex number 2' );
	t.strictEqual( buf[ 6 ], 3.0, 'returns expected real for complex number 3' );
	t.strictEqual( buf[ 7 ], -3.0, 'returns expected imag for complex number 3' );
	t.strictEqual( buf[ 8 ], 4.0, 'returns expected real for complex number 4' );
	t.strictEqual( buf[ 9 ], -4.0, 'returns expected imag for complex number 4' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (target > start)', function test( t ) {
	var arr;
	var buf;

	arr = [
		new Complex128( 0.0, -0.0 ),
		new Complex128( 1.0, -1.0 ),
		new Complex128( 2.0, -2.0 ),
		new Complex128( 3.0, -3.0 ),
		new Complex128( 4.0, -4.0 )
	];
	arr = new Complex128Array( arr );

	arr.copyWithin( 2, 0 );

	buf = new Float64Array( arr.buffer );

	// Remain the same:
	t.strictEqual( isPositiveZero( buf[ 0 ] ), true, 'returns expected real for complex number 0' );
	t.strictEqual( isNegativeZero( buf[ 1 ] ), true, 'returns expected imag for complex number 0' );
	t.strictEqual( buf[ 2 ], 1.0, 'returns expected real for complex number 1' );
	t.strictEqual( buf[ 3 ], -1.0, 'returns expected imag for complex number 1' );

	// Overwritten:
	t.strictEqual( isPositiveZero( buf[ 4 ] ), true, 'returns expected real for complex number 2' );
	t.strictEqual( isNegativeZero( buf[ 5 ] ), true, 'returns expected imag for complex number 2' );
	t.strictEqual( buf[ 6 ], 1.0, 'returns expected real for complex number 3' );
	t.strictEqual( buf[ 7 ], -1.0, 'returns expected imag for complex number 3' );
	t.strictEqual( buf[ 8 ], 2.0, 'returns expected real for complex number 4' );
	t.strictEqual( buf[ 9 ], -2.0, 'returns expected imag for complex number 4' );

	t.end();
});
