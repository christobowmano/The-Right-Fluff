import '../assets/css/Pages.css'
import React from 'react'
//import Carousel, {autoplayPlugin, slidesToShowPlugin} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import img4 from '../assets/img/img4.png'
import img5 from '../assets/img/img5.png'
import img6 from '../assets/img/img6.png'
import InfoCard from '../comp/features/InfoCard'

export default function Home() {

    return (
        <div className="home">
            <div className="carousel">
                <div className="carousel-track">
                    <div className="slide">
                        <img src={img1} key={1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img2} key={2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img3} key={3} alt="" />
                    </div>

                    <div className="slide">
                        <img src={img4} key={4} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img5} key={5} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img6} key={6} alt="" />
                    </div>

                    <div className="slide">
                        <img src={img1} key={7} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img2} key={8} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img3} key={9} alt="" />
                    </div>
                </div>
            </div>
            <div className="wrap">
                <InfoCard />
            </div>
        </div>
    )
}
