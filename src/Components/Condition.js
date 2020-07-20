import React,{ Component} from 'react';
class Condition extends Component{
    constructor(){
        super()
        this.state={
           login:true
            }
           }
       render(){

        /*Element variable
        return (
            this.state.login? 
            (<h1>True</h1> )
            : (<h1>False</h1>)
        )*/
       if (this.state.login==true) {
           return(<button>Log out</button>)
       }else{
        return(<button>Log in</button>)
       }
       }
    }
 



  export default Condition;