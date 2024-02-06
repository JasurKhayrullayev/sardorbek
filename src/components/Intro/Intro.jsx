import IntroStyle from './Intro.module.css'
import { FaShare } from "react-icons/fa";

function Intro() {
    return (
        <div className={IntroStyle['intro__container']}>
            <p className={IntroStyle['intro__free']}>Onlayn darslar</p>
            <h2 className={IntroStyle['intro__title']}>Kurslar & Sertifikatsiyalar</h2>
            <p className={IntroStyle['intro__parag']}>Xush kelibsiz veb-saytimizga! <br /> Bizning kurslarimiz sizni o'rganish va rivojlantirishga yo'l ochishga yordam beradi. <br /> Boshlash uchun, kurslarimizni ko'ring va o'zingiz uchun eng muhim mavzularni tanlang. <br /> Bizning jamoa sizni o'z vaqtingiz va maqsadingizga qarab yordam berishga tayyor!</p>
            <span className={IntroStyle['intro__bottom']}>
                <button className={IntroStyle['intro__bottom-btn']}>
                    <FaShare/>  Ulashish
                </button>
                <p className={IntroStyle['intro__bottom-parag']}>10 kurslar</p>
            </span>
        </div>
    )
}

export default Intro