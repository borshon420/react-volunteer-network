import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Volunteer from '../Volunteer/Volunteer';
import './AddVolunteer.css';

const AddVolunteer = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
             <h1>This is volunteer</h1>
            <Container>
            <div className="volunteer-container">
            {
                users.map(user => <Volunteer 
                    user={user}
                    key={user._id}
                    ></Volunteer>)
            }
            </div>
            </Container>
        </div>
    );
};

export default AddVolunteer;