import IntroStyle from './Intro.module.css'
import { FaShare } from "react-icons/fa";

function Intro() {
    return (
        <div className={IntroStyle['intro__container']}>
            <p className={IntroStyle['intro__free']}>Free Online</p>
            <h2 className={IntroStyle['intro__title']}>Uzbek Courses & Certifications</h2>
            <p className={IntroStyle['  ']}>Free online courses and certificates from Berlin University of the Arts, RWTH Aachen <br /> University, TU Munich and other top universities in Germany. Learn Six Sigma, Academic <br /> Writing, Strategic Management and other popular topics.</p>
            <span className={IntroStyle['intro__bottom']}>
                <button className={IntroStyle['intro__bottom-btn']}>
                    <FaShare/>  Share
                </button>
                <p className={IntroStyle['intro__bottom-parag']}>183 courses</p>
            </span>
        </div>
    )
}

export default Intro