import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact=()=>{
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_aduqaii', 'template_rynvtkc', form.current, {
            publicKey: 'lUqpT_rVYMDK1_-Bf',
          })
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log('FAILED...:', error.text);
            },
          );
          e.target.reset();
      };
    return(
        <div>
                <section>
                <div className='container'>
                <h2 className="--text-center">Contact Us</h2>
                <form ref={form} onSubmit={sendEmail}
                className='--form-control--card
                --flex-center --dir-column'          >
                    <input type="text" placeholder='Full name'
                        name='user_name' required />

                    <input type="Email" placeholder='Email'
                        name='user_email' required />

                    <input type="text" placeholder='Subject'
                        name='subject' required />

                    <textarea type="text" placeholder='Message'
                        name='message' required cols="30" rows="10"/>

                    <button className='--btn--btn-primary' type='submit'>
                        Send Message
                    </button>
                </form>


                </div>
            </section>
        </div>
    )
}

export default Contact;