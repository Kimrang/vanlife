import React from "react";
import '../../styles/Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="Home">
            <div className="home-page-greet">
                <div>
                    <p className="font-inter-800">You got the travel plans, we got the travel vans.</p>   
                    <p className="font-inter-500 mt-4">Add adventure to your life by joining the #vanlife movement. Rent the perfect
                    van to make your perfect road trip.</p>
                </div>          
                <div className="text-center">
                    <Link to="/vans">
                        <button className="orange-btn w-100 link-btn">Find your van</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Home;