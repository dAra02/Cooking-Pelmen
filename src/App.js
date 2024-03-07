import db from './db.json';
import style from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [steps] = useState(db);
	const [activeIndex, setActiveIndex] = useState(0);

	const chagVper = () => {
		setActiveIndex((element) => element + 1);
	};

	const chagNazat = () => {
		setActiveIndex((element) => element - 1);
	};

	const restart = () => {
		setActiveIndex(0);
	};

	let nachalo = activeIndex === 0;
	let endChag = activeIndex === steps.length - 1;

	return (
		<div className={style.container}>
			<div className={style.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={style.steps}>
					<div className={style['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={style['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li
								key={id}
								className={
									style['steps-item'] +
									(index === activeIndex ? ` ${style.active}` : '') +
									(index < activeIndex ? ` ${style.done}` : '')
								}
							>
								<button className={style['steps-item-button']} onClick={() => setActiveIndex(index)}>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={style['buttons-container']}>
						<button className={style.button} onClick={chagNazat} disabled={nachalo}>
							Назад
						</button>
						<button className={style.button} onClick={() => (endChag ? restart() : chagVper())}>
							{endChag ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
