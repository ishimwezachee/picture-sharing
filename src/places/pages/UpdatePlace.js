import React, { useEffect,useState }from "react";
import {useParams}  from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/button";
import Card from "../../shared/components/UIElements/Card";
import { 
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from "../../shared/util/validation";
import { userForm, useForm } from "../../shared/hooks/form-hook"
import './PlaceForm.css';


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
const UpdatePlace = () =>{
    const [isLoading,setIsLoading] = useState(true)
    const placeId = useParams().placeId;
 const [formState,inputHandler,setFormData] =  useForm({
        title:{
            value:'',
            isValid:false,
        },
        description:{
            value:"",
            isValid:false
        }
    },
    true
    );
    const identifiedPlace = DUMMY_PLACES.find(p=>p.id ===placeId);
     useEffect(()=>{
         if(identifiedPlace){
            setFormData({
                title:{
                    value:identifiedPlace.title,
                    isValid:true,
                },
                description:{
                    value:identifiedPlace.description,
                    isValid:true
                }
            },
            true
            );
         }

        setIsLoading(false);
     },[setFormData,identifiedPlace])


 const placeUpdateSubmitHandler = event =>{
     event.preventDefault ();
     console.log(formState.inputs);
 }
    if(!identifiedPlace){
        return (
            <div className="center">
               <Card>
               <h2>Could not find place !</h2>
               </Card>
            </div>
        )
    }
    if(isLoading){
        return (
            <div className="center">
                <h2>LOADING..</h2>
            </div>
        )
    }
return (
<form className="place-form" onSubmit = {placeUpdateSubmitHandler}>
   <Input 
       id="title"
       element="input"
       type ="text"
       label="Title"
       validators = {[VALIDATOR_REQUIRE()]}
       errorText = "Please enter a valid title"
       onInput = {inputHandler}
       initialValue={formState.inputs.title.value}
       initialValid = {formState.inputs.title.isValid}
   />
      <Input 
       id="description"
       element="textarea"
       label="Description"
       validators = {[VALIDATOR_MINLENGTH(5)]}
       errorText = "Please enter a valid description (min 5 charactors)."
       onInput = {inputHandler}
       initialValue={formState.inputs.description.value}
       initialValid = {formState.inputs.description.isValid}
   />
   <Button type="submit" disabled= {!formState.isValid}>
       UPDATE PLACE
   </Button>
</form>
)

};

export default UpdatePlace;