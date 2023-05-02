/**
 * There's a pattern on knight moves which makes easy to get adjacent nodes without
 * hard coding all possible combinations:
 *
 * Moves 2 squares on one axis (x or y);
 * There's one adjacent node by moving 1 square to the opposite axis, if (0 <= x <= 7) AND (0 <= y <= 7);
 * There's another adjacent node by moving -1 square on the opposite axis, if (0 <= x <= 7) AND (0 <= y <= 7);
 * Repeat these steps for all 4 directions.
 * The requirement (0 <= x <= 7) AND (0 <= y <= 7) means the node is INSIDE the board/graph.
 */
const neighbors = function getNeighborsNodeCoords([x, y]) {
    const coords = [
        [x + 1, y + 2],
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x + 1, y - 2],
        [x - 1, y - 2],
        [x - 2, y - 1],
        [x - 2, y + 1],
        [x - 1, y + 2],
    ];

    return coords.filter(
        ([coordx, coordy]) =>
            coordx >= 0 && coordx <= 7 && coordy >= 0 && coordy <= 7
    );
};

export default neighbors;
