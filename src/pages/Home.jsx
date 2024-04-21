import React from "react";
import '../styles/Home.css';

function Home() {
    return (
        <main className="Home">
            <div className="home-greet-box">
                <p className="motto">You got the travel plans, we got the travel vans.</p>   
                <p className="describe">Add adventure to your life by joining the #vanlife movement. Rent the perfect
                van to make your perfect road trip.</p>
                <button className="btn find-van">Find your van</button>
            </div>
        </main>
    );
}

export default Home;