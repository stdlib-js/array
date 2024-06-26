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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Int32Array = require( './../../int32' );
var Int8Array = require( './../../int8' );
var Uint32Array = require( './../../uint32' );
var Uint16Array = require( './../../uint16' );
var Complex128Array = require( './../../complex128' );
var Complex64Array = require( './../../complex64' );
var toAccessorArray = require( './../../base/to-accessor-array' );
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

tape( 'the function returns an array-like object supporting slice assignment (generic)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 6, 7, 8 ];
	y[ ':' ] = [ 5, 6, 7, 8 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 6, 3, 4 ];
	y[ ':2' ] = [ 5, 6 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 5, 6, 4 ];
	y[ '1:3' ] = [ 5, 6 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 2, 6, 4 ];
	y[ '::2' ] = [ 5, 6 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 6, 3, 5 ];
	y[ '-1::-2' ] = [ 5, 6 ];

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting slice assignment ("unknown" dtype, accessor)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	expected = [ 5, 6, 7, 8 ];
	y[ ':' ] = [ 5, 6, 7, 8 ];

	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	expected = [ 5, 6, 3, 4 ];
	y[ ':2' ] = [ 5, 6 ];

	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	expected = [ 1, 5, 6, 4 ];
	y[ '1:3' ] = [ 5, 6 ];

	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	expected = [ 5, 2, 6, 4 ];
	y[ '::2' ] = [ 5, 6 ];

	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	expected = [ 1, 6, 3, 5 ];
	y[ '-1::-2' ] = [ 5, 6 ];

	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting slice assignment (int32)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 6, 7, 8 ] );
	y[ ':' ] = new Int32Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 6, 3, 4 ] );
	y[ ':2' ] = new Int32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 5, 6, 4 ] );
	y[ '1:3' ] = new Int32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 2, 6, 4 ] );
	y[ '::2' ] = new Int32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 6, 3, 5 ] );
	y[ '-1::-2' ] = new Int32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting slice assignment (uint32)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 6, 7, 8 ] );
	y[ ':' ] = new Uint32Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 6, 3, 4 ] );
	y[ ':2' ] = new Uint32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 1, 5, 6, 4 ] );
	y[ '1:3' ] = new Uint32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 2, 6, 4 ] );
	y[ '::2' ] = new Uint32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 1, 6, 3, 5 ] );
	y[ '-1::-2' ] = new Uint32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting slice assignment (float64)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 6, 7, 8 ] );
	y[ ':' ] = new Float64Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 6, 3, 4 ] );
	y[ ':2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 1, 5, 6, 4 ] );
	y[ '1:3' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 2, 6, 4 ] );
	y[ '::2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 1, 6, 3, 5 ] );
	y[ '-1::-2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting slice assignment (complex128)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );
	y[ ':' ] = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 17, 18, 19, 20, 5, 6, 7, 8 ] );
	y[ ':2' ] = new Complex128Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 17, 18, 19, 20, 7, 8 ] );
	y[ '1:3' ] = new Complex128Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 17, 18, 3, 4, 19, 20, 7, 8 ] );
	y[ '::2' ] = new Complex128Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 19, 20, 5, 6, 17, 18 ] );
	y[ '-1::-2' ] = new Complex128Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (generic, array)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 5, 5, 5 ];
	y[ ':' ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 5, 3, 4 ];
	y[ ':2' ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 5, 5, 4 ];
	y[ '1:3' ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 2, 5, 4 ];
	y[ '::2' ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 5, 3, 5 ];
	y[ '-1::-2' ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (generic, scalar)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 5, 5, 5 ];
	y[ ':' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 5, 3, 4 ];
	y[ ':2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 5, 5, 4 ];
	y[ '1:3' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 2, 5, 4 ];
	y[ '::2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 5, 3, 5 ];
	y[ '-1::-2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (float64, array)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 5, 5, 5 ] );
	y[ ':' ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 5, 3, 4 ] );
	y[ ':2' ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 1, 5, 5, 4 ] );
	y[ '1:3' ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 2, 5, 4 ] );
	y[ '::2' ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 1, 5, 3, 5 ] );
	y[ '-1::-2' ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (float64, scalar)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 5, 5, 5 ] );
	y[ ':' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 5, 3, 4 ] );
	y[ ':2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 1, 5, 5, 4 ] );
	y[ '1:3' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 2, 5, 4 ] );
	y[ '::2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 1, 5, 3, 5 ] );
	y[ '-1::-2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (int32, array)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 5, 5, 5 ] );
	y[ ':' ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 5, 3, 4 ] );
	y[ ':2' ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 5, 5, 4 ] );
	y[ '1:3' ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 2, 5, 4 ] );
	y[ '::2' ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 5, 3, 5 ] );
	y[ '-1::-2' ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (int32, scalar)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 5, 5, 5 ] );
	y[ ':' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 5, 3, 4 ] );
	y[ ':2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 5, 5, 4 ] );
	y[ '1:3' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 2, 5, 4 ] );
	y[ '::2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 5, 3, 5 ] );
	y[ '-1::-2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (uint32, array)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 5, 5, 5 ] );
	y[ ':' ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 5, 3, 4 ] );
	y[ ':2' ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 1, 5, 5, 4 ] );
	y[ '1:3' ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 2, 5, 4 ] );
	y[ '::2' ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 1, 5, 3, 5 ] );
	y[ '-1::-2' ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (uint32, scalar)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 5, 5, 5 ] );
	y[ ':' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 5, 3, 4 ] );
	y[ ':2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 1, 5, 5, 4 ] );
	y[ '1:3' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 2, 5, 4 ] );
	y[ '::2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 1, 5, 3, 5 ] );
	y[ '-1::-2' ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (complex128, array)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 9, 10, 9, 10, 9, 10 ] );
	y[ ':' ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 9, 10, 5, 6, 7, 8 ] );
	y[ ':2' ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 9, 10, 9, 10, 7, 8 ] );
	y[ '1:3' ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 3, 4, 9, 10, 7, 8 ] );
	y[ '::2' ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 9, 10, 5, 6, 9, 10 ] );
	y[ '-1::-2' ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (complex128, complex scalar)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 9, 10, 9, 10, 9, 10 ] );
	y[ ':' ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 9, 10, 5, 6, 7, 8 ] );
	y[ ':2' ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 9, 10, 9, 10, 7, 8 ] );
	y[ '1:3' ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 3, 4, 9, 10, 7, 8 ] );
	y[ '::2' ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 9, 10, 5, 6, 9, 10 ] );
	y[ '-1::-2' ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted slice assignment (complex128, real scalar)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 0, 9, 0, 9, 0, 9, 0 ] );
	y[ ':' ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 0, 9, 0, 5, 6, 7, 8 ] );
	y[ ':2' ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 9, 0, 9, 0, 7, 8 ] );
	y[ '1:3' ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 0, 3, 4, 9, 0, 7, 8 ] );
	y[ '::2' ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 9, 0, 5, 6, 9, 0 ] );
	y[ '-1::-2' ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (generic, float64)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 6, 7, 8 ];
	y[ ':' ] = new Float64Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 6, 3, 4 ];
	y[ ':2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 5, 6, 4 ];
	y[ '1:3' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 5, 2, 6, 4 ];
	y[ '::2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 1, 6, 3, 5 ];
	y[ '-1::-2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (float64, float32)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 6, 7, 8 ] );
	y[ ':' ] = new Float32Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 6, 3, 4 ] );
	y[ ':2' ] = new Float32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 1, 5, 6, 4 ] );
	y[ '1:3' ] = new Float32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 5, 2, 6, 4 ] );
	y[ '::2' ] = new Float32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float64Array( [ 1, 6, 3, 5 ] );
	y[ '-1::-2' ] = new Float32Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (int32, int8)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 6, 7, 8 ] );
	y[ ':' ] = new Int8Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 6, 3, 4 ] );
	y[ ':2' ] = new Int8Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 5, 6, 4 ] );
	y[ '1:3' ] = new Int8Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 5, 2, 6, 4 ] );
	y[ '::2' ] = new Int8Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 1, 6, 3, 5 ] );
	y[ '-1::-2' ] = new Int8Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (uint32, uint16)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 6, 7, 8 ] );
	y[ ':' ] = new Uint16Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 6, 3, 4 ] );
	y[ ':2' ] = new Uint16Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 1, 5, 6, 4 ] );
	y[ '1:3' ] = new Uint16Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 5, 2, 6, 4 ] );
	y[ '::2' ] = new Uint16Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Uint32Array( [ 1, 6, 3, 5 ] );
	y[ '-1::-2' ] = new Uint16Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (complex128, complex64)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );
	y[ ':' ] = new Complex64Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 17, 18, 19, 20, 5, 6, 7, 8 ] );
	y[ ':2' ] = new Complex64Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 17, 18, 19, 20, 7, 8 ] );
	y[ '1:3' ] = new Complex64Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 17, 18, 3, 4, 19, 20, 7, 8 ] );
	y[ '::2' ] = new Complex64Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 19, 20, 5, 6, 17, 18 ] );
	y[ '-1::-2' ] = new Complex64Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (complex128, float64)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 0, 10, 0, 11, 0, 12, 0 ] );
	y[ ':' ] = new Float64Array( [ 9, 10, 11, 12 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 17, 0, 18, 0, 5, 6, 7, 8 ] );
	y[ ':2' ] = new Float64Array( [ 17, 18 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 17, 0, 18, 0, 7, 8 ] );
	y[ '1:3' ] = new Float64Array( [ 17, 18 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 17, 0, 3, 4, 18, 0, 7, 8 ] );
	y[ '::2' ] = new Float64Array( [ 17, 18 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 1, 2, 18, 0, 5, 6, 17, 0 ] );
	y[ '-1::-2' ] = new Float64Array( [ 17, 18 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting downcasting of floating-point arrays (float32, float64)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float32Array( [ 5, 6, 7, 8 ] );
	y[ ':' ] = new Float64Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float32Array( [ 5, 6, 3, 4 ] );
	y[ ':2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float32Array( [ 1, 5, 6, 4 ] );
	y[ '1:3' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float32Array( [ 5, 2, 6, 4 ] );
	y[ '::2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Float32Array( [ 1, 6, 3, 5 ] );
	y[ '-1::-2' ] = new Float64Array( [ 5, 6 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting downcasting of floating-point arrays (complex64, complex128)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex64Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );
	y[ ':' ] = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex64Array( [ 17, 18, 19, 20, 5, 6, 7, 8 ] );
	y[ ':2' ] = new Complex128Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex64Array( [ 1, 2, 17, 18, 19, 20, 7, 8 ] );
	y[ '1:3' ] = new Complex128Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex64Array( [ 17, 18, 3, 4, 19, 20, 7, 8 ] );
	y[ '::2' ] = new Complex128Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex64Array( [ 1, 2, 19, 20, 5, 6, 17, 18 ] );
	y[ '-1::-2' ] = new Complex128Array( [ 17, 18, 19, 20 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'by default, the function returns an array-like object which falls back to normal property assignment when provided a slice which is out-of-bounds (generic)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	y[ '10:20' ] = [ 5 ]; // note: broadcast compatible with empty slice

	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	y[ '-20:-10' ] = [ 5 ];

	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	y[ ':-20' ] = [ 5 ];

	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'by default, the function returns an array-like object which leaves the array unchanged when provided a slice which is out-of-bounds (int32)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	y[ '10:20' ] = new Int32Array( [ 5 ] ); // note: broadcast compatible with empty slice

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	y[ '-20:-10' ] = new Int32Array( [ 5 ] );

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	y[ ':-20' ] = new Int32Array( [ 5 ] );

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which leaves the array unchanged when provided a slice which is out-of-bounds (generic)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': false
	});

	y[ '10:20' ] = [ 5 ]; // note: broadcast compatible with empty slice

	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': false
	});

	y[ '-20:-10' ] = [ 5 ];

	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': false
	});

	y[ ':-20' ] = [ 5 ];

	expected = [ 1, 2, 3, 4 ];
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which leaves the array unchanged when provided a slice which is out-of-bounds (int32)', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': false
	});

	y[ '10:20' ] = new Int32Array( [ 5 ] ); // note: broadcast compatible with empty slice

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': false
	});

	y[ '-20:-10' ] = new Int32Array( [ 5 ] );

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': false
	});

	y[ ':-20' ] = new Int32Array( [ 5 ] );

	expected = new Int32Array( [ 1, 2, 3, 4 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided a slice which is out-of-bounds (generic)', opts, function test( t ) {
	var x;
	var y;
	var s;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		s = ( x.length+i ) + ':' + ( x.length+10 );
		t.throws( badValue( s ), RangeError, 'throws an error when provided ' + s );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 5;
		};
	}
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided a slice which is out-of-bounds (int32)', opts, function test( t ) {
	var x;
	var y;
	var s;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		s = ( x.length+i ) + ':' + ( x.length+10 );
		t.throws( badValue( s ), RangeError, 'throws an error when provided ' + s );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 5;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to assign a broadcast-incompatible array (generic)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	values = [
		[ 5, 6 ],
		[ 5, 6, 7 ],
		[ 5, 6, 7, 8, 9 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ ':' ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to assign a broadcast-incompatible array (generic, out-of-bounds slice)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	values = [
		[ 5, 6 ],
		[ 5, 6, 7 ],
		[ 5, 6, 7, 8 ], // note: this is as expected, as a zero-element slice is only compatible with either a zero- or one-element assigned value
		[ 5, 6, 7, 8, 9 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ '10:20' ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to assign a broadcast-incompatible array (int32)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		new Int32Array( [ 5, 6 ] ),
		new Int32Array( [ 5, 6, 7 ] ),
		new Int32Array( [ 5, 6, 7, 8, 9 ] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ ':' ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to assign a broadcast-incompatible array (int32, out-of-bounds slice)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		new Int32Array( [ 5, 6 ] ),
		new Int32Array( [ 5, 6, 7 ] ),
		new Int32Array( [ 5, 6, 7, 8 ] ), // note: this is as expected, as a zero-element slice is only compatible with either a zero- or one-element assigned value
		new Int32Array( [ 5, 6, 7, 8, 9 ] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ '10:20' ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (float64)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		new Complex128Array( [ 5, 6 ] ),
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ ':' ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (complex128)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	values = [
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ ':' ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (int32)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		new Uint32Array( [ 1 ] ),
		new Uint32Array( [ 5, 6, 7, 8 ] ),
		new Float64Array( [ 1 ] ),
		new Float64Array( [ 5, 6, 7, 8 ] ),
		new Float32Array( [ 1 ] ),
		new Float32Array( [ 5, 6, 7, 8 ] ),
		new Complex128Array( [ 5, 6 ] ),
		3.14,
		-3.14,
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ ':' ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (int8)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int8Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		new Int32Array( [ 1 ] ),
		new Int32Array( [ 5, 6, 7, 8 ] ),
		new Float64Array( [ 1 ] ),
		new Float64Array( [ 5, 6, 7, 8 ] ),
		new Float32Array( [ 1 ] ),
		new Float32Array( [ 5, 6, 7, 8 ] ),
		new Complex128Array( [ 5, 6 ] ),
		999999,
		3.14,
		-3.14,
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ ':' ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (uint32)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		new Int32Array( [ 1 ] ),
		new Int32Array( [ 5, 6, 7, 8 ] ),
		new Float64Array( [ 1 ] ),
		new Float64Array( [ 5, 6, 7, 8 ] ),
		new Float32Array( [ 1 ] ),
		new Float32Array( [ 5, 6, 7, 8 ] ),
		new Complex128Array( [ 5, 6 ] ),
		-3,
		3.14,
		-3.14,
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ ':' ] = value;
		};
	}
});
