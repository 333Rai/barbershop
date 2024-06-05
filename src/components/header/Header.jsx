import React from 'react';
import styles from './Header.module.css';

const Header = () => {
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
		<header id={styles.header}>
			<div className='wrapper'>
				<header className={styles.header}>
					<div className={styles.leftPart}>
						<a
							onClick={handleSmoothScroll}
							className={styles.leftPart__logo}
							href='#hero'
						>
							Grooming Gents
						</a>
					</div>
					<nav className={styles.rightPart}>
						<ul className={styles.rightPart__list}>
							<li className={styles.rightPart__item}>
								<a
									onClick={handleSmoothScroll}
									className={styles.rightPart__link}
									href='#about'
								>
									О нас
								</a>
							</li>
							<li className={styles.rightPart__item}>
								<a
									onClick={handleSmoothScroll}
									className={styles.rightPart__link}
									href='#services'
								>
									Услуги
								</a>
							</li>
							<li className={styles.rightPart__item}>
								<a
									onClick={handleSmoothScroll}
									className={styles.rightPart__link}
									href='#barbers'
								>
									Парикмахеры
								</a>
							</li>
							<li className={styles.rightPart__item}>
								<a
									onClick={handleSmoothScroll}
									className={styles.rightPart__link}
									href='#pricing'
								>
									Цены
								</a>
							</li>
							<li className={styles.rightPart__item}>
								<a
									onClick={handleSmoothScroll}
									className={styles.rightPart__link}
									href='#appointment'
								>
									Записаться
								</a>
							</li>
							<li className={styles.rightPart__item}>
								<a
									onClick={handleSmoothScroll}
									className={styles.rightPart__link}
									href='#contacts'
								>
									Контакты
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		</header>
	);
};

export default Header;
