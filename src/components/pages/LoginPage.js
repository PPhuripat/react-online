import React from "react";
import { Form , Button  } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import {UserStoreContext} from "../../context/UserContext";
import {useDispatch} from 'react-redux'
import { updateProfile } from "../../redux/actions/authAction";

const schema = yup.object({
  
    email: yup.string().required('Email cannot be empty').email('Email is not in correct form'),
    password: yup.string().required('Password cannot be empty').min(3,'password must be atleast 3 character')
  }).required();
const LoginPage = () => {
     const { register, handleSubmit, formState:{ errors } } = useForm({
         resolver: yupResolver(schema)
       });
       
        const history = useHistory()
        const { addToast } = useToasts()
        const userStore = React.useContext(UserStoreContext)

        // call action by redux
        const dispatch = useDispatch()

       const onSubmit = async(data) => {
           try{
           const apiURL = 'https://api.codingthailand.com/api/login'
           const response = await axios.post(apiURL,
            {
               email : data.email,
               password: data.password
            })

            localStorage.setItem('token',JSON.stringify(response.data))

            //get profile
            const urlProfile = 'https://api.codingthailand.com/api/profile'
            const respProfile = await axios.get(urlProfile,{
                headers:{
                    Authorization: 'Bearer' + response.data.access_token
                }
            })

            localStorage.setItem('profile',JSON.stringify(respProfile.data.data.user))
            //console.log(response.data)
            addToast('Login successfully',{appearance:'success',autoDismiss:true});
            const profileValue = JSON.parse(localStorage.getItem('profile'))
            //userStore.updateProfile(profileValue)
            dispatch(updateProfile(profileValue))
            history.replace('/')
            //history.go(0);
        }catch(error){
            addToast(error.response.data.message,{
                appearance:"error",
                autoDismiss:true,
            });
        }
       }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Login</h2>
          <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" ref={register}  className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
               {
                  errors.email && (
                      <Form.Control.Feedback type="invalid">
                          {errors.email.message}
                      </Form.Control.Feedback>
                  )
              } 
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" ref={register}  className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
               {
                  errors.password && (
                      <Form.Control.Feedback type="invalid">
                          {errors.password.message}
                      </Form.Control.Feedback>
                  )
              } 
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;