import { useState } from "react"
import './sections.css';

function StateComp() {
    function udpateValue(e) {
        setText(e.target.value);
    }
    const [inputText, setText] = useState("hello");
    return(<div id="stateComp">
        <input value={inputText} onChange={udpateValue}/>
        <p>You type:- {inputText}</p>
        <button onClick={() => setText('hello')}>Reset</button>
        </div>);
}

export default StateComp;