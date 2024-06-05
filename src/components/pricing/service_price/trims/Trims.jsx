import React from 'react';
import styles from './Trims.module.css';
import TrimsCard from './trims_card/TrimsCard';

const Trims = () => {
	const kinds = [
		{
			id: 1,
			title: 'ФИРМЕННАЯ ЧИСТКА',
			price: 800,
			duration: '15 минут',
		},
		{
			id: 2,
			title: 'ГЛУБОКАЯ ЧИСТКА',
			price: 900,
			duration: '30 минут',
		},
		{
			id: 3,
			title: 'КОЖА УВЯДАЕТ',
			price: 850,
			duration: '30 минут',
		},
		{
			id: 4,
			title: 'ОБЫЧНАЯ ЧИСТКА',
			price: 770,
			duration: '1 час',
		},
	];
	return (
		<div className={styles.trims}>
			<h1 className={styles.trims__title}>Чистка лица</h1>
			<div className={styles.trims__kinds}>
				{kinds.map((elem) => (
					<TrimsCard
						key={elem.id}
						title={elem.title}
						durtn={elem.duration}
						price={elem.price}
					/>
				))}
			</div>
		</div>
	);
};

export default Trims;
