const arrayCube = [
    // Vertices        // RGBA
    -0.5, -0.5, 0,     1.0, 0.0, 0.0, 1.0,  // Red (front face)
    -0.5, 0.5, 0,      0.1, 0.1, 0.1, 0.0,
    0.5, 0.5, 0,       0.1, 0.1, 0.1, 0.0,
    0.5, -0.5, 0,      0.1, 0.1, 0.1, 0.0,

    // Top face (Green)
    -0.5, 0.5, 0,      0.0, 1.0, 0.0, 1.0,
    -0.5, 0.5, 1,      0.0, 1.0, 0.0, 1.0,
    0.5, 0.5, 1,       0.0, 1.0, 0.0, 1.0,
    0.5, 0.5, 0,       0.0, 1.0, 0.0, 1.0,

    // Right face (Blue)
    0.5, -0.5, 0,      0.0, 0.0, 1.0, 1.0,
    0.5, 0.5, 0,       0.0, 0.0, 1.0, 1.0,
    0.5, 0.5, 1,       0.0, 0.0, 1.0, 1.0,
    0.5, -0.5, 1,      0.0, 0.0, 1.0, 1.0,

    // Back face (Yellow)
    0.5, -0.5, 1,      1.0, 1.0, 0.0, 1.0,
    0.5, 0.5, 1,       1.0, 1.0, 0.0, 1.0,
    -0.5, 0.5, 1,      1.0, 1.0, 0.0, 1.0,
    -0.5, -0.5, 1,     1.0, 1.0, 0.0, 1.0
];
    // Bottom face (Purple)
    -0.5, -0.5, 1,     0.5, 0.0, 0.5, 1.0,
    -0.5, -0.5, 0,     0.5, 0.0, 0.5, 1.0,
    0.5, -0.5, 0,      0.5, 0.0, 0.5, 1.0,
    0.5, -0.5, 1,      0.5, 0.0, 0.5, 1.0,

    // Left face (Orange)
    -0.5, -0.5, 1,     1.0, 0.5, 0.0, 1.0,
    -0.5, 0.5, 1,      1.0, 0.5, 0.0, 1.0,
    -0.5, 0.5, 0,      1.0, 0.5, 0.0, 1.0,
    -0.5, -0.5, 0,     1.0, 0.5, 0.0, 1.0 