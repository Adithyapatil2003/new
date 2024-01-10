import { auth } from "firebase.js"
import React, { useContext, useState, useEffect } from "react"
const authContext=React.createContext()


export function useAuth() {
    return useContext(authContext)
}
export function AuthProvider({children}){
    const [currentUser,setcurrentUser]=useState()
    const [loading,setLoading]=useState(true)

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
    }
    useEffect(()=>{
    const unsub=auth.onAuthStateChanged(
        user=>{
            setcurrentUser(user)
            setLoading(false)

        })
        return unsub
    },[])
    const value={
    currentUser,
    signup,
    login,
    logout
    }
    return(
    <authContext.Provider value={value}>
        {!loading && children}
    </authContext.Provider>
    )
    
}