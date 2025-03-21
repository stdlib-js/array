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

<a name="method-at"></a>

#### BooleanArray.prototype.at( i )

Returns an array element located at integer position (index) `i`, with support for both nonnegative and negative integer positions.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var v = arr.at( 0 );
// returns true

v = arr.at( -1 );
// returns true
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new BooleanArray( 10 );

var v = arr.at( 100 );
// returns undefined

v = arr.at( -100 );
// returns undefined
```

<a name="method-copy-within"></a>

#### BooleanArray.prototype.copyWithin( target, start\[, end] )

Copies a sequence of elements within the array starting at `start` and ending at `end` (non-inclusive) to the position starting at `target`.

```javascript
var arr = new BooleanArray( 4 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( false, 2 );
arr.set( true, 3 );

var v = arr.get( 0 );
// returns true

v = arr.get( 1 );
// returns false

// Copy the last two elements to the first two elements:
arr.copyWithin( 0, 2 );

v = arr.get( 0 );
// returns false

v = arr.get( 1 );
// returns true
```

By default, `end` equals the number of array elements (i.e., one more than the last array index). To limit the sequence length, provide an `end` argument.

```javascript
var arr = new BooleanArray( 4 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( false, 2 );
arr.set( true, 3 );

var v = arr.get( 2 );
// returns false

v = arr.get( 3 );
// returns true

// Copy the first two elements to the last two elements:
arr.copyWithin( 2, 0, 2 );

v = arr.get( 2 );
// returns true

v = arr.get( 3 );
// returns false
```

When a `target`, `start`, and/or `end` index is negative, the respective index is determined relative to the last array element. The following example achieves the same behavior as the previous example:

```javascript
var arr = new BooleanArray( 4 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( false, 2 );
arr.set( true, 3 );

var v = arr.get( 2 );
// returns false

v = arr.get( 3 );
// returns true

// Copy the first two elements to the last two elements using negative indices:
arr.copyWithin( -2, -4, -2 );

v = arr.get( 2 );
// returns true

v = arr.get( 3 );
// returns false
```

<a name="method-entries"></a>

#### BooleanArray.prototype.entries()

Returns an iterator for iterating over array key-value pairs.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var it = arr.entries();

var v = it.next().value;
// returns [ 0, true ]

v = it.next().value;
// returns [ 1, false ]

v = it.next().value;
// returns [ 2, true ]

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

<a name="method-every"></a>

#### BooleanArray.prototype.every( predicate\[, thisArg] )

Returns a boolean indicating whether all elements pass a test.

```javascript
function predicate( v ) {
    return v === true;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( true, 1 );
arr.set( true, 2 );

var bool = arr.every( predicate );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return v === true;
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( true, 0 );
arr.set( true, 1 );
arr.set( true, 2 );

var bool = arr.every( predicate, context );
// returns true

var count = context.count;
// returns 3
```

<a name="method-fill"></a>

#### BooleanArray.prototype.fill( value\[, start\[, end]] )

Returns a modified typed array filled with a fill value.

```javascript
var arr = new BooleanArray( 3 );

// Set all elements to the same value:
arr.fill( true );

var v = arr.get( 0 );
// returns true

v = arr.get( 1 );
// returns true

v = arr.get( 2 );
// returns true

// Fill all elements starting from the second element:
arr.fill( false, 1 );

v = arr.get( 1 );
// returns false

v = arr.get( 2 );
// returns false

// Fill all elements from first element until the second-to-last element:
arr.fill( false, 0, 2 );

v = arr.get( 0 );
// returns false

v = arr.get( 1 );
// returns false
```

When a `start` and/or `end` index is negative, the respective index is determined relative to the last array element.

```javascript
var arr = new BooleanArray( 3 );

// Set all array elements, except the last element, to the same value:
arr.fill( true, 0, -1 );

var v = arr.get( 0 );
// returns true

v = arr.get( 2 );
// returns false
```

<a name="method-filter"></a>

#### BooleanArray.prototype.filter( predicate\[, thisArg] )

Returns a new array containing the elements of an array which pass a test implemented by a predicate function.

```javascript
function predicate( v ) {
    return ( v === true );
}

var arr = new BooleanArray( 3 );

// Set the first three elements:
arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.filter( predicate );
// returns <BooleanArray>

var len = out.length;
// returns 2

var v = out.get( 0 );
// returns true

v = out.get( 1 );
// return true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v, i ) {
    this.count += 1;
    return ( v === true );
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.filter( predicate, context );
// returns <BooleanArray>

var len = out.length;
// returns 2

var count = context.count;
// returns 3
```

<a name="method-find"></a>

#### BooleanArray.prototype.find( predicate\[, thisArg] )

Returns the first element in an array for which a predicate function returns a truthy value.

```javascript
function predicate( v ) {
    return v === true;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var v = arr.find( predicate );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v === true );
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( false, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var z = arr.find( predicate, context );
// returns true

var count = context.count;
// returns 3
```

<a name="method-find-index"></a>

#### BooleanArray.prototype.findIndex( predicate\[, thisArg] )

Returns the index of the first element in an array for which a predicate function returns a truthy value.

```javascript
function predicate( v ) {
    return v === true;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var v = arr.findIndex( predicate );
// returns 0
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v === true );
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( false, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var z = arr.findIndex( predicate, context );
// returns 2

var count = context.count;
// returns 3
```

<a name="method-find-last"></a>

#### BooleanArray.prototype.findLast( predicate\[, thisArg] )

Returns the last element in an array for which a predicate function returns a truthy value.

```javascript
function predicate( v ) {
    return v === true;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var v = arr.findLast( predicate );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v === true );
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( false, 2 );

var z = arr.findLast( predicate, context );
// returns true

var count = context.count;
// returns 3
```

<a name="method-find-last-index"></a>

#### BooleanArray.prototype.findLastIndex( predicate\[, thisArg] )

Returns the index of the last element in an array for which a predicate function returns a truthy value.

```javascript
function predicate( v ) {
    return v === true;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var v = arr.findLastIndex( predicate );
// returns 2
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return ( v === true );
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( false, 2 );

var z = arr.findLastIndex( predicate, context );
// returns 0

var count = context.count;
// returns 3
```

<a name="method-for-each"></a>

#### BooleanArray.prototype.forEach( callbackFn\[, thisArg] )

Invokes a function once for each array element.

```javascript
function log( v, i ) {
    console.log( '%s: %s', i.toString(), v.toString() );
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

arr.forEach( log );
/* =>
    0: true
    1: false
    2: true
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

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

arr.forEach( fcn, context );

var count = context.count;
// returns 3
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

<a name="includes"></a>

#### BooleanArray.prototype.includes( searchElement\[, fromIndex] )

Returns a boolean indicating whether an array includes a provided value.

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );
arr.set( true, 3 );
arr.set( true, 4 );

var bool = arr.includes( true );
// returns true

bool = arr.includes( false, 2 );
// returns false
```

<a name="method-index-of"></a>

#### BooleanArray.prototype.indexOf( searchElement\[, fromIndex] )

Returns the first index at which a given element can be found.

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );
arr.set( true, 3 );
arr.set( true, 4 );

var idx = arr.indexOf( true );
// returns 0

idx = arr.indexOf( false, 1 );
// returns 1

idx = arr.indexOf( true, -3 );
// returns 2
```

If `searchElement` is not present in the array, the method returns `-1`.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( true, 1 );
arr.set( true, 2 );

var idx = arr.indexOf( false );
// returns -1
```

<a name="join"></a>

#### BooleanArray.prototype.join( \[separator] )

Returns a new string by concatenating all array elements.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var str = arr.join();
// returns 'true,false,true'
```

By default, the method separates serialized array elements with a comma. To use an alternative separator, provide a `separator` string.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var str = arr.join( '|' );
// returns 'true|false|true'
```

<a name="method-keys"></a>

#### BooleanArray.prototype.keys()

Returns an iterator for iterating over each index key in a typed array.

```javascript
var arr = new BooleanArray( 2 );

arr.set( true, 0 );
arr.set( false, 1 );

var iter = arr.keys();

var v = iter.next().value;
// returns 0

v = iter.next().value;
// returns 1

var bool = iter.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

<a name="method-last-index-of"></a>

#### BooleanArray.prototype.lastIndexOf( searchElement\[, fromIndex] )

Returns the last index at which a given element can be found.

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( true, 1 );
arr.set( true, 2 );
arr.set( false, 3 );
arr.set( true, 4 );

var idx = arr.lastIndexOf( true );
// returns 4

idx = arr.lastIndexOf( false, 3 );
// returns 3

idx = arr.lastIndexOf( true, -3 );
// returns 2
```

If `searchElement` is not present in the array, the method returns `-1`.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( true, 1 );
arr.set( true, 2 );

var idx = arr.lastIndexOf( false );
// returns -1
```

<a name="method-map"></a>

#### BooleanArray.prototype.map( callbackFn\[, thisArg] )

Returns a new array with each element being the result of a provided callback function.

```javascript
function invert( v ) {
    return !v;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.map( invert );
// returns <BooleanArray>

var z = out.get( 0 );
// returns false

z = out.get( 1 );
// returns true

z = out.get( 2 );
// returns false
```

The callback function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function invert( v, i ) {
    this.count += i;
    return !v;
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.map( invert, context );
// returns <BooleanArray>

var count = context.count;
// returns 3;
```

<a name="method-reduce"></a>

#### BooleanArray.prototype.reduce( reducerFn\[, initialValue] )

Applies a provided callback function to each element of the array, in order, passing in the return value from the calculation on the preceding element and returning the accumulated result upon completion.

```javascript
function reducer( acc, v ) {
    return ( acc && v );
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.reduce( reducer );
// returns false
```

The reducer function is provided four arguments:

-   **acc**: accumulated result.
-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

By default, the function initializes the accumulated result to the first element in the array and passes the second array element as `value` during the first invocation of the provided callback. To begin accumulation from a different starting value and pass in the first array element as `value` during the first invocation of the provided callback, provide an `initialValue` argument.

```javascript
function reducer( acc, v ) {
    if ( v ) {
        return acc + 1;
    }
    return acc;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.reduce( reducer, 0 );
// returns 2
```

<a name="method-reduce-right"></a>

#### BooleanArray.prototype.reduceRight( reducerFn\[, initialValue] )

Applies a provided callback function to each element of the array, in reverse order, passing in the return value from the calculation on the following element and returning the accumulated result upon completion.

```javascript
function reducer( acc, v ) {
    return ( acc && v );
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.reduceRight( reducer );
// returns false
```

The reducer function is provided four arguments:

-   **acc**: accumulated result.
-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

By default, the function initializes the accumulated result to the last element in the array and passes the second-last array element as `value` during the first invocation of the provided callback. To begin accumulation from a different starting value and pass in the last array element as `value` during the first invocation of the provided callback, provide an `initialValue` argument.

```javascript
function reducer( acc, v ) {
    if ( v ) {
        return acc + 1;
    }
    return acc;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.reduceRight( reducer, 0 );
// returns 2
```

<a name="method-reverse"></a>

#### BooleanArray.prototype.reverse()

Reverses an array in-place.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( false, 2 );

var out = arr.reverse();
// returns <BooleanArray>

var v = out.get( 0 );
// returns false

v = out.get( 1 );
// returns false

v = out.get( 2 );
// returns true
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

<a name="method-slice"></a>

#### BooleanArray.prototype.slice( \[start\[, end]] )

Copies a portion of a typed array to a new typed array.

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );
arr.set( false, 3 );
arr.set( true, 4 );

var out = arr.slice();
// returns <BooleanArray>

var len = out.length;
// returns 5

var bool = out.get( 0 );
// returns true

bool = out.get( len-1 );
// returns true
```

By default, the method returns a typed array beginning with the first array element. To specify an alternative array index at which to begin, provide a `start` index (inclusive).

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );
arr.set( false, 3 );
arr.set( true, 4 );

var out = arr.slice( 1 );
// returns <BooleanArray>

var len = out.length;
// returns 4

var bool = out.get( 0 );
// returns false

bool = out.get( len-1 );
// returns true
```

By default, the method returns a typed array which includes all array elements after `start`. To limit the number of array elements after `start`, provide an `end` index (exclusive).

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );
arr.set( false, 3 );
arr.set( true, 4 );

var out = arr.slice( 1, -2 );
// returns <BooleanArray>

var len = out.length;
// returns 2

var bool = out.get( 0 );
// returns false

bool = out.get( len-1 );
// returns true
```

<a name="method-some"></a>

#### BooleanArray.prototype.some( predicate\[, thisArg] )

Returns a boolean indicating whether at least one element passes a test.

```javascript
function predicate( v ) {
    return v === true;
}

var arr = new BooleanArray( 3 );

arr.set( false, 0 );
arr.set( true, 1 );
arr.set( false, 2 );

var bool = arr.some( predicate );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return v === true;
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( false, 0 );
arr.set( true, 1 );
arr.set( false, 2 );

var bool = arr.some( predicate, context );
// returns true

var count = context.count;
// returns 2
```

<a name="method-sort"></a>

#### BooleanArray.prototype.sort( \[compareFcn] )

Sorts an array in-place.

```javascript
function compare( a, b ) {
    if ( a === false ) {
        if ( b === false ) {
            return 0;
        }
        return 1;
    }
    if ( b === true ) {
        return 0;
    }
    return -1;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

arr.sort( compare );

var v = arr.get( 0 );
// returns true

v = arr.get( 1 );
// returns true

v = arr.get( 2 );
// returns false
```

The `compareFcn` determines the order of the elements. The function is called with the following arguments:

-   **a**: the first boolean value for comparison.
-   **b**: the second boolean value for comparison.

The function should return a number where:

-   a negative value indicates that `a` should come before `b`.
-   a positive value indicates that `a` should come after `b`.
-   zero or `NaN` indicates that `a` and `b` are considered equal.

<a name="method-subarray"></a>

#### BooleanArray.prototype.subarray( \[begin\[, end]] )

Creates a new typed array view over the same underlying [`ArrayBuffer`][@stdlib/array/buffer] and with the same underlying data type as the host array.

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );
arr.set( false, 3 );
arr.set( true, 4 );

var subarr = arr.subarray();
// returns <BooleanArray>

var len = subarr.length;
// returns 5

var bool = subarr.get( 0 );
// returns true

bool = subarr.get( len-1 );
// returns true
```

By default, the method creates a typed array view beginning with the first array element. To specify an alternative array index at which to begin, provide a `begin` index (inclusive).

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );
arr.set( false, 3 );
arr.set( true, 4 );

var subarr = arr.subarray( 1 );
// returns <BooleanArray>

var len = subarr.length;
// returns 4

var bool = subarr.get( 0 );
// returns false

bool = subarr.get( len-1 );
// returns true
```

By default, the method creates a typed array view which includes all array elements after `begin`. To limit the number of array elements after `begin`, provide an `end` index (exclusive).

```javascript
var arr = new BooleanArray( 5 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );
arr.set( false, 3 );
arr.set( true, 4 );

var subarr = arr.subarray( 1, -2 );
// returns <BooleanArray>

var len = subarr.length;
// returns 2

var bool = subarr.get( 0 );
// returns false

bool = subarr.get( len-1 );
// returns true
```

<a name="method-to-locale-string"></a>

#### BooleanArray.prototype.toLocaleString( \[locales\[, options]] )

Serializes an array as a locale-specific string.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var str = arr.toLocaleString();
// returns 'true,false,true'
```

The method supports the following arguments:

-   **locales**: a string with a BCP 47 language tag or an array of such strings.
-   **options**: configuration properties.

<a name="method-to-reversed"></a>

#### BooleanArray.prototype.toReversed()

Returns a new typed array containing the elements in reversed order.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( false, 2 );

var out = arr.toReversed();
// returns <BooleanArray>

var v = out.get( 0 );
// returns false

v = out.get( 1 );
// returns false

v = out.get( 2 );
// returns true
```

<a name="method-to-sorted"></a>

#### BooleanArray.prototype.toSorted( \[compareFcn] )

Returns a new typed array containing the elements in sorted order.

```javascript
function compare( a, b ) {
    if ( a === false ) {
        if ( b === false ) {
            return 0;
        }
        return 1;
    }
    if ( b === true ) {
        return 0;
    }
    return -1;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.sort( compare );
// returns <BooleanArray>

var v = out.get( 0 );
// returns true

v = out.get( 1 );
// returns true

v = out.get( 2 );
// returns false
```

The `compareFcn` determines the order of the elements. The function is called with the following arguments:

-   **a**: the first boolean value for comparison.
-   **b**: the second boolean value for comparison.

The function should return a number where:

-   a negative value indicates that `a` should come before `b`.
-   a positive value indicates that `a` should come after `b`.
-   zero or `NaN` indicates that `a` and `b` are considered equal.

<a name="method-to-string"></a>

#### BooleanArray.prototype.toString()

Serializes an array as a string.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var str = arr.toString();
// returns 'true,false,true'
```

<a name="method-values"></a>

#### BooleanArray.prototype.values()

Returns an iterator for iterating over each value in a typed array.

```javascript
var arr = new BooleanArray( 2 );

arr.set( true, 0 );
arr.set( false, 1 );

var iter = arr.values();

var v = iter.next().value;
// returns true

v = iter.next().value;
// returns false

var bool = iter.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

<a name="method-with"></a>

#### BooleanArray.prototype.with( index, value )

Returns a new typed array with the element at a provided index replaced with a provided value.

```javascript
var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 1 );

var out = arr.with( 0, false );
// returns <BooleanArray>

var v = out.get( 0 );
// returns false
```

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

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/buffer`][@stdlib/array/buffer]</span><span class="delimiter">: </span><span class="description">ArrayBuffer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/array/typed]: https://github.com/stdlib-js/array/tree/main/typed

[@stdlib/array/buffer]: https://github.com/stdlib-js/array/tree/main/buffer

</section>

<!-- /.links -->
