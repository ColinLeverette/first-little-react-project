import React from 'react';
import { Component } from 'react';


class BigComponent extends Component {
    randomColor = ()=>{
        let red = Math.floor(Math.random() * 255);
       let green = Math.floor(Math.random() * 255);
       let blue = Math.floor(Math.random() * 255);
   
       return `rgb(${red}, ${green}, ${blue})`
    };
    constructor() {
        super() 
        this.state = {
            message: 'refresh page for random color',
            color: this.randomColor()

        }
    }

    render() {
        return(
            <div style={{backgroundColor:this.state.color}}> 
                
                <h1> 
                    {
                        this.state.message
                    }
                </h1>
        
            </div>
        )
    }
}








export default BigComponent; 