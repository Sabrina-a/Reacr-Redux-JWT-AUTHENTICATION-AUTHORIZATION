import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({ 
    email:yup.string().email().required('Email is required'), 
    password:yup.string().min(4).max(15).required('Password is required'),
})


function Login() {
    const { register,handleSubmit , formState: { errors }} = useForm({
        resolver:yupResolver(schema),
    });
    const navigate =useNavigate();
    const onSubmit =(data)=>{
        console.log(data);
        navigate('home');
    }

    
    return (
    <>
     
    <div className="title">Sign in </div>
          
    <form className='form' onSubmit={handleSubmit(onSubmit)} >
        <div className="inputs">
          <input type='text' name="email" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
  
          <input type='text' name='password' placeholder="Password" {...register("password")}  />
          <p>{errors.password?.message}</p>

          
          <input type="submit" id="submit" value="Login"/>
        </div>
    </form>
           
 
    </>
    );
}

export default Login;