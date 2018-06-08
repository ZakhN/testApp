import React from 'react';
/*
function sort(arr,value,type,dt) { 
  
  var currentDate = new Date
  var result;

  if( value==true){

     result = arr.filter(word => word.value < 1000);
   
  }

  if( type!==null && type == "consumption" ){

     result = arr.filter(word=>word.type =="consumption")
    
  }
  else if (type!==null && type =="income"  ) {
     result = arr.filter(word => word.type == "income");
    
  }

  if ( dt==true)
  {
     result = arr.filter(word => word.dt.month == currentDate.month );
    
  }
  return result  
}
*/


class TableLine extends React.Component {
  
  constructor(props)
   {
    super(props);
    this.state = props.arr
   }


  render()
   {
    return (this.state.map(obj =><tr><td>{obj.id}</td><td>{obj.value}</td><td>{obj.type}</td><td>{obj.dt.toString()}</td></tr>))
   }
}
  export default TableLine;
  