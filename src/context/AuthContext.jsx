import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        const userEmail = currentUser?.email || null;
        const loggedInUser = { email: userEmail };
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser, loggedInUser);

        if (currentUser) {
          const response = await axios.post(
            "http://localhost:5000/jwt",
            loggedInUser,
            { withCredentials: true }
          );
          console.log(response.data);
        } else {
          const response = await axios.post(
            "http://localhost:5000/logout",
            loggedInUser,
            { withCredentials: true }
          );
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error in AuthContextProvider:", error.message);
      }
    });

    return () => unsubscribe();
  }, []); // Dependency array is empty to run the effect only once during component mount

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
