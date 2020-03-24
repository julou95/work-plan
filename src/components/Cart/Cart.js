import React, { useState, useEffect } from 'react';

import Icon, { icons, sizes } from '../Icon/Icon';
import CartEntry from './CartEntry';
import Categories from '../Categories/Categories';
import { categories } from '../../constants/categories';
import styles from './Cart.scss';

const Cart = ({ cartEntries, getCartEntries, updateCartEntry, addCartEntry, removeCartEntry }) => {
	useEffect(() => {
		getCartEntries();
	}, []);

	const [value, setValue] = useState('');
	const [category, setCategory] = useState(categories[0].icon);
	const [categoriesVisible, setCategoriesVisible] = useState(false);

	let filteredInactive = cartEntries.inActive.filter(entry => entry.title.toLowerCase().includes(value.toLowerCase()));
	filteredInactive = filteredInactive.length > 0 ? filteredInactive : cartEntries.inActive;

	const addEntry = () => {
		console.log('entry', category);
		addCartEntry({
			title: value,
			active: 'true',
			category,
		});
		setValue('');
		setCategory(categories[0].icon);
	};

	const updateHandler = (entry) => {
		updateCartEntry(entry);
		setValue('');
	};

	const getSortedEntries = (entries) => {
		const newArr = [];
		categories.forEach(cat => {
			entries.forEach(entry => {
				if (entry.category === cat.icon) {
					newArr.push(entry);
				}
			});
		});
		return newArr;
	};

	const sortedActive = getSortedEntries(cartEntries.active);
	const sortedInactive = getSortedEntries(filteredInactive);
	return (
		<div className={styles.cartWrapper}>
			<div className={styles.addToCart}>
				<input
					type="text"
					placeholder="Artikel hinzufügen..."
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className={styles.inputAdd}
				/>
				{
					value !== '' &&
						<div className={styles.visibleAddEntry}>
							<button className={styles.categorySwitch} onClick={() => setCategoriesVisible(true)}>
								{category}
							</button>
							<button className={styles.addToCartButton} onClick={addEntry}>
								<Icon icon={icons.shoppingCart} size={sizes.md} />
							</button>
						</div>
				}
			</div>
			{sortedActive.length > 0 &&
				<div className={styles.active}>
					{sortedActive.map(entry => <CartEntry key={entry.id} entry={entry} updateCartEntry={updateHandler} removeCartEntry={removeCartEntry} active />)}
				</div>
			}
			{sortedInactive.length > 0 &&
				<div className={styles.inActive}>
					{sortedInactive.map(entry => <CartEntry key={entry.id} entry={entry} updateCartEntry={updateHandler} removeCartEntry={removeCartEntry} />)}
				</div>
			}
			{categoriesVisible &&
				<Categories
					closeModal={() => setCategoriesVisible(false)}
					activeCategory={category}
					setCategory={setCategory}
				/>
			}
		</div>
	);
};

Cart.propTypes = {};
Cart.defaultProps = {};
Cart.displayName = '';

export default Cart