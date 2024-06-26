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
var AccessorArray = require( './../../../base/accessor' );
var Float64Array = require( './../../../float64' );
var Complex64Array = require( './../../../complex64' );
var Complex128Array = require( './../../../complex128' );
var BooleanArray = require( './../../../bool' );
var any = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof any, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an empty collection, the function returns `false` (generic)', function test( t ) {
	var out;
	var arr;

	arr = [];
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty collection, the function returns `false` (real typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Float64Array( [] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty collection, the function returns `false` (complex typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Complex64Array( [] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );

	arr = new Complex128Array( [] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty collection, the function returns `false` (boolean array)', function test( t ) {
	var out;
	var arr;

	arr = new BooleanArray( [] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty collection, the function returns `false` (accessor)', function test( t ) {
	var out;
	var arr;

	arr = new AccessorArray( [] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (generic)', function test( t ) {
	var out;
	var arr;

	arr = [ 1, 0, 3 ];
	out = any( arr );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (real typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	out = any( arr );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (complex typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Complex64Array( [ 0.0, 2.0, 0.0, 0.0 ] );
	out = any( arr );

	t.strictEqual( out, true, 'returns expected value' );

	arr = new Complex128Array( [ 0.0, 0.0, 3.0, 0.0 ] );
	out = any( arr );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (boolean array)', function test( t ) {
	var out;
	var arr;

	arr = new BooleanArray( [ false, false, true ] );
	out = any( arr );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (accessor)', function test( t ) {
	var out;
	var arr;

	arr = new AccessorArray( [ 0, 2, 3 ] );
	out = any( arr );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (array-like object)', function test( t ) {
	var out;
	var arr;

	arr = {
		'length': 3,
		'0': 1,
		'1': 0,
		'2': 0
	};
	out = any( arr );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (generic)', function test( t ) {
	var out;
	var arr;

	arr = [ 0, 0, 0 ];
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (real typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (complex typed array)', function test( t ) {
	var out;
	var arr;

	arr = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );

	arr = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (boolean array)', function test( t ) {
	var out;
	var arr;

	arr = new BooleanArray( [ false, false, false, false ] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (accessor)', function test( t ) {
	var out;
	var arr;

	arr = new AccessorArray( [ 0, 0, 0 ] );
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (array-like object)', function test( t ) {
	var out;
	var arr;

	arr = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'when performing a linear scan, the function does not skip empty elements (generic)', function test( t ) {
	var out;
	var arr;

	arr = [ 0, , , 0 ]; // eslint-disable-line no-sparse-arrays
	out = any( arr );

	t.strictEqual( out, false, 'returns expected value' );
	t.end();
});

tape( 'when performing a linear scan, the function does not skip empty elements (accessor)', function test( t ) {
	var out;
	var arr;

	arr = new AccessorArray( [ 0, , , 1 ] ); // eslint-disable-line no-sparse-arrays
	out = any( arr );

	t.strictEqual( out, true, 'returns expected value' );
	t.end();
});
