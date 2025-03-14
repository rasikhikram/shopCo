import React, { useState, useContext } from "react";
import { CartContext } from "./Context";
import { auth, db } from "../components/firebase/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const SignIn = () => {
    const { setCart, setUser } = useContext(CartContext); // ✅ Get from context
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(true);

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user); // ✅ Set user in context

            // Initialize an empty cart for the user
            await setDoc(doc(db, "carts", user.uid), { items: [] });
            alert("Sign Up Successful!");
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    };

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user); // ✅ Set user in context

            // Load user cart from Firestore
            const cartRef = doc(db, "carts", user.uid);
            const cartSnap = await getDoc(cartRef);
            if (cartSnap.exists()) {
                setCart(cartSnap.data().items); // ✅ Persist cart on sign-in
            }

            alert("Sign In Successful!");
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    };

    return (
        <div className="bg-gray-200 pb-32 -mb-40">
            <div className='container m-auto max-w-xl py-36 h-full'>
                <div className="bg-white px-10 py-16 mb-4 shadow-md rounded-xl border m-4 md:m-0">
                    <h1 className="text-4xl text-center font-superbold mb-12">
                        {isSigningUp ? "SIGN UP" : "SIGN IN"}
                    </h1>
                    <label className="block text-gray-700 font-bold mb-2 text-xl">
                        EMAIL:
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 mb-2 rounded-lg" 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label className="block text-gray-700 font-bold mb-2 text-xl mt-6">
                        PASSWORD:
                    </label>
                    <input 
                        className="border rounded w-full py-2 px-3 mb-2 rounded-lg"
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <div className='flex items-center text-center space-x-24'>
                        <button 
                            className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-14 rounded-xl focus:outline-none focus:shadow-outline mt-6"
                            onClick={isSigningUp 
                                ? handleSignUp 
                                : handleSignIn}>
                                {isSigningUp ? "SIGN UP" : "SIGN IN"}
                        </button>
                        <button 
                            className='bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl focus:outline-none focus:shadow-outline mt-6'
                            onClick={() => setIsSigningUp(!isSigningUp)}>
                            SWITCH TO {isSigningUp ? "SIGN IN" : "SIGN UP"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
