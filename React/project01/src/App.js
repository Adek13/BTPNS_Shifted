import React, {Component} from 'react';
import {Nav, Body} from './templates';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusLogin: false
         }
    }
    changeStatus = async status =>{
        await this.setState({
            statusLogin: status
        })
        // console.log(status);
    }
    render() { 
        return ( 
            <div className="body" style={this.props.style}>
                <Nav changeStatus={this.changeStatus} statusLogin={this.state.statusLogin}/>
                <Body changeStatus={this.changeStatus} statusLogin={this.state.statusLogin}/>
            </div>
         );
    }
}
 
export default App;