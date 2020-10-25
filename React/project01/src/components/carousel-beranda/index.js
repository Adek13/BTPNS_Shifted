import React, { Component } from 'react';
import {Anchor} from "../"
import "./style.css"
import image1 from "../../01.png"
import image2 from "../../02.jpeg"

class CarouselBeranda extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img src={image1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={image2} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <Anchor className="carousel-control-prev" href="#carouselExampleInterval" role="button" dataSlide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Anchor>
                <Anchor className="carousel-control-next" href="#carouselExampleInterval" role="button" dataSlide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Anchor>
            </div>
         );
    }
}
 
export default CarouselBeranda;