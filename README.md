# matrix-utilities

Tiny (516b gzipped), high performance utilities for performing 2/3D matrix calculations. Full unit test coverage, compatible with Node/CommonJS, AMD, and browser globals.

## API

```coffee
util = require 'matrix-utilities'

util.Identity() # returns new 3D identity matrix
util.multiply matrix1, matrix2 # returns matrix1×matrix2
util.flip matrix # flip a matrix along x=y
util.to2d matrix
util.to3d matrix
```

## examples

```coffee
util = require 'matrix-utilities'

# identity

matrix = util.Identity()
###
	#=>
	[
		[1, 0, 0, 0]
		[0, 1, 0, 0]
		[0, 0, 1, 0]
		[0, 0, 0, 1]
	]
###

# to2d

util.to2d matrix
###
	#=>
	[
		[1, 0, 0]
		[0, 1, 0]
	]
###

# flip

util.flip [
	[1, 2, 3]
	[4, 5, 6]
	[7, 8, 9]
]
###
	#=>
	[
		[1, 4, 7]
		[2, 5, 8]
		[3, 6, 9]
	]
###

# multiply

one = [
	[1, 2, 3]
	[4, 5, 6]
	[7, 8, 9]
]

two = [
	[1, 2]
	[3, 4]
	[5, 6]
]

util.multiply one, two
###
	#=>
	[
		[22, 28]
		[49, 64]
		[76, 100]
	]
###
```