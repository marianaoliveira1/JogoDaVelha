import { useState } from "react"

export function Game() {
    const emptyBoard = Array(9).fill("");
    const [board, setBoard] = useState(emptyBoard);

    return (
        <main>
            <h1 className="title">Jogo da velha</h1>
            <div className="board">
                {
                    board.map((item, index) => (
                        <div 
                        key={index}
                        className={`cell ${item}`}
                        >{item}</div>
                ))}
            </div>
        </main>
    )
}