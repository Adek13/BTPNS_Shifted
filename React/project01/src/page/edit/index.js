import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, CardTitle, H1, CardBody, FormLabel, Form, Btn} from "../../components"
// import {Link} from "react-router-dom"

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: "",
            name: "",
            email: "",
            username: "",
            phone: "",
            website: ""
         }
    }
    onChangeInput = async e => {
        this.setState({
            [e.target.name] : e.target.value
        })
        await console.log(this.state)
    }

    onClickSave = async () => {
        let dataBaru = this.props.dataUser
        await dataBaru.splice(this.props.location.state.index, 1, this.state)
        if(this.props.onUpdate(dataBaru)){
            alert("Berhasil Update Data!")
        }else{
            alert("Gagal Update Data!")
        }
        
    }

    componentDidMount(){
        const data = this.props.dataUser[this.props.location.state.index]
        this.setState(data)
    }

    render() { 
        const data = this.props.dataUser[this.props.location.state.index]
        console.log(this.props)
        return ( 
            <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
            <CardTitle>
        <H1 className="text-center mt-3">Edit Data "{data.username}"</H1>
            </CardTitle>
            <CardBody style={{padding: 50}}>
                <Form>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: data.id, name:"id",  label: "ID", readonly:true}}/>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: data.name, name:"name",  label: "Name"}}/>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: data.username, name:"username",  label: "Username"}}/>
                    <FormLabel input={{type:"email", onChangeInput: this.onChangeInput, value: data.email, name:"email",  label: "Email"}}/>
                    <FormLabel input={{type:"password", onChangeInput: this.onChangeInput, value: data.password, name:"password",  label: "Password"}}/>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: data.phone, name:"phone",  label: "Phone"}}/>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: data.website, name:"website",  label: "Website"}}/>
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
    dataUser: state.data.dataUser
})

const mapDispatchToProps = dispatch => ({
    onUpdate: (data) => dispatch({
        type: "updateUser",
        payload: {
            data: data
        }
    })
})
 
export default connect(mapStateToProps,mapDispatchToProps)(Edit);