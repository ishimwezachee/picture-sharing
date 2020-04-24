import React from 'react';
import PlaceList from "../components/PlaceList";
const DUMMY_PLACES =[
    {
        id:"p1",
        title:"Empire State Building",
        description:"One of the most famous sky scrppers in the world ",
        imageUrl:"https://www.kigaliwalktour.com/wp-content/uploads/2018/10/Kigali-Convetion-Centre.jpg",
        address:"KG 2 Roundabout, Kigali, Rwanda",
        location:{
            lat:-1.9545556,
            lng:30.0916647
        },
        creator:"u1"
    },
    {
        id:"p2",
        title:"Empire State Building",
        description:"One of the most famous sky scrppers in the world ",
        imageUrl:"https://lh3.googleusercontent.com/proxy/zdEBFC7FmXFsbxJe_BnhVhI3jDUL7v6lw7n0RbAIt_byuZ60yRE_MiiPb_zzVD51DkzO0-2bwAVsyLUZGh9Wg_KSAdFihu2zSXCuCFyApGVccgUPOrrKfA",
        address:"KG 2 Roundabout, Kigali, Rwanda",
        location:{
            lat:-1.9545556,
            lng:30.0916647
        },
        creator:"u2"
    }
]
const UserPlaces = () =>{

    return <PlaceList items ={DUMMY_PLACES}/>;
};

export default UserPlaces  