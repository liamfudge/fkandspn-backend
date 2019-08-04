const NoWorkDays = (req, res, db) => {
	const { chefid, workdate, status } = req.body;
	db.select('*').from('noworkdays').where({workdate: workdate}).then(data => {
		if(data.length === 0){
			db.insert({chefid: chefid, workdate: workdate, status: status})
				.into('noworkdays').then(data => {
					res.json(data);
				})
		}
	})
}



module.exports = {
	NoWorkDays: NoWorkDays
}

