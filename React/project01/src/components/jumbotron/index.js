import React, { Component } from 'react';
import {H1, P, Hr, Anchor, I} from "../"
import "./style.css"

class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={this.props.className}>
                <H1 className="display-4 text-warning">Hello, We Are BTPNS ShiftED Batch 2!</H1>
                <P className="lead text-white">Bersama, Kita Ciptakan Peluang Untuk Tumbuh dan Ciptakan Hidup Yang Lebih Berarti!</P>
                <Hr className="my-4"/>
                <Anchor className="btn btn-warning text-white btn-lg" href="#more" role="button"><I className="fas fa-Info-circle"></I> Learn more</Anchor>
            </div>
         );
    }
}
 
export default Jumbotron;