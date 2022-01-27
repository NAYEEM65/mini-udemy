import React from 'react';
import './Footer.css';

const firstFooterData = [
    'Udemy Business',
    'Teach on Udemy',
    'Get the app',
    'About us',
    'Contact us',
];
const secFooterData = ['Careers', 'Blog', 'Help and Support', 'Affiliate', 'Investors'];
const thirdFooterData = ['Terms', 'Privacy policy', 'Sitemap', 'Accessibility statement'];
const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="footer__details">
                    <div className="footer__grid">
                        {firstFooterData.map((footerdata) => {
                            return (
                                <div className="footer__content">
                                    <li className="footer__items">{footerdata}</li>
                                </div>
                            );
                        })}
                    </div>
                    <div className="footer__grid">
                        {secFooterData.map((footerdata) => {
                            return (
                                <div className="footer__content">
                                    <li className="footer__items">{footerdata}</li>
                                </div>
                            );
                        })}
                    </div>
                    <div className="footer__grid">
                        {thirdFooterData.map((footerdata) => {
                            return (
                                <div className="footer__content">
                                    <li className="footer__items">{footerdata}</li>
                                </div>
                            );
                        })}
                    </div>
                    <div className="footer__btn">
                        <button>English</button>
                    </div>
                </div>
                <div className="logo__and__copyright">
                    <div className="footer__logo">
                        <img
                            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                            alt=""
                        />
                    </div>
                    <div className="footer__copyright">
                        <span>@2021 Dev Nayeem</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
