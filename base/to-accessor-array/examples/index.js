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

var Complex128Array = require( './../../../complex128' );
var toAccessorArray = require( './../lib' );

// Define a function for printing the contents of an array and which assumes accessor protocol support:
function printArray( name, x ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		console.log( '%s[%d] = %s', name, i, x.get( i ).toString() );
	}
}

// Create an array of complex numbers:
var buf = [ 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0 ];
var cmplx = new Complex128Array( buf );

// Create an array of the real components:
var real = [ 0, 0, 1, 2, 0, 0, 0, 0, 3, 0 ];

// Ensure the arrays support the accessor protocol to allow for uniform iteration:
cmplx = toAccessorArray( cmplx );
real = toAccessorArray( real );

// Print the contents of each array:
printArray( 'complx', cmplx );
printArray( 'real', real );
