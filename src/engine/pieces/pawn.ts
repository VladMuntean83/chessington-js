import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private static checkTake(color_dir: number, row: number,
                             col:number, board:Board, moves: Square[]) {
        if (Piece.inBounds(row + color_dir, col + 1)) {
            const obstacle: (Piece | undefined) = board.getPiece(new Square(row + color_dir, col + 1));

            if (obstacle != undefined)
                if(!(obstacle instanceof King) && obstacle.player != board.currentPlayer)
                    moves.push(new Square(row + color_dir, col + 1));
        }

        if (Piece.inBounds(row + color_dir, col - 1)) {
            const obstacle: (Piece | undefined) = board.getPiece(new Square(row + color_dir, col - 1));

            if (obstacle != undefined)
                if(!(obstacle instanceof King) && obstacle.player != board.currentPlayer)
                    moves.push(new Square(row + color_dir, col - 1));
        }
    }

    public getAvailableMoves(board: Board) {

        const moves: Square[] = [];

        try {
            const currSquare: Square = board.findPiece(this);

            const color_dir = this.player == Player.WHITE ? 1 : -1;

            Pawn.checkTake(color_dir, currSquare.row, currSquare.col, board, moves);

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
