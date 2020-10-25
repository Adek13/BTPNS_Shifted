import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class Li extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <li><FontAwesomeIcon icon={faCheckCircle} /> {this.props.children}</li>
         );
    }
}
 
export default Li;