import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div id='hero' className={styles.hero}>
			<h1 className='title'>
				Парикмахерский салон. <br /> Парикмахерская
			</h1>
			<h4 className='subtitle'>
				уверенность в себе. ухаживающий. образ жизни
			</h4>
		</div>
	);
};

export default Hero;
