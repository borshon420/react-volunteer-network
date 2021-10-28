import React from 'react';
import AddVolunteer from '../AddVolunteer/AddVolunteer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <div className="search-container mb-5">
                    <input className="search-field" type="text" placeholder="Search..."/>
                    <input className="submit-search-btn" type="submit" variant="primary" value="Search" />
                </div>
                <AddVolunteer></AddVolunteer>
            </div>
        </div>
    );
};

export default Home;