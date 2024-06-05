import { Slide } from '@mui/material';
import React, { useState } from 'react';
import appointmentService from '../../services/appointmentService';
import Snackbar from '../UI/snackbar/Snackbar';
import styles from './Appointment.module.css';
import AppointmentForm from './appointment_form/AppointmentForm';

const Appointment = () => {
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
		severity: '',
		Transition: Slide,
	});
	const [data, setData] = useState({
		name: '',
		email: '',
		phone: '',
		date: '',
		time: '',
		barber: 'Мария Кузнецова',
		service: 'Стрижки',
	});
	const dataChangeHandler = (name) => {
		return (event) => {
			const { value } = event.target;
			setData((prevState) => ({ ...prevState, [name]: value }));
		};
	};
	const submitHandler = async (event) => {
		event.preventDefault();
		try {
			const res = await appointmentService.makeAnAppointment(data);
			setSnackbar((prevState) => ({
				...prevState,
				open: true,
				message: 'You have successfully made an appointment!!',
				severity: 'success',
			}));
		} catch (error) {
			setSnackbar((prevState) => ({
				...prevState,
				open: true,
				message: 'An error has occurred(',
				severity: 'error',
			}));
		}
	};
	const snackbarCloseHandler = () => {
		setSnackbar((prevState) => ({
			...prevState,
			open: false,
			message: '',
			severity: '',
		}));
	};
	return (
		<>
			<Snackbar {...snackbar} handleClose={snackbarCloseHandler} />
			<div className='wrapper'>
				<section id='appointment' className={styles.appointment}>
					<h1 className='section__title'>Записаться на прием</h1>
					<p className='section__subtitle'>Закажите Свою услугу</p>
					<p
						className={`section__text ${styles.appointment__description}`}
					>
						Подпишитесь на нашу рассылку новостей и получайте
						максимум информации от нашего сообщества советы о
						прическах и бороде, которые помогут улучшить ваш образ
						жизни
					</p>
					<AppointmentForm
						onSubmit={submitHandler}
						onChange={dataChangeHandler}
					/>
				</section>
			</div>
		</>
	);
};

export default Appointment;
