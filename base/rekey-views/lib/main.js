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
var objectKeys = require( '@stdlib/utils/keys' );


// MAIN //

/**
* Returns an array containing views with renamed keys for every element in a provided array.
*
* ## Notes
*
* -   The function returns views having only those keys which are present in a provided mapping object. Any keys which are not present in the provided mapping object, but are present in the original objects, are omitted during view creation.
* -   The function assumes that each object has the keys specified in a provided mapping object.
* -   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either an array element or a view will mutate the other.
*
* @param {ArrayLikeObject<Object>} arr - input array
* @param {Object} mapping - object mapping existing keys to new key names
* @returns {Array<Object>} output array
*
* @example
* var x = [
*     {
*         'x': 1,
*         'y': 2
*     },
*     {
*         'x': 3,
*         'y': 4
*     }
* ];
* var mapping = {
*     'x': 'a',
*     'y': 'b'
* };
*
* var out = rekeyViews( x, mapping );
* // returns [ <Object>, <Object> ]
*
* var v0 = out[ 0 ].toJSON();
* // returns { 'a': 1, 'b': 2 }
*
* var v1 = out[ 1 ].toJSON();
* // returns { 'a': 3, 'b': 4 }
*
* // Mutate the first element in the input array:
* x[ 0 ].x = 5;
*
* v0 = out[ 0 ].toJSON();
* // returns { 'a': 5, 'b': 2 }
*
* // Set a view property:
* out[ 1 ].b = 'beep';
*
* v1 = out[ 1 ].toJSON();
* // returns { 'a': 3, 'b': 'beep' }
*
* var y = x.slice();
* // returns [ { 'x': 5, 'y': 2 }, { 'x': 3, 'y': 'beep' } ]
*/
function rekeyViews( arr, mapping ) {
	var getter;
	var okeys;
	var nkeys;
	var out;
	var M;
	var N;
	var i;

	M = arr.length;
	if ( M < 1 ) {
		return [];
	}
	// Resolve the list of old key names:
	okeys = objectKeys( mapping );
	N = okeys.length;

	// Resolve the list of new key names:
	nkeys = [];
	for ( i = 0; i < N; i++ ) {
		nkeys.push( mapping[ okeys[ i ] ] );
	}
	// Resolve the accessor for the input array:
	getter = resolveGetter( arr );

	// eslint-disable-next-line stdlib/jsdoc-typedef-typos
	/**
	* Constructor for creating a composite view.
	*
	* @private
	* @constructor
	* @param {NonNegativeInteger} i - element index
	* @returns {Datum} datum instance
	*/
	function Datum( i ) {
		setNonEnumerableReadOnly( this, '_i', i );
		return this;
	}

	// Define accessors for each field...
	for ( i = 0; i < N; i++ ) {
		setReadWriteAccessor( Datum.prototype, nkeys[ i ], getValue( okeys[ i ] ), setValue( okeys[ i ] ) ); // eslint-disable-line max-len
	}

	// Ensure that the returned array correctly serializes to JSON:
	setNonEnumerableReadOnly( Datum.prototype, 'toJSON', toJSON );

	// Create a list of composite views...
	out = [];
	for ( i = 0; i < M; i++ ) {
		out.push( new Datum( i ) );
	}
	return out;

	/**
	* Returns an accessor for returning the value associated with a field.
	*
	* @private
	* @param {string} key - field name
	* @returns {Function} accessor
	*/
	function getValue( key ) {
		return get;

		/**
		* Returns the value associated with a field.
		*
		* @private
		* @returns {*} result
		*/
		function get() {
			return getter( arr, this._i )[ key ];
		}
	}

	/**
	* Returns an accessor for setting the value associated with a field.
	*
	* @private
	* @param {string} key - field name
	* @returns {Function} accessor
	*/
	function setValue( key ) {
		return set;

		/**
		* Sets the value associated with a field.
		*
		* @private
		* @param {*} value - value to set
		*/
		function set( value ) {
			getter( arr, this._i )[ key ] = value;
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
		for ( i = 0; i < N; i++ ) {
			k = nkeys[ i ];
			out[ k ] = this[ k ];
		}
		return out;
	}
}


// EXPORTS //

module.exports = rekeyViews;
