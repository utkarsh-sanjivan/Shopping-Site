import React from 'react';
import './index.css';

export default function Footer(props) {
    /*
        Footer Component of the page.
        It has all the details of shopping site.
    */
    return(
        <div className='footer'>
            <div className='footer-list'>
                <div className='footer-list-header'>Shopping Site</div>
                <div className='footer-list-item'>About Us</div>
                <div className='footer-list-item'>Why Us</div>
                <div className='footer-list-item'>Our Team</div>
                <div className='footer-list-item'>Blog</div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>Shop</div>
                <div className='footer-list-item'>New Arrival</div>
                <div className='footer-list-item'>Offers</div>
                <div className='footer-list-item'>Product Type 1</div>
                <div className='footer-list-item'>Product Type 2</div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>Policies</div>
                <div className='footer-list-item'>Privacy Policies</div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>Help</div>
                <div className='footer-list-item'>FAQs</div>
                <div className='footer-list-item'>Assurance</div>
                <div className='footer-list-item'>Sitemap</div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>Follow Us</div>
                <div className='footer-list-item'>Facebook</div>
                <div className='footer-list-item'>Twitter</div>
                <div className='footer-list-item'>Instagram</div>
                <div className='footer-list-item'>Youtube</div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>Contact Us</div>
                <div className='footer-list-item'>Call - 1234567890</div>
                <div className='footer-list-item'>Whatsapp - 1234567890</div>
                <div className='footer-list-item'>Email - abc@shoppingsite.com</div>
                <div className='footer-list-item'>D-81i 8ith Floor</div>
                <div className='footer-list-item'>Imaginary City</div>
                <div className='footer-list-item'>Imaginary Country 123456</div>
            </div>
        </div>
    )
}