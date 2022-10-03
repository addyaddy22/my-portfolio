import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { BsShieldFillCheck } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experiences'>
            <h5>The Skills I Have</h5>
            <h2>My experience</h2>

            <div className='container experience__container'>

                {/* FROND END  */}
                <div className='experience__frontend'>
                    <h3>Front End Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsShieldFillCheck className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsShieldFillCheck className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsShieldFillCheck className='experience__details-icon' />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsShieldFillCheck className='experience__details-icon' />
                            <div>
                                <h4>REACT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                    </div>
                </div>


                {/* BACK END  */}
                <div className='experience__backend'>
                    <h3>Back End Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NODE JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>ANDROID</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MYSQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience