import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_85cj58e', 'template_eqvx88p', form.current, 'gIam4Z-ysMERvYkE7')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("email is sent!")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <div className='ContactMe'>
        <h2>CONTACT ME</h2>
        <span >Please fill out this form for any work opportunity.</span> <br/>
      <form ref={form} onSubmit={sendEmail} >
      <input type='text' className='inputName' name='from_name' placeholder='NAME'/> <br/>
        <input type='text' className='inputEmail' name ='from_email' placeholder='EMAIL'/> <br/>
        <textarea cols="30" rows="10" type='text' name='message' className='inputMessage' placeholder='MESSAGE'/> <br/>
        <button type="submit" value='Send' className='Conbtn'>Submit</button>
      </form>
      </div>
      
    </section>
  )
}

export default Contact