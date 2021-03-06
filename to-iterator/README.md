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

# array2iterator

> Create an iterator from an array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
```

#### array2iterator( src\[, mapFcn\[, thisArg]] )

Returns an iterator which iterates over each element in an array-like `object`.

```javascript
var it = array2iterator( [ 1, 2, 3, 4 ] );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

To invoke a function for each `src` value, provide a callback function.

```javascript
function fcn( v ) {
    return v * 10.0;
}

var it = array2iterator( [ 1, 2, 3, 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 10.0

v = it.next().value;
// returns 20.0

v = it.next().value;
// returns 30.0

// ...
```

The invoked function is provided three arguments:

-   **value**: iterated value.
-   **index**: iterated value index.
-   **src**: source array-like object.

```javascript
function fcn( v, i ) {
    return v * (i+1);
}

var it = array2iterator( [ 1, 2, 3, 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 4

v = it.next().value;
// returns 9

// ...
```

To set the callback function execution context, provide a `thisArg`.

```javascript
function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var it = array2iterator( [ 1, 2, 3, 4 ], fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns 10.0

v = it.next().value;
// returns 20.0

v = it.next().value;
// returns 30.0

var count = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   If provided a generic `array`, the returned iterator does **not** ignore holes. To achieve greater performance for sparse arrays, use [`@stdlib/array/to-sparse-iterator`][@stdlib/array/to-sparse-iterator].
-   A returned iterator does **not** copy a provided array-like `object`. To ensure iterable reproducibility, copy a provided array-like `object` **before** creating an iterator. Otherwise, any changes to the contents of an array-like `object` will be reflected in the returned iterator.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an array's `@@iterator` method, regardless of whether this method is defined. To convert an array to an implementation defined iterator, invoke this method directly.
-   The returned iterator supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var inmap = require( '@stdlib/utils/inmap' );
var randu = require( '@stdlib/random/base/randu' );
var array2iterator = require( '@stdlib/array/to-iterator' );

function scale( v, i ) {
    return v * (i+1);
}

// Create an array filled with random numbers:
var arr = inmap( new Float64Array( 100 ), randu );

// Create an iterator from the array which scales iterated values:
var it = array2iterator( arr, scale );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
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

-   <span class="package-name">[`@stdlib/array/from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>
-   <span class="package-name">[`@stdlib/array/to-circular-iterator`][@stdlib/array/to-circular-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator which repeatedly iterates over the elements of an array-like object.</span>
-   <span class="package-name">[`@stdlib/array/to-iterator-right`][@stdlib/array/to-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/array/to-strided-iterator`][@stdlib/array/to-strided-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from a strided array-like object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/to-sparse-iterator]: https://github.com/stdlib-js/array/tree/main/to-sparse-iterator

[@stdlib/array/complex64]: https://github.com/stdlib-js/array/tree/main/complex64

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array/tree/main/from-iterator

[@stdlib/array/to-circular-iterator]: https://github.com/stdlib-js/array/tree/main/to-circular-iterator

[@stdlib/array/to-iterator-right]: https://github.com/stdlib-js/array/tree/main/to-iterator-right

[@stdlib/array/to-strided-iterator]: https://github.com/stdlib-js/array/tree/main/to-strided-iterator

<!-- </related-links> -->

</section>

<!-- /.links -->
