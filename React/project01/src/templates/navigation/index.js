import React, {Component} from "react"
import {HeaderItem} from "../../components"
import {NavLink} from "react-router-dom"
import "./style.css"
import { connect } from "react-redux";
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    shouldComponentUpdate(lastProps){
        if(lastProps.statusLogin !== this.props.statusLogin){
            return true          
        }else{
            return false
        }
    }
    render() { 
        return ( 
        <div className="navigation">
            <NavLink activeClassName="active" exact to="/">
                <HeaderItem content="Beranda" >Beranda</HeaderItem>
            </NavLink>
            <NavLink activeClassName="active" to="/tentang">
                <HeaderItem content="Tentang" >Tentang</HeaderItem>
            </NavLink>
            <NavLink activeClassName="active" to="/hubungi">
                <HeaderItem content="Hubungi" >Hubungi Kami</HeaderItem>
            </NavLink>
            {
                this.props.statusLogin ? 
                <>
                    <NavLink activeClassName="active" to="/listUser">
                        <HeaderItem content="ListUser">List Users</HeaderItem>
                    </NavLink>
                    <HeaderItem content="Logout" goTo={() => this.props.doLogout()}>Logout</HeaderItem>
                </>
                :
                <>
                    <NavLink activeClassName="active" to="/login">
                        <HeaderItem content="Masuk" statusLogin={this.props.statusLogin}>Masuk</HeaderItem>
                    </NavLink>
                    <NavLink activeClassName="active" to="/register">
                        <HeaderItem content="Daftar">Daftar</HeaderItem>
                    </NavLink>
                </>
            }
        </div> );
    }
}
const mapStateToProps = (state) => ({
    statusLogin: state.auth.statusLogin
})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch({type: "logout"})
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Nav);