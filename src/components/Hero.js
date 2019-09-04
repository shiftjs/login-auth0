import React from 'react';

import logo from '../assets/logo.svg';

const Hero = () => (
	<div className="text-center hero my-5">
		<img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
		<h1 className="mb-4">Reshuffle Sample Project</h1>

		<p className="lead">
			This is a sample application that demonstrates an authentication flow for
			an Reshuffle platform, using <a href="https://reactjs.org">React.js</a>{' '}
			and <a href="https://auth0.com">Auth0</a>
		</p>
	</div>
);

export default Hero;
