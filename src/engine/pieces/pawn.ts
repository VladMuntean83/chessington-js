import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        const moves: Square[] = [];

        try {
            const currSquare: Square = board.findPiece(this);

            const color_dir = this.player == Player.WHITE ? 1 : -1;

            if (Piece.inBounds(currSquare.row + color_dir, currSquare.col)) {
                if (board.getPiece(new Square(currSquare.row + color_dir, currSquare.col)) != undefined)
                    return [];

                moves.push(new Square(currSquare.row + color_dir, currSquare.col));
            }

            if (this.player == Player.WHITE && currSquare.row == 1) {

                if (board.getPiece(new Square(currSquare.row + 2, currSquare.col)) != undefined)
                    return moves;

                moves.push( new Square(currSquare.row + 2, currSquare.col));
            }

            else if (this.player == Player.BLACK && currSquare.row == 6) {
                if (board.getPiece(new Square(currSquare.row - 2, currSquare.col)) != undefined)
                    return moves;

                moves.push( new Square(currSquare.row - 2, currSquare.col));
            }

        } catch (e) {
            console.error(e);
        }
        return moves;
    }
}
