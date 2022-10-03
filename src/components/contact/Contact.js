import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { TbBrandMessenger } from 'react-icons/tb'
import { SiWhatsapp } from 'react-icons/si'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>mutamboadmire2@gmail.com</h5>
                        <a href='mailto:mutamboadmire2'>Send Message</a>
                    </article>

                    <article className='contact__option'>
                        <TbBrandMessenger className='contact__option-icon' />
                        <h4>Messanger</h4>
                        <h5>@facebook</h5>
                        <a href='https://m.me/admire.mutambo' target='_blank'>Send Message</a>
                    </article>

                    <article className='contact__option'>
                        <SiWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+263773709735</h5>
                        <a href='https://api.whatsapp.com/send?phone+263773709735'>Send Message</a>
                    </article>

                </div>

                {/* END OF CONTACT */}

                <form>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder=' Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact