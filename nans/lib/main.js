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

// MODULES //

var contains = require( './../../base/assert/contains' ).factory;
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var full = require( './../../full' );
var defaults = require( './../../defaults' );
var dtypes = require( './../../dtypes' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var Z128 = new Complex128( NaN, NaN );
var Z64 = new Complex64( NaN, NaN );
var DTYPES = dtypes( 'floating_point_and_generic' );
var isValidDType = contains( DTYPES );
var DEFAULT_DTYPE = defaults.get( 'dtypes.real_floating_point' );


// MAIN //

/**
* Creates an array filled with NaNs and having a specified length.
*
* @param {NonNegativeInteger} length - array length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a supported data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = nans( 2 );
* // returns <Float64Array>[ NaN, NaN ]
*
* @example
* var arr = nans( 2, 'float32' );
* // returns <Float32Array>[ NaN, NaN ]
*/
function nans( length ) {
	var dtype;
	var value;

	if ( arguments.length > 1 ) {
		dtype = arguments[ 1 ];
		if ( !isValidDType( dtype ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be one of the following: "%s". Value: `%s`.', DTYPES.join( '", "' ), dtype ) );
		}
	} else {
		dtype = DEFAULT_DTYPE;
	}
	if ( dtype === 'complex128' ) {
		value = Z128;
	} else if ( dtype === 'complex64' ) {
		value = Z64;
	} else {
		value = NaN;
	}
	return full( length, value, dtype );
}


// EXPORTS //

module.exports = nans;
