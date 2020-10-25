import React, {Component} from "react"

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <textarea cols="30" rows="10" name={this.props.data.name} placeholder={this.props.data.placeholder} className={this.props.data.className}>{this.props.data.children}</textarea>
         );
    }
}
 
export default TextArea;