import React, { useState } from 'react';
import styles from './Pricing.module.css';
import Haircuts from './service_price/haircuts/Haircuts';
import Shaves from './service_price/shaves/Shaves';
import Trims from './service_price/trims/Trims';

const Pricing = () => {
	const [isActive, setActive] = useState(0);
	const toggleActiveHandler = (idx) => {
		return () => setActive(idx);
	};
	const services = [
		{
			label: 'Бритье',
			component: <Shaves />,
		},
		{
			label: 'стрижки',
			component: <Haircuts />,
		},
		{
			label: 'Чистка',
			component: <Trims />,
		},
	];
	return (
		<div className='wrapper'>
			<section id='pricing' className={styles.pricing}>
				<h1 className='section__title'>Цены на услуги парикмахера</h1>
				<p className='section__subtitle'>Информация о ценах</p>
				<div className={styles.pricing__buttons}>
					{services.map((elem, idx) => (
						<button
							key={elem.label}
							className={`${styles.pricing__button} ${
								idx === isActive ? styles.active : ''
							}`}
							onClick={toggleActiveHandler(idx)}
						>
							{elem.label}
						</button>
					))}
				</div>
				<div className={styles.pricing__content}>
					{services[isActive].component}
				</div>
			</section>
		</div>
	);
};

export default Pricing;
