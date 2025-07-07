import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        try {
            const currSquare: Square = board.findPiece(this);

            const color_dir = this.player == Player.WHITE ? 1 : -1;

            return {
                'row': currSquare.row + color_dir,
                'col': currSquare.col
            };
        } catch (e) {
            console.error(e);
        }
        return new Array(0);
    }
}
