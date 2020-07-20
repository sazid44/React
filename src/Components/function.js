import React from 'react';

function Hello(props) {
    function Alert() {
        alert('hello function');
      }
      function Bind(a) {
        alert(a);
      }
     
    return( 
        <div>
    <button onClick={Alert}>Click me</button>{/*If u use parenhesis then the function will be called automatically */}
    <button onClick={Bind.bind(this, 'I am bounded!Help me!!!?')}>Help me</button>
    <h1>{props.name}{props.age}</h1>
    </div>
    ); 
 
  }
  export default Hello;