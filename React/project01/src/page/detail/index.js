import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, CardTitle, H1, CardBody} from "../../components"
// import {Link} from "react-router-dom"

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        const data = this.props.dataUser[this.props.location.state.index]
        console.log(data);
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
                {/* show Address */}
                <div className="row mb-2">
                    <div className="col-4">
                        Address
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-7">
                        <div className="row mb-2"><b>Suite </b>{data.address.suite}</div>
                        <div className="row mb-2"><b>Street </b>{data.address.street}</div>
                        <div className="row mb-2"><b>City </b>{data.address.city}</div>
                        <div className="row mb-2"><b>Zipcode </b>{data.address.zipcode}</div>
                        {/* <div className="row mb-2"><b>Geo </b>Lat({data.address.geo.lat}), Lng({data.address.geo.lng})</div> */}
                    </div>
                </div>
                {/* show Company */}
                <div className="row mb-2">
                    <div className="col-4">
                        Company
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-7">
                        <div className="row mb-2"><b>Name </b>{data.company.name}</div>
                        <div className="row mb-2"><b>BS </b>{data.company.bs}</div>
                        <div className="row mb-2"><b>Catch Phrase </b>{data.company.catchPhrase}</div>
                    </div>
                </div>
            </CardBody>
        </Card>
        );
    }
}

const mapStateToProps = state => ({
    dataUser : state.data.dataUser
})
 
export default connect(mapStateToProps)(Detail)