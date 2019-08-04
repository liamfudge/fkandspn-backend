const Reservations = (req, res, db) => {
	const { chefid, customerid, reservedate, menuid, status, address, comments, shopping, partysize } = req.body;
	db.insert({chefid: chefid, customerid: customerid, partysize: partysize, reservedate: reservedate, menuid: menuid, status: status, address: address, comments: comments, shopping: shopping})
		.into('reservations').returning('id').then(data => {
			res.json(data[0]);
		})
}

module.exports = {
	Reservations: Reservations
}