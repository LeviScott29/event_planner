import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className= "description">
                <p>
                Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                <button className="get-started-button">
                  Get Started  
                </button>
                </section>  
            <section className="event_categories">
                <ul>
                    <h2>Social Events: </h2>
                    <li>Birthday</li>
                    <li>Anniversary</li>
                    <li>Wedding</li>
                    <li>Baby</li>
                    <li>Graduation</li>
                    <li>Family</li>
                </ul>
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music</li>
                    <li>Fiilm</li>
                    <li>Comedy</li>
                    <li>Art</li>
                    <li>Cultural</li>
                </ul>
                <ul>
                    <h2>Community Events: </h2>
                    <li></li>
                </ul>
                </section>
            <section clasName="features">
                </section>
            <section className="testimonials" >
                </section>
            <section className="contact">
                </section>     
         </div>
    );
};

export default EventPlanner;
