import React from "react";
import '../styles/About.css';
import about_img from '../assets/images/about_img.png';
import { Link } from "react-router-dom";

function About() {
    return (
        <main className="About">
            <div className="about-page-img-div">
                <img 
                    src={about_img} 
                    alt="guy sitting on a van"
                />
            </div>
            <div className="about-page-greet">
                <p className="motto">
                    Dont squeeze in a sedan when 
                    you could relax in a van.
                </p>  
                <p className="describe">
                    Our mission is to enliven your road trip with 
                    the perfect travel van rental. Our vans are 
                    recertified before each trip to ensure your 
                    travel plans can go off without a hitch.
                    <br /> 
                    (Hitch costs extra 😉) 
                    <br /><br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="about-page-invite">
                <div>
                    <p>
                        Your destination is waiting.<br /> 
                        Your van is ready.
                    </p>
                    <Link to="/vans">
                        <button className="explore-vans-btn link-btn">
                            Explore our vans
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default About;