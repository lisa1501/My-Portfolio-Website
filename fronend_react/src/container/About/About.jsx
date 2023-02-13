import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap} from '../../wrapper';
import { urlFor, client } from '../../client';

import './About.scss';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query)
            .then((data) => setAbouts(data)
            )
    }, []);
    
    return (
        <>
            <h2 className='head-text'>
                <span> Team </span>
                work
                <span> Dream </span>
                work .
                

            </h2>
            <p class="about-text"> 
                Hello world! Welcome to my programming website, I’m Halisa, an aspiring full stack web developer.
                Utilizing my technical skills and experience to create user friendly and innovative web applications 
                is my expertise. I’m proficient with but not limited to JavaScript, React, Java, Spring Boot  and PostgreSQL .
            </p>
            
            <div >
            
                <div className='app__abouts-container'>
                {abouts.map((about,index)=>(

                    <motion.div
                        whileInView={{ opacity:1}}
                        whileHover={{ scale:1.1}}
                        transition={{ duration:0.5, type:"tween" }}
                        className="app__profile-item"
                        key={about.title+index}>
                        <img src={urlFor(about.imgUrl)} alt={about.title}/>
                        <h2 className="bold-text" style={{ marginTop:20 }}>{about.title}</h2>
                        {/* <p className="p-text" style={{ marginTop:10 }}>{about.description}</p> */}
                    </motion.div>
                ))}
                </div>
            </div>
            <p class="about-text"> 
                My chemist and multi-languages background helps me to learn programming languages and frameworks quickly 
                and apply programming in a focused and detail-oriented way, which allows me to construct
                organized and documented code. Having lived in Asia, Europe and North America, I’m always 
                willing to learn and adapt, which prepares me for thriving in a global, fast-paced, ever-changing 
                enterprise environment. As a committed team player, I encourage open communication and positive 
                reinforcement which leads to productive and effective outcomes of teamwork.
            </p>
            <p class="about-text">In addition to coding and programming, you’ll find me hiking with my friends in the 
                bay area, baking different pastries, reading or workingout at the gym in the morning.
            </p>
        </>
    )
}

export default AppWrap(
    MotionWrap(About,'app__about'),
        'about',
        'app__whitebg'
        );