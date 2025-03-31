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
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var Boolean = require( '@stdlib/boolean/ctor' );
var arraylike2object = require( './../../../base/arraylike2object' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Copies elements from one array to another array and sets the element at the specified index to a provided value.
*
* @private
* @param {Collection} x - input array
* @param {integer} index - element index
* @param {*} value - replacement value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = [ 0, 0, 0, 0 ];
* var arr = indexed( x, 0, 5, out, 1, 0 );
* // returns [ 5, 2, 3, 4 ]
*
* var bool = ( arr === out );
* // returns true
*/
function indexed( x, index, value, out, stride, offset ) {
	var io;
	var i;

	io = offset;
	for ( i = 0; i < x.length; i++ ) {
		out[ io ] = x[ i ];
		io += stride;
	}
	out[ offset+(index*stride) ] = value;
	return out;
}

/**
* Copies elements from one accessor array to another accessor array and sets the element at the specified index to a provided value.
*
* @private
* @param {Object} x - input array object
* @param {integer} index - element index
* @param {*} value - replacement value
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
* var out = toAccessorArray( [ 0, 0, 0, 0 ] );
* var arr = accessors( arraylike2object( x ), 0, 5, arraylike2object( out ), 1, 0 );
*
* var v = arr.get( 0 );
* // returns 5
*/
function accessors( x, index, value, out, stride, offset ) {
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
		oset( odata, io, xget( xdata, i ) );
		io += stride;
	}
	oset( odata, offset+(index*stride), value );
	return odata;
}

/**
* Copies elements from one complex array to another complex array and sets the element at the specified index to a provided value.
*
* @private
* @param {Collection} x - real-valued floating-point input array view
* @param {integer} index - element index
* @param {ComplexLike} value - replacement value
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
* var out = new Float64Array( 4 );
* var arr = complex( x, 0, new Complex128( 5.0, 6.0 ), out, 1, 0 );
* // returns <Float64Array>[ 5.0, 6.0, 3.0, 4.0 ]
*/
function complex( x, index, value, out, stride, offset ) {
	var so;
	var io;
	var i;
	var j;

	so = stride * 2; // multiply by 2, as real-valued array consists of interleaved real and imaginary components
	io = offset * 2;
	for ( i = 0; i < x.length/2; i++ ) {
		j = i * 2;
		out[ io ] = x[ j ];
		out[ io+1 ] = x[ j+1 ];
		io += so;
	}
	io = ( offset+(index*stride) ) * 2;
	out[ io ] = real( value );
	out[ io+1 ] = imag( value );
	return out;
}


// MAIN //

/**
* Copies elements from one array to another array and sets the element at the specified index to a provided value.
*
* @param {Collection} x - input array
* @param {integer} index - element index
* @param {*} value - replacement value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @throws {RangeError} second argument must not exceed array bounds
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = [ 0, 0, 0, 0 ];
* var arr = assign( x, 0, 5, out, 1, 0 );
* // returns [ 5, 2, 3, 4 ]
*
* var bool = ( arr === out );
* // returns true
*/
function assign( x, index, value, out, stride, offset ) {
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
			isComplexDataType( oo.dtype ) &&
			isComplexLike( value )
		) {
			complex( reinterpret( x, 0 ), index, value, reinterpret( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		if (
			isBooleanDataType( xo.dtype ) &&
			isBooleanDataType( oo.dtype )
		) {
			indexed( reinterpretBoolean( x, 0 ), index, Boolean( value ), reinterpretBoolean( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		accessors( xo, index, value, oo, stride, offset );
		return out;
	}
	indexed( x, index, value, out, stride, offset );
	return out;
}


// EXPORTS //

module.exports = assign;
