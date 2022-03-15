import React, { useState } from "react";
import Wrapper from "./components/Helpers/Wrapper";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	// gather users data in users list
	const addUserHandler = (uName, uAge) => {
		setUsersList(prevUsersList => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.floor(Math.random() * 5) + 1 },
			];
		});
	};

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</>
	);
}

export default App;
