import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";
// import useCounter from "../hooks/use-counter";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "set-value-to-add";
const DECREMENT_COUNT = "decrement-count";
const SUBMIT_ADD_FORM = "submit-add-form";

const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			return {
				...state,
				count: state.count + 1,
			};

		case DECREMENT_COUNT:
			return {
				...state,
				count: state.count - 1,
			};

		case SET_VALUE_TO_ADD:
			return {
				...state,
				valueToAdd: action.payload,
			};

		case SUBMIT_ADD_FORM:
			return {
				...state,
				count: state.count + state.valueToAdd,
				valueToAdd: 0,
			};
		default:
			throw new Error("unexpected action type:" + action.type);
	}
};

function CounterPage({ initialCount }) {
	// const { count, increment } = useCounter(initialCount);
	// const [count, setCount] = useState(initialCount);
	// const [valueToAdd, setValueToAdd] = useState(0);
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0,
	});

	const increment = () => {
		dispatch({
			type: INCREMENT_COUNT,
		});
	};

	const decrement = () => {
		dispatch({
			type: DECREMENT_COUNT,
		});
	};

	const handleChange = (event) => {
		const value = parseInt(event.target.value) || 0;

		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: SUBMIT_ADD_FORM,
		});
		// setCount(count + valueToAdd);
		// setValueToAdd(0);
	};

	return (
		<Panel className="m-3">
			<h1 className="text-lg">Count is {state.count}</h1>
			<div className="flex flex-row">
				<Button onClick={increment}>Increment</Button>
				<Button onClick={decrement}>decrement</Button>
			</div>

			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					value={state.valueToAdd || ""}
					onChange={handleChange}
					type="number"
					className="p-1 m-3 bg-gray-50 border border-gray-300"
				></input>
				<Button>Add it!</Button>
			</form>
		</Panel>
	);
}

export default CounterPage;
