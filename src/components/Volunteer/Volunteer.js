import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Volunteer.css';

const Volunteer = (props) => {
  const {user} = useAuth();
  const { img ,title, _id } = props.user;

  
  return (
    <div>
         <div className="card-container">
         <Link to={`/volunteer/${_id}`}>
        <Card>
            
            <Card.Img  style={{height: '250px'}} variant="top" src={img} />
            
             
            
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
         </div>
    </div>
  );
};

export default Volunteer;
