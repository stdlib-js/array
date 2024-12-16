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

/* eslint-disable max-len, no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isCollection = require( '@stdlib/assert/is-collection' );
var isObject = require( '@stdlib/assert/is-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var getter = require( './../../base/getter' );
var accessorGetter = require( './../../base/accessor-getter' );
var inherits = require( '@stdlib/utils/inherit' );
var fixedEndianFactory = require( './../../fixed-endian-factory' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var capitalize = require( '@stdlib/string/base/capitalize' );
var format = require( '@stdlib/string/format' );
var fromIterator = require( './from_iterator.js' );
var fromIteratorMap = require( './from_iterator_map.js' );


// VARIABLES //

var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();
var BYTE_ORDER = 'little-endian';
var DTYPE2SET = {
	'float64': 'setFloat64',
	'float32': 'setFloat32',
	'int32': 'setInt32',
	'int16': 'setInt16',
	'uint32': 'setUint32',
	'uint16': 'setUint16'
};
var CHAR2ARTICLE = {
	'c': 'a',
	'f': 'a',
	'i': 'an',
	'u': 'a',
	'b': 'a'
};


// FUNCTIONS //

/**
* Converts a data type string to a constructor name.
*
* @private
* @param {string} dtype - data type
* @returns {string} constructor name
*
* @example
* var n = dtype2ctor( 'float64' );
* // returns 'Float64ArrayLE'
*
* @example
* var n = dtype2ctor( 'int32' );
* // returns 'Int32ArrayLE'
*/
function dtype2ctor( dtype ) {
	return capitalize( dtype ) + 'ArrayLE';
}


// MAIN //

/**
* Returns a typed array constructor for creating typed arrays stored in little-endian byte order.
*
* @param {string} dtype - typed array data type
* @throws {TypeError} first argument must be a supported data type
* @returns {Function} typed array constructor
*
* @example
* var Float64ArrayLE = factory( 'float64' );
*
* var arr = new Float64ArrayLE();
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 0
*
* @example
* var Float64ArrayLE = factory( 'float64' );
*
* var arr = new Float64ArrayLE( 2 );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var Float64ArrayLE = factory( 'float64' );
*
* var arr = new Float64ArrayLE( [ 1.0, 2.0 ] );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var Float64ArrayLE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64ArrayLE( buf );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var Float64ArrayLE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64ArrayLE( buf, 8 );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var Float64ArrayLE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Float64ArrayLE( buf, 8, 2 );
* // returns <Float64ArrayLE>
*
* var len = arr.length;
* // returns 2
*/
function factory( dtype ) {
	var BYTES_PER_ELEMENT;
	var CTOR_NAME;
	var SETTER;
	var parent;

	// Defer `dtype` validation to `fixedEndianFactory`:
	parent = fixedEndianFactory( dtype );

	BYTES_PER_ELEMENT = bytesPerElement( dtype );
	CTOR_NAME = dtype2ctor( dtype );
	SETTER = DTYPE2SET[ dtype ];

	/**
	* Typed array constructor which returns a typed array representing an array of values in little-endian byte order.
	*
	* @private
	* @constructor
	* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or an iterable
	* @param {NonNegativeInteger} [byteOffset=0] - byte offset
	* @param {NonNegativeInteger} [length] - view length
	* @throws {TypeError} if provided only one argument, the argument must be a valid argument
	* @throws {TypeError} byte offset must be a nonnegative integer
	* @throws {RangeError} must provide sufficient memory to accommodate byte offset and view length requirements
	* @returns {TypedArray} typed array instance
	*/
	function TypedArray() {
		var nargs = arguments.length;
		if ( !(this instanceof TypedArray) ) {
			if ( nargs === 0 ) {
				return new TypedArray();
			}
			if ( nargs === 1 ) {
				return new TypedArray( arguments[0] );
			}
			if ( nargs === 2 ) {
				return new TypedArray( arguments[0], arguments[1] );
			}
			return new TypedArray( arguments[0], arguments[1], arguments[2] );
		}
		if ( nargs === 0 ) {
			parent.call( this, BYTE_ORDER );
		} else if ( nargs === 1 ) {
			parent.call( this, BYTE_ORDER, arguments[0] );
		} else if ( nargs === 2 ) {
			parent.call( this, BYTE_ORDER, arguments[0], arguments[1] );
		} else if ( nargs === 3 ) {
			parent.call( this, BYTE_ORDER, arguments[0], arguments[1], arguments[2] );
		}
		return this;
	}

	/**
	* Size (in bytes) of each array element.
	*
	* @private
	* @name BYTES_PER_ELEMENT
	* @memberof TypedArray
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( TypedArray, 'BYTES_PER_ELEMENT', BYTES_PER_ELEMENT );

	/**
	* Constructor name.
	*
	* @private
	* @name name
	* @memberof TypedArray
	* @readonly
	* @type {string}
	*/
	setReadOnly( TypedArray, 'name', CTOR_NAME );

	/**
	* Creates a new typed array from an array-like object or an iterable.
	*
	* @private
	* @name from
	* @memberof TypedArray
	* @type {Function}
	* @param {(Collection|Iterable)} src - array-like object or iterable
	* @param {Function} [clbk] - callback to invoke for each source element
	* @param {*} [thisArg] - context
	* @throws {TypeError} `this` context must be a constructor
	* @throws {TypeError} `this` must be a typed array constructor
	* @throws {TypeError} first argument must be an array-like object or an iterable
	* @throws {TypeError} second argument must be a function
	* @returns {TypedArray} typed array instance
	*/
	setReadOnly( TypedArray, 'from', function from( src ) {
		var thisArg;
		var nargs;
		var clbk;
		var out;
		var buf;
		var tmp;
		var get;
		var len;
		var i;
		if ( !isFunction( this ) ) {
			throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
		}
		if ( !isTypedArrayConstructor( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not %s %s.', CHAR2ARTICLE[ dtype[0] ], CTOR_NAME ) );
		}
		nargs = arguments.length;
		if ( nargs > 1 ) {
			clbk = arguments[ 1 ];
			if ( !isFunction( clbk ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', clbk ) );
			}
			if ( nargs > 2 ) {
				thisArg = arguments[ 2 ];
			}
		}
		if ( isCollection( src ) ) {
			if ( clbk ) {
				len = src.length;
				if ( src.get && src.set ) {
					get = accessorGetter( 'default' );
				} else {
					get = getter( 'default' );
				}
				out = new this( len );
				buf = out._buffer; // eslint-disable-line no-underscore-dangle
				for ( i = 0; i < len; i++ ) {
					buf[ SETTER ]( i*BYTES_PER_ELEMENT, clbk.call( thisArg, get( src, i ), i ), true );
				}
				return out;
			}
			return new this( src );
		}
		if ( isObject( src ) && HAS_ITERATOR_SYMBOL && isFunction( src[ ITERATOR_SYMBOL ] ) ) {
			buf = src[ ITERATOR_SYMBOL ]();
			if ( !isFunction( buf.next ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', src ) );
			}
			if ( clbk ) {
				tmp = fromIteratorMap( buf, clbk, thisArg );
			} else {
				tmp = fromIterator( buf );
			}
			len = tmp.length;
			out = new this( len );
			buf = out._buffer; // eslint-disable-line no-underscore-dangle
			for ( i = 0; i < len; i++ ) {
				buf[ SETTER ]( i*BYTES_PER_ELEMENT, tmp[ i ], true );
			}
			return out;
		}
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.', src ) );
	});

	/**
	* Creates a new typed array from a variable number of arguments.
	*
	* @private
	* @name of
	* @memberof TypedArray
	* @type {Function}
	* @param {...*} element - array elements
	* @throws {TypeError} `this` context must be a constructor
	* @throws {TypeError} `this` must be a typed array constructor
	* @returns {TypedArray} typed array instance
	*/
	setReadOnly( TypedArray, 'of', function of() {
		var args;
		var i;
		if ( !isFunction( this ) ) {
			throw new TypeError( 'invalid invocation. `this` context must be a constructor.' );
		}
		if ( !isTypedArrayConstructor( this ) ) {
			throw new TypeError( format( 'invalid invocation. `this` is not %s %s.', CHAR2ARTICLE[ dtype[0] ], CTOR_NAME ) );
		}
		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return new this( args );
	});

	// Inherit from the parent constructor:
	inherits( TypedArray, parent );

	return TypedArray;

	/**
	* Returns a boolean indicating if a value is a typed array constructor.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a typed array constructor
	*/
	function isTypedArrayConstructor( value ) {
		return ( value === TypedArray );
	}
}


// EXPORTS //

module.exports = factory;
