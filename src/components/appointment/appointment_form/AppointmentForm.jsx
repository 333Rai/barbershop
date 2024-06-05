import React from 'react';
import styles from './AppointmentForm.module.css';

const AppointmentForm = ({ onSubmit, onChange }) => {
	return (
		<form className={styles.appointmentForm} onSubmit={onSubmit}>
			<div className={styles.appointmentForm__content}>
				<div className={styles.appointmentForm__leftPart}>
					<label className={styles.appointmentForm__label}>
						Ваше имя:
						<input
							onChange={onChange('name')}
							className={styles.appointmentForm__input}
							type='text'
						/>
					</label>
					<label className={styles.appointmentForm__label}>
						Ваш email:
						<input
							onChange={onChange('email')}
							className={styles.appointmentForm__input}
							type='email'
						/>
					</label>
					<label className={styles.appointmentForm__label}>
						Ваш номер телефона:
						<input
							onChange={onChange('phone')}
							className={styles.appointmentForm__input}
							type='tel'
						/>
					</label>
				</div>
				<div className={styles.appointmentForm__rightPart}>
					<label className={styles.appointmentForm__label}>
						Дата:
						<input
							onChange={onChange('date')}
							className={styles.appointmentForm__input}
							type='date'
							min='2024-05-28'
							max='2024-12-31'
						/>
					</label>
					<label className={styles.appointmentForm__label}>
						Время:
						<input
							onChange={onChange('time')}
							className={styles.appointmentForm__input}
							type='time'
							min='2024-05-28'
							max='2024-12-31'
						/>
					</label>
					<label className={styles.appointmentForm__label}>
						Выберите парикмахера:
						<select
							onChange={onChange('barber')}
							className={styles.appointmentForm__select}
						>
							<option value='Josh Amstrong'>
								Мария Кузнецова
							</option>
							<option value='Jenny Morano'>
								Алексей Смирнов
							</option>
							<option value='Alberto Morano'>
								Елена Иванова
							</option>
						</select>
					</label>
				</div>
			</div>
			<label className={styles.appointmentForm__label}>
				Услуга:
				<select
					onChange={onChange('service')}
					className={styles.appointmentForm__select}
				>
					<option value='shaves'>Бритье</option>
					<option value='haircuts'>Стрижки</option>
					<option value='trims'>Чистка лица</option>
				</select>
			</label>
			<button className={styles.appointmentForm__button}>
				запишитесь на прием
			</button>
		</form>
	);
};

export default AppointmentForm;
