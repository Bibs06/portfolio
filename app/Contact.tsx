'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n8ug3yd','template_8p5jxb1', e.currentTarget, 'CUZmgtXgRe5kxYrwX')
        .then(
            (result) => {
                alert('Email Sent !')
            },
            (error) => {
                alert(error.text)
            }
          );
      };
  return (
    <div id='contact' className='h-screen flex flex-col gap-2 py-10 bg-secondary'>   <h5 className='text-4xl text-center text-golden-yellow font-bold'>Contact Me</h5>
    <h3 className="text-2xl font-semibold mt-2 text-center">Ways To Contact Me</h3>
    <p className="text-17 w-80 text-center mx-auto">Feel free to reach out and drop me a message in the binary world of zeros and ones. Let's connect through the language of computers</p>
     
    <form className='mx-auto ' ref={form} onSubmit={sendEmail}>
     

      <div className="border-golden-yellow border-1  mb-4 px-1 rounded-md w-100 py-2 text-white ">
        <input
          id="form4Example2"
          className="outline-0 w-full"
          placeholder="Name"
          name="your_name"
          required
        />
      </div>
      <div className="border-golden-yellow border-1  mb-4 px-1 rounded-md w-100 py-2 text-white ">
        <input
          type="email"
          id="form4Example2"
          className="outline-0 w-full"
          placeholder="Email"
          name="your_email"
          required
        />
      </div>

      <div className="border-golden-yellow border-1  mb-4 px-1 rounded-md w-100 py-2 text-white ">
        <textarea
          className="outline-0 w-full"
          id="form4Example3"
          rows={4}
          placeholder="Message"
          name="message"
          required
        ></textarea>
      </div>

      <button type="submit" className="bg-golden-yellow rounded-xl w-full h-10 text-white font-bold hover:bg-transparent">
        Send
      </button>
    </form>
 </div>
  )
}

export default Contact