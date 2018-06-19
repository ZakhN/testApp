import React from 'react';

class Btn extends React.Component
{

    render()
    {   
        return ( <div><button  onClick={this.props.toDoMeth} >i}</button></div>);
    }
}
export default Btn;