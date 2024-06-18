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
var scalar2array = require( './../../from-scalar' );
var put = require( './../../put' );
var format = require( '@stdlib/string/format' );
var prop2array = require( './prop2array.js' );
var errMessage = require( './error_message.js' );


// MAIN //

/**
* Replaces the elements specified by an array index.
*
* @private
* @param {Object} target - target object
* @param {string} property - index string
* @param {*} value - new value(s)
* @param {Object} ctx - context object
* @param {string} ctx.dtype - array data type
* @param {Object} ctx.cache - cache for resolving array index objects
* @param {Function} ctx.validator - function for validating new values
* @param {(Function|null)} ctx.preSetElement - function for normalizing new values (if necessary)
* @throws {Error} invalid array index
* @throws {RangeError} index exceeds array bounds
* @throws {Error} assigned value must be broadcast compatible with target array selection
* @throws {TypeError} assigned value cannot be safely cast to the target array data type
* @throws {TypeError} target array must have a supported data type
* @returns {boolean} boolean indicating whether assignment succeeded
*/
function setElements( target, property, value, ctx ) {
	var idx;
	var err;
	var v;

	idx = prop2array( property, ctx.cache );
	if ( isCollection( value ) ) {
		// When handling collections, we delegate to implementation APIs (see below) to perform argument validation (e.g., ensuring a (mostly) safe cast, broadcast compatibility, etc), so we just reassign the value here:
		v = value;
	} else {
		// When provided a "scalar", we need to check whether the value can be safely cast to the target array data type:
		err = ctx.validator( value, ctx.dtype );
		if ( err ) {
			throw err;
		}
		if ( ctx.preSetElement ) {
			v = ctx.preSetElement( value );
		} else {
			v = value;
		}
		// As the scalar can be safely cast, convert the scalar to an array having the same data type as the target array to allow for broadcasting during assignment:
		v = scalar2array( v, ctx.dtype );
	}
	if ( idx.type === 'int' ) {
		try {
			put( target, idx.data, v );
		} catch ( err ) {
			throw new err.constructor( errMessage( err.message ) );
		}
		return true;
	}
	if ( idx.type === 'bool' ) {
		// FIXME: where( idx.data, target, value );
		return false;
	}
	if ( idx.type === 'mask' ) {
		// FIXME: where( idx.data, value, target );
		return false;
	}
	throw new Error( format( 'invalid operation. Unrecognized array index type. Value: `%s`.', idx.type ) );
}


// EXPORTS //

module.exports = setElements;