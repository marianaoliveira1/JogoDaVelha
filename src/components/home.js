import { useEffect, useState } from "react"

export function Game() {
    const emptyBoard = Array(9).fill("");
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlay, setCurrentPlayer] = useState("O");
    const [winner, setWinner] = useState();

    const handleCellClick = (index) => {
        if(winner) {
            return null;
        }
        if(board[index] !== "") {
            return null;
        }

        setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlay : item));

        setCurrentPlayer(currentPlay === 'X' ? "O": "X")
    }

    const checkWinner = () => {
        const possibleWaysToWin = [
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],

            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],

            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]],
        ];

        possibleWaysToWin.forEach(cells => {
            if(cells.every(cells => cells === "0")) {
                setWinner("O venceu");
            }

            if(cells.every(cells => cells === "X")) {
                setWinner("X venceu");
            }
        })
    }

    useEffect(checkWinner, [board]);

    const resetClick = () => {
        setCurrentPlayer("0");
        setBoard(emptyBoard);
        setWinner(null);
    }

    return (
        <main>
            <h1 className="title">Jogo da velha</h1>
            <div className={`board ${winner ? "game-over" : ""}`}>
                {
                    board.map((item, index) => (
                        <div 
                        onClick={() => handleCellClick(index)}
                        key={index}
                        className={`cell ${item}`}
                        >{item}</div>
                ))}
            </div>      
            {winner &&
                        <footer>
                            <h2 className="winner-message">
                                {winner}
                            </h2>
                            <button onClick={resetClick}>Recomeçar jogo!</button>
                        </footer>
            }

        </main>
    )
}