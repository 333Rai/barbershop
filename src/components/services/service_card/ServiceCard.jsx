import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service, price }) => {
	return (
		<div className={styles.serviceCard}>
			<h3 className={styles.service__name}>{service}</h3>
			<span className={styles.service__price}>{price} руб.</span>
		</div>
	);
};

export default ServiceCard;
