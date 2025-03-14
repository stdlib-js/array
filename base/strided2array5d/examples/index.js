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

var zeroTo = require( './../../../base/zero-to' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var strided2array5d = require( './../lib' );

var shape = [ 1, 1, 3, 3, 3 ];

var x = zeroTo( numel( shape ) );
console.log( x );

var y = strided2array5d( x, shape, shape2strides( shape, 'row-major' ), 0 );
console.log( y );

y = strided2array5d( x, shape, shape2strides( shape, 'column-major' ), 0 );
console.log( y );
