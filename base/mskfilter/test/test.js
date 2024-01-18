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
var isSameValue = require( '@stdlib/complex/base/assert/is-same-value' );
var isArray = require( '@stdlib/assert/is-array' );
var mskfilter = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskfilter, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function filters array elements', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];

	mask = [ 0, 1, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 2, 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	actual = mskfilter( x, mask );
	expected = [];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 1, 2, 3, 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (accessors)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;
	var i;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	mask = [ 0, 1, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = [ x.get( 1 ), x.get( 3 ) ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns different reference' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( isSameValue( actual[ i ], expected[ i ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an empty array if provided empty arrays', function test( t ) {
	t.deepEqual( mskfilter( [], [] ), [], 'returns expected value' );
	t.end();
});
