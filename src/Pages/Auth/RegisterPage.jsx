import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import provincesData from '../../DB/provinces.json';
import citiesData from '../../DB/cities.json';
import { apiPost, createUser, getUser } from '../../Utils/Api';
import {Link, Navigate, useNavigate  } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';

export const RegisterPage = () => {
  const { user, updateUser , login } = useAuth();
  const [error, setError] = useState('');




  const nav = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    email: '', 
    password: '',
    full_name: '',
    gender: '',
    birthdate: '',
    province_id: '',
    city_id: '',
    
  });
  const [Cities , setCities] = useState({cities: []});
  const [responseMessage, setResponseMessage] = useState(null);
  const [token, setToken] = useState(''); // State to hold token

  const handleSubmit = async (e) => {
    e.preventDefault();
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      try{
        const response = await createUser('register' , formDataToSend);
        if(response && response.user && response.token){
          login(response.token);
          updateUser(response.user);
          nav('/profile');
  
        }
        else{
          setResponseMessage(response.message); // Handle error response
        }
      }catch(e){
        setError(e)
      }
  };

  
  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar_path: e.target.files[0] });
  };

  const handleProvinceChange = (e) => {
    
    const selectedProvinceId = e.target.value;
    const selectedProvinceCities = citiesData.filter( item => item.province_id == selectedProvinceId);
    setFormData(prevState => ({
      ...prevState,
      province_id: selectedProvinceId,
    }));

    setCities( prevState =>({
      ...prevState,
      cities: selectedProvinceCities
    }));
      
  };



  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getUser('profile', token);
        updateUser(userData);
      } catch (e) {
        console.error(e);
        //setError(error.message);
      }
    };


    getUserData();
  }, [token, updateUser]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <>

    {!user && (
    <div className="flex justify-center items-center py-20 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-center text-xl mb-8">ثبت نام</h2>
        {responseMessage && (
          <div className="p-4 border mb-4 bg-yellow-300 rounded-lg">{responseMessage}</div>
        )}
        {error && (
          <div className="p-4 border mb-4 bg-yellow-300 rounded-lg">{error.message}</div>
        )}
        {error && console.error(error)}
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
  <div className='grid grid-cols-2 gap-4'>
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required 
        pattern="^09[0-9]{9}$"// اینجا اضافه شده است
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
        minLength="6" // حداقل تعداد کاراکترهای پسورد
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
      />
    </div>
    <div className="mb-4">
      <select
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
      >
        <option value="">جنسیت انتخاب کنید</option>
        <option value="Male">مذکر</option>
        <option value="Female">مونث</option>
        <option value="Other">غیره</option>
      </select>
    </div>
    <div className="mb-4">
      <input
        type="date"
        placeholder="Birthdate"
        value={formData.birthdate}
        onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
      />
    </div>
    {/* <div className="col-start-1 col-end-3">
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required 
      />
    </div> */}
    <div className="mb-4">
      <select
        value={formData.province_id}
        onChange={handleProvinceChange}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
      >
        <option value="">استان را انتخاب کنید</option>
        {provincesData.map((province) => (
          <option key={province.id} value={province.id}>{province.name}</option>
        ))}
      </select>
    </div>
    <div className="mb-4">
      <select
        value={formData.city_id}
        onChange={(e) => setFormData({ ...formData, city_id: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
      >
        <option value="">شهر را انتخاب کنید</option>
        {Cities.cities.map((city) => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>
    </div>
  </div>
  <div className="text-center my-3">
          <input type="checkbox" name="" id="" required/>
          <label htmlFor="" className="ml-1">قوانین و مقررات سایت را میپذیرم</label>
        </div>
  <div className="mb-4">
    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
      ثبت
    </button>
  </div>
</form>
        <p className="text-center text-sm mb-2">آیا حساب کاربری دارید؟ 
        <span className="text-blue-500">
        <Link to="/login">ورود</Link>
        </span>
        </p>
      </div>
    </div>
    )}
    {token && user ? (
      <div className="flex justify-center items-center py-20 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {console.log(user)}
          <h2 className="text-center text-xl mb-4">خوش آمدید، {user && user.user.profile.full_name}</h2>
          <button onClick={() => {
            localStorage.removeItem('token');
            setToken('');
          }} className="w-full bg-red-500 text-white px-4 py-2 rounded">
            خروج
          </button>
        </div>
      </div>
    ) : ''}
    </>
  );
};
