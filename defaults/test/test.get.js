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
var defaults = require( './../lib/main.js' );
var get = require( './../lib/get.js' );


// VARIABLES //

var DEFAULTS = defaults();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof get, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a recognized setting, the function returns a default value', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		'dtypes.default',
		'dtypes.numeric',
		'dtypes.real',
		'dtypes.floating_point',
		'dtypes.real_floating_point',
		'dtypes.complex_floating_point',
		'dtypes.boolean',
		'dtypes.integer',
		'dtypes.signed_integer',
		'dtypes.unsigned_integer',
		'dtypes.index',
		'dtypes.integer_index',
		'dtypes.boolean_index',
		'dtypes.mask_index'
	];
	expected = [
		DEFAULTS.dtypes.default,
		DEFAULTS.dtypes.numeric,
		DEFAULTS.dtypes.real,
		DEFAULTS.dtypes.floating_point,
		DEFAULTS.dtypes.real_floating_point,
		DEFAULTS.dtypes.complex_floating_point,
		DEFAULTS.dtypes.boolean,
		DEFAULTS.dtypes.integer,
		DEFAULTS.dtypes.signed_integer,
		DEFAULTS.dtypes.unsigned_integer,
		DEFAULTS.dtypes.index,
		DEFAULTS.dtypes.integer_index,
		DEFAULTS.dtypes.boolean_index,
		DEFAULTS.dtypes.mask_index
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = get( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value. actual: '+actual+'. expected: '+expected[ i ]+'.' );
	}
	t.end();
});
