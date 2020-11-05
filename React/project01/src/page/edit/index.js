import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, CardTitle, H1, CardBody, FormLabel, Form, Btn, SelectLabel} from "../../components"
// import {Link} from "react-router-dom"

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "username": "",
            "email": "",
            "password": "",
            "status": "",
            "isiOption": [["", "Pilih Status"]]
         }
    }
    onChangeInput = async e => {
        await this.setState({
            [e.target.name] : e.target.value
        })
    }

    onClickSave = async () => {
        let fetched = await this.fetchEdit(this.state)
        if(fetched.code !== 200){
            alert("Gagal Update Data!")
        }else{
            alert("Berhasil Update Data!")
        }
    }

    fetchEdit = (data) => {
        return fetch(`http://localhost:3000/user/${this.props.location.state.id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${this.props.dataLogin.token}`
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
    }

    setData = () => {
        fetch(`http://localhost:3000/user/${this.props.location.state.id}`,{
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${this.props.dataLogin.token}`
            }
        })
        .then(response => response.json())
        .then(json => {
            this.setState(json.data)
        })
    }

    componentDidMount(){
        this.setData()
    }

    render() { 
        const data = this.state
        return ( 
            <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
            <CardTitle>
        <H1 className="text-center mt-3">Edit Data "{data.username}"</H1>
            </CardTitle>
            <CardBody style={{padding: 50}}>
                <Form>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: data.username, name:"username",  label: "Username"}}/>
                    <FormLabel input={{type:"email", onChangeInput: this.onChangeInput, value: data.email, name:"email",  label: "Email"}}/>
                    <FormLabel input={{type:"password", onChangeInput: this.onChangeInput, value: "", name:"password",  label: "Password"}}/>
                    {
                        this.props.statusLogin === "admin" 
                        ?
                        <SelectLabel isiOption ={[["", "Pilih Status"], ["1", "User"], ["2", "Admin"]]} 
                            onchange={(e) => this.setState({"id_role": e.target.value})} 
                            label="Status" 
                            className="custom-select" 
                            value={this.state.id_role}
                        />
                        :
                        <></>
                    }
                    <div className="row justify-content-center">
                        <Btn className="btn btn-success btn-lg mt-2" onClick={() => this.onClickSave()}>Save</Btn>
                    </div>
                </Form>
            </CardBody>
        </Card>
        );
    }
}

const mapStateToProps = state => ({
    statusLogin: state.auth.statusLogin,
    dataLogin: state.auth.dataLogin
})
 
export default connect(mapStateToProps)(Edit)