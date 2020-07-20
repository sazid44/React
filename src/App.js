import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Components/function.js';
import Class from './Components/class.js';
import Bootstrap from './Components/Bootstrap';
import NewState from './Components/NewState';
import Condition from './Components/Condition';
import ReactDom  from './Components/ReactDom';
import DomNode  from './Components/DomNode';

function App() {
  return (
     <div className="App">
<ReactDom></ReactDom>
<DomNode></DomNode>
{/* <Hello></Hello> Without property set,the element inside the return will be called */}
<Hello name="jamal" age="20"></Hello>
<Class name='sazid'></Class>
<Bootstrap></Bootstrap>
<NewState/>
<Condition/>

 </div>
 );
}

export default App;
