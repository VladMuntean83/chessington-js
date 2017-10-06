import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        const moves: Object[] = [];

        try {
            const currSquare: Square = board.findPiece(this);

            const color_dir = this.player == Player.WHITE ? 1 : -1;

            if (board.getPiece(new Square(currSquare.row + color_dir, currSquare.col)) != undefined)
               return [];

            moves.push({
                'row': currSquare.row + color_dir,
                'col': currSquare.col
            });

            if (this.player == Player.WHITE && currSquare.row == 1) {

                if (board.getPiece(new Square(currSquare.row + 2, currSquare.col)) != undefined)
                    return moves;

                moves.push({
                    'row': currSquare.row + 2,
                    'col': currSquare.col
                });
            }

            else if (this.player == Player.BLACK && currSquare.row == 6) {
                if (board.getPiece(new Square(currSquare.row - 2, currSquare.col)) != undefined)
                    return moves;

                moves.push({
                    'row': currSquare.row - 2,
                    'col': currSquare.col
                });
            }

        } catch (e) {
            console.error(e);
        }
        return moves;
    }
}
