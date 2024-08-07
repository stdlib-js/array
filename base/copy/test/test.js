/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var copy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof copy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function copies an array-like object', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	actual = copy( x );

	t.notEqual( actual, x, 'returns different reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies an array-like object (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;
	var v;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	actual = copy( x );

	t.notEqual( actual, x, 'returns different reference' );
	for ( i = 0; i < x.length; i++ ) {
		v = actual[ i ];
		expected = x.get( i );
		t.strictEqual( isComplex64( v ), true, 'returns expected value' );
		t.strictEqual( realf( v ), realf( expected ), 'returns expected value' );
		t.strictEqual( imagf( v ), imagf( expected ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an empty array if provided an array of length `0`', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = copy( [] );

	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
