import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer } from '../utils/motion';
import { styles } from '../styles';

// Higher order component to wrap sections
// This component will be used to wrap all sections in the app
const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
			>
				<span className='hash-span' id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
