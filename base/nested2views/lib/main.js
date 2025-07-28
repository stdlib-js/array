/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable no-invalid-this */

'use strict';

// MODULES //

var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadWriteAccessor = require( '@stdlib/utils/define-read-write-accessor' );
var resolveGetter = require( './../../../base/resolve-getter' );
var accessors = require( './../../../base/accessors' );
var copy = require( './../../../base/copy' );


// MAIN //

/**
* Converts each nested array to a composite view.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length.
* -   The number of provided array labels should equal the length of each nested array.
* -   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either a nested array or a view will mutate the other.
*
* @param {Collection<Collection>} arr - input array
* @param {ArrayLikeObject<string>} fields - list of field names
* @returns {Array<Object>} output array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var fields = [ 'x', 'y' ];
*
* var out = nested2views( x, fields );
* // returns [ <Object>, <Object> ]
*
* var v0 = out[ 0 ].toJSON();
* // returns { 'x': 1, 'y': 2 }
*
* var v1 = out[ 1 ].toJSON();
* // returns { 'x': 3, 'y': 4 }
*
* // Mutate the first nested array:
* x[ 0 ][ 0 ] = 5;
*
* v0 = out[ 0 ].toJSON();
* // returns { 'x': 5, 'y': 2 }
*
* // Set a view property:
* out[ 1 ].y = 'beep';
*
* v1 = out[ 1 ].toJSON();
* // returns { 'x': 3, 'y': 'beep' }
*
* var y = x.slice();
* // returns [ [ 5, 2 ], [ 3, 'beep' ] ]
*/
function nested2views( arr, fields ) {
	var oget;
	var keys;
	var out;
	var M;
	var N;
	var i;

	M = arr.length;
	if ( M < 1 ) {
		return [];
	}
	oget = resolveGetter( arr );
	N = oget( arr, 0 ).length;
	if ( N < 1 ) {
		return [];
	}
	// Create a copy of provided fields to prevent external mutation:
	keys = copy( fields );

	// eslint-disable-next-line stdlib/jsdoc-typedef-typos
	/**
	* Constructor for creating a composite view.
	*
	* @private
	* @constructor
	* @param {Collection} arr - nested array
	* @returns {Datum} datum instance
	*/
	function Datum( arr ) {
		var acc = accessors( arr ).accessors;
		setNonEnumerableReadOnly( this, '_arr', arr );
		setNonEnumerableReadOnly( this, '_get', acc[ 0 ] );
		setNonEnumerableReadOnly( this, '_set', acc[ 1 ] );
		return this;
	}

	// Define accessors for each field...
	for ( i = 0; i < N; i++ ) {
		setReadWriteAccessor( Datum.prototype, keys[ i ], getValue( i ), setValue( i ) ); // eslint-disable-line max-len
	}

	// Ensure that the returned array correctly serializes to JSON:
	setNonEnumerableReadOnly( Datum.prototype, 'toJSON', toJSON );

	// Create a list of composite views...
	out = [];
	for ( i = 0; i < M; i++ ) {
		out.push( new Datum( oget( arr, i ) ) );
	}
	return out;

	/**
	* Returns an accessor for returning the value associated with a field.
	*
	* @private
	* @param {NonNegativeInteger} idx - field index
	* @returns {Function} accessor
	*/
	function getValue( idx ) {
		return get;

		/**
		* Returns the value associated with a field.
		*
		* @private
		* @returns {*} result
		*/
		function get() {
			return this._get( this._arr, idx );
		}
	}

	/**
	* Returns an accessor for setting the value associated with a field.
	*
	* @private
	* @param {NonNegativeInteger} idx - field index
	* @returns {Function} accessor
	*/
	function setValue( idx ) {
		return set;

		/**
		* Sets the value associated with a field.
		*
		* @private
		* @param {*} value - value to set
		*/
		function set( value ) {
			this._set( this._arr, idx, value );
		}
	}

	/**
	* Serializes a datum to JSON.
	*
	* @private
	* @returns {Object} JSON object
	*/
	function toJSON() {
		var out;
		var k;
		var i;

		out = {};
		for ( i = 0; i < M; i++ ) {
			k = keys[ i ];
			out[ k ] = this[ k ];
		}
		return out;
	}
}


// EXPORTS //

module.exports = nested2views;
