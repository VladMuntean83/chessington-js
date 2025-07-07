import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Rook from "./rook";
import Bishop from "./bishop";
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const moves: Square[] = [];


        try {
            const currentSquare = board.findPiece(this);

            Bishop.checkDiags(currentSquare, board, moves);
            Rook.checklateral(this.player, currentSquare, board, moves);
        } catch (e) {
            console.error(e);
        }

        return moves;
    }
}
