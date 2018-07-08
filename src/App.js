import React, { Component } from 'react';
import TransactionArr from './transaction.js';
import './styles.css';
import Btn from './Btn';




class App extends Component {

  constructor(props)
  {
   super(props);
   this.state =   { items:TransactionArr, filta:"", inc: false, val: false, cons: false, date: false,   }
   this.mainArr = {items:TransactionArr}
   this.sortV = this.sortV.bind(this)
   this.sortI = this.sortI.bind(this)
   this.sortC = this.sortC.bind(this)
   this.sortD = this.sortD.bind(this)
   this.fil= this.fil.bind(this)
  }
  
  

  sortV(){
    
    this.setState((prevState, props) => ({
       filta : "val" , val: !prevState.val , 
    }));  
  }
  sortI(){
    this.setState((prevState) => ({
      filta : "inc",  inc: !prevState.inc
    }));
  }
  sortC(){
    this.setState((prevState) => ({
        filta : "con",  cons: !prevState.cons
    }));
  }
  sortD(){
    this.setState((prevState) => ({
        filta : "date" , date: !prevState.date
    }));
  }

  fil(elem){
    if (!this.state.inc && !this.state.val && !this.state.cons && !this.state.date) return true
    else if (this.state.inc && this.state.val ) return (elem.type =="income" && elem.value  > 1000)
    else if (this.state.inc && this.state.date ) return (elem.type=="income" && elem.dt.getMonth() == new Date().getMonth())
    else if (this.state.cons && this.state.val ) return (elem.type =="consumption" && elem.value  > 1000) 
    else if (this.state.cons && this.state.date ) return (elem.type=="consumption" && elem.dt.getMonth() == new Date().getMonth())
    else if(this.state.val && this.state.date) return (elem.val > 1000 && elem.dt.getMonth() == new Date().getMonth())
    else if (this.state.val) return  elem.value > 1000;
    else if (this.state.inc) return elem.type =="income";
    else if (this.state.cons) return elem.type =="consumption"
    else if (this.state.date) return elem.dt.getMonth() == new Date().getMonth()
    else if (this.state.val && this.state.inc && this.state.date) return (elem.val > 1000 && elem.dt.getMonth() == new Date().getMonth()&& elem.type == "income")
    else if (this.state.val && this.state.cons && this.state.date) return (elem.val > 1000 && elem.dt.getMonth() == new Date().getMonth()&& elem.type == "consumption")

   //#region  
/*
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
       */

      
        //#endregion
   }
  
  render() { 
    let btn_classV = this.state.val ? "blackButton" : "whiteButton";
    let btn_classI = this.state.inc ? "blackButton" : "whiteButton";
    let btn_classC = this.state.cons ? "blackButton" : "whiteButton";
    let btn_classD = this.state.date ? "blackButton" : "whiteButton";

    return (
      <div className="App">
        <table border = "1" cellSpacing="0" >
          <tbody>
          <tr>
          <td></td>
          <td><button className={btn_classV}  onClick  ={this.sortV}>VALUE</button>
               
             </td>
          <td>
          <button className={btn_classI} onClick  ={  this.sortI}>INCOME</button>
          <button className={btn_classC} onClick  ={this.sortC}>CONSUME</button>
          </td>
          <td><button className={btn_classD} onClick  ={this.sortD}>DATE</button></td>
          
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
