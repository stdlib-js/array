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

var isMostlySafeCast = require( './../../base/assert/is-mostly-safe-data-type-cast' );
var isRealDataType = require( './../../base/assert/is-real-data-type' );
var isComplexDataType = require( './../../base/assert/is-complex-floating-point-data-type' );
var isCollection = require( '@stdlib/assert/is-collection' );
var base = require( './../../base/put' );
var dtype = require( './../../dtype' );
var convert = require( './../../convert' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Replaces specified elements of an array with provided values.
*
* @param {Collection} x - input array
* @param {IntegerArray} indices - list of indices
* @param {Collection} values - values to set
* @param {Options} [options] - function options
* @param {string} [options.mode='normalize'] - index mode
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a collection
* @throws {TypeError} third argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {Error} must provide valid options
* @throws {Error} third argument must be broadcast compatible with the second argument
* @throws {TypeError} third argument cannot be safely cast to the data type of the first argument
* @returns {Collection} input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, values );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 30 ];
*
* var out = put( x, indices, values );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
function put( x, indices, values ) {
	var opts;
	var err;
	var xdt;
	var vdt;
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	if ( !isCollection( indices ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', indices ) );
	}
	if ( !isCollection( values ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be an array-like object. Value: `%s`.', values ) );
	}
	opts = defaults();
	if ( arguments.length > 3 ) {
		err = validate( opts, arguments[ 3 ] );
		if ( err ) {
			throw err;
		}
	}
	xdt = dtype( x ) || 'generic';
	vdt = dtype( values ) || 'generic';

	// Safe casts are always allowed and allow same kind casts (i.e., downcasts) only when the input array data type is floating-point...
	if ( !isMostlySafeCast( vdt, xdt ) ) {
		throw new TypeError( format( 'invalid argument. Third argument cannot be safely cast to the input array data type. Data types: [%s, %s].', vdt, xdt ) );
	}
	// When performing a real-to-complex assignment, interpret the real-valued array as containing real components with implied imaginary components equal to zero and explicitly convert to a complex-valued array...
	if ( isComplexDataType( xdt ) && isRealDataType( vdt ) ) {
		values = convert( values, xdt );
	}
	// Replace values in the input array:
	return base( x, indices, values, opts.mode );
}


// EXPORTS //

module.exports = put;
