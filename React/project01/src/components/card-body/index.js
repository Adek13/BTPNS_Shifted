import React, {Component} from "react"
import "./style.css"
class CardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="card-body" style={this.props.style}>{this.props.children}</div>
         );
    }
}
 
export default CardBody;