import React from 'react';
import styles from './ClientCard.module.css';

const ClientCard = ({ name, info, feedback }) => {
	return (
		<div className={styles.clientCard}>
			<h3 className={styles.client__name}>{name}</h3>
			<h4 className={styles.client__info}>{info}</h4>
			<p className={styles.client__feedback}>{feedback}</p>
		</div>
	);
};

export default ClientCard;
