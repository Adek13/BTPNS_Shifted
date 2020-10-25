import React, {Component} from "react"
import {Card, CardBody, CardTitle, Form, FormCol, FormRow, Row, Btn, Anchor, Select} from "../../components";
import "./style.css"
import Logo from "../../tepat.png"
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : {}
        }
    }
    onChangeInput = e =>{
        this.setState(data =>{
            data.data[e.target.name] = e.target.value
            console.log(data);
        })
    }
    onClickRegister = async () =>{
        // console.log("tes");
        let registered = await this.props.dataRegister.filter(x => x.email === this.state.data.email)
        if(registered.length){
            alert("Email Sudah Digunakan, Silahkan Gunakan Email Lain!")
        }else{
            this.props.addRegister(this.state.data)
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
                        <FormRow input={{type:"text", name:"nama", placeholder:"Nama Lengkap", onChangeInput: this.onChangeInput}}/>
                        <FormRow input={{type:"email", name:"email", placeholder:"Email", onChangeInput: this.onChangeInput}}/>
                        <FormRow input={{type:"password", name:"password", placeholder:"Password", onChangeInput: this.onChangeInput}}/>
                        <Row className="rows d-flex justify-content-between">
                            <FormCol className="form-col" style={{width: "max-content"}}>
                                <FormRow input={{type:"date", name:"birthday", placeholder:"", onChangeInput: this.onChangeInput}}/>
                            </FormCol>
                            <FormCol className="form-col">
                                <div className="form-row">
                                    <Select isiOption={["Jenis Kelamin", "Laki-laki", "Perempuan"]} name="gender" onChangeInput={this.onChangeInput} className="custom-select"></Select>
                                </div>
                            </FormCol>
                        </Row>
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