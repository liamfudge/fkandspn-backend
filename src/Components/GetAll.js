const GetAll = (req, res, db) => {
	const { table } = req.body;
	db.select('*').from(table).then(data => {
		res.json(data);
	})
};

module.exports = {
	GetAll: GetAll
};