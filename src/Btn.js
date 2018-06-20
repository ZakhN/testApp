import React from 'react';
import './styles.css';

class Btn extends React.Component
{
    
    constructor(props)
    {
        
        super();  
        this.state={black: true}
    }
    changeColor()
    {
        this.setState({black: !this.state.black})
    }
    
    render()
    {   
        let btn_class = this.state.black ? "blackButton" : "whiteButton";
        
        return (
            
            <div><button 
                
                className={btn_class}
                onClick  ={() => { this.props.toDoMeth(); this.changeColor()}}
                btnName  ={this.props.btnName}>
                {this.props.btnName}
             </button></div>
            );
    }
}
export default Btn;
