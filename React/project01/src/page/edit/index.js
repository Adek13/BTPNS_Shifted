import React, { Component } from 'react'
import {Card, CardTitle, H1, CardBody, FormLabel, Form, Btn} from "../../components"
// import {Link} from "react-router-dom"

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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

    render() { 
        const data = this.props.location.state.data
        console.log(this.props);
        return ( 
            <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
            <CardTitle>
        <H1 className="text-center mt-3">Edit Data "{data.id}"</H1>
            </CardTitle>
            <CardBody style={{padding: 50}}>
                <Form>
                    <FormLabel input={{type:"text", name:"id", value: data.id, label: "ID", readonly:"true"}}/>
                    <FormLabel input={{type:"text", name:"name", value: data.name, label: "Name"}}/>
                    <FormLabel input={{type:"text", name:"username", value: data.username, label: "Username"}}/>
                    <FormLabel input={{type:"email", name:"email", value: data.email, label: "Email"}}/>
                    <FormLabel input={{type:"password", name:"password", value: data.password, label: "Password"}}/>
                    <FormLabel input={{type:"text", name:"phone", value: data.phone, label: "Phone"}}/>
                    <FormLabel input={{type:"text", name:"website", value: data.website, label: "Website"}}/>
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