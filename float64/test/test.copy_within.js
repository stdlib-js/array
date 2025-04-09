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
var hasProp = require( '@stdlib/assert/has-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var Float64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Float64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'a typed array instance has a `copyWithin` method for copying a sequence of elements within a typed array', function test( t ) {
	var arr = new Float64Array( 2 );
	t.strictEqual( hasProp( arr, 'copyWithin' ), true, 'has property' );
	t.strictEqual( isFunction( arr.copyWithin ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a typed array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Float64Array( 2 );

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

tape( 'the method throws an error if invoked with a `this` context which is not a typed array instance (end)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Float64Array( 2 );

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

tape( 'the method copies a sequence of elements within a typed array', function test( t ) {
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	p = new Float64Array( arr );
	p.copyWithin( 0, 3 );

	// Overwritten:
	t.strictEqual( p[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 4.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a typed array (negative target)', function test( t ) {
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	p = new Float64Array( arr );
	p.copyWithin( -p.length, 3 );

	// Overwritten:
	t.strictEqual( p[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 4.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a typed array (negative start)', function test( t ) {
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	p = new Float64Array( arr );
	p.copyWithin( 0, -2 );

	// Overwritten:
	t.strictEqual( p[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 4.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a typed array (end=length)', function test( t ) {
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	p = new Float64Array( arr );
	p.copyWithin( 0, 3, p.length );

	// Overwritten:
	t.strictEqual( p[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 4.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a typed array (non-inclusive end)', function test( t ) {
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	p = new Float64Array( arr );
	p.copyWithin( 2, 0, 2 );

	// Remain the same:
	t.strictEqual( p[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 1.0, 'returns expected value' );

	// Overwritten:
	t.strictEqual( p[ 2 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 1.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a typed array (negative end)', function test( t ) {
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	p = new Float64Array( arr );
	p.copyWithin( 2, 0, -3 );

	// Remain the same:
	t.strictEqual( p[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 1.0, 'returns expected value' );

	// Overwritten:
	t.strictEqual( p[ 2 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 1.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a typed array (target >= length)', function test( t ) {
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	p = new Float64Array( arr );
	p.copyWithin( p.length, 3 );

	// Remain the same:
	t.strictEqual( p[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 1.0, 'returns expected value' );
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a typed array (target > start)', function test( t ) {
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	p = new Float64Array( arr );
	p.copyWithin( 2, 0 );

	// Remain the same:
	t.strictEqual( p[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 1.0, 'returns expected value' );

	// Overwritten:
	t.strictEqual( p[ 2 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 1.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 2.0, 'returns expected value' );

	t.end();
});
