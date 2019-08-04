const Socials = (req, res, db) => {
	const { id, link, type, chefid, fetchadd } = req.body;
	db.select('*').from('socials').where({chefid: chefid}).then(data => {
		if(data.length > 0){
			if(fetchadd === "add"){
				if(id === ''){
					db.insert({link: link, type: type, chefid: chefid}).into('socials').then(data => {
						res.json('success');
					})
				} else {
					db.select('*').from('socials').where({id: id}).then(data => {
						if(data.length > 0){
							db('socials').where({id: id}).update({type: type, link: link}).then(data => {
								res.json('success');
							})
						} else {
							db.insert({link: link, type: type, chefid: chefid}).into('socials').then(data => {
								res.json('success');
							})
						}
					})
				}
			} else {
				res.json(data);
			}
		} else {
			if(fetchadd === "add"){
				db.insert({link: link, type: type, chefid: chefid}).into('socials').then(data => {
					res.json('success');
				})
			} else {
				res.json('error');
			}
		}		
	})
}

module.exports = {
	Socials: Socials
}