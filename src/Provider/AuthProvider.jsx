import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);



// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLodding] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLodding(true);

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signIn = (email, password) => {
        setLodding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLodding(true);
        return signInWithPopup(auth, googleProvider);

    }

    const logOut = () => {
        setLodding(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            console.log('current user', currentUser);

            // GET AND SET TOKEN

            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token)
                        setLodding(false);

                    })
            }

            else {
                localStorage.removeItem('access-token')


            }


            
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut, updateUserProfile, googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;