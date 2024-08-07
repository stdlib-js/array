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
var Float64Array = require( './../../../float64' );
var Complex64Array = require( './../../../complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var getter = require( './../../../base/getter' );
var setter = require( './../../../base/setter' );
var accessorGetter = require( './../../../base/accessor-getter' );
var accessorSetter = require( './../../../base/accessor-setter' );
var dtype = require( './../../../dtype' );
var accessors = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof accessors, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accessor object (generic array)', function test( t ) {
	var expected;
	var actual;
	var dt;
	var x;
	var v;

	x = [ 0, 0, 0, 0, 0, 0 ];
	dt = dtype( x );

	expected = {
		'accessorProtocol': false,
		'accessors': [ getter( dt ), setter( dt ) ]
	};
	actual = accessors( x );

	t.strictEqual( actual.accessors.length, 2, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual.accessors[ 1 ]( x, 0, 1 );
	v = actual.accessors[ 0 ]( x, 0 );
	t.strictEqual( v, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns an accessor object (typed array)', function test( t ) {
	var expected;
	var actual;
	var dt;
	var x;
	var v;

	x = new Float64Array( 10 );
	dt = dtype( x );

	expected = {
		'accessorProtocol': false,
		'accessors': [ getter( dt ), setter( dt ) ]
	};
	actual = accessors( x );

	t.strictEqual( actual.accessors.length, 2, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual.accessors[ 1 ]( x, 0, 1.0 );
	v = actual.accessors[ 0 ]( x, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an accessor object (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var dt;
	var x;
	var v;

	x = new Complex64Array( 10 );
	dt = dtype( x );

	expected = {
		'accessorProtocol': true,
		'accessors': [ accessorGetter( dt ), accessorSetter( dt ) ]
	};
	actual = accessors( x );

	t.strictEqual( actual.accessors.length, 2, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual.accessors[ 1 ]( x, 0, new Complex64( 1.0, 2.0 ) );
	v = actual.accessors[ 0 ]( x, 0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an accessor object (array-like object)', function test( t ) {
	var expected;
	var actual;
	var dt;
	var x;
	var v;

	x = {
		'length': 10
	};
	dt = dtype( x );

	expected = {
		'accessorProtocol': false,
		'accessors': [ getter( dt ), setter( dt ) ]
	};
	actual = accessors( x );

	t.strictEqual( actual.accessors.length, 2, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual.accessors[ 1 ]( x, 0, 1 );
	v = actual.accessors[ 0 ]( x, 0 );
	t.strictEqual( v, 1, 'returns expected value' );

	t.end();
});
