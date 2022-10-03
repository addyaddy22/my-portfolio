import React from 'react'
import './footer.css'
import { ImFacebook } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer id='footer'>
            <a href='#' className='footer__logo' >ADMIRE</a>

            <ul className='permalinks'>
                <li><a href='#' >Home</a></li>
                <li><a href='#about' >About</a></li>
                <li><a href='#experience' >Experience</a></li>
                <li><a href='#services' >Servics</a></li>
                <li><a href='#portfolio' >Portfolio</a></li>
                <li><a href='#contact' >Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://facebook.com' ><ImFacebook /></a>
                <a href='https://instagram.com' ><BsInstagram /></a>
                <a href='https//twitter.com' ><BsTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy;Admire Mutambo Portfolio. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer