import CourseStyle from './Courses.module.css'
import YouTube from 'react-youtube';

function Courses() {
    return (
        <div className={CourseStyle['course__container']}>
            <h2 className={CourseStyle['course__title']}>Course title</h2>
            <p className={CourseStyle['course__author']}>About Author : Nabiyev Sardorbek </p>
            <p className={CourseStyle['course__desc']}>Some descriptions about Course Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quisquam architecto amet doloribus saepe unde aspernatur quis sequi vel suscipit, <br /> voluptatibus officia perferendis sed explicabo cum recusandae et maxime animi magni! <br /> Iusto magnam consequatur veritatis rem fuga quae quos laudantium illum accusantium! Porro eaque sint enim autem quaerat quo ipsa exercitationem?</p>
            <ul className={CourseStyle['course__list']}>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="OxOkVF7A9yo"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 1</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="IyvlgRf7u3Y"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 2</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="L42lLvV4N0A"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 3</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="TjPFZaMe2yw"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 4</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="roK4g1e28mM"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 5</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="84dYijIpWjQ"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 6</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="iNdBtrcFlCs"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 7</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="aID9nqvkTvk"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 8</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="aID9nqvkTvk"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 9</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
                <li className={CourseStyle['course__list-item']}>
                    <YouTube className={CourseStyle['course__list-youtube']} videoId="aID9nqvkTvk"/>
                    <span className={CourseStyle['course__list-wrap']}>
                        <p className={CourseStyle['course__list-pr']}>lesson 10</p>
                        <p className={CourseStyle['course__list-title']}>Elon Mask Lorem ipsum dolor sit amet.</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Courses