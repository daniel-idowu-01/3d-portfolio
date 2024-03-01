import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style';
import { Link } from 'react-router-dom';
import { textVariant, slideIn } from '../utilities/motion';

const CV = () => {

  const btnStyle = "bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold uppercase tracking-wider shadow-md shadow-primary rounded-xl"
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Know more </p>
        <h2 className={`${styles.sectionHeadText}`}>Get CV.</h2>
      </motion.div>
      <motion.div variants={slideIn("up", "spring", 0.3, 1)}>
        <Link
          to='https://drive.google.com/file/d/1-5J7KxNGZnRGcNZjvzBr6OC9lNHYEsOD/view?usp=drive_link'
          target='_blank'
        >
          <button className={btnStyle}>
            Download Cv
          </button>
        </Link>
      </motion.div>
    </>
  );
}

export default CV