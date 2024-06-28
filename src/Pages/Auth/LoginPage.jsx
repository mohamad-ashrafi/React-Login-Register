import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import citiesData from '../../DB/cities.json';
import { apiPost, createUser, getUser } from '../../Utils/Api';
import {Link, Navigate, useNavigate  } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';

export const LoginPage = () => {
  const { user, updateUser , login , logout } = useAuth();
  const [error, setError] = useState('');




  const nav = useNavigate();
  const [formData, setFormData] = useState({
    user_name: '', 
    password: '',
  });
  const [responseMessage, setResponseMessage] = useState(null);
  const [token, setToken] = useState(''); // State to hold token

  const handleSubmit = async (e) => {
    e.preventDefault();
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      try{
        const response = await createUser('login' , formDataToSend);
        if(response && response.user && response.token){
          logout(token);
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

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getUser('profile', token);
        updateUser(userData);
      } catch (e) {
        console.error(e);
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
        <h2 className="text-center text-xl mb-4">ورود </h2>
        {responseMessage && (
          <div className="p-4 border mb-4 bg-yellow-300 rounded-lg">{responseMessage}</div>
        )}
        {error && (
          <div className="p-4 border mb-4 bg-yellow-300 rounded-lg">{error.message}</div>
        )}
        {error && console.error(error)}
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
  <div className='grid grid-cols-1 gap-4'>
    <div className="mb-4">
      <input
        type="text"
        placeholder="نام کاربری"
        value={formData.user_name}
        onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        placeholder="کلمه عبور"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-gray-300"
        required // اینجا اضافه شده است
        minLength="6" // حداقل تعداد کاراکترهای پسورد
      />
    </div>
  </div>
  <div className="mb-4">
    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
      ورود
    </button>
  </div>
</form>
        <p className="text-center text-sm mb-2">هنوز ثبت نام نکردید؟
        <span className="text-blue-500">
        <Link to="/register">ثبت نام</Link>
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

