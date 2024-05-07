import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsInstagram, BsTwitterX} from "react-icons/bs"
export default function FooterComponent() {
  return (
    <div>
      <Footer container className="border border-t-8 border-blue-400">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link to="/" className='self-center widespace-nowrap text-lg sm:text-xl fond-semibold  dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-blue-400 to-violet-500 text-white rounded-lg'>SAM</span>
                <span>Blog</span>
              </Link>
            </div>
            <div className=" grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#"
                    target="_blank"
                    rel="noopener noreferrer" >
                    JS Project
                  </Footer.Link>
                  <Footer.Link href="/about"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Sam's Blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow US" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Instagram
                  </Footer.Link>
                  <Footer.Link href="/about"
                    target="_blank"
                    rel="noopener noreferrer" >
                    LinkedIn
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="/about"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Term's & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider
          />
          <div className="w-full sm:flex sm:items-center sm:justify-between ">
            <Footer.Copyright
              href="#"
              by="Sam's Blog"
              year={new Date().getFullYear()}s
            />
            <div className=" flex gap-6 sm:mt-0 mt-4  sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} alt="Facebook" />
              <Footer.Icon href="#" icon={BsInstagram} alt="Instagram " />
              <Footer.Icon href="#" icon={BsTwitterX} alt="Twitter " />
              <Footer.Icon href="#" icon={BsGithub} alt="Github " />

              
            </div>
          </div>

         
        </div>
      </Footer>
    </div>
  )
}
