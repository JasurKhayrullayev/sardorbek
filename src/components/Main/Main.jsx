import MainStyle from './Main.module.css'
import { VscSettings } from "react-icons/vsc";
import Person from '../../assets/person.avif'
import Elephent from '../../assets/elephant.webp'
import Essay from '../../assets/essay.webp'
import Pen from '../../assets/pen.webp'
import Len from '../../assets/len.jpeg'
import White from '../../assets/white.webp'
import Human from '../../assets/human.webp'
import Machine from '../../assets/machine.webp'
import Lamp from '../../assets/lamp.webp'
import Google from '../../assets/google.avif'
import Atom from '../../assets/atom.webp'
import { MdOutlineFilterNone , MdSubject } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoMdTime } from "react-icons/io";
import Save from '../../assets/save.png'
import { RiPlayListAddLine } from "react-icons/ri";

function Main({data:initialData}) {

const defaultData = [
    {
        img: Person,
        author: "Class Central",
        title: "9000 Free Courses from Tech Giants",
        state: "⭐️⭐️⭐️⭐️⭐️",
        decs: "Best Online Courses of All Time",
        filter: "With certificate",
        level: "Beginner",
        duration: "2-5 hours",
        subject: "Business",
    },
    {
        img: Elephent,
        author: "Tum",
        title: "Six Sigma Part 1: Define and Measure",
        state: "⭐️⭐️⭐️⭐️",
        decs: "In this first course of the Six Sigma Program, you will understand the background and meaning of Six Sigma and the five steps of the DMAIC process improvement flow",
        filter: "Free course",
        level: "Intermadiate",
        duration: "5-10 hours",
        subject: "Science",
    },
    {
        img: Essay,
        author: "LMU Munich",
        title: "Academic Writing Made Easy",
        state: "⭐️⭐️⭐️",
        decs: "This MOOC takes you through the basics of academic writing step by step. From structuring and organising an academic text to avoiding common pitfalls that can negatively affect your credibility",
        filter: "Univercity course only",
        level: "Advanced",
        duration: "10+ hours",
        subject: "Computer Science",
    },
    {
        img: Pen,
        author: "RthwAchen Univercity",
        title: "Competitive Strategy",
        state: "⭐️",
        decs: "In this six-module course, you will learn how businesses and organizations behave in situations in which strategic decisions are interdependent",
        filter: "With certificate",
        level: "Beginner",
        duration: "2-5 hours",
        subject: "Engineering",
    },
    {
        img: Len,
        author: "RthwAchen Univercity",
        title: "Lean Six Sigma: Green Belt Sustainability Project",
        state: "⭐️⭐️⭐️",
        decs: "Every employee is involved in business processes to create products or services.",
        filter: "Free course",
        level: "Intermadiate",
        duration: "5-10 hours",
        subject: "Humanities",
    },
    {
        img: White,
        author: "Univers Tasmania",
        title: "Financing Biotech Innovations",
        state: "⭐️⭐️⭐️⭐️⭐️",
        decs: "To harvest the enormous potential of ground-breaking research in the field of biotechnology, large amounts of financing are needed.",
        filter: "Univercity course only",
        level: "Advanced",
        duration: "10+ hours",
        subject: "Social Sciences",
    },
    {
        img: Human,
        author: "Sarland Academy",
        title: "Customer-Centric Innovation",
        state: "⭐️⭐️⭐️",
        decs: "Addressing the needs of your customers is the core factor of managing innovation successfully. Exactly this is the task of the first stages of an innovation project.",
        filter: "With certificate",
        level: "Beginner",
        duration: "2-5 hours",
        subject: "Programming",
    },
    {
        img: Machine,
        author: "Tum",
        title: "Machine Dynamics with MATLAB",
        state: "⭐️⭐️⭐️⭐️",
        decs: "This course will introduce you to a broad range of methodologies used in the field of machine dynamics.",
        filter: "Free course",
        level: "Intermadiate",
        duration: "5-10 hours",
        subject: "Health & Medicine",
    },
    {
        img: Lamp,
        author: "LMU Munich",
        title: "Einführung in Marketing",
        state: "⭐️⭐️⭐️",
        decs: "In diesem Kurs werden Ihnen die Grundlagen zur strategischen und operativen Gestaltung des Marketings eines Unternehmens vermittelt",
        filter: "Univercity course only",
        level: "Advanced",
        duration: "10+ hours",
        subject: "Art & Design",
    },
    {
        img: Google,
        author: "Class Central",
        title: "(Un-)Heilige Texte Biblische Theologie",
        state: "⭐️⭐️⭐️⭐️⭐️",
        decs: "Best Online Courses of All Time",
        filter: "With certificate",
        level: "Beginner",
        duration: "2-5 hours",
        subject: "Mathematics",
    },
    {
        img: Atom,
        author: "Tum",
        title: " 600 Free Google Certifications",
        state: "⭐️⭐️⭐️⭐️",
        decs: "In this first course of the Six Sigma Program, you will understand the background and meaning of Six Sigma and the five steps of the DMAIC process improvement flow",
        filter: "Free course",
        level: "Intermadiate",
        duration: "5-10 hours",
        subject: "Personal Development",
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
                            <input type="checkbox"/> With certificate (108)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Free course (173)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Univercity course only (171)
                        </label>
                    </div>
                    <div className={MainStyle['main__left-body']}>
                        <h3 className={MainStyle['main__left-title']}>Level</h3>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Beginner (42)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Intermadiate (25)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Advanced (171)
                        </label>
                    </div>
                    <div className={MainStyle['main__left-nav']}>
                        <h3 className={MainStyle['main__left-title']}>Duration</h3>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> 2-5 hours (2)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> 5-10 hours (25)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> 10+ hours (120)
                        </label>
                    </div>
                    <div className={MainStyle['main__left-foot']}>
                        <h3 className={MainStyle['main__left-title']}>Subject</h3>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Business (64)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Science (23)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Computer Science (15)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Engineering (15)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Humanities (13)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Social Sciences (13)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Programming (12)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Health & Medicine (10)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Art & Design (9)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/>  Mathematics (4)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Personal Development (4)
                        </label>
                        <label className={MainStyle['main__left-item']}>
                            <input type="checkbox"/> Certifications (3)
                        </label>
                    </div>
                </div>
            </div>
            <div className={MainStyle['main__right']}>
                <span className={MainStyle['main__right-head']}>
                    <h3 className={MainStyle['main__right-title']}>Showing <span className={MainStyle['main__right-titleSp']}>183 Courses</span></h3>
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