import "../styles/Form.css";
import emailjs from '@emailjs/browser';

import React, {useRef,useState} from 'react'

const Form = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pt4a07g', 'template_m787k1i', form.current, 'ukQkw86UstZluDUbx')
      .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
      }, (error) => {
          console.log(error.text);
          setIsSuccess(false);
      });
  };
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name"></input>
            <label>Email</label>
            <input type="email" name="from_email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message"/>  
            <button className="btn">Submit</button>    
            {isSuccess && (
                <p className="sub" style={{ color: 'green' }}>Thank you, Your form is submitted!..</p>
            )}
        </form>
      
    </div>
  )
}

export default Form;
