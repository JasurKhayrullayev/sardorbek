import React from 'react'
import footerStyle from '../Footer/Footer.module.css'
import sitelogo from '../../assets/sitelogo.svg'
import facebookNew from '../../assets/facebook-new.svg'
import twitterNew from '../../assets/twitter-new.svg'
import youtubeNew from '../../assets/youtube-new.svg'
import instagramNew from '../../assets/instagram-new.svg'
import blueLine from '../../assets/blueline.svg'
import cards from '../../assets/cards.png'

function Footer() {
  return (
    <div>
        <div className={footerStyle["footer__top"]}>
            <div className={footerStyle["footer__container"]}>
                <div className={footerStyle["footer__team"]}>
                    <a className={footerStyle["footer__logo"]} href="/  ">
                        <img className={footerStyle["footer__logo-img"]} src={sitelogo} alt="sitelogo" />
                    </a>
                    <p className={footerStyle["footer__team-parag"]}>Class Central aggregates courses from many providers to help you find the best courses on almost any subject, wherever they exist.
                    </p>
                    <ul className={footerStyle["footer__team-list"]}>
                        <li className={footerStyle["footer__team-listitem"]}>
                            <a className={footerStyle["footer__team-listlink"]} href="https://www.facebook.com/">
                                <img  src={facebookNew} alt="facebook" />
                            </a>
                        </li>
                        <li className={footerStyle["footer__team-listitem"]}>
                            <a className={footerStyle["footer__team-listlink"]} href="https://twitter.com/">
                                <img  src={twitterNew} alt="twitter" />
                            </a>
                        </li>
                        <li className={footerStyle["footer__team-listitem"]}>
                            <a className={footerStyle["footer__team-listlink"]} href="https://www.youtube.com/">
                                <img  src={youtubeNew} alt="youtube" />
                            </a>
                        </li>
                        <li className={footerStyle["footer__team-listitem"]}>
                            <a className={footerStyle["footer__team-listlink"]} href="https://www.instagram.com/">
                                <img  src={instagramNew} alt="instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={footerStyle["footer__information"]}>
                    <h3 className={footerStyle["footer__information-title"]}>Information</h3>
                    <img src={blueLine} alt="line" />
                    <nav className={footerStyle["footer__information-nav"]}>
                        <a className={footerStyle["footer__information-navlink"]} href="/">About Us</a>
                        <a className={footerStyle["footer__information-navlink"]} href="/">Payment</a>
                        <a className={footerStyle["footer__information-navlink"]} href="/">Contact Us</a>
                        <a className={footerStyle["footer__information-navlink"]} href="/">Learning Centers</a>
                    </nav>
                </div>
                <div className={footerStyle["footer__social"]}>
                    <h3 className={footerStyle["footer__social-title"]}>Social Links</h3>
                    <img src={blueLine} alt="line" />
                    <nav className={footerStyle["footer__social-nav"]}>
                        <a className={footerStyle["footer__social-navlink"]} href="/">New Courses</a>
                        <a className={footerStyle["footer__social-navlink"]} href="/">Best Subject</a>
                        <a className={footerStyle["footer__social-navlink"]} href="/">Login</a>
                        <a className={footerStyle["footer__social-navlink"]} href="/">My Account</a>
                    </nav>
                </div>
                <div className={footerStyle["footer__newsletter"]}>
                    <h3 className={footerStyle["footer__newsletter-title"]}>Newsletter</h3>
                    <img src={blueLine} alt="line" />
                    <p className={footerStyle["footer__newsletter-parag"]}>9000 Free Courses from Tech Giants: Learn from Google, Microsoft, Amazon, and More</p>
                    <form className={footerStyle["footer__form"]}>
                        <input className={footerStyle["footer__form-text"]} type="email" placeholder='Your email address'/>
                        <button className={footerStyle["footer__form-btn"]}>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
        <div className={footerStyle["footer__bottom"]}>
            <div className={footerStyle["footer__container-new"]}>
                <p className={footerStyle["footer__bottom-parag"]}>Copyright © <span className={footerStyle["footer__container-theme"]}>HasThemes</span> . All Rights Reserved</p>
                <img height={25} src={cards} alt="cards" />
            </div>
        </div>
    </div>
  )
}

export default Footer