import React from 'react';

class Btn extends React.Component
{
    
    constructor(props)
    {
        super(props);  
    }

    render()
    {   
        let divStyle
        return (
            <div><button 
                style = {divStyle} 
                onClick={() => { this.props.toDoMeth();() => {divStyle = {color: 'blue'}}}} 
                btnName={this.props.btnName}>
                {this.props.btnName}
             </button></div>
            );
    }
}
export default Btn;