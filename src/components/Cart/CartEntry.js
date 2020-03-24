import React, { useState } from 'react';
import cx from 'classnames';

import Icon, { icons, sizes } from '../Icon/Icon';
import UpdateEntry from './UpdateEntry';

import styles from './CartEntry.scss';

const CartEntry = ({ entry, updateCartEntry, removeCartEntry, active = false }) => {
	const [openMore, setOpenMore] = useState(false);

	const clickHandler = () => {
		updateCartEntry({
			...entry,
			active: JSON.stringify(!active),
		})
	};

	const updateEntry = (entry) => {
		updateCartEntry(entry);
	};

	return (
		<>
			<div key={entry.id} className={cx(styles.entry, {[styles.checked]: !active})}>
				<div className={styles.title} onClick={clickHandler}>{entry.title}</div>
				<div className={styles.category}>
					{entry.category || '⚪️'}
					<button className={styles.moreButton} onClick={() => setOpenMore(true)}>
						<Icon icon={icons.more} size={sizes.sm}/>
					</button>
				</div>
			</div>
			{
				openMore &&
					<UpdateEntry entry={entry} cancel={() => setOpenMore(false)} updateEntry={updateEntry} removeCartEntry={removeCartEntry} />
			}
		</>
	);
};

CartEntry.propTypes = {};
CartEntry.defaultProps = {};
CartEntry.displayName = '';

export default CartEntry