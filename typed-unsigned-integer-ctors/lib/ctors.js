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

// MODULES //

var Uint16Array = require( './../../uint16' );
var Uint32Array = require( './../../uint32' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );


// MAIN //

// Mapping from data types to constructors...
var ctors = {
	'uint16': Uint16Array,
	'uint32': Uint32Array,
	'uint8': Uint8Array,
	'uint8c': Uint8ClampedArray
};


// EXPORTS //

module.exports = ctors;