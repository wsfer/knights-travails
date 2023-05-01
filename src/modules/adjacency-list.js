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
class List {
    static getNeighbors([x, y]) {
        const nodes = [];

        // Move two square on axis x, while y is constant
        if (x + 2 <= 7) {
            if (y + 1 <= 7) nodes.push([x + 2, y + 1]);
            if (y - 1 >= 0) nodes.push([x + 2, y - 1]);
        }
        if (x - 2 >= 0) {
            if (y + 1 <= 7) nodes.push([x - 2, y + 1]);
            if (y - 1 >= 0) nodes.push([x - 2, y - 1]);
        }

        // Move two square on axis y, while x is constant
        if (y + 2 <= 7) {
            if (x + 1 <= 7) nodes.push([x + 1, y + 2]);
            if (x - 1 >= 0) nodes.push([x - 1, y + 2]);
        }
        if (y - 2 >= 0) {
            if (x + 1 <= 7) nodes.push([x + 1, y - 2]);
            if (x - 1 >= 0) nodes.push([x - 1, y - 2]);
        }

        return nodes;
    }
}

export default List;
