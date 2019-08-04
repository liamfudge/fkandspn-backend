const Allergy = (req, res, db) => {

	const { itemid, allergy, allergyid, status } = req.body;
	db.insert({itemid: itemid, allergy: allergy, allergyid: allergyid, status: status}).into('allergies').then(data => {
		res.json('success');
	})
	// db.select('*').from('allergies').where({itemid: itemid}).then(data => {
	// 	console.log(data.length);
	// 	if(data.length === 0){
	// 		db.insert({itemid: itemid, allergy: allergy, allergyid: allergyid, status: status}).into('allergies').then(data => {
	// 			res.json('success');
	// 		})
	// 	} else {
	// 		db('allergies')
	// 			.where({allergyid: allergyid})
	// 			.update({ status: status})
	// 			.then(function(result) {
	// 				console.log(result);
	// 				if(result === 0){
	// 					db.insert({itemid: itemid, allergy: allergy, allergyid: allergyid, status: status}).into('allergies').then(data => {
	// 						res.json('success');
	// 					})
	// 				} else {
	// 					db.select('*').from('allergies').where({itemid: itemid}).then(data => {
	// 						res.json(data);
	// 					})
	// 				}
						
	// 			})
	// 	}
	// })
		
}

module.exports = {
	Allergy: Allergy
}
