import React, {Component} from "react"
import "./style.css"
class FormCol extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="form-col" style={this.props.style}>{this.props.children}</div>
         );
    }
}
 
export default FormCol;