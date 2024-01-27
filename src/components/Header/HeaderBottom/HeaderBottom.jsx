import React from 'react'
import headerBottomStyle from '../HeaderBottom/HeaderBottom.module.css'
import siteLogo from '../../../assets/sitelogo.svg'
import search from '../../../assets/search.svg'
import line from '../../../assets/line.svg'
import like from '../../../assets/like.svg'
import bag from '../../../assets/bag.svg'
import { Link } from 'react-router-dom'

function HeaderBottom() {
  return (
   <>
   <div className={headerBottomStyle["header__bottom-body"]}>
        <div className={headerBottomStyle["header__bottom-container"]}>
            <a className={headerBottomStyle["header__bottom-logolink"]} href="/">
                <img src={siteLogo} width={114} height={34} alt="site-logo" />
            </a>
            <nav className={headerBottomStyle["header__bottom-nav"]}>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="/">Home</a>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="/">Courses</a>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="/">Pages</a>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="/">Blogs</a>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="/">Contact Us</a>
            </nav>
            <div className={headerBottomStyle["header__bottom-mix"]}>
                <span className={headerBottomStyle["header__bottom-search"]}>
                    <img src={search} alt="search" />
                </span>
                <span className={headerBottomStyle["header__bottom-line"]}>
                    <img width={28} height={28} src={line} alt="line" />
                </span>
                <span className={headerBottomStyle["header__bottom-like"]}>
                    <img width={28} height={28} src={like} alt="like" />
                </span>
                <Link className={headerBottomStyle["header__bottom-bag"]}  to={"#"}>
                    <img width={28} height={28} src={bag} alt="bag" />
                </Link>
            </div>
        </div>
    </div>
   </>
  )
}

export default HeaderBottom