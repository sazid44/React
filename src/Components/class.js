import React,{ Component} from 'react';
class Class extends Component{
    classFun(){
        alert('hello class');
    }
    Bind(a){
        alert(a);
    }
    render(){
        return <div>
        <button onClick={this.classFun}>Class button</button>
        <button onClick={this.Bind.bind(this, 'Also help me')}>Help button</button>
        <h1>I am a {this.props.name}</h1>
</div>
       
    }
}
  export default Class;