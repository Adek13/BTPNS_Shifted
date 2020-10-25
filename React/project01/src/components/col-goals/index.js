import React, { Component } from 'react';
import {H2, Hr} from "../"
import "./style.css"

class ColGoals extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col goals">
                <H2 className="text-white">{this.props.h2value}</H2>
                <Hr/>
                {this.props.children}
            </div>
         );
    }
}
 
export default ColGoals;