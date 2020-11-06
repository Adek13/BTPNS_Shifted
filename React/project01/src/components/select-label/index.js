import React, { Component } from 'react';
import {Select} from '../';

class SelectLabel extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="form-group row">
            <label className="col-sm-4 col-form-label">{this.props.label}</label>
            <div className="col-sm-8">
                <Select isiOption={this.props.isiOption} className={this.props.className} name={this.props.name} onchange={this.props.onchange} value={this.props.value}/>
            </div>
        </div>
         );
    }
}
 
export default SelectLabel;