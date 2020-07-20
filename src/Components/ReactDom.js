import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class ReactDom extends Component {
    myFun(){
       var container=document.getElementById('New') ;
       var element= <h1>I am finished</h1>
       var callback = function(){
           alert('It is finished');
       }
       ReactDOM.render(element,container,callback);
    }
    render() {
        return (
            <div>
                <button onClick={this.myFun}>hello</button>
                <h1 id='New'>This is react-dom</h1>
            </div>
        );
    }
}


export default ReactDom;