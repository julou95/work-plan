import React, { useState } from 'react';
import cx from 'classnames';

import styles from './Modal.scss';


const Modal = ({ children, closeModal }) => {
	const [modalOpen, setModalOpen] = useState(true);

	const closeMe = () => {
		setModalOpen(false);
		setTimeout(() => {
			closeModal();
		}, 1000);
	};

	return (
		<>
			<div className={cx(styles.overlay, { [styles.closeOverlay]: !modalOpen })} onClick={closeMe} />
			<div className={cx(styles.modal, { [styles.close]: !modalOpen })}>
				{children}
			</div>
		</>
	);
};

Modal.propTypes = {};
Modal.defaultProps = {};
Modal.displayName = '';

export default Modal