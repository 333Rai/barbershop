import React from 'react';
import styles from './Haircuts.module.css';
import HaircutsCard from './haircuts_card/HaircutsCard';

const Haircuts = () => {
	const kinds = [
		{
			id: 1,
			title: 'Стрижка',
			price: 400,
			duration: '30 минут',
		},
		{
			id: 2,
			title: 'Детская',
			price: 400,
			duration: '30 минут',
		},
		{
			id: 3,
			title: 'СТРИЖКА И ПОДРАВНИВАНИЕ БОРОДЫ',
			price: 450,
			duration: 'one hour',
		},
		{
			id: 4,
			title: 'ПРИВЕДИ СЕБЯ В ПОРЯДОК',
			price: 500,
			duration: '35 минут',
		},
		{
			id: 5,
			title: 'Спортивная',
			price: 400,
			duration: '10 минут',
		},
		{
			id: 6,
			title: 'Модельная',
			price: 430,
			duration: '10 минут',
		},
	];
	return (
		<div className={styles.haircuts}>
			<h1 className={styles.haircuts__title}>Стрижки</h1>
			<div className={styles.haircuts__kinds}>
				{kinds.map((elem) => (
					<HaircutsCard
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

export default Haircuts;
