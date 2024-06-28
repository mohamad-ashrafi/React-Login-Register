import './App.css';
import axios from 'axios';
import { useEffect, useState , createContext } from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import {QueryClient , QueryClientProvider} from 'react-query'
import {useForm} from 'react-hook-form'
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Auth/Profile';
import { NotFound } from './Pages/404/NotFound.js';
import { RegisterPage } from './Pages/Auth/RegisterPage.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { LoginPage } from './Pages/Auth/LoginPage.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
export const CategoryContext = createContext();

function App() {

  const [shopCategory, setShopCategory] = useState('all'); // Add your new parameter here

  const client = new QueryClient({ defaultOptions:{
    queries : {refetchOnWindowFocus : false},
    mutations : {}
  }})

  return (
    <div className='App'>
    <AuthProvider>
    <QueryClientProvider client={client}>
      <CategoryContext.Provider value={{ shopCategory , setShopCategory }}> 
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<NotFound />} />      
            </Routes>
            <Footer/>
          </Router>
        </CategoryContext.Provider>
      </QueryClientProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
