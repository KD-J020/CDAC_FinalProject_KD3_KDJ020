import React, { useState } from 'react';
import { toast } from 'react-toastify';
import{useNavigate} from 'react-router-dom';
import { addExecutive } from '../Service/executive';
const AddExecutive = () => {
   
    const navigate = useNavigate();

    const[email,setEmail]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[password,setPassword]=useState('');
    const[phone,setPhone]=useState('');



    const onCancel = () => {
        navigate(-1)
    }
    const onSubmit =async () => {
       if(email.length==0)
       {
         toast.warn("Please enter email");
         return
       }
       if(firstName.length===0)
       {
        toast.warn("Please enter first name");
        return
       }
       if(lastName.length===0)
       {
        toast.warn("Please enter last name");
        return
       }
       if(password.length===0)
       {
        toast.warn("Please enter password");
        return
       }
       if(phone.length===0|| !/^[0-9]+$/.test(phone)) {
        toast.warn("Phone number must contain only digits");
        return;
       }
       const result=await addExecutive(email,firstName,lastName,password,phone);
       if(result.status==='error')
       {
           toast.error(result.error);
       }else{
              toast.success('Executive added successfully');
              navigate(-1);
       }

    };

        return (
            <div className="container mt-4">
                <h2 className="mb-3">Add New Executive</h2>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={(e)=>
                            {
                                setEmail(e.target.value)
                            }
                        } required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">First Name:</label>
                        <input type="text" className="form-control" name="fname" value={firstName} onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name:</label>
                        <input type="text" className="form-control" name="lname" value={lastName} onChange={(e)=>
                            {
                                setLastName(e.target.value)
                            }
                        } required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={(e)=>
                            {
                                setPassword(e.target.value)
                            }
                        } required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone:</label>
                        <input type="tel" className="form-control" name="phone" value={phone} onChange={(e)=>
                            {
                                setPhone(e.target.value )
                            }
                        } required />
                    </div>
                    <div className='mb-4'>
                    <button type="submit"  onClick={onSubmit} className="btn btn-primary">Add Executive</button>
                    <button onClick={onCancel} className='btn btn-danger ms-2'>
                       Cancel
                     </button>
                 </div>
           
            </div>
        );
    };

export default AddExecutive;