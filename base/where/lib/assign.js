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

var isComplexDataType = require( './../../../base/assert/is-complex-floating-point-data-type' );
var isBooleanDataType = require( './../../../base/assert/is-boolean-data-type' );
var arraylike2object = require( './../../../base/arraylike2object' );
var reinterpretCmplx = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBool = require( '@stdlib/strided/base/reinterpret-boolean' );
var resolveStride = require( './resolve_stride.js' );
var numel = require( './numel.js' );


// FUNCTIONS //

/**
* Takes elements from either one indexed array or another depending on a condition and assigns the values to elements in an indexed output array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} condition - indicator array
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @throws {Error} input arrays must be broadcast compatible with the output array
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
*
* var out = [ 0, 0, 0, 0 ];
* var condition = [ true, false, true, false ];
*
* var arr = indexed( out.length, condition, x, y, out, 1, 0 );
* // returns [ 1, 6, 3, 8 ]
*
* var bool = ( arr === out );
* // returns true
*/
function indexed( N, condition, x, y, out, stride, offset ) {
	var sx;
	var sy;
	var sc;
	var ix;
	var iy;
	var ic;
	var io;
	var i;

	// Broadcast the arrays by computing strides:
	sc = resolveStride( condition.length, N );
	sx = resolveStride( x.length, N );
	sy = resolveStride( y.length, N );

	// Initialize indices:
	ic = 0;
	ix = 0;
	iy = 0;
	io = offset;

	// Extract each desired element from a provided array...
	for ( i = 0; i < N; i++ ) {
		out[ io ] = ( condition[ ic ] ) ? x[ ix ] : y[ iy ];
		ic += sc;
		ix += sx;
		iy += sy;
		io += stride;
	}
	return out;
}

/**
* Takes elements from either one accessor array or another depending on a condition and assigns the values to elements in an accessor output array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Object} condition - condition array object
* @param {Object} x - first input array object
* @param {Object} y - second input array object
* @param {Object} out - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
* var y = toAccessorArray( [ 5, 6, 7, 8 ] );
*
* var condition = toAccessorArray( [ true, false, true, false ] );
*
* var out = toAccessorArray( [ 0, 0, 0, 0 ] );
* var arr = accessors( out.length, arraylike2object( condition ), arraylike2object( x ), arraylike2object( y ), arraylike2object( out ), 1, 0 );
*
* var v = arr.get( 0 );
* // returns 1
*
* v = arr.get( 1 );
* // returns 6
*/
function accessors( N, condition, x, y, out, stride, offset ) {
	var xdata;
	var ydata;
	var cdata;
	var odata;
	var xget;
	var yget;
	var cget;
	var oset;
	var sx;
	var sy;
	var sc;
	var ix;
	var iy;
	var ic;
	var io;
	var i;

	cdata = condition.data;
	xdata = x.data;
	ydata = y.data;
	odata = out.data;

	cget = condition.accessors[ 0 ];
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	// Broadcast the arrays by computing strides:
	sc = resolveStride( cdata.length, N );
	sx = resolveStride( xdata.length, N );
	sy = resolveStride( ydata.length, N );

	// Initialize indices:
	ic = 0;
	ix = 0;
	iy = 0;
	io = offset;

	// Extract each desired element from a provided array...
	for ( i = 0; i < N; i++ ) {
		oset( odata, io, ( cget( cdata, ic ) ) ? xget( xdata, ix ) : yget( ydata, iy ) ); // eslint-disable-line max-len
		ic += sc;
		ix += sx;
		iy += sy;
		io += stride;
	}
	return odata;
}

/**
* Takes elements from either one complex array or another depending on a condition and assigns the values to elements in a complex output array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Object} condition - condition array object
* @param {Collection} x - first real-valued floating-point input array view
* @param {Collection} y - second real-valued floating-point input array view
* @param {Collection} out - real-valued floating-point output array view
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array view
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var y = new Float64Array( [ 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
*
* var condition = [ true, false, true, false ];
*
* var out = new Float64Array( 8 );
*
* var arr = complex( 4, arraylike2object( condition ), x, y, out, 1, 0 );
* // returns <Float64Array>[ 1.0, 2.0, 11.0, 12.0, 5.0, 6.0, 15.0, 16.0 ]
*/
function complex( N, condition, x, y, out, stride, offset ) {
	var cdata;
	var cget;
	var sx;
	var sy;
	var sc;
	var so;
	var ix;
	var iy;
	var ic;
	var io;
	var i;

	cdata = condition.data;
	cget = condition.accessors[ 0 ];

	// Broadcast the arrays by computing strides (note: multiply strides by 2 for complex array arguments, as a real-valued array view consists of interleaved real and imaginary components):
	sc = resolveStride( cdata.length, N );
	sx = resolveStride( x.length/2, N ) * 2;
	sy = resolveStride( y.length/2, N ) * 2;
	so = stride * 2;

	// Initialize indices:
	ic = 0;
	ix = 0;
	iy = 0;
	io = offset * 2; // note: account for interleaved real and imaginary components

	// Extract each desired element from a provided array...
	for ( i = 0; i < N; i++ ) {
		if ( cget( cdata, ic ) ) {
			out[ io ] = x[ ix ];
			out[ io+1 ] = x[ ix+1 ];
		} else {
			out[ io ] = y[ iy ];
			out[ io+1 ] = y[ iy+1 ];
		}
		ic += sc;
		ix += sx;
		iy += sy;
		io += so;
	}
	return out;
}


// MAIN //

/**
* Takes elements from either one of two arrays depending on a condition and assigns the values to elements in a provided output array.
*
* @param {Collection} condition - indicator array
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @throws {Error} input arrays must be broadcast compatible with the output array
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
*
* var out = [ 0, 0, 0, 0 ];
* var condition = [ true, false, true, false ];
*
* var arr = assign( condition, x, y, out, 1, 0 );
* // returns [ 1, 6, 3, 8 ]
*
* var bool = ( arr === out );
* // returns true
*/
function assign( condition, x, y, out, stride, offset ) {
	var co;
	var xo;
	var yo;
	var oo;
	var N;

	// Check whether we can avoid doing any work...
	if ( condition.length === 0 ) {
		return out;
	}
	// Compute the number of indexed elements in the output array:
	N = numel( out.length, stride, offset );

	co = arraylike2object( condition );
	if ( isBooleanDataType( co.dtype ) ) {
		condition = reinterpretBool( condition, 0 );
		co = arraylike2object( condition );
	}
	xo = arraylike2object( x );
	yo = arraylike2object( y );
	oo = arraylike2object( out );
	if (
		co.accessorProtocol ||
		xo.accessorProtocol ||
		yo.accessorProtocol ||
		oo.accessorProtocol
	) {
		// Note: we only explicitly special case a select number of same dtype-to-dtype combinations, as this function should not be concerned with casting rules, etc. That is left to userland...
		if (
			co.accessorProtocol === false &&
			isBooleanDataType( xo.dtype ) &&
			isBooleanDataType( yo.dtype ) &&
			isBooleanDataType( oo.dtype )
		) {
			indexed( N, condition, reinterpretBool( x, 0 ), reinterpretBool( y, 0 ), reinterpretBool( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		if (
			isComplexDataType( xo.dtype ) &&
			isComplexDataType( yo.dtype ) &&
			isComplexDataType( oo.dtype )
		) {
			complex( N, co, reinterpretCmplx( x, 0 ), reinterpretCmplx( y, 0 ), reinterpretCmplx( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		accessors( N, co, xo, yo, oo, stride, offset );
		return out;
	}
	indexed( N, condition, x, y, out, stride, offset );
	return out;
}


// EXPORTS //

module.exports = assign;
