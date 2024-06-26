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
var logEach = require( '@stdlib/console/log-each' );
var BooleanArray = require( './../lib' );

// Create a boolean array by specifying a length:
var out = new BooleanArray( 3 );
logEach( '%s', out );

// Create a boolean array from an array of booleans:
var arr = [ true, false, true ];
out = new BooleanArray( arr );
logEach( '%s', out );

// Create a boolean array from an array buffer:
arr = new Uint8Array( [ 1, 0, 1, 1, 0, 1 ] );
out = new BooleanArray( arr.buffer );
logEach( '%s', out );

// Create a boolean array from an array buffer view:
arr = new Uint8Array( [ 1, 0, 1, 1, 0, 1 ] );
out = new BooleanArray( arr.buffer, 1, 2 );
logEach( '%s', out );

console.log( '%s', false );
