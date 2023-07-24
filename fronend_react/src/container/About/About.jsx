import React from 'react';
import { AppWrap, MotionWrap} from '../../wrapper';
import './About.scss';

const About = () => {

    return (
        <>
            <h2 className='head-text'>
                Make It
                <span> Work </span>
                , Make It
                <span> Right </span>
                , Make It
                <span> Fast </span>
                . --
                <span> Kent Beck </span>
                

            </h2>
            <p class="about-text"> 
                Hello world! Welcome to my programming website, I’m Halisa, an aspiring full stack web developer. 
                Utilizing my technical skills and experience to create user friendly and innovative web applications is my expertise. I’m proficient with but not limited to JavaScript, React, Java, Spring Boot.
            </p>
            
            
            <p class="about-text"> 
                My chemist background helps me to learn programming languages and frameworks quickly and apply programming in a focused and detail-oriented way, which allows me to construct organized and documented code. 
                Having lived in Asia, Europe and North America, I’m always willing to learn and adapt, which prepares me for thriving in a global, fast-paced, ever-changing enterprise environment. As a committed team player, 
                I encourage open communication and positive reinforcement which leads to productive and effective outcomes of teamwork.
            </p>
            <p class="about-text">
                In addition to coding and programming, I enjoy hiking with my friends in the bay area, baking, reading or working out in the morning at Strength Camp SF.
            </p>
            
        </>
    )
}

export default AppWrap(
    MotionWrap(About,'app__about'),
        'about',
        'app__whitebg'
        );