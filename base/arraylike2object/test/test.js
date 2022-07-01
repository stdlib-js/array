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
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var arraylike2object = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof arraylike2object, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts an array to a standardized object', function test( t ) {
	var expected;
	var actual;
	var x;
	var v;

	x = new Float64Array( 10 );

	expected = {
		'data': x,
		'accessors': false
	};
	actual = arraylike2object( x );

	t.strictEqual( actual.data, expected.data, 'returns expected value' );
	t.strictEqual( actual.accessors, expected.accessors, 'returns expected value' );
	t.strictEqual( typeof actual.getter, 'function', 'returns expected value' );
	t.strictEqual( actual.getter.length, 2, 'returns expected value' );
	t.strictEqual( typeof actual.setter, 'function', 'returns expected value' );
	t.strictEqual( actual.setter.length, 3, 'returns expected value' );

	actual.setter( actual.data, 0, 1.0 );
	v = actual.getter( actual.data, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array-like object to a standardized object', function test( t ) {
	var expected;
	var actual;
	var x;
	var v;

	x = {
		'length': 10
	};

	expected = {
		'data': x,
		'accessors': false
	};
	actual = arraylike2object( x );

	t.strictEqual( actual.data, expected.data, 'returns expected value' );
	t.strictEqual( actual.accessors, expected.accessors, 'returns expected value' );
	t.strictEqual( typeof actual.getter, 'function', 'returns expected value' );
	t.strictEqual( actual.getter.length, 2, 'returns expected value' );
	t.strictEqual( typeof actual.setter, 'function', 'returns expected value' );
	t.strictEqual( actual.setter.length, 3, 'returns expected value' );

	actual.setter( actual.data, 0, 1.0 );
	v = actual.getter( actual.data, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array to a standardized object (data buffer accessors)', function test( t ) {
	var expected;
	var actual;
	var x;
	var v;

	x = new Complex64Array( 10 );

	expected = {
		'data': x,
		'accessors': true
	};
	actual = arraylike2object( x );

	t.strictEqual( actual.data, expected.data, 'returns expected value' );
	t.strictEqual( actual.accessors, expected.accessors, 'returns expected value' );
	t.strictEqual( typeof actual.getter, 'function', 'returns expected value' );
	t.strictEqual( actual.getter.length, 2, 'returns expected value' );
	t.strictEqual( typeof actual.setter, 'function', 'returns expected value' );
	t.strictEqual( actual.setter.length, 3, 'returns expected value' );

	actual.setter( actual.data, 0, new Complex64( 1.0, 2.0 ) );
	v = actual.getter( actual.data, 0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});
