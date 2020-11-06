import React, { Component } from 'react'
import {Card, CardTitle, H1, CardBody} from "../../components"
import {Link, Redirect} from "react-router-dom"
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataRegister : ""
         }
    }
    componentDidMount(){
        this.setData()
    }

    setData = () => {
        fetch("http://localhost:3000/user",{
            headers: {
                "Authorization" : `Bearer ${this.props.token}`
            }
        })
        .then(response => response.json())
        .then(json => {
            if(json.code === 200){
                this.setState({
                    dataRegister: json.data
                })
            }
        })
    }
    renderTableData = () => {
        let dataUser = this.state.dataRegister
        let {dataLogin} = this.props
        let aksi
        if(dataUser.length){
            return dataUser.map((data, index) => {
            const { id_user, username, email, status } = data //destructuring
            const id_login = this.props.dataLogin.id_user
            if(dataLogin.status === "user" && id_login === id_user){
                    aksi = <>
                            <Link className="btn btn-sm btn-secondary" to={{
                                    pathname: "/detail",
                                    state: {id : id_user}
                                }}>Lihat Detail</Link>
                            <Link className="btn btn-sm btn-warning" to={{
                                    pathname: "/edit",
                                    state: {id : id_user}
                                }}>Edit</Link>
                        </>
            }else if(dataLogin.status === "admin" && (id_login === id_user)){
                aksi = <>
                        <Link className="btn btn-sm btn-secondary" to={{
                                pathname: "/detail",
                                state: {id : id_user}
                            }}>Lihat Detail</Link>
                        <Link className="btn btn-sm btn-warning" to={{
                                pathname: "/edit",
                                state: {id : id_user},
                            }}>Edit</Link>
                    </>
            }else if(dataLogin.status === "admin"){
                aksi = <>
                        <Link className="btn btn-sm btn-secondary" to={{
                                pathname: "/detail",
                                state: {id : id_user}
                            }}>Lihat Detail</Link>
                        <Link className="btn btn-sm btn-warning" to={{
                                pathname: "/edit",
                                state: {id : id_user},
                            }}>Edit</Link>
                        <button className="btn btn-sm btn-danger" onClick={() => this.onClickDelete(id_user)}>Hapus</button>
                    </>
            }else{
                aksi = <>
                            <Link className="btn btn-sm btn-secondary" to={{
                                    pathname: "/detail",
                                    state: {id : id_user}
                                }}>Lihat Detail</Link>
                        </>
            }
            return (
                <tr key={index}>
                    <td key={id_user+"a"}>{index+1}</td>
                    <td key={id_user+"c"}>{username}</td>
                    <td key={id_user+"d"}>{email}</td>
                    <td key={id_user+"b"}>{status}</td>
                    <td key={id_user+"e"} nowrap="nowrap">{aksi}</td>
                </tr>
            )
            })
        }
    }
    onClickDelete = async (id) =>{
        let fetch = await this.fetchDelete(id)
        if(fetch.code!==200){
            alert("Gagal Hapus")
        }else{
            this.setData()
            alert("Hapus Berhasil")
        }
    }

    fetchDelete = (id) => {
        return fetch(`http://localhost:3000/user/${id}`,{
            method: "DELETE",
            headers: {
                "Authorization" : `Bearer ${this.props.token}`
            }
        })
        .then(response => response.json())
    }
    render() { 
        if(this.props.dataLogin === ""){
            return <Redirect to="/login"/>
        }
        let button
        if(this.props.dataLogin.status === "admin"){
            button = <>
                        <Link to="/register" className="btn btn-primary mb-2">Tambah Data</Link>
                        <Link to="/manajemen_role" className="btn btn-success mb-2 ml-2">Manajemen Role</Link>
                     </>
        }
        return ( 
            <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
                <CardTitle>
                    <H1 className="text-center mt-3">List User</H1>
                </CardTitle>
                <CardBody style={{padding: 50}}>
                    {
                        button
                    }
                    <table className="table table-bordered table-hover" style={{width: 100 + "%",}} cellPadding="10px">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.renderTableData()
                        }
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.dataLogin,
    dataLogin: state.auth.dataLogin !== "" ? jwt_decode(state.auth.dataLogin) : ""
})

export default connect(mapStateToProps)(ListUser);