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
var sliceAssign = require( './../../base/fancy-slice-assign' );
var scalar2array = require( './../../from-scalar' );
var prop2slice = require( './prop2slice.js' );
var errMessage = require( './error_message.js' );


// MAIN //

/**
* Sets element values belonging to the array view specified by an indexing expression.
*
* @private
* @param {Object} target - target object
* @param {string} property - indexing expression
* @param {*} value - new value
* @param {Object} receiver - the proxy object or an object inheriting from the proxy
* @param {Object} ctx - context object
* @param {string} ctx.dtype - array data type
* @param {boolean} ctx.strict - boolean indicating whether to enforce strict bounds checking
* @param {Function} ctx.validator - function for validating new values
* @throws {Error} invalid slice operation
* @throws {RangeError} slice exceeds array bounds
* @throws {Error} assigned value must be broadcast compatible with target array view
* @throws {TypeError} assigned value cannot be safely cast to the target array data type
* @throws {TypeError} target array must have a supported data type
* @returns {boolean} boolean indicating whether assignment succeeded
*/
function setSlice( target, property, value, receiver, ctx ) {
	var err;
	var s;
	var v;

	s = prop2slice( target, property, ctx.strict );
	if ( s === null ) {
		// If unable to parse the property as an indexing expression, signal that we were unable to perform slice assignment:
		return false;
	}
	if ( isCollection( value ) ) {
		// When handling collections, we delegate to `sliceAssign` (see below) to perform argument validation (e.g., ensuring a (mostly) safe cast, broadcast compatibility, etc), so we just reassign the value here:
		v = value;
	} else {
		// When provided a "scalar", we need to check whether the value can be safely cast to the target array data type:
		err = ctx.validator( value, ctx.dtype );
		if ( err ) {
			throw err;
		}
		// As the scalar can be safely cast, convert the scalar to an array having the same data type as the target array to allow for broadcasting during slice assignment:
		v = scalar2array( value, ctx.dtype || 'generic' );
	}
	try {
		sliceAssign( v, receiver, s, ctx.strict );
	} catch ( err ) {
		throw new err.constructor( errMessage( err.message ) );
	}
	return true;
}


// EXPORTS //

module.exports = setSlice;
