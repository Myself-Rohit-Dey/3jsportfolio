import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { services } from '../constants'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import { me } from "../assets"

const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options = {{max:45, scale:1, speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} px-6`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} px-4`}>Overview.</h2>
      </motion.div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse gap-20 px-6">
        <motion.p variants={fadeIn("","", 0.1, 1)} className="mt-4 text-secondary text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]">
          I am a software developer with intermediate-level experience in creating web applications using HTML and CSS. I specialize in using modern frameworks such as React, Node.js, and Three.js to create efficient, scalable, and user-friendly solutions that address real-world problems. As a dedicated learner, I stay up-to-date with the latest technologies and industry best practices to continually enhance my skills. I have collaborated on several open-source projects to create robust and maintainable software solutions, and I strive to apply my knowledge and experience to create high-quality and impactful products to solve real world problems.
        </motion.p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
            <motion.div variants={fadeIn("", "", 0.5, 1)}
              className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
                <img src={me} alt="MyPhoto" className="w-full h-full object-contain"/>
              </div>
            </motion.div>
          </Tilt>
      </div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,"about");


