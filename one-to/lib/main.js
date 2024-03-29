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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var base = require( './../../base/one-to' );
var zeros = require( './../../zeros' );
var defaults = require( './../../defaults' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );


// MAIN //

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param {NonNegativeInteger} n - number of elements
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a recognized data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = oneTo( 2 );
* // returns <Float64Array>[ 1.0, 2.0 ]
*
* @example
* var arr = oneTo( 2, 'float32' );
* // returns <Float32Array>[ 1.0, 2.0 ]
*/
function oneTo( n ) {
	var dtype;
	if ( !isNonNegativeInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', n ) );
	}
	if ( arguments.length > 1 ) {
		dtype = arguments[ 1 ];
		if ( dtype === 'generic' ) {
			return base( n );
		}
	} else {
		dtype = DEFAULT_DTYPE;
	}
	return base.assign( zeros( n, dtype ), 1, 0 ); // defer dtype validation to `zeros`
}


// EXPORTS //

module.exports = oneTo;
