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

# reviveTypedArray

> Revive a JSON-serialized typed array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reviveTypedArray = require( '@stdlib/array/reviver' );
```

#### reviveTypedArray( key, value )

Revives a JSON-serialized typed array.

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );

var str = '{"type":"Float64Array","data":[5,3]}';

var arr = parseJSON( str, reviveTypedArray );
// returns <Float64Array>[ 5.0, 3.0 ]
```

For details on the JSON serialization format, see [`@stdlib/array/to-json`][@stdlib/array/to-json].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var typedarray2json = require( '@stdlib/array/to-json' );
var reviveTypedArray = require( '@stdlib/array/reviver' );

var arr = new Float64Array( [ 5.0, 3.0 ] );
var str = JSON.stringify( typedarray2json( arr ) );
// returns '{"type":"Float64Array","data":[5,3]}'

var out = parseJSON( str, reviveTypedArray );
if ( out instanceof Error ) {
    throw out;
}
console.log( out );
// => <Float64Array>[ 5.0, 3.0 ]
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

-   <span class="package-name">[`@stdlib/array/to-json`][@stdlib/array/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/to-json]: https://github.com/stdlib-js/array/tree/main/to-json

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
