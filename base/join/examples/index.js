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

var Complex128Array = require( './../../../complex128' );
var Complex64Array = require( './../../../complex64' );
var Float64Array = require( './../../../float64' );
var AccessorArray = require( './../../../base/accessor' );
var join = require( './../lib' );

var x = [ 0, 1, 2, 3, 4, 5 ];
var s = join( x, ',' );
console.log( s );
// => '0,1,2,3,4,5'

x = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );
s = join( x, ',' );
console.log( s );
// => '0,1,2,3,4,5'

s = join( x, '-' );
console.log( s );
// => '0-1-2-3-4-5'

x = new AccessorArray( [ 1, 2, 3, 4 ] );
s = join( x, ',' );
console.log( s );
// => '1,2,3,4'

x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
s = join( x, ',' );
console.log( s );
// => '1 + 2i,3 + 4i,5 + 6i'

x = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0 ] );
s = join( x, ',' );
console.log( s );
// => '1 - 1i,2 - 2i'
