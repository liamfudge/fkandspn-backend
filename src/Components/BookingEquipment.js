const BookingEquipment = (req, res, db) => {
	const { bookingid, equipment, equipmentid } = req.body;
	db.insert({bookingid: bookingid, equipment: equipment, equipmentid: equipmentid})
		.into('bookingequipment').then(data => {
			res.json(data);
		})
}

module.exports = {
	BookingEquipment: BookingEquipment
}