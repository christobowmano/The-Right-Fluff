import '../assets/css/Pages.css'
import React from 'react'
import {flavors, partyType} from '../comp/important/Options'
import logo from '../assets/img/icon.svg'
import { Link } from 'react-router-dom';

// import img1 from '../assets/img/bday2.jpg'
// import img2 from '../assets/img/corporatephoto2.jpg'
// import img3 from '../assets/img/neighborhoodfestival2.jpg'
// import img4 from '../assets/img/weddingreception2.jpg'

const list1 = flavors;
const list2 = partyType;

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
                {/* <InfoCard /> */}
                <h1>Put a Fresh Spin on your Next Event</h1>
                <p>Make your next event a little sweeter with fresh live spinning and flavorful treats for your guests.</p>
                    {/* <div align="center">
                        <div class="row">
                            <div align="center" class="col-12 col-md-6">
                                <img alt="birthdays" src={img1} />
                            </div>
                            <div align="center" class="col-12 col-md-6">
                                <img alt="Corporate events" src={img2} />
                            </div>
                        </div>
                        <div class="row">
                            <div align="center" class="col-12 col-md-6">
                                <img alt="Neighborhood festivals" src={img3} />
                            </div>
                            <div align="center" class="col-12 col-md-6">
                                <img alt="Corporate events" src={img4} />
                            </div>
                        </div>
                    </div> */}
                <ul id='events'>
                    {list2.map((m) =>
                    <li style={{'backgroundImage': 'url(' + m.banner + ')'}}><p>{m.name}</p></li>
                    )}
                </ul>
                <p>Inside or outdoors, day or night, rain or shine, we provide a fun and memorable highlight to any event. Our cotton candy is spun fresh from pure cane sugar. Certified Organic, Gluten-free, Kosher, Vegan, and free of artificial colors.</p>
                <hr/>
                <h1>A Flavorful Twist on a Traditional Treat</h1>
                <p>We take those sweet memories of days at the county fair to a new level with gourmet flavors your guests will love. Our favorites include:</p>
                <ul id='flavors'>
                    {list1.map((m) =>
                    <li style={{'backgroundColor': m.basecolor}}><p style={{'color': m.id !== 5 ? 'black' : 'white'}}>{m.name}</p></li>
                    )}
                </ul>
                <p>Interested in a flavor that's not on this list?</p>
                <p>&nbsp;</p>
                <Link to={"/contact"}><strong id='link'>Contact us!</strong></Link>
                <p>&nbsp;</p>
                <hr/>
                <h1>Pricing</h1>
                <p>Book a live spinner for any size event, from backyard barbecues to all-day festivals. Our prices start at $250 for the 1st hour for up to 50 guests. Prices fluctuate with the size and duration of your event and flavor choices.</p>
                <p>&nbsp;</p>
                <Link to={"/contact"}><strong>Contact us!</strong></Link>
                <br/>
            </div>
        </div>
    )
}
