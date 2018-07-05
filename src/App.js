import React, { Component } from 'react';
import TransactionArr from './transaction.js';
import Btn from './Btn';


  export function sorting  (sortParam){ 
  switch(sortParam){
    case sortParam.inc==true:
    this.state.items.filter(w => w.type === "income")
    break;
    case sortParam.cons==true:
    this.state.items.filter(w => w.type === "consumption")
    break;
    case sortParam.val==true:
    this.state.items.filter(w => w.value >1000 )
    break;
    case sortParam.date==true:
    this.state.items.filter(w => w.dt.getMonth() === new Date().getMonth()) 
    break;
  }
};

 


class App extends Component {


 

  constructor(props)
  {
   super(props);
   this.state = {items:TransactionArr, inc: false, val: false, cons: false, date: false}
   this.obj = {inc: false, val: false, cons: false, date: false}
  }
  render() { 
  switcher = (ob) =>{
      if (ob.inc == true) ob.inc = true 
        else this.state.inc= false
      if (ob.val == true) ob.val = true  
        else this.state.val=  false 
      if (ob.cons == true) ob.cons = true 
        else this.state.cons=  false 
      if (ob.date == true) ob.date =true 
        else this.state.date= false 
      sorting(ob);
    }
    return (
      
      <div className="App">

        <table border = "1" cellSpacing="0" >
          <tbody>
          <tr>
          <td></td>
          <td><Btn sortType ="value" toDoMeth={ this.switcher(this.state) }  btnname={"value"} /></td>
          <td>
              <Btn sortType ="type"  toDoMeth={this.switcher(this.state) }   btnname={"sortTypeByIncome"} />
              <Btn sortType ="type"  toDoMeth={ this.switcher(this.state) }  btnname={"sortTypeByConsumption"} />
          </td>
          <td><Btn sortType ="date"  toDoMeth={this.switcher(this.state) }  btnname={"date"} /></td>
          
          </tr>
          
          <tr>
           <th><p>id</p></th> 
           <th><p>value</p> </th>
           <th><p>type</p></th> 
           <th><p>date</p></th>
          </tr>
           {this.state.items.map(obj =><tr key = {obj.id}><td >{obj.id}</td><td>{obj.value}</td><td>{obj.type}</td><td>{obj.dt.toString()}</td></tr>)}
          </tbody>
          </table>
      </div>
    )
  } 
};
export default App;


/* resetsortVal =          () => this.setState({items:  this.state.items.filter(w => w.value >1000 )})
   
  sortTypeByIncome =      () => this.setState({items:  this.state.items.filter(w => w.type === "income") })
  sortTypeByConsumption = () => this.setState({items:  this.state.items.filter(w => w.type === "consumption") })
  sortDate =              () => this.setState({items:  this.state.items.filter(w => w.dt.getMonth() === new Date().getMonth()) })

*/

/*  valSort = () => this.obj.val=true
  incSort = () => this.obj.inc=true
  consSort= () => this.obj.cons=true
  dateSort= () => this.obj.date=true
*/

  
  
  


    /*
    if (sortParam === "val")
    {
      // this.setState({items:  this.state.items.filter(w => w.value >1000 )})
    }
  
    if (sortParam==="inc")
    {
       this.state.inc=true
    }
  
    if(sortParam ==="cons")
    {
       this.state.cons=true
    }
    
    if(sortParam === "date")
    {
       this.state.date=true
    }   
    */
  

