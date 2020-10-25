import React, {Component} from "react"
// import "./style.css"
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form className={this.props.className} name={this.props.name}>{this.props.children}</form>
         );
    }
}
 
export default Form;