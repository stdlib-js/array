/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import Complex64 = require( '@stdlib/complex/float32/ctor' );
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import Complex128Array = require( './../../../complex128' );
import Complex64Array = require( './../../../complex64' );
import linspace = require( './index' );


// TESTS //

// The function returns an array...
{
	linspace( 0, 11, 20 ); // $ExpectType Float64Array

	linspace( 0, 11, 20, { 'endpoint': true } ); // $ExpectType Float64Array
	linspace( 0, 11, 20, { 'endpoint': false } ); // $ExpectType Float64Array

	linspace( 0, 11, 20, { 'dtype': 'float64' } ); // $ExpectType Float64Array
	linspace( 0, 11, 20, { 'dtype': 'float32' } ); // $ExpectType Float32Array
	linspace( 0, 11, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( 0, 11, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( 0, 11, 20, { 'dtype': 'generic' } ); // $ExpectType number[]

	const z1 = new Complex64( 0.0, 0.0 );
	const z2 = new Complex64( 100.0, 10.0 );
	const z3 = new Complex128( 0.0, 0.0 );
	const z4 = new Complex128( 100.0, 10.0 );

	linspace( z1, 11, 20 ); // $ExpectType Complex128Array
	linspace( 0, z2, 20 ); // $ExpectType Complex128Array
	linspace( z1, z2, 20 ); // $ExpectType Complex64Array

	linspace( z1, z4, 20 ); // $ExpectType Complex128Array
	linspace( z3, z2, 20 ); // $ExpectType Complex128Array

	linspace( 0, z4, 20 ); // $ExpectType Complex128Array
	linspace( z3, 11, 20 ); // $ExpectType Complex128Array
	linspace( z3, z4, 20 ); // $ExpectType Complex128Array

	linspace( z1, 11, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( z1, 11, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( z1, 11, 20, { 'dtype': 'generic' } ); // $ExpectType Complex128[]

	linspace( 0, z2, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( 0, z2, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( 0, z2, 20, { 'dtype': 'generic' } ); // $ExpectType Complex128[]

	linspace( z1, z2, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( z1, z2, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( z1, z2, 20, { 'dtype': 'generic' } ); // $ExpectType Complex64[]

	linspace( z1, z4, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( z1, z4, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( z1, z4, 20, { 'dtype': 'generic' } ); // $ExpectType Complex128[]

	linspace( z3, z2, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( z3, z2, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( z3, z2, 20, { 'dtype': 'generic' } ); // $ExpectType Complex128[]

	linspace( z3, 11, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( z3, 11, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( z3, 11, 20, { 'dtype': 'generic' } ); // $ExpectType Complex128[]

	linspace( 0, z4, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( 0, z4, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( 0, z4, 20, { 'dtype': 'generic' } ); // $ExpectType Complex128[]

	linspace( z3, z4, 20, { 'dtype': 'complex64' } ); // $ExpectType Complex64Array
	linspace( z3, z4, 20, { 'dtype': 'complex128' } ); // $ExpectType Complex128Array
	linspace( z3, z4, 20, { 'dtype': 'generic' } ); // $ExpectType Complex128[]
}

// The compiler throws an error if the function is not provided a number or complex number for the first argument...
{
	const z = new Complex64( 1.0, 2.0 );

	linspace( true, 10, 100 ); // $ExpectError
	linspace( false, 10, 100 ); // $ExpectError
	linspace( '5', 10, 100 ); // $ExpectError
	linspace( [], 10, 100 ); // $ExpectError
	linspace( {}, 10, 100 ); // $ExpectError
	linspace( ( x: number ): number => x, 10, 100 ); // $ExpectError

	linspace( true, 10, 100, {} ); // $ExpectError
	linspace( false, 10, 100, {} ); // $ExpectError
	linspace( '5', 10, 100, {} ); // $ExpectError
	linspace( [], 10, 100, {} ); // $ExpectError
	linspace( {}, 10, 100, {} ); // $ExpectError
	linspace( ( x: number ): number => x, 10, 100, {} ); // $ExpectError

	linspace( true, z, 100 ); // $ExpectError
	linspace( false, z, 100 ); // $ExpectError
	linspace( '5', z, 100 ); // $ExpectError
	linspace( [], z, 100 ); // $ExpectError
	linspace( {}, z, 100 ); // $ExpectError
	linspace( ( x: number ): number => x, z, 100 ); // $ExpectError

	linspace( true, z, 100, {} ); // $ExpectError
	linspace( false, z, 100, {} ); // $ExpectError
	linspace( '5', z, 100, {} ); // $ExpectError
	linspace( [], z, 100, {} ); // $ExpectError
	linspace( {}, z, 100, {} ); // $ExpectError
	linspace( ( x: number ): number => x, z, 100, {} ); // $ExpectError
}

// The compiler throws an error if the function is not provided a number or complex number for the second argument...
{
	const z = new Complex64( 1.0, 2.0 );

	linspace( 0, true, 100 ); // $ExpectError
	linspace( 0, false, 100 ); // $ExpectError
	linspace( 0, '5', 100 ); // $ExpectError
	linspace( 0, [], 100 ); // $ExpectError
	linspace( 0, {}, 100 ); // $ExpectError
	linspace( 0, ( x: number ): number => x, 100 ); // $ExpectError

	linspace( 0, true, 100, {} ); // $ExpectError
	linspace( 0, false, 100, {} ); // $ExpectError
	linspace( 0, '5', 100, {} ); // $ExpectError
	linspace( 0, [], 100, {} ); // $ExpectError
	linspace( 0, {}, 100, {} ); // $ExpectError
	linspace( 0, ( x: number ): number => x, 100, {} ); // $ExpectError

	linspace( z, true, 100 ); // $ExpectError
	linspace( z, false, 100 ); // $ExpectError
	linspace( z, '5', 100 ); // $ExpectError
	linspace( z, [], 100 ); // $ExpectError
	linspace( z, {}, 100 ); // $ExpectError
	linspace( z, ( x: number ): number => x, 100 ); // $ExpectError

	linspace( z, true, 100, {} ); // $ExpectError
	linspace( z, false, 100, {} ); // $ExpectError
	linspace( z, '5', 100, {} ); // $ExpectError
	linspace( z, [], 100, {} ); // $ExpectError
	linspace( z, {}, 100, {} ); // $ExpectError
	linspace( z, ( x: number ): number => x, 100, {} ); // $ExpectError
}

// The compiler throws an error if the function is not provided a number for the third argument...
{
	linspace( 2, 20, '5' ); // $ExpectError
	linspace( 3, 20, true ); // $ExpectError
	linspace( 4, 20, false ); // $ExpectError
	linspace( 2, 20, null ); // $ExpectError
	linspace( 2, 20, [] ); // $ExpectError
	linspace( 2, 20, {} ); // $ExpectError
	linspace( 9, 20, ( x: number ): number => x ); // $ExpectError

	linspace( 2, 20, '5', {} ); // $ExpectError
	linspace( 3, 20, true, {} ); // $ExpectError
	linspace( 4, 20, false, {} ); // $ExpectError
	linspace( 2, 20, null, {} ); // $ExpectError
	linspace( 2, 20, [], {} ); // $ExpectError
	linspace( 2, 20, {}, {} ); // $ExpectError
	linspace( 9, 20, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is not provided an object for the fourth argument...
{
	linspace( 2, 20, 100, '5' ); // $ExpectError
	linspace( 3, 20, 100, true ); // $ExpectError
	linspace( 4, 20, 100, false ); // $ExpectError
	linspace( 2, 20, 100, [] ); // $ExpectError
	linspace( 9, 20, 100, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid `dtype` option...
{
	linspace( 2, 20, 100, { 'dtype': '5' } ); // $ExpectError
	linspace( 2, 20, 100, { 'dtype': 5 } ); // $ExpectError
	linspace( 3, 20, 100, { 'dtype': true } ); // $ExpectError
	linspace( 4, 20, 100, { 'dtype': false } ); // $ExpectError
	linspace( 2, 20, 100, { 'dtype': [] } ); // $ExpectError
	linspace( 2, 20, 100, { 'dtype': {} } ); // $ExpectError
	linspace( 9, 20, 100, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid `endpoint` option...
{
	linspace( 2, 20, 100, { 'endpoint': '5' } ); // $ExpectError
	linspace( 2, 20, 100, { 'endpoint': 5 } ); // $ExpectError
	linspace( 2, 20, 100, { 'endpoint': [] } ); // $ExpectError
	linspace( 2, 20, 100, { 'endpoint': {} } ); // $ExpectError
	linspace( 9, 20, 100, { 'endpoint': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	linspace(); // $ExpectError
	linspace( 3 ); // $ExpectError
	linspace( 3, 10 ); // $ExpectError
	linspace( 3, 10, 100, {}, null ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an output array...
{
	const o1 = new Float64Array( 10 );
	const o2 = new Float32Array( 10 );
	const o3 = [ 1, 2, 3, 4 ];
	const o4 = new Complex128Array( 10 );
	const o5 = new Complex64Array( 10 );

	linspace.assign( 0, 11, o1 ); // $ExpectType Float64Array

	linspace.assign( 0, 11, o1, { 'endpoint': true } ); // $ExpectType Float64Array
	linspace.assign( 0, 11, o1, { 'endpoint': false } ); // $ExpectType Float64Array

	linspace.assign( 0, 11, o2 ); // $ExpectType Float32Array
	linspace.assign( 0, 11, o3 ); // $ExpectType number[]
	linspace.assign( 0, 11, o4 ); // $ExpectType Complex128Array
	linspace.assign( 0, 11, o5 ); // $ExpectType Complex64Array

	const z1 = new Complex64( 0.0, 0.0 );
	const z2 = new Complex64( 100.0, 10.0 );
	const z3 = new Complex128( 0.0, 0.0 );
	const z4 = new Complex128( 100.0, 10.0 );

	linspace.assign( z1, 11, o5 ); // $ExpectType Complex64Array
	linspace.assign( 0, z2, o5 ); // $ExpectType Complex64Array
	linspace.assign( z1, z2, o5 ); // $ExpectType Complex64Array

	linspace.assign( z1, z4, o5 ); // $ExpectType Complex64Array
	linspace.assign( z3, z2, o5 ); // $ExpectType Complex64Array

	linspace.assign( 0, z4, o5 ); // $ExpectType Complex64Array
	linspace.assign( z3, 11, o5 ); // $ExpectType Complex64Array
	linspace.assign( z3, z4, o5 ); // $ExpectType Complex64Array

	linspace.assign( z1, 11, o4 ); // $ExpectType Complex128Array
	linspace.assign( 0, z2, o4 ); // $ExpectType Complex128Array
	linspace.assign( z1, z2, o4 ); // $ExpectType Complex128Array

	linspace.assign( z1, z4, o4 ); // $ExpectType Complex128Array
	linspace.assign( z3, z2, o4 ); // $ExpectType Complex128Array

	linspace.assign( 0, z4, o4 ); // $ExpectType Complex128Array
	linspace.assign( z3, 11, o4 ); // $ExpectType Complex128Array
	linspace.assign( z3, z4, o4 ); // $ExpectType Complex128Array

	linspace.assign( z1, 11, o3 ); // $ExpectType Complex128[]
	linspace.assign( 0, z2, o3 ); // $ExpectType Complex128[]
	linspace.assign( z1, z2, o3 ); // $ExpectType Complex64[]

	linspace.assign( z1, z4, o3 ); // $ExpectType Complex128[]
	linspace.assign( z3, z2, o3 ); // $ExpectType Complex128[]

	linspace.assign( 0, z4, o3 ); // $ExpectType Complex128[]
	linspace.assign( z3, 11, o3 ); // $ExpectType Complex128[]
	linspace.assign( z3, z4, o3 ); // $ExpectType Complex128[]
}

// The compiler throws an error if the `assign` method is not provided a number or complex number for the first argument...
{
	const z = new Complex64( 1.0, 2.0 );
	const o1 = new Float64Array( 10 );
	const o2 = new Complex128Array( 10 );

	linspace.assign( true, 10, o1 ); // $ExpectError
	linspace.assign( false, 10, o1 ); // $ExpectError
	linspace.assign( '5', 10, o1 ); // $ExpectError
	linspace.assign( [], 10, o1 ); // $ExpectError
	linspace.assign( {}, 10, o1 ); // $ExpectError
	linspace.assign( ( x: number ): number => x, 10, o1 ); // $ExpectError

	linspace.assign( true, 10, o1, {} ); // $ExpectError
	linspace.assign( false, 10, o1, {} ); // $ExpectError
	linspace.assign( '5', 10, o1, {} ); // $ExpectError
	linspace.assign( [], 10, o1, {} ); // $ExpectError
	linspace.assign( {}, 10, o1, {} ); // $ExpectError
	linspace.assign( ( x: number ): number => x, 10, o1, {} ); // $ExpectError

	linspace.assign( true, z, o2 ); // $ExpectError
	linspace.assign( false, z, o2 ); // $ExpectError
	linspace.assign( '5', z, o2 ); // $ExpectError
	linspace.assign( [], z, o2 ); // $ExpectError
	linspace.assign( {}, z, o2 ); // $ExpectError
	linspace.assign( ( x: number ): number => x, z, o2 ); // $ExpectError

	linspace.assign( true, z, o2, {} ); // $ExpectError
	linspace.assign( false, z, o2, {} ); // $ExpectError
	linspace.assign( '5', z, o2, {} ); // $ExpectError
	linspace.assign( [], z, o2, {} ); // $ExpectError
	linspace.assign( {}, z, o2, {} ); // $ExpectError
	linspace.assign( ( x: number ): number => x, z, o2, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided a number or complex number for the second argument...
{
	const z = new Complex64( 1.0, 2.0 );
	const o1 = new Float64Array( 10 );
	const o2 = new Complex128Array( 10 );

	linspace.assign( 0, true, o1 ); // $ExpectError
	linspace.assign( 0, false, o1 ); // $ExpectError
	linspace.assign( 0, '5', o1 ); // $ExpectError
	linspace.assign( 0, [], o1 ); // $ExpectError
	linspace.assign( 0, {}, o1 ); // $ExpectError
	linspace.assign( 0, ( x: number ): number => x, o1 ); // $ExpectError

	linspace.assign( 0, true, o1, {} ); // $ExpectError
	linspace.assign( 0, false, o1, {} ); // $ExpectError
	linspace.assign( 0, '5', o1, {} ); // $ExpectError
	linspace.assign( 0, [], o1, {} ); // $ExpectError
	linspace.assign( 0, {}, o1, {} ); // $ExpectError
	linspace.assign( 0, ( x: number ): number => x, o1, {} ); // $ExpectError

	linspace.assign( z, true, o2 ); // $ExpectError
	linspace.assign( z, false, o2 ); // $ExpectError
	linspace.assign( z, '5', o2 ); // $ExpectError
	linspace.assign( z, [], o2 ); // $ExpectError
	linspace.assign( z, {}, o2 ); // $ExpectError
	linspace.assign( z, ( x: number ): number => x, o2 ); // $ExpectError

	linspace.assign( z, true, o2, {} ); // $ExpectError
	linspace.assign( z, false, o2, {} ); // $ExpectError
	linspace.assign( z, '5', o2, {} ); // $ExpectError
	linspace.assign( z, [], o2, {} ); // $ExpectError
	linspace.assign( z, {}, o2, {} ); // $ExpectError
	linspace.assign( z, ( x: number ): number => x, o2, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided an array-like object for the third argument...
{
	const z = new Complex64( 1.0, 2.0 );

	linspace.assign( 0, 10, true ); // $ExpectError
	linspace.assign( 0, 10, false ); // $ExpectError
	linspace.assign( 0, 10, 5 ); // $ExpectError
	linspace.assign( 0, 10, {} ); // $ExpectError

	linspace.assign( 0, 10, true, {} ); // $ExpectError
	linspace.assign( 0, 10, false, {} ); // $ExpectError
	linspace.assign( 0, 10, 5, {} ); // $ExpectError
	linspace.assign( 0, 10, {}, {} ); // $ExpectError

	linspace.assign( z, z, true ); // $ExpectError
	linspace.assign( z, z, false ); // $ExpectError
	linspace.assign( z, z, 5 ); // $ExpectError
	linspace.assign( z, z, {} ); // $ExpectError

	linspace.assign( z, z, true, {} ); // $ExpectError
	linspace.assign( z, z, false, {} ); // $ExpectError
	linspace.assign( z, z, 5, {} ); // $ExpectError
	linspace.assign( z, z, {}, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided an object for the fourth argument...
{
	linspace.assign( 2, 20, [], '5' ); // $ExpectError
	linspace.assign( 3, 20, [], true ); // $ExpectError
	linspace.assign( 4, 20, [], false ); // $ExpectError
	linspace.assign( 2, 20, [], [] ); // $ExpectError
	linspace.assign( 9, 20, [], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided a valid `endpoint` option...
{
	const out = new Float64Array( 10 );

	linspace.assign( 2, 20, out, { 'endpoint': '5' } ); // $ExpectError
	linspace.assign( 2, 20, out, { 'endpoint': 5 } ); // $ExpectError
	linspace.assign( 2, 20, out, { 'endpoint': [] } ); // $ExpectError
	linspace.assign( 2, 20, out, { 'endpoint': {} } ); // $ExpectError
	linspace.assign( 9, 20, out, { 'endpoint': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	linspace.assign(); // $ExpectError
	linspace.assign( 3 ); // $ExpectError
	linspace.assign( 3, 10 ); // $ExpectError
	linspace.assign( 3, 10, [], {}, null ); // $ExpectError
}
