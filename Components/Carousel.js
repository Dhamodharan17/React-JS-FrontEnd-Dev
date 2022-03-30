import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import discount from '../../Assets/discount-voucher.png';
import hotsale from '../../Assets/hot-sale.png';
import popcorn from '../../Assets/popcorn.png';
class DemoCarousel extends Component {
    render() {
        
        
        
        return (
            <Carousel autoPlay={true} interval={1500} infiniteLoop={true}>
                <div>
                    <img src={discount} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={hotsale}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={popcorn} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );


    }

}

export default DemoCarousel;

