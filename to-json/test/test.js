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

var vm = require( 'vm' ); // TODO: handle in-browser tests
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var hasClassSupport = require( '@stdlib/assert/has-class-support' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var Int8Array = require( './../../int8' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );
var Int16Array = require( './../../int16' );
var Uint16Array = require( './../../uint16' );
var Int32Array = require( './../../int32' );
var Uint32Array = require( './../../uint32' );
var Float32Array = require( './../../float32' );
var Float64Array = require( './../../float64' );
var Complex64Array = require( './../../complex64' );
var Complex128Array = require( './../../complex128' );
var BooleanArray = require( './../../bool' );
var toJSON = require( './../lib' );


// FIXTURES //

var createClass1 = require( './fixtures/custom.proto.js' );
var createClass2 = require( './fixtures/custom.subclass.js' );


// VARIABLES //

var hasClasses = hasClassSupport();
var opts = {
	'skip': false
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toJSON, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided anything other than a typed array instance, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws when provided a ' + (typeof values[i]) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			toJSON( value );
		};
	}
});

tape( 'the function returns a JSON object', function test( t ) {
	var json;
	var arr;

	arr = new Float64Array( [ 5.0, 3.0 ] );
	json = toJSON( arr );
	t.strictEqual( isPlainObject( json ), true, 'returns an object' );
	t.end();
});

tape( 'the JSON object includes a typed array type', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Float64Array( 1 ),
		new Float32Array( 1 ),
		new Int32Array( 1 ),
		new Uint32Array( 1 ),
		new Int16Array( 1 ),
		new Uint16Array( 1 ),
		new Int8Array( 1 ),
		new Uint8Array( 1 ),
		new Uint8ClampedArray( 1 ),
		new Complex64Array( 1 ),
		new Complex128Array( 1 ),
		new BooleanArray( 1 )
	];

	expected = [
		'Float64Array',
		'Float32Array',
		'Int32Array',
		'Uint32Array',
		'Int16Array',
		'Uint16Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Complex64Array',
		'Complex128Array',
		'BooleanArray'
	];

	for ( i = 0; i < values.length; i++ ) {
		json = toJSON( values[ i ] );
		t.strictEqual( json.type, expected[ i ], 'type equal to ' + expected[ i ] );
	}
	t.end();
});

tape( 'the JSON object includes a data property', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Float64Array( [ 1.0 ] ),
		new Float32Array( [ 2.0 ] ),
		new Int32Array( [ 3.0 ] ),
		new Uint32Array( [ 4.0 ] ),
		new Int16Array( [ 5.0 ] ),
		new Uint16Array( [ 6.0 ] ),
		new Int8Array( [ 7.0 ] ),
		new Uint8Array( [ 8.0 ] ),
		new Uint8ClampedArray( [ 9.0 ] ),
		new Complex64Array( [ 1.0, 2.0 ] ),
		new Complex128Array( [ 1.0, 2.0 ] ),
		new BooleanArray( [ true, false ] )
	];

	expected = [
		[ 1.0 ],
		[ 2.0 ],
		[ 3.0 ],
		[ 4.0 ],
		[ 5.0 ],
		[ 6.0 ],
		[ 7.0 ],
		[ 8.0 ],
		[ 9.0 ],
		[ 1.0, 2.0 ],
		[ 1.0, 2.0 ],
		[ 1, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		json = toJSON( values[ i ] );
		t.deepEqual( json.data, expected[ i ], 'has expected property value' );
	}
	t.end();
});

tape( 'custom typed arrays are supported (proto)', function test( t ) {
	var CustomTypedArray;
	var types;
	var ctors;
	var json;
	var arr;
	var i;

	ctors = [
		Float64Array,
		Float32Array,
		Int32Array,
		Uint32Array,
		Int16Array,
		Uint16Array,
		Int8Array,
		Uint8Array,
		Uint8ClampedArray
	];

	types = [
		'Float64Array',
		'Float32Array',
		'Int32Array',
		'Uint32Array',
		'Int16Array',
		'Uint16Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray'
	];

	for ( i = 0; i < ctors.length; i++ ) {
		CustomTypedArray = createClass1( ctors[ i ] );
		arr = new CustomTypedArray( [ 5.0, 3.0 ] );
		json = toJSON( arr );
		t.strictEqual( json.type, types[ i ], 'type equal to ' + types[ i ] );
		t.deepEqual( json.data, [ 5.0, 3.0 ], 'has expected value' );
	}
	t.end();
});

opts.skip = !hasClasses;
tape( 'custom typed arrays are supported (subclass; ES2015)', opts, function test( t ) {
	var CustomTypedArray;
	var ctors;
	var json;
	var arr;
	var i;

	ctors = [
		'Float64Array',
		'Float32Array',
		'Int32Array',
		'Uint32Array',
		'Int16Array',
		'Uint16Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray'
	];

	for ( i = 0; i < ctors.length; i++ ) {
		CustomTypedArray = createClass2( ctors[ i ] );
		arr = new CustomTypedArray( [ 5.0, 3.0 ] );
		json = toJSON( arr );
		t.strictEqual( json.type, ctors[ i ], 'type equal to ' + ctors[ i ] );
		t.deepEqual( json.data, [ 5.0, 3.0 ], 'has expected value' );
	}
	t.end();
});

opts.skip = IS_BROWSER;
tape( 'the function supports serializing a typed array from a different realm', opts, function test( t ) {
	var json;
	var arr;

	arr = vm.runInNewContext( 'new Float64Array( [ 5.0, 3.0 ] )', {
		'Float64Array': Float64Array
	});
	json = toJSON( arr );

	t.strictEqual( json.type, 'Float64Array', 'returns expected value' );
	t.deepEqual( json.data, [ 5.0, 3.0 ], 'returns expected value' );

	t.end();
});

opts.skip = IS_BROWSER;
tape( 'the function supports serializing an object from a different realm which inherits from a typed array', opts, function test( t ) {
	var json;
	var arr;

	arr = vm.runInNewContext( 'function Arr( data ) { Object.defineProperty( this, "length", {"configurable":false,"enumerable":true,"writable":false,"value":data.length}); for ( var i = 0; i < data.length; i++ ) { this[ i ] = data[ i ]; }; return this; }; Arr.prototype = Object.create( Float64Array.prototype ); Arr.prototype.constructor = Arr; new Arr( [ 5.0, 3.0 ] );', {
		'Float64Array': Float64Array
	});
	json = toJSON( arr );

	t.strictEqual( json.type, 'Float64Array', 'returns expected value' );
	t.deepEqual( json.data, [ 5.0, 3.0 ], 'returns expected value' );

	t.end();
});
