import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <section id='contact'>
      <div className='ContactMe'>
        <h2>CONTACT ME</h2>
        <span >Please fill out this form for any work opportunity.</span> <br/>
        <input type='text' className='inputName' placeholder='NAME'/> <br/>
        <input type='text' className='inputEmail' placeholder='EMAIL'/> <br/>
        <textarea cols="30" rows="10" type='text' className='inputMessage' placeholder='MESSAGE'/> <br/>
        <button className='Conbtn'><img className='contactBtn'  alt=''/>Submit</button>
      </div>
      
    </section>
  )
}

export default contact