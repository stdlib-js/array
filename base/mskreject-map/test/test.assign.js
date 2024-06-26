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
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Int32Array = require( './../../../int32' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var zeros = require( './../../../zeros' );
var mskrejectMap = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskrejectMap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function rejects array elements (generic)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var x;

	x = [ 1, 2, 3, 4 ];

	function clbk( val ) {
		return val * 2;
	}

	mask = [ 1, 0, 1, 0 ];
	out = zeros( 2, 'generic' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	expected = [ 4, 8 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	out = zeros( 0, 'generic' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	expected = [];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 0 ];
	out = zeros( 1, 'generic' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	expected = [ 8 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	out = zeros( 4, 'generic' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	expected = [ 2, 4, 6, 8 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 0, 1, 0 ];
	out = zeros( 4, 'generic' );
	actual = mskrejectMap( x, mask, out, -2, out.length-1, clbk );
	expected = [ 0, 8, 0, 4 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function rejects array elements (real typed array)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var inc = 5;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );

	function clbk( val ) {
		return val + this; // eslint-disable-line no-invalid-this
	}

	mask = [ 1, 0, 1, 0 ];
	out = zeros( 2, 'int32' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk, inc );
	expected = new Int32Array( [ 7, 9 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	out = zeros( 0, 'int32' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk, inc );
	expected = new Int32Array( [] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 0 ];
	out = zeros( 1, 'int32' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk, inc );
	expected = new Int32Array( [ 9 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	out = zeros( 4, 'int32' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk, inc );
	expected = new Int32Array( [ 6, 7, 8, 9 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 0, 1, 0 ];
	out = zeros( 4, 'int32' );
	actual = mskrejectMap( x, mask, out, -2, out.length-1, clbk, inc );
	expected = new Int32Array( [ 0, 9, 0, 7 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function rejects array elements (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var scale = 5;
	var mask;
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	function clbk( val ) {
		return val * this; // eslint-disable-line no-invalid-this
	}

	mask = [ 1, 0, 1, 0 ];
	out = zeros( 2, 'complex64' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk, scale );
	expected = new Complex64Array( [ scale * 3.0, scale * 4.0, scale * 7.0, scale * 8.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	out = zeros( 0, 'complex64' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk, scale );
	expected = new Complex64Array( [] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 1, 1, 1, 0 ];
	out = zeros( 1, 'complex64' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk, scale );
	expected = new Complex64Array( [ scale * 7.0, scale * 8.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	out = zeros( 4, 'complex64' );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk, scale );
	expected = new Complex64Array( [ scale * 1.0, scale * 2.0, scale * 3.0, scale * 4.0, scale * 5.0, scale * 6.0, scale * 7.0, scale * 8.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 1, 0, 1, 0 ];
	out = zeros( 4, 'complex64' );
	actual = mskrejectMap( x, mask, out, -2, out.length-1, clbk, scale );
	expected = new Complex64Array( [ 0.0, 0.0, scale * 7.0, scale * 8.0, 0.0, 0.0, scale * 3.0, scale * 4.0 ] );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function rejects array elements (accessors)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var out;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );

	function clbk( val ) {
		return val * 2;
	}

	mask = toAccessorArray( [ 1, 0, 1, 0 ] );
	out = toAccessorArray( zeros( 2, 'generic' ) );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	expected = [ 4, 8 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	mask = toAccessorArray( [ 1, 1, 1, 1 ] );
	out = toAccessorArray( zeros( 0, 'generic' ) );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	expected = [];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	mask = toAccessorArray( [ 1, 1, 1, 0 ] );
	out = toAccessorArray( zeros( 1, 'generic' ) );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	expected = [ 8 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	mask = toAccessorArray( [ 0, 0, 0, 0 ] );
	out = toAccessorArray( zeros( 4, 'generic' ) );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	expected = [ 2, 4, 6, 8 ];

	t.strictEqual( actual, out, 'returns expected value' );
	isEqual( actual, expected );

	mask = toAccessorArray( [ 1, 0, 1, 0 ] );
	out = toAccessorArray( zeros( 4, 'generic' ) );
	actual = mskrejectMap( x, mask, out, -2, out.length-1, clbk );
	expected = [ 0, 8, 0, 4 ];

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

	mask = [ 1, 1, 1, 1 ];

	function clbk( val ) {
		return val * 2;
	}

	x = [ 1, 2, 3, 4 ];
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = [ 0, 0, 0, 0 ];
	expected = [ 0, 0, 0, 0 ];
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	actual = mskrejectMap( x, mask, out, 1, 0, clbk );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});
