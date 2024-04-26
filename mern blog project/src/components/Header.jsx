import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

function Header() {
  const pathname = useLocation().pathname
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
        <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
          <FaMoon />
        </Button>


        <Link to="/signin">
          <Button className='border-0' gradientDuoTone="purpleToBlue" outline>
            Signin
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={pathname==="/"} as={"div"}>
          <Link to="/">
            Home
          </Link>

        </Navbar.Link>
        <Navbar.Link active={pathname==="/about"} as={"div"}>
          <Link to="/about">
            About
          </Link>

        </Navbar.Link>
        <Navbar.Link active={pathname==="/project"} as={"div"}>
          <Link to="/project">
            Project
          </Link>

        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Header
