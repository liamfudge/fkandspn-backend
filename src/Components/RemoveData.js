const RemoveData = (req, res, db) => {
	const { table, field, input } = req.body;
		db(table).where({ [field]: input}).del().then(data => {
			res.json('success');
		})
}

module.exports = {
	RemoveData: RemoveData
}