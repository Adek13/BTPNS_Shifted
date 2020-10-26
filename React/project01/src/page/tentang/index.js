import React, { Component } from 'react';
import {H1, P, H3} from "../../components"
import syariah from "../../syariah.jpg"
import "./style.css"
import {Redirect} from "react-router-dom"

class Tentang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(this.props.statusLogin)
            return <Redirect to="/" />
        return ( 
            <div className="box">
                <img src={syariah} alt="" className="box-img" />
                <H1>BTPN SYARIAH</H1>
                <H3>Visi :</H3>
                <P>Menjadi bank syariah terbaik untuk keuangan inklusif, mengubah hidup berjuta rakyat Indonesia</P>
                <H3>Misi :</H3>
                <P>Bersama, kita ciptakan kesempatan tumbuh dan hidup yang lebih berarti</P>
            </div>
         );
    }
}
 
export default Tentang;