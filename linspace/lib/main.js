/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var dtype = require( '@stdlib/complex/dtype' );
var ctors = require( './../../typed-float-ctors' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var DEFAULTS = require( './../../defaults' );
var format = require( '@stdlib/string/format' );
var genreal = require( './generic_real.js' );
var gencmplx = require( './generic_complex.js' );
var typedreal = require( './typed_real.js' );
var typedcmplx = require( './typed_complex.js' );
var validate = require( './validate.js' );
var defaults = require( './defaults.json' );


// VARIABLES //

var DEFAULT_COMPLEX_DTYPE = DEFAULTS.get( 'dtypes.complex_floating_point' );


// MAIN //

/**
* Generates a linearly spaced array over a specified interval.
*
* @param {(number|ComplexLike)} start - start of interval
* @param {(number|ComplexLike)} stop - end of interval
* @param {NonNegativeInteger} len - length of output array
* @param {Options} [options] - options
* @param {string} [options.dtype] - output array data type
* @param {boolean} [options.endpoint=true] - boolean indicating whether to include the `stop` value in the output array
* @throws {TypeError} first argument must be either a real or complex number
* @throws {TypeError} second argument must be either a real or complex number
* @throws {TypeError} third argument must be a nonnegative integer
* @throws {TypeError} last argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} the output array data type must be a complex number data type or "generic" when either `start` or `stop` is a complex number
* @throws {TypeError} the output array data type must be a real or complex floating-point number data type or "generic"
* @returns {(Array|TypedArray|ComplexArray)} linearly spaced array
*
* @example
* var arr = linspace( 0, 100, 6, {
*     'dtype': 'generic'
* });
* // returns [ 0, 20, 40, 60, 80, 100 ]
*/
function linspace( start, stop, len ) {
	var opts;
	var ctor;
	var err;
	var out;
	var dt1;
	var dt2;
	var flg;

	if ( typeof start === 'object' ) {
		dt1 = dtype( start );
		if ( dt1 === null ) {
			if ( !isComplexLike( start ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be either a real or complex number. Value: `%s`.', start ) );
			}
			dt1 = 'complex128';
		}
		flg = true;
	} else if ( !isNumber( start ) || isnan( start ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be either a real or complex number. Value: `%s`.', start ) );
	} else {
		dt1 = 'float64';
	}
	if ( typeof stop === 'object' ) {
		dt2 = dtype( stop );
		if ( dt2 === null ) {
			if ( !isComplexLike( stop ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be either a real or complex number. Value: `%s`.', stop ) );
			}
			dt2 = 'complex128';
		}
		flg = true;
	} else if ( !isNumber( stop ) || isnan( stop ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be either a real or complex number. Value: `%s`.', stop ) );
	} else {
		dt2 = 'float64';
	}
	if ( !isNonNegativeInteger( len ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a nonnegative integer. Value: `%s`.', len ) );
	}
	opts = {
		'endpoint': defaults.endpoint
	};
	if ( dt1 === dt2 ) {
		opts.dtype = dt1; // one of 'float64' || 'complex64' || 'complex128'
	} else {
		// If dtypes are different, then at least one is a complex number. According to type promotion rules, for all possible dtype permutations, the default output data type should be 'complex128'...
		opts.dtype = DEFAULT_COMPLEX_DTYPE;
	}
	if ( arguments.length > 3 ) {
		err = validate( opts, arguments[ 3 ] );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.dtype === 'generic' ) {
		if ( flg ) {
			return gencmplx( dt1, start, dt2, stop, len, opts.endpoint );
		}
		return genreal( start, stop, len, opts.endpoint );
	}
	ctor = ctors( opts.dtype );
	if ( ctor === null ) {
		throw new TypeError( format( 'invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.', 'dtype', opts.dtype ) );
	}
	out = new ctor( len );
	if ( opts.dtype === 'complex64' ) {
		typedcmplx( reinterpret64( out, 0 ), dt1, start, dt2, stop, len, opts.endpoint ); // eslint-disable-line max-len
		return out;
	}
	if ( opts.dtype === 'complex128' ) {
		typedcmplx( reinterpret128( out, 0 ), dt1, start, dt2, stop, len, opts.endpoint ); // eslint-disable-line max-len
		return out;
	}
	if ( flg ) {
		throw new TypeError( 'invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".' );
	}
	return typedreal( out, start, stop, len, opts.endpoint );
}


// EXPORTS //

module.exports = linspace;
