const BookingIngredients = (req, res, db) => {
	const { bookingid, ingredient, amount, measurment } = req.body;
	db.insert({bookingid: bookingid, ingredient: ingredient, amount: amount, measurment: measurment})
		.into('bookingingredient').then(data => {
			res.json(data);
		})
}


module.exports = {
	BookingIngredients: BookingIngredients
}