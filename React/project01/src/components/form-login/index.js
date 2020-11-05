import React, {Component} from "react"
import FormRow from "../form-row";
import "./style.css"
import {Card, CardBody, Btn} from "../"
import {connect} from "react-redux"
import { Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode'

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            "username": "",
            "password": ""
         }
    }
    onChangeInput = e =>{
        this.setState(data =>{
            data[e.target.name] = e.target.value
            // console.log(data);
        })
    }
    onClickLogin = async () =>{
        let dataUser = await this.fetchLogin(this.state)
        if(dataUser.code === 200){
            this.props.doLogin(dataUser)
            alert(`Selamat Datang`)
        }else{
            alert(`Username Atau Password Salah atau Belum Terdaftar!`)
        }
        
        // console.log(dataLogin);
    }

    //get data user dari API
    fetchLogin = (data) => {
        return fetch(`http://localhost:3000/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
    }

    render() { 
        // console.log("data user: ", this.props.dataUser);
        // console.log("data login: ", this.props.dataLogin);
        // console.log("status login: ", this.props.statusLogin);
        if(this.props.statusLogin)
            return <Redirect exact to="/" />
        return ( 
            <Card style={{maxWidth: 500, padding: 25, marginRight: 100}}>
                <CardBody style={{minWidth: 350, display: "flex", flexDirection: "column"}}>
                    <FormRow input={{type: "text", name:"username", placeholder:"Username", onChangeInput: this.onChangeInput}}/>
                    <FormRow className="" input={{type: "password", name:"password", placeholder:"Password", onChangeInput: this.onChangeInput}}/>
                    <Btn className="btn btn-primary btn-lg text-white mb-2" style={{maxWidth: '100%'}} onClick={() => this.onClickLogin()}>Login</Btn>
                    <a className="btn btn-warning btn-lg text-white" style={{maxWidth: '100%'}} href="/register">Buat Akun</a>
                </CardBody>
            </Card>
         );
    }
}
const mapStateToProps = (state) => ({
    statusLogin: state.auth.statusLogin
})
const mapDispatchToProps = (dispatch) => ({
    doLogin: (data) => dispatch({type: "login", 
                                 payload: {
                                            statusLogin: jwtDecode(data.data.token).status, 
                                            token: data.data.token,
                                        }
                                })
})
export default connect(mapStateToProps,mapDispatchToProps)(FormLogin);