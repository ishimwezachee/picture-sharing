import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css"
const UserItem = props =>{

    // we are going to use the data for every user 
    // to make them appers , so we will be using jsx
    return (
        <li className="user-item">
            <Card className="user-item__content">
            <Link to={`/${props.id}/places`}>
                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.name}/>
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>
                        {props.placeCount} {props.placeCount ===1 ? "place": "places"}
                    </h3>
                </div>
                </Link>
                </Card>

        </li>
    )

};

export default UserItem;