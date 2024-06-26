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
var dtypes = require( './../../dtypes' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Int16Array = require( './../../int16' );
var Int32Array = require( './../../int32' );
var Int8Array = require( './../../int8' );
var Uint16Array = require( './../../uint16' );
var Uint32Array = require( './../../uint32' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );
var Complex64Array = require( './../../complex64' );
var Complex128Array = require( './../../complex128' );
var BooleanArray = require( './../../bool' );
var isFunction = require( '@stdlib/assert/is-function' );
var ctors = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctors, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns array constructors', function test( t ) {
	var expected;
	var dtypes;
	var ctor;
	var i;

	dtypes = [
		'float64',
		'float32',
		'generic',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c',
		'complex64',
		'complex128',
		'bool'
	];
	expected = [
		Float64Array,
		Float32Array,
		Array, // TODO: explicitly require
		Int16Array,
		Int32Array,
		Int8Array,
		Uint16Array,
		Uint32Array,
		Uint8Array,
		Uint8ClampedArray,
		Complex64Array,
		Complex128Array,
		BooleanArray
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		ctor = ctors( dtypes[ i ] );
		t.strictEqual( ctor, expected[ i ], 'returns expected value for ' + dtypes[ i ] );
	}
	t.end();
});

tape( 'the function returns a constructor for each supported array data type', function test( t ) {
	var DTYPES;
	var ctor;
	var i;

	DTYPES = dtypes();
	for ( i = 0; i < DTYPES.length; i++ ) {
		ctor = ctors( DTYPES[ i ] );

		// Note: this is a weak test for a "constructor"
		t.strictEqual( isFunction( ctor ), true, 'returns a function for ' + DTYPES[ i ] );
	}
	t.end();
});

tape( 'if provided an unknown/unsupported data type, the function returns `null`', function test( t ) {
	var dtypes;
	var i;

	dtypes = [
		'binary',
		'buffer',
		'buf',
		'float',
		'double',
		'single',
		'int',
		'integer',
		'uint',
		'uinteger',
		'byte',
		'bits'
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		t.strictEqual( ctors( dtypes[i] ), null, 'returns expected value for ' + dtypes[ i ] );
	}
	t.end();
});
