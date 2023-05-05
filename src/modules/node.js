class Node {
    #hasKnight;

    constructor(position) {
        this.position = position;
        this.neighbors = [];
        this.#hasKnight = false;
        this.visitedBy = null; // For Breadth First Search
        this.square = new Range()
            .createContextualFragment(`<div class="square"></div>`)
            .querySelector('.square');
    }

    set knight(bool) {
        // Case where knight is moved here
        if (bool) {
            this.#hasKnight = true;
            this.square.removeAttribute('id'); // remove the target attribute
            this.square.setAttribute('id', 'knight');
        }
        // Case where knight is removed from here
        else {
            this.#hasKnight = false;
            this.square.removeAttribute('id');
        }
    }

    get knight() {
        return this.#hasKnight;
    }
}

export default Node;
