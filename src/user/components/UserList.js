import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UserList.css";
const UsersList = props =>{
    // Items for every users  
if(props.items.length===0){
    return (
        <div className="center">
            <Card>
            <h2>No Users found. </h2>
            </Card>
        </div>
    )
}
return (
    <ul className="users-list">
  {props.items.map(user=>(
    <UserItem 
    key={user.id} 
    id={user.id} 
    image={user.image} 
    name={user.name}
    placeCount = {user.place}   
    /> 
  ))}
</ul>
)
};

export default UsersList;