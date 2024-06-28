import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
            <li>خدمات</li>
            <li>نمونه کار</li>
            <li>مقالات</li>
            <li>تماس با ما</li>
        </ul>
        <ul className="footer-links">
            <li>خدمات</li>
            <li>نمونه کار</li>
            <li>مقالات</li>
            <li>تماس با ما</li>
        </ul>
        <ul className="footer-links">
            <li>خدمات</li>
            <li>نمونه کار</li>
            <li>مقالات</li>
            <li>تماس با ما</li>
        </ul>
        <div className="footer_social_icon flex gap-3">
            <div className="footer_icon_container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                 <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        </div>
        <div className="footer-copyright mt-10">
            <hr />
            <p className='mt-10'>Copywrite content @2024</p>
        </div>
    </div>
    
  )
}
