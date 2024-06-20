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
var Complex64Array = require( './../../../complex64' );
var Int32Array = require( './../../../int32' );
var BooleanArray = require( './../../../bool' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var mskput = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskput, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function replaces elements in an array (generic)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];
	mask = [ 1, 0, 1, 0 ];
	actual = mskput( x, mask, [ 20, 40 ], 'throw' );
	expected = [ 1, 20, 3, 40 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	mask = [ 0, 0, 0, 0 ];
	actual = mskput( x, mask, [ 20, 30, 40, 50 ], 'throw' );
	expected = [ 20, 30, 40, 50 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	mask = [ 1, 1, 1, 1 ];
	actual = mskput( x, mask, [ 20, 30, 40, 50 ], 'throw' );
	expected = [ 1, 2, 3, 4 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (generic, broadcasting)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];
	mask = [ 1, 0, 1, 0 ];
	actual = mskput( x, mask, [ 20 ], 'broadcast' );
	expected = [ 1, 20, 3, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	mask = [ 0, 0, 0, 0 ];
	actual = mskput( x, mask, [ 20 ], 'broadcast' );
	expected = [ 20, 20, 20, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	mask = [ 1, 1, 1, 1 ];
	actual = mskput( x, mask, [ 20 ], 'broadcast' );
	expected = [ 1, 2, 3, 4 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	mask = [ 0, 0, 0, 0 ];
	actual = mskput( x, mask, [ 100, 200 ], 'repeat' );
	expected = [ 100, 200, 100, 200 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (typed)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	mask = [ 1, 0, 1, 0 ];
	actual = mskput( x, mask, new Int32Array( [ 20, 40 ] ), 'throw' );
	expected = new Int32Array( [ 1, 20, 3, 40 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	mask = [ 0, 0, 0, 0 ];
	actual = mskput( x, mask, new Int32Array( [ 20, 30, 40, 50 ] ), 'throw' );
	expected = new Int32Array( [ 20, 30, 40, 50 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	mask = [ 1, 1, 1, 1 ];
	actual = mskput( x, mask, new Int32Array( [ 20, 30, 40, 50 ] ), 'throw' );
	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (typed, broadcasting)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	mask = [ 1, 0, 1, 0 ];
	actual = mskput( x, mask, [ 20 ], 'broadcast' );
	expected = new Int32Array( [ 1, 20, 3, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	mask = [ 0, 0, 0, 0 ];
	actual = mskput( x, mask, [ 20 ], 'broadcast' );
	expected = new Int32Array( [ 20, 20, 20, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	mask = [ 1, 1, 1, 1 ];
	actual = mskput( x, mask, [ 20 ], 'broadcast' );
	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	mask = [ 0, 0, 0, 0 ];
	actual = mskput( x, mask, [ 100, 200 ], 'repeat' );
	expected = new Int32Array( [ 100, 200, 100, 200 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (accessors)', function test( t ) {
	var expected;
	var actual;
	var values;
	var mask;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	mask = toAccessorArray( [ 1, 0, 1, 0 ] );
	values = [
		new Complex64( 30.0, 40.0 ),
		new Complex64( 70.0, 80.0 )
	];
	expected = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 30.0, 40.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 70.0, 80.0 )
	];
	actual = mskput( x, mask, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < mask.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected[ i ] ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, broadcasting)', function test( t ) {
	var expected;
	var actual;
	var values;
	var mask;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	mask = toAccessorArray( [ 1, 0, 1, 0 ] );
	values = [
		new Complex64( 100.0, 200.0 )
	];
	expected = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 100.0, 200.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 100.0, 200.0 )
	];
	actual = mskput( x, mask, values, 'broadcast' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < mask.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected[ i ] ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, complex)', function test( t ) {
	var expected;
	var actual;
	var values;
	var mask;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	mask = toAccessorArray( [ 1, 0, 1, 0 ] );
	values = new Complex64Array( [ 30.0, 40.0, 70.0, 80.0 ] );
	expected = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 30.0, 40.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 70.0, 80.0 )
	];
	actual = mskput( x, mask, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < mask.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected[ i ] ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, complex, broadcasting)', function test( t ) {
	var expected;
	var actual;
	var values;
	var mask;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	mask = toAccessorArray( [ 1, 0, 1, 0 ] );
	values = new Complex64Array( [ 100.0, 200.0 ] );
	expected = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 100.0, 200.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 100.0, 200.0 )
	];
	actual = mskput( x, mask, values, 'broadcast' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < mask.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected[ i ] ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, boolean)', function test( t ) {
	var expected;
	var actual;
	var values;
	var mask;
	var x;
	var v;
	var i;

	x = new BooleanArray( [ true, false, false, true ] );
	mask = toAccessorArray( [ 1, 0, 1, 0 ] );
	values = new BooleanArray( [ true, false ] );
	expected = [ true, true, false, true ];
	actual = mskput( x, mask, values, 'throw' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < mask.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( v, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, boolean, broadcasting)', function test( t ) {
	var expected;
	var actual;
	var values;
	var mask;
	var x;
	var v;
	var i;

	x = new BooleanArray( [ true, false, false, true ] );
	mask = toAccessorArray( [ 1, 0, 0, 1 ] );
	values = [ true ];
	expected = [ true, true, true, true ];
	actual = mskput( x, mask, values, 'broadcast' );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < mask.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( v, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'when the "mode" is "throw", the function throws an error if provided insufficient values to satisfy the mask array', function test( t ) {
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];
	mask = [ 0, 0, 0, 0 ];

	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		mskput( x, mask, [ 200 ], 'throw' );
	}
});

tape( 'when the "mode" is "broadcast", the function throws an error if a provided values array which is broadcast incompatible with the number of falsy values in a mask array', function test( t ) {
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];
	mask = [ 0, 0, 0, 0 ];

	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		mskput( x, mask, [ 200, 400 ], 'broadcast' );
	}
});
