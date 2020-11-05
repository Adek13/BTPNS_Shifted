import React, { Component } from "react"
import "./style.css"
import Option from "./option"
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <select name={this.props.name} className={this.props.className} onChange={this.props.onchange} value={this.props.value}>
                {
                    this.props.isiOption.map((element, index) => {
                        return <Option value={element[0]}  key={index}>{element[1]}</Option>
                    })
                }
            </select>
         );
    }
}
 
export default Select;