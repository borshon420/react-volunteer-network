import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
       return signInWithPopup(auth, provider)
        
        .catch(error => {
            setError(error.message);
        });
     }
     
    const logOut = () => {
        signOut(auth)
        .then(()=> {
            setUser({})
        })
        
    }
    
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        })
    }, [])
    return {
        error,
        user,
        logOut,
        signInUsingGoogle,
        
    }
}    

export default useFirebase;
