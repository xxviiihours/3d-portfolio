import React from 'react';
import { motion } from 'motion/react';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Technologies</p>
				<h2 className={`${styles.sectionHeadText}`}>My Tech Stack.</h2>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Tech, 'tech');
