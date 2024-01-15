'use client'
import React, { useState } from 'react';
import './index.css'
import Link from 'next/link';

const Login = () => {

  const [showSignUp1, setShowSignUp1] = useState(false);

  // State for the second sign-up form
  const [showSignUp2, setShowSignUp2] = useState(false);

  // Toggle function for the first sign-up form
  const toggleSignUp1 = () => {
    setShowSignUp1(!showSignUp1);
  };

  // Toggle function for the second sign-up form
  const toggleSignUp2 = () => {
    setShowSignUp2(!showSignUp2);
  };
  return (
    <div className='main_container'>
      <div className="login_container">
                <div className="login_section">
                    <div className="coustomer_form">
                        <h2>CUSTOMERS</h2>
                            <form action="" className="login_cous">
                              
                                    <p>Already have an account?</p>
                                    <h2>Login</h2>
                                    <label htmlFor="">Email:</label>
                                    <input type="email" required/>

                                    <label htmlFor="">Password:</label>
                                    <input type="password" required/>
                                <Link href="/" className='cursor_pointer submit_btn'>Login</Link>

                            </form>
                            <div className="sign_btnss">
                                <p >Don’t have an account?</p>
                                <Link href="/Sign_Up" className="cursor_pointer">Sign Up</Link>

                            </div>
                            <div className="sign_btnss">
                                <p >Forget You Psssword?</p>
                                <Link href="/forgot" className="cursor_pointer">Reset Psssword</Link>

                            </div>
                            <Link href="/Login_org">Or login as <span className='yellow_cr'>Organizer</span> </Link>

                        </div>
                </div>
            </div>
    </div>
  )
}

export default Login
