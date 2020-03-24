import React from 'react';
import cx from 'classnames';

import Modal from '../Modal/Modal';

import { categories } from '../../constants/categories';
import styles from './Categories.scss';

const Categories = ({ activeCategory, setCategory, closeModal }) => {
	const setCat = (cat) => {
		setCategory(cat);
		closeModal();
	};

	return (
		<Modal closeModal={closeModal}>
			{
				categories.map(cat => (
					<div
						className={cx(styles.category, { [styles.active]: activeCategory === cat.icon })}
						onClick={() => setCat(cat.icon)}
					>
						<div className={styles.left}>
							<div className={styles.icon}>
								{cat.icon}
							</div>
							{cat.description}
						</div>
						<div>
							{
								activeCategory === cat.icon && <div className={styles.activeDot} />
							}
						</div>
					</div>
				))
			}
		</Modal>
	);
};

export default Categories