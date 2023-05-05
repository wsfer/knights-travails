import getNeighbors from './neighbors';
import Node from './node';
import DOMManager from './dom-manager';

class Graph {
    constructor() {
        this.interface = new DOMManager();
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
        const node = new Node(
            `${['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x]}${y}`
        );
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
        if (targetNode === this.knightNode) return;
        const queue = [];

        /**
         * Setting the visitedBy to anything other than null from starting node
         * to tell the next function that this node is already visited to avoid problems.
         * This value is also the first value on path array and is removed with .slice(1) below
         */
        this.knightNode.visitedBy = -1;

        queue.push(this.knightNode);
        const path = this.findPath(targetNode, queue.shift(), queue).slice(1);

        this.knightNode.visitedBy = null; // To avoid bugs on future function calls

        this.interface.startKnightMove(
            this.knightNode,
            targetNode,
            path.length - 1
        );

        this.knightNode = path[path.length - 1]; // Points to node which the knight will end

        // Travel with the knight through the nodes, with a small delay
        for (let i = 0; i < path.length - 1; i += 1) {
            setTimeout(() => {
                path[i].knight = false;
                path[i + 1].knight = true;
                this.interface.insertPath(path[i], path[i + 1]);
            }, i * 1500 + 1000);
        }

        setTimeout(() => {
            // This will allow user to select a new square
            this.interface.board.removeChild(
                this.interface.board.querySelector('.invisible')
            );
            this.interface.steps.textContent = 'Done!';
        }, path.length * 1500);
    }

    /**
     * Do a Breadth First Search for a target node while marking all neighbor nodes of a
     * current node to point to this node.
     */
    findPath(targetNode, currentNode, queue) {
        // Base case: return the target node and it's predecessor
        if (currentNode === targetNode) {
            return [currentNode.visitedBy, currentNode];
        }

        const unvisitedNeighbors = currentNode.neighbors.filter(
            (node) => node.visitedBy === null
        );

        unvisitedNeighbors.forEach((node) => {
            node.visitedBy = currentNode;
            queue.push(node);
        });

        // Recursive step: repeat for the next node
        const path = this.findPath(targetNode, queue.shift(), queue);

        // If current node is on path, put it's predecessor on the path
        if (currentNode === path[0]) {
            path.unshift(currentNode.visitedBy);
        }

        // Unvisit all visited nodes for future function calls
        unvisitedNeighbors.forEach((node) => {
            node.visitedBy = null;
        });

        return path;
    }
}

export default Graph;
