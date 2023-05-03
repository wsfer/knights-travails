import './style.scss';
import Graph from './modules/graph';

const board = new Graph();

board.nodes.forEach((row) => {
    row.forEach((node) => {
        document.querySelector('.board').appendChild(node.square);
    });
});
