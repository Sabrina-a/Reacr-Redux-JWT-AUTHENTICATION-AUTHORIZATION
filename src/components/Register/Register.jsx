import React from "react";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName:yup.string().required('First Name should be required'),
    lastName:yup.string().required('Last Name should be required'),
    email:yup.string().email().required('Email is required'),
    age:yup.number().positive().integer().required('Age is required'),
    password:yup.string().min(4).max(15).required('Password is required'),
    confirmPassword:yup.string().oneOf([yup.ref('password'),null]).required('Password should match')
})

function Form(){
    const {register, handleSubmit , formState: { errors }} = useForm({
        resolver:yupResolver(schema),
    });
    const onSubmit =(data)=>{
        console.log(data);
    }
    return(
      <>
            <div className="title">Sign up </div>
               
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputs">
                        <input type='text' name="firstName" placeholder="First Name" {...register('firstName')}  />
                        <p>{errors.firstName?.type ==="required" && "First Name is Required"}</p>
                        <input type='text' name="lastName" placeholder="Last Name" {...register('lastName')} />
                        <p>{errors.lastName?.message}</p>
                        <input type='text' name="email" placeholder="Email" {...register('email')}  />
                        <p>{errors.email?.message}</p>
                        <input type='text' name="age" placeholder="Age" {...register('age')} />
                        <p>{errors.age?.message}</p>
                        <input type='text' name='password' placeholder="Password"  {...register('password')} />
                        <p>{errors.password?.message}</p>
                        <input type='text' name='confirmPassword' placeholder="Confirm Password" {...register('confirmPassword')} />
                        <p>{errors.confirmPassword&& "Should match password"}</p>
                        <input type="submit" id="submit"/>
                  
                    </div>
                    </form>
              
        </>   
       
    )
}
export default Form;