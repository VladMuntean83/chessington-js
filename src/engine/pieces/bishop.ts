import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public static checkDiags(currentSquare: Square, board: Board, moves: Square[]) {
        // Forward diag check
        let curr_row: number = currentSquare.row - 1;
        let curr_col: number = currentSquare.col - 1;

        // Down
        while (curr_row >= 0 && curr_col >= 0) {
            if(board.getPiece(new Square(curr_row, curr_col)) != undefined)
                break;
            moves.push( new Square(curr_row, curr_col));

            curr_col--;
            curr_row--;
        }

        curr_row = currentSquare.row + 1;
        curr_col = currentSquare.col + 1;

        // Up
        while (curr_row < 8 && curr_col < 8) {
            if(board.getPiece(new Square(curr_row, curr_col)) != undefined)
                break;
            moves.push( new Square(curr_row, curr_col));

            curr_col++;
            curr_row++;
        }

        // Backward diag check
        curr_row = currentSquare.row - 1;
        curr_col = currentSquare.col + 1;

        // Down
        while (curr_row >= 0 && curr_col < 8) {
            if(board.getPiece(new Square(curr_row, curr_col)) != undefined)
                break;
            moves.push( new Square(curr_row, curr_col));

            curr_col++;
            curr_row--;
        }

        curr_row = currentSquare.row + 1;
        curr_col = currentSquare.col - 1;

        // Up
        while (curr_row < 8 && curr_col >= 0) {
            if(board.getPiece(new Square(curr_row, curr_col)) != undefined)
                break;
            moves.push( new Square(curr_row, curr_col));

            curr_col--;
            curr_row++;
        }
    }

    public getAvailableMoves(board: Board) {

        const moves: Square[] = [];
        try {
            const currentSquare: Square = board.findPiece(this);
            Bishop.checkDiags(currentSquare, board, moves);
        } catch (e) {
            console.error(e);
        }

        return moves;
    }
}
