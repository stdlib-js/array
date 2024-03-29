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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var ctors = require( './../../ctors' );
var gzeros = require( './../../base/zeros' );
var defaults = require( './../../defaults' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );


// MAIN //

/**
* Creates a zero-filled array having a specified length.
*
* @param {NonNegativeInteger} length - array length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a recognized data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = zeros( 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var arr = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*/
function zeros( length ) {
	var dtype;
	var ctor;
	if ( !isNonNegativeInteger( length ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', length ) );
	}
	if ( arguments.length > 1 ) {
		dtype = arguments[ 1 ];
	} else {
		dtype = DEFAULT_DTYPE;
	}
	if ( dtype === 'generic' ) {
		return gzeros( length );
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a recognized data type. Value: `%s`.', dtype ) );
	}
	return new ctor( length ); // WARNING: we assume that, apart from 'generic', the constructors for supported array data types are zero-filled by default
}


// EXPORTS //

module.exports = zeros;
