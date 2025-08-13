import React ,{ useState }from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Register(){
  const navigate =useNavigate();


  const[formData, setFormData]= useState({
    FirstName: '',
    LastName: '',
    Address: '',
    MobileNumber: '',
    NIC: '',
    Email:'',
    Password: '',
    Password: '',

  });

  const[message, setMessage] = useState('');
  //const[errors]
}

