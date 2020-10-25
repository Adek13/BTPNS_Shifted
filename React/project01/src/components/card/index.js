import React, {Component} from "react"
import "./style.css"
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="card" style={this.props.style}>{this.props.children}</div>
         );
    }
}
 
export default Card;