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
            this.square.appendChild(
                new Range().createContextualFragment(
                    `<svg class="knight-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>Knight</title>
                        <path d="M20 8V16L17 17L13.91 11.5C13.65 11.04 12.92 11.27 13 11.81L14 21L4 17L5.15 8.94C5.64 5.53 8.56 3 12 3H20L18.42 5.37C19.36 5.88 20 6.86 20 8Z" />
                    </svg>`
                )
            );
        }
        // Case where knight is removed from here
        else {
            this.#hasKnight = false;
            this.square.removeAttribute('id');
            this.square.removeChild(this.square.querySelector('.knight-icon'));
        }
    }

    get knight() {
        return this.#hasKnight;
    }
}

export default Node;
