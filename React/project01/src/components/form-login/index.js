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
    onClickLogin = async () =>{
        // console.log("tes");.
        await this.props.updateLogin(this.state);
    }
    register = () => {
        console.log({...this.props});
    }
    render() { 
        return ( 
            <Card style={{maxWidth: 500, padding: 25, marginRight: 100}}>
                <CardBody style={{minWidth: 350, display: "flex", flexDirection: "column"}}>
                    <FormRow input={{type: "text", name:"username", placeholder:"Username", onChangeInput: this.onChangeInput}}/>
                    <FormRow className="" input={{type: "password", name:"password", placeholder:"Password", onChangeInput: this.onChangeInput}}/>
                    <Btn className="btn btn-primary btn-lg text-white mb-2" style={{maxWidth: '100%'}} onClick={this.onClickLogin}>Login</Btn>
                    <Btn className="btn btn-warning btn-lg text-white" style={{maxWidth: '100%'}} onClick={this.register}>Buat Akun</Btn>
                </CardBody>
            </Card>
         );
    }
}
 
export default FormLogin;