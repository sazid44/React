import React, { Component } from 'react';

class JsonList extends Component {

    render() {
        
  const jsonArr=[
      {
          city:'Dhaka',
          school:'1'
      },
      {
        city:'Rajshahi',
        school:'1'
    },
    {
        city:'Rangpur',
        school:'1'
    },
  ];
  const dataItemsCity=jsonArr.map((dataCity)=> {
    return  <option>{dataCity.city}</option>
    
})
        
        return (
            <div>
                <select>
                {dataItemsCity}
                </select>
            </div>
        );
    }
}

export default JsonList;