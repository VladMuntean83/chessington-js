import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Rook extends Piece {
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
        } catch (e) {
            console.error(e);
        }

        return moves;
    }
}