import React, {Component} from "react"
import "./style.css"
class CardTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="card-title">{this.props.children}</div>
         );
    }
}
 
export default CardTitle;