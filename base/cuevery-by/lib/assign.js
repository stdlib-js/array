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
* Cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function.
*
* @private
* @param {Collection} x - input array
* @param {Collection} out - output array
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
* var x = [ 1, 1, 0, 0, 0 ];
*
* var out = [ 0, 0, 0, 0, 0 ];
* var arr = indexed( x, out, 1, 0, isPositive );
* // returns [ true, true, false, false, false ]
*/
function indexed( x, out, stride, offset, predicate, thisArg ) {
	var flg;
	var io;
	var i;

	flg = true;
	io = offset;
	for ( i = 0; i <= x.length - 1; i++ ) {
		if ( !flg ) {
			out[ io ] = flg;
			io += stride;
			continue;
		}
		if ( !predicate.call( thisArg, x[ i ], i, x ) ) {
			flg = false;
		}
		out[ io ] = flg;
		io += stride;
	}
	return out;
}

/**
* Cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function.
*
* @private
* @param {Object} x - input array object
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
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var x = toAccessorArray( [ 1, 1, 0, 0, 0 ] );
*
* var out = toAccessorArray( [ 0, 0, 0, 0, 0 ] );
* var arr = accessors( arraylike2object( x ), arraylike2object( out ), 1, 0,  isPositive );
*
* var v = arr.get( 4 );
* // returns false
*/
function accessors( x, out, stride, offset, predicate, thisArg ) {
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
	flg = true;
	for ( i = 0; i <= xdata.length - 1; i++ ) {
		if ( !flg ) {
			oset( odata, io, flg );
			io += stride;
			continue;
		}
		if ( !predicate.call( thisArg, xget( xdata, i ), i, xdata ) ) {
			flg = false;
		}
		oset( odata, io, flg );
		io += stride;
	}
	return odata;
}


// MAIN //

/**
* Cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function.
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
* var x = [ 1, 1, 1, 0, 1 ];
*
* var y = [ false, null, false, null, false, null, false, null, false, null ];
* var out = assign( x, y, 2, 0, isPositive );
* // returns [ true, null, true, null, true, null, false, null, false, null ]
*
* var bool = ( y === out );
* // returns true
*/
function assign( x, out, stride, offset, predicate, thisArg ) {
	var xo;
	var oo;

	xo = arraylike2object( x );
	oo = arraylike2object( out );
	if ( xo.accessorProtocol || oo.accessorProtocol ) {
		accessors( xo, oo, stride, offset, predicate, thisArg );
		return out;
	}
	indexed( x, out, stride, offset, predicate, thisArg );
	return out;
}


// EXPORTS //

module.exports = assign;
