import './style.scss';
import Graph from './modules/graph';

const board = new Graph();

board.knightMoves([1, 2]);
board.knightMoves([3, 3]);
board.knightMoves([7, 7]);
board.knightMoves([3, 1]);
board.knightMoves([2, 4]);
