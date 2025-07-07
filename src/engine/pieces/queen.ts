import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const moves: Object[] = [];


        try {
            const currentSquare = board.findPiece(this);

            for (let i = 0; i < 8; i++) {
                if (i != currentSquare.row)
                    moves.push({
                        'row': i,
                        'col': currentSquare.col
                    });

                if (i != currentSquare.col)
                    moves.push({
                        'row': currentSquare.row,
                        'col': i
                    });
            }

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
