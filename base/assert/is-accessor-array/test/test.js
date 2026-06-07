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
var constructorName = require( '@stdlib/utils/constructor-name' );
var Int8Array = require( './../../../../int8' );
var Uint8Array = require( './../../../../uint8' );
var Uint8ClampedArray = require( './../../../../uint8c' );
var Int16Array = require( './../../../../int16' );
var Uint16Array = require( './../../../../uint16' );
var Int32Array = require( './../../../../int32' );
var Uint32Array = require( './../../../../uint32' );
var Float32Array = require( './../../../../float32' );
var Float64Array = require( './../../../../float64' );
var Complex128Array = require( './../../../../complex128' );
var Complex64Array = require( './../../../../complex64' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var isAccessorArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAccessorArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an array-like object which supports the accessor protocol', function test( t ) {
	var values;
	var i;

	values = [
		new Complex128Array( 10 ),
		new Complex64Array( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAccessorArray( values[i] ), true, 'returns true when provided '+constructorName( values[i] ) );
	}
	t.end();
});

tape( 'the function returns `false` if provided an array-like object which does not support the accessor protocol', function test( t ) {
	var values;
	var i;

	values = [
		[],
		{ 'length': 10 }, // eslint-disable-line object-curly-newline
		new Float64Array( 10 ),
		new Float32Array( 10 ),
		new Int32Array( 10 ),
		new Uint32Array( 10 ),
		new Int16Array( 10 ),
		new Uint16Array( 10 ),
		new Int8Array( 10 ),
		new Uint8Array( 10 ),
		new Uint8ClampedArray( 10 ),
		allocUnsafe( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAccessorArray( values[i] ), false, 'returns false when provided '+constructorName( values[i] ) );
	}
	t.end();
});
