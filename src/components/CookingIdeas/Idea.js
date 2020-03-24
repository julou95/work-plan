import React, { useState } from 'react';
import cx from "classnames";

import styles from "./Idea.scss";
import Icon, {icons, sizes} from "../Icon/Icon";
import AddMeal from "./AddMeal";

const getDate = (date) => {
	const splitted = date.split('-');
	return `${splitted[2]}.${splitted[1]}.${splitted[0]}`;
};

const days = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];

const Idea = ({ idea, collapsed, setCollapsed, updateIdea, removeIdea }) => {
	const [editorOpen, setEditorOpen] = useState(false);

	const isCollapsed = collapsed === idea.id;
	const date = getDate(idea.date);
	const day = days[new Date(idea.date).getDay()];

	const openEditor = (e, value) => {
		setEditorOpen(value);
		e.stopPropagation();
	};

	return (
		<>
			<div key={idea.id} className={styles.idea}>
				<div className={styles.headRow} onClick={() => setCollapsed(idea.id !== collapsed ? idea.id : '')}>
					<div className={styles.headLeft}>
						<div className={styles.weekDay}>{day}</div>
						{idea.title}
					</div>
					<div className={styles.headRight}>
						<div className={styles.day}>{date}</div>
						<Icon className={cx(styles.icon, {[styles.collapsedIcon]: isCollapsed})} size={sizes.md} icon={icons.arrowDown} />
						<button onClick={(e) => openEditor(e, true)} className={styles.remove}>
							<Icon icon={icons.more} size={sizes.sm} />
						</button>
					</div>
				</div>
				<div className={cx(styles.ideaContent, { [styles.collapsed]: isCollapsed })}>
					{idea.description}
				</div>
			</div>
			{editorOpen && <AddMeal entry={idea} saveMeal={updateIdea} closeModal={() => setEditorOpen(false)} removeMeal={removeIdea} />}
		</>
	);
};

Idea.propTypes = {};
Idea.defaultProps = {};
Idea.displayName = '';

export default Idea