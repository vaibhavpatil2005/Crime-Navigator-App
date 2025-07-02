import React, { createContext, useEffect, useState } from 'react'
import httpAction from '../utils/httpAction'
import apis from '../api/apis'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserdata] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // console.log("Fetching user data..."); // 🔍 Debugging log
        const response = await httpAction({
          url: apis().getUserDetails,
          method: "GET",
          credentials: 'include',
        });

        if (response?.status) {
          // console.log("User data fetched:", response.user); // 🔍 Debugging log
          setUserdata(response.user);
        } else {
          console.log("No user found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        
      }
    };

    if (!userData) {
      fetchUser(); // Fetch user data if not already available in the context
    }
  }, [userData]);

 

  return (
    <div>
      <AuthContext.Provider value={{ userData, setUserdata}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
