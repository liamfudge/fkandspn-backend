const AddData = (req, res, db) => {
	const { table, field, input, idref, idvalue } = req.body;
	db.insert({[field]: input, [idref]: idvalue}).into(table).returning('id').then(data => {
		res.json(data[0]);
	})
};

module.exports = {
	AddData: AddData
};