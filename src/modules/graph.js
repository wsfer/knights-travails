import getNeighbors from './neighbors';
import Node from './node';

class Graph {
    constructor() {
        // An 8x8 matrix
        this.nodes = Array(8)
            .fill()
            .map(() => Array(8).fill(null));

        // Fill the matrix with nodes, while setting the first element as knight position
        this.knightNode = this.buildNode([0, 0]);
        this.knightNode.knight = true;
    }

    // Recursively build the graph, starting from a node and going to it's neighbors when needed
    buildNode([x, y]) {
        // Build the node and put it in the graph
        const node = new Node();
        this.nodes[x][y] = node;
        node.square.addEventListener('click', () => {
            this.knightMoves(node);
        });

        // Then set it's neighbors, if neighbor doesn't exist in the graph, create it
        const neighbors = getNeighbors([x, y]);
        neighbors.forEach(([coordX, coordY]) => {
            node.neighbors.push(
                this.nodes[coordX][coordY]
                    ? this.nodes[coordX][coordY]
                    : this.buildNode([coordX, coordY])
            );
        });

        return node;
    }

    knightMoves(targetNode) {
        const path = this.findPath(targetNode);

        // Clear all paths for future function calls
        this.nodes.forEach((row) => {
            row.forEach((node) => {
                node.predecessor = null;
            });
        });

        // Move the knight
        let current = path.pop();
        while (path.length !== 0) {
            current.knight = false;
            current = path.pop();
            current.knight = true;
        }
        this.knightNode = current;
    }

    /**
     * Do a breadth-first search for a target node while marking a path back to starting node
     * Returns an array of nodes which the knight should travel
     */
    findPath(targetNode, startingNode = this.knightNode) {
        const queue = [];
        queue.push(startingNode);

        let currentNode = startingNode;
        while (currentNode !== targetNode) {
            this.enqueueNodes(currentNode, queue);
            currentNode = queue.shift();
        }

        // This will avoid infinite loops
        startingNode.predecessor = null;

        const path = [];
        while (currentNode) {
            path.push(currentNode);
            currentNode = currentNode.predecessor;
        }

        return path;
    }

    // Auxiliary function to process and enqueue all unvisited neighbor nodes from the current node
    enqueueNodes(currentNode, queue) {
        currentNode.neighbors.forEach((node) => {
            if (node.predecessor === null) {
                node.predecessor = currentNode;
                queue.push(node);
            }
        });
    }
}

export default Graph;
