import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    
    const redirect_uri = location.state?.form || '/';
    
    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result)=> {
            history.push(redirect_uri)
        })
    }
    return (
        <div>
            <div className="mb-5">
            <h1>Login with</h1>
            <Button onClick={handleGoogleLogin} variant="warning">Continue with Google</Button>
            </div>
            <p>Don't have an account? <span><Link to="/register">Create an account</Link></span></p>
            
        </div>
    );
};

export default Login;