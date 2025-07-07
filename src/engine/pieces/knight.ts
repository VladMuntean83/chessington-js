import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        const moves: Square[] = [];

        try {
            const currentSquare = board.findPiece(this);

            const row = currentSquare.row;
            const col = currentSquare.col;

            const rowMoves: number[] = [-2, -1, 1, 2, -2, -1, 1, 2];
            const colMoves: number[] = [1, 2, 2, 1, -1, -2, -2, -1];

            for (let i = 0; i < rowMoves.length; i++) {
                if (Piece.inBounds(row + rowMoves[i], col + colMoves[i])) {

                    const obstacle: (Piece | undefined) = board.getPiece(new Square(
                        row + rowMoves[i], col + colMoves[i]
                    ));

                    if (obstacle != undefined) {
                        if (obstacle instanceof King || obstacle.player == board.currentPlayer)
                            continue;
                    }
                    moves.push(new Square(row + rowMoves[i], col + colMoves[i]));
                }
            }
        } catch (e) {
            console.error(e);
        }

        return moves;
    }
}
