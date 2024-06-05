import React from 'react';
import styles from './Shaves.module.css';
import ShavesCard from './shaves_card/ShavesCard';

const Shaves = () => {
	const duration = '30 минут';
	const kinds = [
		{
			title: 'ФИРМЕННОЕ БРИТЬЕ',
			price: 370,
			duration: '1 час',
		},
		{
			title: '',
			price: 400,
			duration,
		},
		{
			title: 'РОСКОШНОЕ ГОРЯЧЕЕ БРИТЬЕ',
			price: 550,
			duration,
		},
		{
			title: 'ФИРМЕННОЕ ГОРЯЧЕЕ БРИТЬЕ',
			price: 500,
			duration,
		},
		{
			title: 'БРИТВА ДЛЯ БРИТЬЯ',
			price: 350,
			duration,
		},
	];
	return (
		<div className={styles.shaves}>
			<h1 className={styles.shaves__title}>Горячее бритье</h1>
			<div className={styles.shaves__kinds}>
				{kinds.map((elem) => (
					<ShavesCard
						key={elem.title}
						title={elem.title}
						durtn={elem.duration}
						price={elem.price}
					/>
				))}
			</div>
		</div>
	);
};

export default Shaves;
