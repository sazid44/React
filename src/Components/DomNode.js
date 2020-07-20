import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class DomNode extends Component {
changeFun(){
    var container=document.getElementById('New1') ;
    ReactDOM.findDOMNode(container).innerHTML='Hello Guys';
}
    render() {
        return (
            <div>
            <button onClick={this.changeFun}>hello</button>
                <h1 id='New1'>magic</h1>
             
            </div>
        );
    }
}

export default DomNode;