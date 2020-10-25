import React, { Component } from "react"
// import "./style.css"
class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <option value={this.props.isi}>{this.props.isi}</option>
         );
    }
}
 
export default Option;