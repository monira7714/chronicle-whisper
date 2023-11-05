import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types'
import app from "../../firebase/fire.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => { unSubscribe() }
    }, [])

    const authInfo = { user, loading, registerUser, logIn, logOut, signInWithGoogle };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;