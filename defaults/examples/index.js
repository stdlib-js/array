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

var empty = require( './../../empty' );
var dtype = require( './../../dtype' );
var defaults = require( './../lib' );

var o = defaults();

var x = empty( 10, o.dtypes.default );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.floating_point );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.real_floating_point );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.integer );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.signed_integer );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.unsigned_integer );
console.log( dtype( x ) );
