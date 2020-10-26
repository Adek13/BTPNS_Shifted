import React, { Component } from 'react'
import {Card, CardTitle, H1, CardBody} from "../../components"
import {Link, Redirect} from "react-router-dom"

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataRegister : ""
         }
    }
    renderTableData() {
        const {dataRegister, dataLogin, statusLogin} = this.props
        let aksi
        return dataRegister.map((data, index) => {
           const { id, name, username, email } = data //destructuring
           if(statusLogin === "user" && dataLogin.id === id){
                aksi = <td><Link to={{
                    pathname: "/detail",
                    state: {data : data}
                }}>Lihat Detail</Link> | <Link to={{
                    pathname: "/edit",
                    state: {data : data}
                }}>Edit</Link></td>
           }else if(statusLogin === "admin"){
            aksi = <td><Link to={{
                pathname: "/detail",
                state: {data : data}
            }}>Lihat Detail</Link> | <Link to={{
                pathname: "/edit",
                state: {data : data},
                // Kirim Function update data dan index ke halaman edit sebagai props.location
                onUpdateData: this.props.onUpdateData,
                index: index
            }}>Edit</Link> | <Link onClick={() => this.props.onDeleteUser(index)}>Hapus</Link></td>
           }else{
            aksi = <td><Link to={{
                pathname: "/detail",
                state: {data : data}
            }}>Lihat Detail</Link></td>
           }
           return (
              <tr key={id}>
                 <td>{index+1}</td>
                 <td>{name}</td>
                 <td>{username}</td>
                 <td>{email}</td>
                 {aksi}
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
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Aksi</th>
                        </tr>
                        {
                            // tr2
                            this.renderTableData()
                        }
                    </table>
                </CardBody>
            </Card>
        );
    }
}
 
export default ListUser;