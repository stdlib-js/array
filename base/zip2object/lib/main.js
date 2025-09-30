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

var arraylike2object = require( './../../../base/arraylike2object' );


// FUNCTIONS //

/**
* Zips accessor arrays to an object.
*
* @private
* @param {Object} properties - properties object
* @param {Object} values - values object
* @returns {Object} result
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var props = toAccessorArray( [ 'a', 'b', 'c' ] );
* var values = toAccessorArray( [ 1, 2, 3 ] );
*
* var obj = accessors( arraylike2object( props ), arraylike2object( values ) );
* // returns { 'a': 1, 'b': 2, 'c': 3 }
*/
function accessors( properties, values ) {
	var pdata;
	var vdata;
	var pget;
	var vget;
	var out;
	var i;

	pdata = properties.data;
	pget = properties.accessors[ 0 ];

	vdata = values.data;
	vget = values.accessors[ 0 ];

	out = {};
	for ( i = 0; i < pdata.length; i++ ) {
		out[ pget( pdata, i ) ] = vget( vdata, i );
	}
	return out;
}

/**
* Zips indexed collections to an object.
*
* @private
* @param {Collection} properties - list of properties
* @param {Collection} values - list of values
* @returns {Object} result
*
* @example
* var props = [ 'a', 'b', 'c' ];
* var values = [ 1, 2, 3 ];
*
* var obj = indexed( props, values );
* // returns { 'a': 1, 'b': 2, 'c': 3 }
*/
function indexed( properties, values ) {
	var out;
	var i;

	out = {};
	for ( i = 0; i < properties.length; i++ ) {
		out[ properties[ i ] ] = values[ i ];
	}
	return out;
}


// MAIN //

/**
* Creates an object from a provided list of properties and a provided list of corresponding values.
*
* @param {Collection} properties - list of properties
* @param {Collection} values - list of values
* @returns {Object} result
*
* @example
* var props = [ 'a', 'b', 'c' ];
* var values = [ 1, 2, 3 ];
*
* var obj = zip2object( props, values );
* // returns { 'a': 1, 'b': 2, 'c': 3 }
*/
function zip2object( properties, values ) {
	var o1 = arraylike2object( properties );
	var o2 = arraylike2object( values );

	if ( o1.accessorProtocol || o2.accessorProtocol ) {
		return accessors( o1, o2 );
	}
	return indexed( properties, values );
}


// EXPORTS //

module.exports = zip2object;
