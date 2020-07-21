import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fname:"",
            lname:"",
            email:"",
            mobile:"",
           
        }
    }
    
    onChangeHandler=(event) => {
var myname=event.target.name
var myvalue=event.target.value
this.setState({[myname] : myvalue });
    }
    onSubmitHandler=() => {
 alert(this.state.username);
            } 

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                <p>First Name:{this.state.fname}</p>
                <p>Last Name:{this.state.lname}</p>
                <p>Email:{this.state.email}</p>
                <p>Mobile:{this.state.mobile}</p>
                    <input type="text" onChange={this.onChangeHandler} name="fname" id=""></input><br></br>
                    <input type="text" onChange={this.onChangeHandler} name="lname" id=""></input><br></br>
                    <input type="text" onChange={this.onChangeHandler} name="email" id=""></input><br></br>
                    <input type="text" onChange={this.onChangeHandler} name="mobile" id=""></input><br></br>
                    <input type="submit" value="Submit now"></input>
                    </form>
            </div>
        )
    }
}
