import React, { Component } from 'react'

export default class Select extends Component {
    constructor(props) {
        super(props)
    
        this.state={
             city1:"Dhaka",
            city2:"Rajshahi",
            city3:"Rangpur",
            city4:"Chittagong",
            show:"",
            auto:"Dhaka"
        }
    }
    
selectOption=(event) => {
  var selectedValue=event.target.value
this.setState({show : selectedValue, auto : selectedValue });
                    }
    render() {
        return (
            <div>
        
                    <p>{this.state.show}</p>
                    <select onChange={this.selectOption} value={this.state.auto}>
                        <option>{this.state.city1}</option>
                        <option>{this.state.city2}</option>
                        <option>{this.state.city3}</option>
                        <option>{this.state.city4}</option>
                    </select>
          
            </div>
        )
    }
}
