import './style.scss';
import Graph from './modules/graph';

const board = new Graph();

board.nodes.forEach((row) => {
    const div = document.createElement('div');
    row.forEach((node) => {
        div.appendChild(node.square);
    });
    document.querySelector('.board').appendChild(div);
});
