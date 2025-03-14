import React, { useEffect, useState } from 'react'
import logo from "../assets/Abhishek-Mukherjee-1.png"
import user from "../assets/user.png"
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../contants/navigations';



function Header() {

  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  const [searchInput,setSearchInput] = useState(removeSpace)
  const navigate = useNavigate()
 
  useEffect(()=>{
      if(searchInput){
          navigate(`/search?q=${searchInput}`)
      }
  },[searchInput])

  const handleSubmit = (e)=>{
      e.preventDefault()
  }
  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-700 bg-opacity-50 z-40'>
      <div className='container mx-2 px-3  flex items-center justify-center h-full '>
        <Link to="/" >
          <img src={logo} alt="" className='w-[220px] h-23 pb-5 ' />
        </Link>

        <nav className='hidden lg:flex items-center gap-2 ml-5'>
          {
            navigation.map((nav, index) => {
              return (
                <div>
                  <NavLink key={nav.label} to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                    {nav.label}
                  </NavLink>
                </div>
              )
            })
          }
        </nav>

        <div className='ml-auto flex items-center gap-4'>
          <form action="" className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search...' className='w-40 bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
             onChange={(e)=>setSearchInput(e.target.value)}
            value={searchInput}
            />
          <button className='text-2xl text-white'>
            <IoSearchOutline  />
          </button>
          </form>
   
          <div className=' h-8 w-8 rounded-full overflow-hidden cursor-pointer active:scale-50'>

            <img src={user} alt='' className=' h-full w-full' />
          </div>
        </div>





      </div>
    </header>

  )
}

export default Header