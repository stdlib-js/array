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

# BooleanArray

> Boolean array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var BooleanArray = require( '@stdlib/array/bool' );
```

<a name="constructor"></a>

#### BooleanArray()

Creates a boolean array.

```javascript
var arr = new BooleanArray();
// returns <BooleanArray>
```

#### BooleanArray( length )

Creates a boolean array having a specified `length`.

```javascript
var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var len = arr.length;
// returns 10
```

#### BooleanArray( booleanarray )

Creates a boolean array from another boolean array.

```javascript
var arr1 = new BooleanArray( [ true, false, false, true ] );
// returns <BooleanArray>

var arr2 = new BooleanArray( arr1 );
// returns <BooleanArray>

var len = arr2.length;
// returns 4
```

#### BooleanArray( typedarray )

Creates a boolean array from a [typed array][@stdlib/array/typed].

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );

var buf = new Uint8Array( [ 1, 0, 0, 1 ] );
// returns <Uint8Array>[ 1, 0, 0, 1 ]

var arr = new BooleanArray( buf );
// returns <BooleanArray>

var len = arr.length;
// returns 4
```

#### BooleanArray( obj )

Creates a boolean array from an array-like object or iterable.

```javascript
// From an array of booleans:
var arr1 = new BooleanArray( [ true, false, false, true ] );
// returns <BooleanArray>

var len = arr1.length;
// returns 4

// From an array containing non-booleans:
var arr2 = new BooleanArray( [ {}, null, '', 4 ] );

len = arr2.length;
// returns 4
```

#### BooleanArray( buffer\[, byteOffset\[, length]] )

Returns a boolean array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var buf = new ArrayBuffer( 240 );

var arr1 = new BooleanArray( buf );
// returns <BooleanArray>

var len = arr1.length;
// returns 240

var arr2 = new BooleanArray( buf, 8 );
// returns <BooleanArray>

len = arr2.length;
// returns 232

var arr3 = new BooleanArray( buf, 8, 20 );
// returns <BooleanArray>

len = arr3.length;
// returns 20
```

* * *

### Properties

<a name="static-prop-bytes-per-element"></a>

#### BooleanArray.BYTES_PER_ELEMENT

Static property returning the size (in bytes) of each array element.

```javascript
var nbytes = BooleanArray.BYTES_PER_ELEMENT;
// returns 1
```

<a name="static-prop-name"></a>

#### BooleanArray.name

Static property returning the constructor name.

```javascript
var str = BooleanArray.name;
// returns 'BooleanArray'
```

<a name="prop-buffer"></a>

#### BooleanArray.prototype.buffer

Pointer to the underlying data buffer.

```javascript
var arr = new BooleanArray( 2 );
// returns <BooleanArray>

var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### BooleanArray.prototype.byteLength

Size (in bytes) of the array.

```javascript
var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var nbytes = arr.byteLength;
// returns 10
```

<a name="prop-byte-offset"></a>

#### BooleanArray.prototype.byteOffset

Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var offset = arr.byteOffset;
// returns 0

var buf = new ArrayBuffer( 240 );
arr = new BooleanArray( buf, 64 );
// returns <BooleanArray>

offset = arr.byteOffset;
// returns 64
```

<a name="prop-bytes-per-element"></a>

#### BooleanArray.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each array element.

```javascript
var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var nbytes = arr.BYTES_PER_ELEMENT;
// returns 1
```

<a name="prop-length"></a>

#### BooleanArray.prototype.length

Number of array elements.

```javascript
var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var len = arr.length;
// returns 10
```

* * *

### Methods

<a name="static-method-from"></a>

#### BooleanArray.from( src\[, clbk\[, thisArg]] )

Creates a new boolean array from an array-like object or an iterable.

```javascript
var arr = BooleanArray.from( [ true, false ] );
// returns <BooleanArray>

var len = arr.length;
// returns 2
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function map( v ) {
    return !v;
}

// Create a source array:
var src = [ true, false ];

// Create a new boolean array by inverting the source array:
var arr = BooleanArray.from( src, map );
// returns <BooleanArray>

var len = arr.length;
// returns 2

var v = arr.get( 0 );
// returns false

v = arr.get( 1 );
// returns true
```

A callback function is provided two arguments:

-   **value**: source value.
-   **index**: source index.

To set the callback execution context, provide a `thisArg`.

```javascript
function map( v ) {
    this.count += 1;
    return !v;
}

// Create a source array:
var src = [ true, false ];

// Define an execution context:
var ctx = {
    'count': 0
};

// Create a new boolean array by inverting the source array:
var arr = BooleanArray.from( src, map, ctx );
// returns <BooleanArray>

var len = arr.length;
// returns 2

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### BooleanArray.of( element0\[, element1\[, ...elementN]] )

Creates a new boolean array from a variable number of arguments.

```javascript
var arr = BooleanArray.of( true, false, false, true );
// returns <BooleanArray>

var len = arr.length;
// returns 4
```

<a name="method-get"></a>

#### BooleanArray.prototype.get( i )

Returns an array element located at a nonnegative integer position (index) `i`.

```javascript
var arr = new BooleanArray( 10 );

// Set the first element:
arr.set( true, 0 );

// Get the first element:
var v = arr.get( 0 );
// returns true
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new BooleanArray( 10 );

var v = arr.get( 100 );
// returns undefined
```

<a name="method-set"></a>

#### BooleanArray.prototype.set( v\[, i] )

Sets one or more array elements.

```javascript
var arr = new BooleanArray( 10 );

// Get the first element:
var v = arr.get( 0 );
// returns false

// Set the first element:
arr.set( true );

// Get the first element:
v = arr.get( 0 );
// returns true
```

By default, the method sets array elements starting at position (index) `i = 0`. To set elements starting elsewhere in the array, provide an index argument `i`.

```javascript
var arr = new BooleanArray( 10 );

// Get the fifth element:
var v = arr.get( 4 );
// returns false

// Set the fifth element:
arr.set( true, 4 );

// Get the fifth element:
v = arr.get( 4 );
// returns true
```

In addition to providing a single value, to set one or more array elements, provide an array-like object containing truthy and falsy values

```javascript
var arr = new BooleanArray( 10 );

// Define an array of values:
var buf = [ '', 1, null ];

// Set the fifth, sixth, and seventh elements:
arr.set( buf, 4 );

// Get the sixth element:
var v = arr.get( 5 );
// returns true
```

A few notes:

-   If `i` is out-of-bounds, the method throws an error.
-   If a target array cannot accommodate all values (i.e., the length of source array plus `i` exceeds the target array length), the method throws an error.
-   If provided a [typed array][@stdlib/array/typed] which shares an [`ArrayBuffer`][@stdlib/array/buffer] with the target array, the method will intelligently copy the source range to the destination range.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   While a `BooleanArray` _strives_ to maintain (but does not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

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
var Uint8Array = require( '@stdlib/array/uint8' );
var logEach = require( '@stdlib/console/log-each' );
var BooleanArray = require( '@stdlib/array/bool' );

// Create a boolean array by specifying a length:
var out = new BooleanArray( 3 );
logEach( '%s', out );

// Create a boolean array from an array of booleans:
var arr = [ true, false, true ];
out = new BooleanArray( arr );
logEach( '%s', out );

// Create a boolean array from an array buffer:
arr = new Uint8Array( [ 1, 0, 1, 1, 0, 1 ] );
out = new BooleanArray( arr.buffer );
logEach( '%s', out );

// Create a boolean array from an array buffer view:
arr = new Uint8Array( [ 1, 0, 1, 1, 0, 1 ] );
out = new BooleanArray( arr.buffer, 1, 2 );
logEach( '%s', out );

console.log( '%s', false );
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

</section>

<!-- /.links -->