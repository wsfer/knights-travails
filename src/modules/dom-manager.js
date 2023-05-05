class DOMManager {
    constructor() {
        this.range = new Range();
        this.from = document.querySelector('.from');
        this.to = document.querySelector('.to');
        this.path = document.querySelector('.path');
        this.steps = document.querySelector('.steps');
        this.board = document.querySelector('.board');
    }

    startKnightMove(from, to, steps) {
        this.from.textContent = `From ${from.position}`;
        this.to.textContent = `To ${to.position}`;
        this.path.textContent = '';
        this.steps.textContent = `Takes ${steps} steps`;
        // This invisible div won't allow user to select another square on middle a move
        this.board.appendChild(
            this.range.createContextualFragment('<div class="invisible"></div>')
        );
        to.square.setAttribute('id', 'target');
    }

    insertPath(from, to) {
        this.path.appendChild(
            this.range.createContextualFragment(
                `<li>From <span>${from.position}</span> go to <span>${to.position}</span></li>`
            )
        );
    }
}

export default DOMManager;
