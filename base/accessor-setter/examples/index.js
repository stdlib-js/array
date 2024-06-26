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

var Complex128Array = require( './../../../complex128' );
var Complex64Array = require( './../../../complex64' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var zeroTo = require( './../../../base/zero-to' );
var dtype = require( './../../../dtype' );
var accessorSetter = require( './../lib' );

var arr = new Complex128Array( zeroTo( 10 ) );
accessorSetter( dtype( arr ) )( arr, 2, new Complex128( 100.0, 101.0 ) );

var v = arr.get( 2 );
// returns <Complex128>

console.log( '%s', v.toString() );
// => '100 + 101i'

arr = new Complex64Array( zeroTo( 10 ) );
accessorSetter( dtype( arr ) )( arr, 4, new Complex64( 102.0, 103.0 ) );

v = arr.get( 4 );
// returns <Complex64>

console.log( '%s', v.toString() );
// => '102 + 103i'
