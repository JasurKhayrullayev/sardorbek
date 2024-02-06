import MainStyle from './Main.module.css'
import { VscSettings } from "react-icons/vsc";
import Person from '../../assets/person.avif'
import Elephent from '../../assets/elephant.webp'
import Essay from '../../assets/essay.webp'
import Pen from '../../assets/pen.webp'
import Len from '../../assets/len.jpeg'
// import White from '../../assets/white.webp'
// import Human from '../../assets/human.webp'
// import Machine from '../../assets/machine.webp'
// import Lamp from '../../assets/lamp.webp'
// import Google from '../../assets/google.avif'
// import Atom from '../../assets/atom.webp'
import { MdOutlineFilterNone , MdSubject } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoMdTime } from "react-icons/io";
import Save from '../../assets/save.png'
import { RiPlayListAddLine } from "react-icons/ri";

function Main({data:initialData}) {

const defaultData = [
    {
        img: Person,
        author: "Excel",
        title: "Grafiklar va formulalar",
        state: "⭐️⭐️⭐️⭐️⭐️",
        decs: "Excelning asosiy funksiyalari, formulalari va ma'lumotlar analizi uchun kerakli ko'nikmalarni o'rganasiz. Bizning kursimiz o'qituvchilarimiz tomonidan rivojlangan darsliklar, amaliy mashqlar va ko'p to'plangan topshiriqlar orqali o'zlashtiriladi.",
        filter: "Sertifikat bilan",
        level: "Yuqori",
        duration: "8-10 soat",
        subject: "MS Office",
    },
    {
        img: Elephent,
        author: "Canva",
        title: "Canva 1 qism",
        state: "⭐️⭐️⭐️⭐️",
        decs: "Canva kursida kreativ dizayn va grafika yaratishda kerak bo'lgan asosiy texnikalarni o'rganasiz. Sizga Canva platformasida dizayn qilish va o'z mashg'ulotlaringizni yaratishda yordam beradi .",
        filter: "Tekin kurs",
        level: "O'rta",
        duration: "2-4 soat",
        subject: "Dizayn",
    },
    {
        img: Essay,
        author: "JavaScript",
        title: "Dasturlash tillarining otasi",
        state: "⭐️⭐️⭐️",
        decs: "JavaScript orqali veb-saytlar yaratish va dinamik web ilovalarini rivojlantirishda yordam beradi.",
        filter: "Sertifikat bilan",
        level: "Yuqori",
        duration: "10+ soat",
        subject: "Dasturlash",
    },
    {
        img: Pen,
        author: "Taym Menejment",
        title: "Vaqtni to'g'ri boshqarish",
        state: "⭐️",
        decs: "Bu 5 darslik kursda siz vaqtdan unumli foydalanishni va unumdorlikni oshirish sirlarini o'rganasiz",
        filter: "Tekin kurs",
        level: "O`rta",
        duration: "2-5 soat",
        subject: "Shaxsiy rivojlanish",
    },
    {
        img: Len,
        author: "Iqtisodiy Modellar",
        title: "Iqtisodiyot kurslari",
        state: "⭐️⭐️⭐️",
        decs: "Iqtisodiy modellar kursimizda klassik, neoklassik, keynsiyen va boshqa modellarga kirish tahlil qilinadi. Bu kurs o'quvchilarga turli iqtisodiy konseptlar va modellarni tushuntiradi, ularning moliyaviy jarayonlarga ta'siri haqida tushunchalar olishga yordam beradi.",
        filter: "Tekin kurs",
        level: "Boshlang'ich",
        duration: "2-4 soat",
        subject: "Ijtimoiy fan",
    },
];

const data = initialData || defaultData;

    return (
        <div className={MainStyle['main__body']}>
            <div className={MainStyle['main__container']}>
            <div className={MainStyle['main__left']}>
                <h3 className={MainStyle['main__left-title']}><VscSettings/>  Filter by</h3>
                <div className={MainStyle['main__left-main']}>
                    <div className={MainStyle['main__left-head']}>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Sertifikat bilan (108)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Tekin kurslar (173)
                        </label>
                    </div>
                    <div className={MainStyle['main__left-body']}>
                        <h3 className={MainStyle['main__left-title']}>Daraja</h3>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Boshlang`ich (42)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> O`rta (25)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Yuqori (171)
                        </label>
                    </div>
                    <div className={MainStyle['main__left-nav']}>
                        <h3 className={MainStyle['main__left-title']}>Davomiyligi</h3>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> 2-5 soat (2)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> 5-10 soat (25)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> 10+ soat (120)
                        </label>
                    </div>
                    <div className={MainStyle['main__left-foot']}>
                        <h3 className={MainStyle['main__left-title']}>Fan va yo`nalishlar</h3>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Biznes (64)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Ijtimoiy fan (13)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Dizayn (9)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Shaxsiy rivojlanish (4)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Sertifikatsiyalar (3)
                        </label>
                    </div>
                    <div className={MainStyle['main__left-foot']}>
                        <h3 className={MainStyle['main__left-title']}>Dasturlash</h3>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Java (64)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Phyton (23)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> C++ / C# (13)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Php (9)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> JavaScript (4)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Sql (3)
                        </label>
                    </div>
                    <div className={MainStyle['main__left-foot']}>
                        <h3 className={MainStyle['main__left-title']}>MS Office</h3>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Word (64)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Excel (23)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> PowerPoint (13)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Outlook (9)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> OneNote (4)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> OneDrive (3)
                        </label>
                    </div>
                </div>
            </div>
            <div className={MainStyle['main__right']}>
                <span className={MainStyle['main__right-head']}>
                    <h3 className={MainStyle['main__right-title']}> <span className={MainStyle['main__right-titleSp']}>Kurslar</span></h3>
                    <select className={MainStyle["main__right-headSelect"]}>
                        <option value="Uz">Sort by Relevancy</option>
                        <option value="Eng">Highest rated</option>
                        <option value="Eng">Lowest rated</option>
                        <option value="Eng">Most recently added</option>
                    </select>
                </span>
                <ul className={MainStyle['main__right-list']}>
                    {data.map((item, index) => (
                        <li key={index}>
                            <a className={MainStyle['main__right-item']} href="courses">
                            <div className={MainStyle['main__item-wrap']}>
                                <div className={MainStyle['main__item-wrapNav']}>
                                    <img width={120} height={80} src={item.img} alt="img" />
                                    <span className={MainStyle['main__item-wrapSp']}>
                                        <h3 className={MainStyle['main__item-wrapAu']}>{item.author}</h3>
                                        <p className={MainStyle['main__item-wrapTit']}>{item.title}</p>
                                        <p className={MainStyle['main__item-wrapSt']}>{item.state}</p>
                                    </span>
                                </div>
                                <p className={MainStyle['main__item-wrapDecs']}>{item.decs}</p>
                                <span className={MainStyle['main__item-wrapFoot']}>
                                    <img className={MainStyle['main__item-wrapIco']}  width={20} height={25} src={Save} alt="save Icon" />
                                    <p className={MainStyle['main__item-wrapAdd']}  ><RiPlayListAddLine/> Add to list </p></span>
                            </div>
                            <div className={MainStyle['main__item-wrapCon']}>
                                <p className={MainStyle['main__item-conFil']}><MdOutlineFilterNone/> {item.filter}</p>
                                <p className={MainStyle['main__item-conLev']}><SiLevelsdotfyi/> {item.level}</p>
                                <p className={MainStyle['main__item-conDur']}><IoMdTime/> {item.duration}</p>
                                <p className={MainStyle['main__item-conSub']}><MdSubject/>{item.subject}</p>
                            </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Main