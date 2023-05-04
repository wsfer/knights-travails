class Node {
    #hasKnight;

    constructor() {
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
            this.square.classList.add('knight');
        }
        // Case where knight is removed from here
        else {
            this.#hasKnight = false;
            this.square.classList.remove('knight');
        }
    }

    get knight() {
        return this.#hasKnight;
    }
}

export default Node;
