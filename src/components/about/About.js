import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/DSC_1335.jpg'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know Me</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About image' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years work</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>1+ Projects</small>
                        </article>
                    </div>
                    <p>
                        I have worked at Hitrac and also Telco. Currently im working at telco from the moment i finished my college up to my
                        Graduate Trainee program until now im a Junior System Application developer.
                    </p>

                    <a href='#contact' className='btn btn-primary' >Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default About
