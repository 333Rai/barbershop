import React from 'react';
import styles from './BarberCard.module.css';

const BarberCard = ({ name, address, socialNetwork, imageURL }) => {
	return (
		<div className={styles.barber}>
			<div className={styles.barber__imageWrap}>
				<img
					className={styles.barber__image}
					src={imageURL}
					alt={name}
				/>
			</div>
			<div className={styles.barber__info}>
				<h3 className={styles.barber__name}>{name}</h3>
				<h4 className={styles.barber__address}>{address}</h4>
				&nbsp;|&nbsp;
				<h4 className={styles.barber__socialNetwork}>
					{socialNetwork}
				</h4>
			</div>
		</div>
	);
};

export default BarberCard;
