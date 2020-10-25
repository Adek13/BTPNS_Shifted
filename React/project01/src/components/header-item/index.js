import React, {Component} from "react"
import "./style.css"
class HeaderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className={"header-item " + this.props.className} content={this.props.content} onClick={this.props.goTo}>{this.props.children}</div>
         );
    }
}
 
export default HeaderItem;