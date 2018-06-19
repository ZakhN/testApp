import React, { Component } from 'react';
import TransactionArr from './transaction.js';
import Btn from './Btn';


class App extends Component {

  constructor(props)
  {
   super(props);
   this.state = TransactionArr
  }


  sortVal = () => this.setState(state =>  state.filter(w => w.value < 1000))
  sortType = () => this.setState(state =>  state.filter(w => w.type === "income"))
  sortDate = () => this.setState(state =>  state.filter(w => w.type = "income"))
 

  render() {
    const divStyle = 
    {
      color: 'blue'
    };
    return (
      <div className="App">
        <table border = "1" cellSpacing="0" >
          <tr>
          <td></td>
          <td><Btn sortType ="value" toDoMeth={this.sortVal  } btnName={"value"} sty = {divStyle} /></td>
          <td><Btn sortType ="type"  toDoMeth={ this.sortType}  btnName={"type"} sty = {divStyle}/></td>
          <td><Btn sortType ="date"  toDoMeth={ this.sortDate}  btnName={"date"}sty = {divStyle}/></td>
          
          </tr>
          <tr>
           <th><p>id</p></th> 
           <th><p>value</p> </th>
           <th><p>type</p></th> 
           <th><p>date</p></th>
          </tr>
           {this.state.map(obj =><tr><td>{obj.id}</td><td>{obj.value}</td><td>{obj.type}</td><td>{obj.dt.toString()}</td></tr>)}
          </table>
      </div>
    )
  }     

};
export default App;
