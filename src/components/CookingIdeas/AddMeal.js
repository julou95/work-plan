import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon, { icons, sizes } from '../Icon/Icon';
import Modal from '../Modal/Modal';

import styles from './AddMeal.scss';

const days = [
	'SO',
	'MO',
	'DI',
	'MI',
	'DO',
	'FR',
	'SA',
];

const AddMeal = ({ saveMeal, closeModal, entry = { title: '', description: '', date: new Date() }, removeMeal = () => {} }) => {
	const today = new Date(entry.date);
	const [title, setTitle] = useState(entry.title);
	const [description, setDescription] = useState(entry.description);
	const [year, setYear] = useState(today.getFullYear());
	const [month, setMonth] = useState(today.getMonth());
	const [day, setDay] = useState(today.getDate());

	const getWeekDay = () => {
		const newDate = new Date(year, month, day);
		return days[newDate.getDay()]
	};

	const changeDate = (change = 1) => {
		const newDate = new Date(year, month, day+change);
		setYear(newDate.getFullYear());
		setMonth(newDate.getMonth());
		setDay(newDate.getDate());
	};

	const addNewMeal = () => {
		saveMeal({
			id: entry.id,
			title,
			description,
			date: `${year}-${month+1}-${day}`
		}).then(() => {
			closeModal();
		});
	};

	return (
		<Modal closeModal={closeModal}>
			<div className={styles.creator}>
				<div className={styles.picker}>
					<button className={styles.arrow} onClick={() => changeDate(-1)}>
						<Icon icon={icons.arrowLeft} size={sizes.md} />
					</button>
					<div className={styles.weekDay}>
						{getWeekDay()}
					</div>
					<div className={styles.splitter}>-</div>
					<div className={styles.day}>
						{day}
					</div>
					<div className={styles.splitter}>-</div>
					<div className={styles.month}>
						{month+1}
					</div>
					<div className={styles.splitter}>-</div>

					<div className={styles.year}>
						{year}
					</div>
					<button className={styles.arrow} onClick={() => changeDate(1)}>
						<Icon icon={icons.arrowRight} size={sizes.md} />
					</button>
				</div>
				<input
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					value={title}
					className={styles.input}
					placeholder="Titel"
				/>
				<input
					onChange={(e) => setDescription(e.target.value)}
					type="text"
					value={description}
					className={styles.input}
					placeholder="Beschreibung"
				/>
				<div className={styles.actionWrapper}>
					{
						entry.id &&
							<button className={styles.delete} onClick={() => removeMeal(entry.id)}>
								Löschen
							</button>
					}
					<button className={styles.save} onClick={addNewMeal}>
						Speichern
					</button>
				</div>
			</div>
		</Modal>
	);
}

AddMeal.propTypes = {
	addMeal: PropTypes.func,
};
AddMeal.defaultProps = {
	addMeal: () => {},
};

export default AddMeal;