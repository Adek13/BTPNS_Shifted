import React, {Component} from "react"
import {Register, Login, Hubungi, ListAlbum, Beranda, Tentang} from "../../page"
import "./style.css";
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: "Daftar",
            dataRegister: [],
            dataLogin: {}
        }
    }
    onClickRegister = data =>{
        if(this.state.dataRegister.push(data)){
            alert("Berhasil Registrasi")
        }else{
            alert("Gagal Registrasi")
        }
        console.log("Data Register : ", this.state.dataRegister);
    }
    updateLogin = async data => {
        await this.setState({dataLogin : data})
        console.log("Data Login : ", this.state.dataLogin)
        this.props.changeStatus(true)
    }
    showPage = () => {
        const {page} = this.props
        if(page === "Daftar"){
            return <Register addRegister={this.onClickRegister} dataRegister={this.state.dataRegister}/>
        }
        if(page === "Masuk"){
            return <Login dataRegister={this.state.dataRegister} dataLogin={this.state.dataLogin} updateLogin={this.updateLogin}/>
        }
        if(page === "Hubungi Kami"){
            return <Hubungi />
        }
        if(page === "List Album"){
            return <ListAlbum />
        }
        if(page === "Beranda"){
            return <Beranda />
        }
        if(page === "Tentang"){
            return <Tentang />
        }
    }
    render() { 
        return ( 
            <div className="main-content">
                {this.showPage()}
            </div>
         );
    }
}
 
export default Body;