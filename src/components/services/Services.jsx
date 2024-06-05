import React from 'react';
import styles from './Services.module.css';
import ServiceCard from './service_card/ServiceCard';

const Services = () => {
	const services = [
		{
			service: 'Бритье',
			price: 'От 350',
		},
		{
			service: 'Стрижка',
			price: 'От 400',
		},
		{
			service: 'Чистка лица',
			price: 'От 770',
		},
		{
			service: 'Подстригание бороды',
			price: 'От 300',
		},
		{
			service: 'Детские стрижки',
			price: 'От 330',
		},
	];
	const handleSmoothScroll = (event) => {
		event.preventDefault();
		const targetID = event.currentTarget.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetID);

		window.scrollTo({
			top: targetElement.offsetTop,
			behavior: 'smooth',
		});
	};
	return (
		<div className='wrapper'>
			<section id='services' className={styles.services}>
				<h1 className='section__title'>Услуги парикмахера</h1>
				<p className='section__subtitle'>
					Бесплатный Напиток При Каждой Услуге
				</p>
				<div className={styles.services__cards}>
					{services.map((item) => (
						<ServiceCard
							key={item.service}
							service={item.service}
							price={item.price}
						/>
					))}
					<a
						href='#appointment'
						className={styles.appointment}
						onClick={handleSmoothScroll}
					>
						запишитесь <br /> на прием
					</a>
				</div>
			</section>
		</div>
	);
};

export default Services;
