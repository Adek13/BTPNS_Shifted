import React, {Component} from "react"
import {HeaderItem} from "../../components"
import "./style.css"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    renderNav = (statusLogin) => {
        if(statusLogin){
            return<>
                    <HeaderItem content="Beranda" goTo={() => this.props.changePage("Beranda")}>Beranda</HeaderItem>
                    <HeaderItem content="Tentang" goTo={() => this.props.changePage("Tentang")}>Tentang</HeaderItem>
                    <HeaderItem content="Hubungi" goTo={() => this.props.changePage("Hubungi")}>Hubungi Kami</HeaderItem>
                    <HeaderItem content="List" goTo={() => this.props.changePage("List")}>List Album</HeaderItem>
                    <HeaderItem content="Logout" goTo={() => this.props.changeStatus(false)}>Logout</HeaderItem>
                </>
        }else{
            return<>
                    <HeaderItem content="Beranda" goTo={() => this.props.changePage("Beranda")}>Beranda</HeaderItem>
                    <HeaderItem content="Tentang" goTo={() => this.props.changePage("Tentang")}>Tentang</HeaderItem>
                    <HeaderItem content="Hubungi" goTo={() => this.props.changePage("Hubungi")}>Hubungi Kami</HeaderItem>
                    <HeaderItem content="List" goTo={() => this.props.changePage("List")}>List Album</HeaderItem>
                    <HeaderItem content="Masuk" goTo={() => this.props.changePage("Masuk")}>Masuk</HeaderItem>
                    <HeaderItem content="Daftar" goTo={() => this.props.changePage("Daftar")} className="active">Daftar</HeaderItem>
                </>
        }
    }
    render() { 
        return ( 
        <div className="navigation">
            {this.renderNav(this.props.statusLogin)}
        </div> );
    }
}
 
export default Nav;