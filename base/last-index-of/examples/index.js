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

var lastIndexOf = require( './../lib' );

var x = [ 'foo', 'bar', 'beep', 'boop', 'foo', 'bar' ];

var idx = lastIndexOf( x, 'beep', 5 );
console.log( idx );
// => 2

idx = lastIndexOf( x, 'bop', 5 );
console.log( idx );
// => -1

idx = lastIndexOf( x, 'foo', 5 );
console.log( idx );
// => 4

idx = lastIndexOf( x, 'foo', -3 );
console.log( idx );
// => 0

idx = lastIndexOf( x, 'foo', -50 );
console.log( idx );
// => -1
