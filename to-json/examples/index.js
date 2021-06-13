/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Int32Array = require( './../../int32' );
var Uint32Array = require( './../../uint32' );
var Int16Array = require( './../../int16' );
var Uint16Array = require( './../../uint16' );
var Int8Array = require( './../../int8' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );
var toJSON = require( './../lib' );

var arr = new Float64Array( [ 5.0, 3.0 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Float64Array',
		'data': [ 5.0, 3.0 ]
	}
*/

arr = new Float32Array( [ 5.0, -3.0 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Float32Array',
		'data': [ 5.0, -3.0 ]
	}
*/

arr = new Int32Array( [ -5, 3 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Int32Array',
		'data': [ -5, 3 ]
	}
*/

arr = new Uint32Array( [ 5, 3 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Uint32Array',
		'data': [ 5, 3 ]
	}
*/

arr = new Int16Array( [ -5, 3 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Int16Array',
		'data': [ -5, 3 ]
	}
*/

arr = new Uint16Array( [ 5, 3 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Uint16Array',
		'data': [ 5, 3 ]
	}
*/

arr = new Int8Array( [ -5, 3 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Int8Array',
		'data': [ -5, 3 ]
	}
*/

arr = new Uint8Array( [ 5, 3 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Uint8Array',
		'data': [ 5, 3 ]
	}
*/

arr = new Uint8ClampedArray( [ 5, 3 ] );
console.log( toJSON( arr ) );
/* =>
	{
		'type': 'Uint8ClampedArray',
		'data': [ 5, 3 ]
	}
*/
