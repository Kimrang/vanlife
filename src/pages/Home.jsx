import React from "react";
import '../styles/Home.css';

function Home() {
    return (
        <main className="Home">
            <div className="home-page-greet">
                <p className="motto">You got the travel plans, we got the travel vans.</p>   
                <p className="describe">Add adventure to your life by joining the #vanlife movement. Rent the perfect
                van to make your perfect road trip.</p>
                <button className="find-van-btn link-btn">Find your van</button>
            </div>
        </main>
    );
}

export default Home;