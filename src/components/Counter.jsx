import React, { useReducer } from 'react'

const DECREMENT = 'decrement';
const INCREMENT = 'increment';

const increment = payload => {
	return {
		type: INCREMENT,
		payload,
	};
};
const decrement = payload => {
	return {
		type: DECREMENT,
		payload,
	};
};
const reset = () => {
	return {
		type: 'reset',
	}
}

function reducer(state, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				counter: state.counter + action.payload,
			};
		case DECREMENT:
			return {
				counter: state.counter - action.payload,
			};
		case 'reset':
			return {
				counter: 0,
			}
	}
}

export const Counter = () => {
	const [state, dispatch] = useReducer(reducer, {
		counter: 0,
	})

	return (
		<>
			<button className="counter__button" onClick={() => dispatch(decrement(2))}>-2</button>
			<button className="counter__button" onClick={() => dispatch(decrement(1))}>-1</button>

			<span>{state.counter}</span>

			<button className="counter__button" onClick={() => dispatch(increment(1))}>+1</button>
			<button className="counter__button" onClick={() => dispatch(increment(2))}>+2</button>

			<button className="counter__button" onClick={() => dispatch({
				type: 'reset',
			})}>reset</button>


		</>
	)
}
