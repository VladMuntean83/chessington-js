import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from "./king";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public static checklateral(currentSquare: Square, board: Board, moves: Square[]) {

        for (let i = 0; i < 8; i++) {
            if (i != currentSquare.row) {


                const obstacle: (Piece | undefined) = board.getPiece(new Square(i, currentSquare.col));

                if (obstacle != undefined) {
                    if (obstacle.player != board.currentPlayer && !(obstacle instanceof King))
                        moves.push( new Square(i, currentSquare.col));
                    break;
                }

                moves.push( new Square(i, currentSquare.col));
            }

            if (i != currentSquare.col) {

                const obstacle: (Piece | undefined) = board.getPiece(new Square(currentSquare.row, i));
                if (obstacle != undefined) {
                    if (obstacle.player != board.currentPlayer && !(obstacle instanceof King))
                        moves.push( new Square(currentSquare.row, i));
                    break;
                }

                moves.push( new Square(currentSquare.row, i));
            }
        }
    }

    public getAvailableMoves(board: Board) {
        const moves: Square[] = [];

        try {
            const currentSquare = board.findPiece(this);
            Rook.checklateral(currentSquare, board, moves);
        } catch (e) {
            console.error(e);
        }

        return moves;
    }
}