import React, { Component } from 'react';
import {H1, P, H3} from "../../components"
import syariah from "../../syariah.jpg"
import "./style.css"

class Tentang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="box">
                <img src={syariah} alt="" class="box-img" />
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