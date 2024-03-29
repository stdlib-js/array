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

var zeroTo = require( './../../../base/zero-to' );
var toReversed = require( './../lib' );

var x = zeroTo( 6 );
console.log( x );
// => [ 0, 1, 2, 3, 4, 5 ]

var y = toReversed( x );
console.log( y );
// => [ 5, 4, 3, 2, 1, 0 ]

var z = toReversed( y );
console.log( z );
// => [ 0, 1, 2, 3, 4, 5 ]
