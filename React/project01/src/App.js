import React, {Component} from 'react';
import {Nav, Body} from './templates';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: "Daftar",
            statusLogin: false
         }
    }
    onClickNav = async e => {
        
        let nav = document.querySelector(".header-item.active")
        nav.classList.remove("active")
        e.target.classList.add("active")
        this.setState ({
            page: e.target.innerHTML
        })
        
    }
    changeStatus = status =>{
        this.setState({
            statusLogin: status
        })
        if(status){
            this.setState({
                page: "Beranda"
            })
        }else{
            this.setState({
                page: "Login"
            })
        }
    }
    render() { 
        return ( 
            <div className="body" style={this.props.style}>
                <Nav changePage={this.onClickNav} changeStatus={this.changeStatus} statusLogin={this.state.statusLogin} activePage={this.state.activePage}/>
                <Body page={this.state.page} changePage={this.onClickNav} changeStatus={this.changeStatus}/>
            </div>
         );
    }
}
 
export default App;