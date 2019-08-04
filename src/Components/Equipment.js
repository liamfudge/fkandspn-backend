const Equipment = (req, res, db) => {
	const { itemid, equipment, equipmentid, status } = req.body;
		db.insert({itemid: itemid, equipment: equipment, equipmentid: equipmentid}).into('equipment').then(data => {
			res.json('success');
		})
}

module.exports = {
	Equipment: Equipment
}



// itemid
// equipment
// equipmentid