import React from "react";
import { motion } from "framer-motion"
import { BallCanvas } from "./canvas"
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>My tools</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");