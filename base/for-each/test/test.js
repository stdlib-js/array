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
var AccessorArray = require( './../../../base/accessor' );
var Float64Array = require( './../../../float64' );
var forEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof forEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a callback to each indexed element in an input array (generic)', function test( t ) {
	var sum;
	var x;

	x = [ 1, 2, 3, 4 ];
	sum = 0;

	forEach( x, clbk );

	t.strictEqual( sum, 10, 'returns expected value' );
	t.end();

	function clbk( v ) {
		sum += v;
	}
});

tape( 'the function applies a callback to each indexed element in an input array (typed array)', function test( t ) {
	var sum;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	sum = 0.0;

	forEach( x, clbk );

	t.strictEqual( sum, 10.0, 'returns expected value' );
	t.end();

	function clbk( v ) {
		sum += v;
	}
});

tape( 'the function applies a callback to each indexed element in an input array (accessors)', function test( t ) {
	var sum;
	var x;

	x = new AccessorArray( [ 1.0, 2.0, 3.0, 4.0 ] );
	sum = 0.0;

	forEach( x, clbk );

	t.strictEqual( sum, 10.0, 'returns expected value' );
	t.end();

	function clbk( v ) {
		sum += v;
	}
});

tape( 'the function applies a callback to each indexed element in an input array (array-like object)', function test( t ) {
	var sum;
	var x;

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	sum = 0;

	forEach( x, clbk );

	t.strictEqual( sum, 10, 'returns expected value' );
	t.end();

	function clbk( v ) {
		sum += v;
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var x;

	ctx = {
		'sum': 0
	};
	x = [ 1, 2, 3, 4 ];

	forEach( x, clbk, ctx );

	t.strictEqual( ctx.sum, 10, 'returns expected value' );
	t.end();

	function clbk( v ) {
		this.sum += v; // eslint-disable-line no-invalid-this
	}
});
