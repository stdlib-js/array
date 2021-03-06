<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Complex64Array

> 64-bit complex number array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
```

<a name="constructor"></a>

#### Complex64Array()

Creates a 64-bit complex number array.

```javascript
var arr = new Complex64Array();
// returns <Complex64Array>
```

#### Complex64Array( length )

Creates a 64-bit complex number array having a specified `length`.

```javascript
var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var len = arr.length;
// returns 10
```

#### Complex64Array( complexarray )

Creates a 64-bit complex number array from another complex number array.

```javascript
var arr1 = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0 ] ); // [ re, im, re, im ]
// returns <Complex64Array>

var arr2 = new Complex64Array( arr1 );
// returns <Complex64Array>

var len = arr2.length;
// returns 2
```

#### Complex64Array( typedarray )

Creates a 64-bit complex number array from a [typed array][@stdlib/array/typed] containing interleaved real and imaginary components.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var buf = new Float32Array( [ 1.0, -1.0, 2.0, -2.0 ] ); // [ re, im, re, im ]
// returns <Float32Array>[ 1.0, -1.0, 2.0, -2.0 ]

var arr = new Complex64Array( buf );
// returns <Complex64Array>

var len = arr.length;
// returns 2
```

#### Complex64Array( obj )

Creates a 64-bit complex number array from an array-like object or iterable.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );

// From an array of interleaved real and imaginary components:
var arr1 = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0 ] );
// returns <Complex64Array>

var len = arr1.length;
// returns 2

// From an array containing complex numbers:
var buf = [ new Complex64( 1.0, -1.0 ), new Complex64( 2.0, -2.0 ) ];
var arr2 = new Complex64Array( buf );

len = arr2.length;
// returns 2
```

#### Complex64Array( buffer\[, byteOffset\[, length]] )

Returns a 64-bit complex number array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var buf = new ArrayBuffer( 240 );

var arr1 = new Complex64Array( buf );
// returns <Complex64Array>

var len = arr1.length;
// returns 30

var arr2 = new Complex64Array( buf, 8 );
// returns <Complex64Array>

len = arr2.length;
// returns 29

var arr3 = new Complex64Array( buf, 8, 20 );
// returns <Complex64Array>

len = arr3.length;
// returns 20
```

* * *

### Properties

<a name="static-prop-bytes-per-element"></a>

#### Complex64Array.BYTES_PER_ELEMENT

Static property returning the size (in bytes) of each array element.

```javascript
var nbytes = Complex64Array.BYTES_PER_ELEMENT;
// returns 8
```

<a name="static-prop-name"></a>

#### Complex64Array.name

Static property returning the constructor name.

```javascript
var str = Complex64Array.name;
// returns 'Complex64Array'
```

<a name="prop-buffer"></a>

#### Complex64Array.prototype.buffer

Pointer to the underlying data buffer.

```javascript
var arr = new Complex64Array( 2 );
// returns <Complex64Array>

var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### Complex64Array.prototype.byteLength

Size (in bytes) of the array.

```javascript
var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var nbytes = arr.byteLength;
// returns 80
```

<a name="prop-byte-offset"></a>

#### Complex64Array.prototype.byteOffset

Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var offset = arr.byteOffset;
// returns 0

var buf = new ArrayBuffer( 240 );
arr = new Complex64Array( buf, 64 );
// returns <Complex64Array>

offset = arr.byteOffset;
// returns 64
```

<a name="prop-bytes-per-element"></a>

#### Complex64Array.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each array element.

```javascript
var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var nbytes = arr.BYTES_PER_ELEMENT;
// returns 8
```

<a name="prop-length"></a>

#### Complex64Array.prototype.length

Number of array elements.

```javascript
var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var len = arr.length;
// returns 10
```

* * *

### Methods

<a name="static-method-from"></a>

#### Complex64Array.from( src\[, clbk\[, thisArg]] )

Creates a new 64-bit complex number array from an array-like object or an iterable.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );

// Create an array from interleaved real and imaginary components:
var arr = Complex64Array.from( [ 1.0, -1.0 ] );
// returns <Complex64Array>

var len = arr.length;
// returns 1

// Create an array from an array of complex numbers:
arr = Complex64Array.from( [ new Complex64( 1.0, -1.0 ) ] );
// returns <Complex64Array>

len = arr.length;
// returns 1
```

The iterator returned by an iterable must return either a complex number or an array-like object containing a real and imaginary component.

```javascript
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var Float32Array = require( '@stdlib/array/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var iter;
var arr;
var len;
var re;
var im;
var z;

// Define a function which returns an iterator protocol-compliant object...
function iterable() {
    var buf = new Float32Array( 2 );
    var i = 0;
    return {
        'next': next
    };

    function next() {
        i += 1;
        if ( i < 3 ) {
            // Reuse allocated memory...
            buf[ 0 ] = i;
            buf[ 1 ] = -i;
            return {
                'value': buf
            };
        }
        return {
            'done': true
        };
    }
}

if ( ITERATOR_SYMBOL === null ) {
    console.error( 'Environment does not support iterables.' );
} else {
    // Create an iterable:
    iter = {};
    iter[ ITERATOR_SYMBOL ] = iterable;

    // Generate a complex number array:
    arr = Complex64Array.from( iter );
    // returns <Complex64Array>

    len = arr.length;
    // returns 2

    z = arr.get( 0 );
    // returns <Complex64>

    re = realf( z );
    // returns 1.0

    im = imagf( z );
    // returns -1.0
}
```

To invoke a function for each `src` value, provide a callback function. If `src` is an iterable or an array-like object containing complex numbers, the callback must return either a complex number

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

function map( z ) {
    return new Complex64( realf(z)*2.0, imagf(z)*2.0 );
}

// Create a source array:
var src = [ new Complex64( 1.0, -1.0 ) ];

// Create a new complex number array by scaling the source array:
var arr = Complex64Array.from( src, map );
// returns <Complex64Array>

var len = arr.length;
// returns 1

var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
```

or an array-like object containing real and imaginary components

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

// Return a callback which reuses allocated memory...
function mapFcn() {
    var buf = new Float32Array( 2 );
    return map;

    function map( z ) {
        buf[ 0 ] = realf( z ) * 2.0;
        buf[ 1 ] = imagf( z ) * 2.0;
        return buf;
    }
}

// Create a source array:
var src = [ new Complex64( 1.0, -1.0 ), new Complex64( 2.0, -2.0 ) ];

// Create a new complex number array by scaling the source array:
var arr = Complex64Array.from( src, mapFcn() );
// returns <Complex64Array>

var len = arr.length;
// returns 2

var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0

z = arr.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 4.0

im = imagf( z );
// returns -4.0
```

If `src` is an array-like object containing interleaved real and imaginary components, the callback is invoked for each component and should return the transformed component value.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

function map( v ) {
    return v * 2.0;
}

// Create a source array:
var src = new Float32Array( [ 1.0, -1.0 ] );

// Create a new complex number array by scaling the source array:
var arr = Complex64Array.from( src, map );
// returns <Complex64Array>

var len = arr.length;
// returns 1

var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
```

A callback function is provided two arguments:

-   **value**: source value.
-   **index**: source index.

To set the callback execution context, provide a `thisArg`.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

function map( z ) {
    this.count += 1;
    return new Complex64( realf(z)*2.0, imagf(z)*2.0 );
}

// Create a source array:
var src = [ new Complex64( 1.0, -1.0 ), new Complex64( 1.0, -1.0 ) ];

// Define an execution context:
var ctx = {
    'count': 0
};

// Create a new complex number array by scaling the source array:
var arr = Complex64Array.from( src, map, ctx );
// returns <Complex64Array>

var len = arr.length;
// returns 2

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### Complex64Array.of( element0\[, element1\[, ...elementN]] )

Creates a new 64-bit complex number array from a variable number of arguments.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );

var arr = Complex64Array.of( 1.0, -1.0, 2.0, -2.0 );
// returns <Complex64Array>

var len = arr.length;
// returns 2

var z1 = new Complex64( 1.0, -1.0 );
var z2 = new Complex64( 2.0, -2.0 );

arr = Complex64Array.of( z1, z2 );
// returns <Complex64Array>

len = arr.length;
// returns 2
```

<a name="method-copy-within"></a>

#### Complex64Array.prototype.copyWithin( target, start\[, end] )

Copies a sequence of elements within the array starting at `start` and ending at `end` (non-inclusive) to the position starting at `target`.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = new Complex64Array( 4 );

// Set the array elements:
arr.set( new Complex64( 1.0, -1.0 ), 0 );
arr.set( new Complex64( 2.0, -2.0 ), 1 );
arr.set( new Complex64( 3.0, -3.0 ), 2 );
arr.set( new Complex64( 4.0, -4.0 ), 3 );

// Get the first array element:
var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns -1.0

// Get the second array element:
z = arr.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 2.0

im = imagf( z );
// returns -2.0

// Copy the last two elements to the first two elements:
arr.copyWithin( 0, 2 );

// Get the first array element:
z = arr.get( 0 );
// returns <Complex64>

re = realf( z );
// returns 3.0

im = imagf( z );
// returns -3.0

// Get the second array element:
z = arr.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 4.0

im = imagf( z );
// returns -4.0
```

By default, `end` equals the number of array elements (i.e., one more than the last array index). To limit the sequence length, provide an `end` argument.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = new Complex64Array( 4 );

// Set the array elements:
arr.set( new Complex64( 1.0, -1.0 ), 0 );
arr.set( new Complex64( 2.0, -2.0 ), 1 );
arr.set( new Complex64( 3.0, -3.0 ), 2 );
arr.set( new Complex64( 4.0, -4.0 ), 3 );

// Get the third array element:
var z = arr.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns -3.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex64>

re = realf( z );
// returns 4.0

im = imagf( z );
// returns -4.0

// Copy the first two elements to the last two elements:
arr.copyWithin( 2, 0, 2 );

// Get the third array element:
z = arr.get( 2 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns -1.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex64>

re = realf( z );
// returns 2.0

im = imagf( z );
// returns -2.0
```

When a `target`, `start`, and/or `end` index is negative, the respective index is determined relative to the last array element. The following example achieves the same behavior as the previous example:

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = new Complex64Array( 4 );

// Set the array elements:
arr.set( new Complex64( 1.0, -1.0 ), 0 );
arr.set( new Complex64( 2.0, -2.0 ), 1 );
arr.set( new Complex64( 3.0, -3.0 ), 2 );
arr.set( new Complex64( 4.0, -4.0 ), 3 );

// Get the third array element:
var z = arr.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns -3.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex64>

re = realf( z );
// returns 4.0

im = imagf( z );
// returns -4.0

// Copy the first two elements to the last two elements using negative indices:
arr.copyWithin( -2, -4, -2 );

// Get the third array element:
z = arr.get( 2 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns -1.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex64>

re = realf( z );
// returns 2.0

im = imagf( z );
// returns -2.0
```

<a name="method-entries"></a>

#### Complex64Array.prototype.entries()

Returns an iterator for iterating over array key-value pairs.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = [
    new Complex64( 1.0, -1.0 ),
    new Complex64( 2.0, -2.0 ),
    new Complex64( 3.0, -3.0 )
];
arr = new Complex64Array( arr );

// Create an iterator:
var it = arr.entries();

// Iterate over the key-value pairs...
var v = it.next().value;
// returns [ 0, <Complex64> ]

var re = realf( v[ 1 ] );
// returns 1.0

var im = imagf( v[ 1 ] );
// returns -1.0

v = it.next().value;
// returns [ 1, <Complex64> ]

re = realf( v[ 1 ] );
// returns 2.0

im = imagf( v[ 1 ] );
// returns -2.0

v = it.next().value;
// returns [ 2, <Complex64> ]

re = realf( v[ 1 ] );
// returns 3.0

im = imagf( v[ 1 ] );
// returns -3.0

var bool = it.next().done;
// returns true
```

<a name="method-get"></a>

#### Complex64Array.prototype.get( i )

Returns an array element located at position (index) `i`.

```javascript
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = new Complex64Array( 10 );

// Set the first element:
arr.set( [ 1.0, -1.0 ], 0 );

// Get the first element:
var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns -1.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new Complex64Array( 10 );

var z = arr.get( 100 );
// returns undefined
```

<a name="method-set"></a>

#### Complex64Array.prototype.set( z\[, i] )

Sets one or more array elements.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = new Complex64Array( 10 );

// Get the first element:
var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 0.0

var im = imagf( z );
// returns 0.0

// Set the first element:
arr.set( new Complex64( 1.0, -1.0 ) );

// Get the first element:
z = arr.get( 0 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns -1.0
```

By default, the method sets array elements starting at position (index) `i = 0`. To set elements starting elsewhere in the array, provide an index argument `i`.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = new Complex64Array( 10 );

// Get the fifth element:
var z = arr.get( 4 );
// returns <Complex64>

var re = realf( z );
// returns 0.0

var im = imagf( z );
// returns 0.0

// Set the fifth element:
arr.set( new Complex64( 1.0, -1.0 ), 4 );

// Get the fifth element:
z = arr.get( 4 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns -1.0
```

In addition to providing a complex number, to set one or more array elements, provide an array-like object containing either complex numbers

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = new Complex64Array( 10 );

// Define an array of complex numbers:
var buf = [
    new Complex64( 1.0, -1.0 ),
    new Complex64( 2.0, -2.0 ),
    new Complex64( 3.0, -3.0 )
];

// Set the fifth, sixth, and seventh elements:
arr.set( buf, 4 );

// Get the sixth element:
var z = arr.get( 5 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
```

or interleaved real and imaginary components

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var arr = new Complex64Array( 10 );

// Define an interleaved array of real and imaginary components:
var buf = new Float32Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );

// Set the fifth, sixth, and seventh elements:
arr.set( buf, 4 );

// Get the sixth element:
var z = arr.get( 5 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
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

-   While a `Complex64Array` _strives_ to maintain (but does not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   The constructor does **not** require the `new` operator.
    -   The constructor and associated methods support a broader variety of input argument types in order to better accommodate complex number input.
    -   Accessing array elements using bracket syntax (e.g., `Z[i]`) is **not** supported. Instead, one **must** use the `.get()` method which returns a value compatible with complex number output.
    -   The `set` method has extended behavior in order to support complex numbers.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );

// Create a complex array by specifying a length:
var out = new Complex64Array( 3 );
console.log( out );

// Create a complex array from an array of complex numbers:
var arr = [
    new Complex64( 1.0, -1.0 ),
    new Complex64( -3.14, 3.14 ),
    new Complex64( 0.5, 0.5 )
];
out = new Complex64Array( arr );
console.log( out );

// Create a complex array from an interleaved typed array:
arr = new Float32Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex64Array( arr );
console.log( out );

// Create a complex array from an array buffer:
arr = new Float32Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex64Array( arr.buffer );
console.log( out );

// Create a complex array from an array buffer view:
arr = new Float32Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex64Array( arr.buffer, 8, 2 );
console.log( out );
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

-   <span class="package-name">[`@stdlib/array/complex128`][@stdlib/array/complex128]</span><span class="delimiter">: </span><span class="description">Complex128Array.</span>
-   <span class="package-name">[`@stdlib/complex/cmplx`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="package-name">[`@stdlib/complex/float32`][@stdlib/complex/float32]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/typed]: https://github.com/stdlib-js/array/tree/main/typed

[@stdlib/array/buffer]: https://github.com/stdlib-js/array/tree/main/buffer

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex-float32

<!-- <related-links> -->

[@stdlib/array/complex128]: https://github.com/stdlib-js/array/tree/main/complex128

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex-cmplx

<!-- </related-links> -->

</section>

<!-- /.links -->
