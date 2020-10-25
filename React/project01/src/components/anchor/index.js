import React, {Component} from "react"
class Anchor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <a className={this.props.className} href={this.props.href} role={this.props.role} data-slide={this.props.dataSlide}>{this.props.children}</a>
         );
    }
}
 
export default Anchor;