import React, {Component} from "react"
import "./style.css"
import {Input} from "../"
class FormRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
        <div className={"form-row "+this.props.className}>
            <Input type={this.props.input.type} placeholder={this.props.input.placeholder} name={this.props.input.name} className={this.props.input.className} onChangeInput={this.props.input.onChangeInput}></Input>
        </div>
         );
    }
}
 
export default FormRow;