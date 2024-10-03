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

var arraylike2object = require( './../../../base/arraylike2object' );


// FUNCTIONS //

/**
* Cumulatively tests whether at least one array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to elements in the provided output array.
*
* @private
* @param {Collection} x - input array
* @param {Collection} y - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} predicate - test function
* @param {*} thisArg - execution context
* @returns {Collection} output array
*
* @example
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 1, 0, 0, 0 ];
*
* var out = [ false, false, false, false, false ];
* var y = indexed( x, out, 1, 0, isPositive );
* // returns [ false, false, false, true, true ]
*/
function indexed( x, y, stride, offset, predicate, thisArg ) {
	var flg;
	var io;
	var i;

	flg = false;
	io = offset;
	for ( i = x.length - 1; i >= 0; i-- ) {
		if ( !flg && predicate.call( thisArg, x[ i ], i, x ) ) {
			flg = true;
		}
		y[ io ] = flg;
		io += stride;
	}
	return y;
}

/**
* Cumulatively tests whether at least one array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to elements in the accessor output array.
*
* @private
* @param {Object} x - input array object
* @param {Object} y - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} predicate - test function
* @param {*} thisArg - execution context
* @returns {Collection} output array
*
* @example
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 0, 1, 0, 0, 0 ] );
*
* var out = toAccessorArray( [ false, false, false, false, false ] );
* var y = accessors( arraylike2object( x ), arraylike2object( out ), 1, 0, isPositive );
*
* var v = out.get( 4 );
* // returns true
*/
function accessors( x, y, stride, offset, predicate, thisArg ) {
	var xdata;
	var ydata;
	var xget;
	var yset;
	var flg;
	var io;
	var i;

	xdata = x.data;
	ydata = y.data;

	xget = x.accessors[ 0 ];
	yset = y.accessors[ 1 ];

	flg = false;
	io = offset;
	for ( i = xdata.length - 1; i >= 0; i-- ) {
		if ( !flg && predicate.call( thisArg, xget( xdata, i ), i, x ) ) {
			flg = true;
		}
		yset( ydata, io, flg );
		io += stride;
	}
	return ydata;
}


// MAIN //

/**
* Cumulatively tests whether at least one array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to elements in the output array.
*
* @param {Collection} x - input array
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @returns {Collection} output array
*
* @example
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 1, 0, 0 ];
*
* var y = [ false, null, false, null, false, null, false, null ];
* var out = assign( x, y, 2, 0, isPositive );
* // returns [ false, null, ..., true, null ]
*
* var bool = ( y === out );
* // returns true
*/
function assign( x, out, stride, offset, predicate, thisArg ) {
	var xo;
	var oo;

	xo = arraylike2object( x );
	oo = arraylike2object( out );
	if (
		xo.accessorProtocol ||
		oo.accessorProtocol
	) {
		accessors( xo, oo, stride, offset, predicate, thisArg );
		return out;
	}
	indexed( x, out, stride, offset, predicate, thisArg );
	return out;
}


// EXPORTS //

module.exports = assign;
