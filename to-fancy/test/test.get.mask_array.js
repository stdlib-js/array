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
var Uint8Array = require( './../../uint8' );
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

tape( 'the function returns an array-like object supporting mask array indexing (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = [ 1, 2, 3, 4 ];
	actual = y[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = array2fancy.idx( new Uint8Array( [ 1, 1, 1, 1 ] ) );
	expected = [];
	actual = y[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = [ 1, 2 ];
	actual = y[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = [ 2, 3 ];
	actual = y[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = [ 1, 3 ];
	actual = y[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting mask array indexing (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = y[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = array2fancy.idx( new Uint8Array( [ 1, 1, 1, 1 ] ) );
	expected = new Int32Array( [] );
	actual = y[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Int32Array( [ 1, 2 ] );
	actual = y[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Int32Array( [ 2, 3 ] );
	actual = y[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Int32Array( [ 1, 3 ] );
	actual = y[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting mask array indexing and returning arrays which can themselves support mask arrays (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;
	var y;
	var z;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = [ 1, 2, 3, 4 ];
	actual = y[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = [ 1, 3 ];
	actual = z[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.notEqual( actual, z, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	idx = array2fancy.idx( new Uint8Array( [ 1, 0 ] ) );
	expected = [ 3 ];
	actual = z[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.notEqual( actual, z, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting mask array indexing and returning arrays which can themselves support mask arrays (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;
	var y;
	var z;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = y[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Int32Array( [ 1, 3 ] );
	actual = z[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.notEqual( actual, z, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	z = actual;

	idx = array2fancy.idx( new Uint8Array( [ 1, 0 ] ) );
	expected = new Int32Array( [ 3 ] );
	actual = z[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.notEqual( actual, z, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object which throws an error if provided a mask array index having an incompatible number of elements (generic)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	values = [
		array2fancy.idx( new Uint8Array( [ 0, 1 ] ) ),
		array2fancy.idx( new Uint8Array( [ 0, 0, 0 ] ) ),
		array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1, 0 ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an array-like object which throws an error if provided a mask array index having an incompatible number of elements (typed)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		array2fancy.idx( new Uint8Array( [ 0, 1 ] ) ),
		array2fancy.idx( new Uint8Array( [ 0, 0, 0 ] ) ),
		array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1, 0 ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an array-like object which throws an error when unable to resolve an index array (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': false
	});
	expected = [ 1, 2, 3, 4 ];
	actual = y[ idx ];

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.throws( badValue( idx ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an array-like object which throws an error when unable to resolve an index array (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': false
	});
	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	actual = y[ idx ];

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.throws( badValue( idx ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an array-like object which supports persisted index arrays (generic)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});
	expected = [ 1, 2, 3, 4 ];

	actual = y[ idx ];
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = y[ idx ];
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	array2fancy.idx.free( idx );

	t.end();
});

tape( 'the function returns an array-like object which supports persisted index arrays (typed)', opts, function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});
	expected = new Int32Array( [ 1, 2, 3, 4 ] );

	actual = y[ idx ];
	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = y[ idx ];
	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.notEqual( actual, x, 'different reference' );
	t.notEqual( actual, y, 'different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	array2fancy.idx.free( idx );

	t.end();
});
