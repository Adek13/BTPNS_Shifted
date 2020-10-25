import React, { Component } from 'react';
import {Li} from "../"

class Ul extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul>
                {
                    this.props.li.text.map( element => {
                    return <Li iclass={this.props.li.iclass}>{element}</Li>
                    })
                }
            </ul>
         );
    }
}
 
export default Ul;