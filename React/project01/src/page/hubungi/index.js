import React, {Component} from "react"
import "./style.css"
import {Form, FormRow, TextArea, Btn} from "../../components"
import {Redirect} from "react-router-dom"

class Hubungi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(!this.props.statusLogin){
            return <Redirect to="/login" />
        }
        return ( 
            <div className="body-hubungi" style={{marginTop: 50}}>
                <h2 className="text-white" style={{marginBottom: 20}}>Hubungi Kami</h2>
                <Form>
                    <FormRow input={{type: "text", placeholder:"Nama", name:"nama", className: "form-control"}}/>
                    <FormRow input={{type: "email", placeholder:"Email", name:"email", className: "form-control"}}/>
                    <FormRow input={{type: "text", placeholder:"Nomor HP", name:"nohp", className: "form-control"}}/>
                    <TextArea data={{placeholder: "Pesan", className: "form-control", name: "pesan"}}></TextArea>
                    <Btn className="btn btn-primary" style={{marginTop: 10}}>Kirim Pesan</Btn>
                </Form>
            </div>
         );
    }
}
 
export default Hubungi;