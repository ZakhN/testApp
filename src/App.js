import React, { Component } from 'react';
import TransactionArr from './transaction.js';
import Btn from './Btn';


class App extends Component {

  constructor(props)
  {
   super(props);
   this.state = TransactionArr
  }
  printSmth = () => this.setState(state => { return state.filter(w => w.value < 1000) } )

  render() {
    return (
      <div className="App">
        <table border = "1" cellSpacing="0" >
          <tr>
          <td><Btn sortType ="type" toDoMeth={this.printSmth} /></td>
          <td><Btn sortType ="value"/></td>
          <td><Btn sortType ="type"/></td>
          <td><Btn sortType ="type"/></td>
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
