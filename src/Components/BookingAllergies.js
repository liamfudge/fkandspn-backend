const BookingAllergies = (req, res, db) => {
	const { bookingid, allergy, allergyid, status } = req.body;
	db.insert({bookingid: bookingid, allergy: allergy, allergyid: allergyid, status: status})
		.into('bookingallergies').then(data => {
			res.json(data);
		})
}

module.exports = {
	BookingAllergies: BookingAllergies
}