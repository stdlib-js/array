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

var factory = require( './../../little-endian-factory' );


// MAIN //

/**
* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in little-endian byte order.
*
* @name Float64ArrayLE
* @constructor
* @type {Function}
* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or an iterable
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @throws {TypeError} if provided only one argument, the argument must be a valid argument
* @throws {TypeError} byte offset must be a nonnegative integer
* @throws {RangeError} must provide sufficient memory to accommodate byte offset and view length requirements
* @returns {Float64ArrayLE} typed array instance
*
* @example
* var arr = new Float64ArrayLE();
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 0
*
* @example
* var arr = new Float64ArrayLE( 2 );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var arr = new Float64ArrayLE( [ 1.0, 2.0 ] );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64ArrayLE( buf );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64ArrayLE( buf, 8 );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Float64ArrayLE( buf, 8, 2 );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 2
*/
var Float64ArrayLE = factory( 'float64' );


// EXPORTS //

module.exports = Float64ArrayLE;
