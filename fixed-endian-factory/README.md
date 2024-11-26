<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# fixedEndianFactory

> Return a typed array constructor for creating typed arrays having a specified byte order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

In contrast to built-in typed array constructors which store values according to the host platform byte order, the typed array constructors returned by the factory function allow enforcing a specific byte order. Such enforcement can be particularly advantageous when working with memory buffers which do not necessarily follow host platform byte order, such as [WebAssembly memory][@stdlib/wasm/memory].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var fixedEndianFactory = require( '@stdlib/array/fixed-endian-factory' );
```

#### fixedEndianFactory( dtype )

Returns a typed array constructor for creating typed arrays having a specified [data type][@stdlib/array/typed-dtypes] and byte order.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );
// returns <Function>

var Float32ArrayFE = fixedEndianFactory( 'float32' );
// returns <Function>
```

* * *

### Typed Array Constructor

#### TypedArrayFE( endianness )

A typed array constructor which returns a typed array representing values stored in a specified byte order.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian' );
// returns <Float64ArrayFE>
```

#### TypedArrayFE( endianness, length )

Returns a typed array having a specified length and byte order.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
// returns <Float64ArrayFE>
```

#### TypedArrayFE( endianness, typedarray )

Creates a typed array from another typed array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr1 = new Float32Array( [ 0.5, 0.5, 0.5 ] );
var arr2 = new Float64ArrayFE( 'little-endian', arr1 );
// returns <Float64ArrayFE>

var v = arr2.get( 0 );
// returns 0.5
```

#### TypedArrayFE( endianness, obj )

Creates a typed array from an array-like object or iterable.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 0.5, 0.5, 0.5 ] );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 0.5
```

#### TypedArrayFE( endianness, buffer\[, byteOffset\[, length]] )

Returns a typed array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var buf = new ArrayBuffer( 32 );
var arr = new Float64ArrayFE( 'little-endian', buf, 0, 4 );
// returns <Float64ArrayFE>
```

* * *

### Typed Array Properties

<a name="static-prop-bytes-per-element"></a>

#### TypedArrayFE.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var nbytes = Float64ArrayFE.BYTES_PER_ELEMENT;
// returns 8
```

<a name="static-prop-name"></a>

#### TypedArrayFE.name

Typed array constructor name.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var str = Float64ArrayFE.name;
// returns 'Float64ArrayFE'
```

<a name="prop-buffer"></a>

#### TypedArrayFE.prototype.buffer

**Read-only** property which returns the [`ArrayBuffer`][@stdlib/array/buffer] referenced by the typed array.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### TypedArrayFE.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the typed array.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var byteLength = arr.byteLength;
// returns 40
```

<a name="prop-byte-offset"></a>

#### TypedArrayFE.prototype.byteOffset

**Read-only** property which returns the offset (in bytes) of the typed array from the start of its [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var byteOffset = arr.byteOffset;
// returns 0
```

<a name="prop-bytes-per-element"></a>

#### TypedArrayFE.prototype.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var nbytes = arr.BYTES_PER_ELEMENT;
// returns 8
```

<a name="prop-length"></a>

#### TypedArrayFE.prototype.length

**Read-only** property which returns the number of view elements.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var len = arr.length;
// returns 5
```

* * *

### Typed Array Methods

<a name="static-method-from"></a>

#### TypedArrayFE.from( endianness, src\[, map\[, thisArg]] )

Creates a new typed array from an array-like object or an iterable.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = Float64ArrayFE.from( 'little-endian', [ 1.0, -1.0 ] );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 1.0
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function mapFcn( v ) {
    return v * 2.0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = Float64ArrayFE.from( 'little-endian', [ 1.0, -1.0 ], mapFcn );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 2.0
```

A callback function is provided two arguments:

-   **value**: source value.
-   **index**: source index.

To set the callback execution context, provide a `thisArg`.

```javascript
function mapFcn( v ) {
    this.count += 1;
    return v * 2.0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var ctx = {
    'count': 0
};

var arr = Float64ArrayFE.from( 'little-endian', [ 1.0, -1.0 ], mapFcn, ctx );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 2.0

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### TypedArrayFE.of( endianness, element0\[, element1\[, ...elementN]] )

Creates a new typed array from a variable number of arguments.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = Float64ArrayFE.of( 'little-endian', 1.0, -1.0 );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 1.0
```

<a name="method-at"></a>

#### TypedArrayFE.prototype.at( i )

Returns an array element located at integer position (index) `i`, with support for both nonnegative and negative integer positions.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var out = arr.at( 0 );
// returns 1.0

out = arr.at( -1 );
// returns 3.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var v = arr.at( 100 );
// returns undefined

v = arr.at( -100 );
// returns undefined
```

<a name="method-every"></a>

#### TypedArrayFE.prototype.every( predicate\[, thisArg] )

Tests whether all the elements in an array pass a test implemented by a predicate function.

```javascript
function isNegative( v ) {
    return v < 0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ -1.0, -2.0, -3.0, -4.0 ] );
// returns <Float64ArrayFE>

var bool = arr.every( isNegative );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function isPositive( v, i ) {
    this.count += 1;
    return v > 0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, -3.0 ] );
// returns <Float64ArrayFE>

var context = {
    'count': 0
};

var bool = arr.every( isPositive, context );
// returns false

var count = context.count;
// returns 3
```

<a name="method-for-each"></a>

#### TypedArrayFE.prototype.forEach( callbackFn\[, thisArg] )

Invokes a function once for each array element.

```javascript
function log( v, i ) {
    console.log( '%s: %s', i.toString(), v.toString() );
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 3 );
// returns <Float64ArrayFE>

arr.set( 1.5, 0 );
arr.set( 2.5, 1 );
arr.set( 3.5, 2 );

arr.forEach( log );
/* =>
    0: 1.5
    1: 2.5
    2: 3.5
*/
```

The invoked function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function fcn( v, i ) {
    this.count += 1;
    console.log( '%s: %s', i.toString(), v.toString() );
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 3 );
// returns <Float64ArrayFE>

var context = {
    'count': 0
};

arr.set( 1.0, 0 );
arr.set( 2.0, 1 );
arr.set( 3.0, 2 );

arr.forEach( fcn, context );

var count = context.count;
// returns 3
```

<a name="method-get"></a>

#### TypedArrayFE.prototype.get( i )

Returns an array element located at a nonnegative integer position (index) `i`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 10 );
// returns <Float64ArrayFE>

// Set the first element:
arr.set( 1.0, 0 );

// Get the first element:
var v = arr.get( 0 );
// returns 1.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 10 );
// returns <Float64ArrayFE>

var v = arr.get( 100 );
// returns undefined
```

<a name="method-set"></a>

#### TypedArrayFE.prototype.set( arr\[, offset] )

Sets array elements.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 1.0

v = arr.get( 1 );
// returns 2.0

// Set the first two array elements:
arr.set( [ 4.0, 5.0 ] );

v = arr.get( 0 );
// returns 4.0

v = arr.get( 1 );
// returns 5.0
```

By default, the method starts writing values at the first array index. To specify an alternative index, provide an index `offset`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

// Set the last two array elements:
arr.set( [ 4.0, 5.0 ], 1 );

var v = arr.get( 1 );
// returns 4.0

v = arr.get( 2 );
// returns 5.0
```

A few notes:

-   If `i` is out-of-bounds, the method throws an error.
-   If a target array cannot accommodate all values (i.e., the length of source array plus `i` exceeds the target array length), the method throws an error.
-   If provided a typed array which shares an [`ArrayBuffer`][@stdlib/array/buffer] with the target array, the method will intelligently copy the source range to the destination range.

<a name="method-some"></a>

#### TypedArrayFE.prototype.some( predicate\[, thisArg] )

Tests whether at least one element in an array passes a test implemented by a predicate function.

```javascript
function isPositive( v ) {
    return v > 0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ -1.0, 2.0, -3.0, -4.0 ] );
// returns <Float64ArrayFE>

var bool = arr.some( isPositive );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function isPositive( v, i ) {
    this.count += 1;
    return v > 0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ -1.0, -2.0, -3.0 ] );
// returns <Float64ArrayFE>

var context = {
    'count': 0
};

var bool = arr.some( isPositive, context );
// returns false

var count = context.count;
// returns 3
```

<a name="method-to-string"></a>

#### TypedArrayFE.prototype.toString()

Serializes an array as a string.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var str = arr.toString();
// returns '1,2,3'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   A returned constructor supports the following byte orders:

    -   **little-endian**: store values such that bytes are stored from least-to-most significant bytes. This is the dominant ordering for processor architectures and their associated memory. This is also the ordering for [WebAssembly memory][@stdlib/wasm/memory].
    -   **big-endian**: store values such that bytes are stored from most-to-least significant bytes. This is the dominant ordering in network protocols.

-   While returned constructors _strive_ to maintain (but do not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   Constructors do **not** require the `new` operator.
    -   Accessing array elements using bracket syntax (e.g., `X[i]`) is **not** supported. Instead, one **must** use the `.get()` method.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var logEach = require( '@stdlib/console/log-each' );
var fixedEndianFactory = require( '@stdlib/array/fixed-endian-factory' );

var Float64ArrayFE = fixedEndianFactory( 'float64' );

// Create a typed array by specifying a length:
var out = new Float64ArrayFE( 'little-endian', 3 );
logEach( '%s', out );

// Create a typed array from an array:
var arr = [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ];
out = new Float64ArrayFE( 'big-endian', arr );
logEach( '%s', out );

// Create a typed array from an array buffer:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float64ArrayFE( 'little-endian', arr.buffer );
logEach( '%s', out );

// Create a typed array from an array buffer view:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float64ArrayFE( 'big-endian', arr.buffer, 8, 2 );
logEach( '%s', out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/typed]: https://github.com/stdlib-js/array/tree/main/typed

[@stdlib/array/buffer]: https://github.com/stdlib-js/array/tree/main/buffer

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/array/typed-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-dtypes

</section>

<!-- /.links -->
