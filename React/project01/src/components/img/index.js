import React, { Component } from "react"
import "./style.css"
class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <img className={this.props.className} src={this.props.src}></img>
         );
    }
}
 
export default Img;