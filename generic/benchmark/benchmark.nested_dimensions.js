/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var randu = require( '@stdlib/random/base/randu' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var Float64Array = require( './../../float64' );


// VARIABLES //

var NAME = 'generic-array-nested-dimensions';


// MAIN //

bench( NAME+'::ndims=1,N=1e6', function benchmark( b ) {
	var arr;
	var N0;
	var i0;
	var v;
	var i;

	N0 = 1e6;

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		arr.push( randu() );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			s += arr[ i0 ];
		}
		return s;
	}
});

bench( NAME+'::ndims=2,N=1e6', function benchmark( b ) {
	var arr;
	var tmp;
	var N0;
	var N1;
	var i0;
	var i1;
	var v;
	var i;

	N0 = 1000;
	N1 = 1000; // N0xN1 = 1e6

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		tmp = [];
		for ( i1 = 0; i1 < N1; i1++ ) {
			tmp.push( randu() );
		}
		arr.push( tmp );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var i1;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			for ( i1 = 0; i1 < N1; i1++ ) {
				s += arr[ i0 ][ i1 ];
			}
		}
		return s;
	}
});

bench( NAME+'::ndims=3,N=1e6', function benchmark( b ) {
	var arr;
	var t1;
	var t2;
	var N0;
	var N1;
	var N2;
	var i0;
	var i1;
	var i2;
	var v;
	var i;

	N0 = 100;
	N1 = 100;
	N2 = 100; // N0xN1xN2 = 1e6

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		t1 = [];
		for ( i1 = 0; i1 < N1; i1++ ) {
			t2 = [];
			for ( i2 = 0; i2 < N2; i2++ ) {
				t2.push( randu() );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var i1;
		var i2;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			for ( i1 = 0; i1 < N1; i1++ ) {
				for ( i2 = 0; i2 < N2; i2++ ) {
					s += arr[ i0 ][ i1 ][ i2 ];
				}
			}
		}
		return s;
	}
});

bench( NAME+'::ndims=4,N=998784', function benchmark( b ) {
	var arr;
	var t1;
	var t2;
	var t3;
	var i0;
	var i1;
	var i2;
	var i3;
	var N0;
	var N1;
	var N2;
	var N3;
	var v;
	var i;

	N0 = 34;
	N1 = 34;
	N2 = 32;
	N3 = 27;

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		t1 = [];
		for ( i1 = 0; i1 < N1; i1++ ) {
			t2 = [];
			for ( i2 = 0; i2 < N2; i2++ ) {
				t3 = [];
				for ( i3 = 0; i3 < N3; i3++ ) {
					t3.push( randu() );
				}
				t2.push( t3 );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var i1;
		var i2;
		var i3;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			for ( i1 = 0; i1 < N1; i1++ ) {
				for ( i2 = 0; i2 < N2; i2++ ) {
					for ( i3 = 0; i3 < N3; i3++ ) {
						s += arr[ i0 ][ i1 ][ i2 ][ i3 ];
					}
				}
			}
		}
		return s;
	}
});

bench( NAME+'::ndims=5,N=991440', function benchmark( b ) {
	var arr;
	var t1;
	var t2;
	var t3;
	var t4;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var N0;
	var N1;
	var N2;
	var N3;
	var N4;
	var v;
	var i;

	N0 = 18;
	N1 = 18;
	N2 = 18;
	N3 = 17;
	N4 = 10;

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		t1 = [];
		for ( i1 = 0; i1 < N1; i1++ ) {
			t2 = [];
			for ( i2 = 0; i2 < N2; i2++ ) {
				t3 = [];
				for ( i3 = 0; i3 < N3; i3++ ) {
					t4 = [];
					for ( i4 = 0; i4 < N4; i4++ ) {
						t4.push( randu() );
					}
					t3.push( t4 );
				}
				t2.push( t3 );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var i1;
		var i2;
		var i3;
		var i4;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			for ( i1 = 0; i1 < N1; i1++ ) {
				for ( i2 = 0; i2 < N2; i2++ ) {
					for ( i3 = 0; i3 < N3; i3++ ) {
						for ( i4 = 0; i4 < N4; i4++ ) {
							s += arr[ i0 ][ i1 ][ i2 ][ i3 ][ i4 ];
						}
					}
				}
			}
		}
		return s;
	}
});

bench( NAME+'::ndims=6,N=1e6', function benchmark( b ) {
	var arr;
	var t1;
	var t2;
	var t3;
	var t4;
	var t5;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var N0;
	var N1;
	var N2;
	var N3;
	var N4;
	var N5;
	var v;
	var i;

	N0 = 10;
	N1 = 10;
	N2 = 10;
	N3 = 10;
	N4 = 10;
	N5 = 10;

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		t1 = [];
		for ( i1 = 0; i1 < N1; i1++ ) {
			t2 = [];
			for ( i2 = 0; i2 < N2; i2++ ) {
				t3 = [];
				for ( i3 = 0; i3 < N3; i3++ ) {
					t4 = [];
					for ( i4 = 0; i4 < N4; i4++ ) {
						t5 = [];
						for ( i5 = 0; i5 < N5; i5++ ) { // eslint-disable-line max-depth
							t5.push( randu() );
						}
						t4.push( t5 );
					}
					t3.push( t4 );
				}
				t2.push( t3 );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var i1;
		var i2;
		var i3;
		var i4;
		var i5;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			for ( i1 = 0; i1 < N1; i1++ ) {
				for ( i2 = 0; i2 < N2; i2++ ) {
					for ( i3 = 0; i3 < N3; i3++ ) {
						for ( i4 = 0; i4 < N4; i4++ ) {
							for ( i5 = 0; i5 < N5; i5++ ) { // eslint-disable-line max-depth
								s += arr[ i0 ][ i1 ][ i2 ][ i3 ][ i4 ][ i5 ];
							}
						}
					}
				}
			}
		}
		return s;
	}
});

bench( NAME+'::ndims=6,N=1e6,v8_deoptimized', function benchmark( b ) {
	var randi;
	var cache;
	var arr;
	var t1;
	var t2;
	var t3;
	var t4;
	var t5;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var N0;
	var N1;
	var N2;
	var N3;
	var N4;
	var N5;
	var v;
	var i;

	N0 = 10;
	N1 = 10;
	N2 = 10;
	N3 = 10;
	N4 = 10;
	N5 = 10;

	cache = [];
	for ( i4 = 0; i4 < 1e5; i4++ ) {
		t5 = [];
		for ( i5 = 0; i5 < N5; i5++ ) {
			t5.push( randu() );
		}
		cache.push( t5 );
	}

	// The idea is to thwart V8's optimization efforts to ensure cache locality for the purposes of seeing if we can realize the theoretical, not the optimal, performance of nested arrays...
	randi = discreteUniform( 0, 1e5-1 );

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		t1 = [];
		for ( i1 = 0; i1 < N1; i1++ ) {
			t2 = [];
			for ( i2 = 0; i2 < N2; i2++ ) {
				t3 = [];
				for ( i3 = 0; i3 < N3; i3++ ) {
					t4 = [];
					for ( i4 = 0; i4 < N4; i4++ ) {
						t4.push( cache[ randi() ] );
					}
					t3.push( t4 );
				}
				t2.push( t3 );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var i1;
		var i2;
		var i3;
		var i4;
		var i5;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			for ( i1 = 0; i1 < N1; i1++ ) {
				for ( i2 = 0; i2 < N2; i2++ ) {
					for ( i3 = 0; i3 < N3; i3++ ) {
						for ( i4 = 0; i4 < N4; i4++ ) {
							for ( i5 = 0; i5 < N5; i5++ ) { // eslint-disable-line max-depth
								s += arr[ i0 ][ i1 ][ i2 ][ i3 ][ i4 ][ i5 ];
							}
						}
					}
				}
			}
		}
		return s;
	}
});

bench( NAME+'::ndims=6,N=1e6,v8_deoptimized_w_float64arrays', function benchmark( b ) {
	var randi;
	var cache;
	var arr;
	var t1;
	var t2;
	var t3;
	var t4;
	var t5;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var N0;
	var N1;
	var N2;
	var N3;
	var N4;
	var N5;
	var v;
	var i;

	N0 = 10;
	N1 = 10;
	N2 = 10;
	N3 = 10;
	N4 = 10;
	N5 = 10;

	cache = [];
	for ( i4 = 0; i4 < 1e5; i4++ ) {
		t5 = new Float64Array( N5 );
		for ( i5 = 0; i5 < N5; i5++ ) {
			t5[ i5 ] = randu();
		}
		cache.push( t5 );
	}

	// The idea is to thwart V8's optimization efforts to ensure cache locality for the purposes of seeing if we can realize the theoretical, not the optimal, performance of nested arrays...
	randi = discreteUniform( 0, 1e5-1 );

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		t1 = [];
		for ( i1 = 0; i1 < N1; i1++ ) {
			t2 = [];
			for ( i2 = 0; i2 < N2; i2++ ) {
				t3 = [];
				for ( i3 = 0; i3 < N3; i3++ ) {
					t4 = [];
					for ( i4 = 0; i4 < N4; i4++ ) {
						t4.push( cache[ randi() ] );
					}
					t3.push( t4 );
				}
				t2.push( t3 );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var i1;
		var i2;
		var i3;
		var i4;
		var i5;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			for ( i1 = 0; i1 < N1; i1++ ) {
				for ( i2 = 0; i2 < N2; i2++ ) {
					for ( i3 = 0; i3 < N3; i3++ ) {
						for ( i4 = 0; i4 < N4; i4++ ) {
							for ( i5 = 0; i5 < N5; i5++ ) { // eslint-disable-line max-depth
								s += arr[ i0 ][ i1 ][ i2 ][ i3 ][ i4 ][ i5 ];
							}
						}
					}
				}
			}
		}
		return s;
	}
});

bench( NAME+'::ndims=6,N=1e6,v8_deoptimized_w_mixed_array_types', function benchmark( b ) {
	var randi;
	var cache;
	var arr;
	var t1;
	var t2;
	var t3;
	var t4;
	var t5;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var i5;
	var N0;
	var N1;
	var N2;
	var N3;
	var N4;
	var N5;
	var v;
	var i;

	N0 = 10;
	N1 = 10;
	N2 = 10;
	N3 = 10;
	N4 = 10;
	N5 = 10;

	cache = [];
	for ( i4 = 0; i4 < 1e5; i4++ ) {
		if ( randu() < 0.5 ) {
			t5 = new Float64Array( N5 );
			for ( i5 = 0; i5 < N5; i5++ ) {
				t5[ i5 ] = randu();
			}
		} else {
			t5 = [];
			for ( i5 = 0; i5 < N5; i5++ ) {
				t5.push( randu() );
			}
		}
		cache.push( t5 );
	}

	// The idea is to thwart V8's optimization efforts to ensure cache locality for the purposes of seeing if we can realize the theoretical, not the optimal, performance of nested arrays...
	randi = discreteUniform( 0, 1e5-1 );

	arr = [];
	for ( i0 = 0; i0 < N0; i0++ ) {
		t1 = [];
		for ( i1 = 0; i1 < N1; i1++ ) {
			t2 = [];
			for ( i2 = 0; i2 < N2; i2++ ) {
				t3 = [];
				for ( i3 = 0; i3 < N3; i3++ ) {
					t4 = [];
					for ( i4 = 0; i4 < N4; i4++ ) {
						t4.push( cache[ randi() ] );
					}
					t3.push( t4 );
				}
				t2.push( t3 );
			}
			t1.push( t2 );
		}
		arr.push( t1 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = sum( arr );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function sum( arr ) {
		var i0;
		var i1;
		var i2;
		var i3;
		var i4;
		var i5;
		var s;

		s = 0;
		for ( i0 = 0; i0 < N0; i0++ ) {
			for ( i1 = 0; i1 < N1; i1++ ) {
				for ( i2 = 0; i2 < N2; i2++ ) {
					for ( i3 = 0; i3 < N3; i3++ ) {
						for ( i4 = 0; i4 < N4; i4++ ) {
							for ( i5 = 0; i5 < N5; i5++ ) { // eslint-disable-line max-depth
								s += arr[ i0 ][ i1 ][ i2 ][ i3 ][ i4 ][ i5 ];
							}
						}
					}
				}
			}
		}
		return s;
	}
});
