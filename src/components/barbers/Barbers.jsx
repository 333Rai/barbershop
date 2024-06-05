import React from 'react';
import styles from './Barbers.module.css';
import BarberCard from './barber_card/BarberCard';

const Barbers = () => {
	const barbers = [
		{
			name: 'Мария Кузнецова',
			address: 'Москва',
			socialNetwork: '@maria_mi',
			imageURL:
				'https://clutch.net.ua/crops/3f695e/360x0/1/0/2020/05/12/QL3gRwRLhF24fOFcGr2gODewabCc2shfEYrpAMfl.jpeg',
		},
		{
			name: 'Алексей Смирнов',
			address: 'Москва',
			socialNetwork: '@alex_sm',
			imageURL:
				'https://s1.sharewood.co/attachments/roman-mednyj-vse-o-beauty-makijazh-i-pricheska-v-obraze.20423/',
		},
		{
			name: 'Елена Иванова',
			address: 'Москва',
			socialNetwork: '@ivanv_el',
			imageURL:
				'https://viridiland.com/uploads/images-thumbs/speaker/350x450/50-image-319f8cbee2e970cae3e8eae4b2482864.jpg',
		},
	];
	return (
		<div className='wrapper'>
			<section id='barbers' className={styles.barbers}>
				<h1 className='section__title'>Команда парикмахеров</h1>
				<p className='section__subtitle'>
					Познакомьтесь с командой парикмахеров
				</p>
				<div className={styles.barbers__cards}>
					{barbers.map((barber) => (
						<BarberCard
							key={barber.name}
							name={barber.name}
							address={barber.address}
							socialNetwork={barber.socialNetwork}
							imageURL={barber.imageURL}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Barbers;
