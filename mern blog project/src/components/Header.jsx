import React from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon,FaSun} from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'

function Header() {
const pathname = useLocation().pathname;
const dispatch = useDispatch();
const {Currentuser}= useSelector(state => state.user);
const {theme} = useSelector((state) => state.theme);
 console.log(Currentuser);
  return (

    <Navbar className='border-b-2'>

      <Link to="/" className='self-center widespace-nowrap text-sm sm:text-xl fond-semibold  dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-blue-400 to-violet-500 text-white rounded-lg'>SAM</span>
        <span>Blog</span>
      </Link>

      <form>

        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />

      </form>
      <Button className='w-12 h-10 lg:hidden' color="gray" pill>
        <AiOutlineSearch />

      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color="gray" pill onClick={()=>dispatch(toggleTheme())}>
          {theme === 'light' ? <FaMoon/> : <FaSun/>}
       
        </Button>

     {Currentuser ? (
      <Dropdown
       arrowIcon={false}
       inline
       label={<Avatar alt="user" img={Currentuser.profilePicture} rounded />}>
       <Dropdown.Header>
       <span className='block text-sm truncate'>@{Currentuser.username}</span>
       <span className='block text-sm font-medium truncate'>{Currentuser.email}</span>
             
       </Dropdown.Header>
       <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider/>
            <Dropdown.Item>Sign Out</Dropdown.Item>
            
       </Dropdown>
     ):
     (
      <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
     )}






        <Navbar.Toggle />
      </div >
      <Navbar.Collapse>
        <Navbar.Link active={pathname === "/"} as={"div"}>
          <Link to="/">
            Home
          </Link>

        </Navbar.Link>
        <Navbar.Link active={pathname === "/about"} as={"div"}>
          <Link to="/about">
            About
          </Link>

        </Navbar.Link>
        <Navbar.Link active={pathname === "/project"} as={"div"}>
          <Link to="/project">
            Project
          </Link>

        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar >

  )
}

export default Header
