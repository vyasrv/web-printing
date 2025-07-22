// SignUp.jsx
import Image from 'next/image';
import React from 'react';

const Login = ({ isOpen, onClose, onSwitch }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#112E57] shadow-lg rounded-2xl overflow-hidden flex justify-center items-center w-full max-w-5xl relative m-4">

                <button
                    className="absolute top-4 right-4 text-gray-200 hover:text-gray-500 cursor-pointer text-2xl font-[800] z-50"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="hidden md:block w-1/2 relative overflow-hidden">
                    <img
                        src="/images/signup-img.webp"
                        alt="Creative"
                        className="w-full h-full object-cover rounded-l-none rounded-r-2xl"
                    />
                    <div className="absolute bottom-8 left-14 text-white">
                        <h3 className="text-2xl font-light leading-tight">
                            Join the <span className="font-medium italic">worlds largest network</span><br />
                            of <span className="font-medium italic">designers and digital creatives</span>
                        </h3>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8 text-white space-y-4">
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-bold  text-white text-center">Login</h2>
                        <div className='flex justify-center p-0 mt-0'>
                            <Image src={'/images/section-heading.webp'} alt={''} width={180} height={60} className='' />
                        </div>
                    </div>
                    <form className="space-y-2">

                        <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black" />

                        <input type="password" placeholder="Create a password" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black" />


                        <button type="submit" className="w-full bg-secondary text-white rounded-md py-2 !mt-4  hover:bg-secondary/90">
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-center text-white/80 mt-4">
                        Didnt have an Account?{" "}
                        <button
                            onClick={onSwitch}
                            className="text-white font-medium underline"
                        >
                            Sign Up
                        </button>
                    </p>

                </div>


            </div>
        </div>
    );
};

export default Login;
