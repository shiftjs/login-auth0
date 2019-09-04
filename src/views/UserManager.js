import React from 'react';
import { Container, Row, Input, Col, ListGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import User from '../components/User';
import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';

const UserManager = () => {
	const { loading, getUsersList, users } = useAuth0();
	let allUsers = [];
	try {
		getUsersList();
	} catch (err) {
		console.log(err);
	}
	if (loading || !users) {
		return <Loading />;
	}

	if (users) {
		const items = [...users];
		items.forEach((user) => {
			allUsers.push(<User key={user} user={user} />);
		});
	}

	return (
		<div className="next-steps my-5">
			<h2 className="my-5 text-center">{allUsers.length} Registered users</h2>
			<Row className="d-flex justify-content-between">
				<ListGroup variant="flush" className="w-100">
					{allUsers}
				</ListGroup>
			</Row>
		</div>
	);
};

export default UserManager;
