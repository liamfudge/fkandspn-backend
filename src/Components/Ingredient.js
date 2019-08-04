const Ingredient = (req, res, db) => {
	const { itemid, ingredient, measurement, amount } = req.body;
	db.insert({itemid: itemid, ingredient: ingredient, measurement: measurement, amount: amount}).into('ingredients').then(data => {
		res.json('success');
	})
};

module.exports = {
	Ingredient: Ingredient
};