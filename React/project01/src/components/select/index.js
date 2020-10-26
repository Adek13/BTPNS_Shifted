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
            <select name={this.props.name} className={`input--style-1 ${this.props.className}`} onChange={this.props.onChangeInput}>
                {
                    this.props.isiOption.map(element => {
                        return <Option isi={element} key={element}/>
                    })
                }
            </select>
         );
    }
}
 
export default Select;