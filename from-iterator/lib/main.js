/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isFunction = require( '@stdlib/assert/is-function' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isAccessorArray = require( './../../base/assert/is-accessor-array' );
var accessorSetter = require( './../../base/accessor-setter' );
var setter = require( './../../base/setter' );
var dtype = require( './../../dtype' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Creates (or fills) an array from an iterator.
*
* @param {Iterator} iterator - source iterator
* @param {Collection} [out] - output array
* @param {Function} [mapFcn] - function to invoke for each iterated value
* @param {*} [thisArg] - execution context
* @throws {TypeError} iterator argument must be an iterator
* @throws {TypeError} callback argument must be a function
* @returns {Collection} output array
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
*
* var iter = randu({
*     'iter': 10
* });
*
* var arr = iterator2array( iter );
* // returns <Array>
*/
function iterator2array() {
	var iterator;
	var thisArg;
	var fcn;
	var out;
	var len;
	var set;
	var dt;
	var i;
	var v;

	iterator = arguments[ 0 ];
	if ( arguments.length > 1 ) {
		if ( isCollection( arguments[ 1 ] ) ) {
			out = arguments[ 1 ];
			if ( arguments.length > 2 ) {
				fcn = arguments[ 2 ];
				if ( !isFunction( fcn ) ) {
					throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', fcn ) );
				}
				thisArg = arguments[ 3 ];
			}
		} else {
			fcn = arguments[ 1 ];
			if ( !isFunction( fcn ) ) {
				throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', fcn ) );
			}
			thisArg = arguments[ 2 ];
		}
	}
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.', iterator ) );
	}
	i = -1;
	if ( out === void 0 ) {
		out = [];
		if ( fcn ) {
			while ( true ) {
				i += 1;
				v = iterator.next();
				if ( v.done ) {
					break;
				}
				out.push( fcn.call( thisArg, v.value, i ) );
			}
			return out;
		}
		while ( true ) {
			v = iterator.next();
			if ( v.done ) {
				break;
			}
			out.push( v.value );
		}
		return out;
	}
	len = out.length;
	dt = dtype( out );
	if ( isAccessorArray( out ) ) {
		set = accessorSetter( dt );
	} else {
		set = setter( dt );
	}
	if ( fcn ) {
		while ( i < len-1 ) {
			i += 1;
			v = iterator.next();
			if ( v.done ) {
				break;
			}
			set( out, i, fcn.call( thisArg, v.value, i ) );
		}
		return out;
	}
	while ( i < len-1 ) {
		i += 1;
		v = iterator.next();
		if ( v.done ) {
			break;
		}
		set( out, i, v.value );
	}
	return out;
}


// EXPORTS //

module.exports = iterator2array;
