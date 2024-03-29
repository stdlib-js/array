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
* Tests whether an input value is a supported array numeric data type.
*
* @name isNumericDataType
* @type {Function}
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is a supported array numeric data type
*
* @example
* var bool = isNumericDataType( 'float32' );
* // returns true
*
* bool = isNumericDataType( 'float64' );
* // returns true
*
* bool = isNumericDataType( 'generic' );
* // returns false
*
* bool = isNumericDataType( 'int16' );
* // returns true
*
* bool = isNumericDataType( 'int32' );
* // returns true
*
* bool = isNumericDataType( 'int8' );
* // returns true
*
* bool = isNumericDataType( 'uint16' );
* // returns true
*
* bool = isNumericDataType( 'uint32' );
* // returns true
*
* bool = isNumericDataType( 'uint8' );
* // returns true
*
* bool = isNumericDataType( 'uint8c' );
* // returns true
*
* bool = isNumericDataType( 'foo' );
* // returns false
*/
var isNumericDataType = contains( dtypes( 'numeric' ) );


// EXPORTS //

module.exports = isNumericDataType;
