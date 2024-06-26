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

// MODULES //

var Int8Array = require( './../../int8' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );
var Int16Array = require( './../../int16' );
var Uint16Array = require( './../../uint16' );
var Int32Array = require( './../../int32' );
var Uint32Array = require( './../../uint32' );
var Float32Array = require( './../../float32' );
var Float64Array = require( './../../float64' );
var Complex64Array = require( './../../complex64' );
var Complex128Array = require( './../../complex128' );
var BooleanArray = require( './../../bool' );


// MAIN //

var CTORS = [
	[ Float64Array, 'Float64Array' ],
	[ Float32Array, 'Float32Array' ],
	[ Int32Array, 'Int32Array' ],
	[ Uint32Array, 'Uint32Array' ],
	[ Int16Array, 'Int16Array' ],
	[ Uint16Array, 'Uint16Array' ],
	[ Int8Array, 'Int8Array' ],
	[ Uint8Array, 'Uint8Array' ],
	[ Uint8ClampedArray, 'Uint8ClampedArray' ],
	[ Complex64Array, 'Complex64Array' ],
	[ Complex128Array, 'Complex128Array' ],
	[ BooleanArray, 'BooleanArray' ]
];


// EXPORTS //

module.exports = CTORS;
