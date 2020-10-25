import React, {Component} from "react"
import FormRow from "../form-row";
import "./style.css"
import {Card, CardBody, Btn} from "../"

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
    onClickLogin = () =>{
        // console.log("tes");.
        let dataSearch = this.props.dataRegister.filter(register => register.email === this.state.email && register.password === this.state.password)
        if(dataSearch.length){
            this.props.updateLogin(dataSearch);
            alert("Berhasil Login")
        }else{
            alert("Email atau Password Salah!")
        }
        this.setState(x => x = {})
    }
    render() { 
        return ( 
            <Card style={{maxWidth: 500, padding: 25, marginRight: 100}}>
                <CardBody style={{minWidth: 350, display: "flex", flexDirection: "column"}}>
                    <FormRow input={{type: "email", name:"email", placeholder:"Email", onChangeInput: this.onChangeInput}}/>
                    <FormRow className="" input={{type: "password", name:"password", placeholder:"Password", onChangeInput: this.onChangeInput}}/>
                    <Btn className="btn btn-primary btn-lg text-white mb-2" style={{maxWidth: '100%'}} onClick={this.onClickLogin}>Login</Btn>
                    <Btn className="btn btn-warning btn-lg text-white" style={{maxWidth: '100%'}}>Buat Akun</Btn>
                </CardBody>
            </Card>
         );
    }
}
 
export default FormLogin;