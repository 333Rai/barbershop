import React from 'react';
import styles from './ShavesCard.module.css';

const ShavesCard = ({ title, durtn, price }) => {
	return (
		<div className={styles.shavesCard}>
			<div>
				<h5 className={styles.title}>{title}</h5>
				<span className={styles.duration}>
					Продолжительность&nbsp;{durtn}
				</span>
			</div>
			<div className={styles.line} />
			<span className={styles.price}>{price} руб.</span>
		</div>
	);
};

export default ShavesCard;
