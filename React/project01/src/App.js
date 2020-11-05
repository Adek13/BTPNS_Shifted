import React, {Component} from 'react';
import {Nav, Body} from './templates';
import {connect} from "react-redux"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    changeStatus = async status =>{
        await this.setState({
            statusLogin: status
        })
        // console.log(status);
    }
    render() { 
        // console.log(this.props.data);
        return ( 
            <div className="body" style={this.props.style}>
                <Nav />
                <Body />
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    dataUser: state.data.dataUser
})

const mapDispatchToProps = (dispatch) => ({
    setData: (data) => dispatch({type: "addUser", 
                                 payload: {dataUser : data}
                                })
})
export default connect(mapStateToProps, mapDispatchToProps)(App)