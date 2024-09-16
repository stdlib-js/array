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
var Int32Array = require( './../../int32' );
var array2fancy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2fancy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array-like object supporting expected property access (generic)', function test( t ) {
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	x.foo = 'a';
	x.bar = 'b';

	y = array2fancy( x );

	t.strictEqual( y.foo, x.foo, 'returns expected value' );
	t.strictEqual( y.bar, x.bar, 'returns expected value' );
	t.strictEqual( y.length, x.length, 'returns expected value' );
	t.strictEqual( y.beep, void 0, 'returns expected value' );
	t.strictEqual( y.boop, void 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting expected property access (typed)', function test( t ) {
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	x.foo = 'a';
	x.bar = 'b';

	y = array2fancy( x );

	t.strictEqual( y.foo, x.foo, 'returns expected value' );
	t.strictEqual( y.bar, x.bar, 'returns expected value' );
	t.strictEqual( y.length, x.length, 'returns expected value' );
	t.strictEqual( y.beep, void 0, 'returns expected value' );
	t.strictEqual( y.boop, void 0, 'returns expected value' );

	t.end();
});
