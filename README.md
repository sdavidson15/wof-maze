Wheel of Fifths Maze
====================

The Wheel of Fifths maze is a simple maze (with terrible graphics) that I made
to help my music students learn the circle of fifths.

While the maze itself has nothing to do with music theory, movement around the
maze requires certain knowledge of the circle of fifths (in the major scale).


## How to Run

Requirements:
1. Make sure you have [Go](https://golang.org/doc/install) installed.

Running:
1. Fork this repository and clone your fork.
2. Navigate to the root directory `wof-maze` and run `go get`.
3. Build the application using `go build`.
4. Run the resulting binary to begin serving on `localhost:8080`.

## Playing

Visit your locally running server, where you will be placed at the start of the
maze.

Use the left and right arrow keys to rotate your view: left for
counter-clockwise, and right for clockwise.

Notice that you begin on the key c. In order to move forward, you must press the
fifth of c (which is g). Move backwards by simply pressing the tonic of an
assumed fifth. For example, if you are on the key g, pressing c will let you
take a step backwards.

To indicate flats (e.g. Ab or Eb), hold the shift key as you press the key
corresponding to the correct letter. For example, Ab is specified by holding
Shift and pressing the A key.

Note that pressing any key not corresponding to the fifth of your current key
will result in no movement (aside from the right and left arrows).

Refreshing the page returns you to the beginning of the maze, and the key of c.

## Author

 * Stephen Davidson <davidson.sc19@gmail.com>
