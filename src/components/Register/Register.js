import React from "react";
import { useForm } from "react-hook-form";
import './Register.css';
import registerLogo from '../../logos/Group 1329.png';
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";



const Register = () => {
  const [title, setTitle] = useState();
  const {user} = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const {id} = useParams();
  useEffect(()=> {
    fetch(`http://localhost:5000/users/${id}`)
    .then(res => res.json())
    .then(data => setTitle(data.title))

  })
  const onSubmit = (data) => {
    
      fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('order proceed succfully');
                reset();
            }
        })
    
    console.log(data)
  };

  
  
  
  return (
    <div>
      
      <div className="mt-5">
            <img style={{ width: "250px", marginBottom: '20px' }} src={registerLogo} alt="" />
          </div>
      <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <input defaultValue={user.email} {...register("email")} placeholder="Username or Email"/>
        <input type="number" {...register("date")} placeholder="Date"/>
        <textarea {...register("description")} placeholder="Description"/>
        <input  defaultValue={title} {...register("books")} />
        <input type="submit" value="Registration"/>
      </form>
      </div>
    </div>
  );
};

export default Register;
