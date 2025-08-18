/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var Complex128Array = require( './../../../complex128' );
var Int32Array = require( './../../../int32' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var countIfs = require( './../lib' );


// FUNCTIONS //

function predicate0( value ) {
	return value > 0;
}

function predicate1( value ) {
	return value < 0;
}

function predicate2( value ) {
	return value < 3;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof countIfs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function counts the number of elements in the input arrays which simultaneously pass tests implemented by predicate functions (narrays=1,generic)', function test( t ) {
	var actual;
	var x0;

	x0 = [ 0, 1, 0, 1, 2 ];
	actual = countIfs( x0, predicate0 );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements in the input arrays which simultaneously pass tests implemented by predicate functions (narrays=1,accessors)', function test( t ) {
	var actual;
	var x0;

	x0 = toAccessorArray( [ 0, 1, 0, 1, 2 ] );
	actual = countIfs( x0, predicate0 );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements in the input arrays which simultaneously pass tests implemented by predicate functions (narrays=2,generic)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = [ 0, 1, 0, 1, 2 ];
	x1 = [ 3, -4, -1, 2, -8 ];
	actual = countIfs( x0, predicate0, x1, predicate1 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements in the input arrays which simultaneously pass tests implemented by predicate functions (narrays=2,accessors)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = toAccessorArray( [ 0, 1, 0, 1, 2 ] );
	x1 = toAccessorArray( [ 3, -4, -1, 2, -8 ] );
	actual = countIfs( x0, predicate0, x1, predicate1 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements in the input arrays which simultaneously pass tests implemented by predicate functions (narrays=2,real typed array)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = new Int32Array( [ 0, 1, 0, 1, 2 ] );
	x1 = new Int32Array( [ 3, -4, -1, 2, -8 ] );
	actual = countIfs( x0, predicate0, x1, predicate1 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements in the input arrays which simultaneously pass tests implemented by predicate functions (narrays=2,complex typed array)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = new Complex128Array( [ 3.0, 1.0, 1.0, 0.0, 3.0, 4.0, 0.0, 5.0 ] );
	x1 = new Complex128Array( [ -2.0, -5.0, -3.0, 1.0, -5.0, -1.0, 0.0, 4.0 ] );
	actual = countIfs( x0, predicate0, x1, predicate1 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();

	function predicate0( value ) {
		return (
			real( value ) > 0 &&
			imag( value ) > 0
		);
	}
	function predicate1( value ) {
		return (
			real( value ) < 0 &&
			imag( value ) < 0
		);
	}
});

tape( 'the function counts the number of elements in the input arrays which simultaneously pass tests implemented by predicate functions (narrays=3,generic)', function test( t ) {
	var actual;
	var x0;
	var x1;
	var x2;

	x0 = [ 0, 1, 0, 1, 2 ];
	x1 = [ 3, -4, -1, 2, -8 ];
	x2 = [ 1, 2, 3, 4, 5 ];
	actual = countIfs( x0, predicate0, x1, predicate1, x2, predicate2 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements in the input arrays which simultaneously pass tests implemented by predicate functions (narrays=3,accessors)', function test( t ) {
	var actual;
	var x0;
	var x1;
	var x2;

	x0 = toAccessorArray( [ 0, 1, 0, 1, 2 ] );
	x1 = toAccessorArray( [ 3, -4, -1, 2, -8 ] );
	x2 = toAccessorArray( [ 1, 2, 3, 4, 5 ] );
	actual = countIfs( x0, predicate0, x1, predicate1, x2, predicate2 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if no elements at the same indices pass tests implemented by predicate functions (generic)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = [ -3, -2, -5, -1 ];
	x1 = [ 2, 4, 5, 8 ];
	actual = countIfs( x0, predicate0, x1, predicate1 );

	t.strictEqual( actual, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if no elements at the same indices pass tests implemented by predicate functions (accessors)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = toAccessorArray( [ -3, -2, -5, -1 ] );
	x1 = toAccessorArray( [ 2, 4, 5, 8 ] );
	actual = countIfs( x0, predicate0, x1, predicate1 );

	t.strictEqual( actual, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns the number of elements if all elements in every input array pass tests implemented by predicate functions (generic)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = [ 1, 1, 1, 1 ];
	x1 = [ -1, -1, -1, -1 ];
	actual = countIfs( x0, predicate0, x1, predicate1 );

	t.strictEqual( actual, x0.length, 'returns expected value' );
	t.end();
});

tape( 'the function returns the number of elements if all elements in every input array pass tests implemented by predicate functions (accessors)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = toAccessorArray( [ 1, 1, 1, 1 ] );
	x1 = toAccessorArray( [ -1, -1, -1, -1 ] );
	actual = countIfs( x0, predicate0, x1, predicate1 );

	t.strictEqual( actual, x0.length, 'returns expected value' );
	t.end();
});
