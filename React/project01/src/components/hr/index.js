import React, { Component } from 'react';

class Hr extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <hr className={this.props.className} />
         );
    }
}
 
export default Hr;