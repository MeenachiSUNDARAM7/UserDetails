import React, { useState } from 'react'
import { createUser } from '../services/UserService'
import { useNavigate, useParams } from 'react-router-dom'


const UsersComponents = () => {

   const [id, setId] = useState('')
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone_no, setPhone_no] = useState('')
   const [gender, setGender] = useState('')

   const navigator = useNavigate();

   const handleId = (e) => {setId(e.target.value)};
   const handleName = (e) => {setName(e.target.value)};
   const handleEmail = (e) => {setEmail(e.target.value)};
   const handlePhone_no = (e) => {setPhone_no(e.target.value)};
   const handleGender =(e) => { setGender(e.target.value)};

   const {userId} = useParams();
   const [errors, setErrors] = useState({
    id: '',
    name: '',
    email: '',
    phone_no: '',
    gender: ''
   })

   function saveUser(e) {
        e.preventDefault();

        if(validateForm()) {
            const user = {id, name, email,phone_no, gender}
            console.log(user);
    
            createUser(user).then((response) => {
                console.log(response.data);
                navigator('/users')
            })
        }
        
    } 

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors}

        if(name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'name is required'
            valid = false;
        }

        if(email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'email is required'
            valid = false;
        }

        if(phone_no.trim()) {
            errorsCopy.phone_no = '';
        } else {
            errorsCopy.phone_no = 'phone_no is required'
            valid = false;
        }

        if(gender.trim()) {
            errorsCopy.gender = '';
        } else {
            errorsCopy.gender = 'gender is required'
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if(userId) {
            return <h2 className='text-center'> Update user</h2>
        }else{
            return <h2 className='text-center'>Add user</h2>
        }
    }

  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label className='form-label text-left'>id:</label>
                            <input
                                type='text'
                                placeholder='Enter user id'
                                name='id'
                                value={id}
                                className='form-control'
                                onChange={handleId}
                            >
                            </input>
                        </div>

                        <div className='form-group'>
                            <label className='form-label text-left'>name:</label>
                            <input
                                type='text'
                                placeholder='Enter user name'
                                name='name'
                                value={name}
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                onChange={handleName}
                            >
                            </input>
                            {errors.name && <div className='invalid-feedback'> {errors.name} </div>}
                        </div>

                        <div className='form-group'>
                            <label className='form-label text-left'>email:</label>
                            <input
                                type='text'
                                placeholder='Enter user email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={handleEmail}
                            >
                            </input>
                            {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                        </div>

                        <div className='form-group'>
                            <label className='form-label text-left'>phone_no:</label>
                            <input
                                type='text'
                                placeholder='Enter user phone_no'
                                name='phone_no'
                                value={phone_no}
                                className={`form-control ${errors.phone_no ? 'is-invalid' : ''}`}
                                onChange={handlePhone_no}
                            >
                            </input>
                            {errors.phone_no && <div className='invalid-feedback'> {errors.phone_no} </div>}
                        </div>

                        <div className='form-group'>
                            <label className='form-label text-left'>gender:</label>
                            <input
                                type='text'
                                placeholder='Enter user gender'
                                name='gender'
                                value={gender}
                                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                onChange={handleGender}
                            >
                            </input>
                            {errors.gender && <div className='invalid-feedback'> {errors.gender} </div>}
                        </div>

                        <button className='btn btn-success ' onClick={saveUser}>Submit</button>
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default UsersComponents