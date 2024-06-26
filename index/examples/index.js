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
var Int32Array = require( './../../int32' );
var BooleanArray = require( './../../bool' );
var ArrayIndex = require( './../lib' );

var x = new Uint8Array( [ 1, 0, 1, 0 ] );
var i = new ArrayIndex( x );
// returns <ArrayIndex>

var o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );

x = [ true, false, true, false ];
i = new ArrayIndex( x );
// returns <ArrayIndex>

o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );

x = new BooleanArray( [ true, false, true, false ] );
i = new ArrayIndex( x );
// returns <ArrayIndex>

o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );

x = new Int32Array( [ 1, 3, 4, 7 ] );
i = new ArrayIndex( x );
// returns <ArrayIndex>

o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );

x = [ 1, 3, 4, 7 ];
i = new ArrayIndex( x );
// returns <ArrayIndex>

o = ArrayIndex.get( i.id );
// returns {...}

console.log( 'Type: %s. Data type: %s.', o.type, o.dtype );
