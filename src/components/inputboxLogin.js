import React from "react";
import {useState} from "react";

function InputboxLogin(){

    const initialValues = {email:"",password:""};
	const [formValues,setFormValues]= useState(initialValues);

        const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormValues({formValues,[name]:value});
        console.log(formValues);
    };

	const handleSubmit = (e) =>{
        e.preventDefault();
        validate(formValues);
    };

    const validate = (values) => {

    };
    
    return (  
    <div>
        
    <input type="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
    <input type="password" placeholder="Password" value={formValues.email} onChange={handleChange}/> 
    
    </div>)


}
export default InputboxLogin;