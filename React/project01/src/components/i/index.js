import React, { Component } from 'react';

class I extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <i className={this.props.className} />
         );
    }
}
 
export default I;