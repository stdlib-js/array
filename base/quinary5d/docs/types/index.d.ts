/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Array5D } from '@stdlib/types/array';
import { Shape5D } from '@stdlib/types/ndarray';

/**
* Quinary callback.
*
* @param v1 - element from first input array
* @param v2 - element from second input array
* @param v3 - element from third input array
* @param v4 - element from fourth input array
* @param v5 - element from fifth input array
* @returns result
*/
type Quinary<T, U, V, W, X, Y> = ( v1: T, v2: U, v3: V, v4: W, v5: X ) => Y;

/**
* Applies a quinary callback to elements in five five-dimensional nested input arrays and assigns results to elements in a five-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing five input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - quinary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add5' );
* var ones5d = require( '@stdlib/array/base/ones5d' );
* var zeros5d = require( '@stdlib/array/base/zeros5d' );
*
* var shape = [ 1, 1, 1, 2, 2 ];
*
* var x = ones5d( shape );
* var y = ones5d( shape );
* var z = ones5d( shape );
* var w = ones5d( shape );
* var v = ones5d( shape );
* var out = zeros5d( shape );
*
* quinary5d( [ x, y, z, w, v, out ], shape, add );
*
* console.log( out );
* // => [ [ [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ] ] ]
*/
declare function quinary5d<T = unknown, U = unknown, V = unknown, W = unknown, X = unknown, Y = unknown>( arrays: [ Array5D<T>, Array5D<U>, Array5D<V>, Array5D<W>, Array5D<X>, Array5D<Y> ], shape: Shape5D, fcn: Quinary<T, U, V, W, X, Y> ): void;


// EXPORTS //

export = quinary5d;
