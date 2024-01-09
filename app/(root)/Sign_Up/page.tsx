'use client'
import React, { useState } from 'react';
import './index.css'
import Link from 'next/link';

const Sign_Up = () => {


  return (
    <div className='main_container'>
      <div className="login_container">
                <div className="login_section">
                    <div className="coustomer_form">
                        <h2>CUSTOMERS</h2>
                           
                            

                            <form action="" className="login_cous">
                                    <h2>Sign Up</h2>
                                    <label htmlFor="">Email:</label>
                                    <input type="email" required/>

                                    <label htmlFor="">Password:</label>
                                    <input type="Password" required/>

                                    <label htmlFor="">Confirm Password:</label>
                                    <input type="Password" required/>
                                <button type="submit" className='form_btn'>Sign Up</button>

                            </form>
                            <div className="sign_btnss">
                                <p >Already have an account?</p>
                                <Link href="/Login" className="cursor_pointer" >Login</Link>

                            </div>
                            <Link href="/Sign_Up_org">Or Sign up as <span className='yellow_cr'>Organizer</span> </Link>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Sign_Up
