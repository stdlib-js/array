/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var zeroTo = require( './../../../base/zero-to' );
var accessors = require( './../lib' );

// Create an array:
var x = new Complex64Array( zeroTo( 10 ) );

// Get accessor functions for retrieving array elements:
var obj = accessors( x );
// returns {...}

// Check whether the array supports the accessor protocol:
var bool = obj.accessorProtocol;
// returns true

console.log( 'Accessor protocol: %s', bool );

// Retrieve an array element:
var v = obj.accessors[ 0 ]( x, 1 );
// returns <Complex64>

console.log( 'x[1] = %s', v.toString() );
