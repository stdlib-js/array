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
* Cumulatively tests whether at least `n` elements in a provided array pass a test implemented by a predicate function, while iterating from right-to-left, and assign the results to elements in the provided output array.
*
* @private
* @param {Collection} x - input array
* @param {PositiveInteger} n - number of elements
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} predicate - test function
* @param {*} thisArg - execution context
* @returns {Collection} output array
*
* @example
* function fcn( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 1, 1, 0, 0, 0 ];
*
* var out = [ 0, 0, 0, 0, 0 ];
* var arr = indexed( x, 2, out, 1, 0, fcn );
* // returns [ false, false, false, false, true ]
*/
function indexed( x, n, out, stride, offset, predicate, thisArg ) {
	var count;
	var flg;
	var io;
	var i;

	flg = false;
	count = 0;
	io = offset;
	for ( i = x.length - 1; i >= 0; i-- ) {
		if ( flg === false && predicate.call( thisArg, x[ i ], i, x ) ) {
			count += 1;
			if ( count >= n ) {
				flg = true;
			}
		}
		out[ io ] = flg;
		io += stride;
	}
	return out;
}

/**
* Cumulatively tests whether at least `n` elements in a provided accessor array pass a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to elements in the accessor output array.
*
* @private
* @param {Object} x - input array object
* @param {PositiveInteger} n - number of elements
* @param {Object} out - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} predicate - test function
* @param {*} thisArg - execution context
* @returns {Collection} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* function fcn( value ) {
*     return ( value > 0 );
* }
*
* var x = toAccessorArray( [ 1, 1, 0, 0, 0 ] );
*
* var out = toAccessorArray( [ 0, 0, 0, 0, 0 ] );
* var arr = accessors( arraylike2object( x ), 2, arraylike2object( out ), 1, 0, fcn );
*
* var v = arr.get( 4 );
* // returns true
*/
function accessors( x, n, out, stride, offset, predicate, thisArg ) {
	var count;
	var xdata;
	var odata;
	var xget;
	var oset;
	var flg;
	var io;
	var i;

	xdata = x.data;
	odata = out.data;

	xget = x.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	io = offset;
	flg = false;
	count = 0;
	for ( i = xdata.length - 1; i >= 0; i-- ) {
		if ( flg === false &&
			predicate.call( thisArg, xget( xdata, i ), i, xdata ) ) {
			count += 1;
			if ( count >= n ) {
				flg = true;
			}
		}
		oset( odata, io, flg );
		io += stride;
	}
	return odata;
}


// MAIN //

/**
* Cumulatively tests whether at least `n` elements in a provided array pass a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to elements in the output array.
*
* @param {Collection} x - input array
* @param {PositiveInteger} n - number of elements
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @returns {Collection} output array
*
* @example
* function fcn( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 1, 1, 0, 0 ];
*
* var y = [ false, null, false, null, false, null, false, null ];
* var out = assign( x, 2, y, 2, 0, fcn );
* // returns [ false, null, false, null, false, null, true, null ]
*
* var bool = ( y === out );
* // returns true
*/
function assign( x, n, out, stride, offset, predicate, thisArg ) {
	var xo;
	var oo;

	xo = arraylike2object( x );
	oo = arraylike2object( out );
	if (
		xo.accessorProtocol ||
		oo.accessorProtocol
	) {
		accessors( xo, n, oo, stride, offset, predicate, thisArg );
		return out;
	}
	indexed( x, n, out, stride, offset, predicate, thisArg );
	return out;
}


// EXPORTS //

module.exports = assign;
