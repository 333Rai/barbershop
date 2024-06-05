import React from 'react';
import Background from '../../assets/images/back-img.jpg';
import Signature from '../../assets/images/signature.png';
import styles from './About.module.css';

const About = () => {
	return (
		<div className='wrapper'>
			<section id='about' className={styles.about}>
				<h1 className='section__title'>О парикмахере</h1>
				<p className='section__subtitle'>
					Наша История начинается здесь
				</p>
				<img
					className={styles.about__background}
					src={Background}
					alt='about-background'
				/>
				<p className={styles.about__description}>
					ДОБРО ПОЖАЛОВАТЬ В ПАРИКМАХЕРСКУЮ БАРБИ И ПАРИКМАХЕРСКУЮ -
					УХОД ЗА СОБОЙ, СТИЛЬ ЖИЗНИ И УВЕРЕННОСТЬ В СЕБЕ
				</p>
				<h4 className={styles.about__infoTitle}>
					ТЕРРИТОРИЯ ВЫСОЧАЙШЕГО КАЧЕСТВА С 1990 ГОДА
				</h4>
				<p className={styles.about__infoDescription}>
					Наша миссия – предоставить вам лучший сервис, учитывая все
					ваши индивидуальные предпочтения и стиль. Мы понимаем, что
					стрижка – это не просто рутина, а важная часть вашего образа
					и самовыражения. Именно поэтому каждый визит к нам
					становится настоящим ритуалом, во время которого вы сможете
					расслабиться, насладиться профессиональным обслуживанием и
					обновить свой внешний вид.
				</p>
				<img
					className={styles.about__sing}
					src={Signature}
					alt='signature'
				/>
			</section>
		</div>
	);
};

export default About;
