import { useEffect, useState } from 'react';

function Tictactoe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isx, setIsx] = useState(true);
    let gameStatus;

    const handleClick = (sqInd) => {
        if (calculateWinner() || squares[sqInd]) return;
        squares[sqInd] = isx ? 'X': 'O';
        setIsx(!isx);
        setSquares([...squares]);
    }

    const handleRestart = () => {
        setIsx(true);
        setSquares(Array(9).fill(null));
    }

    const renderSquare = (sqInd) => {
        return (
            <button className="tic-tac-toe-square" onClick={() => handleClick(sqInd)}>{squares[sqInd]}</button>
        )
    }

    const calculateWinner = () => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner();
    if (winner) {
        gameStatus = `Winner: ${winner}`;
    } else {
        gameStatus = `Next player: ${isx ? 'X': 'O'}`;
    }

    const Board = () => {
        return (
            <div>
                <div className='board-row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>

            <div>{gameStatus}</div>
            <button onClick={() => handleRestart()}>Restart</button>
            </div>
        )
    }

    return (
        <div className="tic-tac-toe">
            <Board squares={squares} isx={isx} />
        </div>
    );
};




export default Tictactoe;