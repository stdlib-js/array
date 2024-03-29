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
var proxyquire = require( 'proxyquire' );
var Int32Array = require( './../../int32' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'strict': value
			});
		};
	}
});

tape( 'the function returns a function which returns an array-like object', function test( t ) {
	var array2fancy;
	var x;
	var y;

	array2fancy = factory();

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	t.strictEqual( y instanceof Array, true, 'returns expected value' );
	t.notEqual( y, x, 'different reference' );
	t.deepEqual( y, x, 'returns expected value' );

	t.end();
});

tape( 'if an environment does not support Proxy objects, the function returns a function which returns the input array (generic)', function test( t ) {
	var array2fancy;
	var factory;
	var x;
	var y;

	factory = proxyquire( './../lib/factory.js', {
		'./has_proxy_support.js': false
	});
	array2fancy = factory();

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	t.strictEqual( y, x, 'returns expected value' );
	t.end();
});

tape( 'if an environment does not support Proxy objects, the function returns a function which returns the input array (typed)', function test( t ) {
	var array2fancy;
	var factory;
	var x;
	var y;

	factory = proxyquire( './../lib/factory.js', {
		'./has_proxy_support.js': false
	});
	array2fancy = factory();

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	t.strictEqual( y, x, 'returns expected value' );
	t.end();
});
