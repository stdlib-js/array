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
var zeros = require( './../../../zeros' );
var Slice = require( '@stdlib/slice/ctor' );
var sliceAssign = require( './../lib' );

var x = zeroTo( 10, 'generic' );
// returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

var y = zeros( 10, 'generic' );
// returns [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

var s = new Slice();
var out = sliceAssign( x, y, s, false );
console.log( out );
// => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( null, null, -2 );
out = sliceAssign( x, y, s, false );
console.log( out );
// => [ 0, 4, 0, 3, 0, 2, 0, 1, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( -2, null, -2 );
out = sliceAssign( x, y, s, false );
console.log( out );
// => [ 4, 0, 3, 0, 2, 0, 1, 0, 0, 0 ]

x = zeroTo( 6, 'generic' );
// returns [ 0, 1, 2, 3, 4, 5 ]

y = zeros( 10, 'generic' );
s = new Slice( 2, -2 );
out = sliceAssign( x, y, s, false );
console.log( out );
// => [ 0, 0, 0, 1, 2, 3, 4, 5, 0, 0 ]

x = zeroTo( 3, 'generic' );
// returns [ 0, 1, 2 ]

y = zeros( 10, 'generic' );
s = new Slice( 2, 5 );
out = sliceAssign( x, y, s, false );
console.log( out );
// => [ 0, 0, 0, 1, 2, 0, 0, 0, 0, 0 ]

x = zeroTo( 3, 'generic' );
// returns [ 0, 1, 2 ]

y = zeros( 10, 'generic' );
s = new Slice( 4, 1, -1 );
out = sliceAssign( x, y, s, false );
console.log( out );
// => [ 0, 0, 2, 1, 0, 0, 0, 0, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( 5 );
out = sliceAssign( x, y, s, false );
console.log( out );
// => [ 0, 1, 2, 3, 4, 0, 0, 0, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( 5, null );
out = sliceAssign( x, y, s, false );
console.log( out );
// => [ 0, 0, 0, 0, 0, 0, 1, 2, 3, 4 ]
