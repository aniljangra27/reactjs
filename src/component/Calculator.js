import { useState, useRef } from "react";
import '../App.css'

function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);
    //calculator operation
    function plus(e) {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    };

    function minus(e) {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    };

    function times(e) {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    };

    function divide(e) {
        e.preventDefault();

        if (Number(inputRef.current.value) === 0) {
            alert("Cannot divide by zero");
            return;
        }
        setResult((result) => result / Number(inputRef.current.value));
    };

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = "";
    };

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    };

    return (<div className="calcContainer">
        <div id="title" className="title">Calculator</div>
        <form>
            <p ref={resultRef}>
                {result}
            </p>
            <input
                pattern="[0-9]"
                ref={inputRef}
                type="number"
                placeholder="Type a number"
            />
            <button onClick={plus}>add</button>
            <button onClick={minus}>Minus</button>
            <button onClick={times}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <button onClick={resetResult}>ResetResult</button>
            <button onClick={resetInput}> Reset I/p </button>
        </form>
    </div>
    );
}
export default Calculator;




