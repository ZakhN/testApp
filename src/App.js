import React, { Component } from 'react';
import TransactionArr from './transaction.js';
import Btn from './Btn';




class App extends Component {

  constructor(props)
  {
   super(props);
   this.state =   { items:TransactionArr, filta:"", inc: false, val: false, cons: false, date: false  }
   this.mainArr = {items:TransactionArr}
   this.sortV = this.sortV.bind(this)
   this.sortI = this.sortI.bind(this)
   this.sortC = this.sortC.bind(this)
   this.sortD = this.sortD.bind(this)
   
   this.fil= this.fil.bind(this)
  }
  

  sortV(){
    this.setState((prevState, props) => ({
      filta : "val"
    }));  
  }
  sortI(){
    this.setState(() => ({
      filta : "inc"
    }));
  }
  sortC(){
    this.setState(() => ({
        filta : "con"
    }));
  }
  sortD(){
    this.setState(() => ({
        filta : "date"
    }));
  }

  fil(elem){

    switch(this.state.filta){
      case  "con":
        return elem.type == "consumption" ;
      break;

      case  "val":
        return elem.value > 1000;
      break;

      case "inc":
        return elem.type =="income";
      break;

      case "date":
        return elem.dt.getMonth() == new Date().getMonth()
      break;

       default: return this.state.items
       
    }
   }
  
  render() { 
    return (
      <div className="App">
        <table border = "1" cellSpacing="0" >
          <tbody>
          <tr>
          <td></td>
          <td><button  onClick  ={this.sortV}>VALUE</button>
               
             </td>
          <td>
          <button  onClick  ={  this.sortI}>INCOME</button>
          <button  onClick  ={this.sortC}>CONSUME</button>
          </td>
          <td><button  onClick  ={this.sortD}>DATE</button></td>
          
          </tr>
          
          <tr>
           <th><p>id</p></th> 
           <th><p>value</p> </th>
           <th><p>type</p></th> 
           <th><p>date</p></th>
          </tr>
           {this.state.items.filter(this.fil
           ).map(obj =><tr key = {obj.id}><td >{obj.id}</td><td>{obj.value}</td><td>{obj.type}</td><td>{obj.dt.toString()}</td></tr>)}
          </tbody>
          </table>
      </div>
    )
  }     

};
export default App;
