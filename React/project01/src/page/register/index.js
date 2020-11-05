import React, {Component} from "react"
import {Card, CardBody, CardTitle, Form, Row, Btn, Anchor, FormLabel, SelectLabel} from "../../components";
import "./style.css"
import Logo from "../../tepat.png"
import { connect } from "react-redux";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama : "",
            tanggal_lahir : "",
            jenis_kelamin : "",
            alamat : "",
            agama : "",
            status_perkawinan : "",
            pekerjaan : "",
            kewarganegaraan : "",
            department: "",
            array_department : [],
            username : "",
            email: "",
            password: "",
            status : ""
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/department")
        .then(response => response.json())
        .then(json => {
            let data = [["", "Pilih Department"]]
            json.data.forEach(element => {
                data.push([element.id, element.nama_department])
            })
            this.setState({
                array_department: data
            })
        })
    }
    onChangeInput = async e =>{
        await this.setState({
            [e.target.name] : e.target.value
        })
    }
    onClickRegister = async () =>{
        let data = {...this.state, id_role: "1"}
        delete data.array_department
        let fetch = await this.fetchRegister(data)
        if(fetch.code!==200){
            alert("Email Sudah Digunakan!")
        }else{
            alert("Registrasi Berhasil")
            this.setState(x => x.data = {})
            document.formRegister.reset()
        }        
    }

    fetchRegister = (dataRegister) => {
        return fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(dataRegister)
        })
        .then(response => response.json())
    }
    render(){
        console.log(this.state);
        return ( 
            <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
                <CardTitle>
                    <img className="" src={Logo} alt="" style={{width: "100%"}}></img>
                </CardTitle>
                <CardBody style={{padding: 50}}>
                        <Form className="form-register" name="formRegister">
                        <FormLabel input={{type:"text", name:"nama", placeholder: "Nama", onChangeInput: this.onChangeInput, label: "Nama Lengkap"}}/>
                        <FormLabel input={{type:"date", name:"tanggal_lahir", onChangeInput: this.onChangeInput, label: "Tanggal Lahir"}}/>
                        <SelectLabel 
                            className="custom-select" 
                            isiOption={[["", "Pilih Jenis Kelamin"], ["L", "Laki-laki"], ["P", "Perempuan"]]} 
                            label="Jenis Kelamin" 
                            name="Jenis Kelamin"
                            onchange={(e) => this.setState({ jenis_kelamin : e.target.value})}
                        />
                        <FormLabel input={{type:"text", name:"alamat", placeholder: "Alamat", onChangeInput: this.onChangeInput, label: "Alamat"}}/>
                        <FormLabel input={{type:"text", name:"agama", placeholder: "Agama", onChangeInput: this.onChangeInput, label: "Agama"}}/>
                        <SelectLabel 
                            className="custom-select" 
                            isiOption={[["", "Pilih Status Perkawinan"], ["Belum Kawin", "Belum Kawin"], ["Sudah Kawin", "Sudah Kawin"]]}
                            label="Status Perkawinan" 
                            name="status_perkawinan"
                            onchange={(e) => this.setState({ status_perkawinan : e.target.value})}

                        />
                        <FormLabel input={{type:"text", name:"pekerjaan", placeholder: "Pekerjaan", onChangeInput: this.onChangeInput, label: "Pekerjaan"}}/>
                        <SelectLabel 
                            className="custom-select" 
                            isiOption={[["", "Pilih Kewarganegaraan"], ["WNI", "WNI"], ["WNA", "WNA"]]} 
                            label="Kewarganegaraan" 
                            name="kewarganegaraan"
                            onchange={(e) => this.setState({ kewarganegaraan : e.target.value})}
                        />
                        <SelectLabel 
                            className="custom-select" 
                            isiOption={this.state.array_department} 
                            label="Department" 
                            name="department"
                            onchange={(e) => this.setState({ department : e.target.value})}
                        />
                        <FormLabel input={{type:"text", name:"username", placeholder: "Username", onChangeInput: this.onChangeInput, label: "Username"}}/>
                        <FormLabel input={{type:"email", name:"email", placeholder: "Email", onChangeInput: this.onChangeInput, label: "Email"}}/>
                        <FormLabel input={{type:"password", name:"password", placeholder: "Password", onChangeInput: this.onChangeInput, label: "Password"}}/>
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

const mapStateToProps = state => ({
    dataUser: state.data.dataUser
})

const mapDispatchToProps = dispatch => ({
    doRegister: (data) => dispatch({type:"addUser", payload: {dataUser: data}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);