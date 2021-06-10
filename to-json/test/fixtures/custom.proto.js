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

var Float64Array = require( '@stdlib/array/float64' );
var defineProperty = require( '@stdlib/utils/define-property' );


// MAIN //

/**
* Creates a CustomTypedArray class.
*
* @private
* @param {TypedArray} ctor - typed array constructor
* @returns {CustomTypedArray} constructor
*/
function createClass( ctor ) {
	if ( !ctor ) {
		ctor = Float64Array;
	}
	/**
	* Create a new object which prototypically inherits from a typed array constructor.
	*
	* @private
	* @constructor
	* @param {Array<number>} data - array data
	* @returns {CustomTypedArray} custom typed array instance
	*/
	function CustomTypedArray( data ) {
		var i;
		for ( i = 0; i < data.length; i++ ) {
			this[ i ] = data[ i ];
		}
		defineProperty( this, 'length', {
			'configurable': false,
			'enumerable': true,
			'writable': false,
			'value': data.length
		});
		return this;
	}

	/**
	* Create a prototype which inherits from the parent prototype.
	*/
	CustomTypedArray.prototype = Object.create( ctor.prototype );

	/**
	* Set the constructor.
	*/
	CustomTypedArray.prototype.constructor = CustomTypedArray;

	return CustomTypedArray;
}


// EXPORTS //

module.exports = createClass;
