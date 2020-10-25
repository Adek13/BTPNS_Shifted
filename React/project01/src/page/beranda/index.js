import React, { Component } from 'react';
import {Jumbotron, Row, ColGoals, BlockQuote, Ul, CarouselBeranda} from '../../components/';
import "./style.css"

class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="beranda">
                <Jumbotron className="jumbotrons"/>
                <Row className="row m-0" id="more">
                    <ColGoals h2value="Tujuan Kami">
                        <BlockQuote>
                            "Bersama Mencapai Impian"
                        </BlockQuote>
                    </ColGoals>
                    <ColGoals h2value="Apa Yang Menjadi Perhatian Kami">
                        <Ul li={{text: ["Professionals", "Integrity", "Mutual Respect", "Team Work"]}} />
                    </ColGoals>
                </Row>
                <Row className="row w-100 m-0">
                    <CarouselBeranda/>
                </Row>
            </div>
         );
    }
}
 
export default Beranda;