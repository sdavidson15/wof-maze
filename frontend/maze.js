function main() {
    mazeApp.init();
}

// TODO: store wheel of fifths in an array, rather than in switch-cases

var mazeApp = (function () {
    var keyA = 'A',
        keyB = 'B',
        keyC = 'C',
        keyD = 'D',
        keyE = 'E',
        keyF = 'F',
        keyG = 'G',
        keyAb = 'Ab',
        keyBb = 'Bb',
        keyDb = 'Db',
        keyEb = 'Eb',
        keyGb = 'Gb',
        north = 0,
        east = 1,
        south = 2,
        west = 3,
        moveForward = 1,
        moveBackward = -1,
        rotateCW = 'cw',
        rotateCCW = 'ccw',
        facingDirection = north,
        vertices,
        currentVertex,
        currentKey = keyC,

        init = function () {
            initVertices();
            setupMazeListeners();
            redrawMaze();
        },

        redrawMaze = function () {
            rotatedImageCode = getRotatedImageCode();
            var filepath = 'resources/' + rotatedImageCode + '.png';
            var compassFilepath;
            switch (facingDirection) {
                case north:
                    compassFilepath = 'resources/compass-north.png';
                    break;
                case east:
                    compassFilepath = 'resources/compass-east.png';
                    break;
                case south:
                    compassFilepath = 'resources/compass-south.png';
                    break;
                case west:
                    compassFilepath = 'resources/compass-west.png';
                    break;
                default:
                // TODO: error
            }
            document.getElementById('main_window').style.backgroundImage = "url('" + filepath + "')";
            document.getElementById('compass').style.backgroundImage = "url('" + compassFilepath + "')";
            document.getElementById('current_key').innerHTML = currentKey;
        },

        initVertices = function () {
            // TODO: maze description should be parsed from a file, 
            // not hard-coded
            vertices = [
                // Column 0
                [
                    {
                        x: 0,
                        y: 0,
                        imageCode: '1001',
                    },
                    {
                        x: 0,
                        y: 1,
                        imageCode: '0101',
                    },
                    {
                        x: 0,
                        y: 2,
                        imageCode: '0101',
                    },
                    {
                        x: 0,
                        y: 3,
                        imageCode: '0101',
                    },
                    {
                        x: 0,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 0,
                        y: 5,
                        imageCode: '0101',
                    },
                    {
                        x: 0,
                        y: 6,
                        imageCode: '01s1',
                    }
                ],
                // Column 1
                [
                    {
                        x: 1,
                        y: 0,
                        imageCode: '1010',
                    },
                    {
                        x: 1,
                        y: 1,
                        imageCode: '1001',
                    },
                    {
                        x: 1,
                        y: 2,
                        imageCode: '0001',
                    },
                    {
                        x: 1,
                        y: 3,
                        imageCode: '0101',
                    },
                    {
                        x: 1,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 1,
                        y: 5,
                        imageCode: '0101',
                    },
                    {
                        x: 1,
                        y: 6,
                        imageCode: '0011',
                    }
                ],
                // Column 2
                [
                    {
                        x: 2,
                        y: 0,
                        imageCode: '1010',
                    },
                    {
                        x: 2,
                        y: 1,
                        imageCode: '1010',
                    },
                    {
                        x: 2,
                        y: 2,
                        imageCode: '1010',
                    },
                    {
                        x: 2,
                        y: 3,
                        imageCode: '1001',
                    },
                    {
                        x: 2,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 2,
                        y: 5,
                        imageCode: '0111',
                    },
                    {
                        x: 2,
                        y: 6,
                        imageCode: '1010',
                    }
                ],
                // Column 3
                [
                    {
                        x: 3,
                        y: 0,
                        imageCode: '1010',
                    },
                    {
                        x: 3,
                        y: 1,
                        imageCode: '1110',
                    },
                    {
                        x: 3,
                        y: 2,
                        imageCode: '1010',
                    },
                    {
                        x: 3,
                        y: 3,
                        imageCode: '1100',
                    },
                    {
                        x: 3,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 3,
                        y: 5,
                        imageCode: '0101',
                    },
                    {
                        x: 3,
                        y: 6,
                        imageCode: '0110',
                    }
                ],
                // Column 4
                [
                    {
                        x: 4,
                        y: 0,
                        imageCode: '1100',
                    },
                    {
                        x: 4,
                        y: 1,
                        imageCode: '0101',
                    },
                    {
                        x: 4,
                        y: 2,
                        imageCode: '0100',
                    },
                    {
                        x: 4,
                        y: 3,
                        imageCode: '0101',
                    },
                    {
                        x: 4,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 4,
                        y: 5,
                        imageCode: '0101',
                    },
                    {
                        x: 4,
                        y: 6,
                        imageCode: '0011',
                    }
                ],
                // Column 5
                [
                    {
                        x: 5,
                        y: 0,
                        imageCode: '1001',
                    },
                    {
                        x: 5,
                        y: 1,
                        imageCode: '0101',
                    },
                    {
                        x: 5,
                        y: 2,
                        imageCode: '0001',
                    },
                    {
                        x: 5,
                        y: 3,
                        imageCode: '0101',
                    },
                    {
                        x: 5,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 5,
                        y: 5,
                        imageCode: '0011',
                    },
                    {
                        x: 5,
                        y: 6,
                        imageCode: '1010',
                    }
                ],
                // Column 6
                [
                    {
                        x: 6,
                        y: 0,
                        imageCode: '1000',
                    },
                    {
                        x: 6,
                        y: 1,
                        imageCode: '0101',
                    },
                    {
                        x: 6,
                        y: 2,
                        imageCode: '0110',
                    },
                    {
                        x: 6,
                        y: 3,
                        imageCode: '1001',
                    },
                    {
                        x: 6,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 6,
                        y: 5,
                        imageCode: '0110',
                    },
                    {
                        x: 6,
                        y: 6,
                        imageCode: '1010',
                    }
                ],
                // Column 7
                [
                    {
                        x: 7,
                        y: 0,
                        imageCode: '1010',
                    },
                    {
                        x: 7,
                        y: 1,
                        imageCode: '1101',
                    },
                    {
                        x: 7,
                        y: 2,
                        imageCode: '0101',
                    },
                    {
                        x: 7,
                        y: 3,
                        imageCode: '0000',
                    },
                    {
                        x: 7,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 7,
                        y: 5,
                        imageCode: '0011',
                    },
                    {
                        x: 7,
                        y: 6,
                        imageCode: '1010',
                    }
                ],
                // Column 8
                [
                    {
                        x: 8,
                        y: 0,
                        imageCode: '1100',
                    },
                    {
                        x: 8,
                        y: 1,
                        imageCode: '0101',
                    },
                    {
                        x: 8,
                        y: 2,
                        imageCode: '0011',
                    },
                    {
                        x: 8,
                        y: 3,
                        imageCode: '1010',
                    },
                    {
                        x: 8,
                        y: 4,
                        imageCode: '1011',
                    },
                    {
                        x: 8,
                        y: 5,
                        imageCode: '1010',
                    },
                    {
                        x: 8,
                        y: 6,
                        imageCode: '1010',
                    }
                ],
                // Column 9
                [
                    {
                        x: 9,
                        y: 0,
                        imageCode: '1001',
                    },
                    {
                        x: 9,
                        y: 1,
                        imageCode: '0011',
                    },
                    {
                        x: 9,
                        y: 2,
                        imageCode: '1010',
                    },
                    {
                        x: 9,
                        y: 3,
                        imageCode: '1010',
                    },
                    {
                        x: 9,
                        y: 4,
                        imageCode: '1100',
                    },
                    {
                        x: 9,
                        y: 5,
                        imageCode: '0110',
                    },
                    {
                        x: 9,
                        y: 6,
                        imageCode: '1010',
                    }
                ],
                // Column 10
                [
                    {
                        x: 10,
                        y: 0,
                        imageCode: '1e10',
                    },
                    {
                        x: 10,
                        y: 1,
                        imageCode: '1100',
                    },
                    {
                        x: 10,
                        y: 2,
                        imageCode: '0110',
                    },
                    {
                        x: 10,
                        y: 3,
                        imageCode: '1100',
                    },
                    {
                        x: 10,
                        y: 4,
                        imageCode: '0101',
                    },
                    {
                        x: 10,
                        y: 5,
                        imageCode: '0101',
                    },
                    {
                        x: 10,
                        y: 6,
                        imageCode: '0110',
                    }
                ]
            ];
            currentVertex = vertices[0][6];
        },

        move = function (direction) {
            rotatedImageCode = getRotatedImageCode();
            if (
                (direction == moveForward && rotatedImageCode.charAt(0) == 1) ||
                (direction == moveBackward && rotatedImageCode.charAt(2) == 1)
            ) {
                return;
            }

            switch (facingDirection) {
                case north:
                    currentVertex = vertices[currentVertex.x][currentVertex.y - direction];
                    break;
                case east:
                    currentVertex = vertices[currentVertex.x + direction][currentVertex.y];
                    break;
                case south:
                    currentVertex = vertices[currentVertex.x][currentVertex.y + direction];
                    break;
                case west:
                    currentVertex = vertices[currentVertex.x - direction][currentVertex.y];
                    break;
                default:
                // TODO: error
            }

            incrementCurrentKey(direction);
        },

        incrementCurrentKey = function (direction) {
            if (direction == moveForward) {
                switch (currentKey) {
                    case keyA:
                        currentKey = keyE;
                        break;
                    case keyB:
                        currentKey = keyGb;
                        break;
                    case keyC:
                        currentKey = keyG;
                        break;
                    case keyD:
                        currentKey = keyA;
                        break;
                    case keyE:
                        currentKey = keyB;
                        break;
                    case keyF:
                        currentKey = keyC;
                        break;
                    case keyG:
                        currentKey = keyD;
                        break;
                    case keyAb:
                        currentKey = keyEb;
                        break;
                    case keyBb:
                        currentKey = keyF;
                        break;
                    case keyDb:
                        currentKey = keyAb;
                        break;
                    case keyEb:
                        currentKey = keyBb;
                        break;
                    case keyGb:
                        currentKey = keyDb;
                        break;
                    default:
                    // TODO: error
                }
            } else if (direction == moveBackward) {
                switch (currentKey) {
                    case keyA:
                        currentKey = keyD;
                        break;
                    case keyB:
                        currentKey = keyE;
                        break;
                    case keyC:
                        currentKey = keyF;
                        break;
                    case keyD:
                        currentKey = keyG;
                        break;
                    case keyE:
                        currentKey = keyA;
                        break;
                    case keyF:
                        currentKey = keyBb;
                        break;
                    case keyG:
                        currentKey = keyC;
                        break;
                    case keyAb:
                        currentKey = keyDb;
                        break;
                    case keyBb:
                        currentKey = keyEb;
                        break;
                    case keyDb:
                        currentKey = keyGb;
                        break;
                    case keyEb:
                        currentKey = keyAb;
                        break;
                    case keyGb:
                        currentKey = keyB;
                        break;
                    default:
                    // TODO: error
                }
            } else {
                // TODO: error
            }
        },

        rotateView = function (direction) {
            if (direction == rotateCW) {
                switch (facingDirection) {
                    case north:
                        facingDirection = east;
                        break;
                    case east:
                        facingDirection = south;
                        break;
                    case south:
                        facingDirection = west;
                        break;
                    case west:
                        facingDirection = north;
                        break;
                    default:
                    // TODO: error
                }
            } else if (direction == rotateCCW) {
                switch (facingDirection) {
                    case north:
                        facingDirection = west;
                        break;
                    case east:
                        facingDirection = north;
                        break;
                    case south:
                        facingDirection = east;
                        break;
                    case west:
                        facingDirection = south;
                        break;
                    default:
                    // TODO: error
                }
            } else {
                // TODO: error
            }
        },

        getRotatedImageCode = function () {
            currentCode = currentVertex.imageCode;
            for (var i = 0; i < facingDirection; i++) {
                currentCode = currentCode.substring(1, currentCode.length) +
                    currentCode.charAt(0);
            }
            return currentCode;
        },

        isMoveForward = function (key) {
            switch (key) {
                case -65:
                    // Ab
                    return currentKey == keyDb;
                    break;
                case -66:
                    // Bb
                    return currentKey == keyEb;
                    break;
                case -68:
                    // Db
                    return currentKey == keyGb;
                    break;
                case -69:
                    // Eb
                    return currentKey == keyAb;
                    break;
                case -71:
                    // Gb
                    return currentKey == keyB;
                    break;
                case 65:
                    // A
                    return currentKey == keyD;
                    break;
                case 66:
                    // B
                    return currentKey == keyE;
                    break;
                case 67:
                    // C
                    return currentKey == keyF;
                    break;
                case 68:
                    // D
                    return currentKey == keyG;
                    break;
                case 69:
                    // E
                    return currentKey == keyA;
                    break;
                case 70:
                    // F
                    return currentKey == keyBb;
                    break;
                case 71:
                    // G
                    return currentKey == keyC;
                    break;
                default:
                // TODO: error
            }
        },

        isMoveBackward = function (key) {
            switch (key) {
                case -65:
                    // Ab
                    return currentKey == keyEb;
                    break;
                case -66:
                    // Bb
                    return currentKey == keyF;
                    break;
                case -68:
                    // Db
                    return currentKey == keyAb;
                    break;
                case -69:
                    // Eb
                    return currentKey == keyBb;
                    break;
                case -71:
                    // Gb
                    return currentKey == keyDb;
                    break;
                case 65:
                    // A
                    return currentKey == keyE;
                    break;
                case 66:
                    // B
                    return currentKey == keyGb;
                    break;
                case 67:
                    // C
                    return currentKey == keyG;
                    break;
                case 68:
                    // D
                    return currentKey == keyA;
                    break;
                case 69:
                    // E
                    return currentKey == keyB;
                    break;
                case 70:
                    // F
                    return currentKey == keyC;
                    break;
                case 71:
                    // G
                    return currentKey == keyD;
                    break;
                default:
                // TODO: error
            }
        },

        setupMazeListeners = function () {
            window.onkeyup = function (e) {
                var key = e.keyCode ? e.keyCode : e.which;

                if (isMoveForward(e.shiftKey ? -key : key)) {
                    move(moveForward);
                    redrawMaze();
                } else if (isMoveBackward(e.shiftKey ? -key : key)) {
                    move(moveBackward);
                    redrawMaze();
                } else if (key == 39) {
                    // right arrow
                    rotateView(rotateCW);
                    redrawMaze();
                } else if (key == 37) {
                    // left arrow
                    rotateView(rotateCCW);
                    redrawMaze();
                }
            }
        }

    return {
        init: init
    }
}());