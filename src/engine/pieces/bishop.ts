import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        const moves: Object[] = [];
        try {
            const currentSquare: Square = board.findPiece(this);

            const dimDist: number = Math.min(currentSquare.row, currentSquare.col);

            // Forward diag check
            let curr_row: number = currentSquare.row - dimDist;
            let curr_col: number = currentSquare.col - dimDist;

            while (curr_row < 8 && curr_col < 8) {
                if (curr_row != currentSquare.row && Piece.inBounds(curr_row, curr_col))
                    moves.push({
                        'row': curr_row,
                        'col': curr_col
                    })
                curr_col++;
                curr_row++;
            }

            // Backward diag check
            curr_row = currentSquare.row - dimDist;
            curr_col = currentSquare.col + dimDist;

            while (curr_row < 8 && curr_col > -1) {
                if (curr_row != currentSquare.row && Piece.inBounds(curr_row, curr_col))
                    moves.push({
                        'row': curr_row,
                        'col': curr_col
                    });
                curr_row++;
                curr_col--;
            }
        } catch (e) {
            console.error(e);
        }

        return moves;
    }
}
