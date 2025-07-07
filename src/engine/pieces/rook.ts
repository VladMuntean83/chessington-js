import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public static checklateral(currentSquare: Square, board: Board, moves: Object[]) {

        for (let i = 0; i < 8; i++) {
            if (i != currentSquare.row) {

                if (board.getPiece(new Square(i, currentSquare.col)) != undefined)
                    break;

                moves.push({
                    'row': i,
                    'col': currentSquare.col
                });
            }

            if (i != currentSquare.col) {

                if (board.getPiece(new Square(currentSquare.row, i)) != undefined)
                    break;

                moves.push({
                    'row': currentSquare.row,
                    'col': i
                });
            }
        }
    }

    public getAvailableMoves(board: Board) {
        const moves: Object[] = [];

        try {
            const currentSquare = board.findPiece(this);
            Rook.checklateral(currentSquare, board, moves);
        } catch (e) {
            console.error(e);
        }

        return moves;
    }
}