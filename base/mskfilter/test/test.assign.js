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
var BooleanArray = require( './../../../bool' );
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Int32Array = require( './../../../int32' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var isEqualBooleanArray = require( '@stdlib/assert/is-equal-booleanarray' );
var zeros = require( './../../../zeros' );
var mskfilter = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskfilter, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function filters array elements (generic)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];

	mask = [ 0, 1, 0, 1 ];
	out = zeros( 2, 'generic' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = [ 2, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	out = zeros( 0, 'generic' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = [];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	out = zeros( 1, 'generic' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = [ 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	out = zeros( 4, 'generic' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = [ 1, 2, 3, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 1, 0, 1 ];
	out = zeros( 4, 'generic' );
	actual = mskfilter( x, mask, out, -2, out.length-1 );
	expected = [ 0, 4, 0, 2 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (real typed array)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );

	mask = [ 0, 1, 0, 1 ];
	out = zeros( 2, 'int32' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new Int32Array( [ 2, 4 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	out = zeros( 0, 'int32' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new Int32Array( [] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	out = zeros( 1, 'int32' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new Int32Array( [ 4 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	out = zeros( 4, 'int32' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new Int32Array( [ 1, 2, 3, 4 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 1, 0, 1 ];
	out = zeros( 4, 'int32' );
	actual = mskfilter( x, mask, out, -2, out.length-1 );
	expected = new Int32Array( [ 0, 4, 0, 2 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	mask = [ 0, 1, 0, 1 ];
	out = zeros( 2, 'complex64' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new Complex64Array( [ 3.0, 4.0, 7.0, 8.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	out = zeros( 0, 'complex64' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new Complex64Array( [] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	out = zeros( 1, 'complex64' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new Complex64Array( [ 7.0, 8.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	out = zeros( 4, 'complex64' );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 1, 0, 1 ];
	out = zeros( 4, 'complex64' );
	actual = mskfilter( x, mask, out, -2, out.length-1 );
	expected = new Complex64Array( [ 0.0, 0.0, 7.0, 8.0, 0.0, 0.0, 3.0, 4.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (boolean array)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var x;

	x = new BooleanArray( [ true, false, false, true ] );

	mask = [ 0, 1, 0, 1 ];
	out = new BooleanArray( 2 );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new BooleanArray( [ false, true ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	out = new BooleanArray( 0 );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new BooleanArray( [] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	out = new BooleanArray( 1 );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new BooleanArray( [ true ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	out = new BooleanArray( 4 );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = new BooleanArray( [ true, false, false, true ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 1, 0, 1 ];
	out = new BooleanArray( 4 );
	actual = mskfilter( x, mask, out, -2, out.length-1 );
	expected = new BooleanArray( [ false, true, false, false ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (accessors)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );

	mask = toAccessorArray( [ 0, 1, 0, 1 ] );
	out = toAccessorArray( zeros( 2, 'generic' ) );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = [ 2, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	mask = toAccessorArray( [ 0, 0, 0, 0 ] );
	out = toAccessorArray( zeros( 0, 'generic' ) );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = [];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	mask = toAccessorArray( [ 0, 0, 0, 1 ] );
	out = toAccessorArray( zeros( 1, 'generic' ) );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = [ 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	mask = toAccessorArray( [ 1, 1, 1, 1 ] );
	out = toAccessorArray( zeros( 4, 'generic' ) );
	actual = mskfilter( x, mask, out, 1, 0 );
	expected = [ 1, 2, 3, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	mask = toAccessorArray( [ 0, 1, 0, 1 ] );
	out = toAccessorArray( zeros( 4, 'generic' ) );
	actual = mskfilter( x, mask, out, -2, out.length-1 );
	expected = [ 0, 4, 0, 2 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	t.end();

	function isEqual( actual, expected ) {
		var i;
		for ( i = 0; i < expected.length; i++ ) {
			t.strictEqual( actual.get( i ), expected[ i ], 'returns expected value' );
		}
	}
});

tape( 'the function returns leaves an output array unchanged if provided a second argument which masks all input array values', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var x;

	mask = [ 0, 0, 0, 0 ];

	x = [ 1, 2, 3, 4 ];
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = mskfilter( x, mask, out, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = mskfilter( x, mask, out, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = mskfilter( x, mask, out, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	actual = mskfilter( x, mask, out, 1, 0 );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	x = new BooleanArray( [ true, false, false, true ] );
	out = new BooleanArray( [ false, false, false, false ] );
	expected = new BooleanArray( [ false, false, false, false ] );
	actual = mskfilter( x, mask, out, 1, 0 );
	t.strictEqual( isEqualBooleanArray( actual, expected ), true, 'returns expected value' );

	t.end();
});
