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

'use strict';

// MODULES //

var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadWriteAccessor = require( '@stdlib/utils/define-read-write-accessor' );
var accessors = require( './../../../base/accessors' );
var copy = require( './../../../base/copy' );


// MAIN //

/**
* Zips one or more arrays to an array of composite views.
*
* ## Notes
*
* -   The function assumes that the list of arrays to be zipped all have the same length.
* -   The list of provided array labels should equal the number of arrays to be zipped.
* -   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either an input array or a view will mutate the other.
*
* @param {Collection<Collection>} arrays - list of arrays to be zipped
* @param {ArrayLikeObject<string>} labels - list of array labels
* @returns {Array<Object>} output array
*
* @example
* var x = [ 1, 2, 3 ];
* var y = [ 'a', 'b', 'c' ];
*
* var labels = [ 'x', 'y' ];
*
* var z = zip2views( [ x, y ], labels );
* // returns [ <Object>, <Object>, <Object> ]
*
* var v0 = z[ 0 ].toJSON();
* // returns { 'x': 1, 'y': 'a' }
*
* var v1 = z[ 1 ].toJSON();
* // returns { 'x': 2, 'y': 'b' }
*
* var v2 = z[ 2 ].toJSON();
* // returns { 'x': 3, 'y': 'c' }
*
* // Mutate one of the input arrays:
* x[ 0 ] = 5;
*
* v0 = z[ 0 ].toJSON();
* // returns { 'x': 5, 'y': 'a' }
*
* // Set a view property:
* z[ 1 ].y = 'beep';
*
* v1 = z[ 1 ].toJSON();
* // returns { 'x': 2, 'y': 'beep' }
*
* var y1 = y.slice();
* // returns [ 'a', 'beep', 'c' ]
*/
function zip2views( arrays, labels ) {
	var getter;
	var setter;
	var list;
	var keys;
	var out;
	var acc;
	var M;
	var N;
	var i;

	M = arrays.length;
	if ( M < 1 ) {
		return [];
	}
	list = copy( arrays );
	N = list[ 0 ].length;
	if ( N < 1 ) {
		return [];
	}
	// Resolve element accessors...
	acc = [];
	for ( i = 0; i < M; i++ ) {
		acc.push( accessors( list[ i ] ).accessors );
	}
	// Create a copy of provided labels to prevent external mutation:
	keys = copy( labels );

	// eslint-disable-next-line stdlib/jsdoc-typedef-typos
	/**
	* Constructor for creating a composite view of zipped elements.
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

	// Define read/write accessors for each label...
	for ( i = 0; i < M; i++ ) {
		getter = getValue( list[ i ], acc[ i ][ 0 ] );
		setter = setValue( list[ i ], acc[ i ][ 1 ] );
		setReadWriteAccessor( Datum.prototype, keys[ i ], getter, setter );
	}
	// Ensure that the returned array correctly serializes to JSON:
	setNonEnumerableReadOnly( Datum.prototype, 'toJSON', toJSON );

	// Create a list of composite views...
	out = [];
	for ( i = 0; i < N; i++ ) {
		out.push( new Datum( i ) );
	}
	return out;

	/**
	* Returns an accessor for returning the value associated with a label.
	*
	* @private
	* @param {Collection} arr - input array
	* @param {Function} getter - array element accessor
	* @returns {Function} accessor
	*/
	function getValue( arr, getter ) {
		return get;

		/**
		* Returns the value associated with a label.
		*
		* @private
		* @returns {*} result
		*/
		function get() {
			return getter( arr, this._i ); // eslint-disable-line no-invalid-this
		}
	}

	/**
	* Returns an accessor for setting the value associated with a label.
	*
	* @private
	* @param {Collection} arr - input array
	* @param {Function} setter - array element accessor
	* @returns {Function} accessor
	*/
	function setValue( arr, setter ) {
		return set;

		/**
		* Sets the value associated with a label.
		*
		* @private
		* @param {*} value - value to set
		*/
		function set( value ) {
			setter( arr, this._i, value ); // eslint-disable-line no-invalid-this
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
			out[ k ] = this[ k ]; // eslint-disable-line no-invalid-this
		}
		return out;
	}
}


// EXPORTS //

module.exports = zip2views;
