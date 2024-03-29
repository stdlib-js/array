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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var accessors = require( './../../../base/accessors' );
var isCollection = require( '@stdlib/assert/is-collection' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Sets the length of an array-like object.
*
* @private
* @param {NonNegativeInteger} len - length
*/
function setLength( len ) {
	this._buffer.length = len;
}

/**
* Returns the length of an array-like object.
*
* @private
* @returns {NonNegativeInteger} length
*/
function getLength() {
	return this._buffer.length;
}


// MAIN //

/**
* Creates a minimal array-like object supporting the accessor protocol from another array-like object.
*
* @constructor
* @param {Collection} arr - input array
* @throws {TypeError} must provide an array-like object
* @returns {AccessorArray} accessor array instance
*
* @example
* var arr = new AccessorArray( [ 1, 2, 3 ] );
* // returns <AccessorArray>
*
* var v = arr.get( 0 );
* // returns 1
*/
function AccessorArray( arr ) {
	var o;
	if ( !(this instanceof AccessorArray) ) {
		return new AccessorArray( arr );
	}
	if ( !isCollection( arr ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an array-like object. Value: `%s`.', arr ) );
	}
	o = accessors( arr );
	this._buffer = arr;
	this._getter = o.accessors[ 0 ];
	this._setter = o.accessors[ 1 ];
	return this;
}

/**
* Constructor name.
*
* @name name
* @memberof AccessorArray
* @readonly
* @type {string}
* @default 'AccessorArray'
*
* @example
* var name = AccessorArray.name;
* // returns 'AccessorArray'
*/
setReadOnly( AccessorArray, 'name', 'AccessorArray' );

/**
* Read/write accessor for getting/setting the number of elements.
*
* @name length
* @memberof AccessorArray.prototype
* @type {NonNegativeInteger}
*/
setReadWriteAccessor( AccessorArray.prototype, 'length', getLength, setLength );

/**
* Returns an element.
*
* @name get
* @memberof AccessorArray.prototype
* @type {Function}
* @param {integer} idx - element index
* @returns {*} element
*
* @example
* var arr = new AccessorArray( [ 1, 2, 3 ] );
* // returns <AccessorArray>
*
* var v = arr.get( 0 );
* // returns 1
*/
setReadOnly( AccessorArray.prototype, 'get', function get( idx ) {
	return this._getter( this._buffer, idx );
});

/**
* Sets one or more elements.
*
* @name set
* @memberof AccessorArray.prototype
* @type {Function}
* @param {*} value - value to set
* @param {integer} [idx] - element index
* @returns {void}
*
* @example
* var arr = new AccessorArray( [ 1, 2, 3 ] );
* // returns <AccessorArray>
*
* var v = arr.get( 0 );
* // returns 1
*
* arr.set( 5, 0 );
*
* v = arr.get( 0 );
* // returns 5
*/
setReadOnly( AccessorArray.prototype, 'set', function set( value, idx ) {
	if ( arguments.length < 2 ) {
		this._setter( this._buffer, 0, value );
		return;
	}
	this._setter( this._buffer, idx, value );
});


// EXPORTS //

module.exports = AccessorArray;
