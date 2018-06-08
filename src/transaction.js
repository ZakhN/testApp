import React from 'react';

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
      else if (type!==false && type =="income"  )
      {
         result = arr.filter(word => word.type == "income")     
      }
    
      if ( dt==true)
      {
         result = arr.filter(word => word.dt.month == currentDate.month )
      }

      return result  
    }


var TransactionArr = 
    [
    {id:1, value:500, type:'income', dt:new Date(2018, 2, 1, 1, 10)},
    {id:2, value:3421, type:'consumption', dt:new Date(2017, 2, 1, 1, 10)},
    {id:3, value:13411, type:'consumption', dt:new Date(2018, 2, 1, 1, 10)},
    {id:4, value:122, type:'consumption', dt:new Date(2017, 2, 1, 1, 10)},
    {id:5, value:12414, type:'income', dt:new Date(2017, 2, 1, 1, 10)},
    {id:6, value:4151, type:'income', dt:new Date(2017, 2, 1, 1, 10)},
    {id:7, value:1441, type:'consumption', dt:new Date(2017, 2, 1, 1, 10)},
    {id:8, value:676, type:'income', dt:new Date(2018, 2, 1, 1, 10)},
    {id:9, value:180, type:'income', dt:new Date(2018, 2, 1, 1, 10)},
    {id:10, value:999, type:'consumption', dt:new Date(2018, 2, 1, 1, 10)},
    ];
    export default SortTransactionArr;
    