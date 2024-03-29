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

var Uint8Array = require( './../../uint8' );
var Int32Array = require( './../../int32' );
var array2fancy = require( './../lib' );

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = array2fancy( x );
// returns <Array>

// Slice retrieval:
var z = y[ '1::2' ];
console.log( z );
// => [ 2, 4, 6 ]

z = y[ '-2::-2' ];
console.log( z );
// => [ 5, 3, 1 ]

z = y[ '1:4' ];
console.log( z );
// => [ 2, 3, 4 ]

// Slice assignment:
y[ '4:1:-1' ] = 10;
z = y[ ':' ];
console.log( z );
// => [ 1, 2, 10, 10, 10, 6 ]

y[ '2:5' ] = [ -10, -9, -8 ];
z = y[ ':' ];
console.log( z );
// => [ 1, 2, -10, -9, -8, 6 ]

// Array index retrieval:
var idx = array2fancy.idx;

var i = idx( [ 1, 3, 4 ] ); // integer index array
z = y[ i ];
console.log( z );
// => [ 2, -9, -8 ]

i = idx( [ true, false, false, true, true, true ] ); // boolean array
z = y[ i ];
console.log( z );
// => [ 1, -9, -8, 6 ]

i = idx( new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] ) ); // mask array
z = y[ i ];
console.log( z );
// => [ 1, 2, -9, -8 ]

i = idx( new Int32Array( [ 0, 0, 1, 1, 2, 2 ] ) ); // integer index array
z = y[ i ];
console.log( z );
// => [ 1, 1, 2, 2, -10, -10 ]
