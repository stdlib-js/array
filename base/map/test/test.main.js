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
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Float64Array = require( './../../../float64' );
var isArray = require( '@stdlib/assert/is-array' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var map = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof map, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a provided callback to elements in an input array and assigns results to elements in a new output array (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	expected = [ 10, 20, 30, 40 ];

	actual = map( x, scale );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function applies a provided callback to elements in an input array and assigns results to elements in a new output array (typed array)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new Float64Array( [ 10.0, 20.0, 30.0, 40.0 ] );

	actual = map( x, scale );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10.0;
	}
});

tape( 'the function applies a provided callback to elements in an input array and assigns results to elements in a new output array (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	expected = [ 10, 20, 30, 40 ];

	actual = map( toAccessorArray( x ), scale );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function applies a provided callback to elements in an input array and assigns results to elements in a new output array (array-like object)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = [ 10, 20, 30, 40 ];

	actual = map( x, scale );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * 10;
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var x;

	x = [ 1, 2, 3, 4 ];
	ctx = {
		'factor': 10
	};
	expected = [ 10, 20, 30, 40 ];

	actual = map( x, scale, ctx );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v * this.factor; // eslint-disable-line no-invalid-this
	}
});
