import React, { Component } from 'react';

class List extends Component {
 myData = (data) => {
        return  <option>{data+10}</option>
        
    }
    render() {
        
  const arr=[1,2,3,4,5];
  const dataItems=arr.map(this.myData)
        
        return (
            <div>
                <select>
                {dataItems}
                </select>
            </div>
        );
    }
}

export default List;