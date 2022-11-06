import '../assets/css/Pages.css'
import React from 'react'
import InfoCard from '../comp/features/InfoCard'
import logo from '../assets/img/icon.svg'

export default function Home(props) {
    const imgs = props.images;
    return (
        <div className="home">
            <div className="home-header">
                <img id='logopop' src={logo} alt=''/>
                <div className="carousel">
                    <div className="carousel-track">
                        <div className="slide">
                            <img src={imgs[0]} key={1} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[1]} key={2} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[2]} key={3} alt="" />
                        </div>

                        <div className="slide">
                            <img src={imgs[3]} key={4} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[4]} key={5} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[5]} key={6} alt="" />
                        </div>

                        <div className="slide">
                            <img src={imgs[0]} key={7} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[1]} key={8} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[2]} key={9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <InfoCard />
            </div>
        </div>
    )
}
