import { useState } from "react";

function getInitialState() {
    return {};
}

export function Game() {

    const [values, setValues] = useState(getInitialState);

    return ( 
        <div className="Game">
            <div className="Game__board">
                {
                    Array.from({length: 9}).map((_, index) => (
                        <button key={index} type="button">{index}</button>
                    ))
                }
            </div>
        </div>

    );
}