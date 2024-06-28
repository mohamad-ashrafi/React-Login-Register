import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { getUser, sendeVerifyEmail } from '../../Utils/Api';
import { Link, useLocation } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export const Profile = () => {
  const query = useQuery();
  const status = query.get('success');
  const { token, updateUser , logout} = useAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [message , setMessage] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState('default'); 

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getUser('profile', token);
        setUser(userData);
        setIsEmailVerified(userData.user.email_verified_at); 
      } catch (error) {
        setError(error.message);
      }
    };

    if (token && updateUser) {
      getUserData();
    }
  }, [token, updateUser]);

  const handleVerifyEmail = async () => {
    try {
      const response = await sendeVerifyEmail('email', token);
      if(response){
        setMessage(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  
    return (
      
      <div className='p-20'>
    
      

      {status === 'true'  ? (
          <>
          <span className='mb-10'>
            ایمیل شما با موفقیت تایید شد
          </span>
          <span className='text-green-500'>
            لطفا وارد شوید
          </span>
          <br />
          <Link to='/login'>
          <button className="w-1/8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-400">
              ورود
            </button> 
          </Link>
          

          </>
      ): token && isEmailVerified === 'default'  ? (
          <div>   
          <p className='mb-10'>
            ایمیل تایید حساب ارسال شد. در صورت عدم دریافت کلیک کنید
          </p>
              <div className='flex gap-8 justify-center'>
              <button className="w-1/8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-400" onClick={handleVerifyEmail}>
              ارسال مجددایمیل 
            </button>    
            <button className="w-1/8 bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-400" onClick={() => {
              logout();
            }}>
              خروج
            </button> 
              </div>    
        </div>
      ):

         user && token && isEmailVerified ? (
            <>
              <p>خوش آمدید، {user.user.profile.full_name}!</p>
              <p>ایمیل: {user.user.email}</p>
              <button onClick={() => {
                logout();
              }} className="w-1/3 bg-red-500 text-white px-4 py-2 rounded">
                خروج
              </button>
            </> 
          ):
           (
           <>
            <p>برای مشاهده اطلاعات باید وارد شوید.</p>
            <Link to='/login'>
              <button className="w-1/8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-400">
                ورود
              </button> 
            </Link>
           </>
          )
          
        }
      </div> 
    );
}