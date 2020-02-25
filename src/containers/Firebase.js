import { useState, cloneElement } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Firebase = ({ children, collection }) => {
	const [ideas, setIdeas] = useState([]);
	const [cartEntries, setCartEntries] = useState({ active: [], inActive: []});

	const firebaseConfig = {
		apiKey: process.env.FIRE_API_KEY,
		authDomain: process.env.FIRE_AUTH_DOMAIN,
		databaseURL: process.env.FIRE_DB_URL,
		projectId: process.env.FIRE_PROJECT_ID,
		storageBucket: process.env.FIRE_STORAGE_BUCKET,
		messagingSenderId: process.env.FIRE_MESSAGING_ID,
		appId: process.env.FIRE_APP_ID,
	};

	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}

	const db = firebase.firestore();

	const getIdeas = () => {
		db.collection(collection).get().then(querySnapshot => {
			const ideas = [];
			querySnapshot.forEach(doc => {
				const data = doc.data();
				ideas.push({
					id: doc.id,
					...JSON.parse(data.idea),
				});
			});

			const oldIdeas = ideas.filter((idea) => new Date(idea.date) < new Date().setHours(0,0,0,0));

			// removing older entries to clean up firestore automatically
			const newIdeas = ideas.filter((idea) => new Date(idea.date) >= new Date().setHours(0,0,0,0));
			oldIdeas.map(entry => removeIdea(entry.id, false));

			newIdeas.sort((a, b) => {
				a = new Date(a.date);
				b = new Date(b.date);
				return a < b ? -1 : a > b ? 1 : 0;
			});

			setIdeas(newIdeas.slice(0,7));
		})
	};

	const getCartEntries = () => {
		db.collection(collection).get().then(querySnapshot => {
			const entries = [];
			querySnapshot.forEach(doc => {
				const data = doc.data();
				entries.push({
					id: doc.id,
					...JSON.parse(data.entry),
				});
			});
			const active = entries.filter(entry => entry.active === 'true');
			const inActive = entries.filter(entry => entry.active === 'false');
			setCartEntries({
				active,
				inActive,
			});
		});
	};

	const updateCartEntry = (entry) => {
		db.collection(collection).doc(entry.id).update({
			entry: JSON.stringify({
				title: entry.title,
				amount: entry.amount,
				active: entry.active,
				category: entry.category,
			}),
		}).then(() => {
			getCartEntries();
		});
	};

	const addCartEntry = (idea) => {
		return db.collection(collection).add({
			entry: JSON.stringify(idea),
		}).then((response) => {
			getCartEntries()
		});
	};

	const removeCartEntry = (entry) => {
		return db.collection(collection).doc(entry.id).delete().then(() => {
			getCartEntries();
		});
	};

	const addIdea = (idea) => {
		return db.collection(collection).add({
			idea: JSON.stringify(idea),
		}).then(() => getIdeas());
	};

	const updateIdea = (idea) => {
		return db.collection(collection).doc(idea.id).update({
			idea: JSON.stringify({
				title: idea.title,
				description: idea.description,
				date: idea.date,
			}),
		}).then(() => getIdeas());
	};

	const removeIdea = (id, shouldFetch = true) => {
		db.collection(collection).doc(id).delete().then(() => {
			if (shouldFetch) getIdeas();
		});
	};

	return cloneElement(children, {
		cartEntries,
		getCartEntries,
		ideas,
		getIdeas,
		addIdea,
		updateIdea,
		removeIdea,
		updateCartEntry,
		addCartEntry,
		removeCartEntry,
	});
};

Firebase.propTypes = {};
Firebase.defaultProps = {};
Firebase.displayName = '';

export default Firebase