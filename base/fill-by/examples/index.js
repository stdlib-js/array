/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var constantFunction = require( '@stdlib/utils/constant-function' );
var Float64Array = require( './../../../float64' );
var zeroTo = require( './../../../base/zero-to' );
var fillBy = require( './../lib' );

var x = new Float64Array( zeroTo( 6 ) );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var y = fillBy( x, 0, 6, constantFunction( 10.0 ) );
console.log( y );
// => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]

y = fillBy( x, 0, 4, constantFunction( 0.0 ) );
console.log( y );
// => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 10.0, 10.0 ]

y = fillBy( x, 2, 6, constantFunction( 20.0 ) );
console.log( y );
// => <Float64Array>[ 0.0, 0.0, 20.0, 20.0, 20.0, 20.0 ]

y = fillBy( x, 2, 4, constantFunction( 30.0 ) );
console.log( y );
// => <Float64Array>[ 0.0, 0.0, 30.0, 30.0, 20.0, 20.0 ]
