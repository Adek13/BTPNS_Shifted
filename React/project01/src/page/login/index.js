import React, {Component} from "react"
import "./style.css"
import {FormLogin} from "../../components"
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(this.props.statusLogin){
            return <Redirect exact to="/" />
        }
            return ( 
                <>
                    <div className="row login-content">
                        <div className="col p-5">
                            <h1 className="text-warning">BTPNS ShiftED Batch 2</h1>
                            <h2 className="text-white">Memberikan makna lebih dalam hidup setiap rakyat Indonesia</h2>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <FormLogin dataRegister={this.props.dataRegister} updateLogin={this.props.updateLogin}/>
                        </div>
                    </div>
                </>
            );
        
    }
}
 
export default Login;