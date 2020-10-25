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
    onClickNav = async page => {
        await this.setState ({
            page: page
        })
        let activePage = document.querySelectorAll(".header-item")
        activePage.forEach(element => {
            element.classList.remove("active")
        })
        let clickedPage = document.querySelector(`.header-item[content="${page}"]`)
        clickedPage.classList.add("active")
        // console.log(page);
        
    }
    changeStatus = async status =>{
        await this.setState({
            statusLogin: status
        })
        if(status){
            await this.setState({
                page: "Beranda"
            })
            this.onClickNav("Beranda")
        }else{
            await this.setState({
                page: "Masuk"
            })
            this.onClickNav("Masuk")
        }
        // console.log(status);
    }
    render() { 
        return ( 
            <div className="body" style={this.props.style}>
                <Nav changePage={this.onClickNav} changeStatus={this.changeStatus} statusLogin={this.state.statusLogin}/>
                <Body page={this.state.page} changePage={this.onClickNav} changeStatus={this.changeStatus}/>
            </div>
         );
    }
}
 
export default App;