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
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Copies every element from one array to another array, except for the element at a specified index.
*
* @private
* @param {Collection} x - input array
* @param {integer} index - element index
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = [ 0, 0, 0 ];
* var arr = indexed( x, 0, out, 1, 0 );
* // returns [ 2, 3, 4 ]
*
* var bool = ( arr === out );
* // returns true
*/
function indexed( x, index, out, stride, offset ) {
	var io;
	var i;

	io = offset;
	for ( i = 0; i < x.length; i++ ) {
		if ( i === index ) {
			continue;
		}
		out[ io ] = x[ i ];
		io += stride;
	}
	return out;
}

/**
* Copies every element from one accessor array to another accessor array, except for the element at a specified index.
*
* @private
* @param {Object} x - input array object
* @param {integer} index - element index
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
*
* var out = toAccessorArray( [ 0, 0, 0 ] );
* var arr = accessors( arraylike2object( x ), 0, arraylike2object( out ), 1, 0 );
*
* var v = arr.get( 0 );
* // returns 2
*/
function accessors( x, index, out, stride, offset ) {
	var xdata;
	var odata;
	var xget;
	var oset;
	var io;
	var i;

	xdata = x.data;
	odata = out.data;

	xget = x.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	io = offset;
	for ( i = 0; i < xdata.length; i++ ) {
		if ( i === index ) {
			continue;
		}
		oset( odata, io, xget( xdata, i ) );
		io += stride;
	}
	return odata;
}

/**
* Copies every element from one complex array to another complex array, except for the element at a specified index.
*
* @private
* @param {Collection} x - real-valued floating-point input array view
* @param {integer} index - element index
* @param {Collection} out - real-valued floating-point output array view
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array view
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var Float64Array = require( '@stdlib/array/float64' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = new Float64Array( 2 );
* var arr = complex( x, 0, out, 1, 0 );
* // returns <Float64Array>[ 3.0, 4.0 ]
*/
function complex( x, index, out, stride, offset ) {
	var so;
	var io;
	var i;
	var j;

	so = stride * 2; // multiply by 2, as real-valued array consists of interleaved real and imaginary components
	io = offset * 2;
	for ( i = 0; i < x.length/2; i++ ) {
		if ( i === index ) {
			continue;
		}
		j = i * 2;
		out[ io ] = x[ j ];
		out[ io+1 ] = x[ j+1 ];
		io += so;
	}
	return out;
}


// MAIN //

/**
* Copies every element from one array to another array, except for the element at a specified index.
*
* @param {Collection} x - input array
* @param {integer} index - element index
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @throws {RangeError} second argument must not exceed array bounds
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = [ 0, 0, 0 ];
* var arr = assign( x, 0, out, 1, 0 );
* // returns [ 2, 3, 4 ]
*
* var bool = ( arr === out );
* // returns true
*/
function assign( x, index, out, stride, offset ) {
	var xo;
	var oo;

	index = normalizeIndex( index, x.length-1 );
	if ( index < 0 ) {
		throw new RangeError( format( 'invalid argument. Index argument is out-of-bounds. Value: `%d`.', index ) );
	}
	xo = arraylike2object( x );
	oo = arraylike2object( out );
	if ( xo.accessorProtocol || oo.accessorProtocol ) {
		// Note: we only explicitly support a limited set of dtype-to-dtype pairs, as this function should not be concerned with casting rules, etc. That is left to userland...
		if (
			isComplexDataType( xo.dtype ) &&
			isComplexDataType( oo.dtype )
		) {
			complex( reinterpret( x, 0 ), index, reinterpret( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		if (
			isBooleanDataType( xo.dtype ) &&
			isBooleanDataType( oo.dtype )
		) {
			indexed( reinterpretBoolean( x, 0 ), index, reinterpretBoolean( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		accessors( xo, index, oo, stride, offset );
		return out;
	}
	indexed( x, index, out, stride, offset );
	return out;
}


// EXPORTS //

module.exports = assign;
