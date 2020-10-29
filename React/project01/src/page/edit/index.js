import React, { Component } from 'react'
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
    onChangeInput = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    componentDidMount() {
        let {...data} = this.props.location.state.data
        this.setState({
            id: data.id,
            name: data.name,
            email: data.email,
            username: data.username,
            phone: data.phone,
            website: data.website
        })
    }

    render() { 
        console.log(this.state);
        return ( 
            <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
            <CardTitle>
        <H1 className="text-center mt-3">Edit Data "{}"</H1>
            </CardTitle>
            <CardBody style={{padding: 50}}>
                <Form>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: this.state.id, name:"id",  label: "ID", readonly:true}}/>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: this.state.name, name:"name",  label: "Name"}}/>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: this.state.username, name:"username",  label: "Username"}}/>
                    <FormLabel input={{type:"email", onChangeInput: this.onChangeInput, value: this.state.email, name:"email",  label: "Email"}}/>
                    <FormLabel input={{type:"password", onChangeInput: this.onChangeInput, value: this.state.password, name:"password",  label: "Password"}}/>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: this.state.phone, name:"phone",  label: "Phone"}}/>
                    <FormLabel input={{type:"text", onChangeInput: this.onChangeInput, value: this.state.website, name:"website",  label: "Website"}}/>
                    <div className="row justify-content-center">
                        <Btn className="btn btn-success btn-lg mt-2">Save</Btn>
                    </div>
                </Form>
            </CardBody>
        </Card>
        );
    }
}
 
export default Edit;