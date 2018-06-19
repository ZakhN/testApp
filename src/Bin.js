sort(arr,value,type,dt) 
    { 
     var result = arr
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
    } 