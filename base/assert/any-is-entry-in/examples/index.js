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

var fromCodePoint = require( '@stdlib/string/from-code-point' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledBy = require( './../../../../filled-by' );
var anyIsEntryIn = require( './../lib' );

function randomObject() {
	var o = {};
	o[ fromCodePoint( 97+discreteUniform( 0, 25 ) ) ] = 0;
	return o;
}

var arr = filledBy( 10, 'generic', randomObject );
console.log( arr );

var bool = anyIsEntryIn( arr, 'a', 0 );
console.log( 'a: %s', bool );

bool = anyIsEntryIn( arr, 'b', 0 );
console.log( 'b: %s', bool );
