// Import React and React-DOM 
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return "Click here !";
}
function getTime() {
    return (new Date()).toLocaleTimeString()
}
//Create Component
const App = () => {
    const buttonText = "Click Me!";
    const labelText = 'Enter Name:';
  return  (
    <div>
        <label className="label" htmlFor="name">{labelText}</label>
        <input id="name" type="text"/>
        <button style={{ backgroundColor:'blue', color:'white' }}>
            {buttonText}
        </button>
        <div><label>Current Time: {getTime()}</label></div>
        <ul>
          <li>Hi, There !</li>
          <li>Learn React</li>
          <li>Go deep in React</li>
      </ul>
    </div>
  );
};


//Take react component and show it on screen
ReactDOM.render(<App/>,document.querySelector('#root'));