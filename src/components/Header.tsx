import React, { useCallback, useState } from 'react'
import Logo from '../assets/images/logo.svg';
import { AiFillHome } from "react-icons/ai";
import NavList from './theme/NavList';
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { auth, provider } from '../libs/firebase';
import { signInWithPopup } from "firebase/auth";
import { UserCredential } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserEmail, selectUserName, selectUserPhoto, setUserLoginDetails } from '../features/users/userSlice';
import { FcGoogle } from "react-icons/fc";
function Header() {
    const [login, setLogin] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);



    const handleAuth = () => {
        signInWithPopup(auth, provider).then((result) => {
            setUser(result);
        }).catch((err) => {
            alert(err.message);
        })
    };

    const setUser = useCallback((usr: UserCredential) => {
        dispatch(
            setUserLoginDetails({
                name: usr.user.displayName,
                photo: usr.user.photoURL,
                email: usr.user.email
            })
        );
        setLogin(true);
    }, [dispatch]);


  return (
    <header className='h-[75px] px-[20px] lg:px-[36px] tracking-wider bg-black flex  items-center justify-between py-[10px] z-20 drop-shadow-xl fixed top-0 left-0 right-0'>
   <div className='flex  w-[60%] justify-between items-center'>
     <img src={Logo} className='w-[100px] ' alt='logo'/>
     {
        login ? <>
         <nav className='w-[80%] hidden lg:block'>
         <ul className='flex justify-between uppercase text-slate-300  gap-[15px]'>
           <NavList title='Home' icon={<AiFillHome  className='w-4 h-4'/>} href='home'/>
           <NavList title='Search' icon={<IoSearch  className='w-4 h-4'/>} href='search'/>
           <NavList title='watchlist' icon={<FaPlus  className='w-4 h-4'/>} href='watchlist'/>
           <NavList title='originals' icon={<FaStar  className='w-4 h-4'/>} href='originals'/>
           <NavList title='movies' icon={<MdLocalMovies  className='w-4 h-4'/>} href='movies'/>
           <NavList title='series' icon={<PiTelevisionFill  className='w-4 h-4'/>} href='series'/>

        </ul>
     </nav>
        </>:<></>
     }
   
   </div>
   {
    login? 
   <div className='relative'>
     <img src={userPhoto} onClick={()=>setShowButton((prev)=>!prev)} className='w-[40px] cursor-pointer rounded-full' alt='k'/>
     {
        showButton && <div className='absolute w-[100px] mt-[10px] p-2 rounded  bg-black border-[0.5px] text-center  left-[-30px]'>
        <button>Sign Out</button>
     </div>
     }
   </div>
    
    :<button onClick={handleAuth} className='border-[1px] flex items-center gap-2 p-[8px] px-[15px] border-slate-200/60 hover:bg-slate-200 hover:text-black duration-500 rounded'><FcGoogle className='w-5 h-5'/>Login</button>
   }
   
    </header>
  )
}

export default Header