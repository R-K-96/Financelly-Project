import React from 'react'
import Header from '../Components/Header'
import SignupSignincomponent from '../Components/SignupSignin'

function Signup() {
  return (
    <div>
      <Header/>
      <div className='wrapper'>
            <SignupSignincomponent/>
      </div>
    </div>
  )
}

export default Signup