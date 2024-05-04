import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3  max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*  left side*/}
        <div className='flex-1'>
          <Link to="/" className='  fond-bold  dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-blue-400 to-violet-500 text-white rounded-lg'>SAM</span>
            <span>Blog</span>
          </Link>
          <p className="text-sm mt-5">

            This is a demo project. You can sigm up with your email and password.
            or with google

          </p>

        </div>
        {/*  right side*/}

        <div className='flex-1'>
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Usernaame" />
              <TextInput type="text" placeholder=""
                id="username"
                />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="name@company.com"
                id="email"
                />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder=""
                id="password"
                />
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit">Signin</Button>
          </form>
          <div className="felx gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500" >Signin</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


