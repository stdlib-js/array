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

/* eslint-disable object-curly-newline */

'use strict';

var Int8Array = require( './../../../../int8' );
var Uint8Array = require( './../../../../uint8' );
var Uint8ClampedArray = require( './../../../../uint8c' );
var Int16Array = require( './../../../../int16' );
var Uint16Array = require( './../../../../uint16' );
var Int32Array = require( './../../../../int32' );
var Uint32Array = require( './../../../../uint32' );
var Float32Array = require( './../../../../float32' );
var Float64Array = require( './../../../../float64' );
var Complex128Array = require( './../../../../complex128' );
var Complex64Array = require( './../../../../complex64' );
var BooleanArray = require( './../../../../bool' );
var isBooleanArray = require( './../lib' );

console.log( isBooleanArray( new BooleanArray( 10 ) ) );
// => true

console.log( isBooleanArray( new Complex64Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Complex128Array( 10 ) ) );
// => false

console.log( isBooleanArray( [] ) );
// => false

console.log( isBooleanArray( new Float64Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Float32Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Int32Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Uint32Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Int16Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Uint16Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Int8Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Uint8Array( 10 ) ) );
// => false

console.log( isBooleanArray( new Uint8ClampedArray( 10 ) ) );
// => false

console.log( isBooleanArray( { 'length': 0 } ) );
// => false
