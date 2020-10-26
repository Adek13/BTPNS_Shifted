import React, {Component} from "react"
import {Card, CardBody, CardTitle, Form, Row, Btn, Anchor, FormLabel} from "../../components";
import "./style.css"
import Logo from "../../tepat.png"
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : "",
            username : "",
            email: "",
            password: "",
            phone: "",
            website : ""
        }
    }
    onChangeInput = e =>{
        this.setState({
            [e.target.name] : e.target.value
            // console.log(data);
        })
    }
    onClickRegister = async () =>{
        // console.log("tes");
        let registered = await this.props.dataRegister.filter(x => x.email === this.state.email)
        if(registered.length){
            alert("Email Sudah Digunakan, Silahkan Gunakan Email Lain!")
        }else{
            this.props.addRegister(this.state)
            this.setState(x => x.data = {})
            document.formRegister.reset()
        }
        
    }
    render(){
        return ( 
            <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
                <CardTitle>
                    <img className="" src={Logo} alt="" style={{width: "100%"}}></img>
                </CardTitle>
                <CardBody style={{padding: 50}}>
                        <Form className="form-register" name="formRegister">
                        <FormLabel input={{type:"text", name:"name", placeholder: "Name", onChangeInput: this.onChangeInput, label: "Name"}}/>
                        <FormLabel input={{type:"text", name:"username", placeholder: "Username", onChangeInput: this.onChangeInput, label: "Username"}}/>
                        <FormLabel input={{type:"email", name:"email", placeholder: "Email", onChangeInput: this.onChangeInput, label: "Email"}}/>
                        <FormLabel input={{type:"password", name:"password", placeholder: "Password", onChangeInput: this.onChangeInput, label: "Password"}}/>
                        <FormLabel input={{type:"text", name:"phone", placeholder: "Phone", onChangeInput: this.onChangeInput, label: "Phone"}}/>
                        <FormLabel input={{type:"text", name:"website", placeholder: "Website", onChangeInput: this.onChangeInput, label: "Website"}}/>
                        <Row>
                            <Btn className="btn btn-success btn-lg" onClick={this.onClickRegister}>Simpan</Btn>
                            <Anchor className="text-primary ml-2">Sudah Punya Akun? Klik Untuk login</Anchor>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
         );
    }
}
 
export default Register;