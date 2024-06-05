import React from 'react';
import Slider from 'react-slick';
import styles from './Clients.module.css';
import ClientCard from './client_card/ClientCard';

const Clients = () => {
	const clients = [
		{
			name: 'Богдан Стащюк',
			info: 'Клиент на 2 года',
			feedback:
				'Если вы хотите, чтобы стрижка или бритье изменили вашу жизнь, вам нужно обратиться к парикмахеру',
		},
		{
			name: 'Владилен Минин',
			info: 'Клиент на 1 год',
			feedback:
				'Я показал ему фотографию, и он поднял ее на новый уровень, и этот образ подошел мне больше всего',
		},
		{
			name: 'Рай Жээнбеков',
			info: 'Клиент на 3 года',
			feedback:
				'Я часто посещаю эту парикмахерскую. Мне нравится его обслуживание. Я доволен работой всех парикмахеров этой парикмахерской',
		},
	];
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
	};
	return (
		<div id={styles.clients}>
			<div className='wrapper'>
				<div className={styles.clients}>
					<Slider {...sliderSettings}>
						{clients.map((client) => (
							<ClientCard
								key={client.name}
								name={client.name}
								info={client.info}
								feedback={client.feedback}
							/>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Clients;
