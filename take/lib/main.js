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

var isCollection = require( '@stdlib/assert/is-collection' );
var base = require( './../../base/take' );
var zeros = require( './../../zeros' );
var dtype = require( './../../dtype' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Takes elements from an array.
*
* @param {Collection} x - input array
* @param {IntegerArray} indices - list of indices
* @param {Options} [options] - function options
* @param {string} [options.mode='normalize'] - index mode
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {Error} must provide valid options
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var indices = [ 3, 1, 2, 0 ];
*
* var y = take( x, indices );
* // returns [ 4, 2, 3, 1 ]
*/
function take( x, indices ) {
	var opts;
	var err;
	var dt;
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	if ( !isCollection( indices ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', indices ) );
	}
	opts = defaults();
	if ( arguments.length > 2 ) {
		err = validate( opts, arguments[ 2 ] );
		if ( err ) {
			throw err;
		}
	}
	dt = dtype( x );
	if ( dt === 'generic' || dt === null ) {
		return base( x, indices, opts.mode );
	}
	return base.assign( x, indices, opts.mode, zeros( indices.length, dt ), 1, 0 ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = take;
