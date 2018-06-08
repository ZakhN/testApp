import React, { Component } from 'react';
import sort from './transaction.js';
import TableLine from './mainComponent.js';
import TransactionArr from './transaction.js';


class App extends Component {

  render() {

    var result = TransactionArr 
    
    function sort(arr,value,type,dt) 
    { 
      //var result
      var currentDate = new Date
    
      if( value==true)
      {
         result = arr.filter(word => word.value > 1000)
      }
    
      if( type!==false && type == "consumption" )
      {
         result = arr.filter(word=>word.type =="consumption")     
      }
      else if (type!==false && type =="income"  ) {
         result = arr.filter(word => word.type == "income")     
      }
    
      if ( dt==true)
      {
         result = arr.filter(word => word.dt.month == currentDate.month )
      }

      //return result  
    }
    
    //var TransactionArr = sort(TransactionArr) ;
    return (
      <div className="App">
        <table border = "1" cellSpacing="0" >
          <tr><td></td>
          <td><button onClick={()=> (console.log("asf"))}>Sort by value</button></td>
          <td>
          <p align="center"><button onClick={()=>{sort(result,false,"income")}}>Sort by type income</button></p>
          <button onClick={()=>result=sort(result,false,"consumption")}>Sort by type consumption</button>
          </td>
          <td align="center"><button onClick={()=>{this.sort(result,false,false,true)}}>Sort by date</button></td></tr>
          <tr>
           <th><p>id</p></th> 
           <th><p>value</p> </th>
           <th><p>type</p></th> 
           <th><p>date</p></th>
          </tr>
           <TableLine arr ={result}/>
          </table>
      </div>
    )
  }        
};

export default App;
