import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
	return (
		<div className='wrapper'>
			<section id='contacts'>
				<h1 className='section__title'>Контактная информация</h1>
				<p
					className={`section__description ${styles.contacts__description}`}
				>
					Нужна дополнительная информация? Не стесняйтесь обращаться к
					нам для получения дополнительной информации.
				</p>
				<p className={`section__text ${styles.contacts__phone}`}>
					Номер: +996703001555
				</p>
				<p className='section__text'>
					Email: zheenbekov.rai333@gmail.com
				</p>
				<div className={styles.contacts__workingHours}>
					<p>Понедельник - суббота: с 10 утра до 19 вечера</p>
					<p>Воскресенье: с 10 утра до 17 вечера</p>
				</div>
			</section>
		</div>
	);
};

export default Contacts;
