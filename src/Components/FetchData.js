const FetchData = (req, res, db) => {
	const { table, id, field } = req.body;
	db.select('*').from(table).where({[field]: id}).then(data => {
		res.json(data);
	})
};

module.exports = {
	FetchData: FetchData
};