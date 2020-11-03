import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, CardTitle, H1, CardBody} from "../../components"
// import {Link} from "react-router-dom"

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataUser : ""
         }
    }
    componentDidMount(){
        fetch(`http://localhost:3000/user/${this.props.location.state.id}`,{
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${this.props.dataLogin.token}`
            }
        })
        .then(response => response.json())
        .then(json => this.setState({dataUser : json.data}))
    }
    render() { 
        console.log(this.props.location.state.id);
        const data = this.state.dataUser
            return ( 
                <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
                <CardTitle>
            <H1 className="text-center mt-3">Detail User {}</H1>
                </CardTitle>
                <CardBody style={{padding: 50}}>
                    {/* show ID */}
                    <div className="row mb-2">
                        <div className="col-4">
                            ID
                        </div>
                        <div className="col-1">
                            :
                        </div>
                        <div className="col-7">
                            {data.id}
                        </div>
                    </div>
                    {/* show Name */}
                    <div className="row mb-2">
                        <div className="col-4">
                            Name
                        </div>
                        <div className="col-1">
                            :
                        </div>
                        <div className="col-7">
                            {data.name}
                        </div>
                    </div>
                    {/* show Email */}
                    <div className="row mb-2">
                        <div className="col-4">
                            Email
                        </div>
                        <div className="col-1">
                            :
                        </div>
                        <div className="col-7">
                            {data.email}
                        </div>
                    </div>
                    {/* show Username */}
                    <div className="row mb-2">
                        <div className="col-4">
                            Username
                        </div>
                        <div className="col-1">
                            :
                        </div>
                        <div className="col-7">
                            {data.username}
                        </div>
                    </div>
                    {/* show Phone */}
                    <div className="row mb-2">
                        <div className="col-4">
                            Phone
                        </div>
                        <div className="col-1">
                            :
                        </div>
                        <div className="col-7">
                            {data.phone}
                        </div>
                    </div>
                    {/* show Website */}
                    <div className="row mb-2">
                        <div className="col-4">
                            Website
                        </div>
                        <div className="col-1">
                            :
                        </div>
                        <div className="col-7">
                            {data.website}
                        </div>
                    </div>
                </CardBody>
            </Card>
            );
    }
}

const mapStateToProps = state => ({
    dataLogin: state.auth.dataLogin
})

export default connect(mapStateToProps)(Detail)