import React, {Component} from "react"
import {HeaderItem} from "../../components"
import "./style.css"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    renderNav(){
        const {statusLogin} = this.props
        if(!statusLogin){
            return<>
                    <HeaderItem goTo={() => this.props.changePage}>Beranda</HeaderItem>
                    <HeaderItem goTo={() => this.props.changePage}>Tentang</HeaderItem>
                    <HeaderItem goTo={() => this.props.changePage}>Hubungi Kami</HeaderItem>
                    <HeaderItem goTo={() => this.props.changePage}>List Album</HeaderItem>
                    <HeaderItem goTo={() => this.props.changePage}>Masuk</HeaderItem>
                    <HeaderItem goTo={() => this.props.changePage} className="active">Daftar</HeaderItem>
                </>
        }else{
            return<>
                    <HeaderItem goTo={() => this.props.changePage}>Beranda</HeaderItem>
                    <HeaderItem goTo={() => this.props.changePage}>Tentang</HeaderItem>
                    <HeaderItem goTo={() => this.props.changePage}>Hubungi Kami</HeaderItem>
                    <HeaderItem goTo={() => this.props.changePage}>List Album</HeaderItem>
                    <HeaderItem goTo={() => this.props.changeStatus(false)}>Logout</HeaderItem>
                </>
        }
    }
    render() { 
        return ( 
        <div className="navigation">
            {this.renderNav()}
        </div> );
    }
}
 
export default Nav;