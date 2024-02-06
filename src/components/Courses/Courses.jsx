import CourseStyle from './Courses.module.css'
import YouTube from 'react-youtube';

function Courses() {
    return (
        <div className={CourseStyle['course__container']}>
            <h2 className={CourseStyle['course__title']}>Excel</h2>
            <p className={CourseStyle['course__author']}>Muallif haqida : Nabiyev Sardorbek <br /> 22yoshda . Iqtisodiyot Universiteti 4kurs talabasi . <br /> 100dan ortiq kurslar egasi </p>
            <p className={CourseStyle['course__desc']}>Microsoft Excel (baʼzan Microsoft Office Excel deb ataladi) — Microsoft  korporatsiyasi tomonidan Microsoft Windows , Windows NT  va Mac OS , shuningdek Android, iOS ,Windows Phone uchun yaratilgan elektron jadvallar bilan ishlash uchun dastur. U iqtisodiy-statistik hisob-kitoblar, grafik vositalar imkoniyatlarini taqdim etadi. Mac OS X  platformasidagi Excel 2008 ning dasturlash tili VBA (Visual Basic for Application). Microsoft Excel Microsoft Officening tarkibiy qismi hisoblanadi  va bugun Excel dunyodagi eng mashxur ilovalar qatoriga kiradi.</p>
            <ul className={CourseStyle['course__list']}>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="OxOkVF7A9yo"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 1</p>
                        <p className={CourseStyle['course__list-title']}>Excel haqida boshlang`ich tushunchalar</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="IyvlgRf7u3Y"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 2</p>
                        <p className={CourseStyle['course__list-title']}>Excelga kirish</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="L42lLvV4N0A"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 3</p>
                        <p className={CourseStyle['course__list-title']}>Excelda grafiklar bilan ishlash</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="TjPFZaMe2yw"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 4</p>
                        <p className={CourseStyle['course__list-title']}>Excelda jadvallar bilan ishlash</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="roK4g1e28mM"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 5</p>
                        <p className={CourseStyle['course__list-title']}>Excelda formulalardan to`g`ri foydalanish</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="84dYijIpWjQ"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 6</p>
                        <p className={CourseStyle['course__list-title']}>Excelda tayyor dasturlar</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Courses