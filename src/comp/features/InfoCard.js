import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/InfoCard.css'

export default function InfoCard() {
    return (
        <div className='infocards'>
            <section>
                <div className="img-wrap">
                    <Link to={"/about"}>
                        <div className='dot-wrap'>
                            <span class="dot"/>
                        </div>
                        <h3>About Us</h3>
                    </Link>
                </div>
                <div className="text-wrap">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
            <section>
                <div className="img-wrap">
                    <Link to={"/shop"}>
                        <div className='dot-wrap'>
                            <span class="dot"/>
                        </div>
                        <h3>Our Flavors</h3>
                    </Link>
                </div>
                <div className="text-wrap">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
            <section>
                <div className="img-wrap">
                    <Link to={"/contact"}>
                        <div className='dot-wrap'>
                            <span class="dot"/>
                        </div>
                        <h3>Contact Us</h3>
                    </Link>
                </div>
                <div className="text-wrap">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
            <section>
                <div className="img-wrap">
                    <Link to={"/"}>
                        <div className='dot-wrap'>
                            <span class="dot"/>
                        </div>
                        <h3>About Us</h3>
                    </Link>
                </div>
                <div className="text-wrap">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
        </div>
    )
}
