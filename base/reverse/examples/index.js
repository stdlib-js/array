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

var Float64Array = require( './../../../float64' );
var zeroTo = require( './../../../base/zero-to' );
var reverse = require( './../lib' );

var x = new Float64Array( zeroTo( 6 ) );
console.log( x );
// => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var y = reverse( x );
console.log( y );
// => <Float64Array>[ 5.0, 4.0, 3.0, 2.0, 1.0, 0.0 ]

var z = reverse( y );
console.log( z );
// => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]
