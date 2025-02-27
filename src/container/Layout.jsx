import React from 'react';
import {
	Navbar,
	Hero,
	About,
	Contact,
	Experience,
	Feedbacks,
	Tech,
	Works,
	StarsCanvas,
} from './../components';

const Layout = () => {
	return (
		<>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
					<Navbar />
					<Hero />
				</div>
			</div>
			<div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<Contact />
				<StarsCanvas />
			</div>
		</>
	);
};

export default Layout;
