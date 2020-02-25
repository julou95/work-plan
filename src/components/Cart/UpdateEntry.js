import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Categories from '../Categories/Categories';
import styles from './UpdateEntry.scss';

const UpdateEntry = ({ entry, cancel, updateEntry, removeCartEntry }) => {
	const [categoriesVisible, setCategoriesVisible] = useState(false);
	const [title, setTitle] = useState(entry.title);
	const [category, setCategory] = useState(entry.category);

	const updateCartEntry = () => {
		updateEntry({
			...entry,
			title,
			category,
		});
		cancel();
	};

	const deleteEntry = () => {
		removeCartEntry(entry);
		cancel();
	};

	return (
		<>
			<Modal closeModal={cancel}>
				<div className={styles.editWrapper}>
					<div className={styles.updateGroup}>
						<input
							className={styles.editInput}
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<button className={styles.categoryButton} onClick={() => setCategoriesVisible(true)}>
							{category || '⚪️'}
						</button>
					</div>
					<div className={styles.updateGroup}>
						<button className={styles.deleteButton} onClick={deleteEntry}>
							Löschen
						</button>
						<button className={styles.saveButton} onClick={updateCartEntry}>
							Speichern
						</button>
					</div>
				</div>
			</Modal>
			{
				categoriesVisible &&
					<Categories
						closeModal={() => setCategoriesVisible(false)}
						activeCategory={category}
						setCategory={setCategory}
					/>
			}
		</>
	);
}

UpdateEntry.propTypes = {};
UpdateEntry.defaultProps = {};
UpdateEntry.displayName = '';

export default UpdateEntry