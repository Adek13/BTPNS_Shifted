import React, { Component } from "react"
import "./style.css"
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    shouldComponentUpdate(){
        return false
    }
    render() { 
        return ( 
            <input 
                type={this.props.type} 
                placeholder={this.props.placeholder} 
                className={"form-control "+this.props.className} 
                name={this.props.name} 
                onChange={this.props.onChangeInput} 
                // value={this.props.value}    
                readOnly={this.props.readonly}
                defaultValue={this.props.value}
            />
         );
    }
}
 
export default Input;