import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = props => {
	const enteredNameRef = useRef();
	const enteredUserAgeRef = useRef();

	// const [enteredUsername, setEnteredUsername] = useState("");
	// const [enteredAge, setEnteredAge] = useState("");

	const [error, setError] = useState();

	// handling username input
	// const usernameChangeHandler = event => {
	// 	setEnteredUsername(event.target.value);
	// };

	// handling user age input
	// const ageChangeHandler = event => {
	// 	setEnteredAge(event.target.value);
	// };

	// handling user data
	const addUserHandler = event => {
		event.preventDefault();
		const enteredName = enteredNameRef.current.value;
		const enteredUserAge = enteredUserAgeRef.current.value;
		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: "Invalid input!",
				message: "Please enter valid name and age (none-empty values)",
			});
			return;
		}
		if (+enteredUserAge < 1) {
			setError({
				title: "Invalid age!",
				message: "Age must be greater than 0",
			});
			return;
		}
		// props.onAddUser(enteredUsername, enteredAge);
		// setEnteredUsername("");
		// setEnteredAge("");

		props.onAddUser(enteredName, enteredUserAge);
		enteredNameRef.current.value = "";
		enteredUserAgeRef.current.value = "";
	};

	// reset error to toggle modal
	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						// value={enteredUsername}
						// onChange={usernameChangeHandler}
						ref={enteredNameRef}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						// value={enteredAge}
						// onChange={ageChangeHandler}
						ref={enteredUserAgeRef}
					/>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
