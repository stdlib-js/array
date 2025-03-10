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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isAccessorArray = require( './../../base/assert/is-accessor-array' );
var array2json = require( './../../to-json' );
var dtype = require( './../../dtype' );
var copy = require( './../../base/copy' );
var resolveGetter = require( './../../base/resolve-getter' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var cache = require( './cache.js' );
var findArrayIndex = require( './find.js' );
var generateId = require( './id.js' );


// MAIN //

/**
* Array index constructor.
*
* @constructor
* @param {Collection} x - input array
* @param {Options} [options] - function options
* @param {boolean} [options.persist=false] - boolean indicating whether to continue persisting an index object after first usage
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} first argument must be a valid index array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ArrayIndex} ArrayIndex instance
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 0, 1, 0 ] );
*
* var idx = new ArrayIndex( x );
* // returns <ArrayIndex>
*/
function ArrayIndex( x ) {
	var opts;
	var err;
	var get;
	var dt;
	var t;
	var v;
	if ( !(this instanceof ArrayIndex) ) {
		if ( arguments.length > 1 ) {
			return new ArrayIndex( x, arguments[ 1 ] );
		}
		return new ArrayIndex( x );
	}
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	dt = dtype( x );

	// When provided a "generic" array or an array of an unknown data type, attempt to infer the type of index array...
	if ( dt === 'generic' || dt === null ) {
		if ( x.length > 0 ) {
			get = resolveGetter( x );
			v = get( x, 0 );

			// Infer the "type" of index array from the first element...
			if ( isBoolean( v ) ) {
				t = 'bool';
			} else if ( isInteger( v ) ) {
				t = 'int';
			} else {
				throw new TypeError( 'invalid argument. First argument must be a valid index array.' );
			}
		} else {
			t = 'int';
		}
	} else if ( dt === 'int32' ) {
		t = 'int';
	} else if ( dt === 'uint8' ) {
		t = 'mask';
	} else if ( dt === 'bool' ) {
		t = 'bool';
	} else {
		throw new TypeError( 'invalid argument. First argument must be a valid index array.' );
	}
	// Resolve index options:
	opts = defaults();
	if ( arguments.length > 1 ) {
		err = validate( opts, arguments[ 1 ] );
		if ( err ) {
			throw err;
		}
	}
	// Add the array index to the index cache:
	cache.push({
		'id': generateId(),
		'ref': this,
		'data': x,
		'type': t,
		'dtype': dt,
		'persist': opts.persist
	});

	// Store a reference to the cache node:
	setReadOnly( this, '_node', cache.last() );

	// Initialize a boolean flag indicating whether an array index object has been invalidated (i.e., freed):
	setNonEnumerable( this, '_invalidated', false );

	return this;
}

/**
* Constructor name.
*
* @name name
* @memberof ArrayIndex
* @readonly
* @type {string}
* @default 'ArrayIndex'
*
* @example
* var str = ArrayIndex.name;
* // returns 'ArrayIndex'
*/
setReadOnly( ArrayIndex, 'name', 'ArrayIndex' );

/**
* Frees an array index object associated with a provided identifier.
*
* @name free
* @memberof ArrayIndex
* @type {Function}
* @param {string} id - identifier
* @returns {boolean} boolean indicating whether an array index object was successfully freed
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ), {
*     'persist': true
* });
* // returns <ArrayIndex>
*
* // ...
*
* var out = ArrayIndex.free( idx.id );
* // returns true
*/
setReadOnly( ArrayIndex, 'free', function free( id ) {
	var node;
	var v;

	// Retrieve the array index object with the specified identifier:
	node = findArrayIndex( id );
	if ( node === null ) {
		return false;
	}
	v = node.value;

	// Invalidate the array instance object:
	setReadOnly( v.ref, '_invalidated', true );

	// Remove the array instance from the cache:
	cache.remove( node );

	// Remove the reference to the original array:
	v.data = null;

	return true;
});

/**
* Returns the array associated with a provided identifier.
*
* @name get
* @memberof ArrayIndex
* @type {Function}
* @param {string} id - identifier
* @returns {(Object|null)} object containing array index data
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ), {
*     'persist': true
* });
* // returns <ArrayIndex>
*
* // ...
*
* var o = ArrayIndex.get( idx.id );
* // returns {...}
*
* var d = o.data;
* // returns <Uint8Array>[ 1, 0, 1, 0 ]
*
* var t = o.type;
* // returns 'mask'
*
* var dt = o.dtype;
* // returns 'uint8'
*/
setReadOnly( ArrayIndex, 'get', function get( id ) {
	var node;
	var out;
	var v;

	// Retrieve the array index object with the specified identifier:
	node = findArrayIndex( id );
	if ( node === null ) {
		return null;
	}
	v = node.value;

	// Assemble the output object:
	out = {
		'data': v.data,
		'type': v.type,
		'dtype': v.dtype
	};

	// If the array index object should not be persisted, go ahead and remove the object from the cache...
	if ( !v.persist ) {
		ArrayIndex.free( id ); // note: this should come last, after having retrieved all desired array index node data
	}
	return out;
});

/**
* Returns the underlying array data of an array index object.
*
* @name data
* @memberof ArrayIndex.prototype
* @readonly
* @type {Collection}
* @throws {Error} array index is no longer valid
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
* // returns <ArrayIndex>
*
* var v = idx.data;
* // returns <Uint8Array>[ 1, 0, 1, 0 ]
*/
setReadOnlyAccessor( ArrayIndex.prototype, 'data', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This array index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.data;
});

/**
* Returns the underlying array data type of an array index object.
*
* @name dtype
* @memberof ArrayIndex.prototype
* @readonly
* @type {string}
* @throws {Error} array index is no longer valid
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
* // returns <ArrayIndex>
*
* var t = idx.dtype;
* // returns 'uint8'
*/
setReadOnlyAccessor( ArrayIndex.prototype, 'dtype', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This array index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.dtype;
});

/**
* Returns the identifier associated with an array index object.
*
* @name id
* @memberof ArrayIndex.prototype
* @readonly
* @type {string}
* @throws {Error} array index is no longer valid
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
* // returns <ArrayIndex>
*
* var id = idx.id;
* // returns <string>
*/
setReadOnlyAccessor( ArrayIndex.prototype, 'id', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This array index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.id;
});

/**
* Returns a boolean indicating if an array index is actively cached.
*
* @name isCached
* @memberof ArrayIndex.prototype
* @readonly
* @type {boolean}
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
* // returns <ArrayIndex>
*
* var out = idx.isCached;
* // returns true
*/
setReadOnlyAccessor( ArrayIndex.prototype, 'isCached', function get() {
	return !this._invalidated;
});

/**
* Returns the type of an array index object.
*
* @name type
* @memberof ArrayIndex.prototype
* @readonly
* @type {string}
* @throws {Error} array index is no longer valid
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
* // returns <ArrayIndex>
*
* var t = idx.type;
* // returns 'mask'
*/
setReadOnlyAccessor( ArrayIndex.prototype, 'type', function get() {
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This array index instance has already been freed and can no longer be used.' );
	}
	return this._node.value.type;
});

/**
* Serializes an array index object to a string.
*
* @name toString
* @memberof ArrayIndex.prototype
* @type {Function}
* @throws {Error} array index is no longer valid
* @returns {string} serialized array index object
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
* // returns <ArrayIndex>
*
* var str = idx.toString();
* // e.g., 'ArrayIndex<0>'
*/
setReadOnly( ArrayIndex.prototype, 'toString', function toString() {
	var v;
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This array index instance has already been freed and can no longer be used.' );
	}
	v = this._node.value;
	return 'ArrayIndex<' + v.id + '>';
});

/**
* Serializes an array index object as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying an `ArrayIndex` instance.
*
* @name toJSON
* @memberof ArrayIndex.prototype
* @type {Function}
* @throws {Error} array index is no longer valid
* @returns {Object} serialized array index object
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
* // returns <ArrayIndex>
*
* var o = idx.toJSON();
* // returns { 'type': 'ArrayIndex', 'data': { 'type': 'Uint8Array', 'data': [ 1, 0, 1, 0 ] } }
*/
setReadOnly( ArrayIndex.prototype, 'toJSON', function toJSON() {
	var v;
	var o;
	if ( this._invalidated ) {
		throw new Error( 'invalid operation. This array index instance has already been freed and can no longer be used.' );
	}
	v = this._node.value;
	if ( v.dtype === 'generic' || v.dtype === null ) {
		if ( isAccessorArray( v.data ) ) {
			o = copy( v.data );
		} else {
			o = v.data;
		}
	} else {
		o = array2json( v.data );
	}
	return {
		'type': 'ArrayIndex',
		'data': o
	};
});


// EXPORTS //

module.exports = ArrayIndex;
