import React, { Component } from "react"
import "./style.css"
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className={this.props.className} style={this.props.style} id={this.props.id}>{this.props.children}</div>
         );
    }
}
 
export default Input;