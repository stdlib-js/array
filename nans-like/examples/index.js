/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var dtypes = require( './../../typed-float-dtypes' );
var zeros = require( './../../zeros' );
var nansLike = require( './../lib' );

// Create a zero-filled array:
var x = zeros( 4, 'complex128' );

// Get a list of array data types:
var dt = dtypes();

// Generate filled arrays...
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
	y = nansLike( x, dt[ i ] );
	console.log( y );
}
