import React, { Component } from "react"
import "./style.css"
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <input type={this.props.type} placeholder={this.props.placeholder} className={"input--style-1 "+this.props.className} name={this.props.name} onChange={this.props.onChangeInput} />
         );
    }
}
 
export default Input;