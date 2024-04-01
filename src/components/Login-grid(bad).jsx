import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
    return (
        <html lang="en">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
            <title>hello</title>
        </head>
        <div className='w-full h-screen flex bg-[#f3e1e3]'>
            {/* Above full screen width and below the box */}
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] bg-white shadow-lg shadow-gray-500 rounded-[10px] sm:max-w-[900px]'>
                {/* LEFT FORM */}
                <div className='p-4 flex flex-col justify-around text-center'>
                    <form action="#">
                        <h1 className='text-4xl font-bold text-center mb-16'>Login</h1>
                        <div className='flex flex-wrap justify-center gap-5 mb-16'>
                            <button type="button" className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full hover:bg-gray-100 font text-[30px]"><FontAwesomeIcon icon={faFacebookF} /></button>
                            <button type="button" className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full hover:bg-gray-100 font text-[30px]"><FontAwesomeIcon icon={faTwitter} /></button>
                        </div>
                        <div>
                            <p className='text-gray-500 mb-4'>or use your account</p>
                            <input type="email" placeholder='Email' className='border p-2 mr-2 bg-[#efefef]' />
                            <input type="password" placeholder='Password' className='border p-2 bg-[#efefef]' />
                        </div>
                        <p className='text-gray-500'>
                            <a href="#" onClick="return openForm();">Forgot your password?</a>
                        </p>
                        <button type='submit' className='w-full py-2 my-4 w-36 bg-[#FF4B2B] hover:bg-[#ff6e54] text-white font-bold uppercase rounded-full'>Log In</button>
                    </form>
                </div>
                {/* RIGHT TEXT s*/}
                <div className='p-4 flex flex-col justify-around rounded-r-[10px] bg-gradient-to-r from-[#FF454C] to-[#FF4368] text-white text-center'>
                    <p className='text-4xl font-montserrat font-black'>
                        React + CSS Login Form
                    </p>
                    <p>
                        This login form was created using React and Tailwindcss. FontAwesome was used for social icons.
                    </p>
                </div>
            </div>
        </div>
        </html>
    )
}