import React, {Component} from "react"
import {Input} from "../"
class FormLabel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
        <div className="form-group row">
            <label className="col-sm-3 col-form-label">{this.props.input.label}</label>
            <div className="col-sm-9">
            <Input 
                type={this.props.input.type} 
                placeholder={this.props.input.placeholder} 
                name={this.props.input.name} 
                className={this.props.input.className} 
                onChangeInput={this.props.input.onChangeInput} 
                value={this.props.input.value}
                readonly={this.props.input.readonly}
            />
            </div>
        </div>
        );
    }
}
 
export default FormLabel;