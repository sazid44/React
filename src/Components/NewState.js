import React,{ Component} from 'react';
class NewState extends Component{
    constructor(){
        super()
        this.refreshNow=this.refreshNow.bind(this)
        this.state={
            name:'sazid',
            age:[1,2,3,4],
            weight:{
                class1:10,
                class2:[1,3,4,5],
            }
       }
    
    }
    refreshNow(){
        this.forceUpdate()
    }
    changeName(a){
        this.setState({name:a})
    }

    render(){

 return <div>
 <button onClick={this.refreshNow}>Refresh Button</button>
 <h1>{Math.random()}</h1>
      <h1>Name is: {this.state.name}</h1>
 <h1>Age is: {this.state.age[1]}</h1>
 <h1>weight is: {this.state.weight.class2[2]}</h1>
 <button onClick={this.changeName.bind(this, 'Muzahidul')}>Change your name</button>
 </div>

}
}
  export default NewState;