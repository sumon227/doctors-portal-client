import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <div style={{ background: `url(${footer})` }}>
            <div>
                <footer class="footer p-10 ">
                    <div>
                        <span class="footer-title">Services</span>
                        <Link to='/' class="link link-hover">Branding</Link>
                        <Link to='/' class="link link-hover">Design</Link>
                        <Link to='/' class="link link-hover">Marketing</Link>
                        <Link to='/' class="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <Link to='/' class="link link-hover">About us</Link>
                        <Link to='/' class="link link-hover">Contact</Link>
                        <Link to='/' class="link link-hover">Jobs</Link>
                        <Link to='/' class="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <Link to='/' class="link link-hover">Terms of use</Link>
                        <Link to='/' class="link link-hover">Privacy policy</Link>
                        <Link to='/' class="link link-hover">Cookie policy</Link>
                    </div>
                </footer>
                <footer class="footer footer-center p-4 bg-base-300 text-base-content">
                    <div>
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;