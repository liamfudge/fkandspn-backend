import { InjectionTest } from '../Tools/InjectionTest';
import { GenerateSalt } from '../Tools/GenerateSalt';

const Register = (req, res, bcrypt, db) => {
	const { email, password, firstname, surname, phone} = req.body;
	let emailResponse = InjectionTest(email);
	let passwordResponse = InjectionTest(password);
	let firstnameResponse = InjectionTest(firstname);
	let surnameResponse = InjectionTest(surname);
	let phoneResponse = InjectionTest(phone);
	if(emailResponse === 'success' && passwordResponse === 'success' &&
		firstnameResponse === 'success' && surnameResponse === 'success' &&
		phoneResponse === 'success'){

		let salt = GenerateSalt(8);
		const hash = bcrypt.hashSync(password + salt);
		db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email,
				salt: salt
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
				return trx('users')
					.returning('*')
					.insert({
						firstname: firstname,
						surname: surname,
						email: loginEmail[0],
						phone: phone,
						joined: new Date(),
						chefname: firstname + ' ' + surname
					}).then(user => {
						res.json(user[0]);
					})
			})
			.then(trx.commit).catch(trx.rollback)
		})

		.catch(err => res.status(400).json('error'))
	} else {
		res.json('error');
	}
}

module.exports = {
	Register: Register
}