const Messaging = (req, res, db) => {
	const { usr1, usr2, message, status, fetch } = req.body;
	if(fetch === 'fetch'){
		db.select('*').from('messages').where('usr1', '=', usr1).where('usr2', '=', usr2)
		.orWhere('usr2', '=', usr1).where('usr1', '=', usr2).then(data => {
			res.json(data)
		})
	} else {
		db.insert({usr1: usr1, usr2: usr2, message: message, status: status}).into('messages').then(data => {
			res.json('success');
		})
	}
}

module.exports = {
	Messaging: Messaging
}