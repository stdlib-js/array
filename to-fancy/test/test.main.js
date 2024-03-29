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
var hasProxySupport = require( '@stdlib/assert/has-proxy-support' );
var Int32Array = require( './../../int32' );
var propertiesIn = require( '@stdlib/utils/properties-in' );
var array2fancy = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasProxySupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2fancy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an array-like value', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			array2fancy( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an array-like value (options)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			array2fancy( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
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
			array2fancy( [ 1, 2, 3 ], value );
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
			array2fancy( [ 1, 2, 3 ], {
				'strict': value
			});
		};
	}
});

tape( 'the function returns an array-like object which satisfies the same instance check (generic)', function test( t ) {
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	t.notEqual( y, x, 'different reference' );
	t.strictEqual( y instanceof Array, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object which satisfies the same instance check (typed)', function test( t ) {
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	t.notEqual( y, x, 'different reference' );
	t.strictEqual( y instanceof Int32Array, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object having the same properties, both own and inherited, as the input array (generic)', function test( t ) {
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	t.deepEqual( propertiesIn( y ), propertiesIn( x ), 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object having the same properties, both own and inherited, as the input array (typed)', function test( t ) {
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	t.deepEqual( propertiesIn( y ), propertiesIn( x ), 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object supporting bracket syntax for element retrieval (generic)', function test( t ) {
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( y[ i ], x[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting bracket syntax for element retrieval (typed)', function test( t ) {
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( y[ i ], x[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting the calling of input array methods (generic)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 2, 4, 6, 8 ];
	actual = y.map( fcn );

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function fcn( v ) {
		return v * 2;
	}
});

tape( 'the function returns an array-like object supporting the calling of input array methods (typed)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 2, 4, 6, 8 ] );
	actual = y.map( fcn );

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function fcn( v ) {
		return v * 2;
	}
});

tape( 'the function returns an array-like object supporting the return of array instances supporting slice expressions (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var z;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 2, 3, 4 ];
	actual = y.slice();

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.strictEqual( x[ ':' ], void 0, 'returns expected value' );

	expected = [ 1, 2, 3, 4 ];
	actual = y[ ':' ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	expected = [ 1, 2, 3, 4 ];
	actual = z[ ':' ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting the return of array instances supporting slice expressions (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var z;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = y.slice();

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.strictEqual( x[ ':' ], void 0, 'returns expected value' );

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = y[ ':' ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = z[ ':' ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting constructor access (generic)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [];
	actual = new y.constructor();
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = new y.constructor( 1 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 1, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = new y.constructor( 1, 2 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3 ];
	actual = new y.constructor( 1, 2, 3 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4 ];
	actual = new y.constructor( 1, 2, 3, 4 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5 ];
	actual = new y.constructor( 1, 2, 3, 4, 5 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6 ];
	actual = new y.constructor( 1, 2, 3, 4, 5, 6 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7 ];
	actual = new y.constructor( 1, 2, 3, 4, 5, 6, 7 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	actual = new y.constructor( 1, 2, 3, 4, 5, 6, 7, 8 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	actual = new y.constructor( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	actual = new y.constructor( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
	actual = new y.constructor( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
