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

var isComplex128Array = require( './../../../base/assert/is-complex128array' );
var isComplex64Array = require( './../../../base/assert/is-complex64array' );
var arraylike2object = require( './../../../base/arraylike2object' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );


// FUNCTIONS //

/**
* Fills an indexed array with linearly spaced numeric elements which increment by 1 starting from one.
*
* @private
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* var arr = indexed( out, 1, 0 );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* var arr = indexed( out, -1, out.length-1 );
* // returns [ 6, 5, 4, 3, 2, 1 ]
*/
function indexed( out, stride, offset ) {
	var v;
	var i;

	i = offset;
	v = 1;
	while ( i >= 0 && i < out.length ) {
		out[ i ] = v;
		i += stride;
		v += 1;
	}
	return out;
}

/**
* Fills a complex number array with linearly spaced numeric elements which increment by 1 starting from one.
*
* @private
* @param {(Complex128Array|Complex64Array)} out - output complex number array
* @param {(Float64Array|Float32Array)} data - output array data
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {(Complex128Array|Complex64Array)} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
*
* var out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* // returns <Complex128Array>
*
* var data = reinterpret128( out, 0 );
* // returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* var arr = complex( out, data, 1, 0 );
* // returns <Complex128Array>
*
* var bool = ( arr === out );
* // returns true
*
* data = reinterpret128( out, 0 );
* returns <Float64Array>[ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ]
*/
function complex( out, data, stride, offset ) {
	var v;
	var s;
	var i;

	s = stride * 2;
	i = offset * 2;
	v = 1.0;
	while ( i >= 0 && i < data.length ) {
		data[ i ] = v;     // real component
		data[ i+1 ] = 0.0; // imaginary component
		i += s;
		v += 1.0;
	}
	return out;
}

/**
* Fills an accessor array with linearly spaced numeric elements which increment by 1 starting from one.
*
* @private
* @param {Object} out - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );

* var out = toAccessorArray( [ 0, 0, 0, 0, 0, 0 ] );
* var arr = accessors( arraylike2object( out ), 1, 0 );
*
* var bool = ( arr === out );
* // returns true
*
* var v = out.get( 0 );
* // returns 1
*
* v = out.get( out.length-1 );
* // returns 6
*/
function accessors( out, stride, offset ) {
	var data;
	var set;
	var v;
	var i;

	data = out.data;
	set = out.accessors[ 1 ];

	i = offset;
	v = 1;
	while ( i >= 0 && i < data.length ) {
		set( data, i, v );
		i += stride;
		v += 1;
	}
	return data;
}


// MAIN //

/**
* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
*
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* var arr = assign( out, 1, 0 );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* var arr = assign( out, -1, out.length-1 );
* // returns [ 6, 5, 4, 3, 2, 1 ]
*/
function assign( out, stride, offset ) {
	var obj = arraylike2object( out );
	if ( obj.accessorProtocol ) {
		// If provided a complex number array, reinterpret as a real typed array and only set the real components...
		if ( isComplex128Array( out ) ) {
			return complex( out, reinterpret128( out, 0 ), stride, offset );
		}
		if ( isComplex64Array( out ) ) {
			return complex( out, reinterpret64( out, 0 ), stride, offset );
		}
		return accessors( obj, stride, offset );
	}
	return indexed( out, stride, offset );
}


// EXPORTS //

module.exports = assign;
