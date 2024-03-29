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

var filled = require( './../../../filled' );
var resolveGetter = require( './../lib' );

var arr = filled( 1.0, 10, 'float64' );
var v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );

arr = filled( 2.0, 10, 'float32' );
v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );

arr = filled( 3, 10, 'int32' );
v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );

arr = filled( 4, 10, 'int16' );
v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );

arr = filled( 5, 10, 'int8' );
v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );

arr = filled( 6, 10, 'uint32' );
v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );

arr = filled( 7, 10, 'uint16' );
v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );

arr = filled( 8, 10, 'uint8' );
v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );

arr = filled( 9, 10, 'uint8c' );
v = resolveGetter( arr )( arr, 2 );
console.log( 'v: %d', v );
