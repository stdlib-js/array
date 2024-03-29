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
var filled = require( './../../../filled' );
var dtypes = require( './../../../typed-real-dtypes' );
var setter = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();
DTYPES.push( 'generic' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof setter, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function for setting an array element', function test( t ) {
	var arr;
	var set;
	var dt;
	var v;
	var i;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt = DTYPES[ i ];
		set = setter( dt );
		arr = filled( 0, 10, dt );
		set( arr, 2, i+1 );
		v = arr[ 2 ];
		t.strictEqual( v, i+1, 'returns expected value for dtype: '+dt );
	}
	t.end();
});

tape( 'the function returns a function for setting an array element (unrecognized dtype)', function test( t ) {
	var arr;
	var set;
	var v;

	set = setter( 'foo' );
	arr = filled( 2, 10, 'generic' );
	set( arr, 2, 100 );
	v = arr[ 2 ];
	t.strictEqual( v, 100, 'returns expected value' );

	t.end();
});

tape( 'the returned function does not perform bounds checks', function test( t ) {
	var arr;
	var set;
	var dt;
	var v;
	var i;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt = DTYPES[ i ];
		set = setter( dt );
		arr = filled( 0, 10, dt );
		set( arr, 20, i+1 );
		v = arr[ 20 ];
		if ( dt === 'generic' ) {
			t.strictEqual( v, i+1, 'returns expected value for dtype: '+dt );
		} else {
			t.strictEqual( v, void 0, 'returns expected value for dtype: '+dt );
		}
	}
	t.end();
});

tape( 'the returned function does not perform bounds checks (unrecognized dtype)', function test( t ) {
	var arr;
	var set;
	var v;

	set = setter( 'foo' );
	arr = filled( 0, 10, 'generic' );
	set( arr, 20, 100 );
	v = arr[ 20 ];
	t.strictEqual( v, 100, 'returns expected value' );

	t.end();
});
