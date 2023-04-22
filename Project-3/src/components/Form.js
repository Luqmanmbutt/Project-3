import React from 'react'


const Form = () => {

  return (

    <section>
      <div className='register'>
        <div className='top- title'>
          <h2>Sign In</h2>

          <form id="form" className='main-container' >
            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
            <input type="text" placeholder="confirm password"></input>

            <button className='submit-btn'>Sign In</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form