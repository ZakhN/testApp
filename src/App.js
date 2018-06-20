import React, { Component } from 'react';
import TransactionArr from './transaction.js';
import Btn from './Btn';


class App extends Component {

  constructor(props)
  {
   super(props);
   this.state = {items:TransactionArr }
  }

  

  sortVal  =              () => this.setState({items:  this.state.items.filter(w => w.value < 1000)})
  sortTypeByIncome =      () => this.setState({items:  this.state.items.filter(w => w.type === "income") })
  sortTypeByConsumption = () => this.setState({items:  this.state.items.filter(w => w.type === "consumption") })
  sortDate =              () => this.setState({items:  this.state.items.filter(w => w.dt.getMonth() === new Date().getMonth()) })
 

  render() {
    
    return (
      <div className="App">
        <table border = "1" cellSpacing="0" >
          <tr>
          <td></td>
          <td><Btn sortType ="value" toDoMeth={ this.sortVal}                btnName={"value"} /></td>
          <td>
              <Btn sortType ="type"  toDoMeth={ this.sortTypeByIncome}       btnName={"sortTypeByIncome"} />
              <Btn sortType ="type"  toDoMeth={ this.sortTypeByConsumption}  btnName={"sortTypeByConsumption"} />
          </td>
          <td><Btn sortType ="date"  toDoMeth={ this.sortDate}               btnName={"date"} /></td>
          
          </tr>
          <tr>
           <th><p>id</p></th> 
           <th><p>value</p> </th>
           <th><p>type</p></th> 
           <th><p>date</p></th>
          </tr>
           {this.state.items.map(obj =><tr><td>{obj.id}</td><td>{obj.value}</td><td>{obj.type}</td><td>{obj.dt.toString()}</td></tr>)}
          </table>
      </div>
    )
  }     

};
export default App;
