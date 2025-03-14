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
var isArrayLike = require( '@stdlib/assert/is-array-like' );
var Proxy = require( '@stdlib/proxy/ctor' );
var arraylike2object = require( './../../base/arraylike2object' );
var assign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var setElementWrapper = require( './set_element_wrapper.js' );
var getArrayWrapper = require( './get_array_wrapper.js' );
var hasProxySupport = require( './has_proxy_support.js' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var validator = require( './validator.js' );
var ctor = require( './ctor.js' );
var get = require( './get.js' );
var set = require( './set.js' );


// MAIN //

/**
* Returns a function for converting an array to an object supporting fancy indexing.
*
* @param {Options} options - function options
* @param {boolean} [options.strict=false] - boolean indicating whether to enforce strict bounds checking by default
* @param {Function} [options.cache] - default cache for resolving array index objects
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function for converting an array to an object supporting fancy indexing
*
* @example
* var array2fancy = factory();
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var y = array2fancy( x );
* // returns <Array>
*
* var z = y[ '1::2' ];
* // returns [ 2, 4, 6 ]
*
* var len = z.length;
* // returns 3
*
* var v = z[ 0 ];
* // returns 2
*
* v = z[ 1 ];
* // returns 4
*
* v = z[ 2 ];
* // returns 6
*/
function factory() {
	var OPTIONS;
	var err;

	OPTIONS = defaults();
	if ( arguments.length ) {
		err = validate( OPTIONS, arguments[ 0 ] );
		if ( err ) {
			throw err;
		}
	}
	return array2fancy;

	/**
	* Converts an array to an object supporting fancy indexing.
	*
	* @private
	* @param {ArrayLike} x - input array
	* @param {Options} [options] - function options
	* @param {boolean} [options.strict] - boolean indicating whether to enforce strict bounds checking
	* @param {Function} [options.cache] - cache for resolving array index objects
	* @throws {TypeError} first argument must be array-like
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {ArrayLike} fancy array
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var y = array2fancy( x );
	* // returns <Array>
	*
	* var z = y[ '1::2' ];
	* // returns [ 2, 4, 6 ]
	*
	* var len = z.length;
	* // returns 3
	*
	* var v = z[ 0 ];
	* // returns 2
	*
	* v = z[ 1 ];
	* // returns 4
	*
	* v = z[ 2 ];
	* // returns 6
	*/
	function array2fancy( x ) {
		var opts;
		var err;
		var arr;
		var dt;
		var o;
		if ( !isArrayLike( x ) && !isCollection( x ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be array-like. Value: `%s`.', x ) );
		}
		if ( hasProxySupport ) {
			opts = assign( {}, OPTIONS );
			if ( arguments.length > 1 ) {
				err = validate( opts, arguments[ 1 ] );
				if ( err ) {
					throw err;
				}
			}
			arr = arraylike2object( x );
			dt = arr.dtype || '';
			o = {
				'ref': x,
				'dtype': dt,
				'getter': arr.accessors[ 0 ],
				'setter': arr.accessors[ 1 ],
				'preSetElement': setElementWrapper( dt ),
				'postGetArray': getArrayWrapper( array2fancy, opts ),
				'cache': opts.cache,
				'strict': opts.strict,
				'validator': validator( dt ),
				'array2fancy': array2fancy,
				'ctor': new Proxy( x.constructor || Array, {
					'construct': ctor( array2fancy, opts )
				})
			};
			return new Proxy( x, {
				'get': get( o ),
				'set': set( o )
			});
		}
		// TODO: replace with `@stdlib/console/warn` (or equivalent once available)
		console.warn( 'WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available.' ); // eslint-disable-line no-console
		return x;
	}
}


// EXPORTS //

module.exports = factory;
