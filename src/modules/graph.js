import List from './adjacency-list';
import Node from './node';

class Graph {
    constructor() {
        // An 8x8 matrix
        this.nodes = Array(8)
            .fill()
            .map(() => Array(8).fill(null));

        // Fill the matrix with nodes
        this.buildNode([0, 0]);

        this.nodes[0][0].knight = true;
    }

    // Recursively build the graph, starting from a node and going to it's neighbors when needed
    buildNode([x, y]) {
        // Build the node and put it in the graph
        const node = new Node([x, y]);
        this.nodes[x][y] = node;

        // Then set it's neighbors, if any neighbors doesn't exist in the graph, create it
        const neighbors = List.getNeighbors([x, y]);
        neighbors.forEach(([coordX, coordY]) => {
            node.neighbors.push(
                this.nodes[coordX][coordY]
                    ? this.nodes[coordX][coordY]
                    : this.buildNode([coordX, coordY])
            );
        });
    }
}

export default Graph;
