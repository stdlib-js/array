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

# Float64ArrayLE

> Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in little-endian byte order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

In contrast to the [`Float64Array`][@stdlib/array/float64] typed array constructor which stores values according to the host platform byte order, the `Float64ArrayLE` constructor always accesses elements in little-endian byte order. Such enforcement can be particularly advantageous when working with memory buffers which do not necessarily follow host platform byte order, such as [WebAssembly memory][@stdlib/wasm/memory].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Float64ArrayLE = require( '@stdlib/array/little-endian-float64' );
```

#### Float64ArrayLE()

A typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in little-endian byte order.

```javascript
var arr = new Float64ArrayLE();
// returns <Float64ArrayLE>
```

#### Float64ArrayLE( length )

Returns a typed array having a specified length.

```javascript
var arr = new Float64ArrayLE( 5 );
// returns <Float64ArrayLE>
```

#### Float64ArrayLE( typedarray )

Creates a typed array from another typed array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var arr1 = new Float32Array( [ 0.5, 0.5, 0.5 ] );
var arr2 = new Float64ArrayLE( arr1 );
// returns <Float64ArrayLE>

var v = arr2.get( 0 );
// returns 0.5
```

#### Float64ArrayLE( obj )

Creates a typed array from an array-like object or iterable.

```javascript
var arr = new Float64ArrayLE( [ 0.5, 0.5, 0.5 ] );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 0.5
```

#### Float64ArrayLE( buffer\[, byteOffset\[, length]] )

Returns a typed array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var buf = new ArrayBuffer( 32 );
var arr = new Float64ArrayLE( buf, 0, 4 );
// returns <Float64ArrayLE>
```

* * *

### Properties

<a name="static-prop-bytes-per-element"></a>

#### Float64ArrayLE.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var nbytes = Float64ArrayLE.BYTES_PER_ELEMENT;
// returns 8
```

<a name="static-prop-name"></a>

#### Float64ArrayLE.name

Typed array constructor name.

```javascript
var str = Float64ArrayLE.name;
// returns 'Float64ArrayLE'
```

<a name="prop-buffer"></a>

#### Float64ArrayLE.prototype.buffer

**Read-only** property which returns the [`ArrayBuffer`][@stdlib/array/buffer] referenced by the typed array.

```javascript
var arr = new Float64ArrayLE( 5 );
var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### Float64ArrayLE.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the typed array.

```javascript
var arr = new Float64ArrayLE( 5 );
var byteLength = arr.byteLength;
// returns 40
```

<a name="prop-byte-offset"></a>

#### Float64ArrayLE.prototype.byteOffset

**Read-only** property which returns the offset (in bytes) of the typed array from the start of its [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var arr = new Float64ArrayLE( 5 );
var byteOffset = arr.byteOffset;
// returns 0
```

<a name="prop-bytes-per-element"></a>

#### Float64ArrayLE.prototype.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var arr = new Float64ArrayLE( 5 );
var nbytes = arr.BYTES_PER_ELEMENT;
// returns 8
```

<a name="prop-length"></a>

#### Float64ArrayLE.prototype.length

**Read-only** property which returns the number of view elements.

```javascript
var arr = new Float64ArrayLE( 5 );
var len = arr.length;
// returns 5
```

* * *

### Methods

<a name="static-method-from"></a>

#### Float64ArrayLE.from( src\[, map\[, thisArg]] )

Creates a new typed array from an array-like object or an iterable.

```javascript
var arr = Float64ArrayLE.from( [ 1.0, -1.0 ] );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 1.0
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function mapFcn( v ) {
    return v * 2.0;
}

var arr = Float64ArrayLE.from( [ 1.0, -1.0 ], mapFcn );
// returns <Float64ArrayLE>

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

var ctx = {
    'count': 0
};

var arr = Float64ArrayLE.from( [ 1.0, -1.0 ], mapFcn, ctx );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 2.0

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### Float64ArrayLE.of( element0\[, element1\[, ...elementN]] )

Creates a new typed array from a variable number of arguments.

```javascript
var arr = Float64ArrayLE.of( 1.0, -1.0 );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 1.0
```

<a name="method-get"></a>

#### Float64ArrayLE.prototype.get( i )

Returns an array element located at a nonnegative integer position (index) `i`.

```javascript
var arr = new Float64ArrayLE( 10 );

// Set the first element:
arr.set( 1.0, 0 );

// Get the first element:
var v = arr.get( 0 );
// returns 1.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new Float64ArrayLE( 10 );

var v = arr.get( 100 );
// returns undefined
```

<a name="method-set"></a>

#### Float64ArrayLE.prototype.set( arr\[, offset] )

Sets array elements.

```javascript
var arr = new Float64ArrayLE( [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayLE>

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
var arr = new Float64ArrayLE( [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayLE>

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

<a name="method-to-string"></a>

#### Float64ArrayLE.prototype.toString()

Serializes an array as a string.

```javascript
var arr = new Float64ArrayLE( [ 1.0, 2.0, 3.0 ] );

var str = arr.toString();
// returns '1,2,3'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   While a `Float64ArrayLE` _strives_ to maintain (but does not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   The constructor does **not** require the `new` operator.
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
var Float64ArrayLE = require( '@stdlib/array/little-endian-float64' );

// Create a typed array by specifying a length:
var out = new Float64ArrayLE( 3 );
logEach( '%s', out );

// Create a typed array from an array:
var arr = [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ];
out = new Float64ArrayLE( arr );
logEach( '%s', out );

// Create a typed array from an array buffer:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float64ArrayLE( arr.buffer );
logEach( '%s', out );

// Create a typed array from an array buffer view:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float64ArrayLE( arr.buffer, 8, 2 );
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/fixed-endian-float64`][@stdlib/array/fixed-endian-float64]</span><span class="delimiter">: </span><span class="description">Float64Array having a specified byte order.</span>
-   <span class="package-name">[`@stdlib/array/float64`][@stdlib/array/float64]</span><span class="delimiter">: </span><span class="description">Float64Array.</span>
-   <span class="package-name">[`@stdlib/array/little-endian-float32`][@stdlib/array/little-endian-float32]</span><span class="delimiter">: </span><span class="description">Float32Array in little-endian byte order.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/typed]: https://github.com/stdlib-js/array/tree/main/typed

[@stdlib/array/buffer]: https://github.com/stdlib-js/array/tree/main/buffer

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/array/float64]: https://github.com/stdlib-js/array/tree/main/float64

<!-- <related-links> -->

[@stdlib/array/fixed-endian-float64]: https://github.com/stdlib-js/array/tree/main/fixed-endian-float64

[@stdlib/array/little-endian-float32]: https://github.com/stdlib-js/array/tree/main/little-endian-float32

<!-- </related-links> -->

</section>

<!-- /.links -->
