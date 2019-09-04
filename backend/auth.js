import { update, get } from '@binaris/shift-db';

/* @expose */
export async function addUserToDB(user) {
	console.log(`addUserToDB ${JSON.stringify(user)}`);
	const { name, email } = user;
	const emails = await update('emails', (savedEmails = []) => {
		const allEmails = [...savedEmails];
		console.log(`json allEmails: ${JSON.stringify(allEmails)}`);
		const exist = allEmails.find((item) => item.email === email);
		console.log(`exist: ${exist}`);
		if (!exist) {
			let m_user = {
				email: email,
				name: name,
				isAdmin: true,
			};
			allEmails.push(m_user);
		}
		return allEmails;
	});
	console.log(`emails: ${emails}`);
	return emails.length;
}

/* @expose */
export async function getUsers() {
	return (await get('emails')) || {};
}
