import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './style.module.css'
import Hello from './function.js';
import Class from './class.js';
import Bootstrap from './Bootstrap';
import NewState from './NewState';
import Condition from './Condition';
import ReactDom  from './ReactDom';
import DomNode  from './DomNode';
import Form from './Form';
import Select from './Select';
import List from './List';
import JsonList from './JsonList';



function App1() {
    var style={
         color:'green',
         backgroundColor:'indigo'
    }
 return (
    <div className="App1">
      <h1 style={style} >sazid</h1>
      <h1 style={{padding:"10px",color:"red"}} >sazid</h1>
      <h1 className="style">sazid</h1>
      <h1 className={styles.style}>sazid</h1>
    <JsonList/>
<List/>
<Select/>
    <Form></Form>
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

export default App1;
