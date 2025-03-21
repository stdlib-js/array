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
* Applies a mask and a callback function to an indexed array and assigns results to elements in an indexed output array.
*
* @private
* @param {Collection} x - input array
* @param {IntegerArray} mask - mask array
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} clbk - function to apply
* @param {*} [thisArg] - callback execution context
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = [ 0, 0, 0, 0 ];
*
* function scale( x ) {
*     return x * 10;
* }
*
* var arr = indexed( x, mask, out, 1, 0, scale );
* // returns [ 20, 40, 0, 0 ]
*/
function indexed( x, mask, out, stride, offset, clbk, thisArg ) {
	var io;
	var i;

	io = offset;
	for ( i = 0; i < x.length; i++ ) {
		if ( mask[ i ] ) {
			out[ io ] = clbk.call( thisArg, x[ i ], i, x );
			io += stride;
		}
	}
	return out;
}

/**
* Applies a mask and a callback function to an input accessor array and assigns results to elements in an output accessor array.
*
* @private
* @param {Object} x - input array object
* @param {Object} mask - mask array object
* @param {Object} out - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} clbk - function to apply
* @param {*} [thisArg] - callback execution context
* @returns {Collection} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
* var mask = toAccessorArray( [ 0, 1, 0, 1 ] );
*
* function scale( x ) {
*     return x * 10;
* }
*
* var out = toAccessorArray( [ 0, 0, 0, 0 ] );
* var arr = accessors( arraylike2object( x ), arraylike2object( mask ), arraylike2object( out ), 1, 0, scale );
*
* var v = arr.get( 0 );
* // returns 20
*
* v = arr.get( 1 );
* // returns 40
*/
function accessors( x, mask, out, stride, offset, clbk, thisArg ) {
	var xdata;
	var mdata;
	var odata;
	var xget;
	var mget;
	var oset;
	var io;
	var i;

	xdata = x.data;
	mdata = mask.data;
	odata = out.data;

	xget = x.accessors[ 0 ];
	mget = mask.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	io = offset;
	for ( i = 0; i < xdata.length; i++ ) {
		if ( mget( mdata, i ) ) {
			oset( odata, io, clbk.call( thisArg, xget( xdata, i ), i, xdata ) );
			io += stride;
		}
	}
	return odata;
}


// MAIN //

/**
* Applies a mask and a callback function to a provided input array and assigns results to elements in a provided output array.
*
* @param {Collection} x - input array
* @param {Collection} mask - mask array
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} clbk - function to apply
* @param {*} [thisArg] - callback execution context
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* function scale( x ) {
*     return x * 10;
* }
*
* var out = [ 0, 0 ];
* var arr = assign( x, mask, out, 1, 0, scale );
* // returns [ 20, 40 ]
*
* var bool = ( arr === out );
* // returns true
*/
function assign( x, mask, out, stride, offset, clbk, thisArg ) {
	var xo;
	var mo;
	var oo;

	xo = arraylike2object( x );
	mo = arraylike2object( mask );
	oo = arraylike2object( out );
	if (
		xo.accessorProtocol ||
		mo.accessorProtocol ||
		oo.accessorProtocol
	) {
		accessors( xo, mo, oo, stride, offset, clbk, thisArg );
		return out;
	}
	indexed( x, mask, out, stride, offset, clbk, thisArg );
	return out;
}


// EXPORTS //

module.exports = assign;
