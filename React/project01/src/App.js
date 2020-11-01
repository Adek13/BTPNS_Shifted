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
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
                if(this.props.dataUser !== undefined){
                        let dataUser = json.map(data => ({...data, password: "123", status: "user"}))
                    let dataState = this.props.dataUser
                    for (let index = 0; index < dataUser.length; index++) {
                        dataState[index] = dataUser[index];
                        this.props.setData(dataState)
                    }
                }else{
                    this.props.setData(json)
                }
            
        })
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