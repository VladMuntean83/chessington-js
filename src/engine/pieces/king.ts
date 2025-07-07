import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const moves: Square[] = [];

        try {
            const currSquare: Square = board.findPiece(this);

            for (let i = currSquare.row - 1; i <= currSquare.row + 1; i++)
                for (let j = currSquare.col - 1; j <= currSquare.col + 1; j++)
                    if(i != currSquare.row || j != currSquare.col)
                        moves.push( new Square(i, j));

        } catch (e) {
            console.error(e);
        }

        return moves;
    }
}
