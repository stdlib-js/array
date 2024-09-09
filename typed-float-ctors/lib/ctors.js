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

var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Complex128Array = require( './../../complex128' );
var Complex64Array = require( './../../complex64' );


// MAIN //

// Mapping from data types to constructors...
var ctors = {
	'float64': Float64Array,
	'float32': Float32Array,
	'complex128': Complex128Array,
	'complex64': Complex64Array
};


// EXPORTS //

module.exports = ctors;
