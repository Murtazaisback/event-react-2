'use client'
import React, { useState } from 'react';
import './index.css'
import Link from 'next/link';

const Sign_Up_org = () => {


  return (
    <div className='main_container'>
      <div className="login_container">
                <div className="login_section">

                        <div className="coustomer_form ">
                            <h2>ORGANIZERS</h2>
                            <form action="" className="login_cous" >
                                    <p>Already have an account?</p>
                                    <h2>Login</h2>
                                    <label htmlFor="">Email</label>
                                    <input type="email" required/>

                                    <label htmlFor="">Password</label>
                                    <input type="password" required/>
                                    <Link href="/" className='cursor_pointer submit_btn'>Login</Link>

                            </form>
                            <div className="sign_btnss">

                                <p>Don’t have an account?</p>
                                <Link href="/Sign_Up_org" className="cursor_pointer" >Sign Up</Link>
                            </div>
                            <div className="sign_btnss">
                                <p >Forget You Psssword?</p>
                                <Link href="/forgot" className="cursor_pointer">Reset Psssword</Link>

                            </div>
                            <Link href="/Login">Or login as <span className='yellow_cr'>Customer</span> </Link>
                            
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Sign_Up_org
