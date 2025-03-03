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
var arraylike2object = require( './../../../base/arraylike2object' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex' );
var ind = require( '@stdlib/ndarray/base/ind' ).factory;


// FUNCTIONS //

/**
* Takes elements from an indexed array and assigns the values to elements in an indexed output array.
*
* @private
* @param {Collection} x - input array.
* @param {IntegerArray} indices - list of indices.
* @param {string} mode - index mode.
* @param {Collection} out - output array.
* @param {integer} stride - output array stride.
* @param {NonNegativeInteger} offset - output array offset.
* @param {Function} clbk - callback function applied to each selected element.
* @returns {Collection} output array.
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var indices = [ 3, 1, 2, 0 ];
* var out = [ 0, 0, 0, 0 ];
*
* function clbk( val ){
*     return val;
* }
*
* var arr = takeMapIndexed( x, indices, 'throw', out, 1, 0, clbk );
* // returns [ 4, 2, 3, 1 ]
*/
function takeMapIndexed( x, indices, mode, out, stride, offset, clbk ) {
	var getIndex;
	var max;
	var io;
	var i;
	var j;

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = x.length - 1;

	// Extract each desired element from the provided array...
	io = offset;
	for ( i = 0; i < indices.length; i++ ) {
		j = getIndex( indices[ i ], max );
		out[ io ] = x[ j ];
		io += stride;
	}
	for ( i = 0; i < out.length; i++ ) {
		// eslint-disable-next-line no-useless-call
		out[i] = clbk.call( null, out[i], i );
	}
	return out;
}

/**
* Takes elements from an accessor array and assigns the values to elements in an accessor output array.
*
* @private
* @param {Object} x - input array object.
* @param {Object} indices - index array object.
* @param {string} mode - index mode.
* @param {Object} out - output array object.
* @param {integer} stride - output array stride.
* @param {NonNegativeInteger} offset - Output array offset.
* @param {Function} clbk - callback function applied to each selected element.
* @returns {Collection} output array.
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
* var indices = toAccessorArray( [ 3, 1, 2, 0 ] );
*
* function clbk(val){
	return val+1;
}
*
* var out = toAccessorArray( [ 0, 0, 0, 0 ] );
* var arr = accessorsMap( arraylike2object( x ), arraylike2object( indices ), 'throw', arraylike2object( out ), 1, 0, clbk );
* // [ 4, 2, 3, 1 ]
*/
function accessorsMap( x, indices, mode, out, stride, offset, clbk ) {
	var getIndex;
	var xdata;
	var idata;
	var odata;
	var xget;
	var iget;
	var oset;
	var max;
	var io;
	var i;
	var j;

	xdata = x.data;
	idata = indices.data;
	odata = out.data;

	xget = x.accessors[ 0 ];
	iget = indices.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = xdata.length - 1;

	// Extract each desired element from the provided array...
	io = offset;
	for ( i = 0; i < idata.length; i++ ) {
		j = getIndex( iget( idata, i ), max );

		// eslint-disable-next-line no-useless-call
		oset( odata, io, clbk.call( null, xget( xdata, j ), j ) );
		io += stride;
	}
	return odata;
}

/**
* Takes elements from a complex array and assigns the values to elements in a complex output array.
*
* @private
* @param {Collection} x - real-valued floating-point input array view
* @param {Object} indices - index array object
* @param {string} mode - index mode
* @param {Collection} out - real-valued floating-point output array view
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} clbk - callback function applied to each selected element
* @returns {Collection} output array view
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var indices = [ 0, 0, 1, 1 ];
*
* var out = new Float64Array( 8 );
*
* function clbk(val){
	return val;
}
*
* var arr = complexMap( x, arraylike2object( indices ), 'throw', out, 1, 0, clbk );
* // returns <Float64Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
*/
function complexMap( x, indices, mode, out, stride, offset, clbk ) {
	var getIndex;
	var idata;
	var iget;
	var max;
	var io;
	var so;
	var i;
	var j;
	var k;

	idata = indices.data;
	iget = indices.accessors[ 0 ];

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = ( x.length/2 ) - 1; // resolve the length of the original complex array

	// Extract each desired element from the provided array...
	so = stride * 2; // note: multiply by 2, as real-valued array consists of interleaved real and imaginary components
	io = offset * 2;
	for ( i = 0; i < idata.length; i++ ) {
		j = getIndex( iget( idata, i ), max );
		k = j * 2;

		// eslint-disable-next-line no-useless-call
		out[ io ] = clbk.call( null, x[ k ], k );

		// eslint-disable-next-line no-useless-call
		out[ io+1 ] = clbk.call( null, x[ k+1 ], k+1 );
		io += so;
	}
	return out;
}


// MAIN //

/**
* Takes elements from an array and assigns the values to elements in a provided output array.
*
* @param {Collection} x - input array.
* @param {IntegerArray} indices - list of indices.
* @param {string} mode - index mode.
* @param {Collection} out - output array.
* @param {integer} stride - output array stride.
* @param {NonNegativeInteger} offset - output array offset.
* @param {Function} clbk - callback function applied to each selected element.
* @returns {Collection} output array.
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var indices = [ 3, 1, 2, 0 ];
*
* var out = [ 0, 0, 0, 0 ];
*
* function clbk( val ){
	return val;
}
* var arr = assignMap( x, indices, 'throw', out, 1, 0, clbk );
* // arr is [ 4, 2, 3, 1 ]
*
* var bool = ( arr === out );
* // bool is true
*/
function assignMap( x, indices, mode, out, stride, offset, clbk ) {
	var xo;
	var io;
	var oo;

	xo = arraylike2object( x );
	io = arraylike2object( indices );
	oo = arraylike2object( out );
	if (
		xo.accessorProtocol ||
		io.accessorProtocol ||
		oo.accessorProtocol
	) {
		// Note: we only explicitly support complex-to-complex, as this function should not be concerned with casting rules, etc. That is left to userland...
		if (
			isComplexDataType( xo.dtype ) &&
			isComplexDataType( oo.dtype )
		) {
			complexMap( reinterpret( x, 0 ), io, mode, reinterpret( out, 0 ), stride, offset, clbk ); // eslint-disable-line max-len
			return out;
		}
		accessorsMap( xo, io, mode, oo, stride, offset, clbk );
		return out;
	}
	takeMapIndexed( x, indices, mode, out, stride, offset, clbk );
	return out;
}


// EXPORTS //

module.exports = assignMap;
