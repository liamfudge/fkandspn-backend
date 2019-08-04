const UpdateTable = (req, res, db) => {
	const { table, id, dbfield, input } = req.body;

	db(table)
		.where('id', id)
		.update({ [dbfield]: input})
		.then(function(result) {
			if(result === 0){
				db.insert({id: id, [dbfield]: input}).into(table).then(data => {
					res.json('success');
				})
			} else {
				db.select('*').from(table).where({id: id}).then(data => {
					res.json(data[0]);
				})
			}
				
		})
}

module.exports = {
	UpdateTable: UpdateTable
}