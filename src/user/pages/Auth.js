import React,{useState,useContext} from "react";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components//FormElements/Input";
import Button from "../../shared/components/FormElements/button";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MAXLENGTH,
    VALIDATOR_REQUIRE
} from "../../shared/util/validation";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import './Auth.css';

const Auth =() =>{
    const auth = useContext(AuthContext)
    const [isLoginMode,setIsLoginMode] = useState(true);
   const [formState,inputHandler,setFormData] = useForm({
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
   const SwitchModeHandler = () =>{
       if(!isLoginMode){
           setFormData({
               ...formState.inputs,
            name:undefined
           },
           formState.inputs.email.isValid && formState.inputs.password.isValid
           );
       }else{
          setFormData({
         ...formState.inputs,
         name:{
             value:'',
             isValid:false
         }
          },
          false
          ) 
       }
       setIsLoginMode(prevMode => !prevMode);
   };
    const authSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    }

 return <Card className = "authentication">
 <h2>Login Required</h2>
 <hr/>
     <form onSubmit={authSubmitHandler}>
     {!isLoginMode && (
            <Input
            element = "input" 
            id= "name" 
            type="text" 
            label="Your Name"
            validators = {[VALIDATOR_REQUIRE()]}
            errorText = "please enter a name ."
            onInput = {inputHandler}
            />
     )}
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
   <Button type="submit" disabled = {!formState.isValid}>
   {isLoginMode ? 'LOGIN':'SIGNUP'}
   </Button>
     </form>
     <Button inverse onClick= {SwitchModeHandler} >
     SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}</Button>
 </Card>

};

export default Auth;