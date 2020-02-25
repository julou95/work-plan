import React, { useState, useEffect } from 'react';

import styles from './CookingIdeas.scss';
import Loader from "../Loader/Loader";
import Icon, { icons, sizes } from '../Icon/Icon';
import AddMeal from './AddMeal';
import Idea from './Idea';


const CookingIdeas = ({ ideas, getIdeas, addIdea, removeIdea, updateIdea }) => {
	useEffect(() => {
		getIdeas();
	}, []);

	const [collapsed, setCollapsed] = useState();
	const [creatorOpen, setCreatorOpen] = useState(false);

	return (
		<div className={styles.recipeWrapper}>
			{creatorOpen && <AddMeal saveMeal={addIdea} closeModal={() => setCreatorOpen(false)} />}
			{!ideas.length &&
				<Loader site="third" />
			}
			{ideas?.map((idea) => (
				<Idea
					key={idea.id}
					idea={idea}
					collapsed={collapsed}
					setCollapsed={setCollapsed}
					updateIdea={updateIdea}
					removeIdea={removeIdea}
				/>
			))}
			<button className={styles.addMeal} onClick={() => setCreatorOpen(true)}>
				<Icon icon={icons.plus} size={sizes.md}/>
			</button>
		</div>
	)
};

export default CookingIdeas;