import React from 'react';

import pen from '../assets/pen.png';
import profile from '../assets/profile.png';
import trash from '../assets/trash.png';

import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap';

/**
 * Render a single user entry.
 *
 * @typedef {object} Props
 * @prop {object} user -
 * @prop {function} onEdit - trigger edit operation
 * @prop {function} onRemove - delete item from the list
 *
 * @param {Props} props
 */

const User = ({ user, onEdit, onRemove }) => {
	const { email, name, isAdmin } = user;
	return (
		<ListGroupItem action variant="light">
			<Row className="align-items-center">
				<Col className="col-no-max-width pr-4">
					<img src={profile} alt="avatar" className="logo-navbar" />
				</Col>
				<Col className="col-9">
					<h5 className="font-weight-normal">{name}</h5>
					<h5 className="font-weight-light"> {email}</h5>
				</Col>

				<Col className="custom-control custom-switch">
					<input
						type="checkbox"
						className="custom-control-input"
						id="customSwitch1"
						checked={isAdmin}
					/>
					<label className="custom-control-label" for="customSwitch1">
						Admin
					</label>
				</Col>
				<Col className="col-no-max-width col-auto">
					<img src={trash} alt="remove" className="logo-navbar" />
				</Col>
			</Row>
		</ListGroupItem>
	);
};
export default User;
