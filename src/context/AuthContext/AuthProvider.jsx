import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";





const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

// Create User 
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

}


// Login User
const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);

}


// Log Out
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}


// Login with google 
const loginWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}


useEffect(() => {
 const unsubscribe =   onAuthStateChanged(auth, currentUser => {
    console.log('State captured', currentUser)
        setUser(currentUser);
        setLoading(false)
    })
    return () => {
        unsubscribe();
    }

}, [])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        loginWithGoogle
    }




  return <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>;
};

export default AuthProvider;
