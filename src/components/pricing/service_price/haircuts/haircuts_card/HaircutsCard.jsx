import React from 'react';
import styles from './HaircutsCard.module.css';

const HaircutsCard = ({ title, durtn, price }) => {
	return (
		<div className={styles.haircutsCard}>
			<div>
				<h5 className={styles.title}>{title}</h5>
				<span className={styles.duration}>
					Продолжительность&nbsp;{durtn}
				</span>
			</div>
			<div className={styles.line} />
			<span className={styles.price}>{price} сом</span>
		</div>
	);
};

export default HaircutsCard;
