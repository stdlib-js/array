<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# structFactory

> Return a constructor for creating arrays having a fixed-width composite data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var structFactory = require( '@stdlib/array/struct-factory' );
```

#### structFactory( arg )

Returns a constructor for creating arrays having a fixed-width composite data type.

```javascript
var schema = [
    {
        'name': 'beep',
        'type': 'float64'
    },
    {
        'name': 'boop',
        'type': 'int32'
    }
];
var StructArray = structFactory( schema );
// returns <Function>
```

The function supports the following parameters:

-   **arg**: [`struct`][@stdlib/dstructs/struct] constructor or a [`struct`][@stdlib/dstructs/struct] schema.

* * *

### Array Constructor

#### StructArray()

TODO: add documentation of constructor

* * *

### Array Properties

<a name="static-prop-bytes-per-element"></a>

#### StructArray.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var schema = [
    {
        'name': 'foo',
        'type': 'bool'
    }
];
var StructArray = structFactory( schema );

var nbytes = StructArray.BYTES_PER_ELEMENT;
// returns 1
```

<a name="static-prop-name"></a>

#### StructArray.name

Array constructor name.

```javascript
var schema = [
    {
        'name': 'foo',
        'type': 'bool'
    }
];
var StructArray = structFactory( schema );

var str = StructArray.name;
// returns 'StructArray'
```

<a name="prop-buffer"></a>

#### StructArray.prototype.buffer

**Read-only** property which returns the [`ArrayBuffer`][@stdlib/array/buffer] referenced by the array.

```javascript
var schema = [
    {
        'name': 'foo',
        'type': 'bool'
    }
];
var StructArray = structFactory( schema );

var arr = new StructArray( 5 );
var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### StructArray.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the array.

```javascript
var schema = [
    {
        'name': 'foo',
        'type': 'int32'
    }
];
var StructArray = structFactory( schema );

var arr = new StructArray( 5 );
var byteLength = arr.byteLength;
// returns 20
```

<a name="prop-byte-offset"></a>

#### StructArray.prototype.byteOffset

**Read-only** property which returns the offset (in bytes) of the array from the start of its [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var schema = [
    {
        'name': 'foo',
        'type': 'bool'
    }
];
var StructArray = structFactory( schema );

var arr = new StructArray( 5 );
var byteOffset = arr.byteOffset;
// returns 0
```

<a name="prop-bytes-per-element"></a>

#### StructArray.prototype.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var schema = [
    {
        'name': 'foo',
        'type': 'bool'
    }
];
var StructArray = structFactory( schema );

var arr = new StructArray( 5 );
var nbytes = arr.BYTES_PER_ELEMENT;
// returns 1
```

<a name="prop-length"></a>

#### StructArray.prototype.length

**Read-only** property which returns the number of view elements.

```javascript
var schema = [
    {
        'name': 'foo',
        'type': 'bool'
    }
];
var StructArray = structFactory( schema );

var arr = new StructArray( 5 );
var len = arr.length;
// returns 5
```

* * *

### Array Methods

TODO: document methods

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   While returned constructors _strive_ to maintain (but do not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   Constructors do **not** require the `new` operator.
    -   Accessing array elements using bracket syntax (e.g., `X[i]`) is **not** supported. Instead, one **must** use the `.get()` method.
    -   Accessed array elements are a view on underlying memory. Thus, mutation of accessed elements mutates the underlying buffer.

-   Struct arrays share several similarities with generic arrays containing objects (e.g., nested property access); however, the principal difference is that struct arrays are strongly typed and backed by fixed memory. Struct arrays are particularly well-suited for zero-copy transfer of data stored in composite data types when interoperating between JavaScript and C.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var factory = require( '@stdlib/array/struct-factory' );

// Define a schema for a composite data type for storing a student's test scores:
var schema = [
    {
        'name': 'test_number',
        'type': 'int16'
    },
    {
        'name': 'pass',
        'type': 'bool'
    },
    {
        'name': 'correct',
        'type': 'int32'
    },
    {
        'name': 'incorrect',
        'type': 'int32'
    },
    {
        'name': 'percentage',
        'type': 'float32'
    }
];

// Create an array constructor for creating composite data type arrays:
var TestScoreArray = factory( schema );
console.log( 'Layout: %s', TestScoreArray.struct.layout );

// Create a new array for storing test scores:
var student1 = new TestScoreArray( 10 );
console.log( 'Byte length: %d', student1.byteLength );
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

[@stdlib/dstructs/struct]: https://github.com/stdlib-js/dstructs-struct

</section>

<!-- /.links -->
