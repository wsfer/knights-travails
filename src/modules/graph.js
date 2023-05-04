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
        node.square.addEventListener('click', (e) => {
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

    /**
     * Find the shortest path from current node the knight is to a target node
     * then move the knight through nodes in this path
     */
    knightMoves(targetNode) {
        // Find the path
        const queue = [];

        /**
         * Setting the visitedBy to anything other than null from starting node
         * to tell the next function that this node is already visited to avoid problems
         */
        this.knightNode.visitedBy = -1;

        queue.push(this.knightNode);
        const path = this.findPath(targetNode, queue.shift(), queue);

        path.pop(); // remove the knightNode temporary predecessor from path

        // Reset starting node predecessor for future function calls
        this.knightNode.visitedBy = null;

        // Travel with the knight through the nodes
        let current = path.pop();
        // TODO: a delay while travelling
        while (path.length !== 0) {
            current.knight = false;
            current = path.pop();
            current.knight = true;
        }
        this.knightNode = current; // Points to node which the knight is now
    }

    /**
     * Do a Breadth First Search for a target node while marking all neighbor nodes of a
     * current node to point to this node.
     */
    findPath(targetNode, currentNode, queue) {
        // Base case: return the target node and it's predecessor
        if (currentNode === targetNode) {
            return [currentNode, currentNode.visitedBy];
        }

        const unvisitedNeighbors = currentNode.neighbors.filter(
            (node) => node.visitedBy === null
        );

        // Visited and push the nodes to the queue
        unvisitedNeighbors.forEach((node) => {
            node.visitedBy = currentNode;
            queue.push(node);
        });

        // Then repeat to the next node on queue
        const path = this.findPath(targetNode, queue.shift(), queue);

        // If current node is on path, put it's predecessor on the path
        if (currentNode === path[path.length - 1]) {
            path.push(currentNode.visitedBy);
        }

        // "unvisit" all visited nodes for future function calls
        unvisitedNeighbors.forEach((node) => {
            node.visitedBy = null;
        });

        return path;
    }
}

export default Graph;
