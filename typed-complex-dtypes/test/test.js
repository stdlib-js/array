/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var dt = require( './../../dtypes' );
var dtypes = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of complex typed array data types', function test( t ) {
	var expected;
	var actual;

	expected = dt( 'complex_floating_point' );
	actual = dtypes();

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
