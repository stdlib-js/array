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

var Complex64Array = require( './../../../complex64' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var last = require( './../lib' );

// Create a complex number array:
var arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Return the last element:
var out = last( arr );
// returns <Complex64>

var re = realf( out );
// returns 5.0

var im = imagf( out );
// returns 6.0

console.log( '%d + %di', re, im );
// => '5 + 6i'
