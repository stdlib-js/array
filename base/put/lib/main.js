/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var reinterpretComplex = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var ind = require( '@stdlib/ndarray/base/ind' ).factory;
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Replaces elements in an indexed array with provided values.
*
* @private
* @param {Collection} x - input array
* @param {IntegerArray} indices - list of indices
* @param {Collection} values - values to set
* @param {NonNegativeInteger} stride - index stride for accessing elements in `values`
* @param {Function} getIndex - function for resolving an array index
* @param {NonNegativeInteger} maxIndex - maximum array index (inclusive)
* @returns {Collection} input array
*
* @example
* var ind = require( '@stdlib/ndarray/base/ind' ).factory;
*
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 3, 1, 2, 0 ];
* var values = [ 5, 6, 7, 8 ];
*
* var getIndex = ind( 'throw' );
*
* var out = indexed( x, indices, values, 1, getIndex, x.length-1 );
* // returns [ 8, 6, 7, 5 ]
*/
function indexed( x, indices, values, stride, getIndex, maxIndex ) {
	var iv;
	var i;
	var j;

	iv = 0;
	for ( i = 0; i < indices.length; i++ ) {
		j = getIndex( indices[ i ], maxIndex );
		x[ j ] = values[ iv ];
		iv += stride;
	}
	return x;
}

/**
* Replaces specified elements of an accessor array with provided values.
*
* @private
* @param {Object} x - input array object
* @param {Object} indices - index object
* @param {Object} values - values object
* @param {NonNegativeInteger} stride - index stride for accessing elements in `values`
* @param {Function} getIndex - function for resolving an array index
* @param {NonNegativeInteger} maxIndex - maximum array index (inclusive)
* @returns {Collection} input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var ind = require( '@stdlib/ndarray/base/ind' ).factory;
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var indices = toAccessorArray( [ 1, 2 ] );
* var values = toAccessorArray( [ 20, 30 ] );
*
* var getIndex = ind( 'throw' );
*
* var out = accessors( arraylike2object( x ), arraylike2object( indices ), arraylike2object( values ), 1, getIndex, x.length-1 );
*
* var v = x.get( 0 );
* // returns 1
*
* v = x.get( 1 );
* // returns 20
*/
function accessors( x, indices, values, stride, getIndex, maxIndex ) {
	var xdata;
	var idata;
	var vdata;
	var xset;
	var iget;
	var vget;
	var iv;
	var i;
	var j;

	xdata = x.data;
	idata = indices.data;
	vdata = values.data;

	xset = x.accessors[ 1 ];
	iget = indices.accessors[ 0 ];
	vget = values.accessors[ 0 ];

	iv = 0;
	for ( i = 0; i < idata.length; i++ ) {
		j = getIndex( iget( idata, i ), maxIndex );
		xset( xdata, j, vget( vdata, iv ) );
		iv += stride;
	}
	return xdata;
}

/**
* Replaces elements in a complex array with provided values.
*
* @private
* @param {Collection} x - real-valued floating-point input array view
* @param {Object} indices - index array object
* @param {Collection} values - real-valued floating-point values array view
* @param {NonNegativeInteger} stride - index stride for accessing elements in `values`
* @param {Function} getIndex - function for resolving an array index
* @param {NonNegativeInteger} maxIndex - maximum array index (inclusive)
* @returns {Collection} input array view
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var ind = require( '@stdlib/ndarray/base/ind' ).factory;
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var indices = [ 0, 2 ];
* var values = new Float64Array( [ 10.0, 20.0, 50.0, 60.0 ] );
*
* var getIndex = ind( 'throw' );
*
* var out = complex( x, arraylike2object( indices ), values, 1, getIndex, x.length-1 );
* // returns <Float64Array>[ 10.0, 20.0, 3.0, 4.0, 50.0, 60.0, 7.0, 8.0 ]
*/
function complex( x, indices, values, stride, getIndex, maxIndex ) {
	var idata;
	var iget;
	var iv;
	var sv;
	var i;
	var j;
	var k;

	idata = indices.data;
	iget = indices.accessors[ 0 ];

	sv = stride * 2; // note: multiply by 2, as real-valued values array consists of interleaved real and imaginary components
	iv = 0;
	for ( i = 0; i < idata.length; i++ ) {
		j = getIndex( iget( idata, i ), maxIndex );
		k = j * 2;
		x[ k ] = values[ iv ];
		x[ k+1 ] = values[ iv+1 ];
		iv += sv;
	}
	return x;
}

/**
* Replaces elements in a boolean array with provided values.
*
* @private
* @param {Uint8Array} x - input array
* @param {Object} indices - index array object
* @param {Uint8Array} values - values to set
* @param {NonNegativeInteger} stride - index stride for accessing elements in `values`
* @param {Function} getIndex - function for resolving an array index
* @param {NonNegativeInteger} maxIndex - maximum array index (inclusive)
* @returns {Uint8Array} input array
*
* @example
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var ind = require( '@stdlib/ndarray/base/ind' ).factory;
*
* var x = new Uint8Array( [ 1, 0, 0, 1 ] );
*
* var indices = [ 3, 1, 2, 0 ];
* var values = new Uint8Array( [ 0, 1, 1, 0 ] );
*
* var getIndex = ind( 'throw' );
*
* var out = boolean( x, arraylike2object( indices ), values, 1, getIndex, x.length-1 );
* // returns <Uint8Array>[ 0, 1, 1, 0 ]
*/
function boolean( x, indices, values, stride, getIndex, maxIndex ) {
	var idata;
	var iget;
	var iv;
	var i;
	var j;

	idata = indices.data;
	iget = indices.accessors[ 0 ];

	iv = 0;
	for ( i = 0; i < idata.length; i++ ) {
		j = getIndex( iget( idata, i ), maxIndex );
		x[ j ] = values[ iv ];
		iv += stride;
	}
	return x;
}


// MAIN //

/**
* Replaces specified elements of an array with provided values.
*
* @param {Collection} x - input array
* @param {IntegerArray} indices - list of indices
* @param {Collection} values - values to set
* @param {string} mode - index mode
* @throws {Error} third argument must be broadcast compatible with the second argument
* @returns {Collection} input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, values, 'throw' );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 30 ];
*
* var out = put( x, indices, values, 'throw' );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
function put( x, indices, values, mode ) {
	var getIndex;
	var stride;
	var max;
	var xo;
	var io;
	var vo;

	// Broadcast the `values` array...
	if ( indices.length > 0 ) { // note: this allows `indices` to be empty and `values` to be non-empty (and not broadcast compatible with `indices`) to allow the potential use case where having an empty `indices` array is expected behavior and you don't want to trigger an exception simply because `values` has elements
		// Note that this effectively in-lines logic from `@stdlib/array/base/broadcast-array` in order to avoid unnecessary object creation...
		if ( values.length === indices.length ) {
			stride = 1;
		} else if ( values.length === 1 ) {
			stride = 0;
		} else {
			throw new Error( format( 'invalid argument. The third argument must be broadcast compatible with the second argument. Array shape: (%d). Desired shape: (%d).', values.length, indices.length ) );
		}
	}
	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = x.length - 1;

	xo = arraylike2object( x );
	io = arraylike2object( indices );
	vo = arraylike2object( values );
	if (
		xo.accessorProtocol ||
		io.accessorProtocol ||
		vo.accessorProtocol
	) {
		// Note: we only explicitly support select dtype pairs, as this function should not be concerned with casting rules, etc. That is left to userland...
		if ( isComplexDataType( xo.dtype ) && isComplexDataType( vo.dtype ) ) {
			complex( reinterpretComplex( x, 0 ), io, reinterpretComplex( values, 0 ), stride, getIndex, max ); // eslint-disable-line max-len
			return x;
		}
		if ( isBooleanDataType( xo.dtype ) && isBooleanDataType( vo.dtype ) ) {
			boolean( reinterpretBoolean( x, 0 ), io, reinterpretBoolean( values, 0 ), stride, getIndex, max ); // eslint-disable-line max-len
			return x;
		}
		accessors( xo, io, vo, stride, getIndex, max );
		return x;
	}
	indexed( x, indices, values, stride, getIndex, max );
	return x;
}


// EXPORTS //

module.exports = put;
