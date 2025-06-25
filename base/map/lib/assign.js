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
* Applies a callback function to elements in an input array and assigns results to elements in an output array.
*
* @private
* @param {Collection} x - input array
* @param {Collection} y - output array
* @param {integer} stride - stride length for output array
* @param {NonNegativeInteger} offset - starting index for output array
* @param {Function} fcn - callback function
* @param {*} thisArg - callback execution context
* @returns {Collection} output array
*
* @example
* var ones = require( '@stdlib/array/base/ones' );
* var zeros = require( '@stdlib/array/base/zeros' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = ones( 4 );
* var y = zeros( x.length );
* var out = internal( x, y, 1, 0, scale );
* // returns [ 10.0, 10.0, 10.0, 10.0 ]
*
* var bool = ( out === y );
* // returns true
*/
function internal( x, y, stride, offset, fcn, thisArg ) {
	var io;
	var i;

	io = offset;
	for ( i = 0; i < x.length; i++ ) {
		y[ io ] = fcn.call( thisArg, x[ i ], i, x );
		io += stride;
	}
	return y;
}

/**
* Applies a callback function to elements in an input array and assigns results to elements in an output array.
*
* @private
* @param {Object} x - input array object
* @param {Object} y - output array object
* @param {integer} stride - stride length for output array
* @param {NonNegativeInteger} offset - starting index for output array
* @param {Function} fcn - callback function
* @param {*} thisArg - callback execution context
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var ones = require( '@stdlib/array/base/ones' );
* var zeros = require( '@stdlib/array/base/zeros' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = ones( 4 );
* var y = zeros( x.length );
*
* var out = accessors( arraylike2object( toAccessorArray( x ) ), arraylike2object( toAccessorArray( y ) ), 1, 0, scale );
* // y => [ 10.0, 10.0, 10.0, 10.0 ]
*/
function accessors( x, y, stride, offset, fcn, thisArg ) {
	var xdata;
	var ydata;
	var xget;
	var yset;
	var io;
	var i;

	xdata = x.data;
	ydata = y.data;
	xget = x.accessors[ 0 ];
	yset = y.accessors[ 1 ];

	io = offset;
	for ( i = 0; i < xdata.length; i++ ) {
		yset( ydata, io, fcn.call( thisArg, xget( xdata, i ), i, xdata ) );
		io += stride;
	}
	return y;
}


// MAIN //

/**
* Applies a callback function to elements in an input array and assigns results to elements in an output array.
*
* @param {Collection} x - input array
* @param {Collection} y - output array
* @param {integer} stride - stride length for output array
* @param {NonNegativeInteger} offset - starting index for output array
* @param {Function} fcn - callback function
* @param {*} [thisArg] - callback execution context
* @returns {Collection} output array
*
* @example
* var ones = require( '@stdlib/array/base/ones' );
* var zeros = require( '@stdlib/array/base/zeros' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = ones( 4 );
* var y = zeros( x.length );
*
* var out = assign( x, y, 1, 0, scale );
* // returns [ 10.0, 10.0, 10.0, 10.0 ]
*
* var bool = ( out === y );
* // returns true
*/
function assign( x, y, stride, offset, fcn, thisArg ) {
	var xobj;
	var yobj;

	xobj = arraylike2object( x );
	yobj = arraylike2object( y );
	if ( xobj.accessorProtocol || yobj.accessorProtocol ) {
		accessors( xobj, yobj, stride, offset, fcn, thisArg );
		return y;
	}
	return internal( x, y, stride, offset, fcn, thisArg );
}


// EXPORTS //

module.exports = assign;
