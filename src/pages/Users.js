import React, {useState} from 'react'
import axiosBase from '../api';

function Users() {
    const[user, setUser]= useState();
   
        const getUsers = async () => {
            try {
              const res = await axiosBase.get("/users", {headers:{"x-auth-token":localStorage.getItem("token") }});
              setUser(res.data.user)
              console.log(res.data)
            } catch (error) {
              console.error(error);
            }
          };

          

 
  return (
    <div>
        <h1>all users</h1>
        <h1>
            {user? user.email : ""}
        </h1>
        <button onClick={getUsers}>Get Users</button>
        
    </div>
  )
}

export default Users