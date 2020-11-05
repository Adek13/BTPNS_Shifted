import React, {Component} from "react"
import {Register, Login, Hubungi, ListUser, Beranda, Tentang, Detail, Edit} from "../../page"
import { Switch, Route } from "react-router-dom"
import "./style.css";
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataRegister: [],
            dataAdmin: [{
                username: "admin",
                password: "admin"
            }],
            dataLogin: {}
        }
    }
    onDeleteUser = async index => {
        let dataLama = this.state.dataRegister
        dataLama.splice(index,1)
        await this.setState({
            dataRegister : dataLama
        })
        console.log(dataLama);
    }
    onUpdateData = (data, index) => {
        // let dataLama = this.state.dataRegister
        console.log(data)
        
    }
    onClickRegister = async data =>{
        // console.log(data);
        const {name, username, email, password, phone, website} = data
        let datalama = this.state.dataRegister
        datalama.push({
            name, username, email, password, phone, website
        })
        await this.setState({
            dataRegister : datalama
        })
        console.log("Data Register : ", this.state.dataRegister);
    }
    updateLogin = async inputLogin => {
        const {dataAdmin, dataRegister} = this.state 
        console.log(dataAdmin, dataRegister);
        let dataLoginAdmin = await dataAdmin.filter(admin => inputLogin.username === admin.username && inputLogin.password === admin.password)
        console.log(dataLoginAdmin);
        if(dataLoginAdmin.length){
            await this.setState({dataLogin : dataLoginAdmin[0]})
            this.props.changeStatus("admin");
            alert(`Selamat Datang ${dataLoginAdmin[0].username} Sebagai Administrator`)
        }else{
            let dataLoginUser = await dataRegister.filter(user => inputLogin.username === user.username && (inputLogin.password === "123" || inputLogin.password === user.password))
            if(dataLoginUser.length){
                await this.setState({dataLogin : dataLoginUser[0]})
                this.props.changeStatus("user")
                alert(`Selamat Datang ${dataLoginUser[0].name} Sebagai User`)
            }else{
                alert("Username atau Password Salah")
            }
        }
        console.log("Data Login : ", this.state.dataLogin)
    }
    render() { 
        return ( 
            <div className="main-content">
                <Switch>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/login">
                        <Login 
                            dataRegister={this.state.dataRegister} 
                            dataAdmin={this.state.dataAdmin} 
                            dataLogin={this.state.dataLogin} 
                        />
                    </Route>
                    <Route path="/hubungi" >
                        <Hubungi statusLogin={this.props.statusLogin} />
                    </Route>
                    <Route path="/listUser">
                        <ListUser />
                    </Route>
                    <Route path="/tentang">
                        <Tentang statusLogin={this.props.statusLogin}/>
                    </Route>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/edit" component={Edit}/>
                    <Route exact path="/" component={Beranda}/>
                </Switch>
            </div>
         );
    }
}

export default Body;