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
var setReadOnlyAccessor = require( '@stdlib/utils/define-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils/define-read-write-accessor' );
var resolveGetter = require( './../../../base/resolve-getter' );
var accessors = require( './../../../base/accessors' );


// MAIN //

/**
* Converts array entries to an array of composite views.
*
* ## Notes
*
* -   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.
* -   For each element of the returned array, the index view field is read-only and cannot be mutated.
*
* @param {Collection} arr - input array
* @param {ArrayLikeObject<string>} fields - list of field names
* @returns {Array<Object>} output array
*
* @example
* var x = [ 1, 2, 3 ];
* var fields = [ 'x', 'y' ];
*
* var out = entries2views( x, fields );
* // returns [ <Object>, <Object>, <Object> ]
*
* var v0 = out[ 0 ].toJSON();
* // returns { 'x': 0, 'y': 1 }
*
* var v1 = out[ 1 ].toJSON();
* // returns { 'x': 1, 'y': 2 }
*
* var v2 = out[ 2 ].toJSON();
* // returns { 'x': 2, 'y': 3 }
*
* // Mutate the input array:
* x[ 0 ] = 5;
*
* v0 = out[ 0 ].toJSON();
* // returns { 'x': 0, 'y': 5 }
*
* // Set a view property:
* out[ 1 ].y = 'beep';
*
* v1 = out[ 1 ].toJSON();
* // returns { 'x': 1, 'y': 'beep' }
*
* var y = x.slice();
* // returns [ 5, 'beep', 3 ]
*/
function entries2views( arr, fields ) {
	var fget;
	var get;
	var set;
	var acc;
	var out;
	var N;
	var k;
	var v;
	var i;

	N = arr.length;
	if ( N < 1 ) {
		return [];
	}
	// Resolve element accessors:
	acc = accessors( arr ).accessors;
	get = acc[ 0 ];
	set = acc[ 1 ];

	// Cache field names:
	fget = resolveGetter( fields );
	k = fget( fields, 0 );
	v = fget( fields, 1 );

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

	// Define accessors for each field:
	setReadOnlyAccessor( Datum.prototype, k, getIndex );
	setReadWriteAccessor( Datum.prototype, v, getValue, setValue );

	// Ensure that the returned array correctly serializes to JSON:
	setNonEnumerableReadOnly( Datum.prototype, 'toJSON', toJSON );

	// Create a list of composite views...
	out = [];
	for ( i = 0; i < N; i++ ) {
		out.push( new Datum( i ) );
	}
	return out;

	/**
	* Returns the entry index.
	*
	* @private
	* @returns {*} result
	*/
	function getIndex() {
		return this._i;
	}

	/**
	* Returns the value associated with a field.
	*
	* @private
	* @returns {*} result
	*/
	function getValue() {
		return get( arr, this._i );
	}

	/**
	* Sets the value associated with a field.
	*
	* @private
	* @param {*} value - value to set
	*/
	function setValue( value ) {
		set( arr, this._i, value );
	}

	/**
	* Serializes a datum to JSON.
	*
	* @private
	* @returns {Object} JSON object
	*/
	function toJSON() {
		var out;

		out = {};
		out[ k ] = this[ k ];
		out[ v ] = this[ v ];
		return out;
	}
}


// EXPORTS //

module.exports = entries2views;
