import React, { Component } from "react"
// import "./style.css"
class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <option value={this.props.value} selected={this.props.selected}>{this.props.children}</option>
         );
    }
}
 
export default Option;