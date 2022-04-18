import React, { useMemo, useState } from 'react'

function createUser(name, surname) {
	const user = { name, surname };
	console.log(user);
	return user;
}

export const Memorized = () => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const user = useMemo(() => createUser(name, surname), [name, surname]);

	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>It is a useMemo</h2>
			<p>to see the difference - open a console</p>
			<input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
			<input type='text' placeholder='surname' value={surname} onChange={(e) => setSurname(e.target.value)} />

			<button onClick={() => setCount(count + 1)}> Clicked {count} times</button>
			<pre> {JSON.stringify(user, null, 2)}</pre>
		</div>
	)
}
