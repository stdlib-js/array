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

var contains = require( './../../../../base/assert/contains' ).factory;
var dtypes = require( './../../../../dtypes' );


// MAIN //

/**
* Tests whether an input value is a supported array floating-point data type.
*
* @name isFloatingPointDataType
* @type {Function}
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is a supported array floating-point data type
*
* @example
* var bool = isFloatingPointDataType( 'float32' );
* // returns true
*
* bool = isFloatingPointDataType( 'float64' );
* // returns true
*
* bool = isFloatingPointDataType( 'generic' );
* // returns false
*
* bool = isFloatingPointDataType( 'int16' );
* // returns false
*
* bool = isFloatingPointDataType( 'int32' );
* // returns false
*
* bool = isFloatingPointDataType( 'int8' );
* // returns false
*
* bool = isFloatingPointDataType( 'uint16' );
* // returns false
*
* bool = isFloatingPointDataType( 'uint32' );
* // returns false
*
* bool = isFloatingPointDataType( 'uint8' );
* // returns false
*
* bool = isFloatingPointDataType( 'uint8c' );
* // returns false
*
* bool = isFloatingPointDataType( 'foo' );
* // returns false
*/
var isFloatingPointDataType = contains( dtypes( 'floating_point' ) );


// EXPORTS //

module.exports = isFloatingPointDataType;
