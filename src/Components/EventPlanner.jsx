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
            <section className="events_categories">
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
                    <li>Fundraising</li>
                    <li>Charity</li>
                    <li>Volunteer</li>
                    <li>Neighborhood</li>
                    <li>Community</li>
                    <li>Cultural</li>
                </ul>
                </section>
            <section clasName="features">
            <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
                </section>
            <section className="testimonials" >
            <h2>Testimonials</h2>
    <div className="testimonial">
       <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
       <p className="author">- Emily Johnson</p>
      </div>
      <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
                </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button className="submit-button">Send</button>

                </form>
                </section>     
         </div>
    );
};

export default EventPlanner;
