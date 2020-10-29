import React, {Component} from "react"
import FormRow from "../form-row";
import "./style.css"
import {Card, CardBody, Btn} from "../"
import {connect} from "react-redux"
import { Redirect } from "react-router-dom";

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    onChangeInput = e =>{
        this.setState(data =>{
            data[e.target.name] = e.target.value
            // console.log(data);
        })
    }
    onClickLogin = async () =>{
        let dataLogin = await this.props.dataUser.filter(data => data.username === this.state.username && data.password === this.state.password)
        console.log(dataLogin);
        if(dataLogin.length){
            this.props.doLogin(dataLogin[0])
            alert(`Selamat Datang ${dataLogin[0].name}`)
        }else{
            alert(`Username Atau Password Salah atau Belum Terdaftar!`)
        }
        
        // console.log(dataLogin);
    }
    render() { 
        console.log("data user: ", this.props.dataUser);
        console.log("data login: ", this.props.dataLogin);
        console.log("status login: ", this.props.statusLogin);
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
    dataUser: state.data.dataUser,
    dataLogin: state.auth.dataLogin,
    statusLogin: state.auth.statusLogin
})
const mapDispatchToProps = (dispatch) => ({
    doLogin: (data) => dispatch({type: "login", 
                                 payload: {
                                            statusLogin: data.status, 
                                            dataInput: data
                                        }
                                })
})
export default connect(mapStateToProps,mapDispatchToProps)(FormLogin);