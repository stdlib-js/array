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

var zeroTo = require( './../../../zero-to' );
var Slice = require( '@stdlib/slice/ctor' );
var slice = require( './../lib' );

var x = zeroTo( 10, 'generic' );
// returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

var s = new Slice();
var y = slice( x, s, false );
console.log( y );
// => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

s = new Slice( null, null, -2 );
y = slice( x, s, false );
console.log( y );
// => [ 9, 7, 5, 3, 1 ]

s = new Slice( -2, null, -2 );
y = slice( x, s, false );
console.log( y );
// => [ 8, 6, 4, 2, 0 ]

s = new Slice( 2, -2 );
y = slice( x, s, false );
console.log( y );
// => [ 2, 3, 4, 5, 6, 7 ]

s = new Slice( 2, 5 );
y = slice( x, s, false );
console.log( y );
// => [ 2, 3, 4 ]

s = new Slice( 4, 1, -1 );
y = slice( x, s, false );
console.log( y );
// => [ 4, 3, 2 ]

s = new Slice( 5 );
y = slice( x, s, false );
console.log( y );
// => [ 0, 1, 2, 3, 4 ]

s = new Slice( 5, null );
y = slice( x, s, false );
console.log( y );
// => [ 5, 6, 7, 8, 9 ]
