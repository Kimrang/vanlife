import React from "react";
import '../styles/Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="Home">
            <div className="home-page-greet">
                <p className="motto">You got the travel plans, we got the travel vans.</p>   
                <p className="describe">Add adventure to your life by joining the #vanlife movement. Rent the perfect
                van to make your perfect road trip.</p>
                <Link to="/vans">
                    <button className="find-van-btn link-btn">Find your van</button>
                </Link>
            </div>
        </main>
    );
}

export default Home;