import React, { Component } from 'react'
import {Card, CardTitle, H1, CardBody} from "../../components"
import {Link, Redirect} from "react-router-dom"
import { connect } from 'react-redux';

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataRegister : ""
         }
    }
    renderTableData() {
        const {dataUser, statusLogin, dataLogin} = this.props
        let aksi
        return dataUser.map((data, index) => {
           const { id, name, username, email } = data //destructuring
           if(statusLogin === "user" && dataLogin.id === id){
                aksi = <>
                        <Link className="btn btn-sm btn-secondary" to={{
                                pathname: "/detail",
                                state: {data : data}
                            }}>Lihat Detail</Link>
                        <Link className="btn btn-sm btn-warning" to={{
                                pathname: "/edit",
                                state: {data : data}
                            }}>Edit</Link>
                       </>
           }else if(statusLogin === "admin"){
            aksi = <>
                    <Link className="btn btn-sm btn-secondary" to={{
                            pathname: "/detail",
                            state: {data : data}
                        }}>Lihat Detail</Link>
                    <Link className="btn btn-sm btn-warning" to={{
                            pathname: "/edit",
                            state: {data : data},
                        }}>Edit</Link>
                    <button className="btn btn-sm btn-danger" onClick={() => this.props.onDeleteUser(index)}>Hapus</button>
                   </>
           }else{
            aksi = <>
                    <Link className="btn btn-sm btn-secondary" to={{
                        pathname: "/detail",
                        state: {data : data}
                    }}>Lihat Detail</Link>
                   </>
           }
           return (
              <tr key={id}>
                 <td key={id+"a"}>{index+1}</td>
                 <td key={id+"b"}>{name}</td>
                 <td key={id+"c"}>{username}</td>
                 <td key={id+"d"}>{email}</td>
                 <td key={id+"e"} nowrap="nowrap">{aksi}</td>
              </tr>
           )
        })
    }
    render() { 
        if(!this.props.statusLogin){
            alert("Silahkan Login Untuk Mengakses Halaman Ini!")
            return <Redirect to="/login"/>
        }
        return ( 
            <Card style={{minWidth: 700, marginTop: 100, marginBottom: 200}}>
                <CardTitle>
                    <H1 className="text-center mt-3">List User</H1>
                </CardTitle>
                <CardBody style={{padding: 50}}>
                    {
                        this.props.statusLogin === "admin" ? <Link to="/register" className="btn btn-primary mb-2">Tambah Data</Link> : ""
                    }
                    <table className="table table-bordered table-hover" style={{width: 100 + "%",}} cellPadding="10px">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            // tr2
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
    dataUser: state.data.dataUser,
    statusLogin: state.auth.statusLogin,
    dataLogin: state.auth.dataLogin
})

const mapDispatchToProps = dispatch => ({
    deleteData: (index) => dispatch({type: "delete", payload: {index: index}})
})

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);