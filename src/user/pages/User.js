import React from "react";
import UsersList from "../components/UserList";

const User = () =>{
    // these data should be fetched from the backend ;
    const USERS = [
        {
            id:"u1",
            name:"Ishimwe zachee",
            image:"https://images.pexels.com/photos/3621486/pexels-photo-3621486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            place:3 
        }
    ];
    return <UsersList items={USERS} />;
};

export default User;
