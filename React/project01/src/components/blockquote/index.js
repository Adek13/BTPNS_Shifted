import React, { Component } from 'react';

class Blockquote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <blockquote>{this.props.children}</blockquote>
         );
    }
}
 
export default Blockquote;