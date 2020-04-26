import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components//FormElements/Input";
import Button from "../../shared/components/FormElements/button";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MAXLENGTH
} from "../../shared/util/validation";
import { userForm, useForm } from "../../shared/hooks/form-hook";
import './Auth.css';

const Auth =() =>{
   const [formState,inputHandler] = useForm({
        email:{
            value:"",
            isValid:false
        },
        password:{
            value:"",
            isValid:false
        }
    },
    false
    );

    const authSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs)
    }

 return <Card className = "authentication">
 <h2>Login Required</h2>
 <hr/>
     <form onSubmit={authSubmitHandler}>
    <Input 
    element = "input" 
    id= "email" 
    type="email" 
    label="E-Mail"
    validators = {[VALIDATOR_EMAIL()]}
    errorText = "please enter a Valid email address ."
    onInput = {inputHandler}
     />

     <Input 
    element = "input" 
    id= "password" 
    type="password" 
    label="Password"
    validators = {[VALIDATOR_MAXLENGTH(5)]}
    errorText = "please enter a valid, at least 5 characters. "
    onInput = {inputHandler}
     />
   <Button type="submit" disabled = {!formState.isValid}>LOGIN</Button>
     </form>
 </Card>

};

export default Auth;