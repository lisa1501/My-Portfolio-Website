import React,{ useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {

    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
    const [abouts, setAbouts] = useState([]);
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }
    



    useEffect(() =>{
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';
        const aboutsQuery = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => {
                setExperiences(data);
            })

        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data);
            })
        client.fetch(aboutsQuery)
            .then((data) => {
                setAbouts(data);
            })
        
    },[])
    return (
        <>
            <h2 className='head-text'>Skills & Experience</h2>
            <div className='app__skills-container'>
                <motion.div className='app__skills-list'>
                    {skills.map((skill)=>(
                        <motion.div
                            whileInView={{opacity:[0,1]}}
                            transition={{duration:0.5}}
                            className="app__skills-item app__flex"
                            key={skill.name}
                            >
                            <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                <img src={urlFor(skill.icon)} alt={skill.name}/>
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className='app__skills-exp'>
                    {experiences.map((experience)=>(
                        <motion.div
                        className="app__skills-exp-item"
                        key={experience.year}
                        >
                        <div className="app__skills-exp-year">
                            <p className="bold-text">{experience.year}</p>
                        </div>
                        <motion.div className="app__skills-exp-works">
                        {experience.works.map((work) => (
                        <>
                            <motion.div
                                whileInView={{opacity:[0,1]}}
                                transition={{duration:0.5}}
                                className="app__skills-exp-work"
                                data-tip 
                                data-for={work.name}
                                key={work.name}
                                >
                                    <h4 className="bold-text">{work.name}</h4>
                                    <p className="p-text">{work.company}</p>
                            </motion.div>
                            <Tooltip
                                id={work.name}
                                effect="solid"
                                arrowColor="#fff"
                                className="skills-tooltip"
                                >
                                {work.desc}
                            </Tooltip>
                        </>
                        ))}
                        </motion.div>
                        </motion.div>
                    ))}
                  
                    {/* <motion.div className='app__certificate-list'>
                    {abouts.map((about,index)=>(
                        <motion.div 
                        whileInView={{ opacity:1}}
                        whileHover={{ scale:1.1,  borderRadius: '15px'}}
                        transition={{ duration:0.5, type:"tween" }}
                        className="app__certificate-item app__flex"
                        key={about.title+index}
                        onClick={onClickUrl(about.imgLink)}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title}  />
                        <h4 className="bold-text" style={{ marginTop:20 }} >{about.title}</h4>
                        </motion.div>
                    ))}
                </motion.div> */}
                        <motion.div
                            className="app__certs-list"
                        >
                            {abouts.map((about,index)=>(
                                <motion.div
                                    whileInView={{opacity:1}}
                                    whileHover={{ scale:1.1,  borderRadius: '15px'}}
                                    transition={{duration:0.5}}
                                    className="app__certs-item app__flex"
                                    key={about.title+index}
                                    onClick={onClickUrl(about.imgLink)}
                                >
                                    
                                        <div className='app__flex' style={{backgroundColor: 'white'}}> 
                                            <img src={urlFor(about.imgUrl)} alt={about.title}  />
                                        </div>
                                            <p className="bold-text" >{about.title}</p>
                                </motion.div>
                                
                            ))}
                        </motion.div>
                    </div>
                    
                    
                </div>
                
    
           
            
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills,'app__skills'),
        'skills',
        'app__whitebg'
        );