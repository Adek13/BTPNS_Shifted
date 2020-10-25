import React, {Component} from "react"
import "./style.css"
class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <button className={this.props.className} type="button" style={this.props.style} onClick={this.props.onClick}>{this.props.children}</button>
         );
    }
}
 
export default Btn;